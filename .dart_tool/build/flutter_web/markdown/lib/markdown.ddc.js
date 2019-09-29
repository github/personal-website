define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const markdown = Object.create(dart.library);
  const block_parser = Object.create(dart.library);
  const inline_parser = Object.create(dart.library);
  const version = Object.create(dart.library);
  const ast = Object.create(dart.library);
  const document$ = Object.create(dart.library);
  const emojis = Object.create(dart.library);
  const extension_set = Object.create(dart.library);
  const html_renderer = Object.create(dart.library);
  const util = Object.create(dart.library);
  const $addAll = dartx.addAll;
  const $_get = dartx._get;
  const $length = dartx.length;
  const $add = dartx.add;
  const $any = dartx.any;
  const $first = dartx.first;
  const $toLowerCase = dartx.toLowerCase;
  const $trim = dartx.trim;
  const $replaceAll = dartx.replaceAll;
  const $join = dartx.join;
  const $firstWhere = dartx.firstWhere;
  const $codeUnitAt = dartx.codeUnitAt;
  const $codeUnits = dartx.codeUnits;
  const $contains = dartx.contains;
  const $startsWith = dartx.startsWith;
  const $isNotEmpty = dartx.isNotEmpty;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $_set = dartx._set;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $times = dartx['*'];
  const $replaceFirst = dartx.replaceFirst;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $forEach = dartx.forEach;
  const $removeAt = dartx.removeAt;
  const $insertAll = dartx.insertAll;
  const $removeLast = dartx.removeLast;
  const $modulo = dartx['%'];
  const $split = dartx.split;
  const $endsWith = dartx.endsWith;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $getRange = dartx.getRange;
  const $sublist = dartx.sublist;
  const $putIfAbsent = dartx.putIfAbsent;
  const $reversed = dartx.reversed;
  const $removeRange = dartx.removeRange;
  const $trimLeft = dartx.trimLeft;
  const $entries = dartx.entries;
  let JSArrayOfBlockSyntax = () => (JSArrayOfBlockSyntax = dart.constFn(_interceptors.JSArray$(block_parser.BlockSyntax)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(ast.Node)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let BlockSyntaxTobool = () => (BlockSyntaxTobool = dart.constFn(dart.fnType(core.bool, [block_parser.BlockSyntax])))();
  let JSArrayOfListItem = () => (JSArrayOfListItem = dart.constFn(_interceptors.JSArray$(block_parser.ListItem)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let RegExpTobool = () => (RegExpTobool = dart.constFn(dart.fnType(core.bool, [core.RegExp])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(ast.Element)))();
  let JSArrayOfRegExp = () => (JSArrayOfRegExp = dart.constFn(_interceptors.JSArray$(core.RegExp)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let VoidToLinkReference = () => (VoidToLinkReference = dart.constFn(dart.fnType(document$.LinkReference, [])))();
  let JSArrayOfInlineSyntax = () => (JSArrayOfInlineSyntax = dart.constFn(_interceptors.JSArray$(inline_parser.InlineSyntax)))();
  let JSArrayOfTagState = () => (JSArrayOfTagState = dart.constFn(_interceptors.JSArray$(inline_parser.TagState)))();
  let InlineSyntaxTobool = () => (InlineSyntaxTobool = dart.constFn(dart.fnType(core.bool, [inline_parser.InlineSyntax])))();
  let TagStateTobool = () => (TagStateTobool = dart.constFn(dart.fnType(core.bool, [inline_parser.TagState])))();
  let ListOfInlineSyntax = () => (ListOfInlineSyntax = dart.constFn(core.List$(inline_parser.InlineSyntax)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String], [core.String])))();
  let NodeToString = () => (NodeToString = dart.constFn(dart.fnType(core.String, [ast.Node])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let IdentityMapOfString$LinkReference = () => (IdentityMapOfString$LinkReference = dart.constFn(_js_helper.IdentityMap$(core.String, document$.LinkReference)))();
  let _HashSetOfBlockSyntax = () => (_HashSetOfBlockSyntax = dart.constFn(collection._HashSet$(block_parser.BlockSyntax)))();
  let _HashSetOfInlineSyntax = () => (_HashSetOfInlineSyntax = dart.constFn(collection._HashSet$(inline_parser.InlineSyntax)))();
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: block_parser.EmptyBlockSyntax.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: block_parser.BlockTagBlockHtmlSyntax.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: block_parser.OtherTagBlockHtmlSyntax.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: block_parser.SetextHeaderSyntax.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: block_parser.HeaderSyntax.prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: block_parser.CodeBlockSyntax.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: block_parser.BlockquoteSyntax.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: block_parser.HorizontalRuleSyntax.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: block_parser.UnorderedListSyntax.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: block_parser.OrderedListSyntax.prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: block_parser.ParagraphSyntax.prototype
      });
    },
    get C11() {
      return C11 = dart.constMap(core.String, core.String, ["grinning", "😀", "grimacing", "😬", "grin", "😁", "joy", "😂", "rofl", "🤣", "partying", "🥳", "smiley", "😃", "smile", "😄", "sweat_smile", "😅", "laughing", "😆", "innocent", "😇", "wink", "😉", "blush", "😊", "slightly_smiling_face", "🙂", "upside_down_face", "🙃", "relaxed", "☺️", "yum", "😋", "relieved", "😌", "heart_eyes", "😍", "smiling_face_with_three_hearts", "🥰", "kissing_heart", "😘", "kissing", "😗", "kissing_smiling_eyes", "😙", "kissing_closed_eyes", "😚", "stuck_out_tongue_winking_eye", "😜", "zany", "🤪", "raised_eyebrow", "🤨", "monocle", "🧐", "stuck_out_tongue_closed_eyes", "😝", "stuck_out_tongue", "😛", "money_mouth_face", "🤑", "nerd_face", "🤓", "sunglasses", "😎", "star_struck", "🤩", "clown_face", "🤡", "cowboy_hat_face", "🤠", "hugs", "🤗", "smirk", "😏", "no_mouth", "😶", "neutral_face", "😐", "expressionless", "😑", "unamused", "😒", "roll_eyes", "🙄", "thinking", "🤔", "lying_face", "🤥", "hand_over_mouth", "🤭", "shushing", "🤫", "symbols_over_mouth", "🤬", "exploding_head", "🤯", "flushed", "😳", "disappointed", "😞", "worried", "😟", "angry", "😠", "rage", "😡", "pensive", "😔", "confused", "😕", "slightly_frowning_face", "🙁", "frowning_face", "☹", "persevere", "😣", "confounded", "😖", "tired_face", "😫", "weary", "😩", "pleading", "🥺", "triumph", "😤", "open_mouth", "😮", "scream", "😱", "fearful", "😨", "cold_sweat", "😰", "hushed", "😯", "frowning", "😦", "anguished", "😧", "cry", "😢", "disappointed_relieved", "😥", "drooling_face", "🤤", "sleepy", "😪", "sweat", "😓", "hot", "🥵", "cold", "🥶", "sob", "😭", "dizzy_face", "😵", "astonished", "😲", "zipper_mouth_face", "🤐", "nauseated_face", "🤢", "sneezing_face", "🤧", "vomiting", "🤮", "mask", "😷", "face_with_thermometer", "🤒", "face_with_head_bandage", "🤕", "woozy", "🥴", "sleeping", "😴", "zzz", "💤", "poop", "💩", "smiling_imp", "😈", "imp", "👿", "japanese_ogre", "👹", "japanese_goblin", "👺", "skull", "💀", "ghost", "👻", "alien", "👽", "robot", "🤖", "smiley_cat", "😺", "smile_cat", "😸", "joy_cat", "😹", "heart_eyes_cat", "😻", "smirk_cat", "😼", "kissing_cat", "😽", "scream_cat", "🙀", "crying_cat_face", "😿", "pouting_cat", "😾", "palms_up", "🤲", "raised_hands", "🙌", "clap", "👏", "wave", "👋", "call_me_hand", "🤙", "+1", "👍", "-1", "👎", "facepunch", "👊", "fist", "✊", "fist_left", "🤛", "fist_right", "🤜", "v", "✌", "ok_hand", "👌", "raised_hand", "✋", "raised_back_of_hand", "🤚", "open_hands", "👐", "muscle", "💪", "pray", "🙏", "foot", "🦶", "leg", "🦵", "handshake", "🤝", "point_up", "☝", "point_up_2", "👆", "point_down", "👇", "point_left", "👈", "point_right", "👉", "fu", "🖕", "raised_hand_with_fingers_splayed", "🖐", "love_you", "🤟", "metal", "🤘", "crossed_fingers", "🤞", "vulcan_salute", "🖖", "writing_hand", "✍", "selfie", "🤳", "nail_care", "💅", "lips", "👄", "tooth", "🦷", "tongue", "👅", "ear", "👂", "nose", "👃", "eye", "👁", "eyes", "👀", "brain", "🧠", "bust_in_silhouette", "👤", "busts_in_silhouette", "👥", "speaking_head", "🗣", "baby", "👶", "child", "🧒", "boy", "👦", "girl", "👧", "adult", "🧑", "man", "👨", "woman", "👩", "blonde_woman", "👱‍♀️", "blonde_man", "👱", "bearded_person", "🧔", "older_adult", "🧓", "older_man", "👴", "older_woman", "👵", "man_with_gua_pi_mao", "👲", "woman_with_headscarf", "🧕", "woman_with_turban", "👳‍♀️", "man_with_turban", "👳", "policewoman", "👮‍♀️", "policeman", "👮", "construction_worker_woman", "👷‍♀️", "construction_worker_man", "👷", "guardswoman", "💂‍♀️", "guardsman", "💂", "female_detective", "🕵️‍♀️", "male_detective", "🕵", "woman_health_worker", "👩‍⚕️", "man_health_worker", "👨‍⚕️", "woman_farmer", "👩‍🌾", "man_farmer", "👨‍🌾", "woman_cook", "👩‍🍳", "man_cook", "👨‍🍳", "woman_student", "👩‍🎓", "man_student", "👨‍🎓", "woman_singer", "👩‍🎤", "man_singer", "👨‍🎤", "woman_teacher", "👩‍🏫", "man_teacher", "👨‍🏫", "woman_factory_worker", "👩‍🏭", "man_factory_worker", "👨‍🏭", "woman_technologist", "👩‍💻", "man_technologist", "👨‍💻", "woman_office_worker", "👩‍💼", "man_office_worker", "👨‍💼", "woman_mechanic", "👩‍🔧", "man_mechanic", "👨‍🔧", "woman_scientist", "👩‍🔬", "man_scientist", "👨‍🔬", "woman_artist", "👩‍🎨", "man_artist", "👨‍🎨", "woman_firefighter", "👩‍🚒", "man_firefighter", "👨‍🚒", "woman_pilot", "👩‍✈️", "man_pilot", "👨‍✈️", "woman_astronaut", "👩‍🚀", "man_astronaut", "👨‍🚀", "woman_judge", "👩‍⚖️", "man_judge", "👨‍⚖️", "woman_superhero", "🦸‍♀️", "man_superhero", "🦸‍♂️", "woman_supervillain", "🦹‍♀️", "man_supervillain", "🦹‍♂️", "mrs_claus", "🤶", "santa", "🎅", "sorceress", "🧙‍♀️", "wizard", "🧙‍♂️", "woman_elf", "🧝‍♀️", "man_elf", "🧝‍♂️", "woman_vampire", "🧛‍♀️", "man_vampire", "🧛‍♂️", "woman_zombie", "🧟‍♀️", "man_zombie", "🧟‍♂️", "woman_genie", "🧞‍♀️", "man_genie", "🧞‍♂️", "mermaid", "🧜‍♀️", "merman", "🧜‍♂️", "woman_fairy", "🧚‍♀️", "man_fairy", "🧚‍♂️", "angel", "👼", "pregnant_woman", "🤰", "breastfeeding", "🤱", "princess", "👸", "prince", "🤴", "bride_with_veil", "👰", "man_in_tuxedo", "🤵", "running_woman", "🏃‍♀️", "running_man", "🏃", "walking_woman", "🚶‍♀️", "walking_man", "🚶", "dancer", "💃", "man_dancing", "🕺", "dancing_women", "👯", "dancing_men", "👯‍♂️", "couple", "👫", "two_men_holding_hands", "👬", "two_women_holding_hands", "👭", "bowing_woman", "🙇‍♀️", "bowing_man", "🙇", "man_facepalming", "🤦‍♂️", "woman_facepalming", "🤦‍♀️", "woman_shrugging", "🤷", "man_shrugging", "🤷‍♂️", "tipping_hand_woman", "💁", "tipping_hand_man", "💁‍♂️", "no_good_woman", "🙅", "no_good_man", "🙅‍♂️", "ok_woman", "🙆", "ok_man", "🙆‍♂️", "raising_hand_woman", "🙋", "raising_hand_man", "🙋‍♂️", "pouting_woman", "🙎", "pouting_man", "🙎‍♂️", "frowning_woman", "🙍", "frowning_man", "🙍‍♂️", "haircut_woman", "💇", "haircut_man", "💇‍♂️", "massage_woman", "💆", "massage_man", "💆‍♂️", "woman_in_steamy_room", "🧖‍♀️", "man_in_steamy_room", "🧖‍♂️", "couple_with_heart_woman_man", "💑", "couple_with_heart_woman_woman", "👩‍❤️‍👩", "couple_with_heart_man_man", "👨‍❤️‍👨", "couplekiss_man_woman", "💏", "couplekiss_woman_woman", "👩‍❤️‍💋‍👩", "couplekiss_man_man", "👨‍❤️‍💋‍👨", "family_man_woman_boy", "👪", "family_man_woman_girl", "👨‍👩‍👧", "family_man_woman_girl_boy", "👨‍👩‍👧‍👦", "family_man_woman_boy_boy", "👨‍👩‍👦‍👦", "family_man_woman_girl_girl", "👨‍👩‍👧‍👧", "family_woman_woman_boy", "👩‍👩‍👦", "family_woman_woman_girl", "👩‍👩‍👧", "family_woman_woman_girl_boy", "👩‍👩‍👧‍👦", "family_woman_woman_boy_boy", "👩‍👩‍👦‍👦", "family_woman_woman_girl_girl", "👩‍👩‍👧‍👧", "family_man_man_boy", "👨‍👨‍👦", "family_man_man_girl", "👨‍👨‍👧", "family_man_man_girl_boy", "👨‍👨‍👧‍👦", "family_man_man_boy_boy", "👨‍👨‍👦‍👦", "family_man_man_girl_girl", "👨‍👨‍👧‍👧", "family_woman_boy", "👩‍👦", "family_woman_girl", "👩‍👧", "family_woman_girl_boy", "👩‍👧‍👦", "family_woman_boy_boy", "👩‍👦‍👦", "family_woman_girl_girl", "👩‍👧‍👧", "family_man_boy", "👨‍👦", "family_man_girl", "👨‍👧", "family_man_girl_boy", "👨‍👧‍👦", "family_man_boy_boy", "👨‍👦‍👦", "family_man_girl_girl", "👨‍👧‍👧", "yarn", "🧶", "thread", "🧵", "coat", "🧥", "labcoat", "🥼", "womans_clothes", "👚", "tshirt", "👕", "jeans", "👖", "necktie", "👔", "dress", "👗", "bikini", "👙", "kimono", "👘", "lipstick", "💄", "kiss", "💋", "footprints", "👣", "flat_shoe", "🥿", "high_heel", "👠", "sandal", "👡", "boot", "👢", "mans_shoe", "👞", "athletic_shoe", "👟", "hiking_boot", "🥾", "socks", "🧦", "gloves", "🧤", "scarf", "🧣", "womans_hat", "👒", "tophat", "🎩", "billed_hat", "🧢", "rescue_worker_helmet", "⛑", "mortar_board", "🎓", "crown", "👑", "school_satchel", "🎒", "luggage", "🧳", "pouch", "👝", "purse", "👛", "handbag", "👜", "briefcase", "💼", "eyeglasses", "👓", "dark_sunglasses", "🕶", "goggles", "🥽", "ring", "💍", "closed_umbrella", "🌂", "dog", "🐶", "cat", "🐱", "mouse", "🐭", "hamster", "🐹", "rabbit", "🐰", "fox_face", "🦊", "bear", "🐻", "panda_face", "🐼", "koala", "🐨", "tiger", "🐯", "lion", "🦁", "cow", "🐮", "pig", "🐷", "pig_nose", "🐽", "frog", "🐸", "squid", "🦑", "octopus", "🐙", "shrimp", "🦐", "monkey_face", "🐵", "gorilla", "🦍", "see_no_evil", "🙈", "hear_no_evil", "🙉", "speak_no_evil", "🙊", "monkey", "🐒", "chicken", "🐔", "penguin", "🐧", "bird", "🐦", "baby_chick", "🐤", "hatching_chick", "🐣", "hatched_chick", "🐥", "duck", "🦆", "eagle", "🦅", "owl", "🦉", "bat", "🦇", "wolf", "🐺", "boar", "🐗", "horse", "🐴", "unicorn", "🦄", "honeybee", "🐝", "bug", "🐛", "butterfly", "🦋", "snail", "🐌", "beetle", "🐞", "ant", "🐜", "grasshopper", "🦗", "spider", "🕷", "scorpion", "🦂", "crab", "🦀", "snake", "🐍", "lizard", "🦎", "t-rex", "🦖", "sauropod", "🦕", "turtle", "🐢", "tropical_fish", "🐠", "fish", "🐟", "blowfish", "🐡", "dolphin", "🐬", "shark", "🦈", "whale", "🐳", "whale2", "🐋", "crocodile", "🐊", "leopard", "🐆", "zebra", "🦓", "tiger2", "🐅", "water_buffalo", "🐃", "ox", "🐂", "cow2", "🐄", "deer", "🦌", "dromedary_camel", "🐪", "camel", "🐫", "giraffe", "🦒", "elephant", "🐘", "rhinoceros", "🦏", "goat", "🐐", "ram", "🐏", "sheep", "🐑", "racehorse", "🐎", "pig2", "🐖", "rat", "🐀", "mouse2", "🐁", "rooster", "🐓", "turkey", "🦃", "dove", "🕊", "dog2", "🐕", "poodle", "🐩", "cat2", "🐈", "rabbit2", "🐇", "chipmunk", "🐿", "hedgehog", "🦔", "raccoon", "🦝", "llama", "🦙", "hippopotamus", "🦛", "kangaroo", "🦘", "badger", "🦡", "swan", "🦢", "peacock", "🦚", "parrot", "🦜", "lobster", "🦞", "mosquito", "🦟", "paw_prints", "🐾", "dragon", "🐉", "dragon_face", "🐲", "cactus", "🌵", "christmas_tree", "🎄", "evergreen_tree", "🌲", "deciduous_tree", "🌳", "palm_tree", "🌴", "seedling", "🌱", "herb", "🌿", "shamrock", "☘", "four_leaf_clover", "🍀", "bamboo", "🎍", "tanabata_tree", "🎋", "leaves", "🍃", "fallen_leaf", "🍂", "maple_leaf", "🍁", "ear_of_rice", "🌾", "hibiscus", "🌺", "sunflower", "🌻", "rose", "🌹", "wilted_flower", "🥀", "tulip", "🌷", "blossom", "🌼", "cherry_blossom", "🌸", "bouquet", "💐", "mushroom", "🍄", "chestnut", "🌰", "jack_o_lantern", "🎃", "shell", "🐚", "spider_web", "🕸", "earth_americas", "🌎", "earth_africa", "🌍", "earth_asia", "🌏", "full_moon", "🌕", "waning_gibbous_moon", "🌖", "last_quarter_moon", "🌗", "waning_crescent_moon", "🌘", "new_moon", "🌑", "waxing_crescent_moon", "🌒", "first_quarter_moon", "🌓", "waxing_gibbous_moon", "🌔", "new_moon_with_face", "🌚", "full_moon_with_face", "🌝", "first_quarter_moon_with_face", "🌛", "last_quarter_moon_with_face", "🌜", "sun_with_face", "🌞", "crescent_moon", "🌙", "star", "⭐", "star2", "🌟", "dizzy", "💫", "sparkles", "✨", "comet", "☄", "sunny", "☀️", "sun_behind_small_cloud", "🌤", "partly_sunny", "⛅", "sun_behind_large_cloud", "🌥", "sun_behind_rain_cloud", "🌦", "cloud", "☁️", "cloud_with_rain", "🌧", "cloud_with_lightning_and_rain", "⛈", "cloud_with_lightning", "🌩", "zap", "⚡", "fire", "🔥", "boom", "💥", "snowflake", "❄️", "cloud_with_snow", "🌨", "snowman", "⛄", "snowman_with_snow", "☃", "wind_face", "🌬", "dash", "💨", "tornado", "🌪", "fog", "🌫", "open_umbrella", "☂", "umbrella", "☔", "droplet", "💧", "sweat_drops", "💦", "ocean", "🌊", "green_apple", "🍏", "apple", "🍎", "pear", "🍐", "tangerine", "🍊", "lemon", "🍋", "banana", "🍌", "watermelon", "🍉", "grapes", "🍇", "strawberry", "🍓", "melon", "🍈", "cherries", "🍒", "peach", "🍑", "pineapple", "🍍", "coconut", "🥥", "kiwi_fruit", "🥝", "mango", "🥭", "avocado", "🥑", "broccoli", "🥦", "tomato", "🍅", "eggplant", "🍆", "cucumber", "🥒", "carrot", "🥕", "hot_pepper", "🌶", "potato", "🥔", "corn", "🌽", "leafy_greens", "🥬", "sweet_potato", "🍠", "peanuts", "🥜", "honey_pot", "🍯", "croissant", "🥐", "bread", "🍞", "baguette_bread", "🥖", "bagel", "🥯", "pretzel", "🥨", "cheese", "🧀", "egg", "🥚", "bacon", "🥓", "steak", "🥩", "pancakes", "🥞", "poultry_leg", "🍗", "meat_on_bone", "🍖", "bone", "🦴", "fried_shrimp", "🍤", "fried_egg", "🍳", "hamburger", "🍔", "fries", "🍟", "stuffed_flatbread", "🥙", "hotdog", "🌭", "pizza", "🍕", "sandwich", "🥪", "canned_food", "🥫", "spaghetti", "🍝", "taco", "🌮", "burrito", "🌯", "green_salad", "🥗", "shallow_pan_of_food", "🥘", "ramen", "🍜", "stew", "🍲", "fish_cake", "🍥", "fortune_cookie", "🥠", "sushi", "🍣", "bento", "🍱", "curry", "🍛", "rice_ball", "🍙", "rice", "🍚", "rice_cracker", "🍘", "oden", "🍢", "dango", "🍡", "shaved_ice", "🍧", "ice_cream", "🍨", "icecream", "🍦", "pie", "🥧", "cake", "🍰", "cupcake", "🧁", "moon_cake", "🥮", "birthday", "🎂", "custard", "🍮", "candy", "🍬", "lollipop", "🍭", "chocolate_bar", "🍫", "popcorn", "🍿", "dumpling", "🥟", "doughnut", "🍩", "cookie", "🍪", "milk_glass", "🥛", "beer", "🍺", "beers", "🍻", "clinking_glasses", "🥂", "wine_glass", "🍷", "tumbler_glass", "🥃", "cocktail", "🍸", "tropical_drink", "🍹", "champagne", "🍾", "sake", "🍶", "tea", "🍵", "cup_with_straw", "🥤", "coffee", "☕", "baby_bottle", "🍼", "salt", "🧂", "spoon", "🥄", "fork_and_knife", "🍴", "plate_with_cutlery", "🍽", "bowl_with_spoon", "🥣", "takeout_box", "🥡", "chopsticks", "🥢", "soccer", "⚽", "basketball", "🏀", "football", "🏈", "baseball", "⚾", "softball", "🥎", "tennis", "🎾", "volleyball", "🏐", "rugby_football", "🏉", "flying_disc", "🥏", "8ball", "🎱", "golf", "⛳", "golfing_woman", "🏌️‍♀️", "golfing_man", "🏌", "ping_pong", "🏓", "badminton", "🏸", "goal_net", "🥅", "ice_hockey", "🏒", "field_hockey", "🏑", "lacrosse", "🥍", "cricket", "🏏", "ski", "🎿", "skier", "⛷", "snowboarder", "🏂", "person_fencing", "🤺", "women_wrestling", "🤼‍♀️", "men_wrestling", "🤼‍♂️", "woman_cartwheeling", "🤸‍♀️", "man_cartwheeling", "🤸‍♂️", "woman_playing_handball", "🤾‍♀️", "man_playing_handball", "🤾‍♂️", "ice_skate", "⛸", "curling_stone", "🥌", "skateboard", "🛹", "sled", "🛷", "bow_and_arrow", "🏹", "fishing_pole_and_fish", "🎣", "boxing_glove", "🥊", "martial_arts_uniform", "🥋", "rowing_woman", "🚣‍♀️", "rowing_man", "🚣", "climbing_woman", "🧗‍♀️", "climbing_man", "🧗‍♂️", "swimming_woman", "🏊‍♀️", "swimming_man", "🏊", "woman_playing_water_polo", "🤽‍♀️", "man_playing_water_polo", "🤽‍♂️", "woman_in_lotus_position", "🧘‍♀️", "man_in_lotus_position", "🧘‍♂️", "surfing_woman", "🏄‍♀️", "surfing_man", "🏄", "bath", "🛀", "basketball_woman", "⛹️‍♀️", "basketball_man", "⛹", "weight_lifting_woman", "🏋️‍♀️", "weight_lifting_man", "🏋", "biking_woman", "🚴‍♀️", "biking_man", "🚴", "mountain_biking_woman", "🚵‍♀️", "mountain_biking_man", "🚵", "horse_racing", "🏇", "business_suit_levitating", "🕴", "trophy", "🏆", "running_shirt_with_sash", "🎽", "medal_sports", "🏅", "medal_military", "🎖", "1st_place_medal", "🥇", "2nd_place_medal", "🥈", "3rd_place_medal", "🥉", "reminder_ribbon", "🎗", "rosette", "🏵", "ticket", "🎫", "tickets", "🎟", "performing_arts", "🎭", "art", "🎨", "circus_tent", "🎪", "woman_juggling", "🤹‍♀️", "man_juggling", "🤹‍♂️", "microphone", "🎤", "headphones", "🎧", "musical_score", "🎼", "musical_keyboard", "🎹", "drum", "🥁", "saxophone", "🎷", "trumpet", "🎺", "guitar", "🎸", "violin", "🎻", "clapper", "🎬", "video_game", "🎮", "space_invader", "👾", "dart", "🎯", "game_die", "🎲", "chess_pawn", "♟", "slot_machine", "🎰", "jigsaw", "🧩", "bowling", "🎳", "red_car", "🚗", "taxi", "🚕", "blue_car", "🚙", "bus", "🚌", "trolleybus", "🚎", "racing_car", "🏎", "police_car", "🚓", "ambulance", "🚑", "fire_engine", "🚒", "minibus", "🚐", "truck", "🚚", "articulated_lorry", "🚛", "tractor", "🚜", "kick_scooter", "🛴", "motorcycle", "🏍", "bike", "🚲", "motor_scooter", "🛵", "rotating_light", "🚨", "oncoming_police_car", "🚔", "oncoming_bus", "🚍", "oncoming_automobile", "🚘", "oncoming_taxi", "🚖", "aerial_tramway", "🚡", "mountain_cableway", "🚠", "suspension_railway", "🚟", "railway_car", "🚃", "train", "🚋", "monorail", "🚝", "bullettrain_side", "🚄", "bullettrain_front", "🚅", "light_rail", "🚈", "mountain_railway", "🚞", "steam_locomotive", "🚂", "train2", "🚆", "metro", "🚇", "tram", "🚊", "station", "🚉", "flying_saucer", "🛸", "helicopter", "🚁", "small_airplane", "🛩", "airplane", "✈️", "flight_departure", "🛫", "flight_arrival", "🛬", "sailboat", "⛵", "motor_boat", "🛥", "speedboat", "🚤", "ferry", "⛴", "passenger_ship", "🛳", "rocket", "🚀", "artificial_satellite", "🛰", "seat", "💺", "canoe", "🛶", "anchor", "⚓", "construction", "🚧", "fuelpump", "⛽", "busstop", "🚏", "vertical_traffic_light", "🚦", "traffic_light", "🚥", "checkered_flag", "🏁", "ship", "🚢", "ferris_wheel", "🎡", "roller_coaster", "🎢", "carousel_horse", "🎠", "building_construction", "🏗", "foggy", "🌁", "tokyo_tower", "🗼", "factory", "🏭", "fountain", "⛲", "rice_scene", "🎑", "mountain", "⛰", "mountain_snow", "🏔", "mount_fuji", "🗻", "volcano", "🌋", "japan", "🗾", "camping", "🏕", "tent", "⛺", "national_park", "🏞", "motorway", "🛣", "railway_track", "🛤", "sunrise", "🌅", "sunrise_over_mountains", "🌄", "desert", "🏜", "beach_umbrella", "🏖", "desert_island", "🏝", "city_sunrise", "🌇", "city_sunset", "🌆", "cityscape", "🏙", "night_with_stars", "🌃", "bridge_at_night", "🌉", "milky_way", "🌌", "stars", "🌠", "sparkler", "🎇", "fireworks", "🎆", "rainbow", "🌈", "houses", "🏘", "european_castle", "🏰", "japanese_castle", "🏯", "stadium", "🏟", "statue_of_liberty", "🗽", "house", "🏠", "house_with_garden", "🏡", "derelict_house", "🏚", "office", "🏢", "department_store", "🏬", "post_office", "🏣", "european_post_office", "🏤", "hospital", "🏥", "bank", "🏦", "hotel", "🏨", "convenience_store", "🏪", "school", "🏫", "love_hotel", "🏩", "wedding", "💒", "classical_building", "🏛", "church", "⛪", "mosque", "🕌", "synagogue", "🕍", "kaaba", "🕋", "shinto_shrine", "⛩", "watch", "⌚", "iphone", "📱", "calling", "📲", "computer", "💻", "keyboard", "⌨", "desktop_computer", "🖥", "printer", "🖨", "computer_mouse", "🖱", "trackball", "🖲", "joystick", "🕹", "clamp", "🗜", "minidisc", "💽", "floppy_disk", "💾", "cd", "💿", "dvd", "📀", "vhs", "📼", "camera", "📷", "camera_flash", "📸", "video_camera", "📹", "movie_camera", "🎥", "film_projector", "📽", "film_strip", "🎞", "telephone_receiver", "📞", "phone", "☎️", "pager", "📟", "fax", "📠", "tv", "📺", "radio", "📻", "studio_microphone", "🎙", "level_slider", "🎚", "control_knobs", "🎛", "compass", "🧭", "stopwatch", "⏱", "timer_clock", "⏲", "alarm_clock", "⏰", "mantelpiece_clock", "🕰", "hourglass_flowing_sand", "⏳", "hourglass", "⌛", "satellite", "📡", "battery", "🔋", "electric_plug", "🔌", "bulb", "💡", "flashlight", "🔦", "candle", "🕯", "fire_extinguisher", "🧯", "wastebasket", "🗑", "oil_drum", "🛢", "money_with_wings", "💸", "dollar", "💵", "yen", "💴", "euro", "💶", "pound", "💷", "moneybag", "💰", "credit_card", "💳", "gem", "💎", "balance_scale", "⚖", "toolbox", "🧰", "wrench", "🔧", "hammer", "🔨", "hammer_and_pick", "⚒", "hammer_and_wrench", "🛠", "pick", "⛏", "nut_and_bolt", "🔩", "gear", "⚙", "brick", "🧱", "chains", "⛓", "magnet", "🧲", "gun", "🔫", "bomb", "💣", "firecracker", "🧨", "hocho", "🔪", "dagger", "🗡", "crossed_swords", "⚔", "shield", "🛡", "smoking", "🚬", "skull_and_crossbones", "☠", "coffin", "⚰", "funeral_urn", "⚱", "amphora", "🏺", "crystal_ball", "🔮", "prayer_beads", "📿", "nazar_amulet", "🧿", "barber", "💈", "alembic", "⚗", "telescope", "🔭", "microscope", "🔬", "hole", "🕳", "pill", "💊", "syringe", "💉", "dna", "🧬", "microbe", "🦠", "petri_dish", "🧫", "test_tube", "🧪", "thermometer", "🌡", "broom", "🧹", "basket", "🧺", "toilet_paper", "🧻", "label", "🏷", "bookmark", "🔖", "toilet", "🚽", "shower", "🚿", "bathtub", "🛁", "soap", "🧼", "sponge", "🧽", "lotion_bottle", "🧴", "key", "🔑", "old_key", "🗝", "couch_and_lamp", "🛋", "sleeping_bed", "🛌", "bed", "🛏", "door", "🚪", "bellhop_bell", "🛎", "teddy_bear", "🧸", "framed_picture", "🖼", "world_map", "🗺", "parasol_on_ground", "⛱", "moyai", "🗿", "shopping", "🛍", "shopping_cart", "🛒", "balloon", "🎈", "flags", "🎏", "ribbon", "🎀", "gift", "🎁", "confetti_ball", "🎊", "tada", "🎉", "dolls", "🎎", "wind_chime", "🎐", "crossed_flags", "🎌", "izakaya_lantern", "🏮", "red_envelope", "🧧", "email", "✉️", "envelope_with_arrow", "📩", "incoming_envelope", "📨", "e-mail", "📧", "love_letter", "💌", "postbox", "📮", "mailbox_closed", "📪", "mailbox", "📫", "mailbox_with_mail", "📬", "mailbox_with_no_mail", "📭", "package", "📦", "postal_horn", "📯", "inbox_tray", "📥", "outbox_tray", "📤", "scroll", "📜", "page_with_curl", "📃", "bookmark_tabs", "📑", "receipt", "🧾", "bar_chart", "📊", "chart_with_upwards_trend", "📈", "chart_with_downwards_trend", "📉", "page_facing_up", "📄", "date", "📅", "calendar", "📆", "spiral_calendar", "🗓", "card_index", "📇", "card_file_box", "🗃", "ballot_box", "🗳", "file_cabinet", "🗄", "clipboard", "📋", "spiral_notepad", "🗒", "file_folder", "📁", "open_file_folder", "📂", "card_index_dividers", "🗂", "newspaper_roll", "🗞", "newspaper", "📰", "notebook", "📓", "closed_book", "📕", "green_book", "📗", "blue_book", "📘", "orange_book", "📙", "notebook_with_decorative_cover", "📔", "ledger", "📒", "books", "📚", "open_book", "📖", "safety_pin", "🧷", "link", "🔗", "paperclip", "📎", "paperclips", "🖇", "scissors", "✂️", "triangular_ruler", "📐", "straight_ruler", "📏", "abacus", "🧮", "pushpin", "📌", "round_pushpin", "📍", "triangular_flag_on_post", "🚩", "white_flag", "🏳", "black_flag", "🏴", "rainbow_flag", "🏳️‍🌈", "closed_lock_with_key", "🔐", "lock", "🔒", "unlock", "🔓", "lock_with_ink_pen", "🔏", "pen", "🖊", "fountain_pen", "🖋", "black_nib", "✒️", "memo", "📝", "pencil2", "✏️", "crayon", "🖍", "paintbrush", "🖌", "mag", "🔍", "mag_right", "🔎", "heart", "❤️", "orange_heart", "🧡", "yellow_heart", "💛", "green_heart", "💚", "blue_heart", "💙", "purple_heart", "💜", "black_heart", "🖤", "broken_heart", "💔", "heavy_heart_exclamation", "❣", "two_hearts", "💕", "revolving_hearts", "💞", "heartbeat", "💓", "heartpulse", "💗", "sparkling_heart", "💖", "cupid", "💘", "gift_heart", "💝", "heart_decoration", "💟", "peace_symbol", "☮", "latin_cross", "✝", "star_and_crescent", "☪", "om", "🕉", "wheel_of_dharma", "☸", "star_of_david", "✡", "six_pointed_star", "🔯", "menorah", "🕎", "yin_yang", "☯", "orthodox_cross", "☦", "place_of_worship", "🛐", "ophiuchus", "⛎", "aries", "♈", "taurus", "♉", "gemini", "♊", "cancer", "♋", "leo", "♌", "virgo", "♍", "libra", "♎", "scorpius", "♏", "sagittarius", "♐", "capricorn", "♑", "aquarius", "♒", "pisces", "♓", "id", "🆔", "atom_symbol", "⚛", "u7a7a", "🈳", "u5272", "🈹", "radioactive", "☢", "biohazard", "☣", "mobile_phone_off", "📴", "vibration_mode", "📳", "u6709", "🈶", "u7121", "🈚", "u7533", "🈸", "u55b6", "🈺", "u6708", "🈷️", "eight_pointed_black_star", "✴️", "vs", "🆚", "accept", "🉑", "white_flower", "💮", "ideograph_advantage", "🉐", "secret", "㊙️", "congratulations", "㊗️", "u5408", "🈴", "u6e80", "🈵", "u7981", "🈲", "a", "🅰️", "b", "🅱️", "ab", "🆎", "cl", "🆑", "o2", "🅾️", "sos", "🆘", "no_entry", "⛔", "name_badge", "📛", "no_entry_sign", "🚫", "x", "❌", "o", "⭕", "stop_sign", "🛑", "anger", "💢", "hotsprings", "♨️", "no_pedestrians", "🚷", "do_not_litter", "🚯", "no_bicycles", "🚳", "non-potable_water", "🚱", "underage", "🔞", "no_mobile_phones", "📵", "exclamation", "❗", "grey_exclamation", "❕", "question", "❓", "grey_question", "❔", "bangbang", "‼️", "interrobang", "⁉️", "100", "💯", "low_brightness", "🔅", "high_brightness", "🔆", "trident", "🔱", "fleur_de_lis", "⚜", "part_alternation_mark", "〽️", "warning", "⚠️", "children_crossing", "🚸", "beginner", "🔰", "recycle", "♻️", "u6307", "🈯", "chart", "💹", "sparkle", "❇️", "eight_spoked_asterisk", "✳️", "negative_squared_cross_mark", "❎", "white_check_mark", "✅", "diamond_shape_with_a_dot_inside", "💠", "cyclone", "🌀", "loop", "➿", "globe_with_meridians", "🌐", "m", "Ⓜ️", "atm", "🏧", "sa", "🈂️", "passport_control", "🛂", "customs", "🛃", "baggage_claim", "🛄", "left_luggage", "🛅", "wheelchair", "♿", "no_smoking", "🚭", "wc", "🚾", "parking", "🅿️", "potable_water", "🚰", "mens", "🚹", "womens", "🚺", "baby_symbol", "🚼", "restroom", "🚻", "put_litter_in_its_place", "🚮", "cinema", "🎦", "signal_strength", "📶", "koko", "🈁", "ng", "🆖", "ok", "🆗", "up", "🆙", "cool", "🆒", "new", "🆕", "free", "🆓", "zero", "0️⃣", "one", "1️⃣", "two", "2️⃣", "three", "3️⃣", "four", "4️⃣", "five", "5️⃣", "six", "6️⃣", "seven", "7️⃣", "eight", "8️⃣", "nine", "9️⃣", "keycap_ten", "🔟", "asterisk", "*⃣", "1234", "🔢", "eject_button", "⏏️", "arrow_forward", "▶️", "pause_button", "⏸", "next_track_button", "⏭", "stop_button", "⏹", "record_button", "⏺", "play_or_pause_button", "⏯", "previous_track_button", "⏮", "fast_forward", "⏩", "rewind", "⏪", "twisted_rightwards_arrows", "🔀", "repeat", "🔁", "repeat_one", "🔂", "arrow_backward", "◀️", "arrow_up_small", "🔼", "arrow_down_small", "🔽", "arrow_double_up", "⏫", "arrow_double_down", "⏬", "arrow_right", "➡️", "arrow_left", "⬅️", "arrow_up", "⬆️", "arrow_down", "⬇️", "arrow_upper_right", "↗️", "arrow_lower_right", "↘️", "arrow_lower_left", "↙️", "arrow_upper_left", "↖️", "arrow_up_down", "↕️", "left_right_arrow", "↔️", "arrows_counterclockwise", "🔄", "arrow_right_hook", "↪️", "leftwards_arrow_with_hook", "↩️", "arrow_heading_up", "⤴️", "arrow_heading_down", "⤵️", "hash", "#️⃣", "information_source", "ℹ️", "abc", "🔤", "abcd", "🔡", "capital_abcd", "🔠", "symbols", "🔣", "musical_note", "🎵", "notes", "🎶", "wavy_dash", "〰️", "curly_loop", "➰", "heavy_check_mark", "✔️", "arrows_clockwise", "🔃", "heavy_plus_sign", "➕", "heavy_minus_sign", "➖", "heavy_division_sign", "➗", "heavy_multiplication_x", "✖️", "infinity", "♾", "heavy_dollar_sign", "💲", "currency_exchange", "💱", "copyright", "©️", "registered", "®️", "tm", "™️", "end", "🔚", "back", "🔙", "on", "🔛", "top", "🔝", "soon", "🔜", "ballot_box_with_check", "☑️", "radio_button", "🔘", "white_circle", "⚪", "black_circle", "⚫", "red_circle", "🔴", "large_blue_circle", "🔵", "small_orange_diamond", "🔸", "small_blue_diamond", "🔹", "large_orange_diamond", "🔶", "large_blue_diamond", "🔷", "small_red_triangle", "🔺", "black_small_square", "▪️", "white_small_square", "▫️", "black_large_square", "⬛", "white_large_square", "⬜", "small_red_triangle_down", "🔻", "black_medium_square", "◼️", "white_medium_square", "◻️", "black_medium_small_square", "◾", "white_medium_small_square", "◽", "black_square_button", "🔲", "white_square_button", "🔳", "speaker", "🔈", "sound", "🔉", "loud_sound", "🔊", "mute", "🔇", "mega", "📣", "loudspeaker", "📢", "bell", "🔔", "no_bell", "🔕", "black_joker", "🃏", "mahjong", "🀄", "spades", "♠️", "clubs", "♣️", "hearts", "♥️", "diamonds", "♦️", "flower_playing_cards", "🎴", "thought_balloon", "💭", "right_anger_bubble", "🗯", "speech_balloon", "💬", "left_speech_bubble", "🗨", "clock1", "🕐", "clock2", "🕑", "clock3", "🕒", "clock4", "🕓", "clock5", "🕔", "clock6", "🕕", "clock7", "🕖", "clock8", "🕗", "clock9", "🕘", "clock10", "🕙", "clock11", "🕚", "clock12", "🕛", "clock130", "🕜", "clock230", "🕝", "clock330", "🕞", "clock430", "🕟", "clock530", "🕠", "clock630", "🕡", "clock730", "🕢", "clock830", "🕣", "clock930", "🕤", "clock1030", "🕥", "clock1130", "🕦", "clock1230", "🕧", "afghanistan", "🇦🇫", "aland_islands", "🇦🇽", "albania", "🇦🇱", "algeria", "🇩🇿", "american_samoa", "🇦🇸", "andorra", "🇦🇩", "angola", "🇦🇴", "anguilla", "🇦🇮", "antarctica", "🇦🇶", "antigua_barbuda", "🇦🇬", "argentina", "🇦🇷", "armenia", "🇦🇲", "aruba", "🇦🇼", "australia", "🇦🇺", "austria", "🇦🇹", "azerbaijan", "🇦🇿", "bahamas", "🇧🇸", "bahrain", "🇧🇭", "bangladesh", "🇧🇩", "barbados", "🇧🇧", "belarus", "🇧🇾", "belgium", "🇧🇪", "belize", "🇧🇿", "benin", "🇧🇯", "bermuda", "🇧🇲", "bhutan", "🇧🇹", "bolivia", "🇧🇴", "caribbean_netherlands", "🇧🇶", "bosnia_herzegovina", "🇧🇦", "botswana", "🇧🇼", "brazil", "🇧🇷", "british_indian_ocean_territory", "🇮🇴", "british_virgin_islands", "🇻🇬", "brunei", "🇧🇳", "bulgaria", "🇧🇬", "burkina_faso", "🇧🇫", "burundi", "🇧🇮", "cape_verde", "🇨🇻", "cambodia", "🇰🇭", "cameroon", "🇨🇲", "canada", "🇨🇦", "canary_islands", "🇮🇨", "cayman_islands", "🇰🇾", "central_african_republic", "🇨🇫", "chad", "🇹🇩", "chile", "🇨🇱", "cn", "🇨🇳", "christmas_island", "🇨🇽", "cocos_islands", "🇨🇨", "colombia", "🇨🇴", "comoros", "🇰🇲", "congo_brazzaville", "🇨🇬", "congo_kinshasa", "🇨🇩", "cook_islands", "🇨🇰", "costa_rica", "🇨🇷", "croatia", "🇭🇷", "cuba", "🇨🇺", "curacao", "🇨🇼", "cyprus", "🇨🇾", "czech_republic", "🇨🇿", "denmark", "🇩🇰", "djibouti", "🇩🇯", "dominica", "🇩🇲", "dominican_republic", "🇩🇴", "ecuador", "🇪🇨", "egypt", "🇪🇬", "el_salvador", "🇸🇻", "equatorial_guinea", "🇬🇶", "eritrea", "🇪🇷", "estonia", "🇪🇪", "ethiopia", "🇪🇹", "eu", "🇪🇺", "falkland_islands", "🇫🇰", "faroe_islands", "🇫🇴", "fiji", "🇫🇯", "finland", "🇫🇮", "fr", "🇫🇷", "french_guiana", "🇬🇫", "french_polynesia", "🇵🇫", "french_southern_territories", "🇹🇫", "gabon", "🇬🇦", "gambia", "🇬🇲", "georgia", "🇬🇪", "de", "🇩🇪", "ghana", "🇬🇭", "gibraltar", "🇬🇮", "greece", "🇬🇷", "greenland", "🇬🇱", "grenada", "🇬🇩", "guadeloupe", "🇬🇵", "guam", "🇬🇺", "guatemala", "🇬🇹", "guernsey", "🇬🇬", "guinea", "🇬🇳", "guinea_bissau", "🇬🇼", "guyana", "🇬🇾", "haiti", "🇭🇹", "honduras", "🇭🇳", "hong_kong", "🇭🇰", "hungary", "🇭🇺", "iceland", "🇮🇸", "india", "🇮🇳", "indonesia", "🇮🇩", "iran", "🇮🇷", "iraq", "🇮🇶", "ireland", "🇮🇪", "isle_of_man", "🇮🇲", "israel", "🇮🇱", "it", "🇮🇹", "cote_divoire", "🇨🇮", "jamaica", "🇯🇲", "jp", "🇯🇵", "jersey", "🇯🇪", "jordan", "🇯🇴", "kazakhstan", "🇰🇿", "kenya", "🇰🇪", "kiribati", "🇰🇮", "kosovo", "🇽🇰", "kuwait", "🇰🇼", "kyrgyzstan", "🇰🇬", "laos", "🇱🇦", "latvia", "🇱🇻", "lebanon", "🇱🇧", "lesotho", "🇱🇸", "liberia", "🇱🇷", "libya", "🇱🇾", "liechtenstein", "🇱🇮", "lithuania", "🇱🇹", "luxembourg", "🇱🇺", "macau", "🇲🇴", "macedonia", "🇲🇰", "madagascar", "🇲🇬", "malawi", "🇲🇼", "malaysia", "🇲🇾", "maldives", "🇲🇻", "mali", "🇲🇱", "malta", "🇲🇹", "marshall_islands", "🇲🇭", "martinique", "🇲🇶", "mauritania", "🇲🇷", "mauritius", "🇲🇺", "mayotte", "🇾🇹", "mexico", "🇲🇽", "micronesia", "🇫🇲", "moldova", "🇲🇩", "monaco", "🇲🇨", "mongolia", "🇲🇳", "montenegro", "🇲🇪", "montserrat", "🇲🇸", "morocco", "🇲🇦", "mozambique", "🇲🇿", "myanmar", "🇲🇲", "namibia", "🇳🇦", "nauru", "🇳🇷", "nepal", "🇳🇵", "netherlands", "🇳🇱", "new_caledonia", "🇳🇨", "new_zealand", "🇳🇿", "nicaragua", "🇳🇮", "niger", "🇳🇪", "nigeria", "🇳🇬", "niue", "🇳🇺", "norfolk_island", "🇳🇫", "northern_mariana_islands", "🇲🇵", "north_korea", "🇰🇵", "norway", "🇳🇴", "oman", "🇴🇲", "pakistan", "🇵🇰", "palau", "🇵🇼", "palestinian_territories", "🇵🇸", "panama", "🇵🇦", "papua_new_guinea", "🇵🇬", "paraguay", "🇵🇾", "peru", "🇵🇪", "philippines", "🇵🇭", "pitcairn_islands", "🇵🇳", "poland", "🇵🇱", "portugal", "🇵🇹", "puerto_rico", "🇵🇷", "qatar", "🇶🇦", "reunion", "🇷🇪", "romania", "🇷🇴", "ru", "🇷🇺", "rwanda", "🇷🇼", "st_barthelemy", "🇧🇱", "st_helena", "🇸🇭", "st_kitts_nevis", "🇰🇳", "st_lucia", "🇱🇨", "st_pierre_miquelon", "🇵🇲", "st_vincent_grenadines", "🇻🇨", "samoa", "🇼🇸", "san_marino", "🇸🇲", "sao_tome_principe", "🇸🇹", "saudi_arabia", "🇸🇦", "senegal", "🇸🇳", "serbia", "🇷🇸", "seychelles", "🇸🇨", "sierra_leone", "🇸🇱", "singapore", "🇸🇬", "sint_maarten", "🇸🇽", "slovakia", "🇸🇰", "slovenia", "🇸🇮", "solomon_islands", "🇸🇧", "somalia", "🇸🇴", "south_africa", "🇿🇦", "south_georgia_south_sandwich_islands", "🇬🇸", "kr", "🇰🇷", "south_sudan", "🇸🇸", "es", "🇪🇸", "sri_lanka", "🇱🇰", "sudan", "🇸🇩", "suriname", "🇸🇷", "swaziland", "🇸🇿", "sweden", "🇸🇪", "switzerland", "🇨🇭", "syria", "🇸🇾", "taiwan", "🇹🇼", "tajikistan", "🇹🇯", "tanzania", "🇹🇿", "thailand", "🇹🇭", "timor_leste", "🇹🇱", "togo", "🇹🇬", "tokelau", "🇹🇰", "tonga", "🇹🇴", "trinidad_tobago", "🇹🇹", "tunisia", "🇹🇳", "tr", "🇹🇷", "turkmenistan", "🇹🇲", "turks_caicos_islands", "🇹🇨", "tuvalu", "🇹🇻", "uganda", "🇺🇬", "ukraine", "🇺🇦", "united_arab_emirates", "🇦🇪", "uk", "🇬🇧", "england", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "scotland", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "wales", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "us", "🇺🇸", "us_virgin_islands", "🇻🇮", "uruguay", "🇺🇾", "uzbekistan", "🇺🇿", "vanuatu", "🇻🇺", "vatican_city", "🇻🇦", "venezuela", "🇻🇪", "vietnam", "🇻🇳", "wallis_futuna", "🇼🇫", "western_sahara", "🇪🇭", "yemen", "🇾🇪", "zambia", "🇿🇲", "zimbabwe", "🇿🇼", "united_nations", "🇺🇳", "pirate_flag", "🏴‍☠️"]);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: block_parser.FencedCodeBlockSyntax.prototype
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: block_parser.HeaderWithIdSyntax.prototype
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: block_parser.SetextHeaderWithIdSyntax.prototype
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: block_parser.TableSyntax.prototype
      });
    },
    get C16() {
      return C16 = dart.constList(["p", "li"], core.String);
    },
    get C17() {
      return C17 = dart.constList(["blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "li", "ol", "p", "pre", "ul"], core.String);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: convert.HtmlEscapeMode.prototype,
        escapeSlash: false,
        escapeApos: false,
        escapeQuot: false,
        escapeLtGt: true,
        [_name]: "element"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: convert.HtmlEscape.prototype,
        mode: C19 || CT.C19
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: convert.HtmlEscapeMode.prototype,
        escapeSlash: false,
        escapeApos: false,
        escapeQuot: true,
        escapeLtGt: true,
        [_name]: "attribute"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: convert.HtmlEscape.prototype,
        mode: C21 || CT.C21
      });
    }
  });
  dart.defineLazy(markdown, {
    /*markdown.version*/get version() {
      return "2.1.1";
    }
  });
  const _pos = dart.privateName(block_parser, "_pos");
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
  block_parser.BlockParser = class BlockParser extends core.Object {
    get lines() {
      return this[lines$];
    }
    set lines(value) {
      super.lines = value;
    }
    get document() {
      return this[document$0];
    }
    set document(value) {
      super.document = value;
    }
    get blockSyntaxes() {
      return this[blockSyntaxes];
    }
    set blockSyntaxes(value) {
      super.blockSyntaxes = value;
    }
    get encounteredBlankLine() {
      return this[encounteredBlankLine];
    }
    set encounteredBlankLine(value) {
      this[encounteredBlankLine] = value;
    }
    get standardBlockSyntaxes() {
      return this[standardBlockSyntaxes];
    }
    set standardBlockSyntaxes(value) {
      super.standardBlockSyntaxes = value;
    }
    get current() {
      return this.lines[$_get](this[_pos]);
    }
    get next() {
      if (dart.notNull(this[_pos]) >= dart.notNull(this.lines[$length]) - 1) return null;
      return this.lines[$_get](dart.notNull(this[_pos]) + 1);
    }
    peek(linesAhead) {
      if (dart.notNull(linesAhead) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid linesAhead: " + dart.str(linesAhead) + "; must be >= 0."));
      }
      if (dart.notNull(this[_pos]) >= dart.notNull(this.lines[$length]) - dart.notNull(linesAhead)) return null;
      return this.lines[$_get](dart.notNull(this[_pos]) + dart.notNull(linesAhead));
    }
    advance() {
      this[_pos] = dart.notNull(this[_pos]) + 1;
    }
    get isDone() {
      return dart.notNull(this[_pos]) >= dart.notNull(this.lines[$length]);
    }
    matches(regex) {
      if (dart.test(this.isDone)) return false;
      return regex.firstMatch(this.current) != null;
    }
    matchesNext(regex) {
      if (this.next == null) return false;
      return regex.firstMatch(this.next) != null;
    }
    parseLines() {
      let blocks = JSArrayOfNode().of([]);
      while (!dart.test(this.isDone)) {
        for (let syntax of this.blockSyntaxes) {
          if (dart.test(syntax.canParse(this))) {
            let block = syntax.parse(this);
            if (block != null) blocks[$add](block);
            break;
          }
        }
      }
      return blocks;
    }
  };
  (block_parser.BlockParser.new = function(lines, document) {
    this[blockSyntaxes] = JSArrayOfBlockSyntax().of([]);
    this[_pos] = 0;
    this[encounteredBlankLine] = false;
    this[standardBlockSyntaxes] = JSArrayOfBlockSyntax().of([C0 || CT.C0, C1 || CT.C1, new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<pre(?:\\s|>|$)", "</pre>"), new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<script(?:\\s|>|$)", "</script>"), new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<style(?:\\s|>|$)", "</style>"), new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<!--", "-->"), new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<\\?", "\\?>"), new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<![A-Z]", ">"), new block_parser.LongBlockHtmlSyntax.new("^ {0,3}<!\\[CDATA\\[", "\\]\\]>"), C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10]);
    this[lines$] = lines;
    this[document$0] = document;
    this.blockSyntaxes[$addAll](this.document.blockSyntaxes);
    this.blockSyntaxes[$addAll](this.standardBlockSyntaxes);
  }).prototype = block_parser.BlockParser.prototype;
  dart.addTypeTests(block_parser.BlockParser);
  const lines$ = Symbol("BlockParser.lines");
  const document$0 = Symbol("BlockParser.document");
  const blockSyntaxes = Symbol("BlockParser.blockSyntaxes");
  const encounteredBlankLine = Symbol("BlockParser.encounteredBlankLine");
  const standardBlockSyntaxes = Symbol("BlockParser.standardBlockSyntaxes");
  dart.setMethodSignature(block_parser.BlockParser, () => ({
    __proto__: dart.getMethods(block_parser.BlockParser.__proto__),
    peek: dart.fnType(core.String, [core.int]),
    advance: dart.fnType(dart.void, []),
    matches: dart.fnType(core.bool, [core.RegExp]),
    matchesNext: dart.fnType(core.bool, [core.RegExp]),
    parseLines: dart.fnType(core.List$(ast.Node), [])
  }));
  dart.setGetterSignature(block_parser.BlockParser, () => ({
    __proto__: dart.getGetters(block_parser.BlockParser.__proto__),
    current: core.String,
    next: core.String,
    isDone: core.bool
  }));
  dart.setLibraryUri(block_parser.BlockParser, "package:markdown/src/block_parser.dart");
  dart.setFieldSignature(block_parser.BlockParser, () => ({
    __proto__: dart.getFields(block_parser.BlockParser.__proto__),
    lines: dart.finalFieldType(core.List$(core.String)),
    document: dart.finalFieldType(document$.Document),
    blockSyntaxes: dart.finalFieldType(core.List$(block_parser.BlockSyntax)),
    [_pos]: dart.fieldType(core.int),
    encounteredBlankLine: dart.fieldType(core.bool),
    standardBlockSyntaxes: dart.finalFieldType(core.List$(block_parser.BlockSyntax))
  }));
  block_parser.BlockSyntax = class BlockSyntax extends core.Object {
    get pattern() {
      return null;
    }
    get canEndBlock() {
      return true;
    }
    canParse(parser) {
      return this.pattern.firstMatch(parser.current) != null;
    }
    parseChildLines(parser) {
      let childLines = JSArrayOfString().of([]);
      while (!dart.test(parser.isDone)) {
        let match = this.pattern.firstMatch(parser.current);
        if (match == null) break;
        childLines[$add](match._get(1));
        parser.advance();
      }
      return childLines;
    }
    static isAtBlockEnd(parser) {
      if (dart.test(parser.isDone)) return true;
      return parser.blockSyntaxes[$any](dart.fn(s => dart.test(s.canParse(parser)) && dart.test(s.canEndBlock), BlockSyntaxTobool()));
    }
    static generateAnchorHash(element) {
      return element.children[$first].textContent[$toLowerCase]()[$trim]()[$replaceAll](core.RegExp.new("[^a-z0-9 _-]"), "")[$replaceAll](core.RegExp.new("\\s"), "-");
    }
  };
  (block_parser.BlockSyntax.new = function() {
    ;
  }).prototype = block_parser.BlockSyntax.prototype;
  dart.addTypeTests(block_parser.BlockSyntax);
  dart.setMethodSignature(block_parser.BlockSyntax, () => ({
    __proto__: dart.getMethods(block_parser.BlockSyntax.__proto__),
    canParse: dart.fnType(core.bool, [block_parser.BlockParser]),
    parseChildLines: dart.fnType(core.List$(core.String), [block_parser.BlockParser])
  }));
  dart.setGetterSignature(block_parser.BlockSyntax, () => ({
    __proto__: dart.getGetters(block_parser.BlockSyntax.__proto__),
    pattern: core.RegExp,
    canEndBlock: core.bool
  }));
  dart.setLibraryUri(block_parser.BlockSyntax, "package:markdown/src/block_parser.dart");
  block_parser.EmptyBlockSyntax = class EmptyBlockSyntax extends block_parser.BlockSyntax {
    get pattern() {
      return block_parser._emptyPattern;
    }
    parse(parser) {
      parser.encounteredBlankLine = true;
      parser.advance();
      return null;
    }
  };
  (block_parser.EmptyBlockSyntax.new = function() {
    block_parser.EmptyBlockSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.EmptyBlockSyntax.prototype;
  dart.addTypeTests(block_parser.EmptyBlockSyntax);
  dart.setMethodSignature(block_parser.EmptyBlockSyntax, () => ({
    __proto__: dart.getMethods(block_parser.EmptyBlockSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.EmptyBlockSyntax, "package:markdown/src/block_parser.dart");
  const _interperableAsParagraph = dart.privateName(block_parser, "_interperableAsParagraph");
  block_parser.SetextHeaderSyntax = class SetextHeaderSyntax extends block_parser.BlockSyntax {
    canParse(parser) {
      if (!dart.test(this[_interperableAsParagraph](parser.current))) return false;
      let i = 1;
      while (true) {
        let nextLine = parser.peek(i);
        if (nextLine == null) {
          return false;
        }
        if (dart.test(block_parser._setextPattern.hasMatch(nextLine))) {
          return true;
        }
        if (!dart.test(this[_interperableAsParagraph](nextLine))) {
          return false;
        }
        i = i + 1;
      }
    }
    parse(parser) {
      let lines = JSArrayOfString().of([]);
      let tag = null;
      while (!dart.test(parser.isDone)) {
        let match = block_parser._setextPattern.firstMatch(parser.current);
        if (match == null) {
          lines[$add](parser.current);
          parser.advance();
          continue;
        } else {
          tag = match._get(1)[$_get](0) === "=" ? "h1" : "h2";
          parser.advance();
          break;
        }
      }
      let contents = new ast.UnparsedContent.new(lines[$join]("\n"));
      return new ast.Element.new(tag, JSArrayOfNode().of([contents]));
    }
    [_interperableAsParagraph](line) {
      return !(dart.test(block_parser._indentPattern.hasMatch(line)) || dart.test(block_parser._codeFencePattern.hasMatch(line)) || dart.test(block_parser._headerPattern.hasMatch(line)) || dart.test(block_parser._blockquotePattern.hasMatch(line)) || dart.test(block_parser._hrPattern.hasMatch(line)) || dart.test(block_parser._ulPattern.hasMatch(line)) || dart.test(block_parser._olPattern.hasMatch(line)) || dart.test(block_parser._emptyPattern.hasMatch(line)));
    }
  };
  (block_parser.SetextHeaderSyntax.new = function() {
    block_parser.SetextHeaderSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.SetextHeaderSyntax.prototype;
  dart.addTypeTests(block_parser.SetextHeaderSyntax);
  dart.setMethodSignature(block_parser.SetextHeaderSyntax, () => ({
    __proto__: dart.getMethods(block_parser.SetextHeaderSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser]),
    [_interperableAsParagraph]: dart.fnType(core.bool, [core.String])
  }));
  dart.setLibraryUri(block_parser.SetextHeaderSyntax, "package:markdown/src/block_parser.dart");
  block_parser.SetextHeaderWithIdSyntax = class SetextHeaderWithIdSyntax extends block_parser.SetextHeaderSyntax {
    parse(parser) {
      let element = ast.Element.as(super.parse(parser));
      element.generatedId = block_parser.BlockSyntax.generateAnchorHash(element);
      return element;
    }
  };
  (block_parser.SetextHeaderWithIdSyntax.new = function() {
    block_parser.SetextHeaderWithIdSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.SetextHeaderWithIdSyntax.prototype;
  dart.addTypeTests(block_parser.SetextHeaderWithIdSyntax);
  dart.setLibraryUri(block_parser.SetextHeaderWithIdSyntax, "package:markdown/src/block_parser.dart");
  block_parser.HeaderSyntax = class HeaderSyntax extends block_parser.BlockSyntax {
    get pattern() {
      return block_parser._headerPattern;
    }
    parse(parser) {
      let match = this.pattern.firstMatch(parser.current);
      parser.advance();
      let level = match._get(1).length;
      let contents = new ast.UnparsedContent.new(match._get(2)[$trim]());
      return new ast.Element.new("h" + dart.str(level), JSArrayOfNode().of([contents]));
    }
  };
  (block_parser.HeaderSyntax.new = function() {
    block_parser.HeaderSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.HeaderSyntax.prototype;
  dart.addTypeTests(block_parser.HeaderSyntax);
  dart.setMethodSignature(block_parser.HeaderSyntax, () => ({
    __proto__: dart.getMethods(block_parser.HeaderSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.HeaderSyntax, "package:markdown/src/block_parser.dart");
  block_parser.HeaderWithIdSyntax = class HeaderWithIdSyntax extends block_parser.HeaderSyntax {
    parse(parser) {
      let element = ast.Element.as(super.parse(parser));
      element.generatedId = block_parser.BlockSyntax.generateAnchorHash(element);
      return element;
    }
  };
  (block_parser.HeaderWithIdSyntax.new = function() {
    block_parser.HeaderWithIdSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.HeaderWithIdSyntax.prototype;
  dart.addTypeTests(block_parser.HeaderWithIdSyntax);
  dart.setLibraryUri(block_parser.HeaderWithIdSyntax, "package:markdown/src/block_parser.dart");
  block_parser.BlockquoteSyntax = class BlockquoteSyntax extends block_parser.BlockSyntax {
    get pattern() {
      return block_parser._blockquotePattern;
    }
    parseChildLines(parser) {
      let childLines = JSArrayOfString().of([]);
      while (!dart.test(parser.isDone)) {
        let match = this.pattern.firstMatch(parser.current);
        if (match != null) {
          childLines[$add](match._get(1));
          parser.advance();
          continue;
        }
        if (block_parser.ParagraphSyntax.is(parser.blockSyntaxes[$firstWhere](dart.fn(s => s.canParse(parser), BlockSyntaxTobool())))) {
          childLines[$add](parser.current);
          parser.advance();
        } else {
          break;
        }
      }
      return childLines;
    }
    parse(parser) {
      let childLines = this.parseChildLines(parser);
      let children = new block_parser.BlockParser.new(childLines, parser.document).parseLines();
      return new ast.Element.new("blockquote", children);
    }
  };
  (block_parser.BlockquoteSyntax.new = function() {
    block_parser.BlockquoteSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.BlockquoteSyntax.prototype;
  dart.addTypeTests(block_parser.BlockquoteSyntax);
  dart.setMethodSignature(block_parser.BlockquoteSyntax, () => ({
    __proto__: dart.getMethods(block_parser.BlockquoteSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.BlockquoteSyntax, "package:markdown/src/block_parser.dart");
  block_parser.CodeBlockSyntax = class CodeBlockSyntax extends block_parser.BlockSyntax {
    get pattern() {
      return block_parser._indentPattern;
    }
    get canEndBlock() {
      return false;
    }
    parseChildLines(parser) {
      let childLines = JSArrayOfString().of([]);
      while (!dart.test(parser.isDone)) {
        let match = this.pattern.firstMatch(parser.current);
        if (match != null) {
          childLines[$add](match._get(1));
          parser.advance();
        } else {
          let nextMatch = parser.next != null ? this.pattern.firstMatch(parser.next) : null;
          if (parser.current[$trim]() === "" && nextMatch != null) {
            childLines[$add]("");
            childLines[$add](nextMatch._get(1));
            parser.advance();
            parser.advance();
          } else {
            break;
          }
        }
      }
      return childLines;
    }
    parse(parser) {
      let childLines = this.parseChildLines(parser);
      childLines[$add]("");
      let content = dart.test(parser.document.encodeHtml) ? util.escapeHtml(childLines[$join]("\n")) : childLines[$join]("\n");
      return new ast.Element.new("pre", JSArrayOfNode().of([new ast.Element.text("code", content)]));
    }
  };
  (block_parser.CodeBlockSyntax.new = function() {
    block_parser.CodeBlockSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.CodeBlockSyntax.prototype;
  dart.addTypeTests(block_parser.CodeBlockSyntax);
  dart.setMethodSignature(block_parser.CodeBlockSyntax, () => ({
    __proto__: dart.getMethods(block_parser.CodeBlockSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.CodeBlockSyntax, "package:markdown/src/block_parser.dart");
  block_parser.FencedCodeBlockSyntax = class FencedCodeBlockSyntax extends block_parser.BlockSyntax {
    get pattern() {
      return block_parser._codeFencePattern;
    }
    canParse(parser) {
      let match = this.pattern.firstMatch(parser.current);
      if (match == null) return false;
      let codeFence = match.group(1);
      let infoString = match.group(2);
      return codeFence[$codeUnitAt](0) !== 96 || !dart.test(infoString[$codeUnits][$contains](96));
    }
    parseChildLines(parser, endBlock) {
      if (endBlock === void 0) endBlock = null;
      if (endBlock == null) endBlock = "";
      let childLines = JSArrayOfString().of([]);
      parser.advance();
      while (!dart.test(parser.isDone)) {
        let match = this.pattern.firstMatch(parser.current);
        if (match == null || !match._get(1)[$startsWith](endBlock)) {
          childLines[$add](parser.current);
          parser.advance();
        } else {
          parser.advance();
          break;
        }
      }
      return childLines;
    }
    parse(parser) {
      let match = this.pattern.firstMatch(parser.current);
      let endBlock = match.group(1);
      let infoString = match.group(2);
      let childLines = this.parseChildLines(parser, endBlock);
      childLines[$add]("");
      let text = childLines[$join]("\n");
      if (dart.test(parser.document.encodeHtml)) {
        text = util.escapeHtml(text);
      }
      let code = new ast.Element.text("code", text);
      infoString = infoString[$trim]();
      if (infoString[$isNotEmpty]) {
        let firstSpace = infoString[$indexOf](" ");
        if (firstSpace >= 0) {
          infoString = infoString[$substring](0, firstSpace);
        }
        if (dart.test(parser.document.encodeHtml)) {
          infoString = util.escapeHtmlAttribute(infoString);
        }
        code.attributes[$_set]("class", "language-" + dart.str(infoString));
      }
      let element = new ast.Element.new("pre", JSArrayOfNode().of([code]));
      return element;
    }
  };
  (block_parser.FencedCodeBlockSyntax.new = function() {
    block_parser.FencedCodeBlockSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.FencedCodeBlockSyntax.prototype;
  dart.addTypeTests(block_parser.FencedCodeBlockSyntax);
  dart.setMethodSignature(block_parser.FencedCodeBlockSyntax, () => ({
    __proto__: dart.getMethods(block_parser.FencedCodeBlockSyntax.__proto__),
    parseChildLines: dart.fnType(core.List$(core.String), [block_parser.BlockParser], [core.String]),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.FencedCodeBlockSyntax, "package:markdown/src/block_parser.dart");
  block_parser.HorizontalRuleSyntax = class HorizontalRuleSyntax extends block_parser.BlockSyntax {
    get pattern() {
      return block_parser._hrPattern;
    }
    parse(parser) {
      parser.advance();
      return new ast.Element.empty("hr");
    }
  };
  (block_parser.HorizontalRuleSyntax.new = function() {
    block_parser.HorizontalRuleSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.HorizontalRuleSyntax.prototype;
  dart.addTypeTests(block_parser.HorizontalRuleSyntax);
  dart.setMethodSignature(block_parser.HorizontalRuleSyntax, () => ({
    __proto__: dart.getMethods(block_parser.HorizontalRuleSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.HorizontalRuleSyntax, "package:markdown/src/block_parser.dart");
  block_parser.BlockHtmlSyntax = class BlockHtmlSyntax extends block_parser.BlockSyntax {
    get canEndBlock() {
      return true;
    }
  };
  (block_parser.BlockHtmlSyntax.new = function() {
    block_parser.BlockHtmlSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.BlockHtmlSyntax.prototype;
  dart.addTypeTests(block_parser.BlockHtmlSyntax);
  dart.setLibraryUri(block_parser.BlockHtmlSyntax, "package:markdown/src/block_parser.dart");
  block_parser.BlockTagBlockHtmlSyntax = class BlockTagBlockHtmlSyntax extends block_parser.BlockHtmlSyntax {
    get pattern() {
      return block_parser.BlockTagBlockHtmlSyntax._pattern;
    }
    parse(parser) {
      let childLines = JSArrayOfString().of([]);
      while (!dart.test(parser.isDone) && !dart.test(parser.matches(block_parser._emptyPattern))) {
        childLines[$add](parser.current);
        parser.advance();
      }
      return new ast.Text.new(childLines[$join]("\n"));
    }
  };
  (block_parser.BlockTagBlockHtmlSyntax.new = function() {
    block_parser.BlockTagBlockHtmlSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.BlockTagBlockHtmlSyntax.prototype;
  dart.addTypeTests(block_parser.BlockTagBlockHtmlSyntax);
  dart.setMethodSignature(block_parser.BlockTagBlockHtmlSyntax, () => ({
    __proto__: dart.getMethods(block_parser.BlockTagBlockHtmlSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.BlockTagBlockHtmlSyntax, "package:markdown/src/block_parser.dart");
  dart.defineLazy(block_parser.BlockTagBlockHtmlSyntax, {
    /*block_parser.BlockTagBlockHtmlSyntax._pattern*/get _pattern() {
      return core.RegExp.new("^ {0,3}</?(?:address|article|aside|base|basefont|blockquote|body|" + "caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|" + "figcaption|figure|footer|form|frame|frameset|h1|head|header|hr|html|" + "iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|" + "option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|" + "title|tr|track|ul)" + "(?:\\s|>|/>|$)");
    }
  });
  block_parser.OtherTagBlockHtmlSyntax = class OtherTagBlockHtmlSyntax extends block_parser.BlockTagBlockHtmlSyntax {
    get canEndBlock() {
      return false;
    }
    get pattern() {
      return core.RegExp.new("^ {0,3}</?\\w+(?:>|\\s+[^>]*>)\\s*$");
    }
  };
  (block_parser.OtherTagBlockHtmlSyntax.new = function() {
    block_parser.OtherTagBlockHtmlSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.OtherTagBlockHtmlSyntax.prototype;
  dart.addTypeTests(block_parser.OtherTagBlockHtmlSyntax);
  dart.setLibraryUri(block_parser.OtherTagBlockHtmlSyntax, "package:markdown/src/block_parser.dart");
  const _endPattern = dart.privateName(block_parser, "_endPattern");
  block_parser.LongBlockHtmlSyntax = class LongBlockHtmlSyntax extends block_parser.BlockHtmlSyntax {
    get pattern() {
      return this[pattern$];
    }
    set pattern(value) {
      super.pattern = value;
    }
    parse(parser) {
      let childLines = JSArrayOfString().of([]);
      while (!dart.test(parser.isDone)) {
        childLines[$add](parser.current);
        if (dart.test(parser.matches(this[_endPattern]))) break;
        parser.advance();
      }
      parser.advance();
      return new ast.Text.new(childLines[$join]("\n"));
    }
  };
  (block_parser.LongBlockHtmlSyntax.new = function(pattern, endPattern) {
    this[pattern$] = core.RegExp.new(pattern);
    this[_endPattern] = core.RegExp.new(endPattern);
    block_parser.LongBlockHtmlSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.LongBlockHtmlSyntax.prototype;
  dart.addTypeTests(block_parser.LongBlockHtmlSyntax);
  const pattern$ = Symbol("LongBlockHtmlSyntax.pattern");
  dart.setMethodSignature(block_parser.LongBlockHtmlSyntax, () => ({
    __proto__: dart.getMethods(block_parser.LongBlockHtmlSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser])
  }));
  dart.setLibraryUri(block_parser.LongBlockHtmlSyntax, "package:markdown/src/block_parser.dart");
  dart.setFieldSignature(block_parser.LongBlockHtmlSyntax, () => ({
    __proto__: dart.getFields(block_parser.LongBlockHtmlSyntax.__proto__),
    pattern: dart.finalFieldType(core.RegExp),
    [_endPattern]: dart.finalFieldType(core.RegExp)
  }));
  block_parser.ListItem = class ListItem extends core.Object {
    get forceBlock() {
      return this[forceBlock];
    }
    set forceBlock(value) {
      this[forceBlock] = value;
    }
    get lines() {
      return this[lines$0];
    }
    set lines(value) {
      super.lines = value;
    }
  };
  (block_parser.ListItem.new = function(lines) {
    this[forceBlock] = false;
    this[lines$0] = lines;
    ;
  }).prototype = block_parser.ListItem.prototype;
  dart.addTypeTests(block_parser.ListItem);
  const forceBlock = Symbol("ListItem.forceBlock");
  const lines$0 = Symbol("ListItem.lines");
  dart.setLibraryUri(block_parser.ListItem, "package:markdown/src/block_parser.dart");
  dart.setFieldSignature(block_parser.ListItem, () => ({
    __proto__: dart.getFields(block_parser.ListItem.__proto__),
    forceBlock: dart.fieldType(core.bool),
    lines: dart.finalFieldType(core.List$(core.String))
  }));
  block_parser.ListSyntax = class ListSyntax extends block_parser.BlockSyntax {
    get canEndBlock() {
      return true;
    }
    parse(parser) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let items = JSArrayOfListItem().of([]);
      let childLines = JSArrayOfString().of([]);
      function endItem() {
        if (dart.test(childLines[$isNotEmpty])) {
          items[$add](new block_parser.ListItem.new(childLines));
          childLines = JSArrayOfString().of([]);
        }
      }
      dart.fn(endItem, VoidTovoid());
      let match = null;
      function tryMatch(pattern) {
        match = pattern.firstMatch(parser.current);
        return match != null;
      }
      dart.fn(tryMatch, RegExpTobool());
      let listMarker = null;
      let indent = null;
      let startNumber = null;
      while (!dart.test(parser.isDone)) {
        let leadingSpace = block_parser.ListSyntax._whitespaceRe[$matchAsPrefix](parser.current).group(0);
        let leadingExpandedTabLength = block_parser.ListSyntax._expandedTabLength(leadingSpace);
        if (dart.test(tryMatch(block_parser._emptyPattern))) {
          if (block_parser._emptyPattern.firstMatch((t0 = parser.next, t0 == null ? "" : t0)) != null) {
            break;
          }
          childLines[$add]("");
        } else if (indent != null && indent.length <= dart.notNull(leadingExpandedTabLength)) {
          let line = parser.current[$replaceFirst](leadingSpace, " "[$times](leadingExpandedTabLength))[$replaceFirst](indent, "");
          childLines[$add](line);
        } else if (dart.test(tryMatch(block_parser._hrPattern))) {
          break;
        } else if (dart.test(tryMatch(block_parser._ulPattern)) || dart.test(tryMatch(block_parser._olPattern))) {
          let precedingWhitespace = match._get(1);
          let digits = (t0$ = match._get(2), t0$ == null ? "" : t0$);
          if (startNumber == null && digits[$isNotEmpty]) {
            startNumber = core.int.parse(digits);
          }
          let marker = match._get(3);
          let firstWhitespace = (t0$0 = match._get(5), t0$0 == null ? "" : t0$0);
          let restWhitespace = (t0$1 = match._get(6), t0$1 == null ? "" : t0$1);
          let content = (t0$2 = match._get(7), t0$2 == null ? "" : t0$2);
          let isBlank = content[$isEmpty];
          if (listMarker != null && listMarker != marker) {
            break;
          }
          listMarker = marker;
          let markerAsSpaces = " "[$times](digits.length + marker.length);
          if (isBlank) {
            indent = dart.notNull(precedingWhitespace) + markerAsSpaces + " ";
          } else if (restWhitespace.length >= 4) {
            indent = dart.notNull(precedingWhitespace) + markerAsSpaces + dart.notNull(firstWhitespace);
          } else {
            indent = dart.notNull(precedingWhitespace) + markerAsSpaces + dart.notNull(firstWhitespace) + dart.notNull(restWhitespace);
          }
          endItem();
          childLines[$add](dart.notNull(restWhitespace) + dart.notNull(content));
        } else if (dart.test(block_parser.BlockSyntax.isAtBlockEnd(parser))) {
          break;
        } else {
          if (dart.test(childLines[$isNotEmpty]) && childLines[$last] === "") {
            parser.encounteredBlankLine = true;
            break;
          }
          childLines[$add](parser.current);
        }
        parser.advance();
      }
      endItem();
      let itemNodes = JSArrayOfElement().of([]);
      items[$forEach](dart.bind(this, 'removeLeadingEmptyLine'));
      let anyEmptyLines = this.removeTrailingEmptyLines(items);
      let anyEmptyLinesBetweenBlocks = false;
      for (let item of items) {
        let itemParser = new block_parser.BlockParser.new(item.lines, parser.document);
        let children = itemParser.parseLines();
        itemNodes[$add](new ast.Element.new("li", children));
        anyEmptyLinesBetweenBlocks = anyEmptyLinesBetweenBlocks || dart.test(itemParser.encounteredBlankLine);
      }
      let listIsTight = !dart.test(anyEmptyLines) && !anyEmptyLinesBetweenBlocks;
      if (listIsTight) {
        for (let item of itemNodes) {
          for (let i = 0; i < dart.notNull(item.children[$length]); i = i + 1) {
            let child = item.children[$_get](i);
            if (ast.Element.is(child) && child.tag === "p") {
              item.children[$removeAt](i);
              item.children[$insertAll](i, child.children);
            }
          }
        }
      }
      if (this.listTag === "ol" && startNumber !== 1) {
        t0$3 = new ast.Element.new(this.listTag, itemNodes);
        t0$3.attributes[$_set]("start", dart.str(startNumber));
        return t0$3;
      } else {
        return new ast.Element.new(this.listTag, itemNodes);
      }
    }
    removeLeadingEmptyLine(item) {
      if (dart.test(item.lines[$isNotEmpty]) && dart.test(block_parser._emptyPattern.hasMatch(item.lines[$first]))) {
        item.lines[$removeAt](0);
      }
    }
    removeTrailingEmptyLines(items) {
      let anyEmpty = false;
      for (let i = 0; i < dart.notNull(items[$length]); i = i + 1) {
        if (items[$_get](i).lines[$length] === 1) continue;
        while (dart.test(items[$_get](i).lines[$isNotEmpty]) && dart.test(block_parser._emptyPattern.hasMatch(items[$_get](i).lines[$last]))) {
          if (i < dart.notNull(items[$length]) - 1) {
            anyEmpty = true;
          }
          items[$_get](i).lines[$removeLast]();
        }
      }
      return anyEmpty;
    }
    static _expandedTabLength(input) {
      let length = 0;
      for (let char of input[$codeUnits]) {
        length = length + (char === 9 ? 4 - length[$modulo](4) : 1);
      }
      return length;
    }
  };
  (block_parser.ListSyntax.new = function() {
    block_parser.ListSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.ListSyntax.prototype;
  dart.addTypeTests(block_parser.ListSyntax);
  dart.setMethodSignature(block_parser.ListSyntax, () => ({
    __proto__: dart.getMethods(block_parser.ListSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser]),
    removeLeadingEmptyLine: dart.fnType(dart.void, [block_parser.ListItem]),
    removeTrailingEmptyLines: dart.fnType(core.bool, [core.List$(block_parser.ListItem)])
  }));
  dart.setLibraryUri(block_parser.ListSyntax, "package:markdown/src/block_parser.dart");
  dart.defineLazy(block_parser.ListSyntax, {
    /*block_parser.ListSyntax.blocksInList*/get blocksInList() {
      return JSArrayOfRegExp().of([block_parser._blockquotePattern, block_parser._headerPattern, block_parser._hrPattern, block_parser._indentPattern, block_parser._ulPattern, block_parser._olPattern]);
    },
    /*block_parser.ListSyntax._whitespaceRe*/get _whitespaceRe() {
      return core.RegExp.new("[ \t]*");
    }
  });
  block_parser.UnorderedListSyntax = class UnorderedListSyntax extends block_parser.ListSyntax {
    get pattern() {
      return block_parser._ulPattern;
    }
    get listTag() {
      return "ul";
    }
  };
  (block_parser.UnorderedListSyntax.new = function() {
    block_parser.UnorderedListSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.UnorderedListSyntax.prototype;
  dart.addTypeTests(block_parser.UnorderedListSyntax);
  dart.setGetterSignature(block_parser.UnorderedListSyntax, () => ({
    __proto__: dart.getGetters(block_parser.UnorderedListSyntax.__proto__),
    listTag: core.String
  }));
  dart.setLibraryUri(block_parser.UnorderedListSyntax, "package:markdown/src/block_parser.dart");
  block_parser.OrderedListSyntax = class OrderedListSyntax extends block_parser.ListSyntax {
    get pattern() {
      return block_parser._olPattern;
    }
    get listTag() {
      return "ol";
    }
  };
  (block_parser.OrderedListSyntax.new = function() {
    block_parser.OrderedListSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.OrderedListSyntax.prototype;
  dart.addTypeTests(block_parser.OrderedListSyntax);
  dart.setGetterSignature(block_parser.OrderedListSyntax, () => ({
    __proto__: dart.getGetters(block_parser.OrderedListSyntax.__proto__),
    listTag: core.String
  }));
  dart.setLibraryUri(block_parser.OrderedListSyntax, "package:markdown/src/block_parser.dart");
  block_parser.TableSyntax = class TableSyntax extends block_parser.BlockSyntax {
    get canEndBlock() {
      return false;
    }
    canParse(parser) {
      return parser.matchesNext(block_parser._tablePattern);
    }
    parse(parser) {
      let alignments = this.parseAlignments(parser.next);
      let columnCount = alignments[$length];
      let headRow = this.parseRow(parser, alignments, "th");
      if (headRow.children[$length] != columnCount) {
        return null;
      }
      let head = new ast.Element.new("thead", JSArrayOfNode().of([headRow]));
      parser.advance();
      let rows = JSArrayOfElement().of([]);
      while (!dart.test(parser.isDone) && !dart.test(block_parser.BlockSyntax.isAtBlockEnd(parser))) {
        let row = this.parseRow(parser, alignments, "td");
        while (dart.notNull(row.children[$length]) < dart.notNull(columnCount)) {
          row.children[$add](new ast.Element.empty("td"));
        }
        while (dart.notNull(row.children[$length]) > dart.notNull(columnCount)) {
          row.children[$removeLast]();
        }
        rows[$add](row);
      }
      if (dart.test(rows[$isEmpty])) {
        return new ast.Element.new("table", JSArrayOfNode().of([head]));
      } else {
        let body = new ast.Element.new("tbody", rows);
        return new ast.Element.new("table", JSArrayOfNode().of([head, body]));
      }
    }
    parseAlignments(line) {
      line = line[$replaceFirst](block_parser.TableSyntax._openingPipe, "")[$replaceFirst](block_parser.TableSyntax._closingPipe, "");
      return line[$split]("|")[$map](core.String, dart.fn(column => {
        column = column[$trim]();
        if (column[$startsWith](":") && column[$endsWith](":")) return "center";
        if (column[$startsWith](":")) return "left";
        if (column[$endsWith](":")) return "right";
        return null;
      }, StringToString()))[$toList]();
    }
    parseRow(parser, alignments, cellType) {
      let line = parser.current[$replaceFirst](block_parser.TableSyntax._openingPipe, "")[$replaceFirst](block_parser.TableSyntax._closingPipe, "");
      let cells = line[$split](block_parser.TableSyntax._pipePattern);
      parser.advance();
      let row = JSArrayOfElement().of([]);
      let preCell = null;
      for (let cell of cells) {
        if (preCell != null) {
          cell = dart.notNull(preCell) + dart.notNull(cell);
          preCell = null;
        }
        if (cell[$endsWith]("\\")) {
          preCell = cell[$substring](0, cell.length - 1) + "|";
          continue;
        }
        let contents = new ast.UnparsedContent.new(cell);
        row[$add](new ast.Element.new(cellType, JSArrayOfNode().of([contents])));
      }
      for (let i = 0; i < dart.notNull(row[$length]) && i < dart.notNull(alignments[$length]); i = i + 1) {
        if (alignments[$_get](i) == null) continue;
        row[$_get](i).attributes[$_set]("style", "text-align: " + dart.str(alignments[$_get](i)) + ";");
      }
      return new ast.Element.new("tr", row);
    }
  };
  (block_parser.TableSyntax.new = function() {
    block_parser.TableSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.TableSyntax.prototype;
  dart.addTypeTests(block_parser.TableSyntax);
  dart.setMethodSignature(block_parser.TableSyntax, () => ({
    __proto__: dart.getMethods(block_parser.TableSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser]),
    parseAlignments: dart.fnType(core.List$(core.String), [core.String]),
    parseRow: dart.fnType(ast.Element, [block_parser.BlockParser, core.List$(core.String), core.String])
  }));
  dart.setLibraryUri(block_parser.TableSyntax, "package:markdown/src/block_parser.dart");
  dart.defineLazy(block_parser.TableSyntax, {
    /*block_parser.TableSyntax._pipePattern*/get _pipePattern() {
      return core.RegExp.new("\\s*\\|\\s*");
    },
    /*block_parser.TableSyntax._openingPipe*/get _openingPipe() {
      return core.RegExp.new("^\\|\\s*");
    },
    /*block_parser.TableSyntax._closingPipe*/get _closingPipe() {
      return core.RegExp.new("\\s*\\|$");
    }
  });
  const _extractReflinkDefinitions = dart.privateName(block_parser, "_extractReflinkDefinitions");
  const _parseReflinkDefinition = dart.privateName(block_parser, "_parseReflinkDefinition");
  block_parser.ParagraphSyntax = class ParagraphSyntax extends block_parser.BlockSyntax {
    get canEndBlock() {
      return false;
    }
    canParse(parser) {
      return true;
    }
    parse(parser) {
      let childLines = JSArrayOfString().of([]);
      while (!dart.test(block_parser.BlockSyntax.isAtBlockEnd(parser))) {
        childLines[$add](parser.current);
        parser.advance();
      }
      let paragraphLines = this[_extractReflinkDefinitions](parser, childLines);
      if (paragraphLines == null) {
        return new ast.Text.new("");
      } else {
        let contents = new ast.UnparsedContent.new(paragraphLines[$join]("\n"));
        return new ast.Element.new("p", JSArrayOfNode().of([contents]));
      }
    }
    [_extractReflinkDefinitions](parser, lines) {
      function lineStartsReflinkDefinition(i) {
        return lines[$_get](i)[$startsWith](block_parser.ParagraphSyntax._reflinkDefinitionStart);
      }
      dart.fn(lineStartsReflinkDefinition, intTobool());
      let i = 0;
      L0:
        while (true) {
          if (!dart.test(lineStartsReflinkDefinition(i))) {
            break;
          }
          let contents = lines[$_get](i);
          let j = i + 1;
          while (j < dart.notNull(lines[$length])) {
            if (dart.test(lineStartsReflinkDefinition(j))) {
              if (dart.test(this[_parseReflinkDefinition](parser, contents))) {
                i = j;
                continue L0;
              } else {
                break;
              }
            } else {
              contents = dart.notNull(contents) + "\n" + dart.notNull(lines[$_get](j));
              j = j + 1;
            }
          }
          if (dart.test(this[_parseReflinkDefinition](parser, contents))) {
            i = j;
            break;
          }
          while (j >= i) {
            contents = lines[$getRange](i, j)[$join]("\n");
            if (dart.test(this[_parseReflinkDefinition](parser, contents))) {
              i = j;
              break;
            }
            j = j - 1;
          }
          break;
        }
      if (i === lines[$length]) {
        return null;
      } else {
        return lines[$sublist](i);
      }
    }
    [_parseReflinkDefinition](parser, contents) {
      let t0;
      let pattern = core.RegExp.new("^[ ]{0,3}" + "\\[((?:\\\\\\]|[^\\]])+)\\]:\\s*(?:<(\\S+)>|(\\S+))\\s*" + "(\"[^\"]+\"|'[^']+'|\\([^)]+\\)|)\\s*$", {multiLine: true});
      let match = pattern.firstMatch(contents);
      if (match == null) {
        return false;
      }
      if (match._get(0).length < contents.length) {
        return false;
      }
      let label = match._get(1);
      let destination = (t0 = match._get(2), t0 == null ? match._get(3) : t0);
      let title = match._get(4);
      if (dart.test(block_parser.ParagraphSyntax._whitespacePattern.hasMatch(label))) {
        return false;
      }
      if (title === "") {
        title = null;
      } else {
        title = title[$substring](1, title.length - 1);
      }
      label = label[$toLowerCase]()[$trim]()[$replaceAll](block_parser._oneOrMoreWhitespacePattern, " ");
      parser.document.linkReferences[$putIfAbsent](label, dart.fn(() => new document$.LinkReference.new(label, destination, title), VoidToLinkReference()));
      return true;
    }
  };
  (block_parser.ParagraphSyntax.new = function() {
    block_parser.ParagraphSyntax.__proto__.new.call(this);
    ;
  }).prototype = block_parser.ParagraphSyntax.prototype;
  dart.addTypeTests(block_parser.ParagraphSyntax);
  dart.setMethodSignature(block_parser.ParagraphSyntax, () => ({
    __proto__: dart.getMethods(block_parser.ParagraphSyntax.__proto__),
    parse: dart.fnType(ast.Node, [block_parser.BlockParser]),
    [_extractReflinkDefinitions]: dart.fnType(core.List$(core.String), [block_parser.BlockParser, core.List$(core.String)]),
    [_parseReflinkDefinition]: dart.fnType(core.bool, [block_parser.BlockParser, core.String])
  }));
  dart.setLibraryUri(block_parser.ParagraphSyntax, "package:markdown/src/block_parser.dart");
  dart.defineLazy(block_parser.ParagraphSyntax, {
    /*block_parser.ParagraphSyntax._reflinkDefinitionStart*/get _reflinkDefinitionStart() {
      return core.RegExp.new("[ ]{0,3}\\[");
    },
    /*block_parser.ParagraphSyntax._whitespacePattern*/get _whitespacePattern() {
      return core.RegExp.new("^\\s*$");
    }
  });
  dart.defineLazy(block_parser, {
    /*block_parser._emptyPattern*/get _emptyPattern() {
      return core.RegExp.new("^(?:[ \\t]*)$");
    },
    /*block_parser._setextPattern*/get _setextPattern() {
      return core.RegExp.new("^[ ]{0,3}(=+|-+)\\s*$");
    },
    /*block_parser._headerPattern*/get _headerPattern() {
      return core.RegExp.new("^ {0,3}(#{1,6})[ \\x09\\x0b\\x0c](.*?)#*$");
    },
    /*block_parser._blockquotePattern*/get _blockquotePattern() {
      return core.RegExp.new("^[ ]{0,3}>[ ]?(.*)$");
    },
    /*block_parser._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^(?:    | {0,3}\\t)(.*)$");
    },
    /*block_parser._codeFencePattern*/get _codeFencePattern() {
      return core.RegExp.new("^[ ]{0,3}(`{3,}|~{3,})(.*)$");
    },
    /*block_parser._hrPattern*/get _hrPattern() {
      return core.RegExp.new("^ {0,3}([-*_])[ \\t]*\\1[ \\t]*\\1(?:\\1|[ \\t])*$");
    },
    /*block_parser._oneOrMoreWhitespacePattern*/get _oneOrMoreWhitespacePattern() {
      return core.RegExp.new("[ \n\r\t]+");
    },
    /*block_parser._ulPattern*/get _ulPattern() {
      return core.RegExp.new("^([ ]{0,3})()([*+-])(([ \\t])([ \\t]*)(.*))?$");
    },
    /*block_parser._olPattern*/get _olPattern() {
      return core.RegExp.new("^([ ]{0,3})(\\d{1,9})([\\.)])(([ \\t])([ \\t]*)(.*))?$");
    },
    /*block_parser._tablePattern*/get _tablePattern() {
      return core.RegExp.new("^[ ]{0,3}\\|?( *:?\\-+:? *\\|)+( *:?\\-+:? *)?$");
    }
  });
  const _stack = dart.privateName(inline_parser, "_stack");
  inline_parser.InlineParser = class InlineParser extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get document() {
      return this[document$1];
    }
    set document(value) {
      super.document = value;
    }
    get syntaxes() {
      return this[syntaxes];
    }
    set syntaxes(value) {
      super.syntaxes = value;
    }
    get pos() {
      return this[pos];
    }
    set pos(value) {
      this[pos] = value;
    }
    get start() {
      return this[start];
    }
    set start(value) {
      this[start] = value;
    }
    parse() {
      this[_stack][$add](new inline_parser.TagState.new(0, 0, null, null));
      while (!dart.test(this.isDone)) {
        if (dart.test(this[_stack][$reversed][$any](dart.fn(state => state.syntax != null && dart.test(state.tryMatch(this)), TagStateTobool())))) {
          continue;
        }
        if (dart.test(this.syntaxes[$any](dart.fn(syntax => syntax.tryMatch(this), InlineSyntaxTobool())))) continue;
        this.advanceBy(1);
      }
      return this[_stack][$_get](0).close(this, null);
    }
    charAt(index) {
      return this.source[$codeUnitAt](index);
    }
    writeText() {
      this.writeTextRange(this.start, this.pos);
      this.start = this.pos;
    }
    writeTextRange(start, end) {
      if (dart.notNull(end) <= dart.notNull(start)) return;
      let text = this.source[$substring](start, end);
      let nodes = this[_stack][$last].children;
      if (dart.test(nodes[$isNotEmpty]) && ast.Text.is(nodes[$last])) {
        let textNode = ast.Text.as(nodes[$last]);
        nodes[$_set](dart.notNull(nodes[$length]) - 1, new ast.Text.new(dart.str(textNode.text) + text));
      } else {
        nodes[$add](new ast.Text.new(text));
      }
    }
    addNode(node) {
      this[_stack][$last].children[$add](node);
    }
    openTag(state) {
      return this[_stack][$add](state);
    }
    get isDone() {
      return this.pos === this.source.length;
    }
    advanceBy(length) {
      this.pos = dart.notNull(this.pos) + dart.notNull(length);
    }
    consume(length) {
      this.pos = dart.notNull(this.pos) + dart.notNull(length);
      this.start = this.pos;
    }
  };
  (inline_parser.InlineParser.new = function(source, document) {
    this[syntaxes] = JSArrayOfInlineSyntax().of([]);
    this[pos] = 0;
    this[start] = 0;
    this[source$] = source;
    this[document$1] = document;
    this[_stack] = JSArrayOfTagState().of([]);
    this.syntaxes[$addAll](this.document.inlineSyntaxes);
    let documentHasCustomInlineSyntaxes = this.document.inlineSyntaxes[$any](dart.fn(s => !dart.test(this.document.extensionSet.inlineSyntaxes[$contains](s)), InlineSyntaxTobool()));
    if (dart.test(documentHasCustomInlineSyntaxes)) {
      this.syntaxes[$add](new inline_parser.TextSyntax.new("[A-Za-z0-9]+(?=\\s)"));
    } else {
      this.syntaxes[$add](new inline_parser.TextSyntax.new("[ \\tA-Za-z0-9]*[A-Za-z0-9](?=\\s)"));
    }
    this.syntaxes[$addAll](inline_parser.InlineParser._defaultSyntaxes);
    if (dart.test(this.document.encodeHtml)) {
      this.syntaxes[$addAll](inline_parser.InlineParser._htmlSyntaxes);
    }
    this.syntaxes[$insertAll](1, JSArrayOfInlineSyntax().of([new inline_parser.LinkSyntax.new({linkResolver: this.document.linkResolver}), new inline_parser.ImageSyntax.new({linkResolver: this.document.imageLinkResolver})]));
  }).prototype = inline_parser.InlineParser.prototype;
  dart.addTypeTests(inline_parser.InlineParser);
  const source$ = Symbol("InlineParser.source");
  const document$1 = Symbol("InlineParser.document");
  const syntaxes = Symbol("InlineParser.syntaxes");
  const pos = Symbol("InlineParser.pos");
  const start = Symbol("InlineParser.start");
  dart.setMethodSignature(inline_parser.InlineParser, () => ({
    __proto__: dart.getMethods(inline_parser.InlineParser.__proto__),
    parse: dart.fnType(core.List$(ast.Node), []),
    charAt: dart.fnType(core.int, [core.int]),
    writeText: dart.fnType(dart.void, []),
    writeTextRange: dart.fnType(dart.void, [core.int, core.int]),
    addNode: dart.fnType(dart.void, [ast.Node]),
    openTag: dart.fnType(dart.void, [inline_parser.TagState]),
    advanceBy: dart.fnType(dart.void, [core.int]),
    consume: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(inline_parser.InlineParser, () => ({
    __proto__: dart.getGetters(inline_parser.InlineParser.__proto__),
    isDone: core.bool
  }));
  dart.setLibraryUri(inline_parser.InlineParser, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.InlineParser, () => ({
    __proto__: dart.getFields(inline_parser.InlineParser.__proto__),
    source: dart.finalFieldType(core.String),
    document: dart.finalFieldType(document$.Document),
    syntaxes: dart.finalFieldType(core.List$(inline_parser.InlineSyntax)),
    pos: dart.fieldType(core.int),
    start: dart.fieldType(core.int),
    [_stack]: dart.finalFieldType(core.List$(inline_parser.TagState))
  }));
  dart.defineLazy(inline_parser.InlineParser, {
    /*inline_parser.InlineParser._defaultSyntaxes*/get _defaultSyntaxes() {
      return ListOfInlineSyntax().unmodifiable(JSArrayOfInlineSyntax().of([new inline_parser.EmailAutolinkSyntax.new(), new inline_parser.AutolinkSyntax.new(), new inline_parser.LineBreakSyntax.new(), new inline_parser.LinkSyntax.new(), new inline_parser.ImageSyntax.new(), new inline_parser.EscapeSyntax.new(), new inline_parser.TextSyntax.new(" \\* "), new inline_parser.TextSyntax.new(" _ "), new inline_parser.TagSyntax.new("\\*+", {requiresDelimiterRun: true}), new inline_parser.TagSyntax.new("_+", {requiresDelimiterRun: true}), new inline_parser.CodeSyntax.new()]));
    },
    /*inline_parser.InlineParser._htmlSyntaxes*/get _htmlSyntaxes() {
      return ListOfInlineSyntax().unmodifiable(JSArrayOfInlineSyntax().of([new inline_parser.TextSyntax.new("&[#a-zA-Z0-9]*;"), new inline_parser.TextSyntax.new("&", {sub: "&amp;"}), new inline_parser.TextSyntax.new("<", {sub: "&lt;"}), new inline_parser.TextSyntax.new(">", {sub: "&gt;"})]));
    }
  });
  inline_parser.InlineSyntax = class InlineSyntax extends core.Object {
    get pattern() {
      return this[pattern$0];
    }
    set pattern(value) {
      super.pattern = value;
    }
    tryMatch(parser, startMatchPos) {
      if (startMatchPos === void 0) startMatchPos = null;
      if (startMatchPos == null) startMatchPos = parser.pos;
      let startMatch = this.pattern[$matchAsPrefix](parser.source, startMatchPos);
      if (startMatch == null) return false;
      parser.writeText();
      if (dart.test(this.onMatch(parser, startMatch))) parser.consume(startMatch._get(0).length);
      return true;
    }
  };
  (inline_parser.InlineSyntax.new = function(pattern) {
    this[pattern$0] = core.RegExp.new(pattern, {multiLine: true});
    ;
  }).prototype = inline_parser.InlineSyntax.prototype;
  dart.addTypeTests(inline_parser.InlineSyntax);
  const pattern$0 = Symbol("InlineSyntax.pattern");
  dart.setMethodSignature(inline_parser.InlineSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.InlineSyntax.__proto__),
    tryMatch: dart.fnType(core.bool, [inline_parser.InlineParser], [core.int])
  }));
  dart.setLibraryUri(inline_parser.InlineSyntax, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.InlineSyntax, () => ({
    __proto__: dart.getFields(inline_parser.InlineSyntax.__proto__),
    pattern: dart.finalFieldType(core.RegExp)
  }));
  inline_parser.LineBreakSyntax = class LineBreakSyntax extends inline_parser.InlineSyntax {
    onMatch(parser, match) {
      parser.addNode(new ast.Element.empty("br"));
      return true;
    }
  };
  (inline_parser.LineBreakSyntax.new = function() {
    inline_parser.LineBreakSyntax.__proto__.new.call(this, "(?:\\\\|  +)\\n");
    ;
  }).prototype = inline_parser.LineBreakSyntax.prototype;
  dart.addTypeTests(inline_parser.LineBreakSyntax);
  dart.setMethodSignature(inline_parser.LineBreakSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.LineBreakSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.LineBreakSyntax, "package:markdown/src/inline_parser.dart");
  inline_parser.TextSyntax = class TextSyntax extends inline_parser.InlineSyntax {
    get substitute() {
      return this[substitute];
    }
    set substitute(value) {
      super.substitute = value;
    }
    onMatch(parser, match) {
      if (this.substitute == null || dart.notNull(match.start) > 0 && match.input[$substring](dart.notNull(match.start) - 1, match.start) === "/") {
        parser.advanceBy(match._get(0).length);
        return false;
      }
      parser.addNode(new ast.Text.new(this.substitute));
      return true;
    }
  };
  (inline_parser.TextSyntax.new = function(pattern, opts) {
    let sub = opts && 'sub' in opts ? opts.sub : null;
    this[substitute] = sub;
    inline_parser.TextSyntax.__proto__.new.call(this, pattern);
    ;
  }).prototype = inline_parser.TextSyntax.prototype;
  dart.addTypeTests(inline_parser.TextSyntax);
  const substitute = Symbol("TextSyntax.substitute");
  dart.setMethodSignature(inline_parser.TextSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.TextSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.TextSyntax, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.TextSyntax, () => ({
    __proto__: dart.getFields(inline_parser.TextSyntax.__proto__),
    substitute: dart.finalFieldType(core.String)
  }));
  inline_parser.EscapeSyntax = class EscapeSyntax extends inline_parser.InlineSyntax {
    onMatch(parser, match) {
      let char = match._get(0)[$codeUnitAt](1);
      if (char === 34) {
        parser.addNode(new ast.Text.new("&quot;"));
      } else if (char === 60) {
        parser.addNode(new ast.Text.new("&lt;"));
      } else if (char === 62) {
        parser.addNode(new ast.Text.new("&gt;"));
      } else {
        parser.addNode(new ast.Text.new(match._get(0)[$_get](1)));
      }
      return true;
    }
  };
  (inline_parser.EscapeSyntax.new = function() {
    inline_parser.EscapeSyntax.__proto__.new.call(this, "\\\\[!\"#$%&'()*+,\\-./:;<=>?@\\[\\\\\\]^_`{|}~]");
    ;
  }).prototype = inline_parser.EscapeSyntax.prototype;
  dart.addTypeTests(inline_parser.EscapeSyntax);
  dart.setMethodSignature(inline_parser.EscapeSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.EscapeSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.EscapeSyntax, "package:markdown/src/inline_parser.dart");
  inline_parser.InlineHtmlSyntax = class InlineHtmlSyntax extends inline_parser.TextSyntax {};
  (inline_parser.InlineHtmlSyntax.new = function() {
    inline_parser.InlineHtmlSyntax.__proto__.new.call(this, "<[/!?]?[A-Za-z][A-Za-z0-9-]*(?:\\s[^>]*)?>");
    ;
  }).prototype = inline_parser.InlineHtmlSyntax.prototype;
  dart.addTypeTests(inline_parser.InlineHtmlSyntax);
  dart.setLibraryUri(inline_parser.InlineHtmlSyntax, "package:markdown/src/inline_parser.dart");
  inline_parser.EmailAutolinkSyntax = class EmailAutolinkSyntax extends inline_parser.InlineSyntax {
    onMatch(parser, match) {
      let url = match._get(1);
      let anchor = new ast.Element.text("a", util.escapeHtml(url));
      anchor.attributes[$_set]("href", core.Uri.encodeFull("mailto:" + dart.str(url)));
      parser.addNode(anchor);
      return true;
    }
  };
  (inline_parser.EmailAutolinkSyntax.new = function() {
    inline_parser.EmailAutolinkSyntax.__proto__.new.call(this, "<(" + dart.str(inline_parser.EmailAutolinkSyntax._email) + ")>");
    ;
  }).prototype = inline_parser.EmailAutolinkSyntax.prototype;
  dart.addTypeTests(inline_parser.EmailAutolinkSyntax);
  dart.setMethodSignature(inline_parser.EmailAutolinkSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.EmailAutolinkSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.EmailAutolinkSyntax, "package:markdown/src/inline_parser.dart");
  dart.defineLazy(inline_parser.EmailAutolinkSyntax, {
    /*inline_parser.EmailAutolinkSyntax._email*/get _email() {
      return "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}" + "[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*";
    }
  });
  inline_parser.AutolinkSyntax = class AutolinkSyntax extends inline_parser.InlineSyntax {
    onMatch(parser, match) {
      let url = match._get(1);
      let anchor = new ast.Element.text("a", util.escapeHtml(url));
      anchor.attributes[$_set]("href", core.Uri.encodeFull(url));
      parser.addNode(anchor);
      return true;
    }
  };
  (inline_parser.AutolinkSyntax.new = function() {
    inline_parser.AutolinkSyntax.__proto__.new.call(this, "<(([a-zA-Z][a-zA-Z\\-\\+\\.]+):(?://)?[^\\s>]*)>");
    ;
  }).prototype = inline_parser.AutolinkSyntax.prototype;
  dart.addTypeTests(inline_parser.AutolinkSyntax);
  dart.setMethodSignature(inline_parser.AutolinkSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.AutolinkSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.AutolinkSyntax, "package:markdown/src/inline_parser.dart");
  const _countChars = dart.privateName(inline_parser, "_countChars");
  inline_parser.AutolinkExtensionSyntax = class AutolinkExtensionSyntax extends inline_parser.InlineSyntax {
    tryMatch(parser, startMatchPos) {
      if (startMatchPos === void 0) startMatchPos = null;
      return super.tryMatch(parser, dart.notNull(parser.pos) > 0 ? dart.notNull(parser.pos) - 1 : 0);
    }
    onMatch(parser, match) {
      let t0;
      let url = match._get(1);
      let href = url;
      let matchLength = url.length;
      if (url[$_get](0) === ">" || url[$startsWith](inline_parser.AutolinkExtensionSyntax.regExpWhiteSpace)) {
        url = url[$substring](1, url.length - 1);
        href = href[$substring](1, href.length - 1);
        t0 = parser;
        t0.pos = dart.notNull(t0.pos) + 1;
        matchLength = matchLength - 1;
      }
      if (url[$endsWith](">") && parser.source[$_get](dart.notNull(parser.pos) - 1) === "<") {
        return false;
      }
      if (url[$endsWith](")")) {
        let opening = this[_countChars](url, "(");
        let closing = this[_countChars](url, ")");
        if (dart.notNull(closing) > dart.notNull(opening)) {
          url = url[$substring](0, url.length - 1);
          href = href[$substring](0, href.length - 1);
          matchLength = matchLength - 1;
        }
      }
      let trailingPunc = inline_parser.AutolinkExtensionSyntax.regExpTrailingPunc.firstMatch(url);
      if (trailingPunc != null) {
        url = url[$substring](0, url.length - trailingPunc._get(0).length);
        href = href[$substring](0, href.length - trailingPunc._get(0).length);
        matchLength = matchLength - trailingPunc._get(0).length;
      }
      if (url[$endsWith](";")) {
        let entityRef = inline_parser.AutolinkExtensionSyntax.regExpEndsWithColon.firstMatch(url);
        if (entityRef != null) {
          url = url[$substring](0, url.length - entityRef._get(0).length);
          href = href[$substring](0, href.length - entityRef._get(0).length);
          matchLength = matchLength - entityRef._get(0).length;
        }
      }
      if (!href[$startsWith]("http://") && !href[$startsWith]("https://") && !href[$startsWith]("ftp://")) {
        href = "http://" + dart.str(href);
      }
      let anchor = new ast.Element.text("a", util.escapeHtml(url));
      anchor.attributes[$_set]("href", core.Uri.encodeFull(href));
      parser.addNode(anchor);
      parser.consume(matchLength);
      return false;
    }
    [_countChars](input, char) {
      let count = 0;
      for (let i = 0; i < input.length; i = i + 1) {
        if (input[$_get](i) === char) count = count + 1;
      }
      return count;
    }
  };
  (inline_parser.AutolinkExtensionSyntax.new = function() {
    inline_parser.AutolinkExtensionSyntax.__proto__.new.call(this, "(?:^|[\\s*_~(>])" + "((" + "(?:(?:https?|ftp):\\/\\/|www\\.)" + ")(" + "[\\w\\-][\\w\\-.]+" + ")(" + "[^\\s<]*" + "))");
    ;
  }).prototype = inline_parser.AutolinkExtensionSyntax.prototype;
  dart.addTypeTests(inline_parser.AutolinkExtensionSyntax);
  dart.setMethodSignature(inline_parser.AutolinkExtensionSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.AutolinkExtensionSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match]),
    [_countChars]: dart.fnType(core.int, [core.String, core.String])
  }));
  dart.setLibraryUri(inline_parser.AutolinkExtensionSyntax, "package:markdown/src/inline_parser.dart");
  dart.defineLazy(inline_parser.AutolinkExtensionSyntax, {
    /*inline_parser.AutolinkExtensionSyntax.start*/get start() {
      return "(?:^|[\\s*_~(>])";
    },
    /*inline_parser.AutolinkExtensionSyntax.scheme*/get scheme() {
      return "(?:(?:https?|ftp):\\/\\/|www\\.)";
    },
    /*inline_parser.AutolinkExtensionSyntax.domainPart*/get domainPart() {
      return "\\w\\-";
    },
    /*inline_parser.AutolinkExtensionSyntax.domain*/get domain() {
      return "[\\w\\-][\\w\\-.]+";
    },
    /*inline_parser.AutolinkExtensionSyntax.path*/get path() {
      return "[^\\s<]*";
    },
    /*inline_parser.AutolinkExtensionSyntax.truncatingPunctuationPositive*/get truncatingPunctuationPositive() {
      return "[?!.,:*_~]";
    },
    /*inline_parser.AutolinkExtensionSyntax.regExpTrailingPunc*/get regExpTrailingPunc() {
      return core.RegExp.new("[?!.,:*_~]" + "*" + "$");
    },
    /*inline_parser.AutolinkExtensionSyntax.regExpEndsWithColon*/get regExpEndsWithColon() {
      return core.RegExp.new("\\&[a-zA-Z0-9]+;$");
    },
    /*inline_parser.AutolinkExtensionSyntax.regExpWhiteSpace*/get regExpWhiteSpace() {
      return core.RegExp.new("\\s");
    }
  });
  inline_parser._DelimiterRun = class _DelimiterRun extends core.Object {
    static tryParse(parser, runStart, runEnd) {
      let leftFlanking = null;
      let rightFlanking = null;
      let precededByPunctuation = null;
      let followedByPunctuation = null;
      let preceding = null;
      let following = null;
      if (runStart === 0) {
        rightFlanking = false;
        preceding = "\n";
      } else {
        preceding = parser.source[$substring](dart.notNull(runStart) - 1, runStart);
      }
      precededByPunctuation = inline_parser._DelimiterRun.punctuation[$contains](preceding);
      if (runEnd === parser.source.length - 1) {
        leftFlanking = false;
        following = "\n";
      } else {
        following = parser.source[$substring](dart.notNull(runEnd) + 1, dart.notNull(runEnd) + 2);
      }
      followedByPunctuation = inline_parser._DelimiterRun.punctuation[$contains](following);
      if (inline_parser._DelimiterRun.whitespace[$contains](following)) {
        leftFlanking = false;
      } else {
        leftFlanking = !dart.test(followedByPunctuation) || inline_parser._DelimiterRun.whitespace[$contains](preceding) || dart.test(precededByPunctuation);
      }
      if (inline_parser._DelimiterRun.whitespace[$contains](preceding)) {
        rightFlanking = false;
      } else {
        rightFlanking = !dart.test(precededByPunctuation) || inline_parser._DelimiterRun.whitespace[$contains](following) || dart.test(followedByPunctuation);
      }
      if (!dart.test(leftFlanking) && !dart.test(rightFlanking)) {
        return null;
      }
      return new inline_parser._DelimiterRun.__({char: parser.charAt(runStart), length: dart.notNull(runEnd) - dart.notNull(runStart) + 1, isLeftFlanking: leftFlanking, isRightFlanking: rightFlanking, isPrecededByPunctuation: precededByPunctuation, isFollowedByPunctuation: followedByPunctuation});
    }
    toString() {
      return "<char: " + dart.str(this.char) + ", length: " + dart.str(this.length) + ", isLeftFlanking: " + dart.str(this.isLeftFlanking) + ", " + "isRightFlanking: " + dart.str(this.isRightFlanking) + ">";
    }
    get canOpen() {
      return dart.test(this.isLeftFlanking) && (this.char === 42 || !dart.test(this.isRightFlanking) || dart.test(this.isPrecededByPunctuation));
    }
    get canClose() {
      return dart.test(this.isRightFlanking) && (this.char === 42 || !dart.test(this.isLeftFlanking) || dart.test(this.isFollowedByPunctuation));
    }
  };
  (inline_parser._DelimiterRun.__ = function(opts) {
    let char = opts && 'char' in opts ? opts.char : null;
    let length = opts && 'length' in opts ? opts.length : null;
    let isLeftFlanking = opts && 'isLeftFlanking' in opts ? opts.isLeftFlanking : null;
    let isRightFlanking = opts && 'isRightFlanking' in opts ? opts.isRightFlanking : null;
    let isPrecededByPunctuation = opts && 'isPrecededByPunctuation' in opts ? opts.isPrecededByPunctuation : null;
    let isFollowedByPunctuation = opts && 'isFollowedByPunctuation' in opts ? opts.isFollowedByPunctuation : null;
    this.char = char;
    this.length = length;
    this.isLeftFlanking = isLeftFlanking;
    this.isRightFlanking = isRightFlanking;
    this.isPrecededByPunctuation = isPrecededByPunctuation;
    this.isFollowedByPunctuation = isFollowedByPunctuation;
    ;
  }).prototype = inline_parser._DelimiterRun.prototype;
  dart.addTypeTests(inline_parser._DelimiterRun);
  dart.setGetterSignature(inline_parser._DelimiterRun, () => ({
    __proto__: dart.getGetters(inline_parser._DelimiterRun.__proto__),
    canOpen: core.bool,
    canClose: core.bool
  }));
  dart.setLibraryUri(inline_parser._DelimiterRun, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser._DelimiterRun, () => ({
    __proto__: dart.getFields(inline_parser._DelimiterRun.__proto__),
    char: dart.finalFieldType(core.int),
    length: dart.finalFieldType(core.int),
    isLeftFlanking: dart.finalFieldType(core.bool),
    isRightFlanking: dart.finalFieldType(core.bool),
    isPrecededByPunctuation: dart.finalFieldType(core.bool),
    isFollowedByPunctuation: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(inline_parser._DelimiterRun, ['toString']);
  dart.defineLazy(inline_parser._DelimiterRun, {
    /*inline_parser._DelimiterRun.punctuation*/get punctuation() {
      return "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    },
    /*inline_parser._DelimiterRun.whitespace*/get whitespace() {
      return " \t\r\n";
    }
  });
  inline_parser.TagSyntax = class TagSyntax extends inline_parser.InlineSyntax {
    get endPattern() {
      return this[endPattern];
    }
    set endPattern(value) {
      super.endPattern = value;
    }
    get requiresDelimiterRun() {
      return this[requiresDelimiterRun$];
    }
    set requiresDelimiterRun(value) {
      super.requiresDelimiterRun = value;
    }
    onMatch(parser, match) {
      let runLength = match.group(0).length;
      let matchStart = parser.pos;
      let matchEnd = dart.notNull(parser.pos) + runLength - 1;
      if (!dart.test(this.requiresDelimiterRun)) {
        parser.openTag(new inline_parser.TagState.new(parser.pos, matchEnd + 1, this, null));
        return true;
      }
      let delimiterRun = inline_parser._DelimiterRun.tryParse(parser, matchStart, matchEnd);
      if (delimiterRun != null && dart.test(delimiterRun.canOpen)) {
        parser.openTag(new inline_parser.TagState.new(parser.pos, matchEnd + 1, this, delimiterRun));
        return true;
      } else {
        parser.advanceBy(runLength);
        return false;
      }
    }
    onMatchEnd(parser, match, state) {
      let runLength = match.group(0).length;
      let matchStart = parser.pos;
      let matchEnd = dart.notNull(parser.pos) + runLength - 1;
      let openingRunLength = dart.notNull(state.endPos) - dart.notNull(state.startPos);
      let delimiterRun = inline_parser._DelimiterRun.tryParse(parser, matchStart, matchEnd);
      if (openingRunLength === 1 && runLength === 1) {
        parser.addNode(new ast.Element.new("em", state.children));
      } else if (openingRunLength === 1 && runLength > 1) {
        parser.addNode(new ast.Element.new("em", state.children));
        parser.pos = dart.notNull(parser.pos) - (runLength - 1);
        parser.start = parser.pos;
      } else if (openingRunLength > 1 && runLength === 1) {
        parser.openTag(new inline_parser.TagState.new(state.startPos, dart.notNull(state.endPos) - 1, this, delimiterRun));
        parser.addNode(new ast.Element.new("em", state.children));
      } else if (openingRunLength === 2 && runLength === 2) {
        parser.addNode(new ast.Element.new("strong", state.children));
      } else if (openingRunLength === 2 && runLength > 2) {
        parser.addNode(new ast.Element.new("strong", state.children));
        parser.pos = dart.notNull(parser.pos) - (runLength - 2);
        parser.start = parser.pos;
      } else if (openingRunLength > 2 && runLength === 2) {
        parser.openTag(new inline_parser.TagState.new(state.startPos, dart.notNull(state.endPos) - 2, this, delimiterRun));
        parser.addNode(new ast.Element.new("strong", state.children));
      } else if (openingRunLength > 2 && runLength > 2) {
        parser.openTag(new inline_parser.TagState.new(state.startPos, dart.notNull(state.endPos) - 2, this, delimiterRun));
        parser.addNode(new ast.Element.new("strong", state.children));
        parser.pos = dart.notNull(parser.pos) - (runLength - 2);
        parser.start = parser.pos;
      }
      return true;
    }
  };
  (inline_parser.TagSyntax.new = function(pattern, opts) {
    let end = opts && 'end' in opts ? opts.end : null;
    let requiresDelimiterRun = opts && 'requiresDelimiterRun' in opts ? opts.requiresDelimiterRun : false;
    this[requiresDelimiterRun$] = requiresDelimiterRun;
    this[endPattern] = core.RegExp.new(end != null ? end : pattern, {multiLine: true});
    inline_parser.TagSyntax.__proto__.new.call(this, pattern);
    ;
  }).prototype = inline_parser.TagSyntax.prototype;
  dart.addTypeTests(inline_parser.TagSyntax);
  const endPattern = Symbol("TagSyntax.endPattern");
  const requiresDelimiterRun$ = Symbol("TagSyntax.requiresDelimiterRun");
  dart.setMethodSignature(inline_parser.TagSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.TagSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match]),
    onMatchEnd: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match, inline_parser.TagState])
  }));
  dart.setLibraryUri(inline_parser.TagSyntax, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.TagSyntax, () => ({
    __proto__: dart.getFields(inline_parser.TagSyntax.__proto__),
    endPattern: dart.finalFieldType(core.RegExp),
    requiresDelimiterRun: dart.finalFieldType(core.bool)
  }));
  inline_parser.StrikethroughSyntax = class StrikethroughSyntax extends inline_parser.TagSyntax {
    onMatchEnd(parser, match, state) {
      let runLength = match.group(0).length;
      let matchStart = parser.pos;
      let matchEnd = dart.notNull(parser.pos) + runLength - 1;
      let delimiterRun = inline_parser._DelimiterRun.tryParse(parser, matchStart, matchEnd);
      if (!dart.test(delimiterRun.isRightFlanking)) {
        return false;
      }
      parser.addNode(new ast.Element.new("del", state.children));
      return true;
    }
  };
  (inline_parser.StrikethroughSyntax.new = function() {
    inline_parser.StrikethroughSyntax.__proto__.new.call(this, "~+", {requiresDelimiterRun: true});
    ;
  }).prototype = inline_parser.StrikethroughSyntax.prototype;
  dart.addTypeTests(inline_parser.StrikethroughSyntax);
  dart.setLibraryUri(inline_parser.StrikethroughSyntax, "package:markdown/src/inline_parser.dart");
  const _pendingStatesAreActive = dart.privateName(inline_parser, "_pendingStatesAreActive");
  const _tryAddReferenceLink = dart.privateName(inline_parser, "_tryAddReferenceLink");
  const _parseInlineLink = dart.privateName(inline_parser, "_parseInlineLink");
  const _tryAddInlineLink = dart.privateName(inline_parser, "_tryAddInlineLink");
  const _parseReferenceLinkLabel = dart.privateName(inline_parser, "_parseReferenceLinkLabel");
  const _createNode = dart.privateName(inline_parser, "_createNode");
  const _resolveReferenceLink = dart.privateName(inline_parser, "_resolveReferenceLink");
  const _moveThroughWhitespace = dart.privateName(inline_parser, "_moveThroughWhitespace");
  const _parseInlineBracketedLink = dart.privateName(inline_parser, "_parseInlineBracketedLink");
  const _parseInlineBareDestinationLink = dart.privateName(inline_parser, "_parseInlineBareDestinationLink");
  const _parseTitle = dart.privateName(inline_parser, "_parseTitle");
  inline_parser.LinkSyntax = class LinkSyntax extends inline_parser.TagSyntax {
    get linkResolver() {
      return this[linkResolver$];
    }
    set linkResolver(value) {
      super.linkResolver = value;
    }
    onMatch(parser, match) {
      let matched = super.onMatch(parser, match);
      if (!dart.test(matched)) return false;
      this[_pendingStatesAreActive] = true;
      return true;
    }
    onMatchEnd(parser, match, state) {
      if (!dart.test(this[_pendingStatesAreActive])) return false;
      let text = parser.source[$substring](state.endPos, parser.pos);
      if (dart.notNull(parser.pos) + 1 >= parser.source.length) {
        return this[_tryAddReferenceLink](parser, state, text);
      }
      let char = parser.charAt(dart.notNull(parser.pos) + 1);
      if (char === 40) {
        parser.advanceBy(1);
        let leftParenIndex = parser.pos;
        let inlineLink = this[_parseInlineLink](parser);
        if (inlineLink != null) {
          return this[_tryAddInlineLink](parser, state, inlineLink);
        }
        parser.pos = leftParenIndex;
        parser.advanceBy(-1);
        return this[_tryAddReferenceLink](parser, state, text);
      }
      if (char === 91) {
        parser.advanceBy(1);
        if (dart.notNull(parser.pos) + 1 < parser.source.length && parser.charAt(dart.notNull(parser.pos) + 1) === 93) {
          parser.advanceBy(1);
          return this[_tryAddReferenceLink](parser, state, text);
        }
        let label = this[_parseReferenceLinkLabel](parser);
        if (label != null) return this[_tryAddReferenceLink](parser, state, label);
        return false;
      }
      return this[_tryAddReferenceLink](parser, state, text);
    }
    [_resolveReferenceLink](label, state, linkReferences) {
      let normalizedLabel = label[$toLowerCase]();
      let linkReference = linkReferences[$_get](normalizedLabel);
      if (linkReference != null) {
        return this[_createNode](state, linkReference.destination, linkReference.title);
      } else {
        return this.linkResolver(label[$replaceAll]("\\\\", "\\")[$replaceAll]("\\[", "[")[$replaceAll]("\\]", "]"));
      }
    }
    [_createNode](state, destination, title) {
      let element = new ast.Element.new("a", state.children);
      element.attributes[$_set]("href", util.escapeAttribute(destination));
      if (title != null && title[$isNotEmpty]) {
        element.attributes[$_set]("title", util.escapeAttribute(title));
      }
      return element;
    }
    [_tryAddReferenceLink](parser, state, label) {
      let element = this[_resolveReferenceLink](label, state, parser.document.linkReferences);
      if (element == null) {
        return false;
      }
      parser.addNode(element);
      parser.start = parser.pos;
      this[_pendingStatesAreActive] = false;
      return true;
    }
    [_tryAddInlineLink](parser, state, link) {
      let element = this[_createNode](state, link.destination, link.title);
      if (element == null) return false;
      parser.addNode(element);
      parser.start = parser.pos;
      this[_pendingStatesAreActive] = false;
      return true;
    }
    [_parseReferenceLinkLabel](parser) {
      parser.advanceBy(1);
      if (dart.test(parser.isDone)) return null;
      let buffer = new core.StringBuffer.new();
      while (true) {
        let char = parser.charAt(parser.pos);
        if (char === 92) {
          parser.advanceBy(1);
          let next = parser.charAt(parser.pos);
          if (next !== 92 && next !== 93) {
            buffer.writeCharCode(char);
          }
          buffer.writeCharCode(next);
        } else if (char === 93) {
          break;
        } else {
          buffer.writeCharCode(char);
        }
        parser.advanceBy(1);
        if (dart.test(parser.isDone)) return null;
      }
      let label = buffer.toString();
      if (dart.test(inline_parser.LinkSyntax._entirelyWhitespacePattern.hasMatch(label))) return null;
      return label;
    }
    [_parseInlineLink](parser) {
      parser.advanceBy(1);
      this[_moveThroughWhitespace](parser);
      if (dart.test(parser.isDone)) return null;
      if (parser.charAt(parser.pos) === 60) {
        return this[_parseInlineBracketedLink](parser);
      } else {
        return this[_parseInlineBareDestinationLink](parser);
      }
    }
    [_parseInlineBracketedLink](parser) {
      parser.advanceBy(1);
      let buffer = new core.StringBuffer.new();
      while (true) {
        let char = parser.charAt(parser.pos);
        if (char === 92) {
          parser.advanceBy(1);
          let next = parser.charAt(parser.pos);
          if (char === 32 || char === 10 || char === 13 || char === 12) {
            return null;
          }
          if (next !== 92 && next !== 62) {
            buffer.writeCharCode(char);
          }
          buffer.writeCharCode(next);
        } else if (char === 32 || char === 10 || char === 13 || char === 12) {
          return null;
        } else if (char === 62) {
          break;
        } else {
          buffer.writeCharCode(char);
        }
        parser.advanceBy(1);
        if (dart.test(parser.isDone)) return null;
      }
      let destination = buffer.toString();
      parser.advanceBy(1);
      let char = parser.charAt(parser.pos);
      if (char === 32 || char === 10 || char === 13 || char === 12) {
        let title = this[_parseTitle](parser);
        if (title == null && parser.charAt(parser.pos) !== 41) {
          return null;
        }
        return new inline_parser.InlineLink.new(destination, {title: title});
      } else if (char === 41) {
        return new inline_parser.InlineLink.new(destination);
      } else {
        return null;
      }
    }
    [_parseInlineBareDestinationLink](parser) {
      let parenCount = 1;
      let buffer = new core.StringBuffer.new();
      while (true) {
        let char = parser.charAt(parser.pos);
        switch (char) {
          case 92:
          {
            parser.advanceBy(1);
            if (dart.test(parser.isDone)) return null;
            let next = parser.charAt(parser.pos);
            if (next !== 92 && next !== 40 && next !== 41) {
              buffer.writeCharCode(char);
            }
            buffer.writeCharCode(next);
            break;
          }
          case 32:
          case 10:
          case 13:
          case 12:
          {
            let destination = buffer.toString();
            let title = this[_parseTitle](parser);
            if (title == null && (dart.test(parser.isDone) || parser.charAt(parser.pos) !== 41)) {
              return null;
            }
            parenCount = parenCount - 1;
            if (parenCount === 0) {
              return new inline_parser.InlineLink.new(destination, {title: title});
            }
            break;
          }
          case 40:
          {
            parenCount = parenCount + 1;
            buffer.writeCharCode(char);
            break;
          }
          case 41:
          {
            parenCount = parenCount - 1;
            if (parenCount === 0) {
              let destination = buffer.toString();
              return new inline_parser.InlineLink.new(destination);
            }
            buffer.writeCharCode(char);
            break;
          }
          default:
          {
            buffer.writeCharCode(char);
          }
        }
        parser.advanceBy(1);
        if (dart.test(parser.isDone)) return null;
      }
    }
    [_moveThroughWhitespace](parser) {
      while (!dart.test(parser.isDone)) {
        let char = parser.charAt(parser.pos);
        if (char !== 32 && char !== 9 && char !== 10 && char !== 11 && char !== 13 && char !== 12) {
          return;
        }
        parser.advanceBy(1);
      }
    }
    [_parseTitle](parser) {
      this[_moveThroughWhitespace](parser);
      if (dart.test(parser.isDone)) return null;
      let delimiter = parser.charAt(parser.pos);
      if (delimiter !== 39 && delimiter !== 34 && delimiter !== 40) {
        return null;
      }
      let closeDelimiter = delimiter === 40 ? 41 : delimiter;
      parser.advanceBy(1);
      let buffer = new core.StringBuffer.new();
      while (true) {
        let char = parser.charAt(parser.pos);
        if (char === 92) {
          parser.advanceBy(1);
          let next = parser.charAt(parser.pos);
          if (next !== 92 && next != closeDelimiter) {
            buffer.writeCharCode(char);
          }
          buffer.writeCharCode(next);
        } else if (char == closeDelimiter) {
          break;
        } else {
          buffer.writeCharCode(char);
        }
        parser.advanceBy(1);
        if (dart.test(parser.isDone)) return null;
      }
      let title = buffer.toString();
      parser.advanceBy(1);
      if (dart.test(parser.isDone)) return null;
      this[_moveThroughWhitespace](parser);
      if (dart.test(parser.isDone)) return null;
      if (parser.charAt(parser.pos) !== 41) return null;
      return title;
    }
  };
  (inline_parser.LinkSyntax.new = function(opts) {
    let t0;
    let linkResolver = opts && 'linkResolver' in opts ? opts.linkResolver : null;
    let pattern = opts && 'pattern' in opts ? opts.pattern : "\\[";
    this[_pendingStatesAreActive] = true;
    this[linkResolver$] = (t0 = linkResolver, t0 == null ? dart.fn((_, __) => {
      if (__ === void 0) __ = null;
      return null;
    }, StringAndStringToNull()) : t0);
    inline_parser.LinkSyntax.__proto__.new.call(this, pattern, {end: "\\]"});
    ;
  }).prototype = inline_parser.LinkSyntax.prototype;
  dart.addTypeTests(inline_parser.LinkSyntax);
  const linkResolver$ = Symbol("LinkSyntax.linkResolver");
  dart.setMethodSignature(inline_parser.LinkSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.LinkSyntax.__proto__),
    [_resolveReferenceLink]: dart.fnType(ast.Node, [core.String, inline_parser.TagState, core.Map$(core.String, document$.LinkReference)]),
    [_createNode]: dart.fnType(ast.Node, [inline_parser.TagState, core.String, core.String]),
    [_tryAddReferenceLink]: dart.fnType(core.bool, [inline_parser.InlineParser, inline_parser.TagState, core.String]),
    [_tryAddInlineLink]: dart.fnType(core.bool, [inline_parser.InlineParser, inline_parser.TagState, inline_parser.InlineLink]),
    [_parseReferenceLinkLabel]: dart.fnType(core.String, [inline_parser.InlineParser]),
    [_parseInlineLink]: dart.fnType(inline_parser.InlineLink, [inline_parser.InlineParser]),
    [_parseInlineBracketedLink]: dart.fnType(inline_parser.InlineLink, [inline_parser.InlineParser]),
    [_parseInlineBareDestinationLink]: dart.fnType(inline_parser.InlineLink, [inline_parser.InlineParser]),
    [_moveThroughWhitespace]: dart.fnType(dart.void, [inline_parser.InlineParser]),
    [_parseTitle]: dart.fnType(core.String, [inline_parser.InlineParser])
  }));
  dart.setLibraryUri(inline_parser.LinkSyntax, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.LinkSyntax, () => ({
    __proto__: dart.getFields(inline_parser.LinkSyntax.__proto__),
    linkResolver: dart.finalFieldType(dart.fnType(ast.Node, [core.String], [core.String])),
    [_pendingStatesAreActive]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(inline_parser.LinkSyntax, {
    /*inline_parser.LinkSyntax._entirelyWhitespacePattern*/get _entirelyWhitespacePattern() {
      return core.RegExp.new("^\\s*$");
    }
  });
  inline_parser.ImageSyntax = class ImageSyntax extends inline_parser.LinkSyntax {
    [_createNode](state, destination, title) {
      let t0, t0$;
      let element = new ast.Element.empty("img");
      element.attributes[$_set]("src", util.escapeHtml(destination));
      element.attributes[$_set]("alt", (t0$ = (t0 = state, t0 == null ? null : t0.textContent), t0$ == null ? "" : t0$));
      if (title != null && title[$isNotEmpty]) {
        element.attributes[$_set]("title", util.escapeAttribute(title[$replaceAll]("&", "&amp;")));
      }
      return element;
    }
    [_tryAddReferenceLink](parser, state, label) {
      let element = this[_resolveReferenceLink](label, state, parser.document.linkReferences);
      if (element == null) {
        return false;
      }
      parser.addNode(element);
      parser.start = parser.pos;
      return true;
    }
  };
  (inline_parser.ImageSyntax.new = function(opts) {
    let linkResolver = opts && 'linkResolver' in opts ? opts.linkResolver : null;
    inline_parser.ImageSyntax.__proto__.new.call(this, {linkResolver: linkResolver, pattern: "!\\["});
    ;
  }).prototype = inline_parser.ImageSyntax.prototype;
  dart.addTypeTests(inline_parser.ImageSyntax);
  dart.setLibraryUri(inline_parser.ImageSyntax, "package:markdown/src/inline_parser.dart");
  inline_parser.CodeSyntax = class CodeSyntax extends inline_parser.InlineSyntax {
    tryMatch(parser, startMatchPos) {
      if (startMatchPos === void 0) startMatchPos = null;
      if (dart.notNull(parser.pos) > 0 && parser.charAt(dart.notNull(parser.pos) - 1) === 96) {
        return false;
      }
      let match = this.pattern[$matchAsPrefix](parser.source, parser.pos);
      if (match == null) {
        return false;
      }
      parser.writeText();
      if (dart.test(this.onMatch(parser, match))) parser.consume(match._get(0).length);
      return true;
    }
    onMatch(parser, match) {
      let code = match._get(2)[$trim]()[$replaceAll]("\n", " ");
      if (dart.test(parser.document.encodeHtml)) code = util.escapeHtml(code);
      parser.addNode(new ast.Element.text("code", code));
      return true;
    }
  };
  (inline_parser.CodeSyntax.new = function() {
    inline_parser.CodeSyntax.__proto__.new.call(this, inline_parser.CodeSyntax._pattern);
    ;
  }).prototype = inline_parser.CodeSyntax.prototype;
  dart.addTypeTests(inline_parser.CodeSyntax);
  dart.setMethodSignature(inline_parser.CodeSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.CodeSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.CodeSyntax, "package:markdown/src/inline_parser.dart");
  dart.defineLazy(inline_parser.CodeSyntax, {
    /*inline_parser.CodeSyntax._pattern*/get _pattern() {
      return "(`+(?!`))((?:.|\\n)*?[^`])\\1(?!`)";
    }
  });
  inline_parser.EmojiSyntax = class EmojiSyntax extends inline_parser.InlineSyntax {
    onMatch(parser, match) {
      let alias = match._get(1);
      let emoji = emojis.emojis[$_get](alias);
      if (emoji == null) {
        parser.advanceBy(1);
        return false;
      }
      parser.addNode(new ast.Text.new(emoji));
      return true;
    }
  };
  (inline_parser.EmojiSyntax.new = function() {
    inline_parser.EmojiSyntax.__proto__.new.call(this, ":([a-z0-9_+-]+):");
    ;
  }).prototype = inline_parser.EmojiSyntax.prototype;
  dart.addTypeTests(inline_parser.EmojiSyntax);
  dart.setMethodSignature(inline_parser.EmojiSyntax, () => ({
    __proto__: dart.getMethods(inline_parser.EmojiSyntax.__proto__),
    onMatch: dart.fnType(core.bool, [inline_parser.InlineParser, core.Match])
  }));
  dart.setLibraryUri(inline_parser.EmojiSyntax, "package:markdown/src/inline_parser.dart");
  inline_parser.TagState = class TagState extends core.Object {
    get startPos() {
      return this[startPos$];
    }
    set startPos(value) {
      super.startPos = value;
    }
    get endPos() {
      return this[endPos$];
    }
    set endPos(value) {
      super.endPos = value;
    }
    get syntax() {
      return this[syntax$];
    }
    set syntax(value) {
      super.syntax = value;
    }
    get children() {
      return this[children];
    }
    set children(value) {
      super.children = value;
    }
    get openingDelimiterRun() {
      return this[openingDelimiterRun$];
    }
    set openingDelimiterRun(value) {
      super.openingDelimiterRun = value;
    }
    tryMatch(parser) {
      let endMatch = this.syntax.endPattern[$matchAsPrefix](parser.source, parser.pos);
      if (endMatch == null) {
        return false;
      }
      if (!dart.test(this.syntax.requiresDelimiterRun)) {
        this.close(parser, endMatch);
        return true;
      }
      let runLength = endMatch.group(0).length;
      let openingRunLength = dart.notNull(this.endPos) - dart.notNull(this.startPos);
      let closingMatchStart = parser.pos;
      let closingMatchEnd = dart.notNull(parser.pos) + runLength - 1;
      let closingDelimiterRun = inline_parser._DelimiterRun.tryParse(parser, closingMatchStart, closingMatchEnd);
      if (closingDelimiterRun != null && dart.test(closingDelimiterRun.canClose)) {
        let oneRunOpensAndCloses = dart.test(this.openingDelimiterRun.canOpen) && dart.test(this.openingDelimiterRun.canClose) || dart.test(closingDelimiterRun.canOpen) && dart.test(closingDelimiterRun.canClose);
        if (oneRunOpensAndCloses && (openingRunLength + dart.notNull(closingDelimiterRun.length))[$modulo](3) === 0) {
          return false;
        }
        this.close(parser, endMatch);
        return true;
      } else {
        return false;
      }
    }
    close(parser, endMatch) {
      let index = parser[_stack][$indexOf](this);
      let unmatchedTags = parser[_stack][$sublist](dart.notNull(index) + 1);
      parser[_stack][$removeRange](dart.notNull(index) + 1, parser[_stack][$length]);
      for (let unmatched of unmatchedTags) {
        parser.writeTextRange(unmatched.startPos, unmatched.endPos);
        this.children[$addAll](unmatched.children);
      }
      parser.writeText();
      parser[_stack][$removeLast]();
      if (dart.test(parser[_stack][$isEmpty])) return this.children;
      let endMatchIndex = parser.pos;
      if (dart.test(this.syntax.onMatchEnd(parser, endMatch, this))) {
        parser.consume(endMatch._get(0).length);
      } else {
        parser.writeTextRange(this.startPos, this.endPos);
        parser[_stack][$last].children[$addAll](this.children);
        parser.pos = endMatchIndex;
        parser.advanceBy(endMatch._get(0).length);
      }
      return null;
    }
    get textContent() {
      return this.children[$map](core.String, dart.fn(child => child.textContent, NodeToString()))[$join]("");
    }
  };
  (inline_parser.TagState.new = function(startPos, endPos, syntax, openingDelimiterRun) {
    this[startPos$] = startPos;
    this[endPos$] = endPos;
    this[syntax$] = syntax;
    this[openingDelimiterRun$] = openingDelimiterRun;
    this[children] = JSArrayOfNode().of([]);
    ;
  }).prototype = inline_parser.TagState.prototype;
  dart.addTypeTests(inline_parser.TagState);
  const startPos$ = Symbol("TagState.startPos");
  const endPos$ = Symbol("TagState.endPos");
  const syntax$ = Symbol("TagState.syntax");
  const children = Symbol("TagState.children");
  const openingDelimiterRun$ = Symbol("TagState.openingDelimiterRun");
  dart.setMethodSignature(inline_parser.TagState, () => ({
    __proto__: dart.getMethods(inline_parser.TagState.__proto__),
    tryMatch: dart.fnType(core.bool, [inline_parser.InlineParser]),
    close: dart.fnType(core.List$(ast.Node), [inline_parser.InlineParser, core.Match])
  }));
  dart.setGetterSignature(inline_parser.TagState, () => ({
    __proto__: dart.getGetters(inline_parser.TagState.__proto__),
    textContent: core.String
  }));
  dart.setLibraryUri(inline_parser.TagState, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.TagState, () => ({
    __proto__: dart.getFields(inline_parser.TagState.__proto__),
    startPos: dart.finalFieldType(core.int),
    endPos: dart.finalFieldType(core.int),
    syntax: dart.finalFieldType(inline_parser.TagSyntax),
    children: dart.finalFieldType(core.List$(ast.Node)),
    openingDelimiterRun: dart.finalFieldType(inline_parser._DelimiterRun)
  }));
  inline_parser.InlineLink = class InlineLink extends core.Object {
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
  };
  (inline_parser.InlineLink.new = function(destination, opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    this[destination$] = destination;
    this[title$] = title;
    ;
  }).prototype = inline_parser.InlineLink.prototype;
  dart.addTypeTests(inline_parser.InlineLink);
  const destination$ = Symbol("InlineLink.destination");
  const title$ = Symbol("InlineLink.title");
  dart.setLibraryUri(inline_parser.InlineLink, "package:markdown/src/inline_parser.dart");
  dart.setFieldSignature(inline_parser.InlineLink, () => ({
    __proto__: dart.getFields(inline_parser.InlineLink.__proto__),
    destination: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(version, {
    /*version.packageVersion*/get packageVersion() {
      return "2.1.1";
    }
  });
  ast.Node = class Node extends core.Object {};
  (ast.Node.new = function() {
    ;
  }).prototype = ast.Node.prototype;
  dart.addTypeTests(ast.Node);
  dart.setLibraryUri(ast.Node, "package:markdown/src/ast.dart");
  ast.Element = class Element extends core.Object {
    get tag() {
      return this[tag$];
    }
    set tag(value) {
      super.tag = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get attributes() {
      return this[attributes];
    }
    set attributes(value) {
      super.attributes = value;
    }
    get generatedId() {
      return this[generatedId];
    }
    set generatedId(value) {
      this[generatedId] = value;
    }
    get isEmpty() {
      return this.children == null;
    }
    accept(visitor) {
      if (dart.test(visitor.visitElementBefore(this))) {
        if (this.children != null) {
          for (let child of this.children) {
            child.accept(visitor);
          }
        }
        visitor.visitElementAfter(this);
      }
    }
    get textContent() {
      return this.children == null ? "" : this.children[$map](core.String, dart.fn(child => child.textContent, NodeToString()))[$join]("");
    }
  };
  (ast.Element.new = function(tag, children) {
    this[generatedId] = null;
    this[tag$] = tag;
    this[children$] = children;
    this[attributes] = new (IdentityMapOfString$String()).new();
    ;
  }).prototype = ast.Element.prototype;
  (ast.Element.empty = function(tag) {
    this[generatedId] = null;
    this[tag$] = tag;
    this[children$] = null;
    this[attributes] = new (IdentityMapOfString$String()).new();
    ;
  }).prototype = ast.Element.prototype;
  (ast.Element.withTag = function(tag) {
    this[generatedId] = null;
    this[tag$] = tag;
    this[children$] = JSArrayOfNode().of([]);
    this[attributes] = new (IdentityMapOfString$String()).new();
    ;
  }).prototype = ast.Element.prototype;
  (ast.Element.text = function(tag, text) {
    this[generatedId] = null;
    this[tag$] = tag;
    this[children$] = JSArrayOfNode().of([new ast.Text.new(text)]);
    this[attributes] = new (IdentityMapOfString$String()).new();
    ;
  }).prototype = ast.Element.prototype;
  dart.addTypeTests(ast.Element);
  const tag$ = Symbol("Element.tag");
  const children$ = Symbol("Element.children");
  const attributes = Symbol("Element.attributes");
  const generatedId = Symbol("Element.generatedId");
  ast.Element[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.Element, () => ({
    __proto__: dart.getMethods(ast.Element.__proto__),
    accept: dart.fnType(dart.void, [ast.NodeVisitor])
  }));
  dart.setGetterSignature(ast.Element, () => ({
    __proto__: dart.getGetters(ast.Element.__proto__),
    isEmpty: core.bool,
    textContent: core.String
  }));
  dart.setLibraryUri(ast.Element, "package:markdown/src/ast.dart");
  dart.setFieldSignature(ast.Element, () => ({
    __proto__: dart.getFields(ast.Element.__proto__),
    tag: dart.finalFieldType(core.String),
    children: dart.finalFieldType(core.List$(ast.Node)),
    attributes: dart.finalFieldType(core.Map$(core.String, core.String)),
    generatedId: dart.fieldType(core.String)
  }));
  ast.Text = class Text extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    accept(visitor) {
      return visitor.visitText(this);
    }
    get textContent() {
      return this.text;
    }
  };
  (ast.Text.new = function(text) {
    this[text$] = text;
    ;
  }).prototype = ast.Text.prototype;
  dart.addTypeTests(ast.Text);
  const text$ = Symbol("Text.text");
  ast.Text[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.Text, () => ({
    __proto__: dart.getMethods(ast.Text.__proto__),
    accept: dart.fnType(dart.void, [ast.NodeVisitor])
  }));
  dart.setGetterSignature(ast.Text, () => ({
    __proto__: dart.getGetters(ast.Text.__proto__),
    textContent: core.String
  }));
  dart.setLibraryUri(ast.Text, "package:markdown/src/ast.dart");
  dart.setFieldSignature(ast.Text, () => ({
    __proto__: dart.getFields(ast.Text.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  ast.UnparsedContent = class UnparsedContent extends core.Object {
    get textContent() {
      return this[textContent$];
    }
    set textContent(value) {
      super.textContent = value;
    }
    accept(visitor) {
      return null;
    }
  };
  (ast.UnparsedContent.new = function(textContent) {
    this[textContent$] = textContent;
    ;
  }).prototype = ast.UnparsedContent.prototype;
  dart.addTypeTests(ast.UnparsedContent);
  const textContent$ = Symbol("UnparsedContent.textContent");
  ast.UnparsedContent[dart.implements] = () => [ast.Node];
  dart.setMethodSignature(ast.UnparsedContent, () => ({
    __proto__: dart.getMethods(ast.UnparsedContent.__proto__),
    accept: dart.fnType(dart.void, [ast.NodeVisitor])
  }));
  dart.setLibraryUri(ast.UnparsedContent, "package:markdown/src/ast.dart");
  dart.setFieldSignature(ast.UnparsedContent, () => ({
    __proto__: dart.getFields(ast.UnparsedContent.__proto__),
    textContent: dart.finalFieldType(core.String)
  }));
  ast.NodeVisitor = class NodeVisitor extends core.Object {};
  (ast.NodeVisitor.new = function() {
    ;
  }).prototype = ast.NodeVisitor.prototype;
  dart.addTypeTests(ast.NodeVisitor);
  dart.setLibraryUri(ast.NodeVisitor, "package:markdown/src/ast.dart");
  const _blockSyntaxes = dart.privateName(document$, "_blockSyntaxes");
  const _inlineSyntaxes = dart.privateName(document$, "_inlineSyntaxes");
  const _parseInlineContent = dart.privateName(document$, "_parseInlineContent");
  document$.Document = class Document extends core.Object {
    get linkReferences() {
      return this[linkReferences];
    }
    set linkReferences(value) {
      super.linkReferences = value;
    }
    get extensionSet() {
      return this[extensionSet$];
    }
    set extensionSet(value) {
      super.extensionSet = value;
    }
    get linkResolver() {
      return this[linkResolver$0];
    }
    set linkResolver(value) {
      super.linkResolver = value;
    }
    get imageLinkResolver() {
      return this[imageLinkResolver$];
    }
    set imageLinkResolver(value) {
      super.imageLinkResolver = value;
    }
    get encodeHtml() {
      return this[encodeHtml$];
    }
    set encodeHtml(value) {
      super.encodeHtml = value;
    }
    get blockSyntaxes() {
      return this[_blockSyntaxes];
    }
    get inlineSyntaxes() {
      return this[_inlineSyntaxes];
    }
    parseLines(lines) {
      let nodes = new block_parser.BlockParser.new(lines, this).parseLines();
      this[_parseInlineContent](nodes);
      return nodes;
    }
    parseInline(text) {
      return new inline_parser.InlineParser.new(text, this).parse();
    }
    [_parseInlineContent](nodes) {
      for (let i = 0; i < dart.notNull(nodes[$length]); i = i + 1) {
        let node = nodes[$_get](i);
        if (ast.UnparsedContent.is(node)) {
          let inlineNodes = this.parseInline(node.textContent);
          nodes[$removeAt](i);
          nodes[$insertAll](i, inlineNodes);
          i = i + (dart.notNull(inlineNodes[$length]) - 1);
        } else if (ast.Element.is(node) && node.children != null) {
          this[_parseInlineContent](node.children);
        }
      }
    }
  };
  (document$.Document.new = function(opts) {
    let t0, t1, t0$, t1$, t0$0;
    let blockSyntaxes = opts && 'blockSyntaxes' in opts ? opts.blockSyntaxes : null;
    let inlineSyntaxes = opts && 'inlineSyntaxes' in opts ? opts.inlineSyntaxes : null;
    let extensionSet = opts && 'extensionSet' in opts ? opts.extensionSet : null;
    let linkResolver = opts && 'linkResolver' in opts ? opts.linkResolver : null;
    let imageLinkResolver = opts && 'imageLinkResolver' in opts ? opts.imageLinkResolver : null;
    let encodeHtml = opts && 'encodeHtml' in opts ? opts.encodeHtml : true;
    this[linkReferences] = new (IdentityMapOfString$LinkReference()).new();
    this[_blockSyntaxes] = new (_HashSetOfBlockSyntax()).new();
    this[_inlineSyntaxes] = new (_HashSetOfInlineSyntax()).new();
    this[linkResolver$0] = linkResolver;
    this[imageLinkResolver$] = imageLinkResolver;
    this[encodeHtml$] = encodeHtml;
    this[extensionSet$] = (t0 = extensionSet, t0 == null ? extension_set.ExtensionSet.commonMark : t0);
    t0$ = this[_blockSyntaxes];
    t0$.addAll((t1 = blockSyntaxes, t1 == null ? JSArrayOfBlockSyntax().of([]) : t1));
    t0$.addAll(this.extensionSet.blockSyntaxes);
    t0$;
    t0$0 = this[_inlineSyntaxes];
    t0$0.addAll((t1$ = inlineSyntaxes, t1$ == null ? JSArrayOfInlineSyntax().of([]) : t1$));
    t0$0.addAll(this.extensionSet.inlineSyntaxes);
    t0$0;
  }).prototype = document$.Document.prototype;
  dart.addTypeTests(document$.Document);
  const linkReferences = Symbol("Document.linkReferences");
  const extensionSet$ = Symbol("Document.extensionSet");
  const linkResolver$0 = Symbol("Document.linkResolver");
  const imageLinkResolver$ = Symbol("Document.imageLinkResolver");
  const encodeHtml$ = Symbol("Document.encodeHtml");
  dart.setMethodSignature(document$.Document, () => ({
    __proto__: dart.getMethods(document$.Document.__proto__),
    parseLines: dart.fnType(core.List$(ast.Node), [core.List$(core.String)]),
    parseInline: dart.fnType(core.List$(ast.Node), [core.String]),
    [_parseInlineContent]: dart.fnType(dart.void, [core.List$(ast.Node)])
  }));
  dart.setGetterSignature(document$.Document, () => ({
    __proto__: dart.getGetters(document$.Document.__proto__),
    blockSyntaxes: core.Iterable$(block_parser.BlockSyntax),
    inlineSyntaxes: core.Iterable$(inline_parser.InlineSyntax)
  }));
  dart.setLibraryUri(document$.Document, "package:markdown/src/document.dart");
  dart.setFieldSignature(document$.Document, () => ({
    __proto__: dart.getFields(document$.Document.__proto__),
    linkReferences: dart.finalFieldType(core.Map$(core.String, document$.LinkReference)),
    extensionSet: dart.finalFieldType(extension_set.ExtensionSet),
    linkResolver: dart.finalFieldType(dart.fnType(ast.Node, [core.String], [core.String])),
    imageLinkResolver: dart.finalFieldType(dart.fnType(ast.Node, [core.String], [core.String])),
    encodeHtml: dart.finalFieldType(core.bool),
    [_blockSyntaxes]: dart.finalFieldType(core.Set$(block_parser.BlockSyntax)),
    [_inlineSyntaxes]: dart.finalFieldType(core.Set$(inline_parser.InlineSyntax))
  }));
  document$.LinkReference = class LinkReference extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get destination() {
      return this[destination$0];
    }
    set destination(value) {
      super.destination = value;
    }
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
  };
  (document$.LinkReference.new = function(label, destination, title) {
    this[label$] = label;
    this[destination$0] = destination;
    this[title$0] = title;
    ;
  }).prototype = document$.LinkReference.prototype;
  dart.addTypeTests(document$.LinkReference);
  const label$ = Symbol("LinkReference.label");
  const destination$0 = Symbol("LinkReference.destination");
  const title$0 = Symbol("LinkReference.title");
  dart.setLibraryUri(document$.LinkReference, "package:markdown/src/document.dart");
  dart.setFieldSignature(document$.LinkReference, () => ({
    __proto__: dart.getFields(document$.LinkReference.__proto__),
    label: dart.finalFieldType(core.String),
    destination: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String)
  }));
  let C11;
  dart.defineLazy(emojis, {
    /*emojis.emojis*/get emojis() {
      return C11 || CT.C11;
    }
  });
  let C12;
  let C13;
  let C14;
  let C15;
  extension_set.ExtensionSet = class ExtensionSet extends core.Object {
    get blockSyntaxes() {
      return this[blockSyntaxes$];
    }
    set blockSyntaxes(value) {
      super.blockSyntaxes = value;
    }
    get inlineSyntaxes() {
      return this[inlineSyntaxes$];
    }
    set inlineSyntaxes(value) {
      super.inlineSyntaxes = value;
    }
  };
  (extension_set.ExtensionSet.new = function(blockSyntaxes, inlineSyntaxes) {
    this[blockSyntaxes$] = blockSyntaxes;
    this[inlineSyntaxes$] = inlineSyntaxes;
    ;
  }).prototype = extension_set.ExtensionSet.prototype;
  dart.addTypeTests(extension_set.ExtensionSet);
  const blockSyntaxes$ = Symbol("ExtensionSet.blockSyntaxes");
  const inlineSyntaxes$ = Symbol("ExtensionSet.inlineSyntaxes");
  dart.setLibraryUri(extension_set.ExtensionSet, "package:markdown/src/extension_set.dart");
  dart.setFieldSignature(extension_set.ExtensionSet, () => ({
    __proto__: dart.getFields(extension_set.ExtensionSet.__proto__),
    blockSyntaxes: dart.finalFieldType(core.List$(block_parser.BlockSyntax)),
    inlineSyntaxes: dart.finalFieldType(core.List$(inline_parser.InlineSyntax))
  }));
  dart.defineLazy(extension_set.ExtensionSet, {
    /*extension_set.ExtensionSet.none*/get none() {
      return new extension_set.ExtensionSet.new(JSArrayOfBlockSyntax().of([]), JSArrayOfInlineSyntax().of([]));
    },
    /*extension_set.ExtensionSet.commonMark*/get commonMark() {
      return new extension_set.ExtensionSet.new(JSArrayOfBlockSyntax().of([C12 || CT.C12]), JSArrayOfInlineSyntax().of([new inline_parser.InlineHtmlSyntax.new()]));
    },
    /*extension_set.ExtensionSet.gitHubWeb*/get gitHubWeb() {
      return new extension_set.ExtensionSet.new(JSArrayOfBlockSyntax().of([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15]), JSArrayOfInlineSyntax().of([new inline_parser.InlineHtmlSyntax.new(), new inline_parser.StrikethroughSyntax.new(), new inline_parser.EmojiSyntax.new(), new inline_parser.AutolinkExtensionSyntax.new()]));
    },
    /*extension_set.ExtensionSet.gitHubFlavored*/get gitHubFlavored() {
      return new extension_set.ExtensionSet.new(JSArrayOfBlockSyntax().of([C12 || CT.C12, C15 || CT.C15]), JSArrayOfInlineSyntax().of([new inline_parser.InlineHtmlSyntax.new(), new inline_parser.StrikethroughSyntax.new(), new inline_parser.AutolinkExtensionSyntax.new()]));
    }
  });
  const _elementStack = dart.privateName(html_renderer, "_elementStack");
  const _lastVisitedTag = dart.privateName(html_renderer, "_lastVisitedTag");
  let C16;
  html_renderer.HtmlRenderer = class HtmlRenderer extends core.Object {
    get buffer() {
      return this[buffer];
    }
    set buffer(value) {
      this[buffer] = value;
    }
    get uniqueIds() {
      return this[uniqueIds];
    }
    set uniqueIds(value) {
      this[uniqueIds] = value;
    }
    render(nodes) {
      this.buffer = new core.StringBuffer.new();
      this.uniqueIds = new (_IdentityHashSetOfString()).new();
      for (let node of nodes) {
        node.accept(this);
      }
      return dart.toString(this.buffer);
    }
    visitText(text) {
      let content = text.text;
      if (dart.test((C16 || CT.C16)[$contains](this[_lastVisitedTag]))) {
        let lines = convert.LineSplitter.split(content);
        content = content[$contains]("<pre>") ? lines[$join]("\n") : lines[$map](core.String, dart.fn(line => line[$trimLeft](), StringToString()))[$join]("\n");
        if (text.text[$endsWith]("\n")) {
          content = dart.str(content) + "\n";
        }
      }
      this.buffer.write(content);
      this[_lastVisitedTag] = null;
    }
    visitElementBefore(element) {
      if (dart.test(this.buffer.isNotEmpty) && dart.test(html_renderer._blockTags[$contains](element.tag))) {
        this.buffer.writeln();
      }
      this.buffer.write("<" + dart.str(element.tag));
      for (let entry of element.attributes[$entries]) {
        this.buffer.write(" " + dart.str(entry.key) + "=\"" + dart.str(entry.value) + "\"");
      }
      if (element.generatedId != null) {
        this.buffer.write(" id=\"" + dart.str(this.uniquifyId(element.generatedId)) + "\"");
      }
      this[_lastVisitedTag] = element.tag;
      if (dart.test(element.isEmpty)) {
        this.buffer.write(" />");
        if (element.tag === "br") {
          this.buffer.write("\n");
        }
        return false;
      } else {
        this[_elementStack][$add](element);
        this.buffer.write(">");
        return true;
      }
    }
    visitElementAfter(element) {
      if (!(this[_elementStack][$last] == element)) dart.assertFailed(null, "org-dartlang-app:///packages/markdown/src/html_renderer.dart", 129, 12, "identical(_elementStack.last, element)");
      if (element.children != null && dart.test(element.children[$isNotEmpty]) && dart.test(html_renderer._blockTags[$contains](this[_lastVisitedTag])) && dart.test(html_renderer._blockTags[$contains](element.tag))) {
        this.buffer.writeln();
      } else if (element.tag === "blockquote") {
        this.buffer.writeln();
      }
      this.buffer.write("</" + dart.str(element.tag) + ">");
      this[_lastVisitedTag] = this[_elementStack][$removeLast]().tag;
    }
    uniquifyId(id) {
      let t0;
      if (!dart.test(this.uniqueIds.contains(id))) {
        this.uniqueIds.add(id);
        return id;
      }
      let suffix = 2;
      let suffixedId = dart.str(id) + "-" + dart.str(suffix);
      while (dart.test(this.uniqueIds.contains(suffixedId))) {
        suffixedId = dart.str(id) + "-" + dart.str((t0 = suffix, suffix = t0 + 1, t0));
      }
      this.uniqueIds.add(suffixedId);
      return suffixedId;
    }
  };
  (html_renderer.HtmlRenderer.new = function() {
    this[buffer] = null;
    this[uniqueIds] = null;
    this[_elementStack] = JSArrayOfElement().of([]);
    this[_lastVisitedTag] = null;
    ;
  }).prototype = html_renderer.HtmlRenderer.prototype;
  dart.addTypeTests(html_renderer.HtmlRenderer);
  const buffer = Symbol("HtmlRenderer.buffer");
  const uniqueIds = Symbol("HtmlRenderer.uniqueIds");
  html_renderer.HtmlRenderer[dart.implements] = () => [ast.NodeVisitor];
  dart.setMethodSignature(html_renderer.HtmlRenderer, () => ({
    __proto__: dart.getMethods(html_renderer.HtmlRenderer.__proto__),
    render: dart.fnType(core.String, [core.List$(ast.Node)]),
    visitText: dart.fnType(dart.void, [ast.Text]),
    visitElementBefore: dart.fnType(core.bool, [ast.Element]),
    visitElementAfter: dart.fnType(dart.void, [ast.Element]),
    uniquifyId: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(html_renderer.HtmlRenderer, "package:markdown/src/html_renderer.dart");
  dart.setFieldSignature(html_renderer.HtmlRenderer, () => ({
    __proto__: dart.getFields(html_renderer.HtmlRenderer.__proto__),
    buffer: dart.fieldType(core.StringBuffer),
    uniqueIds: dart.fieldType(core.Set$(core.String)),
    [_elementStack]: dart.finalFieldType(core.List$(ast.Element)),
    [_lastVisitedTag]: dart.fieldType(core.String)
  }));
  html_renderer.markdownToHtml = function markdownToHtml(markdown, opts) {
    let blockSyntaxes = opts && 'blockSyntaxes' in opts ? opts.blockSyntaxes : null;
    let inlineSyntaxes = opts && 'inlineSyntaxes' in opts ? opts.inlineSyntaxes : null;
    let extensionSet = opts && 'extensionSet' in opts ? opts.extensionSet : null;
    let linkResolver = opts && 'linkResolver' in opts ? opts.linkResolver : null;
    let imageLinkResolver = opts && 'imageLinkResolver' in opts ? opts.imageLinkResolver : null;
    let inlineOnly = opts && 'inlineOnly' in opts ? opts.inlineOnly : false;
    let document = new document$.Document.new({blockSyntaxes: blockSyntaxes, inlineSyntaxes: inlineSyntaxes, extensionSet: extensionSet, linkResolver: linkResolver, imageLinkResolver: imageLinkResolver});
    if (dart.test(inlineOnly)) return html_renderer.renderToHtml(document.parseInline(markdown));
    let lines = markdown[$replaceAll]("\r\n", "\n")[$split]("\n");
    return dart.notNull(html_renderer.renderToHtml(document.parseLines(lines))) + "\n";
  };
  html_renderer.renderToHtml = function renderToHtml(nodes) {
    return new html_renderer.HtmlRenderer.new().render(nodes);
  };
  let C17;
  dart.defineLazy(html_renderer, {
    /*html_renderer._blockTags*/get _blockTags() {
      return C17 || CT.C17;
    }
  });
  const _name = dart.privateName(convert, "_name");
  let C19;
  let C18;
  let C21;
  let C20;
  util.escapeHtml = function escapeHtml(html) {
    return (C18 || CT.C18).convert(html);
  };
  util.escapeHtmlAttribute = function escapeHtmlAttribute(text) {
    return (C20 || CT.C20).convert(text);
  };
  util.escapeAttribute = function escapeAttribute(value) {
    let result = new core.StringBuffer.new();
    let ch = null;
    for (let i = 0; i < dart.notNull(value[$codeUnits][$length]); i = i + 1) {
      ch = value[$codeUnitAt](i);
      if (ch === 92) {
        i = i + 1;
        if (i === value[$codeUnits][$length]) {
          result.writeCharCode(ch);
          break;
        }
        ch = value[$codeUnitAt](i);
        switch (ch) {
          case 34:
          {
            result.write("&quot;");
            break;
          }
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
          {
            result.writeCharCode(ch);
            break;
          }
          default:
          {
            result.write("%5C");
            result.writeCharCode(ch);
          }
        }
      } else if (ch === 34) {
        result.write("%22");
      } else {
        result.writeCharCode(ch);
      }
    }
    return result.toString();
  };
  dart.trackLibraries("packages/markdown/markdown", {
    "package:markdown/markdown.dart": markdown,
    "package:markdown/src/block_parser.dart": block_parser,
    "package:markdown/src/inline_parser.dart": inline_parser,
    "package:markdown/src/version.dart": version,
    "package:markdown/src/ast.dart": ast,
    "package:markdown/src/document.dart": document$,
    "package:markdown/src/emojis.dart": emojis,
    "package:markdown/src/extension_set.dart": extension_set,
    "package:markdown/src/html_renderer.dart": html_renderer,
    "package:markdown/src/util.dart": util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["markdown.dart","src/block_parser.dart","src/inline_parser.dart","src/version.dart","src/ast.dart","src/document.dart","src/emojis.dart","src/extension_set.dart","src/html_renderer.dart","src/util.dart"],"names":[],"mappings":"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","file":"markdown.ddc.js"}');
  // Exports:
  return {
    markdown: markdown,
    src__block_parser: block_parser,
    src__inline_parser: inline_parser,
    src__version: version,
    src__ast: ast,
    src__document: document$,
    src__emojis: emojis,
    src__extension_set: extension_set,
    src__html_renderer: html_renderer,
    src__util: util
  };
});

//# sourceMappingURL=markdown.ddc.js.map
