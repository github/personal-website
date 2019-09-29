/* Copyright (C) 1995-1998 Eric Young (eay@cryptsoft.com)
 * All rights reserved.
 *
 * This package is an SSL implementation written
 * by Eric Young (eay@cryptsoft.com).
 * The implementation was written so as to conform with Netscapes SSL.
 *
 * This library is free for commercial and non-commercial use as long as
 * the following conditions are aheared to.  The following conditions
 * apply to all code found in this distribution, be it the RC4, RSA,
 * lhash, DES, etc., code; not just the SSL code.  The SSL documentation
 * included with this distribution is covered by the same copyright terms
 * except that the holder is Tim Hudson (tjh@cryptsoft.com).
 *
 * Copyright remains Eric Young's, and as such any Copyright notices in
 * the code are not to be removed.
 * If this package is used in a product, Eric Young should be given attribution
 * as the author of the parts of the library used.
 * This can be in the form of a textual message at program startup or
 * in documentation (online or textual) provided with the package.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. All advertising materials mentioning features or use of this software
 *    must display the following acknowledgement:
 *    "This product includes cryptographic software written by
 *     Eric Young (eay@cryptsoft.com)"
 *    The word 'cryptographic' can be left out if the rouines from the library
 *    being used are not cryptographic related :-).
 * 4. If you include any Windows specific code (or a derivative thereof) from
 *    the apps directory (application code) you must include an acknowledgement:
 *    "This product includes software written by Tim Hudson (tjh@cryptsoft.com)"
 *
 * THIS SOFTWARE IS PROVIDED BY ERIC YOUNG ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * The licence and distribution terms for any publically available version or
 * derivative of this code cannot be changed.  i.e. this code cannot simply be
 * copied and put under another distribution licence
 * [including the GNU Public Licence.]
 */
/* ====================================================================
 * Copyright (c) 1998-2001 The OpenSSL Project.  All rights reserved.
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
 * Hudson (tjh@cryptsoft.com). */

#include <openssl/bn.h>

#include <assert.h>

#include <openssl/err.h>

#include "internal.h"


static BN_ULONG word_is_odd_mask(BN_ULONG a) { return (BN_ULONG)0 - (a & 1); }

static void maybe_rshift1_words(BN_ULONG *a, BN_ULONG mask, BN_ULONG *tmp,
                                size_t num) {
  bn_rshift1_words(tmp, a, num);
  bn_select_words(a, mask, tmp, a, num);
}

static void maybe_rshift1_words_carry(BN_ULONG *a, BN_ULONG carry,
                                      BN_ULONG mask, BN_ULONG *tmp,
                                      size_t num) {
  maybe_rshift1_words(a, mask, tmp, num);
  if (num != 0) {
    carry &= mask;
    a[num - 1] |= carry << (BN_BITS2-1);
  }
}

static BN_ULONG maybe_add_words(BN_ULONG *a, BN_ULONG mask, const BN_ULONG *b,
                                BN_ULONG *tmp, size_t num) {
  BN_ULONG carry = bn_add_words(tmp, a, b, num);
  bn_select_words(a, mask, tmp, a, num);
  return carry & mask;
}

static int bn_gcd_consttime(BIGNUM *r, unsigned *out_shift, const BIGNUM *x,
                            const BIGNUM *y, BN_CTX *ctx) {
  size_t width = x->width > y->width ? x->width : y->width;
  if (width == 0) {
    *out_shift = 0;
    BN_zero(r);
    return 1;
  }

  // This is a constant-time implementation of Stein's algorithm (binary GCD).
  int ret = 0;
  BN_CTX_start(ctx);
  BIGNUM *u = BN_CTX_get(ctx);
  BIGNUM *v = BN_CTX_get(ctx);
  BIGNUM *tmp = BN_CTX_get(ctx);
  if (u == NULL || v == NULL || tmp == NULL ||
      !BN_copy(u, x) ||
      !BN_copy(v, y) ||
      !bn_resize_words(u, width) ||
      !bn_resize_words(v, width) ||
      !bn_resize_words(tmp, width)) {
    goto err;
  }

  // Each loop iteration halves at least one of |u| and |v|. Thus we need at
  // most the combined bit width of inputs for at least one value to be zero.
  unsigned x_bits = x->width * BN_BITS2, y_bits = y->width * BN_BITS2;
  unsigned num_iters = x_bits + y_bits;
  if (num_iters < x_bits) {
    OPENSSL_PUT_ERROR(BN, BN_R_BIGNUM_TOO_LONG);
    goto err;
  }

  unsigned shift = 0;
  for (unsigned i = 0; i < num_iters; i++) {
    BN_ULONG both_odd = word_is_odd_mask(u->d[0]) & word_is_odd_mask(v->d[0]);

    // If both |u| and |v| are odd, subtract the smaller from the larger.
    BN_ULONG u_less_than_v =
        (BN_ULONG)0 - bn_sub_words(tmp->d, u->d, v->d, width);
    bn_select_words(u->d, both_odd & ~u_less_than_v, tmp->d, u->d, width);
    bn_sub_words(tmp->d, v->d, u->d, width);
    bn_select_words(v->d, both_odd & u_less_than_v, tmp->d, v->d, width);

    // At least one of |u| and |v| is now even.
    BN_ULONG u_is_odd = word_is_odd_mask(u->d[0]);
    BN_ULONG v_is_odd = word_is_odd_mask(v->d[0]);
    assert(!(u_is_odd & v_is_odd));

    // If both are even, the final GCD gains a factor of two.
    shift += 1 & (~u_is_odd & ~v_is_odd);

    // Halve any which are even.
    maybe_rshift1_words(u->d, ~u_is_odd, tmp->d, width);
    maybe_rshift1_words(v->d, ~v_is_odd, tmp->d, width);
  }

  // One of |u| or |v| is zero at this point. The algorithm usually makes |u|
  // zero, unless |y| was already zero on input. Fix this by combining the
  // values.
  assert(BN_is_zero(u) || BN_is_zero(v));
  for (size_t i = 0; i < width; i++) {
    v->d[i] |= u->d[i];
  }

  *out_shift = shift;
  ret = bn_set_words(r, v->d, width);

err:
  BN_CTX_end(ctx);
  return ret;
}

int BN_gcd(BIGNUM *r, const BIGNUM *x, const BIGNUM *y, BN_CTX *ctx) {
  unsigned shift;
  return bn_gcd_consttime(r, &shift, x, y, ctx) &&
         BN_lshift(r, r, shift);
}

int bn_is_relatively_prime(int *out_relatively_prime, const BIGNUM *x,
                           const BIGNUM *y, BN_CTX *ctx) {
  int ret = 0;
  BN_CTX_start(ctx);
  unsigned shift;
  BIGNUM *gcd = BN_CTX_get(ctx);
  if (gcd == NULL ||
      !bn_gcd_consttime(gcd, &shift, x, y, ctx)) {
    goto err;
  }

  // Check that 2^|shift| * |gcd| is one.
  if (gcd->width == 0) {
    *out_relatively_prime = 0;
  } else {
    BN_ULONG mask = shift | (gcd->d[0] ^ 1);
    for (int i = 1; i < gcd->width; i++) {
      mask |= gcd->d[i];
    }
    *out_relatively_prime = mask == 0;
  }
  ret = 1;

err:
  BN_CTX_end(ctx);
  return ret;
}

int bn_lcm_consttime(BIGNUM *r, const BIGNUM *a, const BIGNUM *b, BN_CTX *ctx) {
  BN_CTX_start(ctx);
  unsigned shift;
  BIGNUM *gcd = BN_CTX_get(ctx);
  int ret = gcd != NULL &&
            bn_mul_consttime(r, a, b, ctx) &&
            bn_gcd_consttime(gcd, &shift, a, b, ctx) &&
            bn_div_consttime(r, NULL, r, gcd, ctx) &&
            bn_rshift_secret_shift(r, r, shift, ctx);
  BN_CTX_end(ctx);
  return ret;
}

int bn_mod_inverse_consttime(BIGNUM *r, int *out_no_inverse, const BIGNUM *a,
                             const BIGNUM *n, BN_CTX *ctx) {
  *out_no_inverse = 0;
  if (BN_is_negative(a) || BN_ucmp(a, n) >= 0) {
    OPENSSL_PUT_ERROR(BN, BN_R_INPUT_NOT_REDUCED);
    return 0;
  }
  if (BN_is_zero(a)) {
    if (BN_is_one(n)) {
      BN_zero(r);
      return 1;
    }
    *out_no_inverse = 1;
    OPENSSL_PUT_ERROR(BN, BN_R_NO_INVERSE);
    return 0;
  }

  // This is a constant-time implementation of the extended binary GCD
  // algorithm. It is adapted from the Handbook of Applied Cryptography, section
  // 14.4.3, algorithm 14.51, and modified to bound coefficients and avoid
  // negative numbers.
  //
  // For more details and proof of correctness, see
  // https://github.com/mit-plv/fiat-crypto/pull/333. In particular, see |step|
  // and |mod_inverse_consttime| for the algorithm in Gallina and see
  // |mod_inverse_consttime_spec| for the correctness result.

  if (!BN_is_odd(a) && !BN_is_odd(n)) {
    *out_no_inverse = 1;
    OPENSSL_PUT_ERROR(BN, BN_R_NO_INVERSE);
    return 0;
  }

  // This function exists to compute the RSA private exponent, where |a| is one
  // word. We'll thus use |a_width| when available.
  size_t n_width = n->width, a_width = a->width;
  if (a_width > n_width) {
    a_width = n_width;
  }

  int ret = 0;
  BN_CTX_start(ctx);
  BIGNUM *u = BN_CTX_get(ctx);
  BIGNUM *v = BN_CTX_get(ctx);
  BIGNUM *A = BN_CTX_get(ctx);
  BIGNUM *B = BN_CTX_get(ctx);
  BIGNUM *C = BN_CTX_get(ctx);
  BIGNUM *D = BN_CTX_get(ctx);
  BIGNUM *tmp = BN_CTX_get(ctx);
  BIGNUM *tmp2 = BN_CTX_get(ctx);
  if (u == NULL || v == NULL || A == NULL || B == NULL || C == NULL ||
      D == NULL || tmp == NULL || tmp2 == NULL ||
      !BN_copy(u, a) ||
      !BN_copy(v, n) ||
      !BN_one(A) ||
      !BN_one(D) ||
      // For convenience, size |u| and |v| equivalently.
      !bn_resize_words(u, n_width) ||
      !bn_resize_words(v, n_width) ||
      // |A| and |C| are bounded by |m|.
      !bn_resize_words(A, n_width) ||
      !bn_resize_words(C, n_width) ||
      // |B| and |D| are bounded by |a|.
      !bn_resize_words(B, a_width) ||
      !bn_resize_words(D, a_width) ||
      // |tmp| and |tmp2| may be used at either size.
      !bn_resize_words(tmp, n_width) ||
      !bn_resize_words(tmp2, n_width)) {
    goto err;
  }

  // Each loop iteration halves at least one of |u| and |v|. Thus we need at
  // most the combined bit width of inputs for at least one value to be zero.
  unsigned a_bits = a_width * BN_BITS2, n_bits = n_width * BN_BITS2;
  unsigned num_iters = a_bits + n_bits;
  if (num_iters < a_bits) {
    OPENSSL_PUT_ERROR(BN, BN_R_BIGNUM_TOO_LONG);
    goto err;
  }

  // Before and after each loop iteration, the following hold:
  //
  //   u = A*a - B*n
  //   v = D*n - C*a
  //   0 < u <= a
  //   0 <= v <= n
  //   0 <= A < n
  //   0 <= B <= a
  //   0 <= C < n
  //   0 <= D <= a
  //
  // After each loop iteration, u and v only get smaller, and at least one of
  // them shrinks by at least a factor of two.
  for (unsigned i = 0; i < num_iters; i++) {
    BN_ULONG both_odd = word_is_odd_mask(u->d[0]) & word_is_odd_mask(v->d[0]);

    // If both |u| and |v| are odd, subtract the smaller from the larger.
    BN_ULONG v_less_than_u =
        (BN_ULONG)0 - bn_sub_words(tmp->d, v->d, u->d, n_width);
    bn_select_words(v->d, both_odd & ~v_less_than_u, tmp->d, v->d, n_width);
    bn_sub_words(tmp->d, u->d, v->d, n_width);
    bn_select_words(u->d, both_odd & v_less_than_u, tmp->d, u->d, n_width);

    // If we updated one of the values, update the corresponding coefficient.
    BN_ULONG carry = bn_add_words(tmp->d, A->d, C->d, n_width);
    carry -= bn_sub_words(tmp2->d, tmp->d, n->d, n_width);
    bn_select_words(tmp->d, carry, tmp->d, tmp2->d, n_width);
    bn_select_words(A->d, both_odd & v_less_than_u, tmp->d, A->d, n_width);
    bn_select_words(C->d, both_odd & ~v_less_than_u, tmp->d, C->d, n_width);

    bn_add_words(tmp->d, B->d, D->d, a_width);
    bn_sub_words(tmp2->d, tmp->d, a->d, a_width);
    bn_select_words(tmp->d, carry, tmp->d, tmp2->d, a_width);
    bn_select_words(B->d, both_odd & v_less_than_u, tmp->d, B->d, a_width);
    bn_select_words(D->d, both_odd & ~v_less_than_u, tmp->d, D->d, a_width);

    // Our loop invariants hold at this point. Additionally, exactly one of |u|
    // and |v| is now even.
    BN_ULONG u_is_even = ~word_is_odd_mask(u->d[0]);
    BN_ULONG v_is_even = ~word_is_odd_mask(v->d[0]);
    assert(u_is_even != v_is_even);

    // Halve the even one and adjust the corresponding coefficient.
    maybe_rshift1_words(u->d, u_is_even, tmp->d, n_width);
    BN_ULONG A_or_B_is_odd =
        word_is_odd_mask(A->d[0]) | word_is_odd_mask(B->d[0]);
    BN_ULONG A_carry =
        maybe_add_words(A->d, A_or_B_is_odd & u_is_even, n->d, tmp->d, n_width);
    BN_ULONG B_carry =
        maybe_add_words(B->d, A_or_B_is_odd & u_is_even, a->d, tmp->d, a_width);
    maybe_rshift1_words_carry(A->d, A_carry, u_is_even, tmp->d, n_width);
    maybe_rshift1_words_carry(B->d, B_carry, u_is_even, tmp->d, a_width);

    maybe_rshift1_words(v->d, v_is_even, tmp->d, n_width);
    BN_ULONG C_or_D_is_odd =
        word_is_odd_mask(C->d[0]) | word_is_odd_mask(D->d[0]);
    BN_ULONG C_carry =
        maybe_add_words(C->d, C_or_D_is_odd & v_is_even, n->d, tmp->d, n_width);
    BN_ULONG D_carry =
        maybe_add_words(D->d, C_or_D_is_odd & v_is_even, a->d, tmp->d, a_width);
    maybe_rshift1_words_carry(C->d, C_carry, v_is_even, tmp->d, n_width);
    maybe_rshift1_words_carry(D->d, D_carry, v_is_even, tmp->d, a_width);
  }

  assert(BN_is_zero(v));
  if (!BN_is_one(u)) {
    *out_no_inverse = 1;
    OPENSSL_PUT_ERROR(BN, BN_R_NO_INVERSE);
    goto err;
  }

  ret = BN_copy(r, A) != NULL;

err:
  BN_CTX_end(ctx);
  return ret;
}

int BN_mod_inverse_odd(BIGNUM *out, int *out_no_inverse, const BIGNUM *a,
                       const BIGNUM *n, BN_CTX *ctx) {
  *out_no_inverse = 0;

  if (!BN_is_odd(n)) {
    OPENSSL_PUT_ERROR(BN, BN_R_CALLED_WITH_EVEN_MODULUS);
    return 0;
  }

  if (BN_is_negative(a) || BN_cmp(a, n) >= 0) {
    OPENSSL_PUT_ERROR(BN, BN_R_INPUT_NOT_REDUCED);
    return 0;
  }

  BIGNUM *A, *B, *X, *Y;
  int ret = 0;
  int sign;

  BN_CTX_start(ctx);
  A = BN_CTX_get(ctx);
  B = BN_CTX_get(ctx);
  X = BN_CTX_get(ctx);
  Y = BN_CTX_get(ctx);
  if (Y == NULL) {
    goto err;
  }

  BIGNUM *R = out;

  BN_zero(Y);
  if (!BN_one(X) || BN_copy(B, a) == NULL || BN_copy(A, n) == NULL) {
    goto err;
  }
  A->neg = 0;
  sign = -1;
  // From  B = a mod |n|,  A = |n|  it follows that
  //
  //      0 <= B < A,
  //     -sign*X*a  ==  B   (mod |n|),
  //      sign*Y*a  ==  A   (mod |n|).

  // Binary inversion algorithm; requires odd modulus. This is faster than the
  // general algorithm if the modulus is sufficiently small (about 400 .. 500
  // bits on 32-bit systems, but much more on 64-bit systems)
  int shift;

  while (!BN_is_zero(B)) {
    //      0 < B < |n|,
    //      0 < A <= |n|,
    // (1) -sign*X*a  ==  B   (mod |n|),
    // (2)  sign*Y*a  ==  A   (mod |n|)

    // Now divide  B  by the maximum possible power of two in the integers,
    // and divide  X  by the same value mod |n|.
    // When we're done, (1) still holds.
    shift = 0;
    while (!BN_is_bit_set(B, shift)) {
      // note that 0 < B
      shift++;

      if (BN_is_odd(X)) {
        if (!BN_uadd(X, X, n)) {
          goto err;
        }
      }
      // now X is even, so we can easily divide it by two
      if (!BN_rshift1(X, X)) {
        goto err;
      }
    }
    if (shift > 0) {
      if (!BN_rshift(B, B, shift)) {
        goto err;
      }
    }

    // Same for A and Y. Afterwards, (2) still holds.
    shift = 0;
    while (!BN_is_bit_set(A, shift)) {
      // note that 0 < A
      shift++;

      if (BN_is_odd(Y)) {
        if (!BN_uadd(Y, Y, n)) {
          goto err;
        }
      }
      // now Y is even
      if (!BN_rshift1(Y, Y)) {
        goto err;
      }
    }
    if (shift > 0) {
      if (!BN_rshift(A, A, shift)) {
        goto err;
      }
    }

    // We still have (1) and (2).
    // Both  A  and  B  are odd.
    // The following computations ensure that
    //
    //     0 <= B < |n|,
    //      0 < A < |n|,
    // (1) -sign*X*a  ==  B   (mod |n|),
    // (2)  sign*Y*a  ==  A   (mod |n|),
    //
    // and that either  A  or  B  is even in the next iteration.
    if (BN_ucmp(B, A) >= 0) {
      // -sign*(X + Y)*a == B - A  (mod |n|)
      if (!BN_uadd(X, X, Y)) {
        goto err;
      }
      // NB: we could use BN_mod_add_quick(X, X, Y, n), but that
      // actually makes the algorithm slower
      if (!BN_usub(B, B, A)) {
        goto err;
      }
    } else {
      //  sign*(X + Y)*a == A - B  (mod |n|)
      if (!BN_uadd(Y, Y, X)) {
        goto err;
      }
      // as above, BN_mod_add_quick(Y, Y, X, n) would slow things down
      if (!BN_usub(A, A, B)) {
        goto err;
      }
    }
  }

  if (!BN_is_one(A)) {
    *out_no_inverse = 1;
    OPENSSL_PUT_ERROR(BN, BN_R_NO_INVERSE);
    goto err;
  }

  // The while loop (Euclid's algorithm) ends when
  //      A == gcd(a,n);
  // we have
  //       sign*Y*a  ==  A  (mod |n|),
  // where  Y  is non-negative.

  if (sign < 0) {
    if (!BN_sub(Y, n, Y)) {
      goto err;
    }
  }
  // Now  Y*a  ==  A  (mod |n|).

  // Y*a == 1  (mod |n|)
  if (!Y->neg && BN_ucmp(Y, n) < 0) {
    if (!BN_copy(R, Y)) {
      goto err;
    }
  } else {
    if (!BN_nnmod(R, Y, n, ctx)) {
      goto err;
    }
  }

  ret = 1;

err:
  BN_CTX_end(ctx);
  return ret;
}

BIGNUM *BN_mod_inverse(BIGNUM *out, const BIGNUM *a, const BIGNUM *n,
                       BN_CTX *ctx) {
  BIGNUM *new_out = NULL;
  if (out == NULL) {
    new_out = BN_new();
    if (new_out == NULL) {
      OPENSSL_PUT_ERROR(BN, ERR_R_MALLOC_FAILURE);
      return NULL;
    }
    out = new_out;
  }

  int ok = 0;
  BIGNUM *a_reduced = NULL;
  if (a->neg || BN_ucmp(a, n) >= 0) {
    a_reduced = BN_dup(a);
    if (a_reduced == NULL) {
      goto err;
    }
    if (!BN_nnmod(a_reduced, a_reduced, n, ctx)) {
      goto err;
    }
    a = a_reduced;
  }

  int no_inverse;
  if (!BN_is_odd(n)) {
    if (!bn_mod_inverse_consttime(out, &no_inverse, a, n, ctx)) {
      goto err;
    }
  } else if (!BN_mod_inverse_odd(out, &no_inverse, a, n, ctx)) {
    goto err;
  }

  ok = 1;

err:
  if (!ok) {
    BN_free(new_out);
    out = NULL;
  }
  BN_free(a_reduced);
  return out;
}

int BN_mod_inverse_blinded(BIGNUM *out, int *out_no_inverse, const BIGNUM *a,
                           const BN_MONT_CTX *mont, BN_CTX *ctx) {
  *out_no_inverse = 0;

  if (BN_is_negative(a) || BN_cmp(a, &mont->N) >= 0) {
    OPENSSL_PUT_ERROR(BN, BN_R_INPUT_NOT_REDUCED);
    return 0;
  }

  int ret = 0;
  BIGNUM blinding_factor;
  BN_init(&blinding_factor);

  if (!BN_rand_range_ex(&blinding_factor, 1, &mont->N) ||
      !BN_mod_mul_montgomery(out, &blinding_factor, a, mont, ctx) ||
      !BN_mod_inverse_odd(out, out_no_inverse, out, &mont->N, ctx) ||
      !BN_mod_mul_montgomery(out, &blinding_factor, out, mont, ctx)) {
    OPENSSL_PUT_ERROR(BN, ERR_R_BN_LIB);
    goto err;
  }

  ret = 1;

err:
  BN_free(&blinding_factor);
  return ret;
}

int bn_mod_inverse_prime(BIGNUM *out, const BIGNUM *a, const BIGNUM *p,
                         BN_CTX *ctx, const BN_MONT_CTX *mont_p) {
  BN_CTX_start(ctx);
  BIGNUM *p_minus_2 = BN_CTX_get(ctx);
  int ok = p_minus_2 != NULL &&
           BN_copy(p_minus_2, p) &&
           BN_sub_word(p_minus_2, 2) &&
           BN_mod_exp_mont(out, a, p_minus_2, p, ctx, mont_p);
  BN_CTX_end(ctx);
  return ok;
}

int bn_mod_inverse_secret_prime(BIGNUM *out, const BIGNUM *a, const BIGNUM *p,
                                BN_CTX *ctx, const BN_MONT_CTX *mont_p) {
  BN_CTX_start(ctx);
  BIGNUM *p_minus_2 = BN_CTX_get(ctx);
  int ok = p_minus_2 != NULL &&
           BN_copy(p_minus_2, p) &&
           BN_sub_word(p_minus_2, 2) &&
           BN_mod_exp_mont_consttime(out, a, p_minus_2, p, ctx, mont_p);
  BN_CTX_end(ctx);
  return ok;
}
