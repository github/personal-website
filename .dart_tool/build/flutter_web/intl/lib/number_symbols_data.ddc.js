define(['dart_sdk', 'packages/intl/number_symbols'], function(dart_sdk, packages__intl__number_symbols) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const number_symbols = packages__intl__number_symbols.number_symbols;
  const number_symbols_data = Object.create(dart.library);
  let IdentityMapOfString$NumberSymbols = () => (IdentityMapOfString$NumberSymbols = dart.constFn(_js_helper.IdentityMap$(core.String, number_symbols.NumberSymbols)))();
  let IdentityMapOfString$CompactNumberSymbols = () => (IdentityMapOfString$CompactNumberSymbols = dart.constFn(_js_helper.IdentityMap$(core.String, number_symbols.CompactNumberSymbols)))();
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(core.int, core.String, [3, "0 k", 4, "00 k", 5, "000 k", 6, "0 m", 7, "00 m", 8, "000 m", 9, "0 mjd", 10, "00 mjd", 11, "000 mjd", 12, "0 bn", 13, "00 bn", 14, "000 bn"]);
    },
    get C1() {
      return C1 = dart.constMap(core.int, core.String, [3, "0 duisend", 4, "00 duisend", 5, "000 duisend", 6, "0 miljoen", 7, "00 miljoen", 8, "000 miljoen", 9, "0 miljard", 10, "00 miljard", 11, "000 miljard", 12, "0 biljoen", 13, "00 biljoen", 14, "000 biljoen"]);
    },
    get C2() {
      return C2 = dart.constMap(core.int, core.String, [3, "¤0 k", 4, "¤00 k", 5, "¤000 k", 6, "¤0 m", 7, "¤00 m", 8, "¤000 m", 9, "¤0 mjd", 10, "¤00 mjd", 11, "¤000 mjd", 12, "¤0 bn", 13, "¤00 bn", 14, "¤000 bn"]);
    },
    get C3() {
      return C3 = dart.constMap(core.int, core.String, [3, "0 ሺ", 4, "00 ሺ", 5, "000 ሺ", 6, "0 ሜትር", 7, "00 ሜትር", 8, "000ሜ", 9, "0 ቢ", 10, "00 ቢ", 11, "000 ቢ", 12, "0 ት", 13, "00 ት", 14, "000 ት"]);
    },
    get C4() {
      return C4 = dart.constMap(core.int, core.String, [3, "0 ሺ", 4, "00 ሺ", 5, "000 ሺ", 6, "0 ሚሊዮን", 7, "00 ሚሊዮን", 8, "000 ሚሊዮን", 9, "0 ቢሊዮን", 10, "00 ቢሊዮን", 11, "000 ቢሊዮን", 12, "0 ትሪሊዮን", 13, "00 ትሪሊዮን", 14, "000 ትሪሊዮን"]);
    },
    get C5() {
      return C5 = dart.constMap(core.int, core.String, [3, "¤0 ሺ", 4, "¤00 ሺ", 5, "¤000 ሺ", 6, "¤0 ሜትር", 7, "¤00 ሜትር", 8, "¤000 ሜትር", 9, "¤0 ቢ", 10, "¤00 ቢ", 11, "¤000 ቢ", 12, "¤0 ት", 13, "¤00 ት", 14, "¤000 ት"]);
    },
    get C6() {
      return C6 = dart.constMap(core.int, core.String, [3, "0 ألف", 4, "00 ألف", 5, "000 ألف", 6, "0 مليون", 7, "00 مليون", 8, "000 مليون", 9, "0 مليار", 10, "00 مليار", 11, "000 مليار", 12, "0 ترليون", 13, "00 ترليون", 14, "000 ترليون"]);
    },
    get C7() {
      return C7 = dart.constMap(core.int, core.String, [3, "0 ألف", 4, "00 ألف", 5, "000 ألف", 6, "0 مليون", 7, "00 مليون", 8, "000 مليون", 9, "0 مليار", 10, "00 مليار", 11, "000 مليار", 12, "0 ترليون", 13, "00 ترليون", 14, "000 ترليون"]);
    },
    get C8() {
      return C8 = dart.constMap(core.int, core.String, [3, "¤ 0 ألف", 4, "¤ 00 ألف", 5, "¤ 000 ألف", 6, "¤ 0 مليون", 7, "¤ 00 مليون", 8, "¤ 000 مليون", 9, "¤ 0 مليار", 10, "¤ 00 مليار", 11, "¤ 000 مليار", 12, "¤ 0 ترليون", 13, "¤ 00 ترليون", 14, "¤ 000 ترليون"]);
    },
    get C9() {
      return C9 = dart.constMap(core.int, core.String, [3, "0K", 4, "00K", 5, "000K", 6, "0M", 7, "00M", 8, "000M", 9, "0G", 10, "00G", 11, "000G", 12, "0T", 13, "00T", 14, "000T"]);
    },
    get C10() {
      return C10 = dart.constMap(core.int, core.String, [3, "0 min", 4, "00 min", 5, "000 min", 6, "0 milyon", 7, "00 milyon", 8, "000 milyon", 9, "0 milyard", 10, "00 milyard", 11, "000 milyard", 12, "0 trilyon", 13, "00 trilyon", 14, "000 trilyon"]);
    },
    get C11() {
      return C11 = dart.constMap(core.int, core.String, [3, "0K ¤", 4, "00K ¤", 5, "000K ¤", 6, "0M ¤", 7, "00M ¤", 8, "000M ¤", 9, "0G ¤", 10, "00G ¤", 11, "000G ¤", 12, "0T ¤", 13, "00T ¤", 14, "000T ¤"]);
    },
    get C12() {
      return C12 = dart.constMap(core.int, core.String, [3, "0 тыс.", 4, "00 тыс.", 5, "000 тыс.", 6, "0 млн", 7, "00 млн", 8, "000 млн", 9, "0 млрд", 10, "00 млрд", 11, "000 млрд", 12, "0 трлн", 13, "00 трлн", 14, "000 трлн"]);
    },
    get C13() {
      return C13 = dart.constMap(core.int, core.String, [3, "0 тысячы", 4, "00 тысячы", 5, "000 тысячы", 6, "0 мільёна", 7, "00 мільёна", 8, "000 мільёна", 9, "0 мільярда", 10, "00 мільярда", 11, "000 мільярда", 12, "0 трыльёна", 13, "00 трыльёна", 14, "000 трыльёна"]);
    },
    get C14() {
      return C14 = dart.constMap(core.int, core.String, [3, "0 тыс. ¤", 4, "00 тыс. ¤", 5, "000 тыс. ¤", 6, "0 млн ¤", 7, "00 млн ¤", 8, "000 млн ¤", 9, "0 млрд ¤ ", 10, "00 млрд ¤", 11, "000 млрд ¤", 12, "0 трлн ¤", 13, "00 трлн ¤", 14, "000 трлн ¤"]);
    },
    get C15() {
      return C15 = dart.constMap(core.int, core.String, [3, "0 хил.", 4, "00 хил.", 5, "000 хил.", 6, "0 млн.", 7, "00 млн.", 8, "000 млн.", 9, "0 млрд.", 10, "00 млрд.", 11, "000 млрд.", 12, "0 трлн.", 13, "00 трлн.", 14, "000 трлн."]);
    },
    get C16() {
      return C16 = dart.constMap(core.int, core.String, [3, "0 хиляди", 4, "00 хиляди", 5, "000 хиляди", 6, "0 милиона", 7, "00 милиона", 8, "000 милиона", 9, "0 милиарда", 10, "00 милиарда", 11, "000 милиарда", 12, "0 трилиона", 13, "00 трилиона", 14, "000 трилиона"]);
    },
    get C17() {
      return C17 = dart.constMap(core.int, core.String, [3, "0 хил. ¤", 4, "00 хил. ¤", 5, "000 хил. ¤", 6, "0 млн. ¤", 7, "00 млн. ¤", 8, "000 млн. ¤", 9, "0 млрд. ¤", 10, "00 млрд. ¤", 11, "000 млрд. ¤", 12, "0 трлн. ¤", 13, "00 трлн. ¤", 14, "000 трлн. ¤"]);
    },
    get C18() {
      return C18 = dart.constMap(core.int, core.String, [3, "0 হা", 4, "00 হা", 5, "0 লা", 6, "00 লা", 7, "0 কো", 8, "00 কো", 9, "000 কো", 10, "0000 কো", 11, "00000 কো", 12, "0 লা.কো.", 13, "00 লা.কো.", 14, "000 লা.কো."]);
    },
    get C19() {
      return C19 = dart.constMap(core.int, core.String, [3, "0 হাজার", 4, "00 হাজার", 5, "0 লাখ", 6, "00 লাখ", 7, "0 কোটি", 8, "00 কোটি", 9, "000 কোটি", 10, "0000 কোটি", 11, "00000 কোটি", 12, "0 লাখ কোটি", 13, "00 লাখ কোটি", 14, "000 লাখ কোটি"]);
    },
    get C20() {
      return C20 = dart.constMap(core.int, core.String, [3, "0 হা¤", 4, "00 হা¤", 5, "0 লা¤", 6, "00 লা¤", 7, "0 কো¤", 8, "00 কো¤", 9, "000 কো¤", 10, "0000 কো¤", 11, "00000 কো¤", 12, "0 লা.কো.¤", 13, "00 লা.কো.¤", 14, "000 লা.কো.¤"]);
    },
    get C21() {
      return C21 = dart.constMap(core.int, core.String, [3, "0k", 4, "00k", 5, "000k", 6, "0M", 7, "00M", 8, "000M", 9, "0G", 10, "00G", 11, "000G", 12, "0T", 13, "00T", 14, "000T"]);
    },
    get C22() {
      return C22 = dart.constMap(core.int, core.String, [3, "0 miliad", 4, "00 miliad", 5, "000 miliad", 6, "0 milion", 7, "00 milion", 8, "000 milion", 9, "0 miliard", 10, "00 miliard", 11, "000 miliard", 12, "0 bilion", 13, "00 bilion", 14, "000 bilion"]);
    },
    get C23() {
      return C23 = dart.constMap(core.int, core.String, [3, "0 k¤", 4, "00 k¤", 5, "000 k¤", 6, "0 M¤", 7, "00 M¤", 8, "000 M¤", 9, "0 G¤", 10, "00 G¤", 11, "000 G¤", 12, "0 T¤", 13, "00 T¤", 14, "000 T¤"]);
    },
    get C24() {
      return C24 = dart.constMap(core.int, core.String, [3, "0 hilj.", 4, "00 hilj.", 5, "000 hilj.", 6, "0 mil.", 7, "00 mil.", 8, "000 mil.", 9, "0 mlr.", 10, "00 mlr.", 11, "000 mlr.", 12, "0 bil.", 13, "00 bil.", 14, "000 bil."]);
    },
    get C25() {
      return C25 = dart.constMap(core.int, core.String, [3, "0 hiljada", 4, "00 hiljada", 5, "000 hiljada", 6, "0 miliona", 7, "00 miliona", 8, "000 miliona", 9, "0 milijardi", 10, "00 milijardi", 11, "000 milijardi", 12, "0 biliona", 13, "00 biliona", 14, "000 biliona"]);
    },
    get C26() {
      return C26 = dart.constMap(core.int, core.String, [3, "0 hilj. ¤", 4, "00 hilj. ¤", 5, "000 hilj. ¤", 6, "0 mil. ¤", 7, "00 mil. ¤", 8, "000 mil. ¤", 9, "0 mlr. ¤", 10, "00 mlr. ¤", 11, "000 mlr. ¤", 12, "0 bil. ¤", 13, "00 bil. ¤", 14, "000 bil. ¤"]);
    },
    get C27() {
      return C27 = dart.constMap(core.int, core.String, [3, "0m", 4, "00m", 5, "000m", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0000 M", 10, "00mM", 11, "000mM", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C28() {
      return C28 = dart.constMap(core.int, core.String, [3, "0 milers", 4, "00 milers", 5, "000 milers", 6, "0 milions", 7, "00 milions", 8, "000 milions", 9, "0 milers de milions", 10, "00 milers de milions", 11, "000 milers de milions", 12, "0 bilions", 13, "00 bilions", 14, "000 bilions"]);
    },
    get C29() {
      return C29 = dart.constMap(core.int, core.String, [3, "0m ¤", 4, "00m ¤", 5, "000m ¤", 6, "0 M ¤", 7, "00 M ¤", 8, "000 M ¤", 9, "0000 M ¤", 10, "00mM ¤", 11, "000mM ¤", 12, "0 B ¤", 13, "00 B ¤", 14, "000 B ¤"]);
    },
    get C30() {
      return C30 = dart.constMap(core.int, core.String, [3, "0K", 4, "00K", 5, "000K", 6, "0M", 7, "00M", 8, "000M", 9, "0B", 10, "00B", 11, "000B", 12, "0T", 13, "00T", 14, "000T"]);
    },
    get C31() {
      return C31 = dart.constMap(core.int, core.String, [3, "0 ᎢᏯᎦᏴᎵ", 4, "00 ᎢᏯᎦᏴᎵ", 5, "000 ᎢᏯᎦᏴᎵ", 6, "0 ᎢᏳᏆᏗᏅᏛ", 7, "00 ᎢᏳᏆᏗᏅᏛ", 8, "000 ᎢᏳᏆᏗᏅᏛ", 9, "0 ᎢᏯᏔᎳᏗᏅᏛ", 10, "00 ᎢᏯᏔᎳᏗᏅᏛ", 11, "000 ᎢᏯᏔᎳᏗᏅᏛ", 12, "0 ᎢᏯᏦᎠᏗᏅᏛ", 13, "00 ᎢᏯᏦᎠᏗᏅᏛ", 14, "000 ᎢᏯᏦᎠᏗᏅᏛ"]);
    },
    get C32() {
      return C32 = dart.constMap(core.int, core.String, [3, "¤0K", 4, "¤00K", 5, "¤000K", 6, "¤0M", 7, "¤00M", 8, "¤000M", 9, "¤0B", 10, "¤00B", 11, "¤000B", 12, "¤0T", 13, "¤00T", 14, "¤000T"]);
    },
    get C33() {
      return C33 = dart.constMap(core.int, core.String, [3, "0 tis.", 4, "00 tis.", 5, "000 tis.", 6, "0 mil.", 7, "00 mil.", 8, "000 mil.", 9, "0 mld.", 10, "00 mld.", 11, "000 mld.", 12, "0 bil.", 13, "00 bil.", 14, "000 bil."]);
    },
    get C34() {
      return C34 = dart.constMap(core.int, core.String, [3, "0 tisíc", 4, "00 tisíc", 5, "000 tisíc", 6, "0 milionů", 7, "00 milionů", 8, "000 milionů", 9, "0 miliard", 10, "00 miliard", 11, "000 miliard", 12, "0 bilionů", 13, "00 bilionů", 14, "000 bilionů"]);
    },
    get C35() {
      return C35 = dart.constMap(core.int, core.String, [3, "0 tis. ¤", 4, "00 tis. ¤", 5, "000 tis. ¤", 6, "0 mil. ¤", 7, "00 mil. ¤", 8, "000 mil. ¤", 9, "0 mld. ¤", 10, "00 mld. ¤", 11, "000 mld. ¤", 12, "0 bil. ¤", 13, "00 bil. ¤", 14, "000 bil. ¤"]);
    },
    get C36() {
      return C36 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 miliwn", 7, "00 miliwn", 8, "000 miliwn", 9, "0 biliwn", 10, "00 biliwn", 11, "000 biliwn", 12, "0 triliwn", 13, "00 triliwn", 14, "000 triliwn"]);
    },
    get C37() {
      return C37 = dart.constMap(core.int, core.String, [3, "0 t", 4, "00 t", 5, "000 t", 6, "0 mio.", 7, "00 mio.", 8, "000 mio.", 9, "0 mia.", 10, "00 mia.", 11, "000 mia.", 12, "0 bio.", 13, "00 bio.", 14, "000 bio."]);
    },
    get C38() {
      return C38 = dart.constMap(core.int, core.String, [3, "0 tusind", 4, "00 tusind", 5, "000 tusind", 6, "0 millioner", 7, "00 millioner", 8, "000 millioner", 9, "0 milliarder", 10, "00 milliarder", 11, "000 milliarder", 12, "0 billioner", 13, "00 billioner", 14, "000 billioner"]);
    },
    get C39() {
      return C39 = dart.constMap(core.int, core.String, [3, "0 t ¤", 4, "00 t ¤", 5, "000 t ¤", 6, "0 mio. ¤", 7, "00 mio. ¤", 8, "000 mio. ¤", 9, "0 mia. ¤", 10, "00 mia. ¤", 11, "000 mia. ¤", 12, "0 bio. ¤", 13, "00 bio. ¤", 14, "000 bio. ¤"]);
    },
    get C40() {
      return C40 = dart.constMap(core.int, core.String, [3, "0", 4, "0", 5, "0", 6, "0 Mio.", 7, "00 Mio.", 8, "000 Mio.", 9, "0 Mrd.", 10, "00 Mrd.", 11, "000 Mrd.", 12, "0 Bio.", 13, "00 Bio.", 14, "000 Bio."]);
    },
    get C41() {
      return C41 = dart.constMap(core.int, core.String, [3, "0 Tausend", 4, "00 Tausend", 5, "000 Tausend", 6, "0 Millionen", 7, "00 Millionen", 8, "000 Millionen", 9, "0 Milliarden", 10, "00 Milliarden", 11, "000 Milliarden", 12, "0 Billionen", 13, "00 Billionen", 14, "000 Billionen"]);
    },
    get C42() {
      return C42 = dart.constMap(core.int, core.String, [3, "0", 4, "0", 5, "0", 6, "0 Mio. ¤", 7, "00 Mio. ¤", 8, "000 Mio. ¤", 9, "0 Mrd. ¤", 10, "00 Mrd. ¤", 11, "000 Mrd. ¤", 12, "0 Bio. ¤", 13, "00 Bio. ¤", 14, "000 Bio. ¤"]);
    },
    get C43() {
      return C43 = dart.constMap(core.int, core.String, [3, "0 χιλ.", 4, "00 χιλ.", 5, "000 χιλ.", 6, "0 εκ.", 7, "00 εκ.", 8, "000 εκ.", 9, "0 δισ.", 10, "00 δισ.", 11, "000 δισ.", 12, "0 τρισ.", 13, "00 τρισ.", 14, "000 τρισ."]);
    },
    get C44() {
      return C44 = dart.constMap(core.int, core.String, [3, "0 χιλιάδες", 4, "00 χιλιάδες", 5, "000 χιλιάδες", 6, "0 εκατομμύρια", 7, "00 εκατομμύρια", 8, "000 εκατομμύρια", 9, "0 δισεκατομμύρια", 10, "00 δισεκατομμύρια", 11, "000 δισεκατομμύρια", 12, "0 τρισεκατομμύρια", 13, "00 τρισεκατομμύρια", 14, "000 τρισεκατομμύρια"]);
    },
    get C45() {
      return C45 = dart.constMap(core.int, core.String, [3, "0 χιλ. ¤", 4, "00 χιλ. ¤", 5, "000 χιλ. ¤", 6, "0 εκ. ¤", 7, "00 εκ. ¤", 8, "000 εκ. ¤", 9, "0 δισ. ¤", 10, "00 δισ. ¤", 11, "000 δισ. ¤", 12, "0 τρισ. ¤", 13, "00 τρισ. ¤", 14, "000 τρισ. ¤"]);
    },
    get C46() {
      return C46 = dart.constMap(core.int, core.String, [3, "0 thousand", 4, "00 thousand", 5, "000 thousand", 6, "0 million", 7, "00 million", 8, "000 million", 9, "0 billion", 10, "00 billion", 11, "000 billion", 12, "0 trillion", 13, "00 trillion", 14, "000 trillion"]);
    },
    get C47() {
      return C47 = dart.constMap(core.int, core.String, [3, "¤0T", 4, "¤00T", 5, "¤0L", 6, "¤00L", 7, "¤0Cr", 8, "¤00Cr", 9, "¤000Cr", 10, "¤0TCr", 11, "¤00TCr", 12, "¤0LCr", 13, "¤00LCr", 14, "¤000LCr"]);
    },
    get C48() {
      return C48 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0000 M", 10, "00 mil M", 11, "000 mil M", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C49() {
      return C49 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 millones", 7, "00 millones", 8, "000 millones", 9, "0 mil millones", 10, "00 mil millones", 11, "000 mil millones", 12, "0 billones", 13, "00 billones", 14, "000 billones"]);
    },
    get C50() {
      return C50 = dart.constMap(core.int, core.String, [3, "0 mil ¤", 4, "00 mil ¤", 5, "000 mil ¤", 6, "0 M¤", 7, "00 M¤", 8, "000 M¤", 9, "0000 M¤", 10, "00 mil M¤", 11, "000 mil M¤", 12, "0 B¤", 13, "00 B¤", 14, "000 B¤"]);
    },
    get C51() {
      return C51 = dart.constMap(core.int, core.String, [3, "0 K", 4, "00 k", 5, "000 k", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0k M", 10, "00k M", 11, "000k M", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C52() {
      return C52 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 millones", 7, "00 millones", 8, "000 millones", 9, "0 mil millones", 10, "00 mil millones", 11, "000 mil millones", 12, "0 billón", 13, "00 billones", 14, "000 billones"]);
    },
    get C53() {
      return C53 = dart.constMap(core.int, core.String, [3, "¤0 K", 4, "¤00 K", 5, "¤000 K", 6, "¤0 M", 7, "¤00 M", 8, "¤000 M", 9, "¤0000 M", 10, "¤00 MRD", 11, "¤000 MRD", 12, "¤0 B", 13, "¤00 B", 14, "¤000 B"]);
    },
    get C54() {
      return C54 = dart.constMap(core.int, core.String, [3, "0 k", 4, "00 k", 5, "000 k", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0000 M", 10, "00 mil M", 11, "000 mil M", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C55() {
      return C55 = dart.constMap(core.int, core.String, [3, "0 k¤", 4, "00 k¤", 5, "000 k¤", 6, "0 M¤", 7, "00 M¤", 8, "000 M¤", 9, "0000 M¤", 10, "00 MRD ¤", 11, "000 MRD ¤", 12, "0 B¤", 13, "00 B¤", 14, "000 B¤"]);
    },
    get C56() {
      return C56 = dart.constMap(core.int, core.String, [3, "0 K", 4, "00 K", 5, "000 K", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0 B", 10, "00 B", 11, "000 B", 12, "0 T", 13, "00 T", 14, "000 T"]);
    },
    get C57() {
      return C57 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 millones", 7, "00 millones", 8, "000 millones", 9, "0 billones", 10, "00 billones", 11, "000 billones", 12, "0 trillones", 13, "00 trillones", 14, "000 trillones"]);
    },
    get C58() {
      return C58 = dart.constMap(core.int, core.String, [3, "0 K ¤", 4, "00 K ¤", 5, "000 K ¤", 6, "0 M ¤", 7, "00 M ¤", 8, "000 M ¤", 9, "0000 M ¤", 10, "¤00 B", 11, "¤000 B", 12, "¤0 T", 13, "¤00 T", 14, "¤000 T"]);
    },
    get C59() {
      return C59 = dart.constMap(core.int, core.String, [3, "0 tuh", 4, "00 tuh", 5, "000 tuh", 6, "0 mln", 7, "00 mln", 8, "000 mln", 9, "0 mld", 10, "00 mld", 11, "000 mld", 12, "0 trl", 13, "00 trl", 14, "000 trl"]);
    },
    get C60() {
      return C60 = dart.constMap(core.int, core.String, [3, "0 tuhat", 4, "00 tuhat", 5, "000 tuhat", 6, "0 miljonit", 7, "00 miljonit", 8, "000 miljonit", 9, "0 miljardit", 10, "00 miljardit", 11, "000 miljardit", 12, "0 triljonit", 13, "00 triljonit", 14, "000 triljonit"]);
    },
    get C61() {
      return C61 = dart.constMap(core.int, core.String, [3, "0 tuh ¤", 4, "00 tuh ¤", 5, "000 tuh ¤", 6, "0 mln ¤", 7, "00 mln ¤", 8, "000 mln ¤", 9, "0 mld ¤", 10, "00 mld ¤", 11, "000 mld ¤", 12, "0 trl ¤", 13, "00 trl ¤", 14, "000 trl ¤"]);
    },
    get C62() {
      return C62 = dart.constMap(core.int, core.String, [3, "0000", 4, "00000", 5, "000000", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0000 M", 10, "00000 M", 11, "000000 M", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C63() {
      return C63 = dart.constMap(core.int, core.String, [3, "0000", 4, "00000", 5, "000000", 6, "0 milioi", 7, "00 milioi", 8, "000 milioi", 9, "0000 milioi", 10, "00000 milioi", 11, "000000 milioi", 12, "0 bilioi", 13, "00 bilioi", 14, "000 bilioi"]);
    },
    get C64() {
      return C64 = dart.constMap(core.int, core.String, [3, "0000 ¤", 4, "00000 ¤", 5, "000000 ¤", 6, "0 M ¤", 7, "00 M ¤", 8, "000 M ¤", 9, "0000 M ¤", 10, "00000 M ¤", 11, "000000 M ¤", 12, "0 B ¤", 13, "00 B ¤", 14, "000 B ¤"]);
    },
    get C65() {
      return C65 = dart.constMap(core.int, core.String, [3, "0 هزار", 4, "00 هزار", 5, "000 هزار", 6, "0 میلیون", 7, "00 میلیون", 8, "000 م", 9, "0 م", 10, "00 م", 11, "000 میلیارد", 12, "0 تریلیون", 13, "00 ت", 14, "000 ت"]);
    },
    get C66() {
      return C66 = dart.constMap(core.int, core.String, [3, "0 هزار", 4, "00 هزار", 5, "000 هزار", 6, "0 میلیون", 7, "00 میلیون", 8, "000 میلیون", 9, "0 میلیارد", 10, "00 میلیارد", 11, "000 میلیارد", 12, "0 هزارمیلیارد", 13, "00 هزارمیلیارد", 14, "000 هزارمیلیارد"]);
    },
    get C67() {
      return C67 = dart.constMap(core.int, core.String, [3, "0 هزار ¤", 4, "00 هزار ¤", 5, "000 هزار ¤", 6, "0 میلیون ¤", 7, "00 میلیون ¤", 8, "000 میلیون ¤", 9, "0 میلیارد ¤", 10, "00 میلیارد ¤", 11, "000 میلیارد ¤", 12, "0 هزارمیلیارد ¤", 13, "00 هزارمیلیارد ¤", 14, "000 هزارمیلیارد ¤"]);
    },
    get C68() {
      return C68 = dart.constMap(core.int, core.String, [3, "0 t.", 4, "00 t.", 5, "000 t.", 6, "0 milj.", 7, "00 milj.", 8, "000 milj.", 9, "0 mrd.", 10, "00 mrd.", 11, "000 mrd.", 12, "0 bilj.", 13, "00 bilj.", 14, "000 bilj."]);
    },
    get C69() {
      return C69 = dart.constMap(core.int, core.String, [3, "0 tuhatta", 4, "00 tuhatta", 5, "000 tuhatta", 6, "0 miljoonaa", 7, "00 miljoonaa", 8, "000 miljoonaa", 9, "0 miljardia", 10, "00 miljardia", 11, "000 miljardia", 12, "0 biljoonaa", 13, "00 biljoonaa", 14, "000 biljoonaa"]);
    },
    get C70() {
      return C70 = dart.constMap(core.int, core.String, [3, "0 t. ¤", 4, "00 t. ¤", 5, "000 t. ¤", 6, "0 milj. ¤", 7, "00 milj. ¤", 8, "000 milj. ¤", 9, "0 mrd. ¤", 10, "00 mrd. ¤", 11, "000 mrd. ¤", 12, "0 bilj. ¤", 13, "00 bilj. ¤", 14, "000 bilj. ¤"]);
    },
    get C71() {
      return C71 = dart.constMap(core.int, core.String, [3, "0 na libo", 4, "00 na libo", 5, "000 na libo", 6, "0 na milyon", 7, "00 na milyon", 8, "000 na milyon", 9, "0 na bilyon", 10, "00 na bilyon", 11, "000 na bilyon", 12, "0 na trilyon", 13, "00 na trilyon", 14, "000 na trilyon"]);
    },
    get C72() {
      return C72 = dart.constMap(core.int, core.String, [3, "0 k", 4, "00 k", 5, "000 k", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0 Md", 10, "00 Md", 11, "000 Md", 12, "0 Bn", 13, "00 Bn", 14, "000 Bn"]);
    },
    get C73() {
      return C73 = dart.constMap(core.int, core.String, [3, "0 mille", 4, "00 mille", 5, "000 mille", 6, "0 millions", 7, "00 millions", 8, "000 millions", 9, "0 milliards", 10, "00 milliards", 11, "000 milliards", 12, "0 billions", 13, "00 billions", 14, "000 billions"]);
    },
    get C74() {
      return C74 = dart.constMap(core.int, core.String, [3, "0 k ¤", 4, "00 k ¤", 5, "000 k ¤", 6, "0 M ¤", 7, "00 M ¤", 8, "000 M ¤", 9, "0 Md ¤", 10, "00 Md ¤", 11, "000 Md ¤", 12, "0 Bn ¤", 13, "00 Bn ¤", 14, "000 Bn ¤"]);
    },
    get C75() {
      return C75 = dart.constMap(core.int, core.String, [3, "0 k", 4, "00 k", 5, "000 k", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0 G", 10, "00 G", 11, "000 G", 12, "0 T", 13, "00 T", 14, "000 T"]);
    },
    get C76() {
      return C76 = dart.constMap(core.int, core.String, [3, "0k", 4, "00k", 5, "000k", 6, "0M", 7, "00M", 8, "000M", 9, "0B", 10, "00B", 11, "000B", 12, "0T", 13, "00T", 14, "000T"]);
    },
    get C77() {
      return C77 = dart.constMap(core.int, core.String, [3, "0 míle", 4, "00 míle", 5, "000 míle", 6, "0 milliún", 7, "00 milliún", 8, "000 milliún", 9, "0 billiún", 10, "00 billiún", 11, "000 billiún", 12, "0 trilliún", 13, "00 trilliún", 14, "000 trilliún"]);
    },
    get C78() {
      return C78 = dart.constMap(core.int, core.String, [3, "¤0k", 4, "¤00k", 5, "¤000k", 6, "¤0M", 7, "¤00M", 8, "¤000M", 9, "¤0B", 10, "¤00B", 11, "¤000B", 12, "¤0T", 13, "¤00T", 14, "¤000T"]);
    },
    get C79() {
      return C79 = dart.constMap(core.int, core.String, [3, "0", 4, "0", 5, "0", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0", 10, "0", 11, "0", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C80() {
      return C80 = dart.constMap(core.int, core.String, [3, "0", 4, "0", 5, "0", 6, "0 millóns", 7, "00 millóns", 8, "000 millóns", 9, "0", 10, "0", 11, "0", 12, "0 billóns", 13, "00 billóns", 14, "000 billóns"]);
    },
    get C81() {
      return C81 = dart.constMap(core.int, core.String, [3, "0 ¤", 4, "0 ¤", 5, "0 ¤", 6, "0 M¤", 7, "00 M¤", 8, "000 M¤", 9, "0 ¤", 10, "0 ¤", 11, "0 ¤", 12, "0 B¤", 13, "00 B¤", 14, "000 B¤"]);
    },
    get C82() {
      return C82 = dart.constMap(core.int, core.String, [3, "0 Tsg.", 4, "00 Tsg.", 5, "000 Tsg.", 6, "0 Mio.", 7, "00 Mio.", 8, "000 Mio.", 9, "0 Mrd.", 10, "00 Mrd.", 11, "000 Mrd.", 12, "0 Bio.", 13, "00 Bio.", 14, "000 Bio."]);
    },
    get C83() {
      return C83 = dart.constMap(core.int, core.String, [3, "0 Tuusig", 4, "00 Tuusig", 5, "000 Tuusig", 6, "0 Millioone", 7, "00 Millioone", 8, "000 Millioone", 9, "0 Milliarde", 10, "00 Milliarde", 11, "000 Milliarde", 12, "0 Billioone", 13, "00 Billioone", 14, "000 Billioone"]);
    },
    get C84() {
      return C84 = dart.constMap(core.int, core.String, [3, "0 Tsg. ¤", 4, "00 Tsg. ¤", 5, "000 Tsg. ¤", 6, "0 Mio. ¤", 7, "00 Mio. ¤", 8, "000 Mio. ¤", 9, "0 Mrd. ¤", 10, "00 Mrd. ¤", 11, "000 Mrd. ¤", 12, "0 Bio. ¤", 13, "00 Bio. ¤", 14, "000 Bio. ¤"]);
    },
    get C85() {
      return C85 = dart.constMap(core.int, core.String, [3, "0 હજાર", 4, "00 હજાર", 5, "0 લાખ", 6, "00 લાખ", 7, "0 કરોડ", 8, "00 કરોડ", 9, "0 અબજ", 10, "00 અબજ", 11, "0 નિખર્વ", 12, "0 મહાપદ્મ", 13, "0 શંકુ", 14, "0 જલધિ"]);
    },
    get C86() {
      return C86 = dart.constMap(core.int, core.String, [3, "0 હજાર", 4, "00 હજાર", 5, "0 લાખ", 6, "00 લાખ", 7, "0 કરોડ", 8, "00 કરોડ", 9, "0 અબજ", 10, "00 અબજ", 11, "0 નિખર્વ", 12, "0 મહાપદ્મ", 13, "0 શંકુ", 14, "0 જલધિ"]);
    },
    get C87() {
      return C87 = dart.constMap(core.int, core.String, [3, "¤0 હજાર", 4, "¤00 હજાર", 5, "¤0 લાખ", 6, "¤00 લાખ", 7, "¤0 કરોડ", 8, "¤00 કરોડ", 9, "¤0 અબજ", 10, "¤00 અબજ", 11, "¤0 નિખર્વ", 12, "¤0 મહાપદ્મ", 13, "¤0 શંકુ", 14, "¤0 જલધિ"]);
    },
    get C88() {
      return C88 = dart.constMap(core.int, core.String, [3, "¤0K", 4, "¤00K", 5, "¤000K", 6, "¤0M", 7, "¤00M", 8, "¤000M", 9, "¤0G", 10, "¤00G", 11, "¤000G", 12, "¤0T", 13, "¤00T", 14, "¤000T"]);
    },
    get C89() {
      return C89 = dart.constMap(core.int, core.String, [3, "‏0 אלף", 4, "‏00 אלף", 5, "‏000 אלף", 6, "‏0 מיליון", 7, "‏00 מיליון", 8, "‏000 מיליון", 9, "‏0 מיליארד", 10, "‏00 מיליארד", 11, "‏000 מיליארד", 12, "‏0 טריליון", 13, "‏00 טריליון", 14, "‏000 טריליון"]);
    },
    get C90() {
      return C90 = dart.constMap(core.int, core.String, [3, "¤ 0K", 4, "¤ 00K", 5, "¤000K", 6, "¤0M", 7, "¤00M", 8, "¤000M", 9, "¤0B", 10, "¤00B", 11, "¤000B", 12, "¤0T", 13, "¤00T", 14, "¤000T"]);
    },
    get C91() {
      return C91 = dart.constMap(core.int, core.String, [3, "0 हज़ार", 4, "00 हज़ार", 5, "0 लाख", 6, "00 लाख", 7, "0 क॰", 8, "00 क॰", 9, "0 अ॰", 10, "00 अ॰", 11, "0 ख॰", 12, "00 ख॰", 13, "0 नील", 14, "00 नील"]);
    },
    get C92() {
      return C92 = dart.constMap(core.int, core.String, [3, "0 हज़ार", 4, "00 हज़ार", 5, "0 लाख", 6, "00 लाख", 7, "0 करोड़", 8, "00 करोड़", 9, "0 अरब", 10, "00 अरब", 11, "0 खरब", 12, "00 खरब", 13, "000 खरब", 14, "0000 खरब"]);
    },
    get C93() {
      return C93 = dart.constMap(core.int, core.String, [3, "¤0 हज़ार", 4, "¤00 हज़ार", 5, "¤0 लाख", 6, "¤00 लाख", 7, "¤0 क॰", 8, "¤00 क॰", 9, "¤0 अ॰", 10, "¤00 अ॰", 11, "¤0 ख॰", 12, "¤00 ख॰", 13, "¤0 नील", 14, "¤00 नील"]);
    },
    get C94() {
      return C94 = dart.constMap(core.int, core.String, [3, "0 tis.", 4, "00 tis.", 5, "000 tis.", 6, "0 mil.", 7, "00 mil.", 8, "000 mil.", 9, "0 mlr.", 10, "00 mlr.", 11, "000 mlr.", 12, "0 bil.", 13, "00 bil.", 14, "000 bil."]);
    },
    get C95() {
      return C95 = dart.constMap(core.int, core.String, [3, "0 tisuća", 4, "00 tisuća", 5, "000 tisuća", 6, "0 milijuna", 7, "00 milijuna", 8, "000 milijuna", 9, "0 milijardi", 10, "00 milijardi", 11, "000 milijardi", 12, "0 bilijuna", 13, "00 bilijuna", 14, "000 bilijuna"]);
    },
    get C96() {
      return C96 = dart.constMap(core.int, core.String, [3, "0000¤", 4, "00 tis. ¤", 5, "000 tis. ¤", 6, "0 mil. ¤", 7, "00 mil. ¤", 8, "000 mil. ¤", 9, "0 mlr. ¤", 10, "00 mlr. ¤", 11, "000 mlr. ¤", 12, "0 bil. ¤", 13, "00 bil. ¤", 14, "000 bil. ¤"]);
    },
    get C97() {
      return C97 = dart.constMap(core.int, core.String, [3, "0 E", 4, "00 E", 5, "000 E", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0 Mrd", 10, "00 Mrd", 11, "000 Mrd", 12, "0 B", 13, "00 B", 14, "000 B"]);
    },
    get C98() {
      return C98 = dart.constMap(core.int, core.String, [3, "0 ezer", 4, "00 ezer", 5, "000 ezer", 6, "0 millió", 7, "00 millió", 8, "000 millió", 9, "0 milliárd", 10, "00 milliárd", 11, "000 milliárd", 12, "0 billió", 13, "00 billió", 14, "000 billió"]);
    },
    get C99() {
      return C99 = dart.constMap(core.int, core.String, [3, "0 E ¤", 4, "00 E ¤", 5, "000 E ¤", 6, "0 M ¤", 7, "00 M ¤", 8, "000 M ¤", 9, "0 Mrd ¤", 10, "00 Mrd ¤", 11, "000 Mrd ¤", 12, "0 B ¤", 13, "00 B ¤", 14, "000 B ¤"]);
    },
    get C100() {
      return C100 = dart.constMap(core.int, core.String, [3, "0 հզր", 4, "00 հզր", 5, "000 հզր", 6, "0 մլն", 7, "00 մլն", 8, "000 մլն", 9, "0 մլրդ", 10, "00 մլրդ", 11, "000 մլրդ", 12, "0 տրլն", 13, "00 տրլն", 14, "000 տրլն"]);
    },
    get C101() {
      return C101 = dart.constMap(core.int, core.String, [3, "0 հազար", 4, "00 հազար", 5, "000 հազար", 6, "0 միլիոն", 7, "00 միլիոն", 8, "000 միլիոն", 9, "0 միլիարդ", 10, "00 միլիարդ", 11, "000 միլիարդ", 12, "0 տրիլիոն", 13, "00 տրիլիոն", 14, "000 տրիլիոն"]);
    },
    get C102() {
      return C102 = dart.constMap(core.int, core.String, [3, "0 հզր ¤", 4, "00 հզր ¤", 5, "000 հզր ¤", 6, "0 մլն ¤", 7, "00 մլն ¤", 8, "000 մլն ¤", 9, "0 մլրդ ¤", 10, "00 մլրդ ¤", 11, "000 մլրդ ¤", 12, "0 տրլն ¤", 13, "00 տրլն ¤", 14, "000 տրլն ¤"]);
    },
    get C103() {
      return C103 = dart.constMap(core.int, core.String, [3, "0 rb", 4, "00 rb", 5, "000 rb", 6, "0 jt", 7, "00 jt", 8, "000 jt", 9, "0 M", 10, "00 M", 11, "000 M", 12, "0 T", 13, "00 T", 14, "000 T"]);
    },
    get C104() {
      return C104 = dart.constMap(core.int, core.String, [3, "0 ribu", 4, "00 ribu", 5, "000 ribu", 6, "0 juta", 7, "00 juta", 8, "000 juta", 9, "0 miliar", 10, "00 miliar", 11, "000 miliar", 12, "0 triliun", 13, "00 triliun", 14, "000 triliun"]);
    },
    get C105() {
      return C105 = dart.constMap(core.int, core.String, [3, "¤0 rb", 4, "¤00 rb", 5, "¤000 rb", 6, "¤0 jt", 7, "¤00 jt", 8, "¤000 jt", 9, "¤0 M", 10, "¤00 M", 11, "¤000 M", 12, "¤0 T", 13, "¤00 T", 14, "¤000 T"]);
    },
    get C106() {
      return C106 = dart.constMap(core.int, core.String, [3, "0 þ.", 4, "00 þ.", 5, "000 þ.", 6, "0 m.", 7, "00 m.", 8, "000 m.", 9, "0 ma.", 10, "00 ma.", 11, "000 ma.", 12, "0 bn", 13, "00 bn", 14, "000 bn"]);
    },
    get C107() {
      return C107 = dart.constMap(core.int, core.String, [3, "0 þúsund", 4, "00 þúsund", 5, "000 þúsund", 6, "0 milljónir", 7, "00 milljónir", 8, "000 milljónir", 9, "0 milljarðar", 10, "00 milljarðar", 11, "000 milljarðar", 12, "0 billjónir", 13, "00 billjónir", 14, "000 billjónir"]);
    },
    get C108() {
      return C108 = dart.constMap(core.int, core.String, [3, "0 þ. ¤", 4, "00 þ. ¤", 5, "000 þ. ¤", 6, "0 m. ¤", 7, "00 m. ¤", 8, "000 m. ¤", 9, "0 ma. ¤", 10, "00 ma. ¤", 11, "000 ma. ¤", 12, "0 bn ¤", 13, "00 bn ¤", 14, "000 bn ¤"]);
    },
    get C109() {
      return C109 = dart.constMap(core.int, core.String, [3, "0", 4, "0", 5, "0", 6, "0 Mln", 7, "00 Mln", 8, "000 Mln", 9, "0 Mrd", 10, "00 Mrd", 11, "000 Mrd", 12, "0 Bln", 13, "00 Bln", 14, "000 Bln"]);
    },
    get C110() {
      return C110 = dart.constMap(core.int, core.String, [3, "0 mila", 4, "00 mila", 5, "000 mila", 6, "0 milioni", 7, "00 milioni", 8, "000 milioni", 9, "0 miliardi", 10, "00 miliardi", 11, "000 miliardi", 12, "0 mila miliardi", 13, "00 mila miliardi", 14, "000 mila miliardi"]);
    },
    get C111() {
      return C111 = dart.constMap(core.int, core.String, [3, "0", 4, "0", 5, "0", 6, "0 Mio ¤", 7, "00 Mio ¤", 8, "000 Mio ¤", 9, "0 Mrd ¤", 10, "00 Mrd ¤", 11, "000 Mrd ¤", 12, "0 Bln ¤", 13, "00 Bln ¤", 14, "000 Bln ¤"]);
    },
    get C112() {
      return C112 = dart.constMap(core.int, core.String, [3, "0", 4, "0万", 5, "00万", 6, "000万", 7, "0000万", 8, "0億", 9, "00億", 10, "000億", 11, "0000億", 12, "0兆", 13, "00兆", 14, "000兆"]);
    },
    get C113() {
      return C113 = dart.constMap(core.int, core.String, [3, "0", 4, "¤0万", 5, "¤00万", 6, "¤000万", 7, "¤0000万", 8, "¤0億", 9, "¤00億", 10, "¤000億", 11, "¤0000億", 12, "¤0兆", 13, "¤00兆", 14, "¤000兆"]);
    },
    get C114() {
      return C114 = dart.constMap(core.int, core.String, [3, "0 ათ.", 4, "00 ათ.", 5, "000 ათ.", 6, "0 მლნ.", 7, "00 მლნ.", 8, "000 მლნ.", 9, "0 მლრდ.", 10, "00 მლრდ.", 11, "000 მლრ.", 12, "0 ტრლ.", 13, "00 ტრლ.", 14, "000 ტრლ."]);
    },
    get C115() {
      return C115 = dart.constMap(core.int, core.String, [3, "0 ათასი", 4, "00 ათასი", 5, "000 ათასი", 6, "0 მილიონი", 7, "00 მილიონი", 8, "000 მილიონი", 9, "0 მილიარდი", 10, "00 მილიარდი", 11, "000 მილიარდი", 12, "0 ტრილიონი", 13, "00 ტრილიონი", 14, "000 ტრილიონი"]);
    },
    get C116() {
      return C116 = dart.constMap(core.int, core.String, [3, "0 ათ. ¤", 4, "00 ათ. ¤", 5, "000 ათ. ¤", 6, "0 მლნ. ¤", 7, "00 მლნ. ¤", 8, "000 მლნ. ¤", 9, "0 მლრდ. ¤", 10, "00 მლრდ. ¤", 11, "000 მლრ. ¤", 12, "0 ტრლ. ¤", 13, "00 ტრლ. ¤", 14, "000 ტრლ. ¤"]);
    },
    get C117() {
      return C117 = dart.constMap(core.int, core.String, [3, "0 мың", 4, "00 мың", 5, "000 м.", 6, "0 млн", 7, "00 млн", 8, "000 млн", 9, "0 млрд", 10, "00 млрд", 11, "000 млрд", 12, "0 трлн", 13, "00 трлн", 14, "000 трлн"]);
    },
    get C118() {
      return C118 = dart.constMap(core.int, core.String, [3, "0 мың", 4, "00 мың", 5, "000 мың", 6, "0 миллион", 7, "00 миллион", 8, "000 миллион", 9, "0 миллиард", 10, "00 миллиард", 11, "000 миллиард", 12, "0 триллион", 13, "00 триллион", 14, "000 триллион"]);
    },
    get C119() {
      return C119 = dart.constMap(core.int, core.String, [3, "0 мың ¤", 4, "00 мың ¤", 5, "000 мың ¤", 6, "0 млн ¤", 7, "00 млн ¤", 8, "000 млн ¤", 9, "0 млрд ¤", 10, "00 млрд ¤", 11, "000 млрд ¤", 12, "0 трлн ¤", 13, "00 трлн ¤", 14, "000 трлн ¤"]);
    },
    get C120() {
      return C120 = dart.constMap(core.int, core.String, [3, "0ពាន់", 4, "00 ពាន់", 5, "000 ពាន់", 6, "0 លាន", 7, "00 លាន", 8, "000 លាន", 9, "0 ប៊ីលាន", 10, "00 ប៊ីលាន", 11, "000 ប៊ីលាន", 12, "0 ទ្រីលាន", 13, "00 ទ្រីលាន", 14, "000 ទ្រីលាន"]);
    },
    get C121() {
      return C121 = dart.constMap(core.int, core.String, [3, "0 ពាន់", 4, "00 ពាន់", 5, "000ពាន់", 6, "0 លាន", 7, "00 លាន", 8, "000 លាន", 9, "0 ប៊ីលាន", 10, "00 ប៊ីលាន", 11, "000 ប៊ីលាន", 12, "0 ទ្រីលាន", 13, "00 ទ្រីលាន", 14, "000 ទ្រីលាន"]);
    },
    get C122() {
      return C122 = dart.constMap(core.int, core.String, [3, "¤0 ពាន់", 4, "¤00 ពាន់", 5, "¤000 ពាន់", 6, "¤0 លាន", 7, "¤00 លាន", 8, "¤000 លាន", 9, "¤0 ប៊ីលាន", 10, "¤00 ប៊ីលាន", 11, "¤000 ប៊ីលាន", 12, "¤0 ទ្រីលាន", 13, "¤00 ទ្រីលាន", 14, "¤000 ទ្រីលាន"]);
    },
    get C123() {
      return C123 = dart.constMap(core.int, core.String, [3, "0ಸಾ", 4, "00ಸಾ", 5, "000ಸಾ", 6, "0ಮಿ", 7, "00ಮಿ", 8, "000ಮಿ", 9, "0ಬಿ", 10, "00ಬಿ", 11, "000ಬಿ", 12, "0ಟ್ರಿ", 13, "00ಟ್ರಿ", 14, "000ಟ್ರಿ"]);
    },
    get C124() {
      return C124 = dart.constMap(core.int, core.String, [3, "0 ಸಾವಿರ", 4, "00 ಸಾವಿರ", 5, "000 ಸಾವಿರ", 6, "0 ಮಿಲಿಯನ್", 7, "00 ಮಿಲಿಯನ್", 8, "000 ಮಿಲಿಯನ್", 9, "0 ಬಿಲಿಯನ್", 10, "00 ಬಿಲಿಯನ್", 11, "000 ಬಿಲಿಯನ್", 12, "0 ಟ್ರಿಲಿಯನ್‌", 13, "00 ಟ್ರಿಲಿಯನ್‌", 14, "000 ಟ್ರಿಲಿಯನ್‌"]);
    },
    get C125() {
      return C125 = dart.constMap(core.int, core.String, [3, "¤0ಸಾ", 4, "¤00ಸಾ", 5, "¤000ಸಾ", 6, "¤0ಮಿ", 7, "¤00ಮಿ", 8, "¤000ಮಿ", 9, "¤0ಬಿ", 10, "¤00ಬಿ", 11, "¤000ಬಿ", 12, "¤0ಟ್ರಿ", 13, "¤00ಟ್ರಿ", 14, "¤000ಟ್ರಿ"]);
    },
    get C126() {
      return C126 = dart.constMap(core.int, core.String, [3, "0천", 4, "0만", 5, "00만", 6, "000만", 7, "0000만", 8, "0억", 9, "00억", 10, "000억", 11, "0000억", 12, "0조", 13, "00조", 14, "000조"]);
    },
    get C127() {
      return C127 = dart.constMap(core.int, core.String, [3, "¤0천", 4, "¤0만", 5, "¤00만", 6, "¤000만", 7, "¤0000만", 8, "¤0억", 9, "¤00억", 10, "¤000억", 11, "¤0000억", 12, "¤0조", 13, "¤00조", 14, "¤000조"]);
    },
    get C128() {
      return C128 = dart.constMap(core.int, core.String, [3, "0 миң", 4, "00 миң", 5, "000 миң", 6, "0 млн", 7, "00 млн", 8, "000 млн", 9, "0 млд", 10, "00 млд", 11, "000 млд", 12, "0 трлн", 13, "00 трлн", 14, "000 трлн"]);
    },
    get C129() {
      return C129 = dart.constMap(core.int, core.String, [3, "0 миң", 4, "00 миң", 5, "000 миң", 6, "0 миллион", 7, "00 миллион", 8, "000 миллион", 9, "0 миллиард", 10, "00 миллиард", 11, "000 миллиард", 12, "0 триллион", 13, "00 триллион", 14, "000 триллион"]);
    },
    get C130() {
      return C130 = dart.constMap(core.int, core.String, [3, "0 миң ¤", 4, "00 миң ¤", 5, "000 миң ¤", 6, "0 млн ¤", 7, "00 млн ¤", 8, "000 млн ¤", 9, "0 млд ¤", 10, "00 млд ¤", 11, "000 млд ¤", 12, "0 трлн ¤", 13, "00 трлн ¤", 14, "000 трлн ¤"]);
    },
    get C131() {
      return C131 = dart.constMap(core.int, core.String, [3, "0 ພັນ", 4, "00 ພັນ", 5, "000 ກີບ", 6, "0 ລ້ານ", 7, "00 ລ້ານ", 8, "000 ລ້ານ", 9, "0 ຕື້", 10, "00 ຕື້", 11, "000 ຕື້", 12, "0 ລ້ານລ້ານ", 13, "00ລລ", 14, "000ລລ"]);
    },
    get C132() {
      return C132 = dart.constMap(core.int, core.String, [3, "0 ພັນ", 4, "00 ພັນ", 5, "0 ແສນ", 6, "0 ລ້ານ", 7, "00 ລ້ານ", 8, "000 ລ້ານ", 9, "0 ຕື້", 10, "00 ຕື້", 11, "000 ຕື້", 12, "0 ລ້ານລ້ານ", 13, "00 ລ້ານລ້ານ", 14, "000 ລ້ານລ້ານ"]);
    },
    get C133() {
      return C133 = dart.constMap(core.int, core.String, [3, "¤0 ພັນ", 4, "¤00 ພັນ", 5, "¤000 ກີບ", 6, "¤0 ລ້ານ", 7, "¤00 ລ້ານ", 8, "¤000 ລ້ານ", 9, "¤0 ຕື້", 10, "¤00 ຕື້", 11, "¤000 ຕື້", 12, "¤0 ລ້ານລ້ານ", 13, "¤00 ລ້ານລ້ານ", 14, "¤000 ລ້ານລ້ານ"]);
    },
    get C134() {
      return C134 = dart.constMap(core.int, core.String, [3, "0 tūkst.", 4, "00 tūkst.", 5, "000 tūkst.", 6, "0 mln.", 7, "00 mln.", 8, "000 mln.", 9, "0 mlrd.", 10, "00 mlrd.", 11, "000 mlrd.", 12, "0 trln.", 13, "00 trln.", 14, "000 trln."]);
    },
    get C135() {
      return C135 = dart.constMap(core.int, core.String, [3, "0 tūkstančių", 4, "00 tūkstančių", 5, "000 tūkstančių", 6, "0 milijonų", 7, "00 milijonų", 8, "000 milijonų", 9, "0 milijardų", 10, "00 milijardų", 11, "000 milijardų", 12, "0 trilijonų", 13, "00 trilijonų", 14, "000 trilijonų"]);
    },
    get C136() {
      return C136 = dart.constMap(core.int, core.String, [3, "0 tūkst. ¤", 4, "00 tūkst. ¤", 5, "000 tūkst. ¤", 6, "0 mln. ¤", 7, "00 mln. ¤", 8, "000 mln. ¤", 9, "0 mlrd. ¤", 10, "00 mlrd. ¤", 11, "000 mlrd. ¤", 12, "0 trln. ¤", 13, "00 trln. ¤", 14, "000 trln. ¤"]);
    },
    get C137() {
      return C137 = dart.constMap(core.int, core.String, [3, "0 tūkst.", 4, "00 tūkst.", 5, "000 tūkst.", 6, "0 milj.", 7, "00 milj.", 8, "000 milj.", 9, "0 mljrd.", 10, "00 mljrd.", 11, "000 mljrd.", 12, "0 trilj.", 13, "00 trilj.", 14, "000 trilj."]);
    },
    get C138() {
      return C138 = dart.constMap(core.int, core.String, [3, "0 tūkstoši", 4, "00 tūkstoši", 5, "000 tūkstoši", 6, "0 miljoni", 7, "00 miljoni", 8, "000 miljoni", 9, "0 miljardi", 10, "00 miljardi", 11, "000 miljardi", 12, "0 triljoni", 13, "00 triljoni", 14, "000 triljoni"]);
    },
    get C139() {
      return C139 = dart.constMap(core.int, core.String, [3, "0 tūkst. ¤", 4, "00 tūkst. ¤", 5, "000 tūkst. ¤", 6, "0 milj. ¤", 7, "00 milj. ¤", 8, "000 milj. ¤", 9, "0 mljrd. ¤", 10, "00 mljrd. ¤", 11, "000 mljrd. ¤", 12, "0 trilj. ¤", 13, "00 trilj. ¤", 14, "000 trilj. ¤"]);
    },
    get C140() {
      return C140 = dart.constMap(core.int, core.String, [3, "0 илј.", 4, "00 илј.", 5, "000 илј.", 6, "0 мил.", 7, "00 мил.", 8, "000 М", 9, "0 милј.", 10, "00 милј.", 11, "000 ми.", 12, "0 бил.", 13, "00 бил.", 14, "000 бил."]);
    },
    get C141() {
      return C141 = dart.constMap(core.int, core.String, [3, "0 илјади", 4, "00 илјади", 5, "000 илјади", 6, "0 милиони", 7, "00 милиони", 8, "000 милиони", 9, "0 милијарди", 10, "00 милијарди", 11, "000 милијарди", 12, "0 билиони", 13, "00 билиони", 14, "000 билиони"]);
    },
    get C142() {
      return C142 = dart.constMap(core.int, core.String, [3, "0 илј. ¤ ", 4, "00 илј. ¤ ", 5, "000 илј. ¤ ", 6, "0 мил. ¤", 7, "00 мил. ¤", 8, "000 мил. ¤", 9, "0 милј. ¤", 10, "00 милј. ¤", 11, "000 милј. ¤", 12, "0 бил. ¤", 13, "00 бил. ¤", 14, "000 бил. ¤"]);
    },
    get C143() {
      return C143 = dart.constMap(core.int, core.String, [3, "0 ആയിരം", 4, "00 ആയിരം", 5, "000 ആയിരം", 6, "0 ദശലക്ഷം", 7, "00 ദശലക്ഷം", 8, "000 ദശലക്ഷം", 9, "0 ലക്ഷം കോടി", 10, "00 ലക്ഷം കോടി", 11, "000 ലക്ഷം കോടി", 12, "0 ട്രില്യൺ", 13, "00 ട്രില്യൺ", 14, "000 ട്രില്യൺ"]);
    },
    get C144() {
      return C144 = dart.constMap(core.int, core.String, [3, "0 мянга", 4, "00 мянга", 5, "000 мянга", 6, "0 сая", 7, "00 сая", 8, "000 сая", 9, "0 тэрбум", 10, "00 тэрбум", 11, "000Т", 12, "0ИН", 13, "00ИН", 14, "000ИН"]);
    },
    get C145() {
      return C145 = dart.constMap(core.int, core.String, [3, "0 мянга", 4, "00 мянга", 5, "000 мянга", 6, "0 сая", 7, "00 сая", 8, "000 сая", 9, "0 тэрбум", 10, "00 тэрбум", 11, "000 тэрбум", 12, "0 их наяд", 13, "00 их наяд", 14, "000 их наяд"]);
    },
    get C146() {
      return C146 = dart.constMap(core.int, core.String, [3, "¤ 0 мянга", 4, "¤ 00 мянга", 5, "¤000 мянга", 6, "¤0 сая", 7, "¤00 сая", 8, "¤000 сая", 9, "¤0 тэрбум", 10, "¤ 00 тэрбум", 11, "¤ 000 тэрбум", 12, "¤ 0 их наяд", 13, "¤ 00 их наяд", 14, "¤ 000 их наяд"]);
    },
    get C147() {
      return C147 = dart.constMap(core.int, core.String, [3, "0 ह", 4, "00 ह", 5, "0 लाख", 6, "00 लाख", 7, "0 कोटी", 8, "00 कोटी", 9, "0 अब्ज", 10, "00 अब्ज", 11, "0 खर्व", 12, "00 खर्व", 13, "0 पद्म", 14, "00 पद्म"]);
    },
    get C148() {
      return C148 = dart.constMap(core.int, core.String, [3, "0 हजार", 4, "00 हजार", 5, "0 लाख", 6, "00 लाख", 7, "0 कोटी", 8, "00 कोटी", 9, "0 अब्ज", 10, "00 अब्ज", 11, "0 खर्व", 12, "00 खर्व", 13, "0 पद्म", 14, "00 पद्म"]);
    },
    get C149() {
      return C149 = dart.constMap(core.int, core.String, [3, "¤0 ह", 4, "¤00 ह", 5, "¤0 लाख", 6, "¤00 लाख", 7, "¤0 कोटी", 8, "¤00 कोटी", 9, "¤0 अब्ज", 10, "¤00 अब्ज", 11, "¤0 खर्व", 12, "¤00 खर्व", 13, "¤0 पद्म", 14, "¤00 पद्म"]);
    },
    get C150() {
      return C150 = dart.constMap(core.int, core.String, [3, "0K", 4, "00K", 5, "000K", 6, "0J", 7, "00J", 8, "000J", 9, "0B", 10, "00B", 11, "000B", 12, "0T", 13, "00T", 14, "000T"]);
    },
    get C151() {
      return C151 = dart.constMap(core.int, core.String, [3, "0 ribu", 4, "00 ribu", 5, "000 ribu", 6, "0 juta", 7, "00 juta", 8, "000 juta", 9, "0 bilion", 10, "00 bilion", 11, "000 bilion", 12, "0 trilion", 13, "00 trilion", 14, "000 trilion"]);
    },
    get C152() {
      return C152 = dart.constMap(core.int, core.String, [3, "¤0K", 4, "¤00K", 5, "¤000K", 6, "¤0J", 7, "¤00J", 8, "¤000J", 9, "¤0B", 10, "¤00B", 11, "¤000B", 12, "¤0T", 13, "¤00T", 14, "¤000T"]);
    },
    get C153() {
      return C153 = dart.constMap(core.int, core.String, [3, "0ထောင်", 4, "0သောင်း", 5, "0သိန်း", 6, "0သန်း", 7, "0ကုဋေ", 8, "00ကုဋေ", 9, "ကုဋေ000", 10, "ကုဋေ0ထ", 11, "ကုဋေ0သ", 12, "ဋေ0သိန်း", 13, "ဋေ0သန်း", 14, "0ကောဋိ"]);
    },
    get C154() {
      return C154 = dart.constMap(core.int, core.String, [3, "0ထောင်", 4, "0သောင်း", 5, "0သိန်း", 6, "0သန်း", 7, "0ကုဋေ", 8, "00ကုဋေ", 9, "ကုဋေ000", 10, "ကုဋေ0000", 11, "ကုဋေ0သောင်း", 12, "ကုဋေ0သိန်း", 13, "ကုဋေ0သန်း", 14, "0ကောဋိ"]);
    },
    get C155() {
      return C155 = dart.constMap(core.int, core.String, [3, "¤ 0ထောင်", 4, "¤ 0သောင်း", 5, "¤ 0သိန်း", 6, "¤ 0သန်း", 7, "¤ 0ကုဋေ", 8, "¤ 00ကုဋေ", 9, "¤ ကုဋေ000", 10, "¤ ကုဋေ0000", 11, "¤ ကုဋေ0သောင်း", 12, "¤ ကုဋေ0သိန်း", 13, "¤ ကုဋေ0သန်း", 14, "¤ 0ကောဋိ"]);
    },
    get C156() {
      return C156 = dart.constMap(core.int, core.String, [3, "0k", 4, "00k", 5, "000k", 6, "0 mill.", 7, "00 mill.", 8, "000 mill.", 9, "0 mrd.", 10, "00 mrd.", 11, "000 mrd.", 12, "0 bill.", 13, "00 bill.", 14, "000 bill."]);
    },
    get C157() {
      return C157 = dart.constMap(core.int, core.String, [3, "0 tusen", 4, "00 tusen", 5, "000 tusen", 6, "0 millioner", 7, "00 millioner", 8, "000 millioner", 9, "0 milliarder", 10, "00 milliarder", 11, "000 milliarder", 12, "0 billioner", 13, "00 billioner", 14, "000 billioner"]);
    },
    get C158() {
      return C158 = dart.constMap(core.int, core.String, [3, "¤ 0k", 4, "¤ 00k", 5, "¤ 000k", 6, "¤ 0 mill.", 7, "¤ 00 mill.", 8, "¤ 000 mill.", 9, "¤ 0 mrd.", 10, "¤ 00 mrd.", 11, "¤ 000 mrd.", 12, "¤ 0 bill.", 13, "¤ 00 bill.", 14, "¤ 000 bill."]);
    },
    get C159() {
      return C159 = dart.constMap(core.int, core.String, [3, "0 हजार", 4, "00 हजार", 5, "0 लाख", 6, "00 लाख", 7, "0 करोड", 8, "00 करोड", 9, "0 अरब", 10, "00 अरब", 11, "0 खरब", 12, "00 खरब", 13, "0 शंख", 14, "00 शंख"]);
    },
    get C160() {
      return C160 = dart.constMap(core.int, core.String, [3, "0 हजार", 4, "00 हजार", 5, "0 लाख", 6, "0 करोड", 7, "00 करोड", 8, "000 करोड", 9, "0 अरब", 10, "00 अरब", 11, "000 अरब", 12, "00 खरब", 13, "0 शंख", 14, "00 शंख"]);
    },
    get C161() {
      return C161 = dart.constMap(core.int, core.String, [3, "¤ 0 हजार", 4, "¤ 00 हजार", 5, "¤ 0 लाख", 6, "¤ 00 लाख", 7, "¤ 0 करोड", 8, "¤ 00 करोड", 9, "¤ 0 अरब", 10, "¤ 00 अरब", 11, "¤ 0 खरब", 12, "¤ 00 खरब", 13, "¤ 0 शंख", 14, "¤ 00 शंख"]);
    },
    get C162() {
      return C162 = dart.constMap(core.int, core.String, [3, "0K", 4, "00K", 5, "000K", 6, "0 mln.", 7, "00 mln.", 8, "000 mln.", 9, "0 mld.", 10, "00 mld.", 11, "000 mld.", 12, "0 bln.", 13, "00 bln.", 14, "000 bln."]);
    },
    get C163() {
      return C163 = dart.constMap(core.int, core.String, [3, "0 duizend", 4, "00 duizend", 5, "000 duizend", 6, "0 miljoen", 7, "00 miljoen", 8, "000 miljoen", 9, "0 miljard", 10, "00 miljard", 11, "000 miljard", 12, "0 biljoen", 13, "00 biljoen", 14, "000 biljoen"]);
    },
    get C164() {
      return C164 = dart.constMap(core.int, core.String, [3, "¤ 0K", 4, "¤ 00K", 5, "¤ 000K", 6, "¤ 0 mln.", 7, "¤ 00 mln.", 8, "¤ 000 mln.", 9, "¤ 0 mld.", 10, "¤ 00 mld.", 11, "¤ 000 mld.", 12, "¤ 0 bln.", 13, "¤ 00 bln.", 14, "¤ 000 bln."]);
    },
    get C165() {
      return C165 = dart.constMap(core.int, core.String, [3, "0ହ", 4, "00ହ", 5, "000ହ", 6, "0ନି", 7, "00ନି", 8, "000ନି", 9, "0ବି", 10, "00ବି", 11, "000ବି", 12, "0ଟ୍ରି", 13, "00ଟ୍ରି", 14, "000ଟ୍ରି"]);
    },
    get C166() {
      return C166 = dart.constMap(core.int, core.String, [3, "0 ହଜାର", 4, "00 ହଜାର", 5, "000 ହଜାର", 6, "0 ନିୟୁତ", 7, "00 ନିୟୁତ", 8, "000 ନିୟୁତ", 9, "0 ଶହକୋଟି", 10, "00 ଶହକୋଟି", 11, "000 ଶହକୋଟି", 12, "0 ଲକ୍ଷକୋଟି", 13, "00 ଲକ୍ଷକୋଟି", 14, "000 ଲକ୍ଷକୋଟି"]);
    },
    get C167() {
      return C167 = dart.constMap(core.int, core.String, [3, "¤0ହ", 4, "¤00ହ", 5, "¤000ହ", 6, "¤0ନି", 7, "¤00ନି", 8, "¤000ନି", 9, "¤0ବି", 10, "¤00ବି", 11, "¤000ବି", 12, "¤0ଟ୍ରି", 13, "¤00ଟ୍ରି", 14, "¤000ଟ୍ରି"]);
    },
    get C168() {
      return C168 = dart.constMap(core.int, core.String, [3, "0 ਹਜ਼ਾਰ", 4, "00 ਹਜ਼ਾਰ", 5, "0 ਲੱਖ", 6, "00 ਲੱਖ", 7, "0 ਕਰੋੜ", 8, "00 ਕਰੋੜ", 9, "0 ਅਰਬ", 10, "00 ਅਰਬ", 11, "0 ਖਰਬ", 12, "00 ਖਰਬ", 13, "0 ਨੀਲ", 14, "00 ਨੀਲ"]);
    },
    get C169() {
      return C169 = dart.constMap(core.int, core.String, [3, "0 ਹਜ਼ਾਰ", 4, "00 ਹਜ਼ਾਰ", 5, "0 ਲੱਖ", 6, "00 ਲੱਖ", 7, "0 ਕਰੋੜ", 8, "00 ਕਰੋੜ", 9, "0 ਅਰਬ", 10, "00 ਅਰਬ", 11, "0 ਖਰਬ", 12, "00 ਖਰਬ", 13, "0 ਨੀਲ", 14, "00 ਨੀਲ"]);
    },
    get C170() {
      return C170 = dart.constMap(core.int, core.String, [3, "¤ 0 ਹਜ਼ਾਰ", 4, "¤ 00 ਹਜ਼ਾਰ", 5, "¤ 0 ਲੱਖ", 6, "¤ 00 ਲੱਖ", 7, "¤ 0 ਕਰੋੜ", 8, "¤ 00 ਕਰੋੜ", 9, "¤ 0 ਅਰਬ", 10, "¤ 00 ਅਰਬ", 11, "¤ 0 ਖਰਬ", 12, "¤ 00 ਖਰਬ", 13, "¤ 0 ਨੀਲ", 14, "¤ 00 ਨੀਲ"]);
    },
    get C171() {
      return C171 = dart.constMap(core.int, core.String, [3, "0 tys.", 4, "00 tys.", 5, "000 tys.", 6, "0 mln", 7, "00 mln", 8, "000 mln", 9, "0 mld", 10, "00 mld", 11, "000 mld", 12, "0 bln", 13, "00 bln", 14, "000 bln"]);
    },
    get C172() {
      return C172 = dart.constMap(core.int, core.String, [3, "0 tysiąca", 4, "00 tysiąca", 5, "000 tysiąca", 6, "0 miliona", 7, "00 miliona", 8, "000 miliona", 9, "0 miliarda", 10, "00 miliarda", 11, "000 miliarda", 12, "0 biliona", 13, "00 biliona", 14, "000 biliona"]);
    },
    get C173() {
      return C173 = dart.constMap(core.int, core.String, [3, "0 tys. ¤", 4, "00 tys. ¤", 5, "000 tys. ¤", 6, "0 mln ¤", 7, "00 mln ¤", 8, "000 mln ¤", 9, "0 mld ¤", 10, "00 mld ¤", 11, "000 mld ¤", 12, "0 bln ¤", 13, "00 bln ¤", 14, "000 bln ¤"]);
    },
    get C174() {
      return C174 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 mi", 7, "00 mi", 8, "000 mi", 9, "0 bi", 10, "00 bi", 11, "000 bi", 12, "0 tri", 13, "00 tri", 14, "000 tri"]);
    },
    get C175() {
      return C175 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 milhões", 7, "00 milhões", 8, "000 milhões", 9, "0 bilhões", 10, "00 bilhões", 11, "000 bilhões", 12, "0 trilhões", 13, "00 trilhões", 14, "000 trilhões"]);
    },
    get C176() {
      return C176 = dart.constMap(core.int, core.String, [3, "¤ 0 mil", 4, "¤ 00 mil", 5, "¤ 000 mil", 6, "¤ 0 mi", 7, "¤ 00 mi", 8, "¤ 000 mi", 9, "¤ 0 bi", 10, "¤ 00 bi", 11, "¤ 000 bi", 12, "¤ 0 tri", 13, "¤ 00 tri", 14, "¤ 000 tri"]);
    },
    get C177() {
      return C177 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 M", 7, "00 M", 8, "000 M", 9, "0 mM", 10, "00 mM", 11, "000 mM", 12, "0 Bi", 13, "00 Bi", 14, "000 Bi"]);
    },
    get C178() {
      return C178 = dart.constMap(core.int, core.String, [3, "0 mil", 4, "00 mil", 5, "000 mil", 6, "0 milhões", 7, "00 milhões", 8, "000 milhões", 9, "0 mil milhões", 10, "00 mil milhões", 11, "000 mil milhões", 12, "0 biliões", 13, "00 biliões", 14, "000 biliões"]);
    },
    get C179() {
      return C179 = dart.constMap(core.int, core.String, [3, "0 mil ¤", 4, "00 mil ¤", 5, "000 mil ¤", 6, "0 M ¤", 7, "00 M ¤", 8, "000 M ¤", 9, "0 mM ¤", 10, "00 mM ¤", 11, "000 mM ¤", 12, "0 B ¤", 13, "00 B ¤", 14, "000 B ¤"]);
    },
    get C180() {
      return C180 = dart.constMap(core.int, core.String, [3, "0 K", 4, "00 K", 5, "000 K", 6, "0 mil.", 7, "00 mil.", 8, "000 mil.", 9, "0 mld.", 10, "00 mld.", 11, "000 mld.", 12, "0 tril.", 13, "00 tril.", 14, "000 tril."]);
    },
    get C181() {
      return C181 = dart.constMap(core.int, core.String, [3, "0 de mii", 4, "00 de mii", 5, "000 de mii", 6, "0 de milioane", 7, "00 de milioane", 8, "000 de milioane", 9, "0 de miliarde", 10, "00 de miliarde", 11, "000 de miliarde", 12, "0 de trilioane", 13, "00 de trilioane", 14, "000 de trilioane"]);
    },
    get C182() {
      return C182 = dart.constMap(core.int, core.String, [3, "0 mii ¤", 4, "00 mii ¤", 5, "000 mii ¤", 6, "0 mil. ¤", 7, "00 mil. ¤", 8, "000 mil. ¤", 9, "0 mld. ¤", 10, "00 mld. ¤", 11, "000 mld. ¤", 12, "0 tril. ¤", 13, "00 tril. ¤", 14, "000 tril. ¤"]);
    },
    get C183() {
      return C183 = dart.constMap(core.int, core.String, [3, "0 тысячи", 4, "00 тысячи", 5, "000 тысячи", 6, "0 миллиона", 7, "00 миллиона", 8, "000 миллиона", 9, "0 миллиарда", 10, "00 миллиарда", 11, "000 миллиарда", 12, "0 триллиона", 13, "00 триллиона", 14, "000 триллиона"]);
    },
    get C184() {
      return C184 = dart.constMap(core.int, core.String, [3, "0 тыс. ¤", 4, "00 тыс. ¤", 5, "000 тыс. ¤", 6, "0 млн ¤", 7, "00 млн ¤", 8, "000 млн ¤", 9, "0 млрд ¤", 10, "00 млрд ¤", 11, "000 млрд ¤", 12, "0 трлн ¤", 13, "00 трлн ¤", 14, "000 трлн ¤"]);
    },
    get C185() {
      return C185 = dart.constMap(core.int, core.String, [3, "ද0", 4, "ද00", 5, "ද000", 6, "මි0", 7, "මි00", 8, "මි000", 9, "බි0", 10, "බි00", 11, "බි000", 12, "ට්‍රි0", 13, "ට්‍රි00", 14, "ට්‍රි000"]);
    },
    get C186() {
      return C186 = dart.constMap(core.int, core.String, [3, "දහස 0", 4, "දහස 00", 5, "දහස 000", 6, "මිලියන 0", 7, "මිලියන 00", 8, "මිලියන 000", 9, "බිලියන 0", 10, "බිලියන 00", 11, "බිලියන 000", 12, "ට්‍රිලියන 0", 13, "ට්‍රිලියන 00", 14, "ට්‍රිලියන 000"]);
    },
    get C187() {
      return C187 = dart.constMap(core.int, core.String, [3, "¤ද0", 4, "¤ද00", 5, "¤ද000", 6, "¤මි0", 7, "¤මි00", 8, "¤මි000", 9, "¤බි0", 10, "¤බි00", 11, "¤බි000", 12, "¤ට්‍රි0", 13, "¤ට්‍රි00", 14, "¤ට්‍රි000"]);
    },
    get C188() {
      return C188 = dart.constMap(core.int, core.String, [3, "0 tisíc", 4, "00 tisíc", 5, "000 tisíc", 6, "0 miliónov", 7, "00 miliónov", 8, "000 miliónov", 9, "0 miliárd", 10, "00 miliárd", 11, "000 miliárd", 12, "0 biliónov", 13, "00 biliónov", 14, "000 biliónov"]);
    },
    get C189() {
      return C189 = dart.constMap(core.int, core.String, [3, "0 tis.", 4, "00 tis.", 5, "000 tis.", 6, "0 mio.", 7, "00 mio.", 8, "000 mio.", 9, "0 mrd.", 10, "00 mrd.", 11, "000 mrd.", 12, "0 bil.", 13, "00 bil.", 14, "000 bil."]);
    },
    get C190() {
      return C190 = dart.constMap(core.int, core.String, [3, "0 tisoč", 4, "00 tisoč", 5, "000 tisoč", 6, "0 milijonov", 7, "00 milijonov", 8, "000 milijonov", 9, "0 milijard", 10, "00 milijard", 11, "000 milijard", 12, "0 bilijonov", 13, "00 bilijonov", 14, "000 bilijonov"]);
    },
    get C191() {
      return C191 = dart.constMap(core.int, core.String, [3, "0 tis. ¤", 4, "00 tis. ¤", 5, "000 tis. ¤", 6, "0 mio. ¤", 7, "00 mio. ¤", 8, "000 mio. ¤", 9, "0 mrd. ¤", 10, "00 mrd. ¤", 11, "000 mrd. ¤", 12, "0 bil. ¤", 13, "00 bil. ¤", 14, "000 bil. ¤"]);
    },
    get C192() {
      return C192 = dart.constMap(core.int, core.String, [3, "0 mijë", 4, "00 mijë", 5, "000 mijë", 6, "0 mln", 7, "00 mln", 8, "000 mln", 9, "0 mld", 10, "00 mld", 11, "000 mld", 12, "0 bln", 13, "00 bln", 14, "000 bln"]);
    },
    get C193() {
      return C193 = dart.constMap(core.int, core.String, [3, "0 mijë", 4, "00 mijë", 5, "000 mijë", 6, "0 milion", 7, "00 milion", 8, "000 milion", 9, "0 miliard", 10, "00 miliard", 11, "000 miliard", 12, "0 bilion", 13, "00 bilion", 14, "000 bilion"]);
    },
    get C194() {
      return C194 = dart.constMap(core.int, core.String, [3, "0 mijë ¤", 4, "00 mijë ¤", 5, "000 mijë ¤", 6, "0 mln ¤", 7, "00 mln ¤", 8, "000 mln ¤", 9, "0 mld ¤", 10, "00 mld ¤", 11, "000 mld ¤", 12, "0 bln ¤", 13, "00 bln ¤", 14, "000 bln ¤"]);
    },
    get C195() {
      return C195 = dart.constMap(core.int, core.String, [3, "0 хиљ.", 4, "00 хиљ.", 5, "000 хиљ.", 6, "0 мил.", 7, "00 мил.", 8, "000 мил.", 9, "0 млрд.", 10, "00 млрд.", 11, "000 млрд.", 12, "0 бил.", 13, "00 бил.", 14, "000 бил."]);
    },
    get C196() {
      return C196 = dart.constMap(core.int, core.String, [3, "0 хиљада", 4, "00 хиљада", 5, "000 хиљада", 6, "0 милиона", 7, "00 милиона", 8, "000 милиона", 9, "0 милијарди", 10, "00 милијарди", 11, "000 милијарди", 12, "0 билиона", 13, "00 билиона", 14, "000 билиона"]);
    },
    get C197() {
      return C197 = dart.constMap(core.int, core.String, [3, "0 хиљ. ¤", 4, "00 хиљ. ¤", 5, "000 хиљ. ¤", 6, "0 мил. ¤", 7, "00 мил. ¤", 8, "000 мил. ¤", 9, "0 млрд. ¤", 10, "00 млрд. ¤", 11, "000 млрд. ¤", 12, "0 бил. ¤", 13, "00 бил. ¤", 14, "000 бил. ¤"]);
    },
    get C198() {
      return C198 = dart.constMap(core.int, core.String, [3, "0 hilj.", 4, "00 hilj.", 5, "000 hilj.", 6, "0 mil.", 7, "00 mil.", 8, "000 mil.", 9, "0 mlrd.", 10, "00 mlrd.", 11, "000 mlrd.", 12, "0 bil.", 13, "00 bil.", 14, "000 bil."]);
    },
    get C199() {
      return C199 = dart.constMap(core.int, core.String, [3, "0 hilj. ¤", 4, "00 hilj. ¤", 5, "000 hilj. ¤", 6, "0 mil. ¤", 7, "00 mil. ¤", 8, "000 mil. ¤", 9, "0 mlrd. ¤", 10, "00 mlrd. ¤", 11, "000 mlrd. ¤", 12, "0 bil. ¤", 13, "00 bil. ¤", 14, "000 bil. ¤"]);
    },
    get C200() {
      return C200 = dart.constMap(core.int, core.String, [3, "0 tn", 4, "00 tn", 5, "000 tn", 6, "0 mn", 7, "00 mn", 8, "000 mn", 9, "0 md", 10, "00 md", 11, "000 md", 12, "0 bn", 13, "00 bn", 14, "000 bn"]);
    },
    get C201() {
      return C201 = dart.constMap(core.int, core.String, [3, "0 tusen", 4, "00 tusen", 5, "000 tusen", 6, "0 miljoner", 7, "00 miljoner", 8, "000 miljoner", 9, "0 miljarder", 10, "00 miljarder", 11, "000 miljarder", 12, "0 biljoner", 13, "00 biljoner", 14, "000 biljoner"]);
    },
    get C202() {
      return C202 = dart.constMap(core.int, core.String, [3, "0 tn ¤", 4, "00 tn ¤", 5, "000 tn ¤", 6, "0 mn ¤", 7, "00 mn ¤", 8, "000 mn ¤", 9, "0 md ¤", 10, "00 md ¤", 11, "000 md ¤", 12, "0 bn ¤", 13, "00 bn ¤", 14, "000 bn ¤"]);
    },
    get C203() {
      return C203 = dart.constMap(core.int, core.String, [3, "elfu 0;elfu -0", 4, "elfu 00;elfu -00", 5, "elfu 000;elfu -000", 6, "0M", 7, "00M", 8, "000M", 9, "0B;-0B", 10, "00B;-00B", 11, "000B;-000B", 12, "0T", 13, "00T", 14, "000T"]);
    },
    get C204() {
      return C204 = dart.constMap(core.int, core.String, [3, "elfu 0;elfu -0", 4, "elfu 00;elfu -00", 5, "elfu 000;elfu -000", 6, "milioni 0;milioni -0", 7, "milioni 00;milioni -00", 8, "milioni 000;milioni -000", 9, "bilioni 0;bilioni -0", 10, "bilioni 00;bilioni -00", 11, "bilioni 000;bilioni -000", 12, "trilioni 0;trilioni -0", 13, "trilioni 00;trilioni -00", 14, "trilioni 000;trilioni -000"]);
    },
    get C205() {
      return C205 = dart.constMap(core.int, core.String, [3, "¤ elfu0", 4, "¤ elfu00;¤elfu -00", 5, "¤ laki000;¤laki -000", 6, "¤ 0M", 7, "¤ 00M;¤-00M", 8, "¤ 000M", 9, "¤ 0B;¤-0B", 10, "¤ 00B;¤-00B", 11, "¤ 000B;¤-000B", 12, "¤ 0T", 13, "¤ 00T", 14, "¤ 000T;¤-000T"]);
    },
    get C206() {
      return C206 = dart.constMap(core.int, core.String, [3, "0ஆ", 4, "00ஆ", 5, "000ஆ", 6, "0மி", 7, "00மி", 8, "000மி", 9, "0பி", 10, "00பி", 11, "000பி", 12, "0டி", 13, "00டி", 14, "000டி"]);
    },
    get C207() {
      return C207 = dart.constMap(core.int, core.String, [3, "0 ஆயிரம்", 4, "00 ஆயிரம்", 5, "000 ஆயிரம்", 6, "0 மில்லியன்", 7, "00 மில்லியன்", 8, "000 மில்லியன்", 9, "0 பில்லியன்", 10, "00 பில்லியன்", 11, "000 பில்லியன்", 12, "0 டிரில்லியன்", 13, "00 டிரில்லியன்", 14, "000 டிரில்லியன்"]);
    },
    get C208() {
      return C208 = dart.constMap(core.int, core.String, [3, "¤ 0ஆ", 4, "¤ 00ஆ", 5, "¤ 000ஆ", 6, "¤ 0மி", 7, "¤ 00மி", 8, "¤ 000மி", 9, "¤0பி", 10, "¤ 00பி", 11, "¤000பி", 12, "¤ 0டி", 13, "¤ 00டி", 14, "¤ 000டி"]);
    },
    get C209() {
      return C209 = dart.constMap(core.int, core.String, [3, "0వే", 4, "00వే", 5, "000వే", 6, "0మి", 7, "00మి", 8, "000మి", 9, "0బి", 10, "00బి", 11, "000బి", 12, "0ట్రి", 13, "00ట్రి", 14, "000ట్రి"]);
    },
    get C210() {
      return C210 = dart.constMap(core.int, core.String, [3, "0 వేలు", 4, "00 వేలు", 5, "000 వేలు", 6, "0 మిలియన్లు", 7, "00 మిలియన్లు", 8, "000 మిలియన్లు", 9, "0 బిలియన్లు", 10, "00 బిలియన్లు", 11, "000 బిలియన్లు", 12, "0 ట్రిలియన్లు", 13, "00 ట్రిలియన్లు", 14, "000 ట్రిలియన్లు"]);
    },
    get C211() {
      return C211 = dart.constMap(core.int, core.String, [3, "¤0వే", 4, "¤00వే", 5, "¤000వే", 6, "¤0మి", 7, "¤00మి", 8, "¤000మి", 9, "¤0బి", 10, "¤00బి", 11, "¤000బి", 12, "¤0ట్రి", 13, "¤00ట్రి", 14, "¤000ట్రి"]);
    },
    get C212() {
      return C212 = dart.constMap(core.int, core.String, [3, "0 พัน", 4, "0 หมื่น", 5, "0 แสน", 6, "0 ล้าน", 7, "00 ล้าน", 8, "000 ล้าน", 9, "0 พันล้าน", 10, "0 หมื่นล้าน", 11, "0 แสนล้าน", 12, "0 ล้านล้าน", 13, "00 ล้านล้าน", 14, "000 ล้านล้าน"]);
    },
    get C213() {
      return C213 = dart.constMap(core.int, core.String, [3, "0 B", 4, "00 B", 5, "000 B", 6, "0 Mn", 7, "00 Mn", 8, "000 Mn", 9, "0 Mr", 10, "00 Mr", 11, "000 Mr", 12, "0 Tn", 13, "00 Tn", 14, "000 Tn"]);
    },
    get C214() {
      return C214 = dart.constMap(core.int, core.String, [3, "0 bin", 4, "00 bin", 5, "000 bin", 6, "0 milyon", 7, "00 milyon", 8, "000 milyon", 9, "0 milyar", 10, "00 milyar", 11, "000 milyar", 12, "0 trilyon", 13, "00 trilyon", 14, "000 trilyon"]);
    },
    get C215() {
      return C215 = dart.constMap(core.int, core.String, [3, "0 B ¤", 4, "00 B ¤", 5, "000 B ¤", 6, "0 Mn ¤", 7, "00 Mn ¤", 8, "000 Mn ¤", 9, "0 Mr ¤", 10, "00 Mr ¤", 11, "000 Mr ¤", 12, "0 Tn ¤", 13, "00 Tn ¤", 14, "000 Tn ¤"]);
    },
    get C216() {
      return C216 = dart.constMap(core.int, core.String, [3, "0 тис.", 4, "00 тис.", 5, "000 тис.", 6, "0 млн", 7, "00 млн", 8, "000 млн", 9, "0 млрд", 10, "00 млрд", 11, "000 млрд", 12, "0 трлн", 13, "00 трлн", 14, "000 трлн"]);
    },
    get C217() {
      return C217 = dart.constMap(core.int, core.String, [3, "0 тисячі", 4, "00 тисячі", 5, "000 тисячі", 6, "0 мільйона", 7, "00 мільйона", 8, "000 мільйона", 9, "0 мільярда", 10, "00 мільярда", 11, "000 мільярда", 12, "0 трильйона", 13, "00 трильйона", 14, "000 трильйона"]);
    },
    get C218() {
      return C218 = dart.constMap(core.int, core.String, [3, "0 тис. ¤", 4, "00 тис. ¤", 5, "000 тис. ¤", 6, "0 млн ¤", 7, "00 млн ¤", 8, "000 млн ¤", 9, "0 млрд ¤", 10, "00 млрд ¤", 11, "000 млрд ¤", 12, "0 трлн ¤", 13, "00 трлн ¤", 14, "000 трлн ¤"]);
    },
    get C219() {
      return C219 = dart.constMap(core.int, core.String, [3, "0 ہزار", 4, "00 ہزار", 5, "0 لاکھ", 6, "00 لاکھ", 7, "0 کروڑ", 8, "00 کروڑ", 9, "0 ارب", 10, "00 ارب", 11, "0 کھرب", 12, "00 کھرب", 13, "00 ٹریلین", 14, "000 ٹریلین"]);
    },
    get C220() {
      return C220 = dart.constMap(core.int, core.String, [3, "0 ہزار", 4, "00 ہزار", 5, "0 لاکھ", 6, "00 لاکھ", 7, "0 کروڑ", 8, "00 کروڑ", 9, "0 ارب", 10, "00 ارب", 11, "0 کھرب", 12, "00 کھرب", 13, "00 ٹریلین", 14, "000 ٹریلین"]);
    },
    get C221() {
      return C221 = dart.constMap(core.int, core.String, [3, "¤ 0 ہزار", 4, "¤ 00 ہزار", 5, "¤ 0 لاکھ", 6, "¤ 00 لاکھ", 7, "¤ 0 کروڑ", 8, "¤ 00 کروڑ", 9, "¤ 0 ارب", 10, "¤ 00 ارب", 11, "¤ 0 کھرب", 12, "¤0 ٹریلین", 13, "¤ 00 ٹریلین", 14, "¤ 000 ٹریلین"]);
    },
    get C222() {
      return C222 = dart.constMap(core.int, core.String, [3, "0 ming", 4, "00 ming", 5, "000 ming", 6, "0 mln", 7, "00 mln", 8, "000 mln", 9, "0 mlrd", 10, "00 mlrd", 11, "000 mlrd", 12, "0 trln", 13, "00 trln", 14, "000 trln"]);
    },
    get C223() {
      return C223 = dart.constMap(core.int, core.String, [3, "0 ming", 4, "00 ming", 5, "000 ming", 6, "0 million", 7, "00 million", 8, "000 million", 9, "0 milliard", 10, "00 milliard", 11, "000 milliard", 12, "0 trillion", 13, "00 trillion", 14, "000 trillion"]);
    },
    get C224() {
      return C224 = dart.constMap(core.int, core.String, [3, "0 ming ¤", 4, "00 ming ¤", 5, "000 ming ¤", 6, "0 mln ¤", 7, "00 mln ¤", 8, "000 mln ¤", 9, "0 mlrd ¤", 10, "00 mlrd ¤", 11, "000 mlrd ¤", 12, "0 trln ¤", 13, "00 trln ¤", 14, "000 trln ¤"]);
    },
    get C225() {
      return C225 = dart.constMap(core.int, core.String, [3, "0 N", 4, "00 N", 5, "000 N", 6, "0 Tr", 7, "00 Tr", 8, "000 Tr", 9, "0 T", 10, "00 T", 11, "000 T", 12, "0 NT", 13, "00 NT", 14, "000 NT"]);
    },
    get C226() {
      return C226 = dart.constMap(core.int, core.String, [3, "0 nghìn", 4, "00 nghìn", 5, "000 nghìn", 6, "0 triệu", 7, "00 triệu", 8, "000 triệu", 9, "0 tỷ", 10, "00 tỷ", 11, "000 tỷ", 12, "0 nghìn tỷ", 13, "00 nghìn tỷ", 14, "000 nghìn tỷ"]);
    },
    get C227() {
      return C227 = dart.constMap(core.int, core.String, [3, "0 N ¤", 4, "00 N ¤", 5, "000 N ¤", 6, "0 Tr ¤", 7, "00 Tr ¤", 8, "000 Tr ¤", 9, "0 T ¤", 10, "00 T ¤", 11, "000 T ¤", 12, "0 NT ¤", 13, "00 NT ¤", 14, "000 NT ¤"]);
    },
    get C228() {
      return C228 = dart.constMap(core.int, core.String, [3, "0", 4, "0万", 5, "00万", 6, "000万", 7, "0000万", 8, "0亿", 9, "00亿", 10, "000亿", 11, "0000亿", 12, "0兆", 13, "00兆", 14, "000兆"]);
    },
    get C229() {
      return C229 = dart.constMap(core.int, core.String, [3, "0", 4, "¤0万", 5, "¤00万", 6, "¤000万", 7, "¤0000万", 8, "¤0亿", 9, "¤00亿", 10, "¤000亿", 11, "¤0000亿", 12, "¤0兆", 13, "¤00兆", 14, "¤000兆"]);
    },
    get C230() {
      return C230 = dart.constMap(core.int, core.String, [3, "0", 4, "0萬", 5, "00萬", 6, "000萬", 7, "0000萬", 8, "0億", 9, "00億", 10, "000億", 11, "0000億", 12, "0兆", 13, "00兆", 14, "000兆"]);
    },
    get C231() {
      return C231 = dart.constMap(core.int, core.String, [3, "0", 4, "¤0萬", 5, "¤00萬", 6, "¤000萬", 7, "¤0000萬", 8, "¤0億", 9, "¤00億", 10, "¤000億", 11, "¤0000億", 12, "¤0兆", 13, "¤00兆", 14, "¤000兆"]);
    },
    get C232() {
      return C232 = dart.constMap(core.int, core.String, [3, "0 inkulungwane", 4, "00 inkulungwane", 5, "000 inkulungwane", 6, "0 isigidi", 7, "00 isigidi", 8, "000 isigidi", 9, "0 isigidi sezigidi", 10, "00 isigidi sezigidi", 11, "000 isigidi sezigidi", 12, "0 isigidintathu", 13, "00 isigidintathu", 14, "000 isigidintathu"]);
    },
    get C233() {
      return C233 = dart.constMap(core.int, core.String, [3, "¤0K", 4, "¤00K", 5, "¤000K", 6, "¤ 0M", 7, "¤ 00M", 8, "¤000M", 9, "¤0B", 10, "¤00B", 11, "¤000B", 12, "¤0T", 13, "¤00T", 14, "¤000T"]);
    }
  });
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C87;
  let C88;
  let C89;
  let C90;
  let C91;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C112;
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C134;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  let C172;
  let C173;
  let C174;
  let C175;
  let C176;
  let C177;
  let C178;
  let C179;
  let C180;
  let C181;
  let C182;
  let C183;
  let C184;
  let C185;
  let C186;
  let C187;
  let C188;
  let C189;
  let C190;
  let C191;
  let C192;
  let C193;
  let C194;
  let C195;
  let C196;
  let C197;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C220;
  let C221;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C227;
  let C228;
  let C229;
  let C230;
  let C231;
  let C232;
  let C233;
  dart.defineLazy(number_symbols_data, {
    /*number_symbols_data.numberFormatSymbols*/get numberFormatSymbols() {
      return new (IdentityMapOfString$NumberSymbols()).from(["af", new number_symbols.NumberSymbols.new({NAME: "af", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "ZAR"}), "am", new number_symbols.NumberSymbols.new({NAME: "am", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "ETB"}), "ar", new number_symbols.NumberSymbols.new({NAME: "ar", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "‎%‎", ZERO_DIGIT: "0", PLUS_SIGN: "‎+", MINUS_SIGN: "‎-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "ليس رقمًا", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "EGP"}), "ar_DZ", new number_symbols.NumberSymbols.new({NAME: "ar_DZ", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "‎%‎", ZERO_DIGIT: "0", PLUS_SIGN: "‎+", MINUS_SIGN: "‎-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "ليس رقمًا", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "DZD"}), "ar_EG", new number_symbols.NumberSymbols.new({NAME: "ar_EG", DECIMAL_SEP: "٫", GROUP_SEP: "٬", PERCENT: "٪؜", ZERO_DIGIT: "٠", PLUS_SIGN: "؜+", MINUS_SIGN: "؜-", EXP_SYMBOL: "اس", PERMILL: "؉", INFINITY: "∞", NAN: "ليس رقم", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EGP"}), "az", new number_symbols.NumberSymbols.new({NAME: "az", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "AZN"}), "be", new number_symbols.NumberSymbols.new({NAME: "be", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "BYN"}), "bg", new number_symbols.NumberSymbols.new({NAME: "bg", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "0.00 ¤", DEF_CURRENCY_CODE: "BGN"}), "bn", new number_symbols.NumberSymbols.new({NAME: "bn", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "০", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##,##0.00¤", DEF_CURRENCY_CODE: "BDT"}), "br", new number_symbols.NumberSymbols.new({NAME: "br", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "bs", new number_symbols.NumberSymbols.new({NAME: "bs", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "BAM"}), "ca", new number_symbols.NumberSymbols.new({NAME: "ca", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "chr", new number_symbols.NumberSymbols.new({NAME: "chr", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "USD"}), "cs", new number_symbols.NumberSymbols.new({NAME: "cs", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "CZK"}), "cy", new number_symbols.NumberSymbols.new({NAME: "cy", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "GBP"}), "da", new number_symbols.NumberSymbols.new({NAME: "da", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "DKK"}), "de", new number_symbols.NumberSymbols.new({NAME: "de", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "de_AT", new number_symbols.NumberSymbols.new({NAME: "de_AT", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "EUR"}), "de_CH", new number_symbols.NumberSymbols.new({NAME: "de_CH", DECIMAL_SEP: ".", GROUP_SEP: "’", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00;¤-#,##0.00", DEF_CURRENCY_CODE: "CHF"}), "el", new number_symbols.NumberSymbols.new({NAME: "el", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "e", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "en", new number_symbols.NumberSymbols.new({NAME: "en", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "USD"}), "en_AU", new number_symbols.NumberSymbols.new({NAME: "en_AU", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "e", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "AUD"}), "en_CA", new number_symbols.NumberSymbols.new({NAME: "en_CA", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "e", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "CAD"}), "en_GB", new number_symbols.NumberSymbols.new({NAME: "en_GB", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "GBP"}), "en_IE", new number_symbols.NumberSymbols.new({NAME: "en_IE", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "EUR"}), "en_IN", new number_symbols.NumberSymbols.new({NAME: "en_IN", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##,##0%", CURRENCY_PATTERN: "¤ #,##,##0.00", DEF_CURRENCY_CODE: "INR"}), "en_MY", new number_symbols.NumberSymbols.new({NAME: "en_MY", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "MYR"}), "en_SG", new number_symbols.NumberSymbols.new({NAME: "en_SG", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "SGD"}), "en_US", new number_symbols.NumberSymbols.new({NAME: "en_US", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "USD"}), "en_ZA", new number_symbols.NumberSymbols.new({NAME: "en_ZA", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "ZAR"}), "es", new number_symbols.NumberSymbols.new({NAME: "es", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "es_419", new number_symbols.NumberSymbols.new({NAME: "es_419", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "MXN"}), "es_ES", new number_symbols.NumberSymbols.new({NAME: "es_ES", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "es_MX", new number_symbols.NumberSymbols.new({NAME: "es_MX", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "MXN"}), "es_US", new number_symbols.NumberSymbols.new({NAME: "es_US", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "USD"}), "et", new number_symbols.NumberSymbols.new({NAME: "et", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "×10^", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "eu", new number_symbols.NumberSymbols.new({NAME: "eu", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "% #,##0", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "fa", new number_symbols.NumberSymbols.new({NAME: "fa", DECIMAL_SEP: "٫", GROUP_SEP: "٬", PERCENT: "٪", ZERO_DIGIT: "۰", PLUS_SIGN: "‎+", MINUS_SIGN: "‎−", EXP_SYMBOL: "×۱۰^", PERMILL: "؉", INFINITY: "∞", NAN: "ناعدد", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "‎¤#,##0.00", DEF_CURRENCY_CODE: "IRR"}), "fi", new number_symbols.NumberSymbols.new({NAME: "fi", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "epäluku", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "fil", new number_symbols.NumberSymbols.new({NAME: "fil", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "PHP"}), "fr", new number_symbols.NumberSymbols.new({NAME: "fr", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "fr_CA", new number_symbols.NumberSymbols.new({NAME: "fr_CA", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "CAD"}), "fr_CH", new number_symbols.NumberSymbols.new({NAME: "fr_CH", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "CHF"}), "ga", new number_symbols.NumberSymbols.new({NAME: "ga", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "EUR"}), "gl", new number_symbols.NumberSymbols.new({NAME: "gl", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "gsw", new number_symbols.NumberSymbols.new({NAME: "gsw", DECIMAL_SEP: ".", GROUP_SEP: "’", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "CHF"}), "gu", new number_symbols.NumberSymbols.new({NAME: "gu", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "[#E0]", PERCENT_PATTERN: "#,##,##0%", CURRENCY_PATTERN: "¤#,##,##0.00", DEF_CURRENCY_CODE: "INR"}), "haw", new number_symbols.NumberSymbols.new({NAME: "haw", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "USD"}), "he", new number_symbols.NumberSymbols.new({NAME: "he", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "‎+", MINUS_SIGN: "‎-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "‏#,##0.00 ¤;‏-#,##0.00 ¤", DEF_CURRENCY_CODE: "ILS"}), "hi", new number_symbols.NumberSymbols.new({NAME: "hi", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "[#E0]", PERCENT_PATTERN: "#,##,##0%", CURRENCY_PATTERN: "¤#,##,##0.00", DEF_CURRENCY_CODE: "INR"}), "hr", new number_symbols.NumberSymbols.new({NAME: "hr", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "HRK"}), "hu", new number_symbols.NumberSymbols.new({NAME: "hu", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "HUF"}), "hy", new number_symbols.NumberSymbols.new({NAME: "hy", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "ՈչԹ", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "AMD"}), "id", new number_symbols.NumberSymbols.new({NAME: "id", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "IDR"}), "in", new number_symbols.NumberSymbols.new({NAME: "in", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "IDR"}), "is", new number_symbols.NumberSymbols.new({NAME: "is", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "ISK"}), "it", new number_symbols.NumberSymbols.new({NAME: "it", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "it_CH", new number_symbols.NumberSymbols.new({NAME: "it_CH", DECIMAL_SEP: ".", GROUP_SEP: "’", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00;¤-#,##0.00", DEF_CURRENCY_CODE: "CHF"}), "iw", new number_symbols.NumberSymbols.new({NAME: "iw", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "‎+", MINUS_SIGN: "‎-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "‏#,##0.00 ¤;‏-#,##0.00 ¤", DEF_CURRENCY_CODE: "ILS"}), "ja", new number_symbols.NumberSymbols.new({NAME: "ja", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "JPY"}), "ka", new number_symbols.NumberSymbols.new({NAME: "ka", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "არ არის რიცხვი", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "GEL"}), "kk", new number_symbols.NumberSymbols.new({NAME: "kk", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "сан емес", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "KZT"}), "km", new number_symbols.NumberSymbols.new({NAME: "km", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00¤", DEF_CURRENCY_CODE: "KHR"}), "kn", new number_symbols.NumberSymbols.new({NAME: "kn", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "INR"}), "ko", new number_symbols.NumberSymbols.new({NAME: "ko", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "KRW"}), "ky", new number_symbols.NumberSymbols.new({NAME: "ky", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "сан эмес", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "KGS"}), "ln", new number_symbols.NumberSymbols.new({NAME: "ln", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "CDF"}), "lo", new number_symbols.NumberSymbols.new({NAME: "lo", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "ບໍ່​ແມ່ນ​ໂຕ​ເລກ", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00;¤-#,##0.00", DEF_CURRENCY_CODE: "LAK"}), "lt", new number_symbols.NumberSymbols.new({NAME: "lt", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "×10^", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "lv", new number_symbols.NumberSymbols.new({NAME: "lv", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NS", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "mk", new number_symbols.NumberSymbols.new({NAME: "mk", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "MKD"}), "ml", new number_symbols.NumberSymbols.new({NAME: "ml", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "INR"}), "mn", new number_symbols.NumberSymbols.new({NAME: "mn", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "MNT"}), "mr", new number_symbols.NumberSymbols.new({NAME: "mr", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "०", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "[#E0]", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "INR"}), "ms", new number_symbols.NumberSymbols.new({NAME: "ms", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "MYR"}), "mt", new number_symbols.NumberSymbols.new({NAME: "mt", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "EUR"}), "my", new number_symbols.NumberSymbols.new({NAME: "my", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "၀", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "ဂဏန်းမဟုတ်သော", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "MMK"}), "nb", new number_symbols.NumberSymbols.new({NAME: "nb", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "NOK"}), "ne", new number_symbols.NumberSymbols.new({NAME: "ne", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "०", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "NPR"}), "nl", new number_symbols.NumberSymbols.new({NAME: "nl", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00;¤ -#,##0.00", DEF_CURRENCY_CODE: "EUR"}), "no", new number_symbols.NumberSymbols.new({NAME: "no", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "NOK"}), "no_NO", new number_symbols.NumberSymbols.new({NAME: "no_NO", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "NOK"}), "or", new number_symbols.NumberSymbols.new({NAME: "or", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "INR"}), "pa", new number_symbols.NumberSymbols.new({NAME: "pa", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "[#E0]", PERCENT_PATTERN: "#,##,##0%", CURRENCY_PATTERN: "¤ #,##,##0.00", DEF_CURRENCY_CODE: "INR"}), "pl", new number_symbols.NumberSymbols.new({NAME: "pl", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "PLN"}), "ps", new number_symbols.NumberSymbols.new({NAME: "ps", DECIMAL_SEP: "٫", GROUP_SEP: "٬", PERCENT: "٪", ZERO_DIGIT: "۰", PLUS_SIGN: "‎+‎", MINUS_SIGN: "‎-‎", EXP_SYMBOL: "×۱۰^", PERMILL: "؉", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "AFN"}), "pt", new number_symbols.NumberSymbols.new({NAME: "pt", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "BRL"}), "pt_BR", new number_symbols.NumberSymbols.new({NAME: "pt_BR", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "BRL"}), "pt_PT", new number_symbols.NumberSymbols.new({NAME: "pt_PT", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "ro", new number_symbols.NumberSymbols.new({NAME: "ro", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "RON"}), "ru", new number_symbols.NumberSymbols.new({NAME: "ru", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "не число", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "RUB"}), "si", new number_symbols.NumberSymbols.new({NAME: "si", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "LKR"}), "sk", new number_symbols.NumberSymbols.new({NAME: "sk", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "e", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "sl", new number_symbols.NumberSymbols.new({NAME: "sl", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "e", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "EUR"}), "sq", new number_symbols.NumberSymbols.new({NAME: "sq", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "ALL"}), "sr", new number_symbols.NumberSymbols.new({NAME: "sr", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "RSD"}), "sr_Latn", new number_symbols.NumberSymbols.new({NAME: "sr_Latn", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "RSD"}), "sv", new number_symbols.NumberSymbols.new({NAME: "sv", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "−", EXP_SYMBOL: "×10^", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0 %", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "SEK"}), "sw", new number_symbols.NumberSymbols.new({NAME: "sw", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "TZS"}), "ta", new number_symbols.NumberSymbols.new({NAME: "ta", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##,##0%", CURRENCY_PATTERN: "¤ #,##,##0.00", DEF_CURRENCY_CODE: "INR"}), "te", new number_symbols.NumberSymbols.new({NAME: "te", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##,##0.00", DEF_CURRENCY_CODE: "INR"}), "th", new number_symbols.NumberSymbols.new({NAME: "th", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "THB"}), "tl", new number_symbols.NumberSymbols.new({NAME: "tl", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "PHP"}), "tr", new number_symbols.NumberSymbols.new({NAME: "tr", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "%#,##0", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "TRY"}), "uk", new number_symbols.NumberSymbols.new({NAME: "uk", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "Е", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "UAH"}), "ur", new number_symbols.NumberSymbols.new({NAME: "ur", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "‎+", MINUS_SIGN: "‎-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤ #,##0.00", DEF_CURRENCY_CODE: "PKR"}), "uz", new number_symbols.NumberSymbols.new({NAME: "uz", DECIMAL_SEP: ",", GROUP_SEP: " ", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "son emas", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "UZS"}), "vi", new number_symbols.NumberSymbols.new({NAME: "vi", DECIMAL_SEP: ",", GROUP_SEP: ".", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "#,##0.00 ¤", DEF_CURRENCY_CODE: "VND"}), "zh", new number_symbols.NumberSymbols.new({NAME: "zh", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "CNY"}), "zh_CN", new number_symbols.NumberSymbols.new({NAME: "zh_CN", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "CNY"}), "zh_HK", new number_symbols.NumberSymbols.new({NAME: "zh_HK", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "非數值", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "HKD"}), "zh_TW", new number_symbols.NumberSymbols.new({NAME: "zh_TW", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "非數值", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "TWD"}), "zu", new number_symbols.NumberSymbols.new({NAME: "zu", DECIMAL_SEP: ".", GROUP_SEP: ",", PERCENT: "%", ZERO_DIGIT: "0", PLUS_SIGN: "+", MINUS_SIGN: "-", EXP_SYMBOL: "E", PERMILL: "‰", INFINITY: "∞", NAN: "NaN", DECIMAL_PATTERN: "#,##0.###", SCIENTIFIC_PATTERN: "#E0", PERCENT_PATTERN: "#,##0%", CURRENCY_PATTERN: "¤#,##0.00", DEF_CURRENCY_CODE: "ZAR"})]);
    },
    set numberFormatSymbols(_) {},
    /*number_symbols_data.compactNumberSymbols*/get compactNumberSymbols() {
      return new (IdentityMapOfString$CompactNumberSymbols()).from(["af", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C0 || CT.C0, COMPACT_DECIMAL_LONG_PATTERN: C1 || CT.C1, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C2 || CT.C2}), "am", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C3 || CT.C3, COMPACT_DECIMAL_LONG_PATTERN: C4 || CT.C4, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C5 || CT.C5}), "ar", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C6 || CT.C6, COMPACT_DECIMAL_LONG_PATTERN: C7 || CT.C7, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C8 || CT.C8}), "ar_DZ", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C6 || CT.C6, COMPACT_DECIMAL_LONG_PATTERN: C7 || CT.C7, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C8 || CT.C8}), "ar_EG", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C6 || CT.C6, COMPACT_DECIMAL_LONG_PATTERN: C7 || CT.C7, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C8 || CT.C8}), "az", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C9 || CT.C9, COMPACT_DECIMAL_LONG_PATTERN: C10 || CT.C10, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C11 || CT.C11}), "be", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C12 || CT.C12, COMPACT_DECIMAL_LONG_PATTERN: C13 || CT.C13, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C14 || CT.C14}), "bg", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C15 || CT.C15, COMPACT_DECIMAL_LONG_PATTERN: C16 || CT.C16, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C17 || CT.C17}), "bn", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C18 || CT.C18, COMPACT_DECIMAL_LONG_PATTERN: C19 || CT.C19, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C20 || CT.C20}), "br", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C21 || CT.C21, COMPACT_DECIMAL_LONG_PATTERN: C22 || CT.C22, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C23 || CT.C23}), "bs", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C24 || CT.C24, COMPACT_DECIMAL_LONG_PATTERN: C25 || CT.C25, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C26 || CT.C26}), "ca", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C27 || CT.C27, COMPACT_DECIMAL_LONG_PATTERN: C28 || CT.C28, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C29 || CT.C29}), "chr", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C31 || CT.C31, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "cs", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C33 || CT.C33, COMPACT_DECIMAL_LONG_PATTERN: C34 || CT.C34, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C35 || CT.C35}), "cy", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C36 || CT.C36, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "da", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C37 || CT.C37, COMPACT_DECIMAL_LONG_PATTERN: C38 || CT.C38, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C39 || CT.C39}), "de", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C40 || CT.C40, COMPACT_DECIMAL_LONG_PATTERN: C41 || CT.C41, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C42 || CT.C42}), "de_AT", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C40 || CT.C40, COMPACT_DECIMAL_LONG_PATTERN: C41 || CT.C41, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C42 || CT.C42}), "de_CH", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C40 || CT.C40, COMPACT_DECIMAL_LONG_PATTERN: C41 || CT.C41, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C42 || CT.C42}), "el", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C43 || CT.C43, COMPACT_DECIMAL_LONG_PATTERN: C44 || CT.C44, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C45 || CT.C45}), "en", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_AU", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_CA", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_GB", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_IE", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_IN", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C47 || CT.C47}), "en_MY", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_SG", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_US", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "en_ZA", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C46 || CT.C46, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "es", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C48 || CT.C48, COMPACT_DECIMAL_LONG_PATTERN: C49 || CT.C49, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C50 || CT.C50}), "es_419", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C51 || CT.C51, COMPACT_DECIMAL_LONG_PATTERN: C52 || CT.C52, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C53 || CT.C53}), "es_ES", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C48 || CT.C48, COMPACT_DECIMAL_LONG_PATTERN: C49 || CT.C49, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C50 || CT.C50}), "es_MX", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C54 || CT.C54, COMPACT_DECIMAL_LONG_PATTERN: C49 || CT.C49, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C55 || CT.C55}), "es_US", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C56 || CT.C56, COMPACT_DECIMAL_LONG_PATTERN: C57 || CT.C57, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C58 || CT.C58}), "et", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C59 || CT.C59, COMPACT_DECIMAL_LONG_PATTERN: C60 || CT.C60, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C61 || CT.C61}), "eu", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C62 || CT.C62, COMPACT_DECIMAL_LONG_PATTERN: C63 || CT.C63, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C64 || CT.C64}), "fa", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C65 || CT.C65, COMPACT_DECIMAL_LONG_PATTERN: C66 || CT.C66, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C67 || CT.C67}), "fi", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C68 || CT.C68, COMPACT_DECIMAL_LONG_PATTERN: C69 || CT.C69, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C70 || CT.C70}), "fil", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C71 || CT.C71, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "fr", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C72 || CT.C72, COMPACT_DECIMAL_LONG_PATTERN: C73 || CT.C73, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C74 || CT.C74}), "fr_CA", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C75 || CT.C75, COMPACT_DECIMAL_LONG_PATTERN: C73 || CT.C73, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C23 || CT.C23}), "fr_CH", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C72 || CT.C72, COMPACT_DECIMAL_LONG_PATTERN: C73 || CT.C73, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C74 || CT.C74}), "ga", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C76 || CT.C76, COMPACT_DECIMAL_LONG_PATTERN: C77 || CT.C77, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C78 || CT.C78}), "gl", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C79 || CT.C79, COMPACT_DECIMAL_LONG_PATTERN: C80 || CT.C80, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C81 || CT.C81}), "gsw", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C82 || CT.C82, COMPACT_DECIMAL_LONG_PATTERN: C83 || CT.C83, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C84 || CT.C84}), "gu", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C85 || CT.C85, COMPACT_DECIMAL_LONG_PATTERN: C86 || CT.C86, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C87 || CT.C87}), "haw", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C9 || CT.C9, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C88 || CT.C88}), "he", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C89 || CT.C89, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C90 || CT.C90}), "hi", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C91 || CT.C91, COMPACT_DECIMAL_LONG_PATTERN: C92 || CT.C92, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C93 || CT.C93}), "hr", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C94 || CT.C94, COMPACT_DECIMAL_LONG_PATTERN: C95 || CT.C95, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C96 || CT.C96}), "hu", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C97 || CT.C97, COMPACT_DECIMAL_LONG_PATTERN: C98 || CT.C98, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C99 || CT.C99}), "hy", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C100 || CT.C100, COMPACT_DECIMAL_LONG_PATTERN: C101 || CT.C101, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C102 || CT.C102}), "id", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C103 || CT.C103, COMPACT_DECIMAL_LONG_PATTERN: C104 || CT.C104, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C105 || CT.C105}), "in", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C103 || CT.C103, COMPACT_DECIMAL_LONG_PATTERN: C104 || CT.C104, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C105 || CT.C105}), "is", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C106 || CT.C106, COMPACT_DECIMAL_LONG_PATTERN: C107 || CT.C107, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C108 || CT.C108}), "it", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C109 || CT.C109, COMPACT_DECIMAL_LONG_PATTERN: C110 || CT.C110, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C111 || CT.C111}), "it_CH", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C109 || CT.C109, COMPACT_DECIMAL_LONG_PATTERN: C110 || CT.C110, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C111 || CT.C111}), "iw", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C89 || CT.C89, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C90 || CT.C90}), "ja", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C112 || CT.C112, COMPACT_DECIMAL_LONG_PATTERN: C112 || CT.C112, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C113 || CT.C113}), "ka", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C114 || CT.C114, COMPACT_DECIMAL_LONG_PATTERN: C115 || CT.C115, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C116 || CT.C116}), "kk", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C117 || CT.C117, COMPACT_DECIMAL_LONG_PATTERN: C118 || CT.C118, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C119 || CT.C119}), "km", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C120 || CT.C120, COMPACT_DECIMAL_LONG_PATTERN: C121 || CT.C121, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C122 || CT.C122}), "kn", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C123 || CT.C123, COMPACT_DECIMAL_LONG_PATTERN: C124 || CT.C124, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C125 || CT.C125}), "ko", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C126 || CT.C126, COMPACT_DECIMAL_LONG_PATTERN: C126 || CT.C126, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C127 || CT.C127}), "ky", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C128 || CT.C128, COMPACT_DECIMAL_LONG_PATTERN: C129 || CT.C129, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C130 || CT.C130}), "ln", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C9 || CT.C9, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C11 || CT.C11}), "lo", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C131 || CT.C131, COMPACT_DECIMAL_LONG_PATTERN: C132 || CT.C132, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C133 || CT.C133}), "lt", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C134 || CT.C134, COMPACT_DECIMAL_LONG_PATTERN: C135 || CT.C135, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C136 || CT.C136}), "lv", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C137 || CT.C137, COMPACT_DECIMAL_LONG_PATTERN: C138 || CT.C138, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C139 || CT.C139}), "mk", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C140 || CT.C140, COMPACT_DECIMAL_LONG_PATTERN: C141 || CT.C141, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C142 || CT.C142}), "ml", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C143 || CT.C143, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "mn", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C144 || CT.C144, COMPACT_DECIMAL_LONG_PATTERN: C145 || CT.C145, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C146 || CT.C146}), "mr", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C147 || CT.C147, COMPACT_DECIMAL_LONG_PATTERN: C148 || CT.C148, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C149 || CT.C149}), "ms", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C150 || CT.C150, COMPACT_DECIMAL_LONG_PATTERN: C151 || CT.C151, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C152 || CT.C152}), "mt", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C9 || CT.C9, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C88 || CT.C88}), "my", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C153 || CT.C153, COMPACT_DECIMAL_LONG_PATTERN: C154 || CT.C154, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C155 || CT.C155}), "nb", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C156 || CT.C156, COMPACT_DECIMAL_LONG_PATTERN: C157 || CT.C157, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C158 || CT.C158}), "ne", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C159 || CT.C159, COMPACT_DECIMAL_LONG_PATTERN: C160 || CT.C160, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C161 || CT.C161}), "nl", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C162 || CT.C162, COMPACT_DECIMAL_LONG_PATTERN: C163 || CT.C163, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C164 || CT.C164}), "no", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C156 || CT.C156, COMPACT_DECIMAL_LONG_PATTERN: C157 || CT.C157, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C158 || CT.C158}), "no_NO", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C156 || CT.C156, COMPACT_DECIMAL_LONG_PATTERN: C157 || CT.C157, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C158 || CT.C158}), "or", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C165 || CT.C165, COMPACT_DECIMAL_LONG_PATTERN: C166 || CT.C166, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C167 || CT.C167}), "pa", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C168 || CT.C168, COMPACT_DECIMAL_LONG_PATTERN: C169 || CT.C169, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C170 || CT.C170}), "pl", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C171 || CT.C171, COMPACT_DECIMAL_LONG_PATTERN: C172 || CT.C172, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C173 || CT.C173}), "ps", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C9 || CT.C9, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C11 || CT.C11}), "pt", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C174 || CT.C174, COMPACT_DECIMAL_LONG_PATTERN: C175 || CT.C175, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C176 || CT.C176}), "pt_BR", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C174 || CT.C174, COMPACT_DECIMAL_LONG_PATTERN: C175 || CT.C175, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C176 || CT.C176}), "pt_PT", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C177 || CT.C177, COMPACT_DECIMAL_LONG_PATTERN: C178 || CT.C178, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C179 || CT.C179}), "ro", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C180 || CT.C180, COMPACT_DECIMAL_LONG_PATTERN: C181 || CT.C181, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C182 || CT.C182}), "ru", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C12 || CT.C12, COMPACT_DECIMAL_LONG_PATTERN: C183 || CT.C183, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C184 || CT.C184}), "si", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C185 || CT.C185, COMPACT_DECIMAL_LONG_PATTERN: C186 || CT.C186, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C187 || CT.C187}), "sk", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C33 || CT.C33, COMPACT_DECIMAL_LONG_PATTERN: C188 || CT.C188, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C35 || CT.C35}), "sl", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C189 || CT.C189, COMPACT_DECIMAL_LONG_PATTERN: C190 || CT.C190, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C191 || CT.C191}), "sq", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C192 || CT.C192, COMPACT_DECIMAL_LONG_PATTERN: C193 || CT.C193, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C194 || CT.C194}), "sr", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C195 || CT.C195, COMPACT_DECIMAL_LONG_PATTERN: C196 || CT.C196, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C197 || CT.C197}), "sr_Latn", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C198 || CT.C198, COMPACT_DECIMAL_LONG_PATTERN: C25 || CT.C25, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C199 || CT.C199}), "sv", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C200 || CT.C200, COMPACT_DECIMAL_LONG_PATTERN: C201 || CT.C201, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C202 || CT.C202}), "sw", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C203 || CT.C203, COMPACT_DECIMAL_LONG_PATTERN: C204 || CT.C204, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C205 || CT.C205}), "ta", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C206 || CT.C206, COMPACT_DECIMAL_LONG_PATTERN: C207 || CT.C207, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C208 || CT.C208}), "te", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C209 || CT.C209, COMPACT_DECIMAL_LONG_PATTERN: C210 || CT.C210, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C211 || CT.C211}), "th", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C212 || CT.C212, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "tl", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C71 || CT.C71, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "tr", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C213 || CT.C213, COMPACT_DECIMAL_LONG_PATTERN: C214 || CT.C214, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C215 || CT.C215}), "uk", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C216 || CT.C216, COMPACT_DECIMAL_LONG_PATTERN: C217 || CT.C217, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C218 || CT.C218}), "ur", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C219 || CT.C219, COMPACT_DECIMAL_LONG_PATTERN: C220 || CT.C220, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C221 || CT.C221}), "uz", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C222 || CT.C222, COMPACT_DECIMAL_LONG_PATTERN: C223 || CT.C223, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C224 || CT.C224}), "vi", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C225 || CT.C225, COMPACT_DECIMAL_LONG_PATTERN: C226 || CT.C226, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C227 || CT.C227}), "zh", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C228 || CT.C228, COMPACT_DECIMAL_LONG_PATTERN: C228 || CT.C228, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C229 || CT.C229}), "zh_CN", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C228 || CT.C228, COMPACT_DECIMAL_LONG_PATTERN: C228 || CT.C228, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C229 || CT.C229}), "zh_HK", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C230 || CT.C230, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C32 || CT.C32}), "zh_TW", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C230 || CT.C230, COMPACT_DECIMAL_LONG_PATTERN: C230 || CT.C230, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C231 || CT.C231}), "zu", new number_symbols.CompactNumberSymbols.new({COMPACT_DECIMAL_SHORT_PATTERN: C30 || CT.C30, COMPACT_DECIMAL_LONG_PATTERN: C232 || CT.C232, COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: C233 || CT.C233})]);
    },
    set compactNumberSymbols(_) {},
    /*number_symbols_data.currencyFractionDigits*/get currencyFractionDigits() {
      return new (IdentityMapOfString$int()).from(["ADP", 0, "AFN", 0, "ALL", 0, "AMD", 2, "BHD", 3, "BIF", 0, "BYN", 2, "BYR", 0, "CAD", 2, "CHF", 2, "CLF", 4, "CLP", 0, "COP", 2, "CRC", 2, "CZK", 2, "DEFAULT", 2, "DJF", 0, "DKK", 2, "ESP", 0, "GNF", 0, "GYD", 2, "HUF", 2, "IDR", 2, "IQD", 0, "IRR", 0, "ISK", 0, "ITL", 0, "JOD", 3, "JPY", 0, "KMF", 0, "KPW", 0, "KRW", 0, "KWD", 3, "LAK", 0, "LBP", 0, "LUF", 0, "LYD", 3, "MGA", 0, "MGF", 0, "MMK", 0, "MNT", 2, "MRO", 0, "MUR", 2, "NOK", 2, "OMR", 3, "PKR", 2, "PYG", 0, "RSD", 0, "RWF", 0, "SEK", 2, "SLL", 0, "SOS", 0, "STD", 0, "SYP", 0, "TMM", 0, "TND", 3, "TRL", 0, "TWD", 2, "TZS", 2, "UGX", 0, "UYI", 0, "UYW", 4, "UZS", 2, "VEF", 2, "VND", 0, "VUV", 0, "XAF", 0, "XOF", 0, "XPF", 0, "YER", 0, "ZMK", 0, "ZWD", 0]);
    }
  });
  dart.trackLibraries("packages/intl/number_symbols_data", {
    "package:intl/number_symbols_data.dart": number_symbols_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["number_symbols_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAoBI,uCAAmB;YAA0B,iDAE/C,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,mBACG,gBACD,kBACC,kBACA,cACH,eACC,UACL,8BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,mBACG,gBACD,kBACC,kBACA,cACH,eACC,UACL,8BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,kBACG,gBACD,kBACC,kBACA,eACH,eACC,UACL,4BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,6BACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,wBACH,4BACC,mCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,OAAW,4CACD,oBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,4CACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,wBACH,+BACC,oCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,UAAc,4CACJ,uBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,iBACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,kBACC,kBACA,iBACH,eACC,UACL,0BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,4BACY,iCACG,wBACH,6BACC,iCACC,SAEvB,OAAW,4CACD,oBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,OAAW,4CACD,oBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,0BACH,+BACC,mCACC,SAEvB,OAAW,4CACD,oBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,kBACC,kBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BAEb,+CACe,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,0BACH,+BACC,mCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,4CACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,kBACC,kBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BAEb,+CACe,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UAEN,mCACa,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,6BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,6BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UAEN,oCACa,iCACG,sBACH,4BACC,2CACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,iBACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,uBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,0BACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UAEN,kCACa,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,6CACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,0BACH,+BACC,oCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,mBACC,mBACA,iBACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,6BACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,sBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,WAAe,4CACL,wBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,iBACH,eACC,UACL,wBACY,iCACG,wBACH,6BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,wBACH,+BACC,oCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,oCACG,wBACH,4BACC,mCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,kBACC,kBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,6BACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,iCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,SAAa,4CACH,sBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC,SAEvB,MAAU,4CACA,mBACO,gBACF,cACF,iBACG,gBACD,iBACC,iBACA,cACH,eACC,UACL,wBACY,iCACG,wBACH,4BACC,gCACC;;;MAGS,wCAAoB;YAAG,wDAEvD,MAAU,2LAyCV,MAAU,2LAyCV,MAAU,2LAyCV,SAAa,2LAyCb,SAAa,2LAyCb,MAAU,+LAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,OAAW,iMAyCX,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,SAAa,iMAyCb,SAAa,iMAyCb,MAAU,iMAyCV,MAAU,iMAyCV,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,MAAU,iMAyCV,UAAc,iMAyCd,SAAa,iMAyCb,SAAa,iMAyCb,SAAa,iMAyCb,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,OAAW,iMAyCX,MAAU,iMAyCV,SAAa,iMAyCb,SAAa,iMAyCb,MAAU,iMAyCV,MAAU,iMAyCV,OAAW,iMAyCX,MAAU,iMAyCV,OAAW,kJA4BX,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,iMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,SAAa,uMAyCb,MAAU,iMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,kJA4BV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,mMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,kJA4BV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,SAAa,uMAyCb,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,+LAyCV,MAAU,uMAyCV,SAAa,uMAyCb,SAAa,uMAyCb,MAAU,uMAyCV,MAAU,qMAyCV,MAAU,uMAyCV,MAAU,mMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,WAAe,qMAyCf,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,mMAyCV,MAAU,iMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,MAAU,uMAyCV,SAAa,uMAyCb,SAAa,mMAyCb,SAAa,uMAyCb,MAAU;;;MA0CN,0CAAsB;YAAG,uCAC7B,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,WAAW,GACX,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO,GACP,OAAO","file":"number_symbols_data.ddc.js"}');
  // Exports:
  return {
    number_symbols_data: number_symbols_data
  };
});

//# sourceMappingURL=number_symbols_data.ddc.js.map
