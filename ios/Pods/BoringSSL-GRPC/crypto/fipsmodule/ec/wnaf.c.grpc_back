/* Originally written by Bodo Moeller for the OpenSSL project.
 * ====================================================================
 * Copyright (c) 1998-2005 The OpenSSL Project.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. All advertising materials mentioning features or use of this
 *    software must display the following acknowledgment:
 *    "This product includes software developed by the OpenSSL Project
 *    for use in the OpenSSL Toolkit. (http://www.openssl.org/)"
 *
 * 4. The names "OpenSSL Toolkit" and "OpenSSL Project" must not be used to
 *    endorse or promote products derived from this software without
 *    prior written permission. For written permission, please contact
 *    openssl-core@openssl.org.
 *
 * 5. Products derived from this software may not be called "OpenSSL"
 *    nor may "OpenSSL" appear in their names without prior written
 *    permission of the OpenSSL Project.
 *
 * 6. Redistributions of any form whatsoever must retain the following
 *    acknowledgment:
 *    "This product includes software developed by the OpenSSL Project
 *    for use in the OpenSSL Toolkit (http://www.openssl.org/)"
 *
 * THIS SOFTWARE IS PROVIDED BY THE OpenSSL PROJECT ``AS IS'' AND ANY
 * EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE OpenSSL PROJECT OR
 * ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 * ====================================================================
 *
 * This product includes cryptographic software written by Eric Young
 * (eay@cryptsoft.com).  This product includes software written by Tim
 * Hudson (tjh@cryptsoft.com).
 *
 */
/* ====================================================================
 * Copyright 2002 Sun Microsystems, Inc. ALL RIGHTS RESERVED.
 *
 * Portions of the attached software ("Contribution") are developed by
 * SUN MICROSYSTEMS, INC., and are contributed to the OpenSSL project.
 *
 * The Contribution is licensed pursuant to the OpenSSL open source
 * license provided above.
 *
 * The elliptic curve binary polynomial software is originally written by
 * Sheueling Chang Shantz and Douglas Stebila of Sun Microsystems
 * Laboratories. */

#include <openssl/ec.h>

#include <string.h>

#include <openssl/bn.h>
#include <openssl/err.h>
#include <openssl/mem.h>
#include <openssl/thread.h>
#include <openssl/type_check.h>

#include "internal.h"
#include "../bn/internal.h"
#include "../../internal.h"


// This file implements the wNAF-based interleaving multi-exponentiation method
// at:
//   http://link.springer.com/chapter/10.1007%2F3-540-45537-X_13
//   http://www.bmoeller.de/pdf/TI-01-08.multiexp.pdf

int ec_compute_wNAF(const EC_GROUP *group, int8_t *out, const EC_SCALAR *scalar,
                    size_t bits, int w) {
  // 'int8_t' can represent integers with absolute values less than 2^7.
  if (w <= 0 || w > 7 || bits == 0) {
    OPENSSL_PUT_ERROR(EC, ERR_R_INTERNAL_ERROR);
    return 0;
  }
  int bit = 1 << w;         // at most 128
  int next_bit = bit << 1;  // at most 256
  int mask = next_bit - 1;  // at most 255

  int window_val = scalar->words[0] & mask;
  size_t j = 0;
  // If j+w+1 >= bits, window_val will not increase.
  while (window_val != 0 || j + w + 1 < bits) {
    int digit = 0;

    // 0 <= window_val <= 2^(w+1)

    if (window_val & 1) {
      // 0 < window_val < 2^(w+1)

      if (window_val & bit) {
        digit = window_val - next_bit;  // -2^w < digit < 0

#if 1  // modified wNAF
        if (j + w + 1 >= bits) {
          // special case for generating modified wNAFs:
          // no new bits will be added into window_val,
          // so using a positive digit here will decrease
          // the total length of the representation

          digit = window_val & (mask >> 1);  // 0 < digit < 2^w
        }
#endif
      } else {
        digit = window_val;  // 0 < digit < 2^w
      }

      if (digit <= -bit || digit >= bit || !(digit & 1)) {
        OPENSSL_PUT_ERROR(EC, ERR_R_INTERNAL_ERROR);
        return 0;
      }

      window_val -= digit;

      // Now window_val is 0 or 2^(w+1) in standard wNAF generation;
      // for modified window NAFs, it may also be 2^w.
      if (window_val != 0 && window_val != next_bit && window_val != bit) {
        OPENSSL_PUT_ERROR(EC, ERR_R_INTERNAL_ERROR);
        return 0;
      }
    }

    out[j++] = digit;

    window_val >>= 1;
    window_val +=
        bit * bn_is_bit_set_words(scalar->words, group->order.width, j + w);

    if (window_val > next_bit) {
      OPENSSL_PUT_ERROR(EC, ERR_R_INTERNAL_ERROR);
      return 0;
    }
  }

  // Fill the rest of the wNAF with zeros.
  if (j > bits + 1) {
    OPENSSL_PUT_ERROR(EC, ERR_R_INTERNAL_ERROR);
    return 0;
  }
  for (size_t i = j; i < bits + 1; i++) {
    out[i] = 0;
  }

  return 1;
}

// TODO: table should be optimised for the wNAF-based implementation,
//       sometimes smaller windows will give better performance
//       (thus the boundaries should be increased)
static size_t window_bits_for_scalar_size(size_t b) {
  if (b >= 300) {
    return 4;
  }

  if (b >= 70) {
    return 3;
  }

  if (b >= 20) {
    return 2;
  }

  return 1;
}

// EC_WNAF_MAX_WINDOW_BITS is the largest value returned by
// |window_bits_for_scalar_size|.
#define EC_WNAF_MAX_WINDOW_BITS 4

// compute_precomp sets |out[i]| to a newly-allocated |EC_POINT| containing
// (2*i+1)*p, for i from 0 to |len|. It returns one on success and
// zero on error.
static int compute_precomp(const EC_GROUP *group, EC_POINT **out,
                           const EC_POINT *p, size_t len, BN_CTX *ctx) {
  out[0] = EC_POINT_new(group);
  if (out[0] == NULL ||
      !EC_POINT_copy(out[0], p)) {
    return 0;
  }

  int ret = 0;
  EC_POINT *two_p = EC_POINT_new(group);
  if (two_p == NULL ||
      !EC_POINT_dbl(group, two_p, p, ctx)) {
    goto err;
  }

  for (size_t i = 1; i < len; i++) {
    out[i] = EC_POINT_new(group);
    if (out[i] == NULL ||
        !EC_POINT_add(group, out[i], out[i - 1], two_p, ctx)) {
      goto err;
    }
  }

  ret = 1;

err:
  EC_POINT_free(two_p);
  return ret;
}

static int lookup_precomp(const EC_GROUP *group, EC_POINT *out,
                          EC_POINT *const *precomp, int digit, BN_CTX *ctx) {
  if (digit < 0) {
    digit = -digit;
    return EC_POINT_copy(out, precomp[digit >> 1]) &&
           EC_POINT_invert(group, out, ctx);
  }

  return EC_POINT_copy(out, precomp[digit >> 1]);
}

int ec_wNAF_mul(const EC_GROUP *group, EC_POINT *r, const EC_SCALAR *g_scalar,
                const EC_POINT *p, const EC_SCALAR *p_scalar, BN_CTX *ctx) {
  BN_CTX *new_ctx = NULL;
  EC_POINT *precomp_storage[2 * (1 << (EC_WNAF_MAX_WINDOW_BITS - 1))] = {NULL};
  EC_POINT **g_precomp = NULL, **p_precomp = NULL;
  int8_t g_wNAF[EC_MAX_SCALAR_BYTES * 8 + 1];
  int8_t p_wNAF[EC_MAX_SCALAR_BYTES * 8 + 1];
  EC_POINT *tmp = NULL;
  int ret = 0;

  if (ctx == NULL) {
    ctx = new_ctx = BN_CTX_new();
    if (ctx == NULL) {
      goto err;
    }
  }

  size_t bits = BN_num_bits(&group->order);
  size_t wsize = window_bits_for_scalar_size(bits);
  size_t wNAF_len = bits + 1;
  size_t precomp_len = (size_t)1 << (wsize - 1);

  OPENSSL_COMPILE_ASSERT(
      OPENSSL_ARRAY_SIZE(g_wNAF) == OPENSSL_ARRAY_SIZE(p_wNAF),
      g_wNAF_and_p_wNAF_are_different_sizes);

  if (wNAF_len > OPENSSL_ARRAY_SIZE(g_wNAF) ||
      2 * precomp_len > OPENSSL_ARRAY_SIZE(precomp_storage)) {
    OPENSSL_PUT_ERROR(EC, ERR_R_INTERNAL_ERROR);
    goto err;
  }

  // TODO(davidben): |mul_public| is for ECDSA verification which can assume
  // non-NULL inputs, but this code is also used for |mul| which cannot. It's
  // not constant-time, so replace the generic |mul| and remove the NULL checks.
  size_t total_precomp = 0;
  if (g_scalar != NULL) {
    const EC_POINT *g = EC_GROUP_get0_generator(group);
    if (g == NULL) {
      OPENSSL_PUT_ERROR(EC, EC_R_UNDEFINED_GENERATOR);
      goto err;
    }
    g_precomp = precomp_storage + total_precomp;
    total_precomp += precomp_len;
    if (!ec_compute_wNAF(group, g_wNAF, g_scalar, bits, wsize) ||
        !compute_precomp(group, g_precomp, g, precomp_len, ctx)) {
      goto err;
    }
  }

  if (p_scalar != NULL) {
    p_precomp = precomp_storage + total_precomp;
    total_precomp += precomp_len;
    if (!ec_compute_wNAF(group, p_wNAF, p_scalar, bits, wsize) ||
        !compute_precomp(group, p_precomp, p, precomp_len, ctx)) {
      goto err;
    }
  }

  tmp = EC_POINT_new(group);
  if (tmp == NULL ||
      // |window_bits_for_scalar_size| assumes we do this step.
      !EC_POINTs_make_affine(group, total_precomp, precomp_storage, ctx)) {
    goto err;
  }

  int r_is_at_infinity = 1;
  for (size_t k = wNAF_len - 1; k < wNAF_len; k--) {
    if (!r_is_at_infinity && !EC_POINT_dbl(group, r, r, ctx)) {
      goto err;
    }

    if (g_scalar != NULL) {
      if (g_wNAF[k] != 0) {
        if (!lookup_precomp(group, tmp, g_precomp, g_wNAF[k], ctx)) {
          goto err;
        }
        if (r_is_at_infinity) {
          if (!EC_POINT_copy(r, tmp)) {
            goto err;
          }
          r_is_at_infinity = 0;
        } else if (!EC_POINT_add(group, r, r, tmp, ctx)) {
          goto err;
        }
      }
    }

    if (p_scalar != NULL) {
      if (p_wNAF[k] != 0) {
        if (!lookup_precomp(group, tmp, p_precomp, p_wNAF[k], ctx)) {
          goto err;
        }
        if (r_is_at_infinity) {
          if (!EC_POINT_copy(r, tmp)) {
            goto err;
          }
          r_is_at_infinity = 0;
        } else if (!EC_POINT_add(group, r, r, tmp, ctx)) {
          goto err;
        }
      }
    }
  }

  if (r_is_at_infinity &&
      !EC_POINT_set_to_infinity(group, r)) {
    goto err;
  }

  ret = 1;

err:
  BN_CTX_free(new_ctx);
  EC_POINT_free(tmp);
  OPENSSL_cleanse(&g_wNAF, sizeof(g_wNAF));
  OPENSSL_cleanse(&p_wNAF, sizeof(p_wNAF));
  for (size_t i = 0; i < OPENSSL_ARRAY_SIZE(precomp_storage); i++) {
    EC_POINT_free(precomp_storage[i]);
  }
  return ret;
}
