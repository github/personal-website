/* Copyright (c) 2018, Google Inc.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. */

#include <openssl_grpc/ssl.h>

#include <openssl_grpc/bytestring.h>

#include "internal.h"


namespace bssl {

constexpr int kHandoffVersion = 0;
constexpr int kHandbackVersion = 0;

bool SSL_serialize_handoff(const SSL *ssl, CBB *out) {
  const SSL3_STATE *const s3 = ssl->s3;
  if (!ssl->server ||
      s3->hs == nullptr ||
      s3->rwstate != SSL_HANDOFF) {
    return false;
  }

  CBB seq;
  Span<const uint8_t> transcript = s3->hs->transcript.buffer();
  if (!CBB_add_asn1(out, &seq, CBS_ASN1_SEQUENCE) ||
      !CBB_add_asn1_uint64(&seq, kHandoffVersion) ||
      !CBB_add_asn1_octet_string(&seq, transcript.data(), transcript.size()) ||
      !CBB_add_asn1_octet_string(&seq,
                                 reinterpret_cast<uint8_t *>(s3->hs_buf->data),
                                 s3->hs_buf->length) ||
      !CBB_flush(out)) {
    return false;
  }

  return true;
}

bool SSL_decline_handoff(SSL *ssl) {
  const SSL3_STATE *const s3 = ssl->s3;
  if (!ssl->server ||
      s3->hs == nullptr ||
      s3->rwstate != SSL_HANDOFF) {
    return false;
  }

  ssl->handoff = false;
  return true;
}

bool SSL_apply_handoff(SSL *ssl, Span<const uint8_t> handoff) {
  if (ssl->method->is_dtls) {
    return false;
  }

  CBS seq, handoff_cbs(handoff);
  uint64_t handoff_version;
  if (!CBS_get_asn1(&handoff_cbs, &seq, CBS_ASN1_SEQUENCE) ||
      !CBS_get_asn1_uint64(&seq, &handoff_version) ||
      handoff_version != kHandoffVersion) {
    return false;
  }

  CBS transcript, hs_buf;
  if (!CBS_get_asn1(&seq, &transcript, CBS_ASN1_OCTETSTRING) ||
      !CBS_get_asn1(&seq, &hs_buf, CBS_ASN1_OCTETSTRING)) {
    return false;
  }

  SSL_set_accept_state(ssl);

  SSL3_STATE *const s3 = ssl->s3;
  s3->v2_hello_done = true;
  s3->has_message = true;

  s3->hs_buf.reset(BUF_MEM_new());
  if (!s3->hs_buf ||
      !BUF_MEM_append(s3->hs_buf.get(), CBS_data(&hs_buf), CBS_len(&hs_buf))) {
    return false;
  }

  if (CBS_len(&transcript) != 0) {
    s3->hs->transcript.Update(transcript);
    s3->is_v2_hello = true;
    ssl_do_msg_callback(ssl, 0 /* read */, 0 /* V2ClientHello */, transcript);
  }

  return true;
}

bool SSL_serialize_handback(const SSL *ssl, CBB *out) {
  if (!ssl->server ||
      !ssl->s3->initial_handshake_complete ||
      ssl->method->is_dtls ||
      ssl->version < TLS1_VERSION) {
    return false;
  }

  const SSL3_STATE *const s3 = ssl->s3;
  size_t hostname_len = 0;
  if (s3->hostname) {
    hostname_len = strlen(s3->hostname.get());
  }

  size_t iv_len = 0;
  const uint8_t *read_iv = nullptr, *write_iv = nullptr;
  if (ssl->version == TLS1_VERSION &&
      SSL_CIPHER_is_block_cipher(s3->aead_read_ctx->cipher()) &&
      (!s3->aead_read_ctx->GetIV(&read_iv, &iv_len) ||
       !s3->aead_write_ctx->GetIV(&write_iv, &iv_len))) {
    return false;
  }

  CBB seq;
  if (!CBB_add_asn1(out, &seq, CBS_ASN1_SEQUENCE) ||
      !CBB_add_asn1_uint64(&seq, kHandbackVersion) ||
      !CBB_add_asn1_uint64(&seq, ssl->version) ||
      !CBB_add_asn1_uint64(&seq, ssl->conf_max_version) ||
      !CBB_add_asn1_uint64(&seq, ssl->conf_min_version) ||
      !CBB_add_asn1_uint64(&seq, ssl->max_send_fragment) ||
      !CBB_add_asn1_octet_string(&seq, s3->read_sequence,
                                 sizeof(s3->read_sequence)) ||
      !CBB_add_asn1_octet_string(&seq, s3->write_sequence,
                                 sizeof(s3->write_sequence)) ||
      !CBB_add_asn1_octet_string(&seq, s3->server_random,
                                 sizeof(s3->server_random)) ||
      !CBB_add_asn1_octet_string(&seq, s3->client_random,
                                 sizeof(s3->client_random)) ||
      !CBB_add_asn1_octet_string(&seq, read_iv, iv_len) ||
      !CBB_add_asn1_octet_string(&seq, write_iv, iv_len) ||
      !CBB_add_asn1_bool(&seq, s3->session_reused) ||
      !CBB_add_asn1_bool(&seq, s3->send_connection_binding) ||
      !CBB_add_asn1_bool(&seq, s3->tlsext_channel_id_valid) ||
      !ssl_session_serialize(s3->established_session.get(), &seq) ||
      !CBB_add_asn1_octet_string(&seq, s3->next_proto_negotiated.data(),
                                 s3->next_proto_negotiated.size()) ||
      !CBB_add_asn1_octet_string(&seq, s3->alpn_selected.data(),
                                 s3->alpn_selected.size()) ||
      !CBB_add_asn1_octet_string(
          &seq, reinterpret_cast<uint8_t *>(s3->hostname.get()),
          hostname_len) ||
      !CBB_add_asn1_octet_string(&seq, s3->tlsext_channel_id,
                                 sizeof(s3->tlsext_channel_id)) ||
      !CBB_add_asn1_uint64(&seq, ssl->options) ||
      !CBB_add_asn1_uint64(&seq, ssl->mode) ||
      !CBB_add_asn1_uint64(&seq, ssl->max_cert_list) ||
      !CBB_add_asn1_bool(&seq, ssl->quiet_shutdown) ||
      !CBB_add_asn1_bool(&seq, ssl->tlsext_channel_id_enabled) ||
      !CBB_add_asn1_bool(&seq, ssl->retain_only_sha256_of_client_certs) ||
      !CBB_flush(out)) {
    return false;
  }

  return true;
}

bool SSL_apply_handback(SSL *ssl, Span<const uint8_t> handback) {
  if (ssl->do_handshake != nullptr ||
      ssl->method->is_dtls) {
    return false;
  }

  SSL3_STATE *const s3 = ssl->s3;
  uint64_t handback_version, version, conf_max_version, conf_min_version,
      max_send_fragment, options, mode, max_cert_list;
  CBS seq, read_seq, write_seq, server_rand, client_rand, read_iv, write_iv,
      next_proto, alpn, hostname, channel_id;
  int session_reused, send_connection_binding, channel_id_valid,
      quiet_shutdown, channel_id_enabled, retain_only_sha256;

  CBS handback_cbs(handback);
  if (!CBS_get_asn1(&handback_cbs, &seq, CBS_ASN1_SEQUENCE) ||
      !CBS_get_asn1_uint64(&seq, &handback_version) ||
      handback_version != kHandbackVersion) {
    return false;
  }

  if (!CBS_get_asn1_uint64(&seq, &version) ||
      !CBS_get_asn1_uint64(&seq, &conf_max_version) ||
      !CBS_get_asn1_uint64(&seq, &conf_min_version) ||
      !CBS_get_asn1_uint64(&seq, &max_send_fragment) ||
      !CBS_get_asn1(&seq, &read_seq, CBS_ASN1_OCTETSTRING) ||
      CBS_len(&read_seq) != sizeof(s3->read_sequence) ||
      !CBS_get_asn1(&seq, &write_seq, CBS_ASN1_OCTETSTRING) ||
      CBS_len(&write_seq) != sizeof(s3->write_sequence) ||
      !CBS_get_asn1(&seq, &server_rand, CBS_ASN1_OCTETSTRING) ||
      CBS_len(&server_rand) != sizeof(s3->server_random) ||
      !CBS_copy_bytes(&server_rand, s3->server_random,
                      sizeof(s3->server_random)) ||
      !CBS_get_asn1(&seq, &client_rand, CBS_ASN1_OCTETSTRING) ||
      CBS_len(&client_rand) != sizeof(s3->client_random) ||
      !CBS_copy_bytes(&client_rand, s3->client_random,
                      sizeof(s3->client_random)) ||
      !CBS_get_asn1(&seq, &read_iv, CBS_ASN1_OCTETSTRING) ||
      !CBS_get_asn1(&seq, &write_iv, CBS_ASN1_OCTETSTRING) ||
      !CBS_get_asn1_bool(&seq, &session_reused) ||
      !CBS_get_asn1_bool(&seq, &send_connection_binding) ||
      !CBS_get_asn1_bool(&seq, &channel_id_valid)) {
    return false;
  }

  s3->established_session =
      SSL_SESSION_parse(&seq, ssl->ctx->x509_method, ssl->ctx->pool);

  if (!s3->established_session ||
      !CBS_get_asn1(&seq, &next_proto, CBS_ASN1_OCTETSTRING) ||
      !CBS_get_asn1(&seq, &alpn, CBS_ASN1_OCTETSTRING) ||
      !CBS_get_asn1(&seq, &hostname, CBS_ASN1_OCTETSTRING) ||
      !CBS_get_asn1(&seq, &channel_id, CBS_ASN1_OCTETSTRING) ||
      CBS_len(&channel_id) != sizeof(s3->tlsext_channel_id) ||
      !CBS_copy_bytes(&channel_id, s3->tlsext_channel_id,
                      sizeof(s3->tlsext_channel_id)) ||
      !CBS_get_asn1_uint64(&seq, &options) ||
      !CBS_get_asn1_uint64(&seq, &mode) ||
      !CBS_get_asn1_uint64(&seq, &max_cert_list) ||
      !CBS_get_asn1_bool(&seq, &quiet_shutdown) ||
      !CBS_get_asn1_bool(&seq, &channel_id_enabled) ||
      !CBS_get_asn1_bool(&seq, &retain_only_sha256)) {
    return false;
  }

  ssl->version = version;
  ssl->conf_max_version = conf_max_version;
  ssl->conf_min_version = conf_min_version;
  ssl->max_send_fragment = max_send_fragment;
  ssl->do_handshake = ssl_server_handshake;
  ssl->server = true;
  ssl->options = options;
  ssl->mode = mode;
  ssl->max_cert_list = max_cert_list;

  s3->hs.reset();
  s3->have_version = true;
  s3->initial_handshake_complete = true;
  s3->session_reused = session_reused;
  s3->send_connection_binding = send_connection_binding;
  s3->tlsext_channel_id_valid = channel_id_valid;
  s3->next_proto_negotiated.CopyFrom(next_proto);
  s3->alpn_selected.CopyFrom(alpn);

  const size_t hostname_len = CBS_len(&hostname);
  if (hostname_len == 0) {
    s3->hostname.reset();
  } else {
    char *hostname_str = nullptr;
    if (!CBS_strdup(&hostname, &hostname_str)) {
      return false;
    }
    s3->hostname.reset(hostname_str);
  }

  ssl->quiet_shutdown = quiet_shutdown;
  ssl->tlsext_channel_id_enabled = channel_id_enabled;
  ssl->retain_only_sha256_of_client_certs = retain_only_sha256;

  Array<uint8_t> key_block;
  if (!tls1_configure_aead(ssl, evp_aead_open, &key_block,
                           s3->established_session->cipher, read_iv) ||
      !tls1_configure_aead(ssl, evp_aead_seal, &key_block,
                           s3->established_session->cipher, write_iv)) {
    return false;
  }

  if (!CBS_copy_bytes(&read_seq, s3->read_sequence,
                      sizeof(s3->read_sequence)) ||
      !CBS_copy_bytes(&write_seq, s3->write_sequence,
                      sizeof(s3->write_sequence))) {
    return false;
  }

  return true;
}

}  // namespace bssl
