define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ascii = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(ascii, {
    /*ascii.$nul*/get $nul() {
      return 0;
    },
    /*ascii.$soh*/get $soh() {
      return 1;
    },
    /*ascii.$stx*/get $stx() {
      return 2;
    },
    /*ascii.$etx*/get $etx() {
      return 3;
    },
    /*ascii.$eot*/get $eot() {
      return 4;
    },
    /*ascii.$enq*/get $enq() {
      return 5;
    },
    /*ascii.$ack*/get $ack() {
      return 6;
    },
    /*ascii.$bel*/get $bel() {
      return 7;
    },
    /*ascii.$bs*/get $bs() {
      return 8;
    },
    /*ascii.$ht*/get $ht() {
      return 9;
    },
    /*ascii.$tab*/get $tab() {
      return 9;
    },
    /*ascii.$lf*/get $lf() {
      return 10;
    },
    /*ascii.$vt*/get $vt() {
      return 11;
    },
    /*ascii.$ff*/get $ff() {
      return 12;
    },
    /*ascii.$cr*/get $cr() {
      return 13;
    },
    /*ascii.$so*/get $so() {
      return 14;
    },
    /*ascii.$si*/get $si() {
      return 15;
    },
    /*ascii.$dle*/get $dle() {
      return 16;
    },
    /*ascii.$dc1*/get $dc1() {
      return 17;
    },
    /*ascii.$dc2*/get $dc2() {
      return 18;
    },
    /*ascii.$dc3*/get $dc3() {
      return 19;
    },
    /*ascii.$dc4*/get $dc4() {
      return 20;
    },
    /*ascii.$nak*/get $nak() {
      return 21;
    },
    /*ascii.$syn*/get $syn() {
      return 22;
    },
    /*ascii.$etb*/get $etb() {
      return 23;
    },
    /*ascii.$can*/get $can() {
      return 24;
    },
    /*ascii.$em*/get $em() {
      return 25;
    },
    /*ascii.$sub*/get $sub() {
      return 26;
    },
    /*ascii.$esc*/get $esc() {
      return 27;
    },
    /*ascii.$fs*/get $fs() {
      return 28;
    },
    /*ascii.$gs*/get $gs() {
      return 29;
    },
    /*ascii.$rs*/get $rs() {
      return 30;
    },
    /*ascii.$us*/get $us() {
      return 31;
    },
    /*ascii.$del*/get $del() {
      return 127;
    },
    /*ascii.$space*/get $space() {
      return 32;
    },
    /*ascii.$exclamation*/get $exclamation() {
      return 33;
    },
    /*ascii.$quot*/get $quot() {
      return 34;
    },
    /*ascii.$quote*/get $quote() {
      return 34;
    },
    /*ascii.$double_quote*/get $double_quote() {
      return 34;
    },
    /*ascii.$quotation*/get $quotation() {
      return 34;
    },
    /*ascii.$hash*/get $hash() {
      return 35;
    },
    /*ascii.$$*/get $$() {
      return 36;
    },
    /*ascii.$dollar*/get $dollar() {
      return 36;
    },
    /*ascii.$percent*/get $percent() {
      return 37;
    },
    /*ascii.$amp*/get $amp() {
      return 38;
    },
    /*ascii.$ampersand*/get $ampersand() {
      return 38;
    },
    /*ascii.$apos*/get $apos() {
      return 39;
    },
    /*ascii.$apostrophe*/get $apostrophe() {
      return 39;
    },
    /*ascii.$single_quote*/get $single_quote() {
      return 39;
    },
    /*ascii.$lparen*/get $lparen() {
      return 40;
    },
    /*ascii.$open_paren*/get $open_paren() {
      return 40;
    },
    /*ascii.$open_parenthesis*/get $open_parenthesis() {
      return 40;
    },
    /*ascii.$rparen*/get $rparen() {
      return 41;
    },
    /*ascii.$close_paren*/get $close_paren() {
      return 41;
    },
    /*ascii.$close_parenthesis*/get $close_parenthesis() {
      return 41;
    },
    /*ascii.$asterisk*/get $asterisk() {
      return 42;
    },
    /*ascii.$plus*/get $plus() {
      return 43;
    },
    /*ascii.$comma*/get $comma() {
      return 44;
    },
    /*ascii.$minus*/get $minus() {
      return 45;
    },
    /*ascii.$dash*/get $dash() {
      return 45;
    },
    /*ascii.$dot*/get $dot() {
      return 46;
    },
    /*ascii.$fullstop*/get $fullstop() {
      return 46;
    },
    /*ascii.$slash*/get $slash() {
      return 47;
    },
    /*ascii.$solidus*/get $solidus() {
      return 47;
    },
    /*ascii.$division*/get $division() {
      return 47;
    },
    /*ascii.$0*/get $0() {
      return 48;
    },
    /*ascii.$1*/get $1() {
      return 49;
    },
    /*ascii.$2*/get $2() {
      return 50;
    },
    /*ascii.$3*/get $3() {
      return 51;
    },
    /*ascii.$4*/get $4() {
      return 52;
    },
    /*ascii.$5*/get $5() {
      return 53;
    },
    /*ascii.$6*/get $6() {
      return 54;
    },
    /*ascii.$7*/get $7() {
      return 55;
    },
    /*ascii.$8*/get $8() {
      return 56;
    },
    /*ascii.$9*/get $9() {
      return 57;
    },
    /*ascii.$colon*/get $colon() {
      return 58;
    },
    /*ascii.$semicolon*/get $semicolon() {
      return 59;
    },
    /*ascii.$lt*/get $lt() {
      return 60;
    },
    /*ascii.$less_than*/get $less_than() {
      return 60;
    },
    /*ascii.$langle*/get $langle() {
      return 60;
    },
    /*ascii.$open_angle*/get $open_angle() {
      return 60;
    },
    /*ascii.$equal*/get $equal() {
      return 61;
    },
    /*ascii.$gt*/get $gt() {
      return 62;
    },
    /*ascii.$greater_than*/get $greater_than() {
      return 62;
    },
    /*ascii.$rangle*/get $rangle() {
      return 62;
    },
    /*ascii.$close_angle*/get $close_angle() {
      return 62;
    },
    /*ascii.$question*/get $question() {
      return 63;
    },
    /*ascii.$at*/get $at() {
      return 64;
    },
    /*ascii.$A*/get $A() {
      return 65;
    },
    /*ascii.$B*/get $B() {
      return 66;
    },
    /*ascii.$C*/get $C() {
      return 67;
    },
    /*ascii.$D*/get $D() {
      return 68;
    },
    /*ascii.$E*/get $E() {
      return 69;
    },
    /*ascii.$F*/get $F() {
      return 70;
    },
    /*ascii.$G*/get $G() {
      return 71;
    },
    /*ascii.$H*/get $H() {
      return 72;
    },
    /*ascii.$I*/get $I() {
      return 73;
    },
    /*ascii.$J*/get $J() {
      return 74;
    },
    /*ascii.$K*/get $K() {
      return 75;
    },
    /*ascii.$L*/get $L() {
      return 76;
    },
    /*ascii.$M*/get $M() {
      return 77;
    },
    /*ascii.$N*/get $N() {
      return 78;
    },
    /*ascii.$O*/get $O() {
      return 79;
    },
    /*ascii.$P*/get $P() {
      return 80;
    },
    /*ascii.$Q*/get $Q() {
      return 81;
    },
    /*ascii.$R*/get $R() {
      return 82;
    },
    /*ascii.$S*/get $S() {
      return 83;
    },
    /*ascii.$T*/get $T() {
      return 84;
    },
    /*ascii.$U*/get $U() {
      return 85;
    },
    /*ascii.$V*/get $V() {
      return 86;
    },
    /*ascii.$W*/get $W() {
      return 87;
    },
    /*ascii.$X*/get $X() {
      return 88;
    },
    /*ascii.$Y*/get $Y() {
      return 89;
    },
    /*ascii.$Z*/get $Z() {
      return 90;
    },
    /*ascii.$lbracket*/get $lbracket() {
      return 91;
    },
    /*ascii.$open_bracket*/get $open_bracket() {
      return 91;
    },
    /*ascii.$backslash*/get $backslash() {
      return 92;
    },
    /*ascii.$rbracket*/get $rbracket() {
      return 93;
    },
    /*ascii.$close_bracket*/get $close_bracket() {
      return 93;
    },
    /*ascii.$circumflex*/get $circumflex() {
      return 94;
    },
    /*ascii.$caret*/get $caret() {
      return 94;
    },
    /*ascii.$hat*/get $hat() {
      return 94;
    },
    /*ascii.$_*/get $_() {
      return 95;
    },
    /*ascii.$underscore*/get $underscore() {
      return 95;
    },
    /*ascii.$underline*/get $underline() {
      return 95;
    },
    /*ascii.$backquote*/get $backquote() {
      return 96;
    },
    /*ascii.$grave*/get $grave() {
      return 96;
    },
    /*ascii.$a*/get $a() {
      return 97;
    },
    /*ascii.$b*/get $b() {
      return 98;
    },
    /*ascii.$c*/get $c() {
      return 99;
    },
    /*ascii.$d*/get $d() {
      return 100;
    },
    /*ascii.$e*/get $e() {
      return 101;
    },
    /*ascii.$f*/get $f() {
      return 102;
    },
    /*ascii.$g*/get $g() {
      return 103;
    },
    /*ascii.$h*/get $h() {
      return 104;
    },
    /*ascii.$i*/get $i() {
      return 105;
    },
    /*ascii.$j*/get $j() {
      return 106;
    },
    /*ascii.$k*/get $k() {
      return 107;
    },
    /*ascii.$l*/get $l() {
      return 108;
    },
    /*ascii.$m*/get $m() {
      return 109;
    },
    /*ascii.$n*/get $n() {
      return 110;
    },
    /*ascii.$o*/get $o() {
      return 111;
    },
    /*ascii.$p*/get $p() {
      return 112;
    },
    /*ascii.$q*/get $q() {
      return 113;
    },
    /*ascii.$r*/get $r() {
      return 114;
    },
    /*ascii.$s*/get $s() {
      return 115;
    },
    /*ascii.$t*/get $t() {
      return 116;
    },
    /*ascii.$u*/get $u() {
      return 117;
    },
    /*ascii.$v*/get $v() {
      return 118;
    },
    /*ascii.$w*/get $w() {
      return 119;
    },
    /*ascii.$x*/get $x() {
      return 120;
    },
    /*ascii.$y*/get $y() {
      return 121;
    },
    /*ascii.$z*/get $z() {
      return 122;
    },
    /*ascii.$lbrace*/get $lbrace() {
      return 123;
    },
    /*ascii.$open_brace*/get $open_brace() {
      return 123;
    },
    /*ascii.$pipe*/get $pipe() {
      return 124;
    },
    /*ascii.$bar*/get $bar() {
      return 124;
    },
    /*ascii.$rbrace*/get $rbrace() {
      return 125;
    },
    /*ascii.$close_brace*/get $close_brace() {
      return 125;
    },
    /*ascii.$tilde*/get $tilde() {
      return 126;
    }
  });
  dart.trackLibraries("packages/charcode/ascii", {
    "package:charcode/ascii.dart": ascii
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ascii.dart"],"names":[],"mappings":";;;;;;;;MA4BU,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,SAAG;;;MAGH,SAAG;;;MAGH,UAAI;;;MAGJ,SAAG;;;MAGH,SAAG;;;MAGH,SAAG;;;MAGH,SAAG;;;MAGH,SAAG;;;MAGH,SAAG;;;MAGH,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,UAAI;;;MAGJ,SAAG;;;MAGH,UAAI;;;MAGJ,UAAI;;;MAGJ,SAAG;;;MAGH,SAAG;;;MAGH,SAAG;;;MAGH,SAAG;;;MAGH,UAAI;;;MAKJ,YAAM;;;MAGN,kBAAY;;;MAGZ,WAAK;;;MAGL,YAAM;;;MAGN,mBAAa;;;MAGb,gBAAU;;;MAGV,WAAK;;;MAGL,QAAE;;;MAGF,aAAO;;;MAGP,cAAQ;;;MAGR,UAAI;;;MAGJ,gBAAU;;;MAGV,WAAK;;;MAGL,iBAAW;;;MAGX,mBAAa;;;MAGb,aAAO;;;MAGP,iBAAW;;;MAGX,uBAAiB;;;MAGjB,aAAO;;;MAGP,kBAAY;;;MAGZ,wBAAkB;;;MAGlB,eAAS;;;MAGT,WAAK;;;MAGL,YAAM;;;MAGN,YAAM;;;MAGN,WAAK;;;MAGL,UAAI;;;MAGJ,eAAS;;;MAGT,YAAM;;;MAGN,cAAQ;;;MAGR,eAAS;;;MAGT,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,YAAM;;;MAGN,gBAAU;;;MAGV,SAAG;;;MAGH,gBAAU;;;MAGV,aAAO;;;MAGP,iBAAW;;;MAGX,YAAM;;;MAGN,SAAG;;;MAGH,mBAAa;;;MAGb,aAAO;;;MAGP,kBAAY;;;MAGZ,eAAS;;;MAGT,SAAG;;;MAGH,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,eAAS;;;MAGT,mBAAa;;;MAGb,gBAAU;;;MAGV,eAAS;;;MAGT,oBAAc;;;MAGd,iBAAW;;;MAGX,YAAM;;;MAGN,UAAI;;;MAGJ,QAAE;;;MAGF,iBAAW;;;MAGX,gBAAU;;;MAGV,gBAAU;;;MAGV,YAAM;;;MAGN,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,QAAE;;;MAGF,aAAO;;;MAGP,iBAAW;;;MAGX,WAAK;;;MAGL,UAAI;;;MAGJ,aAAO;;;MAGP,kBAAY;;;MAGZ,YAAM","file":"ascii.ddc.js"}');
  // Exports:
  return {
    ascii: ascii
  };
});

//# sourceMappingURL=ascii.ddc.js.map
