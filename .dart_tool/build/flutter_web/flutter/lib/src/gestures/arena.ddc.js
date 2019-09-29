define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const io = dart_sdk.io;
  const _http = dart_sdk._http;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const print = packages__flutter__src__foundation___bitfield_web.src__foundation__print;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const serialization = packages__flutter__src__foundation___bitfield_web.src__foundation__serialization;
  const isolates = packages__flutter__src__foundation___bitfield_web.src__foundation__isolates;
  const consolidate_response = packages__flutter__src__foundation___bitfield_web.src__foundation__consolidate_response;
  const synchronous_future = packages__flutter__src__foundation___bitfield_web.src__foundation__synchronous_future;
  const licenses$ = packages__flutter__src__foundation___bitfield_web.src__foundation__licenses;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const system_chrome = Object.create(dart.library);
  const text_editing = Object.create(dart.library);
  const eager = Object.create(dart.library);
  const system_sound = Object.create(dart.library);
  const drag$ = Object.create(dart.library);
  const raw_keyboard_android = Object.create(dart.library);
  const text_formatter = Object.create(dart.library);
  const raw_keyboard_fuchsia = Object.create(dart.library);
  const clipboard = Object.create(dart.library);
  const raw_keyboard_linux = Object.create(dart.library);
  const binary_messenger = Object.create(dart.library);
  const message_codec = Object.create(dart.library);
  const recognizer = Object.create(dart.library);
  const multidrag = Object.create(dart.library);
  const hit_test = Object.create(dart.library);
  const platform_channel = Object.create(dart.library);
  const system_navigator = Object.create(dart.library);
  const binding$ = Object.create(dart.library);
  const raw_keyboard = Object.create(dart.library);
  const pointer_signal_resolver = Object.create(dart.library);
  const system_channels = Object.create(dart.library);
  const constants = Object.create(dart.library);
  const raw_keyboard_macos = Object.create(dart.library);
  const tap = Object.create(dart.library);
  const velocity_tracker = Object.create(dart.library);
  const scale = Object.create(dart.library);
  const pointer_router = Object.create(dart.library);
  const arena = Object.create(dart.library);
  const converter = Object.create(dart.library);
  const force_press = Object.create(dart.library);
  const debug = Object.create(dart.library);
  const drag_details = Object.create(dart.library);
  const font_loader = Object.create(dart.library);
  const events = Object.create(dart.library);
  const long_press = Object.create(dart.library);
  const platform_messages = Object.create(dart.library);
  const message_codecs = Object.create(dart.library);
  const keyboard_key = Object.create(dart.library);
  const priority = Object.create(dart.library);
  const text_input = Object.create(dart.library);
  const keyboard_maps = Object.create(dart.library);
  const debug$ = Object.create(dart.library);
  const team = Object.create(dart.library);
  const multitap = Object.create(dart.library);
  const asset_bundle = Object.create(dart.library);
  const binding$0 = Object.create(dart.library);
  const monodrag = Object.create(dart.library);
  const haptic_feedback = Object.create(dart.library);
  const lsq_solver = Object.create(dart.library);
  const $toString = dartx.toString;
  const $runtimeType = dartx.runtimeType;
  const $add = dartx.add;
  const $substring = dartx.substring;
  const $hashCode = dartx.hashCode;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $containsValue = dartx.containsValue;
  const $_set = dartx._set;
  const $containsKey = dartx.containsKey;
  const $times = dartx['*'];
  const $isNotEmpty = dartx.isNotEmpty;
  const $toUpperCase = dartx.toUpperCase;
  const $replaceAll = dartx.replaceAll;
  const $length = dartx.length;
  const $runes = dartx.runes;
  const $allMatches = dartx.allMatches;
  const $map = dartx.map;
  const $join = dartx.join;
  const $keys = dartx.keys;
  const $toList = dartx.toList;
  const $forEach = dartx.forEach;
  const $abs = dartx.abs;
  const $last = dartx.last;
  const $every = dartx.every;
  const $cast = dartx.cast;
  const $contains = dartx.contains;
  const $codeUnitAt = dartx.codeUnitAt;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $toDouble = dartx.toDouble;
  const $putIfAbsent = dartx.putIfAbsent;
  const $any = dartx.any;
  const $first = dartx.first;
  const $padRight = dartx.padRight;
  const $isNaN = dartx.isNaN;
  const $clamp = dartx.clamp;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $lengthInBytes = dartx.lengthInBytes;
  const $leftShift = dartx['<<'];
  const $asUint8List = dartx.asUint8List;
  const $asByteData = dartx.asByteData;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $sign = dartx.sign;
  const $noSuchMethod = dartx.noSuchMethod;
  const $split = dartx.split;
  const $indexOf = dartx.indexOf;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfint$GestureArenaEntry = () => (IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, arena.GestureArenaEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let ListOfGestureArenaEntry = () => (ListOfGestureArenaEntry = dart.constFn(core.List$(arena.GestureArenaEntry)))();
  let IdentityMapOfint$PointerDeviceKind = () => (IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui.PointerDeviceKind)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  let intAndintToKeyboardSide = () => (intAndintToKeyboardSide = dart.constFn(dart.fnType(raw_keyboard.KeyboardSide, [core.int, core.int])))();
  let LinkedMapOfModifierKey$KeyboardSide = () => (LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let intAndintAndintToKeyboardSide = () => (intAndintAndintToKeyboardSide = dart.constFn(dart.fnType(raw_keyboard.KeyboardSide, [core.int, core.int, core.int])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let EnumPropertyOfGestureRecognizerState = () => (EnumPropertyOfGestureRecognizerState = dart.constFn(diagnostics.EnumProperty$(recognizer.GestureRecognizerState)))();
  let OffsetToDrag = () => (OffsetToDrag = dart.constFn(dart.fnType(drag$.Drag, [ui.Offset])))();
  let VoidToDrag = () => (VoidToDrag = dart.constFn(dart.fnType(drag$.Drag, [])))();
  let JSArrayOfHitTestEntry = () => (JSArrayOfHitTestEntry = dart.constFn(_interceptors.JSArray$(hit_test.HitTestEntry)))();
  let ListQueueOfMatrix4 = () => (ListQueueOfMatrix4 = dart.constFn(collection.ListQueue$(vector_math_64.Matrix4)))();
  let doubleTobool = () => (doubleTobool = dart.constFn(dart.fnType(core.bool, [core.double])))();
  let FutureOfByteData = () => (FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))();
  let ByteDataToFutureOfByteData = () => (ByteDataToFutureOfByteData = dart.constFn(dart.fnType(FutureOfByteData(), [typed_data.ByteData])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let ByteDataToFutureOfNull = () => (ByteDataToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [typed_data.ByteData])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListQueueOfPointerEvent = () => (ListQueueOfPointerEvent = dart.constFn(collection.ListQueue$(events.PointerEvent)))();
  let IdentityMapOfint$HitTestResult = () => (IdentityMapOfint$HitTestResult = dart.constFn(_js_helper.IdentityMap$(core.int, hit_test.HitTestResult)))();
  let DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerEvent = () => (IterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerEvent(), [])))();
  let DiagnosticsPropertyOfHitTestTarget = () => (DiagnosticsPropertyOfHitTestTarget = dart.constFn(diagnostics.DiagnosticsProperty$(hit_test.HitTestTarget)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let DiagnosticsPropertyOfLogicalKeyboardKey = () => (DiagnosticsPropertyOfLogicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.LogicalKeyboardKey)))();
  let DiagnosticsPropertyOfPhysicalKeyboardKey = () => (DiagnosticsPropertyOfPhysicalKeyboardKey = dart.constFn(diagnostics.DiagnosticsProperty$(keyboard_key.PhysicalKeyboardKey)))();
  let RawKeyEventTovoid = () => (RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])))();
  let JSArrayOfRawKeyEventTovoid = () => (JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(RawKeyEventTovoid())))();
  let LinkedHashSetOfLogicalKeyboardKey = () => (LinkedHashSetOfLogicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.LogicalKeyboardKey)))();
  let ListOfRawKeyEventTovoid = () => (ListOfRawKeyEventTovoid = dart.constFn(core.List$(RawKeyEventTovoid())))();
  let DiagnosticsPropertyOfPointerSignalEvent = () => (DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerSignalEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (IterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerSignalEvent(), [])))();
  let BasicMessageChannelOfString = () => (BasicMessageChannelOfString = dart.constFn(platform_channel.BasicMessageChannel$(core.String)))();
  let DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))();
  let ListOf_PointAtTime = () => (ListOf_PointAtTime = dart.constFn(core.List$(velocity_tracker._PointAtTime)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))();
  let IdentityMapOfint$Offset = () => (IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Offset)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let LinkedHashSetOf_RouteEntry = () => (LinkedHashSetOf_RouteEntry = dart.constFn(collection.LinkedHashSet$(pointer_router._RouteEntry)))();
  let IdentityMapOfint$LinkedHashSetOf_RouteEntry = () => (IdentityMapOfint$LinkedHashSetOf_RouteEntry = dart.constFn(_js_helper.IdentityMap$(core.int, LinkedHashSetOf_RouteEntry())))();
  let _HashSetOf_RouteEntry = () => (_HashSetOf_RouteEntry = dart.constFn(collection._HashSet$(pointer_router._RouteEntry)))();
  let VoidToLinkedHashSetOf_RouteEntry = () => (VoidToLinkedHashSetOf_RouteEntry = dart.constFn(dart.fnType(LinkedHashSetOf_RouteEntry(), [])))();
  let ListOf_RouteEntry = () => (ListOf_RouteEntry = dart.constFn(core.List$(pointer_router._RouteEntry)))();
  let _RouteEntryTobool = () => (_RouteEntryTobool = dart.constFn(dart.fnType(core.bool, [pointer_router._RouteEntry])))();
  let JSArrayOfGestureArenaMember = () => (JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(arena.GestureArenaMember)))();
  let GestureArenaMemberToString = () => (GestureArenaMemberToString = dart.constFn(dart.fnType(core.String, [arena.GestureArenaMember])))();
  let IdentityMapOfint$_GestureArena = () => (IdentityMapOfint$_GestureArena = dart.constFn(_js_helper.IdentityMap$(core.int, arena._GestureArena)))();
  let VoidTo_GestureArena = () => (VoidTo_GestureArena = dart.constFn(dart.fnType(arena._GestureArena, [])))();
  let VoidTo_PointerState = () => (VoidTo_PointerState = dart.constFn(dart.fnType(converter._PointerState, [])))();
  let SyncIterableOfPointerEvent = () => (SyncIterableOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(events.PointerEvent)))();
  let IdentityMapOfint$_PointerState = () => (IdentityMapOfint$_PointerState = dart.constFn(_js_helper.IdentityMap$(core.int, converter._PointerState)))();
  let doubleAnddoubleAnddoubleTodouble = () => (doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let JSArrayOfFutureOfUint8List = () => (JSArrayOfFutureOfUint8List = dart.constFn(_interceptors.JSArray$(FutureOfUint8List())))();
  let ByteDataToUint8List = () => (ByteDataToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [typed_data.ByteData])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let Uint8ListToFutureOfvoid = () => (Uint8ListToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [typed_data.Uint8List])))();
  let FutureOfUint8ListToFutureOfvoid = () => (FutureOfUint8ListToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [FutureOfUint8List()])))();
  let DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))();
  let EnumPropertyOfPointerDeviceKind = () => (EnumPropertyOfPointerDeviceKind = dart.constFn(diagnostics.EnumProperty$(ui.PointerDeviceKind)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey = () => (LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey = dart.constFn(_js_helper.LinkedMap$(keyboard_key.LogicalKeyboardKey, keyboard_key.LogicalKeyboardKey)))();
  let IdentityMapOfint$_CombiningGestureArenaMember = () => (IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, team._CombiningGestureArenaMember)))();
  let VoidTo_CombiningGestureArenaMember = () => (VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(team._CombiningGestureArenaMember, [])))();
  let IdentityMapOfint$_TapTracker = () => (IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapTracker)))();
  let IdentityMapOfint$_TapGesture = () => (IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapGesture)))();
  let ListOf_TapGesture = () => (ListOf_TapGesture = dart.constFn(core.List$(multitap._TapGesture)))();
  let ByteDataToString = () => (ByteDataToString = dart.constFn(dart.fnType(core.String, [typed_data.ByteData])))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let IdentityMapOfString$FutureOfString = () => (IdentityMapOfString$FutureOfString = dart.constFn(_js_helper.IdentityMap$(core.String, FutureOfString())))();
  let IdentityMapOfString$Future = () => (IdentityMapOfString$Future = dart.constFn(_js_helper.IdentityMap$(core.String, async.Future)))();
  let VoidToFutureOfString = () => (VoidToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [])))();
  let CompleterOfString = () => (CompleterOfString = dart.constFn(async.Completer$(core.String)))();
  let ListOfLicenseEntry = () => (ListOfLicenseEntry = dart.constFn(core.List$(licenses$.LicenseEntry)))();
  let CompleterOfListOfLicenseEntry = () => (CompleterOfListOfLicenseEntry = dart.constFn(async.Completer$(ListOfLicenseEntry())))();
  let StringToListOfLicenseEntry = () => (StringToListOfLicenseEntry = dart.constFn(dart.fnType(ListOfLicenseEntry(), [core.String])))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(licenses$.LicenseEntry)))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(licenses$.LicenseEntry)))();
  let JSArrayOfLicenseEntry = () => (JSArrayOfLicenseEntry = dart.constFn(_interceptors.JSArray$(licenses$.LicenseEntry)))();
  let StringToFutureOfNull = () => (StringToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.String])))();
  let CompleterOfByteData = () => (CompleterOfByteData = dart.constFn(async.Completer$(typed_data.ByteData)))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  let IdentityMapOfString$ByteDataToFutureOfByteData = () => (IdentityMapOfString$ByteDataToFutureOfByteData = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataToFutureOfByteData())))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let EnumPropertyOfDragStartBehavior = () => (EnumPropertyOfDragStartBehavior = dart.constFn(diagnostics.EnumProperty$(recognizer.DragStartBehavior)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.portraitUp",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.landscapeLeft",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.portraitDown",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$]: "DeviceOrientation.landscapeRight",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], system_chrome.DeviceOrientation);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$]: "SystemUiOverlay.top",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$]: "SystemUiOverlay.bottom",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.constList([C5 || CT.C5, C6 || CT.C6], system_chrome.SystemUiOverlay);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.light",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.dark",
        index: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4278190080.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        statusBarIconBrightness: C9 || CT.C9,
        statusBarBrightness: C10 || CT.C10,
        statusBarColor: null,
        systemNavigationBarIconBrightness: C9 || CT.C9,
        systemNavigationBarDividerColor: null,
        systemNavigationBarColor: C11 || CT.C11
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        statusBarIconBrightness: C10 || CT.C10,
        statusBarBrightness: C9 || CT.C9,
        statusBarColor: null,
        systemNavigationBarIconBrightness: C9 || CT.C9,
        systemNavigationBarDividerColor: null,
        systemNavigationBarColor: C11 || CT.C11
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: text_editing.TextRange.prototype,
        end: -1,
        start: -1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_name$0]: "SystemSoundType.click",
        index: 0
      });
    },
    get C16() {
      return C16 = dart.constList([C15 || CT.C15], system_sound.SystemSoundType);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$1]: "KeyboardSide.any",
        index: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$1]: "KeyboardSide.all",
        index: 3
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$1]: "KeyboardSide.left",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$1]: "KeyboardSide.right",
        index: 2
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.controlModifier",
        index: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.shiftModifier",
        index: 1
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.altModifier",
        index: 2
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.metaModifier",
        index: 3
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.capsLockModifier",
        index: 4
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.numLockModifier",
        index: 5
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.scrollLockModifier",
        index: 6
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.functionModifier",
        index: 7
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$1]: "ModifierKey.symbolModifier",
        index: 8
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        end: -1,
        start: -1,
        isDirectional: false,
        affinity: C14 || CT.C14,
        extentOffset: -1,
        baseOffset: -1
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$2]: "DragStartBehavior.down",
        index: 0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$2]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C33() {
      return C33 = dart.constList([C31 || CT.C31, C32 || CT.C32], recognizer.DragStartBehavior);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$2]: "GestureRecognizerState.ready",
        index: 0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$2]: "GestureRecognizerState.possible",
        index: 1
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$2]: "GestureRecognizerState.defunct",
        index: 2
      });
    },
    get C37() {
      return C37 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], recognizer.GestureRecognizerState);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 0,
        [_dx]: 0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: recognizer.OffsetPair.prototype,
        global: C39 || CT.C39,
        local: C39 || CT.C39
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 500000
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        messageCodec: C42 || CT.C42
      });
    },
    get C43() {
      return C43 = dart.constList([C17 || CT.C17, C19 || CT.C19, C20 || CT.C20, C18 || CT.C18], raw_keyboard.KeyboardSide);
    },
    get C44() {
      return C44 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], raw_keyboard.ModifierKey);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger]: null,
        codec: C46 || CT.C46,
        name: "flutter/navigation"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger]: null,
        codec: C46 || CT.C46,
        name: "flutter/platform"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        [_binaryMessenger]: null,
        codec: C46 || CT.C46,
        name: "flutter/textinput"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: message_codecs.JSONMessageCodec.prototype
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [_binaryMessenger]: null,
        codec: C50 || CT.C50,
        name: "flutter/keyevent"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: message_codecs.StringCodec.prototype
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: BasicMessageChannelOfString().prototype,
        [_binaryMessenger]: null,
        codec: C52 || CT.C52,
        name: "flutter/lifecycle"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [_binaryMessenger]: null,
        codec: C50 || CT.C50,
        name: "flutter/system"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        [_binaryMessenger]: null,
        codec: C42 || CT.C42,
        name: "flutter/accessibility"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger]: null,
        codec: C41 || CT.C41,
        name: "flutter/platform_views"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [_binaryMessenger]: null,
        codec: C46 || CT.C46,
        name: "flutter/skia"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 100000
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 150000
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 300000
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 40000
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 3000000
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        pixelsPerSecond: C39 || CT.C39
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$3]: "_ScaleState.ready",
        index: 0
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$3]: "_ScaleState.possible",
        index: 1
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$3]: "_ScaleState.accepted",
        index: 2
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$3]: "_ScaleState.started",
        index: 3
      });
    },
    get C67() {
      return C67 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], scale._ScaleState);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_name$4]: "GestureDisposition.accepted",
        index: 0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_name$4]: "GestureDisposition.rejected",
        index: 1
      });
    },
    get C70() {
      return C70 = dart.constList([C68 || CT.C68, C69 || CT.C69], arena.GestureDisposition);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.add",
        index: 1
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.hover",
        index: 3
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.down",
        index: 4
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.move",
        index: 5
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.up",
        index: 6
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.cancel",
        index: 0
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.remove",
        index: 2
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.scroll",
        index: 1
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.none",
        index: 0
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.unknown",
        index: 2
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$5]: "_ForceState.ready",
        index: 0
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$5]: "_ForceState.possible",
        index: 1
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$5]: "_ForceState.accepted",
        index: 2
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$5]: "_ForceState.started",
        index: 3
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$5]: "_ForceState.peaked",
        index: 4
      });
    },
    get C90() {
      return C90 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89], force_press._ForceState);
    },
    get C91() {
      return C91 = dart.fn(force_press.ForcePressGestureRecognizer._inverseLerp, doubleAnddoubleAnddoubleTodouble());
    },
    get C92() {
      return C92 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Message corrupted"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Invalid method call"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Expected envelope, got nothing"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Invalid envelope"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "None",
        keyId: 4294967296.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Hyper",
        keyId: 4294967312.0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Super Key",
        keyId: 4294967313.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Fn",
        keyId: 4294967314.0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Fn Lock",
        keyId: 4294967315.0
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Suspend",
        keyId: 4294967316.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Resume",
        keyId: 4294967317.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Turbo",
        keyId: 4294967318.0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Sleep",
        keyId: 4295032962.0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Wake Up",
        keyId: 4295032963.0
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Display Toggle Int Ext",
        keyId: 4295033013.0
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Reserved",
        keyId: 4295426048.0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Error Roll Over",
        keyId: 4295426049.0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Post Fail",
        keyId: 4295426050.0
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Error Undefined",
        keyId: 4295426051.0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "a",
        debugName: "Key A",
        keyId: 97
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "b",
        debugName: "Key B",
        keyId: 98
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "c",
        debugName: "Key C",
        keyId: 99
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "d",
        debugName: "Key D",
        keyId: 100
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "e",
        debugName: "Key E",
        keyId: 101
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "f",
        debugName: "Key F",
        keyId: 102
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "g",
        debugName: "Key G",
        keyId: 103
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "h",
        debugName: "Key H",
        keyId: 104
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "i",
        debugName: "Key I",
        keyId: 105
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "j",
        debugName: "Key J",
        keyId: 106
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "k",
        debugName: "Key K",
        keyId: 107
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "l",
        debugName: "Key L",
        keyId: 108
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "m",
        debugName: "Key M",
        keyId: 109
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "n",
        debugName: "Key N",
        keyId: 110
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "o",
        debugName: "Key O",
        keyId: 111
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "p",
        debugName: "Key P",
        keyId: 112
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "q",
        debugName: "Key Q",
        keyId: 113
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "r",
        debugName: "Key R",
        keyId: 114
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "s",
        debugName: "Key S",
        keyId: 115
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "t",
        debugName: "Key T",
        keyId: 116
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "u",
        debugName: "Key U",
        keyId: 117
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "v",
        debugName: "Key V",
        keyId: 118
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "w",
        debugName: "Key W",
        keyId: 119
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "x",
        debugName: "Key X",
        keyId: 120
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "y",
        debugName: "Key Y",
        keyId: 121
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "z",
        debugName: "Key Z",
        keyId: 122
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "1",
        debugName: "Digit 1",
        keyId: 49
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "2",
        debugName: "Digit 2",
        keyId: 50
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "3",
        debugName: "Digit 3",
        keyId: 51
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "4",
        debugName: "Digit 4",
        keyId: 52
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "5",
        debugName: "Digit 5",
        keyId: 53
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "6",
        debugName: "Digit 6",
        keyId: 54
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "7",
        debugName: "Digit 7",
        keyId: 55
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "8",
        debugName: "Digit 8",
        keyId: 56
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "9",
        debugName: "Digit 9",
        keyId: 57
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "0",
        debugName: "Digit 0",
        keyId: 48
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Enter",
        keyId: 4295426088.0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Escape",
        keyId: 4295426089.0
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Backspace",
        keyId: 4295426090.0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Tab",
        keyId: 4295426091.0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: " ",
        debugName: "Space",
        keyId: 32
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "-",
        debugName: "Minus",
        keyId: 45
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "=",
        debugName: "Equal",
        keyId: 61
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "[",
        debugName: "Bracket Left",
        keyId: 91
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "]",
        debugName: "Bracket Right",
        keyId: 93
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "\\",
        debugName: "Backslash",
        keyId: 92
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ";",
        debugName: "Semicolon",
        keyId: 59
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "'",
        debugName: "Quote",
        keyId: 39
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "`",
        debugName: "Backquote",
        keyId: 96
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ",",
        debugName: "Comma",
        keyId: 44
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ".",
        debugName: "Period",
        keyId: 46
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "/",
        debugName: "Slash",
        keyId: 47
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Caps Lock",
        keyId: 4295426105.0
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F1",
        keyId: 4295426106.0
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F2",
        keyId: 4295426107.0
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F3",
        keyId: 4295426108.0
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F4",
        keyId: 4295426109.0
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F5",
        keyId: 4295426110.0
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F6",
        keyId: 4295426111.0
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F7",
        keyId: 4295426112.0
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F8",
        keyId: 4295426113.0
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F9",
        keyId: 4295426114.0
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F10",
        keyId: 4295426115.0
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F11",
        keyId: 4295426116.0
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F12",
        keyId: 4295426117.0
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Print Screen",
        keyId: 4295426118.0
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Scroll Lock",
        keyId: 4295426119.0
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Pause",
        keyId: 4295426120.0
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Insert",
        keyId: 4295426121.0
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Home",
        keyId: 4295426122.0
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Page Up",
        keyId: 4295426123.0
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Delete",
        keyId: 4295426124.0
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "End",
        keyId: 4295426125.0
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Page Down",
        keyId: 4295426126.0
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Right",
        keyId: 4295426127.0
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Left",
        keyId: 4295426128.0
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Down",
        keyId: 4295426129.0
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Up",
        keyId: 4295426130.0
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Num Lock",
        keyId: 4295426131.0
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "/",
        debugName: "Numpad Divide",
        keyId: 4295426132.0
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "*",
        debugName: "Numpad Multiply",
        keyId: 4295426133.0
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "-",
        debugName: "Numpad Subtract",
        keyId: 4295426134.0
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "+",
        debugName: "Numpad Add",
        keyId: 4295426135.0
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Enter",
        keyId: 4295426136.0
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "1",
        debugName: "Numpad 1",
        keyId: 4295426137.0
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "2",
        debugName: "Numpad 2",
        keyId: 4295426138.0
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "3",
        debugName: "Numpad 3",
        keyId: 4295426139.0
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "4",
        debugName: "Numpad 4",
        keyId: 4295426140.0
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "5",
        debugName: "Numpad 5",
        keyId: 4295426141.0
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "6",
        debugName: "Numpad 6",
        keyId: 4295426142.0
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "7",
        debugName: "Numpad 7",
        keyId: 4295426143.0
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "8",
        debugName: "Numpad 8",
        keyId: 4295426144.0
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "9",
        debugName: "Numpad 9",
        keyId: 4295426145.0
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "0",
        debugName: "Numpad 0",
        keyId: 4295426146.0
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ".",
        debugName: "Numpad Decimal",
        keyId: 4295426147.0
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Intl Backslash",
        keyId: 4295426148.0
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Context Menu",
        keyId: 4295426149.0
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Power",
        keyId: 4295426150.0
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "=",
        debugName: "Numpad Equal",
        keyId: 4295426151.0
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F13",
        keyId: 4295426152.0
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F14",
        keyId: 4295426153.0
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F15",
        keyId: 4295426154.0
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F16",
        keyId: 4295426155.0
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F17",
        keyId: 4295426156.0
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F18",
        keyId: 4295426157.0
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F19",
        keyId: 4295426158.0
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F20",
        keyId: 4295426159.0
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F21",
        keyId: 4295426160.0
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F22",
        keyId: 4295426161.0
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F23",
        keyId: 4295426162.0
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F24",
        keyId: 4295426163.0
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Open",
        keyId: 4295426164.0
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Help",
        keyId: 4295426165.0
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Select",
        keyId: 4295426167.0
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Again",
        keyId: 4295426169.0
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Undo",
        keyId: 4295426170.0
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Cut",
        keyId: 4295426171.0
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Copy",
        keyId: 4295426172.0
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Paste",
        keyId: 4295426173.0
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Find",
        keyId: 4295426174.0
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Audio Volume Mute",
        keyId: 4295426175.0
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Audio Volume Up",
        keyId: 4295426176.0
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Audio Volume Down",
        keyId: 4295426177.0
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ",",
        debugName: "Numpad Comma",
        keyId: 4295426181.0
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Intl Ro",
        keyId: 4295426183.0
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Kana Mode",
        keyId: 4295426184.0
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Intl Yen",
        keyId: 4295426185.0
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Convert",
        keyId: 4295426186.0
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Non Convert",
        keyId: 4295426187.0
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 1",
        keyId: 4295426192.0
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 2",
        keyId: 4295426193.0
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 3",
        keyId: 4295426194.0
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 4",
        keyId: 4295426195.0
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 5",
        keyId: 4295426196.0
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Abort",
        keyId: 4295426203.0
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Props",
        keyId: 4295426211.0
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "(",
        debugName: "Numpad Paren Left",
        keyId: 4295426230.0
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ")",
        debugName: "Numpad Paren Right",
        keyId: 4295426231.0
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Backspace",
        keyId: 4295426235.0
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Store",
        keyId: 4295426256.0
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Recall",
        keyId: 4295426257.0
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Clear",
        keyId: 4295426258.0
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Add",
        keyId: 4295426259.0
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Subtract",
        keyId: 4295426260.0
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Sign Change",
        keyId: 4295426263.0
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Clear",
        keyId: 4295426264.0
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Clear Entry",
        keyId: 4295426265.0
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Control Left",
        keyId: 4295426272.0
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Shift Left",
        keyId: 4295426273.0
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Alt Left",
        keyId: 4295426274.0
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Meta Left",
        keyId: 4295426275.0
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Control Right",
        keyId: 4295426276.0
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Shift Right",
        keyId: 4295426277.0
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Alt Right",
        keyId: 4295426278.0
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Meta Right",
        keyId: 4295426279.0
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Info",
        keyId: 4295753824.0
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Closed Caption Toggle",
        keyId: 4295753825.0
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Up",
        keyId: 4295753839.0
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Down",
        keyId: 4295753840.0
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Toggle",
        keyId: 4295753842.0
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Minimum",
        keyId: 4295753843.0
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Maximum",
        keyId: 4295753844.0
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Auto",
        keyId: 4295753845.0
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Last",
        keyId: 4295753859.0
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Phone",
        keyId: 4295753868.0
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Program Guide",
        keyId: 4295753869.0
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Exit",
        keyId: 4295753876.0
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Channel Up",
        keyId: 4295753884.0
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Channel Down",
        keyId: 4295753885.0
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Play",
        keyId: 4295753904.0
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Record",
        keyId: 4295753906.0
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Fast Forward",
        keyId: 4295753907.0
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Rewind",
        keyId: 4295753908.0
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Track Next",
        keyId: 4295753909.0
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Track Previous",
        keyId: 4295753910.0
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Stop",
        keyId: 4295753911.0
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Eject",
        keyId: 4295753912.0
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Play Pause",
        keyId: 4295753933.0
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Speech Input Toggle",
        keyId: 4295753935.0
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Bass Boost",
        keyId: 4295753957.0
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Select",
        keyId: 4295754115.0
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Word Processor",
        keyId: 4295754116.0
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Spreadsheet",
        keyId: 4295754118.0
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Mail",
        keyId: 4295754122.0
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Contacts",
        keyId: 4295754125.0
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Calendar",
        keyId: 4295754126.0
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch App2",
        keyId: 4295754130.0
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch App1",
        keyId: 4295754132.0
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Internet Browser",
        keyId: 4295754134.0
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Log Off",
        keyId: 4295754140.0
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lock Screen",
        keyId: 4295754142.0
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Control Panel",
        keyId: 4295754143.0
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Select Task",
        keyId: 4295754146.0
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Documents",
        keyId: 4295754151.0
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Spell Check",
        keyId: 4295754155.0
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Keyboard Layout",
        keyId: 4295754158.0
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Screen Saver",
        keyId: 4295754161.0
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Assistant",
        keyId: 4295754187.0
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Audio Browser",
        keyId: 4295754167.0
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "New Key",
        keyId: 4295754241.0
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Close",
        keyId: 4295754243.0
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Save",
        keyId: 4295754247.0
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Print",
        keyId: 4295754248.0
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Search",
        keyId: 4295754273.0
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Home",
        keyId: 4295754275.0
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Back",
        keyId: 4295754276.0
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Forward",
        keyId: 4295754277.0
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Stop",
        keyId: 4295754278.0
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Refresh",
        keyId: 4295754279.0
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Favorites",
        keyId: 4295754282.0
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Zoom In",
        keyId: 4295754285.0
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Zoom Out",
        keyId: 4295754286.0
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Zoom Toggle",
        keyId: 4295754290.0
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Redo",
        keyId: 4295754361.0
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Mail Reply",
        keyId: 4295754377.0
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Mail Forward",
        keyId: 4295754379.0
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Mail Send",
        keyId: 4295754380.0
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Keyboard Layout Select",
        keyId: 4295754397.0
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Show All Windows",
        keyId: 4295754399.0
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 1",
        keyId: 4295360257.0
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 2",
        keyId: 4295360258.0
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 3",
        keyId: 4295360259.0
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 4",
        keyId: 4295360260.0
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 5",
        keyId: 4295360261.0
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 6",
        keyId: 4295360262.0
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 7",
        keyId: 4295360263.0
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 8",
        keyId: 4295360264.0
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 9",
        keyId: 4295360265.0
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 10",
        keyId: 4295360266.0
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 11",
        keyId: 4295360267.0
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 12",
        keyId: 4295360268.0
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 13",
        keyId: 4295360269.0
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 14",
        keyId: 4295360270.0
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 15",
        keyId: 4295360271.0
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button 16",
        keyId: 4295360272.0
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button A",
        keyId: 4295360273.0
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button B",
        keyId: 4295360274.0
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button C",
        keyId: 4295360275.0
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Left 1",
        keyId: 4295360276.0
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Left 2",
        keyId: 4295360277.0
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Mode",
        keyId: 4295360278.0
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Right 1",
        keyId: 4295360279.0
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Right 2",
        keyId: 4295360280.0
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Select",
        keyId: 4295360281.0
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Start",
        keyId: 4295360282.0
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Thumb Left",
        keyId: 4295360283.0
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Thumb Right",
        keyId: 4295360284.0
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button X",
        keyId: 4295360285.0
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Y",
        keyId: 4295360286.0
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Game Button Z",
        keyId: 4295360287.0
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Shift",
        keyId: 2203318681825.0
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Meta",
        keyId: 2203318681827.0
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Alt",
        keyId: 2203318681826.0
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Control",
        keyId: 2203318681824.0
      });
    },
    get C366() {
      return C366 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [4294967296.0, C97 || CT.C97, 4294967312.0, C98 || CT.C98, 4294967313.0, C99 || CT.C99, 4294967314.0, C100 || CT.C100, 4294967315.0, C101 || CT.C101, 4294967316.0, C102 || CT.C102, 4294967317.0, C103 || CT.C103, 4294967318.0, C104 || CT.C104, 4295032962.0, C105 || CT.C105, 4295032963.0, C106 || CT.C106, 4295033013.0, C107 || CT.C107, 4295426048.0, C108 || CT.C108, 4295426049.0, C109 || CT.C109, 4295426050.0, C110 || CT.C110, 4295426051.0, C111 || CT.C111, 97, C112 || CT.C112, 98, C113 || CT.C113, 99, C114 || CT.C114, 100, C115 || CT.C115, 101, C116 || CT.C116, 102, C117 || CT.C117, 103, C118 || CT.C118, 104, C119 || CT.C119, 105, C120 || CT.C120, 106, C121 || CT.C121, 107, C122 || CT.C122, 108, C123 || CT.C123, 109, C124 || CT.C124, 110, C125 || CT.C125, 111, C126 || CT.C126, 112, C127 || CT.C127, 113, C128 || CT.C128, 114, C129 || CT.C129, 115, C130 || CT.C130, 116, C131 || CT.C131, 117, C132 || CT.C132, 118, C133 || CT.C133, 119, C134 || CT.C134, 120, C135 || CT.C135, 121, C136 || CT.C136, 122, C137 || CT.C137, 49, C138 || CT.C138, 50, C139 || CT.C139, 51, C140 || CT.C140, 52, C141 || CT.C141, 53, C142 || CT.C142, 54, C143 || CT.C143, 55, C144 || CT.C144, 56, C145 || CT.C145, 57, C146 || CT.C146, 48, C147 || CT.C147, 4295426088.0, C148 || CT.C148, 4295426089.0, C149 || CT.C149, 4295426090.0, C150 || CT.C150, 4295426091.0, C151 || CT.C151, 32, C152 || CT.C152, 45, C153 || CT.C153, 61, C154 || CT.C154, 91, C155 || CT.C155, 93, C156 || CT.C156, 92, C157 || CT.C157, 59, C158 || CT.C158, 39, C159 || CT.C159, 96, C160 || CT.C160, 44, C161 || CT.C161, 46, C162 || CT.C162, 47, C163 || CT.C163, 4295426105.0, C164 || CT.C164, 4295426106.0, C165 || CT.C165, 4295426107.0, C166 || CT.C166, 4295426108.0, C167 || CT.C167, 4295426109.0, C168 || CT.C168, 4295426110.0, C169 || CT.C169, 4295426111.0, C170 || CT.C170, 4295426112.0, C171 || CT.C171, 4295426113.0, C172 || CT.C172, 4295426114.0, C173 || CT.C173, 4295426115.0, C174 || CT.C174, 4295426116.0, C175 || CT.C175, 4295426117.0, C176 || CT.C176, 4295426118.0, C177 || CT.C177, 4295426119.0, C178 || CT.C178, 4295426120.0, C179 || CT.C179, 4295426121.0, C180 || CT.C180, 4295426122.0, C181 || CT.C181, 4295426123.0, C182 || CT.C182, 4295426124.0, C183 || CT.C183, 4295426125.0, C184 || CT.C184, 4295426126.0, C185 || CT.C185, 4295426127.0, C186 || CT.C186, 4295426128.0, C187 || CT.C187, 4295426129.0, C188 || CT.C188, 4295426130.0, C189 || CT.C189, 4295426131.0, C190 || CT.C190, 4295426132.0, C191 || CT.C191, 4295426133.0, C192 || CT.C192, 4295426134.0, C193 || CT.C193, 4295426135.0, C194 || CT.C194, 4295426136.0, C195 || CT.C195, 4295426137.0, C196 || CT.C196, 4295426138.0, C197 || CT.C197, 4295426139.0, C198 || CT.C198, 4295426140.0, C199 || CT.C199, 4295426141.0, C200 || CT.C200, 4295426142.0, C201 || CT.C201, 4295426143.0, C202 || CT.C202, 4295426144.0, C203 || CT.C203, 4295426145.0, C204 || CT.C204, 4295426146.0, C205 || CT.C205, 4295426147.0, C206 || CT.C206, 4295426148.0, C207 || CT.C207, 4295426149.0, C208 || CT.C208, 4295426150.0, C209 || CT.C209, 4295426151.0, C210 || CT.C210, 4295426152.0, C211 || CT.C211, 4295426153.0, C212 || CT.C212, 4295426154.0, C213 || CT.C213, 4295426155.0, C214 || CT.C214, 4295426156.0, C215 || CT.C215, 4295426157.0, C216 || CT.C216, 4295426158.0, C217 || CT.C217, 4295426159.0, C218 || CT.C218, 4295426160.0, C219 || CT.C219, 4295426161.0, C220 || CT.C220, 4295426162.0, C221 || CT.C221, 4295426163.0, C222 || CT.C222, 4295426164.0, C223 || CT.C223, 4295426165.0, C224 || CT.C224, 4295426167.0, C225 || CT.C225, 4295426169.0, C226 || CT.C226, 4295426170.0, C227 || CT.C227, 4295426171.0, C228 || CT.C228, 4295426172.0, C229 || CT.C229, 4295426173.0, C230 || CT.C230, 4295426174.0, C231 || CT.C231, 4295426175.0, C232 || CT.C232, 4295426176.0, C233 || CT.C233, 4295426177.0, C234 || CT.C234, 4295426181.0, C235 || CT.C235, 4295426183.0, C236 || CT.C236, 4295426184.0, C237 || CT.C237, 4295426185.0, C238 || CT.C238, 4295426186.0, C239 || CT.C239, 4295426187.0, C240 || CT.C240, 4295426192.0, C241 || CT.C241, 4295426193.0, C242 || CT.C242, 4295426194.0, C243 || CT.C243, 4295426195.0, C244 || CT.C244, 4295426196.0, C245 || CT.C245, 4295426203.0, C246 || CT.C246, 4295426211.0, C247 || CT.C247, 4295426230.0, C248 || CT.C248, 4295426231.0, C249 || CT.C249, 4295426235.0, C250 || CT.C250, 4295426256.0, C251 || CT.C251, 4295426257.0, C252 || CT.C252, 4295426258.0, C253 || CT.C253, 4295426259.0, C254 || CT.C254, 4295426260.0, C255 || CT.C255, 4295426263.0, C256 || CT.C256, 4295426264.0, C257 || CT.C257, 4295426265.0, C258 || CT.C258, 4295426272.0, C259 || CT.C259, 4295426273.0, C260 || CT.C260, 4295426274.0, C261 || CT.C261, 4295426275.0, C262 || CT.C262, 4295426276.0, C263 || CT.C263, 4295426277.0, C264 || CT.C264, 4295426278.0, C265 || CT.C265, 4295426279.0, C266 || CT.C266, 4295753824.0, C267 || CT.C267, 4295753825.0, C268 || CT.C268, 4295753839.0, C269 || CT.C269, 4295753840.0, C270 || CT.C270, 4295753842.0, C271 || CT.C271, 4295753843.0, C272 || CT.C272, 4295753844.0, C273 || CT.C273, 4295753845.0, C274 || CT.C274, 4295753859.0, C275 || CT.C275, 4295753868.0, C276 || CT.C276, 4295753869.0, C277 || CT.C277, 4295753876.0, C278 || CT.C278, 4295753884.0, C279 || CT.C279, 4295753885.0, C280 || CT.C280, 4295753904.0, C281 || CT.C281, 4295753906.0, C282 || CT.C282, 4295753907.0, C283 || CT.C283, 4295753908.0, C284 || CT.C284, 4295753909.0, C285 || CT.C285, 4295753910.0, C286 || CT.C286, 4295753911.0, C287 || CT.C287, 4295753912.0, C288 || CT.C288, 4295753933.0, C289 || CT.C289, 4295753935.0, C290 || CT.C290, 4295753957.0, C291 || CT.C291, 4295754115.0, C292 || CT.C292, 4295754116.0, C293 || CT.C293, 4295754118.0, C294 || CT.C294, 4295754122.0, C295 || CT.C295, 4295754125.0, C296 || CT.C296, 4295754126.0, C297 || CT.C297, 4295754130.0, C298 || CT.C298, 4295754132.0, C299 || CT.C299, 4295754134.0, C300 || CT.C300, 4295754140.0, C301 || CT.C301, 4295754142.0, C302 || CT.C302, 4295754143.0, C303 || CT.C303, 4295754146.0, C304 || CT.C304, 4295754151.0, C305 || CT.C305, 4295754155.0, C306 || CT.C306, 4295754158.0, C307 || CT.C307, 4295754161.0, C308 || CT.C308, 4295754187.0, C309 || CT.C309, 4295754167.0, C310 || CT.C310, 4295754241.0, C311 || CT.C311, 4295754243.0, C312 || CT.C312, 4295754247.0, C313 || CT.C313, 4295754248.0, C314 || CT.C314, 4295754273.0, C315 || CT.C315, 4295754275.0, C316 || CT.C316, 4295754276.0, C317 || CT.C317, 4295754277.0, C318 || CT.C318, 4295754278.0, C319 || CT.C319, 4295754279.0, C320 || CT.C320, 4295754282.0, C321 || CT.C321, 4295754285.0, C322 || CT.C322, 4295754286.0, C323 || CT.C323, 4295754290.0, C324 || CT.C324, 4295754361.0, C325 || CT.C325, 4295754377.0, C326 || CT.C326, 4295754379.0, C327 || CT.C327, 4295754380.0, C328 || CT.C328, 4295754397.0, C329 || CT.C329, 4295754399.0, C330 || CT.C330, 4295360257.0, C331 || CT.C331, 4295360258.0, C332 || CT.C332, 4295360259.0, C333 || CT.C333, 4295360260.0, C334 || CT.C334, 4295360261.0, C335 || CT.C335, 4295360262.0, C336 || CT.C336, 4295360263.0, C337 || CT.C337, 4295360264.0, C338 || CT.C338, 4295360265.0, C339 || CT.C339, 4295360266.0, C340 || CT.C340, 4295360267.0, C341 || CT.C341, 4295360268.0, C342 || CT.C342, 4295360269.0, C343 || CT.C343, 4295360270.0, C344 || CT.C344, 4295360271.0, C345 || CT.C345, 4295360272.0, C346 || CT.C346, 4295360273.0, C347 || CT.C347, 4295360274.0, C348 || CT.C348, 4295360275.0, C349 || CT.C349, 4295360276.0, C350 || CT.C350, 4295360277.0, C351 || CT.C351, 4295360278.0, C352 || CT.C352, 4295360279.0, C353 || CT.C353, 4295360280.0, C354 || CT.C354, 4295360281.0, C355 || CT.C355, 4295360282.0, C356 || CT.C356, 4295360283.0, C357 || CT.C357, 4295360284.0, C358 || CT.C358, 4295360285.0, C359 || CT.C359, 4295360286.0, C360 || CT.C360, 4295360287.0, C361 || CT.C361, 2203318681825.0, C362 || CT.C362, 2203318681827.0, C363 || CT.C363, 2203318681826.0, C364 || CT.C364, 2203318681824.0, C365 || CT.C365]);
    },
    get C367() {
      return C367 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "None",
        usbHidUsage: 0
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Hyper",
        usbHidUsage: 16
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Super Key",
        usbHidUsage: 17
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Fn",
        usbHidUsage: 18
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Fn Lock",
        usbHidUsage: 19
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Suspend",
        usbHidUsage: 20
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Resume",
        usbHidUsage: 21
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Turbo",
        usbHidUsage: 22
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Sleep",
        usbHidUsage: 65666
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Wake Up",
        usbHidUsage: 65667
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Display Toggle Int Ext",
        usbHidUsage: 65717
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Reserved",
        usbHidUsage: 458752
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Error Roll Over",
        usbHidUsage: 458753
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Post Fail",
        usbHidUsage: 458754
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Error Undefined",
        usbHidUsage: 458755
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key A",
        usbHidUsage: 458756
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key B",
        usbHidUsage: 458757
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key C",
        usbHidUsage: 458758
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key D",
        usbHidUsage: 458759
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key E",
        usbHidUsage: 458760
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key F",
        usbHidUsage: 458761
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key G",
        usbHidUsage: 458762
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key H",
        usbHidUsage: 458763
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key I",
        usbHidUsage: 458764
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key J",
        usbHidUsage: 458765
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key K",
        usbHidUsage: 458766
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key L",
        usbHidUsage: 458767
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key M",
        usbHidUsage: 458768
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key N",
        usbHidUsage: 458769
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key O",
        usbHidUsage: 458770
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key P",
        usbHidUsage: 458771
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key Q",
        usbHidUsage: 458772
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key R",
        usbHidUsage: 458773
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key S",
        usbHidUsage: 458774
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key T",
        usbHidUsage: 458775
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key U",
        usbHidUsage: 458776
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key V",
        usbHidUsage: 458777
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key W",
        usbHidUsage: 458778
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key X",
        usbHidUsage: 458779
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key Y",
        usbHidUsage: 458780
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key Z",
        usbHidUsage: 458781
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 1",
        usbHidUsage: 458782
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 2",
        usbHidUsage: 458783
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 3",
        usbHidUsage: 458784
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 4",
        usbHidUsage: 458785
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 5",
        usbHidUsage: 458786
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 6",
        usbHidUsage: 458787
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 7",
        usbHidUsage: 458788
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 8",
        usbHidUsage: 458789
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 9",
        usbHidUsage: 458790
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 0",
        usbHidUsage: 458791
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Enter",
        usbHidUsage: 458792
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Escape",
        usbHidUsage: 458793
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Backspace",
        usbHidUsage: 458794
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Tab",
        usbHidUsage: 458795
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Space",
        usbHidUsage: 458796
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Minus",
        usbHidUsage: 458797
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Equal",
        usbHidUsage: 458798
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Bracket Left",
        usbHidUsage: 458799
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Bracket Right",
        usbHidUsage: 458800
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Backslash",
        usbHidUsage: 458801
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Semicolon",
        usbHidUsage: 458803
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Quote",
        usbHidUsage: 458804
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Backquote",
        usbHidUsage: 458805
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Comma",
        usbHidUsage: 458806
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Period",
        usbHidUsage: 458807
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Slash",
        usbHidUsage: 458808
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Caps Lock",
        usbHidUsage: 458809
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F1",
        usbHidUsage: 458810
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F2",
        usbHidUsage: 458811
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F3",
        usbHidUsage: 458812
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F4",
        usbHidUsage: 458813
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F5",
        usbHidUsage: 458814
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F6",
        usbHidUsage: 458815
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F7",
        usbHidUsage: 458816
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F8",
        usbHidUsage: 458817
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F9",
        usbHidUsage: 458818
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F10",
        usbHidUsage: 458819
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F11",
        usbHidUsage: 458820
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F12",
        usbHidUsage: 458821
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Print Screen",
        usbHidUsage: 458822
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Scroll Lock",
        usbHidUsage: 458823
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Pause",
        usbHidUsage: 458824
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Insert",
        usbHidUsage: 458825
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Home",
        usbHidUsage: 458826
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Page Up",
        usbHidUsage: 458827
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Delete",
        usbHidUsage: 458828
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "End",
        usbHidUsage: 458829
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Page Down",
        usbHidUsage: 458830
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Right",
        usbHidUsage: 458831
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Left",
        usbHidUsage: 458832
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Down",
        usbHidUsage: 458833
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Up",
        usbHidUsage: 458834
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Num Lock",
        usbHidUsage: 458835
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Divide",
        usbHidUsage: 458836
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Multiply",
        usbHidUsage: 458837
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Subtract",
        usbHidUsage: 458838
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Add",
        usbHidUsage: 458839
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Enter",
        usbHidUsage: 458840
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 1",
        usbHidUsage: 458841
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 2",
        usbHidUsage: 458842
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 3",
        usbHidUsage: 458843
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 4",
        usbHidUsage: 458844
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 5",
        usbHidUsage: 458845
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 6",
        usbHidUsage: 458846
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 7",
        usbHidUsage: 458847
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 8",
        usbHidUsage: 458848
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 9",
        usbHidUsage: 458849
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 0",
        usbHidUsage: 458850
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Decimal",
        usbHidUsage: 458851
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Intl Backslash",
        usbHidUsage: 458852
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Context Menu",
        usbHidUsage: 458853
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Power",
        usbHidUsage: 458854
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Equal",
        usbHidUsage: 458855
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F13",
        usbHidUsage: 458856
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F14",
        usbHidUsage: 458857
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F15",
        usbHidUsage: 458858
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F16",
        usbHidUsage: 458859
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F17",
        usbHidUsage: 458860
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F18",
        usbHidUsage: 458861
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F19",
        usbHidUsage: 458862
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F20",
        usbHidUsage: 458863
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F21",
        usbHidUsage: 458864
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F22",
        usbHidUsage: 458865
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F23",
        usbHidUsage: 458866
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F24",
        usbHidUsage: 458867
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Open",
        usbHidUsage: 458868
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Help",
        usbHidUsage: 458869
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Select",
        usbHidUsage: 458871
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Again",
        usbHidUsage: 458873
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Undo",
        usbHidUsage: 458874
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Cut",
        usbHidUsage: 458875
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Copy",
        usbHidUsage: 458876
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Paste",
        usbHidUsage: 458877
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Find",
        usbHidUsage: 458878
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Audio Volume Mute",
        usbHidUsage: 458879
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Audio Volume Up",
        usbHidUsage: 458880
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Audio Volume Down",
        usbHidUsage: 458881
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Comma",
        usbHidUsage: 458885
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Intl Ro",
        usbHidUsage: 458887
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Kana Mode",
        usbHidUsage: 458888
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Intl Yen",
        usbHidUsage: 458889
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Convert",
        usbHidUsage: 458890
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Non Convert",
        usbHidUsage: 458891
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 1",
        usbHidUsage: 458896
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 2",
        usbHidUsage: 458897
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 3",
        usbHidUsage: 458898
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 4",
        usbHidUsage: 458899
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 5",
        usbHidUsage: 458900
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Abort",
        usbHidUsage: 458907
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Props",
        usbHidUsage: 458915
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Paren Left",
        usbHidUsage: 458934
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Paren Right",
        usbHidUsage: 458935
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Backspace",
        usbHidUsage: 458939
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Store",
        usbHidUsage: 458960
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Recall",
        usbHidUsage: 458961
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Clear",
        usbHidUsage: 458962
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Add",
        usbHidUsage: 458963
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Subtract",
        usbHidUsage: 458964
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Sign Change",
        usbHidUsage: 458967
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Clear",
        usbHidUsage: 458968
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Clear Entry",
        usbHidUsage: 458969
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Control Left",
        usbHidUsage: 458976
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Shift Left",
        usbHidUsage: 458977
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Alt Left",
        usbHidUsage: 458978
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Meta Left",
        usbHidUsage: 458979
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Control Right",
        usbHidUsage: 458980
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Shift Right",
        usbHidUsage: 458981
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Alt Right",
        usbHidUsage: 458982
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Meta Right",
        usbHidUsage: 458983
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Info",
        usbHidUsage: 786528
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Closed Caption Toggle",
        usbHidUsage: 786529
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Up",
        usbHidUsage: 786543
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Down",
        usbHidUsage: 786544
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Toggle",
        usbHidUsage: 786546
      });
    },
    get C542() {
      return C542 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Minimum",
        usbHidUsage: 786547
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Maximum",
        usbHidUsage: 786548
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Auto",
        usbHidUsage: 786549
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Last",
        usbHidUsage: 786563
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Phone",
        usbHidUsage: 786572
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Program Guide",
        usbHidUsage: 786573
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Exit",
        usbHidUsage: 786580
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Channel Up",
        usbHidUsage: 786588
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Channel Down",
        usbHidUsage: 786589
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Play",
        usbHidUsage: 786608
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Record",
        usbHidUsage: 786610
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Fast Forward",
        usbHidUsage: 786611
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Rewind",
        usbHidUsage: 786612
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Track Next",
        usbHidUsage: 786613
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Track Previous",
        usbHidUsage: 786614
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Stop",
        usbHidUsage: 786615
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Eject",
        usbHidUsage: 786616
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Play Pause",
        usbHidUsage: 786637
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Speech Input Toggle",
        usbHidUsage: 786639
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Bass Boost",
        usbHidUsage: 786661
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Select",
        usbHidUsage: 786819
      });
    },
    get C563() {
      return C563 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Word Processor",
        usbHidUsage: 786820
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Spreadsheet",
        usbHidUsage: 786822
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Mail",
        usbHidUsage: 786826
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Contacts",
        usbHidUsage: 786829
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Calendar",
        usbHidUsage: 786830
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch App2",
        usbHidUsage: 786834
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch App1",
        usbHidUsage: 786836
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Internet Browser",
        usbHidUsage: 786838
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Log Off",
        usbHidUsage: 786844
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lock Screen",
        usbHidUsage: 786846
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Control Panel",
        usbHidUsage: 786847
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Select Task",
        usbHidUsage: 786850
      });
    },
    get C575() {
      return C575 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Documents",
        usbHidUsage: 786855
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Spell Check",
        usbHidUsage: 786859
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Keyboard Layout",
        usbHidUsage: 786862
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Screen Saver",
        usbHidUsage: 786865
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Assistant",
        usbHidUsage: 786891
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Audio Browser",
        usbHidUsage: 786871
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "New Key",
        usbHidUsage: 786945
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Close",
        usbHidUsage: 786947
      });
    },
    get C583() {
      return C583 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Save",
        usbHidUsage: 786951
      });
    },
    get C584() {
      return C584 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Print",
        usbHidUsage: 786952
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Search",
        usbHidUsage: 786977
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Home",
        usbHidUsage: 786979
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Back",
        usbHidUsage: 786980
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Forward",
        usbHidUsage: 786981
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Stop",
        usbHidUsage: 786982
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Refresh",
        usbHidUsage: 786983
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Favorites",
        usbHidUsage: 786986
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Zoom In",
        usbHidUsage: 786989
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Zoom Out",
        usbHidUsage: 786990
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Zoom Toggle",
        usbHidUsage: 786994
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Redo",
        usbHidUsage: 787065
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Mail Reply",
        usbHidUsage: 787081
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Mail Forward",
        usbHidUsage: 787083
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Mail Send",
        usbHidUsage: 787084
      });
    },
    get C599() {
      return C599 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Keyboard Layout Select",
        usbHidUsage: 787101
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Show All Windows",
        usbHidUsage: 787103
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 1",
        usbHidUsage: 392961
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 2",
        usbHidUsage: 392962
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 3",
        usbHidUsage: 392963
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 4",
        usbHidUsage: 392964
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 5",
        usbHidUsage: 392965
      });
    },
    get C606() {
      return C606 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 6",
        usbHidUsage: 392966
      });
    },
    get C607() {
      return C607 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 7",
        usbHidUsage: 392967
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 8",
        usbHidUsage: 392968
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 9",
        usbHidUsage: 392969
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 10",
        usbHidUsage: 392970
      });
    },
    get C611() {
      return C611 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 11",
        usbHidUsage: 392971
      });
    },
    get C612() {
      return C612 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 12",
        usbHidUsage: 392972
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 13",
        usbHidUsage: 392973
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 14",
        usbHidUsage: 392974
      });
    },
    get C615() {
      return C615 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 15",
        usbHidUsage: 392975
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button 16",
        usbHidUsage: 392976
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button A",
        usbHidUsage: 392977
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button B",
        usbHidUsage: 392978
      });
    },
    get C619() {
      return C619 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button C",
        usbHidUsage: 392979
      });
    },
    get C620() {
      return C620 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Left 1",
        usbHidUsage: 392980
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Left 2",
        usbHidUsage: 392981
      });
    },
    get C622() {
      return C622 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Mode",
        usbHidUsage: 392982
      });
    },
    get C623() {
      return C623 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Right 1",
        usbHidUsage: 392983
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Right 2",
        usbHidUsage: 392984
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Select",
        usbHidUsage: 392985
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Start",
        usbHidUsage: 392986
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Thumb Left",
        usbHidUsage: 392987
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Thumb Right",
        usbHidUsage: 392988
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button X",
        usbHidUsage: 392989
      });
    },
    get C630() {
      return C630 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Y",
        usbHidUsage: 392990
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Game Button Z",
        usbHidUsage: 392991
      });
    },
    get C632() {
      return C632 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [0, C367 || CT.C367, 16, C368 || CT.C368, 17, C369 || CT.C369, 18, C370 || CT.C370, 19, C371 || CT.C371, 20, C372 || CT.C372, 21, C373 || CT.C373, 22, C374 || CT.C374, 65666, C375 || CT.C375, 65667, C376 || CT.C376, 65717, C377 || CT.C377, 458752, C378 || CT.C378, 458753, C379 || CT.C379, 458754, C380 || CT.C380, 458755, C381 || CT.C381, 458756, C382 || CT.C382, 458757, C383 || CT.C383, 458758, C384 || CT.C384, 458759, C385 || CT.C385, 458760, C386 || CT.C386, 458761, C387 || CT.C387, 458762, C388 || CT.C388, 458763, C389 || CT.C389, 458764, C390 || CT.C390, 458765, C391 || CT.C391, 458766, C392 || CT.C392, 458767, C393 || CT.C393, 458768, C394 || CT.C394, 458769, C395 || CT.C395, 458770, C396 || CT.C396, 458771, C397 || CT.C397, 458772, C398 || CT.C398, 458773, C399 || CT.C399, 458774, C400 || CT.C400, 458775, C401 || CT.C401, 458776, C402 || CT.C402, 458777, C403 || CT.C403, 458778, C404 || CT.C404, 458779, C405 || CT.C405, 458780, C406 || CT.C406, 458781, C407 || CT.C407, 458782, C408 || CT.C408, 458783, C409 || CT.C409, 458784, C410 || CT.C410, 458785, C411 || CT.C411, 458786, C412 || CT.C412, 458787, C413 || CT.C413, 458788, C414 || CT.C414, 458789, C415 || CT.C415, 458790, C416 || CT.C416, 458791, C417 || CT.C417, 458792, C418 || CT.C418, 458793, C419 || CT.C419, 458794, C420 || CT.C420, 458795, C421 || CT.C421, 458796, C422 || CT.C422, 458797, C423 || CT.C423, 458798, C424 || CT.C424, 458799, C425 || CT.C425, 458800, C426 || CT.C426, 458801, C427 || CT.C427, 458803, C428 || CT.C428, 458804, C429 || CT.C429, 458805, C430 || CT.C430, 458806, C431 || CT.C431, 458807, C432 || CT.C432, 458808, C433 || CT.C433, 458809, C434 || CT.C434, 458810, C435 || CT.C435, 458811, C436 || CT.C436, 458812, C437 || CT.C437, 458813, C438 || CT.C438, 458814, C439 || CT.C439, 458815, C440 || CT.C440, 458816, C441 || CT.C441, 458817, C442 || CT.C442, 458818, C443 || CT.C443, 458819, C444 || CT.C444, 458820, C445 || CT.C445, 458821, C446 || CT.C446, 458822, C447 || CT.C447, 458823, C448 || CT.C448, 458824, C449 || CT.C449, 458825, C450 || CT.C450, 458826, C451 || CT.C451, 458827, C452 || CT.C452, 458828, C453 || CT.C453, 458829, C454 || CT.C454, 458830, C455 || CT.C455, 458831, C456 || CT.C456, 458832, C457 || CT.C457, 458833, C458 || CT.C458, 458834, C459 || CT.C459, 458835, C460 || CT.C460, 458836, C461 || CT.C461, 458837, C462 || CT.C462, 458838, C463 || CT.C463, 458839, C464 || CT.C464, 458840, C465 || CT.C465, 458841, C466 || CT.C466, 458842, C467 || CT.C467, 458843, C468 || CT.C468, 458844, C469 || CT.C469, 458845, C470 || CT.C470, 458846, C471 || CT.C471, 458847, C472 || CT.C472, 458848, C473 || CT.C473, 458849, C474 || CT.C474, 458850, C475 || CT.C475, 458851, C476 || CT.C476, 458852, C477 || CT.C477, 458853, C478 || CT.C478, 458854, C479 || CT.C479, 458855, C480 || CT.C480, 458856, C481 || CT.C481, 458857, C482 || CT.C482, 458858, C483 || CT.C483, 458859, C484 || CT.C484, 458860, C485 || CT.C485, 458861, C486 || CT.C486, 458862, C487 || CT.C487, 458863, C488 || CT.C488, 458864, C489 || CT.C489, 458865, C490 || CT.C490, 458866, C491 || CT.C491, 458867, C492 || CT.C492, 458868, C493 || CT.C493, 458869, C494 || CT.C494, 458871, C495 || CT.C495, 458873, C496 || CT.C496, 458874, C497 || CT.C497, 458875, C498 || CT.C498, 458876, C499 || CT.C499, 458877, C500 || CT.C500, 458878, C501 || CT.C501, 458879, C502 || CT.C502, 458880, C503 || CT.C503, 458881, C504 || CT.C504, 458885, C505 || CT.C505, 458887, C506 || CT.C506, 458888, C507 || CT.C507, 458889, C508 || CT.C508, 458890, C509 || CT.C509, 458891, C510 || CT.C510, 458896, C511 || CT.C511, 458897, C512 || CT.C512, 458898, C513 || CT.C513, 458899, C514 || CT.C514, 458900, C515 || CT.C515, 458907, C516 || CT.C516, 458915, C517 || CT.C517, 458934, C518 || CT.C518, 458935, C519 || CT.C519, 458939, C520 || CT.C520, 458960, C521 || CT.C521, 458961, C522 || CT.C522, 458962, C523 || CT.C523, 458963, C524 || CT.C524, 458964, C525 || CT.C525, 458967, C526 || CT.C526, 458968, C527 || CT.C527, 458969, C528 || CT.C528, 458976, C529 || CT.C529, 458977, C530 || CT.C530, 458978, C531 || CT.C531, 458979, C532 || CT.C532, 458980, C533 || CT.C533, 458981, C534 || CT.C534, 458982, C535 || CT.C535, 458983, C536 || CT.C536, 786528, C537 || CT.C537, 786529, C538 || CT.C538, 786543, C539 || CT.C539, 786544, C540 || CT.C540, 786546, C541 || CT.C541, 786547, C542 || CT.C542, 786548, C543 || CT.C543, 786549, C544 || CT.C544, 786563, C545 || CT.C545, 786572, C546 || CT.C546, 786573, C547 || CT.C547, 786580, C548 || CT.C548, 786588, C549 || CT.C549, 786589, C550 || CT.C550, 786608, C551 || CT.C551, 786610, C552 || CT.C552, 786611, C553 || CT.C553, 786612, C554 || CT.C554, 786613, C555 || CT.C555, 786614, C556 || CT.C556, 786615, C557 || CT.C557, 786616, C558 || CT.C558, 786637, C559 || CT.C559, 786639, C560 || CT.C560, 786661, C561 || CT.C561, 786819, C562 || CT.C562, 786820, C563 || CT.C563, 786822, C564 || CT.C564, 786826, C565 || CT.C565, 786829, C566 || CT.C566, 786830, C567 || CT.C567, 786834, C568 || CT.C568, 786836, C569 || CT.C569, 786838, C570 || CT.C570, 786844, C571 || CT.C571, 786846, C572 || CT.C572, 786847, C573 || CT.C573, 786850, C574 || CT.C574, 786855, C575 || CT.C575, 786859, C576 || CT.C576, 786862, C577 || CT.C577, 786865, C578 || CT.C578, 786891, C579 || CT.C579, 786871, C580 || CT.C580, 786945, C581 || CT.C581, 786947, C582 || CT.C582, 786951, C583 || CT.C583, 786952, C584 || CT.C584, 786977, C585 || CT.C585, 786979, C586 || CT.C586, 786980, C587 || CT.C587, 786981, C588 || CT.C588, 786982, C589 || CT.C589, 786983, C590 || CT.C590, 786986, C591 || CT.C591, 786989, C592 || CT.C592, 786990, C593 || CT.C593, 786994, C594 || CT.C594, 787065, C595 || CT.C595, 787081, C596 || CT.C596, 787083, C597 || CT.C597, 787084, C598 || CT.C598, 787101, C599 || CT.C599, 787103, C600 || CT.C600, 392961, C601 || CT.C601, 392962, C602 || CT.C602, 392963, C603 || CT.C603, 392964, C604 || CT.C604, 392965, C605 || CT.C605, 392966, C606 || CT.C606, 392967, C607 || CT.C607, 392968, C608 || CT.C608, 392969, C609 || CT.C609, 392970, C610 || CT.C610, 392971, C611 || CT.C611, 392972, C612 || CT.C612, 392973, C613 || CT.C613, 392974, C614 || CT.C614, 392975, C615 || CT.C615, 392976, C616 || CT.C616, 392977, C617 || CT.C617, 392978, C618 || CT.C618, 392979, C619 || CT.C619, 392980, C620 || CT.C620, 392981, C621 || CT.C621, 392982, C622 || CT.C622, 392983, C623 || CT.C623, 392984, C624 || CT.C624, 392985, C625 || CT.C625, 392986, C626 || CT.C626, 392987, C627 || CT.C627, 392988, C628 || CT.C628, 392989, C629 || CT.C629, 392990, C630 || CT.C630, 392991, C631 || CT.C631]);
    },
    get C633() {
      return C633 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 0
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 100000
      });
    },
    get C635() {
      return C635 = dart.const({
        __proto__: priority.Priority.prototype,
        [_value$]: 200000
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 0
      });
    },
    get C637() {
      return C637 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 1
      });
    },
    get C638() {
      return C638 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: false,
        signed: false,
        index: 2
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 3
      });
    },
    get C640() {
      return C640 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 4
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 5
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 6
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 7
      });
    },
    get C644() {
      return C644 = dart.constList([C636 || CT.C636, C637 || CT.C637, C638 || CT.C638, C639 || CT.C639, C640 || CT.C640, C641 || CT.C641, C642 || CT.C642, C643 || CT.C643], text_input.TextInputType);
    },
    get C645() {
      return C645 = dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url", "visiblePassword"], core.String);
    },
    get C646() {
      return C646 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.none",
        index: 0
      });
    },
    get C647() {
      return C647 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.unspecified",
        index: 1
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.done",
        index: 2
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.go",
        index: 3
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.search",
        index: 4
      });
    },
    get C651() {
      return C651 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.send",
        index: 5
      });
    },
    get C652() {
      return C652 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.next",
        index: 6
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.previous",
        index: 7
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.continueAction",
        index: 8
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.join",
        index: 9
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.route",
        index: 10
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.emergencyCall",
        index: 11
      });
    },
    get C658() {
      return C658 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$6]: "TextInputAction.newline",
        index: 12
      });
    },
    get C659() {
      return C659 = dart.constList([C646 || CT.C646, C647 || CT.C647, C648 || CT.C648, C649 || CT.C649, C650 || CT.C650, C651 || CT.C651, C652 || CT.C652, C653 || CT.C653, C654 || CT.C654, C655 || CT.C655, C656 || CT.C656, C657 || CT.C657, C658 || CT.C658], text_input.TextInputAction);
    },
    get C660() {
      return C660 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$6]: "TextCapitalization.words",
        index: 0
      });
    },
    get C661() {
      return C661 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$6]: "TextCapitalization.sentences",
        index: 1
      });
    },
    get C662() {
      return C662 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$6]: "TextCapitalization.characters",
        index: 2
      });
    },
    get C663() {
      return C663 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$6]: "TextCapitalization.none",
        index: 3
      });
    },
    get C664() {
      return C664 = dart.constList([C660 || CT.C660, C661 || CT.C661, C662 || CT.C662, C663 || CT.C663], text_input.TextCapitalization);
    },
    get C665() {
      return C665 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$6]: "FloatingCursorDragState.Start",
        index: 0
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$6]: "FloatingCursorDragState.Update",
        index: 1
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$6]: "FloatingCursorDragState.End",
        index: 2
      });
    },
    get C668() {
      return C668 = dart.constList([C665 || CT.C665, C666 || CT.C666, C667 || CT.C667], text_input.FloatingCursorDragState);
    },
    get C669() {
      return C669 = dart.const({
        __proto__: text_input.TextEditingValue.prototype,
        composing: C13 || CT.C13,
        selection: C30 || CT.C30,
        text: ""
      });
    },
    get C670() {
      return C670 = dart.constList([C646 || CT.C646, C647 || CT.C647, C648 || CT.C648, C651 || CT.C651, C649 || CT.C649, C650 || CT.C650, C652 || CT.C652, C653 || CT.C653, C658 || CT.C658], text_input.TextInputAction);
    },
    get C671() {
      return C671 = dart.constList([C647 || CT.C647, C648 || CT.C648, C651 || CT.C651, C649 || CT.C649, C650 || CT.C650, C652 || CT.C652, C658 || CT.C658, C654 || CT.C654, C655 || CT.C655, C656 || CT.C656, C657 || CT.C657], text_input.TextInputAction);
    },
    get C672() {
      return C672 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [0, C97 || CT.C97, 119, C100 || CT.C100, 223, C105 || CT.C105, 224, C106 || CT.C106, 29, C112 || CT.C112, 30, C113 || CT.C113, 31, C114 || CT.C114, 32, C115 || CT.C115, 33, C116 || CT.C116, 34, C117 || CT.C117, 35, C118 || CT.C118, 36, C119 || CT.C119, 37, C120 || CT.C120, 38, C121 || CT.C121, 39, C122 || CT.C122, 40, C123 || CT.C123, 41, C124 || CT.C124, 42, C125 || CT.C125, 43, C126 || CT.C126, 44, C127 || CT.C127, 45, C128 || CT.C128, 46, C129 || CT.C129, 47, C130 || CT.C130, 48, C131 || CT.C131, 49, C132 || CT.C132, 50, C133 || CT.C133, 51, C134 || CT.C134, 52, C135 || CT.C135, 53, C136 || CT.C136, 54, C137 || CT.C137, 8, C138 || CT.C138, 9, C139 || CT.C139, 10, C140 || CT.C140, 11, C141 || CT.C141, 12, C142 || CT.C142, 13, C143 || CT.C143, 14, C144 || CT.C144, 15, C145 || CT.C145, 16, C146 || CT.C146, 7, C147 || CT.C147, 66, C148 || CT.C148, 111, C149 || CT.C149, 67, C150 || CT.C150, 61, C151 || CT.C151, 62, C152 || CT.C152, 69, C153 || CT.C153, 70, C154 || CT.C154, 71, C155 || CT.C155, 72, C156 || CT.C156, 73, C157 || CT.C157, 74, C158 || CT.C158, 75, C159 || CT.C159, 68, C160 || CT.C160, 55, C161 || CT.C161, 56, C162 || CT.C162, 76, C163 || CT.C163, 115, C164 || CT.C164, 131, C165 || CT.C165, 132, C166 || CT.C166, 133, C167 || CT.C167, 134, C168 || CT.C168, 135, C169 || CT.C169, 136, C170 || CT.C170, 137, C171 || CT.C171, 138, C172 || CT.C172, 139, C173 || CT.C173, 140, C174 || CT.C174, 141, C175 || CT.C175, 142, C176 || CT.C176, 120, C177 || CT.C177, 116, C178 || CT.C178, 121, C179 || CT.C179, 124, C180 || CT.C180, 122, C181 || CT.C181, 92, C182 || CT.C182, 112, C183 || CT.C183, 123, C184 || CT.C184, 93, C185 || CT.C185, 22, C186 || CT.C186, 21, C187 || CT.C187, 20, C188 || CT.C188, 19, C189 || CT.C189, 143, C190 || CT.C190, 154, C191 || CT.C191, 155, C192 || CT.C192, 156, C193 || CT.C193, 157, C194 || CT.C194, 160, C195 || CT.C195, 145, C196 || CT.C196, 146, C197 || CT.C197, 147, C198 || CT.C198, 148, C199 || CT.C199, 149, C200 || CT.C200, 150, C201 || CT.C201, 151, C202 || CT.C202, 152, C203 || CT.C203, 153, C204 || CT.C204, 144, C205 || CT.C205, 158, C206 || CT.C206, 82, C208 || CT.C208, 26, C209 || CT.C209, 161, C210 || CT.C210, 259, C224 || CT.C224, 23, C225 || CT.C225, 277, C228 || CT.C228, 278, C229 || CT.C229, 279, C230 || CT.C230, 164, C232 || CT.C232, 24, C233 || CT.C233, 25, C234 || CT.C234, 159, C235 || CT.C235, 214, C239 || CT.C239, 213, C240 || CT.C240, 162, C248 || CT.C248, 163, C249 || CT.C249, 113, C259 || CT.C259, 59, C260 || CT.C260, 57, C261 || CT.C261, 117, C262 || CT.C262, 114, C263 || CT.C263, 60, C264 || CT.C264, 58, C265 || CT.C265, 118, C266 || CT.C266, 165, C267 || CT.C267, 175, C268 || CT.C268, 221, C269 || CT.C269, 220, C270 || CT.C270, 229, C275 || CT.C275, 166, C279 || CT.C279, 167, C280 || CT.C280, 126, C281 || CT.C281, 130, C282 || CT.C282, 90, C283 || CT.C283, 89, C284 || CT.C284, 87, C285 || CT.C285, 88, C286 || CT.C286, 86, C287 || CT.C287, 129, C288 || CT.C288, 85, C289 || CT.C289, 65, C295 || CT.C295, 207, C296 || CT.C296, 208, C297 || CT.C297, 219, C309 || CT.C309, 128, C312 || CT.C312, 84, C315 || CT.C315, 125, C318 || CT.C318, 174, C321 || CT.C321, 168, C322 || CT.C322, 169, C323 || CT.C323, 255, C324 || CT.C324, 188, C331 || CT.C331, 189, C332 || CT.C332, 190, C333 || CT.C333, 191, C334 || CT.C334, 192, C335 || CT.C335, 193, C336 || CT.C336, 194, C337 || CT.C337, 195, C338 || CT.C338, 196, C339 || CT.C339, 197, C340 || CT.C340, 198, C341 || CT.C341, 199, C342 || CT.C342, 200, C343 || CT.C343, 201, C344 || CT.C344, 202, C345 || CT.C345, 203, C346 || CT.C346, 96, C347 || CT.C347, 97, C348 || CT.C348, 98, C349 || CT.C349, 102, C350 || CT.C350, 104, C351 || CT.C351, 110, C352 || CT.C352, 103, C353 || CT.C353, 105, C354 || CT.C354, 109, C355 || CT.C355, 108, C356 || CT.C356, 106, C357 || CT.C357, 107, C358 || CT.C358, 99, C359 || CT.C359, 100, C360 || CT.C360, 101, C361 || CT.C361]);
    },
    get C673() {
      return C673 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [464, C370 || CT.C370, 205, C372 || CT.C372, 142, C375 || CT.C375, 143, C376 || CT.C376, 30, C382 || CT.C382, 48, C383 || CT.C383, 46, C384 || CT.C384, 32, C385 || CT.C385, 18, C386 || CT.C386, 33, C387 || CT.C387, 34, C388 || CT.C388, 35, C389 || CT.C389, 23, C390 || CT.C390, 36, C391 || CT.C391, 37, C392 || CT.C392, 38, C393 || CT.C393, 50, C394 || CT.C394, 49, C395 || CT.C395, 24, C396 || CT.C396, 25, C397 || CT.C397, 16, C398 || CT.C398, 19, C399 || CT.C399, 31, C400 || CT.C400, 20, C401 || CT.C401, 22, C402 || CT.C402, 47, C403 || CT.C403, 17, C404 || CT.C404, 45, C405 || CT.C405, 21, C406 || CT.C406, 44, C407 || CT.C407, 2, C408 || CT.C408, 3, C409 || CT.C409, 4, C410 || CT.C410, 5, C411 || CT.C411, 6, C412 || CT.C412, 7, C413 || CT.C413, 8, C414 || CT.C414, 9, C415 || CT.C415, 10, C416 || CT.C416, 11, C417 || CT.C417, 28, C418 || CT.C418, 1, C419 || CT.C419, 14, C420 || CT.C420, 15, C421 || CT.C421, 57, C422 || CT.C422, 12, C423 || CT.C423, 13, C424 || CT.C424, 26, C425 || CT.C425, 27, C426 || CT.C426, 43, C427 || CT.C427, 86, C427 || CT.C427, 39, C428 || CT.C428, 40, C429 || CT.C429, 41, C430 || CT.C430, 51, C431 || CT.C431, 52, C432 || CT.C432, 53, C433 || CT.C433, 58, C434 || CT.C434, 59, C435 || CT.C435, 60, C436 || CT.C436, 61, C437 || CT.C437, 62, C438 || CT.C438, 63, C439 || CT.C439, 64, C440 || CT.C440, 65, C441 || CT.C441, 66, C442 || CT.C442, 67, C443 || CT.C443, 68, C444 || CT.C444, 87, C445 || CT.C445, 88, C446 || CT.C446, 99, C447 || CT.C447, 70, C448 || CT.C448, 119, C449 || CT.C449, 411, C449 || CT.C449, 110, C450 || CT.C450, 102, C451 || CT.C451, 104, C452 || CT.C452, 177, C452 || CT.C452, 111, C453 || CT.C453, 107, C454 || CT.C454, 109, C455 || CT.C455, 178, C455 || CT.C455, 106, C456 || CT.C456, 105, C457 || CT.C457, 108, C458 || CT.C458, 103, C459 || CT.C459, 69, C460 || CT.C460, 98, C461 || CT.C461, 55, C462 || CT.C462, 74, C463 || CT.C463, 78, C464 || CT.C464, 96, C465 || CT.C465, 79, C466 || CT.C466, 80, C467 || CT.C467, 81, C468 || CT.C468, 75, C469 || CT.C469, 76, C470 || CT.C470, 77, C471 || CT.C471, 71, C472 || CT.C472, 72, C473 || CT.C473, 73, C474 || CT.C474, 82, C475 || CT.C475, 83, C476 || CT.C476, 127, C478 || CT.C478, 139, C478 || CT.C478, 116, C479 || CT.C479, 152, C479 || CT.C479, 117, C480 || CT.C480, 183, C481 || CT.C481, 184, C482 || CT.C482, 185, C483 || CT.C483, 186, C484 || CT.C484, 187, C485 || CT.C485, 188, C486 || CT.C486, 189, C487 || CT.C487, 190, C488 || CT.C488, 191, C489 || CT.C489, 192, C490 || CT.C490, 193, C491 || CT.C491, 194, C492 || CT.C492, 134, C493 || CT.C493, 138, C494 || CT.C494, 353, C495 || CT.C495, 129, C496 || CT.C496, 131, C497 || CT.C497, 137, C498 || CT.C498, 133, C499 || CT.C499, 135, C500 || CT.C500, 136, C501 || CT.C501, 113, C502 || CT.C502, 115, C503 || CT.C503, 114, C504 || CT.C504, 95, C505 || CT.C505, 121, C505 || CT.C505, 92, C509 || CT.C509, 94, C510 || CT.C510, 90, C513 || CT.C513, 91, C514 || CT.C514, 130, C517 || CT.C517, 179, C518 || CT.C518, 180, C519 || CT.C519, 29, C529 || CT.C529, 42, C530 || CT.C530, 56, C531 || CT.C531, 125, C532 || CT.C532, 97, C533 || CT.C533, 54, C534 || CT.C534, 100, C535 || CT.C535, 126, C536 || CT.C536, 358, C537 || CT.C537, 225, C539 || CT.C539, 224, C540 || CT.C540, 174, C548 || CT.C548, 402, C549 || CT.C549, 403, C550 || CT.C550, 200, C551 || CT.C551, 207, C551 || CT.C551, 167, C552 || CT.C552, 208, C553 || CT.C553, 168, C554 || CT.C554, 163, C555 || CT.C555, 165, C556 || CT.C556, 128, C557 || CT.C557, 166, C557 || CT.C557, 161, C558 || CT.C558, 162, C558 || CT.C558, 164, C559 || CT.C559, 209, C561 || CT.C561, 155, C565 || CT.C565, 215, C565 || CT.C565, 429, C566 || CT.C566, 397, C567 || CT.C567, 181, C581 || CT.C581, 160, C582 || CT.C582, 206, C582 || CT.C582, 210, C584 || CT.C584, 217, C585 || CT.C585, 159, C588 || CT.C588, 156, C591 || CT.C591, 182, C595 || CT.C595, 256, C601 || CT.C601, 288, C601 || CT.C601, 257, C602 || CT.C602, 289, C602 || CT.C602, 258, C603 || CT.C603, 290, C603 || CT.C603, 259, C604 || CT.C604, 291, C604 || CT.C604, 260, C605 || CT.C605, 292, C605 || CT.C605, 261, C606 || CT.C606, 293, C606 || CT.C606, 262, C607 || CT.C607, 294, C607 || CT.C607, 263, C608 || CT.C608, 295, C608 || CT.C608, 264, C609 || CT.C609, 296, C609 || CT.C609, 265, C610 || CT.C610, 297, C610 || CT.C610, 266, C611 || CT.C611, 298, C611 || CT.C611, 267, C612 || CT.C612, 299, C612 || CT.C612, 268, C613 || CT.C613, 300, C613 || CT.C613, 269, C614 || CT.C614, 301, C614 || CT.C614, 270, C615 || CT.C615, 302, C615 || CT.C615, 271, C616 || CT.C616, 303, C616 || CT.C616, 304, C617 || CT.C617, 305, C618 || CT.C618, 306, C619 || CT.C619, 310, C620 || CT.C620, 312, C621 || CT.C621, 316, C622 || CT.C622, 311, C623 || CT.C623, 313, C624 || CT.C624, 314, C625 || CT.C625, 315, C626 || CT.C626, 317, C627 || CT.C627, 318, C628 || CT.C628, 307, C629 || CT.C629, 308, C630 || CT.C630, 309, C631 || CT.C631]);
    },
    get C674() {
      return C674 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [154, C191 || CT.C191, 155, C192 || CT.C192, 156, C193 || CT.C193, 157, C194 || CT.C194, 145, C196 || CT.C196, 146, C197 || CT.C197, 147, C198 || CT.C198, 148, C199 || CT.C199, 149, C200 || CT.C200, 150, C201 || CT.C201, 151, C202 || CT.C202, 152, C203 || CT.C203, 153, C204 || CT.C204, 144, C205 || CT.C205, 158, C206 || CT.C206, 161, C210 || CT.C210, 159, C235 || CT.C235, 162, C248 || CT.C248, 163, C249 || CT.C249]);
    },
    get C675() {
      return C675 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [4294967296.0, C97 || CT.C97, 4294967312.0, C98 || CT.C98, 4294967313.0, C99 || CT.C99, 4294967314.0, C100 || CT.C100, 4294967315.0, C101 || CT.C101, 4294967316.0, C102 || CT.C102, 4294967317.0, C103 || CT.C103, 4294967318.0, C104 || CT.C104, 4295032962.0, C105 || CT.C105, 4295032963.0, C106 || CT.C106, 4295033013.0, C107 || CT.C107, 4295426048.0, C108 || CT.C108, 4295426049.0, C109 || CT.C109, 4295426050.0, C110 || CT.C110, 4295426051.0, C111 || CT.C111, 97, C112 || CT.C112, 98, C113 || CT.C113, 99, C114 || CT.C114, 100, C115 || CT.C115, 101, C116 || CT.C116, 102, C117 || CT.C117, 103, C118 || CT.C118, 104, C119 || CT.C119, 105, C120 || CT.C120, 106, C121 || CT.C121, 107, C122 || CT.C122, 108, C123 || CT.C123, 109, C124 || CT.C124, 110, C125 || CT.C125, 111, C126 || CT.C126, 112, C127 || CT.C127, 113, C128 || CT.C128, 114, C129 || CT.C129, 115, C130 || CT.C130, 116, C131 || CT.C131, 117, C132 || CT.C132, 118, C133 || CT.C133, 119, C134 || CT.C134, 120, C135 || CT.C135, 121, C136 || CT.C136, 122, C137 || CT.C137, 49, C138 || CT.C138, 50, C139 || CT.C139, 51, C140 || CT.C140, 52, C141 || CT.C141, 53, C142 || CT.C142, 54, C143 || CT.C143, 55, C144 || CT.C144, 56, C145 || CT.C145, 57, C146 || CT.C146, 48, C147 || CT.C147, 4295426088.0, C148 || CT.C148, 4295426089.0, C149 || CT.C149, 4295426090.0, C150 || CT.C150, 4295426091.0, C151 || CT.C151, 32, C152 || CT.C152, 45, C153 || CT.C153, 61, C154 || CT.C154, 91, C155 || CT.C155, 93, C156 || CT.C156, 92, C157 || CT.C157, 59, C158 || CT.C158, 39, C159 || CT.C159, 96, C160 || CT.C160, 44, C161 || CT.C161, 46, C162 || CT.C162, 47, C163 || CT.C163, 4295426105.0, C164 || CT.C164, 4295426106.0, C165 || CT.C165, 4295426107.0, C166 || CT.C166, 4295426108.0, C167 || CT.C167, 4295426109.0, C168 || CT.C168, 4295426110.0, C169 || CT.C169, 4295426111.0, C170 || CT.C170, 4295426112.0, C171 || CT.C171, 4295426113.0, C172 || CT.C172, 4295426114.0, C173 || CT.C173, 4295426115.0, C174 || CT.C174, 4295426116.0, C175 || CT.C175, 4295426117.0, C176 || CT.C176, 4295426118.0, C177 || CT.C177, 4295426119.0, C178 || CT.C178, 4295426120.0, C179 || CT.C179, 4295426121.0, C180 || CT.C180, 4295426122.0, C181 || CT.C181, 4295426123.0, C182 || CT.C182, 4295426124.0, C183 || CT.C183, 4295426125.0, C184 || CT.C184, 4295426126.0, C185 || CT.C185, 4295426127.0, C186 || CT.C186, 4295426128.0, C187 || CT.C187, 4295426129.0, C188 || CT.C188, 4295426130.0, C189 || CT.C189, 4295426131.0, C190 || CT.C190, 4295426132.0, C191 || CT.C191, 4295426133.0, C192 || CT.C192, 4295426134.0, C193 || CT.C193, 4295426135.0, C194 || CT.C194, 4295426136.0, C195 || CT.C195, 4295426137.0, C196 || CT.C196, 4295426138.0, C197 || CT.C197, 4295426139.0, C198 || CT.C198, 4295426140.0, C199 || CT.C199, 4295426141.0, C200 || CT.C200, 4295426142.0, C201 || CT.C201, 4295426143.0, C202 || CT.C202, 4295426144.0, C203 || CT.C203, 4295426145.0, C204 || CT.C204, 4295426146.0, C205 || CT.C205, 4295426147.0, C206 || CT.C206, 4295426148.0, C207 || CT.C207, 4295426149.0, C208 || CT.C208, 4295426150.0, C209 || CT.C209, 4295426151.0, C210 || CT.C210, 4295426152.0, C211 || CT.C211, 4295426153.0, C212 || CT.C212, 4295426154.0, C213 || CT.C213, 4295426155.0, C214 || CT.C214, 4295426156.0, C215 || CT.C215, 4295426157.0, C216 || CT.C216, 4295426158.0, C217 || CT.C217, 4295426159.0, C218 || CT.C218, 4295426160.0, C219 || CT.C219, 4295426161.0, C220 || CT.C220, 4295426162.0, C221 || CT.C221, 4295426163.0, C222 || CT.C222, 4295426164.0, C223 || CT.C223, 4295426165.0, C224 || CT.C224, 4295426167.0, C225 || CT.C225, 4295426169.0, C226 || CT.C226, 4295426170.0, C227 || CT.C227, 4295426171.0, C228 || CT.C228, 4295426172.0, C229 || CT.C229, 4295426173.0, C230 || CT.C230, 4295426174.0, C231 || CT.C231, 4295426175.0, C232 || CT.C232, 4295426176.0, C233 || CT.C233, 4295426177.0, C234 || CT.C234, 4295426181.0, C235 || CT.C235, 4295426183.0, C236 || CT.C236, 4295426184.0, C237 || CT.C237, 4295426185.0, C238 || CT.C238, 4295426186.0, C239 || CT.C239, 4295426187.0, C240 || CT.C240, 4295426192.0, C241 || CT.C241, 4295426193.0, C242 || CT.C242, 4295426194.0, C243 || CT.C243, 4295426195.0, C244 || CT.C244, 4295426196.0, C245 || CT.C245, 4295426203.0, C246 || CT.C246, 4295426211.0, C247 || CT.C247, 4295426230.0, C248 || CT.C248, 4295426231.0, C249 || CT.C249, 4295426235.0, C250 || CT.C250, 4295426256.0, C251 || CT.C251, 4295426257.0, C252 || CT.C252, 4295426258.0, C253 || CT.C253, 4295426259.0, C254 || CT.C254, 4295426260.0, C255 || CT.C255, 4295426263.0, C256 || CT.C256, 4295426264.0, C257 || CT.C257, 4295426265.0, C258 || CT.C258, 4295426272.0, C259 || CT.C259, 4295426273.0, C260 || CT.C260, 4295426274.0, C261 || CT.C261, 4295426275.0, C262 || CT.C262, 4295426276.0, C263 || CT.C263, 4295426277.0, C264 || CT.C264, 4295426278.0, C265 || CT.C265, 4295426279.0, C266 || CT.C266, 4295753824.0, C267 || CT.C267, 4295753825.0, C268 || CT.C268, 4295753839.0, C269 || CT.C269, 4295753840.0, C270 || CT.C270, 4295753842.0, C271 || CT.C271, 4295753843.0, C272 || CT.C272, 4295753844.0, C273 || CT.C273, 4295753845.0, C274 || CT.C274, 4295753859.0, C275 || CT.C275, 4295753868.0, C276 || CT.C276, 4295753869.0, C277 || CT.C277, 4295753876.0, C278 || CT.C278, 4295753884.0, C279 || CT.C279, 4295753885.0, C280 || CT.C280, 4295753904.0, C281 || CT.C281, 4295753906.0, C282 || CT.C282, 4295753907.0, C283 || CT.C283, 4295753908.0, C284 || CT.C284, 4295753909.0, C285 || CT.C285, 4295753910.0, C286 || CT.C286, 4295753911.0, C287 || CT.C287, 4295753912.0, C288 || CT.C288, 4295753933.0, C289 || CT.C289, 4295753935.0, C290 || CT.C290, 4295753957.0, C291 || CT.C291, 4295754115.0, C292 || CT.C292, 4295754116.0, C293 || CT.C293, 4295754118.0, C294 || CT.C294, 4295754122.0, C295 || CT.C295, 4295754125.0, C296 || CT.C296, 4295754126.0, C297 || CT.C297, 4295754130.0, C298 || CT.C298, 4295754132.0, C299 || CT.C299, 4295754134.0, C300 || CT.C300, 4295754140.0, C301 || CT.C301, 4295754142.0, C302 || CT.C302, 4295754143.0, C303 || CT.C303, 4295754146.0, C304 || CT.C304, 4295754151.0, C305 || CT.C305, 4295754155.0, C306 || CT.C306, 4295754158.0, C307 || CT.C307, 4295754161.0, C308 || CT.C308, 4295754187.0, C309 || CT.C309, 4295754167.0, C310 || CT.C310, 4295754241.0, C311 || CT.C311, 4295754243.0, C312 || CT.C312, 4295754247.0, C313 || CT.C313, 4295754248.0, C314 || CT.C314, 4295754273.0, C315 || CT.C315, 4295754275.0, C316 || CT.C316, 4295754276.0, C317 || CT.C317, 4295754277.0, C318 || CT.C318, 4295754278.0, C319 || CT.C319, 4295754279.0, C320 || CT.C320, 4295754282.0, C321 || CT.C321, 4295754285.0, C322 || CT.C322, 4295754286.0, C323 || CT.C323, 4295754290.0, C324 || CT.C324, 4295754361.0, C325 || CT.C325, 4295754377.0, C326 || CT.C326, 4295754379.0, C327 || CT.C327, 4295754380.0, C328 || CT.C328, 4295754397.0, C329 || CT.C329, 4295754399.0, C330 || CT.C330, 4295360257.0, C331 || CT.C331, 4295360258.0, C332 || CT.C332, 4295360259.0, C333 || CT.C333, 4295360260.0, C334 || CT.C334, 4295360261.0, C335 || CT.C335, 4295360262.0, C336 || CT.C336, 4295360263.0, C337 || CT.C337, 4295360264.0, C338 || CT.C338, 4295360265.0, C339 || CT.C339, 4295360266.0, C340 || CT.C340, 4295360267.0, C341 || CT.C341, 4295360268.0, C342 || CT.C342, 4295360269.0, C343 || CT.C343, 4295360270.0, C344 || CT.C344, 4295360271.0, C345 || CT.C345, 4295360272.0, C346 || CT.C346, 4295360273.0, C347 || CT.C347, 4295360274.0, C348 || CT.C348, 4295360275.0, C349 || CT.C349, 4295360276.0, C350 || CT.C350, 4295360277.0, C351 || CT.C351, 4295360278.0, C352 || CT.C352, 4295360279.0, C353 || CT.C353, 4295360280.0, C354 || CT.C354, 4295360281.0, C355 || CT.C355, 4295360282.0, C356 || CT.C356, 4295360283.0, C357 || CT.C357, 4295360284.0, C358 || CT.C358, 4295360285.0, C359 || CT.C359, 4295360286.0, C360 || CT.C360, 4295360287.0, C361 || CT.C361]);
    },
    get C676() {
      return C676 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [0, C382 || CT.C382, 11, C383 || CT.C383, 8, C384 || CT.C384, 2, C385 || CT.C385, 14, C386 || CT.C386, 3, C387 || CT.C387, 5, C388 || CT.C388, 4, C389 || CT.C389, 34, C390 || CT.C390, 38, C391 || CT.C391, 40, C392 || CT.C392, 37, C393 || CT.C393, 46, C394 || CT.C394, 45, C395 || CT.C395, 31, C396 || CT.C396, 35, C397 || CT.C397, 12, C398 || CT.C398, 15, C399 || CT.C399, 1, C400 || CT.C400, 17, C401 || CT.C401, 32, C402 || CT.C402, 9, C403 || CT.C403, 13, C404 || CT.C404, 7, C405 || CT.C405, 16, C406 || CT.C406, 6, C407 || CT.C407, 18, C408 || CT.C408, 19, C409 || CT.C409, 20, C410 || CT.C410, 21, C411 || CT.C411, 23, C412 || CT.C412, 22, C413 || CT.C413, 26, C414 || CT.C414, 28, C415 || CT.C415, 25, C416 || CT.C416, 29, C417 || CT.C417, 36, C418 || CT.C418, 53, C419 || CT.C419, 51, C420 || CT.C420, 48, C421 || CT.C421, 49, C422 || CT.C422, 27, C423 || CT.C423, 24, C424 || CT.C424, 33, C425 || CT.C425, 30, C426 || CT.C426, 42, C427 || CT.C427, 41, C428 || CT.C428, 39, C429 || CT.C429, 50, C430 || CT.C430, 43, C431 || CT.C431, 47, C432 || CT.C432, 44, C433 || CT.C433, 57, C434 || CT.C434, 122, C435 || CT.C435, 120, C436 || CT.C436, 99, C437 || CT.C437, 118, C438 || CT.C438, 96, C439 || CT.C439, 97, C440 || CT.C440, 98, C441 || CT.C441, 100, C442 || CT.C442, 101, C443 || CT.C443, 109, C444 || CT.C444, 103, C445 || CT.C445, 111, C446 || CT.C446, 114, C450 || CT.C450, 115, C451 || CT.C451, 116, C452 || CT.C452, 117, C453 || CT.C453, 119, C454 || CT.C454, 121, C455 || CT.C455, 124, C456 || CT.C456, 123, C457 || CT.C457, 125, C458 || CT.C458, 126, C459 || CT.C459, 71, C460 || CT.C460, 75, C461 || CT.C461, 67, C462 || CT.C462, 78, C463 || CT.C463, 69, C464 || CT.C464, 76, C465 || CT.C465, 83, C466 || CT.C466, 84, C467 || CT.C467, 85, C468 || CT.C468, 86, C469 || CT.C469, 87, C470 || CT.C470, 88, C471 || CT.C471, 89, C472 || CT.C472, 91, C473 || CT.C473, 92, C474 || CT.C474, 82, C475 || CT.C475, 65, C476 || CT.C476, 10, C477 || CT.C477, 110, C478 || CT.C478, 81, C480 || CT.C480, 105, C481 || CT.C481, 107, C482 || CT.C482, 113, C483 || CT.C483, 106, C484 || CT.C484, 64, C485 || CT.C485, 79, C486 || CT.C486, 80, C487 || CT.C487, 90, C488 || CT.C488, 74, C502 || CT.C502, 72, C503 || CT.C503, 73, C504 || CT.C504, 95, C505 || CT.C505, 94, C506 || CT.C506, 104, C507 || CT.C507, 93, C508 || CT.C508, 59, C529 || CT.C529, 56, C530 || CT.C530, 58, C531 || CT.C531, 55, C532 || CT.C532, 62, C533 || CT.C533, 60, C534 || CT.C534, 61, C535 || CT.C535, 54, C536 || CT.C536]);
    },
    get C677() {
      return C677 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [75, C191 || CT.C191, 67, C192 || CT.C192, 78, C193 || CT.C193, 69, C194 || CT.C194, 83, C196 || CT.C196, 84, C197 || CT.C197, 85, C198 || CT.C198, 86, C199 || CT.C199, 87, C200 || CT.C200, 88, C201 || CT.C201, 89, C202 || CT.C202, 91, C203 || CT.C203, 92, C204 || CT.C204, 82, C205 || CT.C205, 65, C206 || CT.C206, 81, C210 || CT.C210, 95, C235 || CT.C235]);
    },
    get C678() {
      return C678 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [65, C112 || CT.C112, 66, C113 || CT.C113, 67, C114 || CT.C114, 68, C115 || CT.C115, 69, C116 || CT.C116, 70, C117 || CT.C117, 71, C118 || CT.C118, 72, C119 || CT.C119, 73, C120 || CT.C120, 74, C121 || CT.C121, 75, C122 || CT.C122, 76, C123 || CT.C123, 77, C124 || CT.C124, 78, C125 || CT.C125, 79, C126 || CT.C126, 80, C127 || CT.C127, 81, C128 || CT.C128, 82, C129 || CT.C129, 83, C130 || CT.C130, 84, C131 || CT.C131, 85, C132 || CT.C132, 86, C133 || CT.C133, 87, C134 || CT.C134, 88, C135 || CT.C135, 89, C136 || CT.C136, 90, C137 || CT.C137, 49, C138 || CT.C138, 50, C139 || CT.C139, 51, C140 || CT.C140, 52, C141 || CT.C141, 53, C142 || CT.C142, 54, C143 || CT.C143, 55, C144 || CT.C144, 56, C145 || CT.C145, 57, C146 || CT.C146, 48, C147 || CT.C147, 257, C148 || CT.C148, 256, C149 || CT.C149, 259, C150 || CT.C150, 258, C151 || CT.C151, 32, C152 || CT.C152, 45, C153 || CT.C153, 61, C154 || CT.C154, 91, C155 || CT.C155, 93, C156 || CT.C156, 92, C157 || CT.C157, 59, C158 || CT.C158, 39, C159 || CT.C159, 96, C160 || CT.C160, 44, C161 || CT.C161, 46, C162 || CT.C162, 47, C163 || CT.C163, 280, C164 || CT.C164, 290, C165 || CT.C165, 291, C166 || CT.C166, 292, C167 || CT.C167, 293, C168 || CT.C168, 294, C169 || CT.C169, 295, C170 || CT.C170, 296, C171 || CT.C171, 297, C172 || CT.C172, 298, C173 || CT.C173, 299, C174 || CT.C174, 300, C175 || CT.C175, 301, C176 || CT.C176, 283, C177 || CT.C177, 284, C179 || CT.C179, 260, C180 || CT.C180, 268, C181 || CT.C181, 266, C182 || CT.C182, 261, C183 || CT.C183, 269, C184 || CT.C184, 267, C185 || CT.C185, 262, C186 || CT.C186, 263, C187 || CT.C187, 264, C188 || CT.C188, 265, C189 || CT.C189, 282, C190 || CT.C190, 331, C191 || CT.C191, 332, C192 || CT.C192, 334, C194 || CT.C194, 335, C195 || CT.C195, 321, C196 || CT.C196, 322, C197 || CT.C197, 323, C198 || CT.C198, 324, C199 || CT.C199, 325, C200 || CT.C200, 326, C201 || CT.C201, 327, C202 || CT.C202, 328, C203 || CT.C203, 329, C204 || CT.C204, 320, C205 || CT.C205, 330, C206 || CT.C206, 348, C208 || CT.C208, 336, C210 || CT.C210, 302, C211 || CT.C211, 303, C212 || CT.C212, 304, C213 || CT.C213, 305, C214 || CT.C214, 306, C215 || CT.C215, 307, C216 || CT.C216, 308, C217 || CT.C217, 309, C218 || CT.C218, 310, C219 || CT.C219, 311, C220 || CT.C220, 312, C221 || CT.C221, 341, C259 || CT.C259, 340, C260 || CT.C260, 342, C261 || CT.C261, 343, C262 || CT.C262, 345, C263 || CT.C263, 344, C264 || CT.C264, 346, C265 || CT.C265, 347, C266 || CT.C266]);
    },
    get C679() {
      return C679 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [331, C191 || CT.C191, 332, C192 || CT.C192, 334, C194 || CT.C194, 321, C196 || CT.C196, 322, C197 || CT.C197, 323, C198 || CT.C198, 324, C199 || CT.C199, 325, C200 || CT.C200, 326, C201 || CT.C201, 327, C202 || CT.C202, 328, C203 || CT.C203, 329, C204 || CT.C204, 320, C205 || CT.C205, 330, C206 || CT.C206, 336, C210 || CT.C210]);
    },
    get C680() {
      return C680 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [150, C375 || CT.C375, 151, C376 || CT.C376, 235, C377 || CT.C377, 38, C382 || CT.C382, 56, C383 || CT.C383, 54, C384 || CT.C384, 40, C385 || CT.C385, 26, C386 || CT.C386, 41, C387 || CT.C387, 42, C388 || CT.C388, 43, C389 || CT.C389, 31, C390 || CT.C390, 44, C391 || CT.C391, 45, C392 || CT.C392, 46, C393 || CT.C393, 58, C394 || CT.C394, 57, C395 || CT.C395, 32, C396 || CT.C396, 33, C397 || CT.C397, 24, C398 || CT.C398, 27, C399 || CT.C399, 39, C400 || CT.C400, 28, C401 || CT.C401, 30, C402 || CT.C402, 55, C403 || CT.C403, 25, C404 || CT.C404, 53, C405 || CT.C405, 29, C406 || CT.C406, 52, C407 || CT.C407, 10, C408 || CT.C408, 11, C409 || CT.C409, 12, C410 || CT.C410, 13, C411 || CT.C411, 14, C412 || CT.C412, 15, C413 || CT.C413, 16, C414 || CT.C414, 17, C415 || CT.C415, 18, C416 || CT.C416, 19, C417 || CT.C417, 36, C418 || CT.C418, 9, C419 || CT.C419, 22, C420 || CT.C420, 23, C421 || CT.C421, 65, C422 || CT.C422, 20, C423 || CT.C423, 21, C424 || CT.C424, 34, C425 || CT.C425, 35, C426 || CT.C426, 51, C427 || CT.C427, 47, C428 || CT.C428, 48, C429 || CT.C429, 49, C430 || CT.C430, 59, C431 || CT.C431, 60, C432 || CT.C432, 61, C433 || CT.C433, 66, C434 || CT.C434, 67, C435 || CT.C435, 68, C436 || CT.C436, 69, C437 || CT.C437, 70, C438 || CT.C438, 71, C439 || CT.C439, 72, C440 || CT.C440, 73, C441 || CT.C441, 74, C442 || CT.C442, 75, C443 || CT.C443, 76, C444 || CT.C444, 95, C445 || CT.C445, 96, C446 || CT.C446, 107, C447 || CT.C447, 78, C448 || CT.C448, 127, C449 || CT.C449, 118, C450 || CT.C450, 110, C451 || CT.C451, 112, C452 || CT.C452, 119, C453 || CT.C453, 115, C454 || CT.C454, 117, C455 || CT.C455, 114, C456 || CT.C456, 113, C457 || CT.C457, 116, C458 || CT.C458, 111, C459 || CT.C459, 77, C460 || CT.C460, 106, C461 || CT.C461, 63, C462 || CT.C462, 82, C463 || CT.C463, 86, C464 || CT.C464, 104, C465 || CT.C465, 87, C466 || CT.C466, 88, C467 || CT.C467, 89, C468 || CT.C468, 83, C469 || CT.C469, 84, C470 || CT.C470, 85, C471 || CT.C471, 79, C472 || CT.C472, 80, C473 || CT.C473, 81, C474 || CT.C474, 90, C475 || CT.C475, 91, C476 || CT.C476, 94, C477 || CT.C477, 135, C478 || CT.C478, 124, C479 || CT.C479, 125, C480 || CT.C480, 191, C481 || CT.C481, 192, C482 || CT.C482, 193, C483 || CT.C483, 194, C484 || CT.C484, 195, C485 || CT.C485, 196, C486 || CT.C486, 197, C487 || CT.C487, 198, C488 || CT.C488, 199, C489 || CT.C489, 200, C490 || CT.C490, 201, C491 || CT.C491, 202, C492 || CT.C492, 142, C493 || CT.C493, 146, C494 || CT.C494, 140, C495 || CT.C495, 137, C496 || CT.C496, 139, C497 || CT.C497, 145, C498 || CT.C498, 141, C499 || CT.C499, 143, C500 || CT.C500, 144, C501 || CT.C501, 121, C502 || CT.C502, 123, C503 || CT.C503, 122, C504 || CT.C504, 129, C505 || CT.C505, 97, C506 || CT.C506, 101, C507 || CT.C507, 132, C508 || CT.C508, 100, C509 || CT.C509, 102, C510 || CT.C510, 130, C511 || CT.C511, 131, C512 || CT.C512, 98, C513 || CT.C513, 99, C514 || CT.C514, 93, C515 || CT.C515, 187, C518 || CT.C518, 188, C519 || CT.C519, 126, C526 || CT.C526, 37, C529 || CT.C529, 50, C530 || CT.C530, 64, C531 || CT.C531, 133, C532 || CT.C532, 105, C533 || CT.C533, 62, C534 || CT.C534, 108, C535 || CT.C535, 134, C536 || CT.C536, 366, C537 || CT.C537, 378, C538 || CT.C538, 233, C539 || CT.C539, 232, C540 || CT.C540, 439, C541 || CT.C541, 600, C542 || CT.C542, 601, C543 || CT.C543, 252, C544 || CT.C544, 413, C545 || CT.C545, 177, C546 || CT.C546, 370, C547 || CT.C547, 182, C548 || CT.C548, 418, C549 || CT.C549, 419, C550 || CT.C550, 215, C551 || CT.C551, 175, C552 || CT.C552, 216, C553 || CT.C553, 176, C554 || CT.C554, 171, C555 || CT.C555, 173, C556 || CT.C556, 174, C557 || CT.C557, 169, C558 || CT.C558, 172, C559 || CT.C559, 590, C560 || CT.C560, 217, C561 || CT.C561, 179, C562 || CT.C562, 429, C563 || CT.C563, 431, C564 || CT.C564, 163, C565 || CT.C565, 437, C566 || CT.C566, 405, C567 || CT.C567, 148, C568 || CT.C568, 152, C569 || CT.C569, 158, C570 || CT.C570, 441, C571 || CT.C571, 160, C572 || CT.C572, 587, C573 || CT.C573, 588, C574 || CT.C574, 243, C575 || CT.C575, 440, C576 || CT.C576, 382, C577 || CT.C577, 589, C578 || CT.C578, 591, C579 || CT.C579, 400, C580 || CT.C580, 189, C581 || CT.C581, 214, C582 || CT.C582, 242, C583 || CT.C583, 218, C584 || CT.C584, 225, C585 || CT.C585, 180, C586 || CT.C586, 166, C587 || CT.C587, 167, C588 || CT.C588, 136, C589 || CT.C589, 181, C590 || CT.C590, 164, C591 || CT.C591, 426, C592 || CT.C592, 427, C593 || CT.C593, 380, C594 || CT.C594, 190, C595 || CT.C595, 240, C596 || CT.C596, 241, C597 || CT.C597, 239, C598 || CT.C598, 592, C599 || CT.C599, 128, C600 || CT.C600]);
    },
    get C681() {
      return C681 = dart.const(new _js_helper.PrivateSymbol.new('_member', _member));
    },
    get C682() {
      return C682 = dart.const(new _js_helper.PrivateSymbol.new('_arena', _arena));
    },
    get C683() {
      return C683 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$0));
    },
    get C684() {
      return C684 = dart.fn(asset_bundle.AssetBundle._utf8decode, ByteDataToString());
    },
    get C685() {
      return C685 = dart.const({
        __proto__: binding$0._DefaultBinaryMessenger.prototype
      });
    },
    get C686() {
      return C686 = dart.fn(binding$0.ServicesBinding._parseLicenses, StringToListOfLicenseEntry());
    },
    get C687() {
      return C687 = dart.constList([], core.String);
    },
    get C688() {
      return C688 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$7]: "_DragState.ready",
        index: 0
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$7]: "_DragState.possible",
        index: 1
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$7]: "_DragState.accepted",
        index: 2
      });
    },
    get C691() {
      return C691 = dart.constList([C688 || CT.C688, C689 || CT.C689, C690 || CT.C690], monodrag._DragState);
    }
  });
  const _name$ = dart.privateName(system_chrome, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  system_chrome.DeviceOrientation = class DeviceOrientation extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (system_chrome.DeviceOrientation.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(system_chrome.DeviceOrientation);
  dart.setLibraryUri(system_chrome.DeviceOrientation, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.DeviceOrientation, () => ({
    __proto__: dart.getFields(system_chrome.DeviceOrientation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.DeviceOrientation, ['toString']);
  system_chrome.DeviceOrientation.portraitUp = C0 || CT.C0;
  system_chrome.DeviceOrientation.landscapeLeft = C1 || CT.C1;
  system_chrome.DeviceOrientation.portraitDown = C2 || CT.C2;
  system_chrome.DeviceOrientation.landscapeRight = C3 || CT.C3;
  system_chrome.DeviceOrientation.values = C4 || CT.C4;
  system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
  };
  (system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
    ;
  }).prototype = system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(system_chrome.ApplicationSwitcherDescription);
  const label$ = Symbol("ApplicationSwitcherDescription.label");
  const primaryColor$ = Symbol("ApplicationSwitcherDescription.primaryColor");
  dart.setLibraryUri(system_chrome.ApplicationSwitcherDescription, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(core.String),
    primaryColor: dart.finalFieldType(core.int)
  }));
  let C5;
  let C6;
  let C7;
  system_chrome.SystemUiOverlay = class SystemUiOverlay extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (system_chrome.SystemUiOverlay.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlay);
  dart.setLibraryUri(system_chrome.SystemUiOverlay, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.SystemUiOverlay, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlay.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlay, ['toString']);
  system_chrome.SystemUiOverlay.top = C5 || CT.C5;
  system_chrome.SystemUiOverlay.bottom = C6 || CT.C6;
  system_chrome.SystemUiOverlay.values = C7 || CT.C7;
  const _toMap = dart.privateName(system_chrome, "_toMap");
  const _name = dart.privateName(ui, "_name");
  let C9;
  let C10;
  const _value = dart.privateName(ui, "_value");
  let C11;
  let C8;
  let C12;
  system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    [_toMap]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      return new (IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", (t0 = this.systemNavigationBarColor, t0 == null ? null : t0.value), "systemNavigationBarDividerColor", (t0$ = this.systemNavigationBarDividerColor, t0$ == null ? null : t0$.value), "statusBarColor", (t0$0 = this.statusBarColor, t0$0 == null ? null : t0$0.value), "statusBarBrightness", (t0$1 = this.statusBarBrightness, t0$1 == null ? null : dart.toString(t0$1)), "statusBarIconBrightness", (t0$2 = this.statusBarIconBrightness, t0$2 == null ? null : dart.toString(t0$2)), "systemNavigationBarIconBrightness", (t0$3 = this.systemNavigationBarIconBrightness, t0$3 == null ? null : dart.toString(t0$3))]);
    }
    toString() {
      return dart.toString(this[_toMap]());
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: (t0 = systemNavigationBarColor, t0 == null ? this.systemNavigationBarColor : t0), systemNavigationBarDividerColor: (t0$ = systemNavigationBarDividerColor, t0$ == null ? this.systemNavigationBarDividerColor : t0$), statusBarColor: (t0$0 = statusBarColor, t0$0 == null ? this.statusBarColor : t0$0), statusBarIconBrightness: (t0$1 = statusBarIconBrightness, t0$1 == null ? this.statusBarIconBrightness : t0$1), statusBarBrightness: (t0$2 = statusBarBrightness, t0$2 == null ? this.statusBarBrightness : t0$2), systemNavigationBarIconBrightness: (t0$3 = systemNavigationBarIconBrightness, t0$3 == null ? this.systemNavigationBarIconBrightness : t0$3)});
    }
    get hashCode() {
      return ui.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = system_chrome.SystemUiOverlayStyle._check(other);
      return dart.equals(typedOther.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(typedOther.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && dart.equals(typedOther.statusBarColor, this.statusBarColor) && dart.equals(typedOther.statusBarIconBrightness, this.statusBarIconBrightness) && dart.equals(typedOther.statusBarBrightness, this.statusBarBrightness) && dart.equals(typedOther.systemNavigationBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
  };
  (system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
    ;
  }).prototype = system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlayStyle);
  const systemNavigationBarColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarColor");
  const systemNavigationBarDividerColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarDividerColor");
  const systemNavigationBarIconBrightness$ = Symbol("SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  const statusBarColor$ = Symbol("SystemUiOverlayStyle.statusBarColor");
  const statusBarBrightness$ = Symbol("SystemUiOverlayStyle.statusBarBrightness");
  const statusBarIconBrightness$ = Symbol("SystemUiOverlayStyle.statusBarIconBrightness");
  dart.setMethodSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(system_chrome.SystemUiOverlayStyle, [], {statusBarBrightness: ui.Brightness, statusBarColor: ui.Color, statusBarIconBrightness: ui.Brightness, systemNavigationBarColor: ui.Color, systemNavigationBarDividerColor: ui.Color, systemNavigationBarIconBrightness: ui.Brightness})
  }));
  dart.setLibraryUri(system_chrome.SystemUiOverlayStyle, "package:flutter/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(ui.Color),
    systemNavigationBarDividerColor: dart.finalFieldType(ui.Color),
    systemNavigationBarIconBrightness: dart.finalFieldType(ui.Brightness),
    statusBarColor: dart.finalFieldType(ui.Color),
    statusBarBrightness: dart.finalFieldType(ui.Brightness),
    statusBarIconBrightness: dart.finalFieldType(ui.Brightness)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(system_chrome.SystemUiOverlayStyle, {
    /*system_chrome.SystemUiOverlayStyle.light*/get light() {
      return C8 || CT.C8;
    },
    /*system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return C12 || CT.C12;
    }
  });
  system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static setPreferredOrientations(orientations) {
      return async.async(dart.void, function* setPreferredOrientations() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", system_chrome._stringify(overlays));
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/system_chrome.dart", 374, 12, "style != null");
      if (system_chrome.SystemChrome._pendingStyle != null) {
        system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (dart.equals(style, system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/system_chrome.dart", 387, 14, "_pendingStyle != null");
        if (!dart.equals(system_chrome.SystemChrome._pendingStyle, system_chrome.SystemChrome._latestStyle)) {
          system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", system_chrome.SystemChrome._pendingStyle[_toMap]());
          system_chrome.SystemChrome._latestStyle = system_chrome.SystemChrome._pendingStyle;
        }
        system_chrome.SystemChrome._pendingStyle = null;
      }, VoidToNull()));
    }
    static get latestStyle() {
      return system_chrome.SystemChrome._latestStyle;
    }
  };
  (system_chrome.SystemChrome.__ = function() {
    ;
  }).prototype = system_chrome.SystemChrome.prototype;
  dart.addTypeTests(system_chrome.SystemChrome);
  dart.setLibraryUri(system_chrome.SystemChrome, "package:flutter/src/services/system_chrome.dart");
  dart.defineLazy(system_chrome.SystemChrome, {
    /*system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  });
  system_chrome._stringify = function _stringify(list) {
    return (() => {
      let t0 = JSArrayOfString().of([]);
      for (let item of list)
        t0[$add](dart.toString(item));
      return t0;
    })();
  };
  let C13;
  text_editing.TextRange = class TextRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get isValid() {
      return dart.notNull(this.start) >= 0 && dart.notNull(this.end) >= 0;
    }
    get isCollapsed() {
      return this.start == this.end;
    }
    get isNormalized() {
      return dart.notNull(this.end) >= dart.notNull(this.start);
    }
    textBefore(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_editing.dart", 59, 12, "isNormalized");
      return text[$substring](0, this.start);
    }
    textAfter(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_editing.dart", 65, 12, "isNormalized");
      return text[$substring](this.end);
    }
    textInside(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_editing.dart", 71, 12, "isNormalized");
      return text[$substring](this.start, this.end);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_editing.TextRange.is(other)) return false;
      let typedOther = text_editing.TextRange._check(other);
      return typedOther.start == this.start && typedOther.end == this.end;
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.start), dart.hashCode(this.end));
    }
    toString() {
      return "TextRange(start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ")";
    }
  };
  (text_editing.TextRange.new = function(opts) {
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[start$] = start;
    this[end$] = end;
    if (!(start != null && dart.notNull(start) >= -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_editing.dart", 24, 15, "start != null && start >= -1");
    if (!(end != null && dart.notNull(end) >= -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_editing.dart", 25, 15, "end != null && end >= -1");
    ;
  }).prototype = text_editing.TextRange.prototype;
  (text_editing.TextRange.collapsed = function(offset) {
    if (!(offset != null && dart.notNull(offset) >= -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_editing.dart", 31, 14, "offset != null && offset >= -1");
    this[start$] = offset;
    this[end$] = offset;
    ;
  }).prototype = text_editing.TextRange.prototype;
  dart.addTypeTests(text_editing.TextRange);
  const start$ = Symbol("TextRange.start");
  const end$ = Symbol("TextRange.end");
  dart.setMethodSignature(text_editing.TextRange, () => ({
    __proto__: dart.getMethods(text_editing.TextRange.__proto__),
    textBefore: dart.fnType(core.String, [core.String]),
    textAfter: dart.fnType(core.String, [core.String]),
    textInside: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(text_editing.TextRange, () => ({
    __proto__: dart.getGetters(text_editing.TextRange.__proto__),
    isValid: core.bool,
    isCollapsed: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(text_editing.TextRange, "package:flutter/src/services/text_editing.dart");
  dart.setFieldSignature(text_editing.TextRange, () => ({
    __proto__: dart.getFields(text_editing.TextRange.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(text_editing.TextRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(text_editing.TextRange, ['hashCode']);
  dart.defineLazy(text_editing.TextRange, {
    /*text_editing.TextRange.empty*/get empty() {
      return C13 || CT.C13;
    }
  });
  let C14;
  text_editing.TextSelection = class TextSelection extends text_editing.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    get base() {
      return new ui.TextPosition.new({offset: this.baseOffset, affinity: this.affinity});
    }
    get extent() {
      return new ui.TextPosition.new({offset: this.extentOffset, affinity: this.affinity});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_editing.TextSelection.is(other)) return false;
      let typedOther = text_editing.TextSelection._check(other);
      return typedOther.baseOffset == this.baseOffset && typedOther.extentOffset == this.extentOffset && dart.equals(typedOther.affinity, this.affinity) && dart.equals(typedOther.isDirectional, this.isDirectional);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.baseOffset), dart.hashCode(this.extentOffset), dart.hashCode(this.affinity), dart.hashCode(this.isDirectional));
    }
    copyWith(opts) {
      let t1, t1$, t1$0, t1$1;
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new text_editing.TextSelection.new({baseOffset: (t1 = baseOffset, t1 == null ? this.baseOffset : t1), extentOffset: (t1$ = extentOffset, t1$ == null ? this.extentOffset : t1$), affinity: (t1$0 = affinity, t1$0 == null ? this.affinity : t1$0), isDirectional: (t1$1 = isDirectional, t1$1 == null ? this.isDirectional : t1$1)});
    }
  };
  (text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C14 || CT.C14;
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    text_editing.TextSelection.__proto__.new.call(this, {start: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? baseOffset : extentOffset, end: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? extentOffset : baseOffset});
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C14 || CT.C14;
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.fromPosition = function(position) {
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  dart.addTypeTests(text_editing.TextSelection);
  const baseOffset$ = Symbol("TextSelection.baseOffset");
  const extentOffset$ = Symbol("TextSelection.extentOffset");
  const affinity$ = Symbol("TextSelection.affinity");
  const isDirectional$ = Symbol("TextSelection.isDirectional");
  dart.setMethodSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(text_editing.TextSelection, [], {affinity: ui.TextAffinity, baseOffset: core.int, extentOffset: core.int, isDirectional: core.bool})
  }));
  dart.setGetterSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(text_editing.TextSelection.__proto__),
    base: ui.TextPosition,
    extent: ui.TextPosition
  }));
  dart.setLibraryUri(text_editing.TextSelection, "package:flutter/src/services/text_editing.dart");
  dart.setFieldSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getFields(text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_editing.TextSelection, ['hashCode']);
  const _entries = dart.privateName(recognizer, "_entries");
  const _trackedPointers = dart.privateName(recognizer, "_trackedPointers");
  const _team = dart.privateName(recognizer, "_team");
  const _addPointerToArena = dart.privateName(recognizer, "_addPointerToArena");
  const _pointerToKind = dart.privateName(recognizer, "_pointerToKind");
  const _kindFilter = dart.privateName(recognizer, "_kindFilter");
  arena.GestureArenaMember = class GestureArenaMember extends core.Object {};
  (arena.GestureArenaMember.new = function() {
    ;
  }).prototype = arena.GestureArenaMember.prototype;
  dart.addTypeTests(arena.GestureArenaMember);
  dart.setLibraryUri(arena.GestureArenaMember, "package:flutter/src/gestures/arena.dart");
  const GestureArenaMember_DiagnosticableTreeMixin$ = class GestureArenaMember_DiagnosticableTreeMixin extends arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$, diagnostics.DiagnosticableTreeMixin);
  recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$ {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    addPointer(event) {
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (dart.test(this.isPointerAllowed(event))) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {
    }
    handleNonAllowedPointer(event) {
    }
    isPointerAllowed(event) {
      return this[_kindFilter] == null || dart.equals(this[_kindFilter], event.kind);
    }
    getKindForPointer(pointer) {
      if (!dart.test(this[_pointerToKind][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 141, 12, "_pointerToKind.containsKey(pointer)");
      return this[_pointerToKind][$_get](pointer);
    }
    dispose() {
    }
    invokeCallback(T, name, callback, opts) {
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 169, 12, "callback != null");
      let result = null;
      try {
        if (!dart.test(dart.fn(() => {
          let t1;
          if (dart.test(debug$.debugPrintRecognizerCallbacksTrace)) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = dart.test(debug$.debugPrintGestureArenaDiagnostics) ? " "[$times](19) + "❙ " : "";
            print.debugPrint(prefix + dart.str(this) + " calling " + dart.str(name) + " callback." + (dart.equals((t1 = report, t1 == null ? null : t1[$isNotEmpty]), true) ? " " + dart.str(report) : ""));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 172, 14, "() {\n        if (debugPrintRecognizerCallbacksTrace) {\n          final String report = debugReport != null ? debugReport() : null;\n          // The 19 in the line below is the width of the prefix used by\n          // _debugLogDiagnostic in arena.dart.\n          final String prefix = debugPrintGestureArenaDiagnostics ? ' ' * 19 + '❙ ' : '';\n          debugPrint('$prefix$this calling $name callback.${ report?.isNotEmpty == true ? \" $report\" : \"\" }');\n        }\n        return true;\n      }");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new assertions.ErrorDescription.new("while handling a gesture"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            yield new diagnostics.StringProperty.new("Handler", name);
            yield new (DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_pointerToKind] = new (IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    this[_kindFilter] = kind;
    ;
  }).prototype = recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(recognizer.GestureRecognizer);
  const debugOwner$ = Symbol("GestureRecognizer.debugOwner");
  dart.setMethodSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [T, [core.String, dart.fnType(T, [])], {debugReport: dart.fnType(core.String, [])}])
  }));
  dart.setLibraryUri(recognizer.GestureRecognizer, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(core.Object),
    [_kindFilter]: dart.finalFieldType(ui.PointerDeviceKind),
    [_pointerToKind]: dart.finalFieldType(core.Map$(core.int, ui.PointerDeviceKind))
  }));
  recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends recognizer.GestureRecognizer {
    handleNonAllowedPointer(event) {
      this.resolve(arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
    }
    resolve(disposition) {
      let localEntries = ListOfGestureArenaEntry().from(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    resolvePointer(pointer, disposition) {
      let entry = this[_entries][$_get](pointer);
      if (entry != null) {
        entry.resolve(disposition);
        this[_entries][$remove](pointer);
      }
    }
    dispose() {
      this.resolve(arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        binding$.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 276, 12, "t(_entries.isEmp");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 294, 12, "t(value != nu");
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 295, 12, "t(_entries.isEmp");
      if (!dart.test(this[_trackedPointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 296, 12, "t(_trackedPointers.isEmp");
      if (!(this[_team] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 297, 12, "t(_team == nu");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (this[_team] != null) return this[_team].add(pointer, this);
      return binding$.GestureBinding.instance.gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer, transform) {
      if (transform === void 0) transform = null;
      binding$.GestureBinding.instance.pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'), transform);
      this[_trackedPointers].add(pointer);
      if (!!dart.test(this[_entries][$containsValue](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 320, 12, "t(!_entries.containsValue(pointe");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (dart.test(this[_trackedPointers].contains(pointer))) {
        binding$.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (dart.test(this[_trackedPointers][$isEmpty])) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_entries] = new (IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (_IdentityHashSetOfint()).new();
    this[_team] = null;
    recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    resolvePointer: dart.fnType(dart.void, [core.int, arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int], [vector_math_64.Matrix4]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: team.GestureArenaTeam
  }));
  dart.setSetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: team.GestureArenaTeam
  }));
  dart.setLibraryUri(recognizer.OneSequenceGestureRecognizer, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(core.Map$(core.int, arena.GestureArenaEntry)),
    [_trackedPointers]: dart.finalFieldType(core.Set$(core.int)),
    [_team]: dart.fieldType(team.GestureArenaTeam)
  }));
  eager.EagerGestureRecognizer = class EagerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      this.resolve(arena.GestureDisposition.accepted);
      this.stopTrackingPointer(event.pointer);
    }
    get debugDescription() {
      return "eager";
    }
    didStopTrackingLastPointer(pointer) {
    }
    handleEvent(event) {
    }
  };
  (eager.EagerGestureRecognizer.new = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    eager.EagerGestureRecognizer.__proto__.new.call(this, {kind: kind});
    ;
  }).prototype = eager.EagerGestureRecognizer.prototype;
  dart.addTypeTests(eager.EagerGestureRecognizer);
  dart.setMethodSignature(eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getMethods(eager.EagerGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getGetters(eager.EagerGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(eager.EagerGestureRecognizer, "package:flutter/src/gestures/eager.dart");
  const _name$0 = dart.privateName(system_sound, "_name");
  let C15;
  let C16;
  system_sound.SystemSoundType = class SystemSoundType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (system_sound.SystemSoundType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = system_sound.SystemSoundType.prototype;
  dart.addTypeTests(system_sound.SystemSoundType);
  dart.setLibraryUri(system_sound.SystemSoundType, "package:flutter/src/services/system_sound.dart");
  dart.setFieldSignature(system_sound.SystemSoundType, () => ({
    __proto__: dart.getFields(system_sound.SystemSoundType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_sound.SystemSoundType, ['toString']);
  system_sound.SystemSoundType.click = C15 || CT.C15;
  system_sound.SystemSoundType.values = C16 || CT.C16;
  system_sound.SystemSound = class SystemSound extends core.Object {
    static play(type) {
      return async.async(dart.void, function* play() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemSound.play", dart.toString(type));
      });
    }
  };
  (system_sound.SystemSound.__ = function() {
    ;
  }).prototype = system_sound.SystemSound.prototype;
  dart.addTypeTests(system_sound.SystemSound);
  dart.setLibraryUri(system_sound.SystemSound, "package:flutter/src/services/system_sound.dart");
  drag$.Drag = class Drag extends core.Object {
    update(details) {
    }
    end(details) {
    }
    cancel() {
    }
  };
  (drag$.Drag.new = function() {
    ;
  }).prototype = drag$.Drag.prototype;
  dart.addTypeTests(drag$.Drag);
  dart.setMethodSignature(drag$.Drag, () => ({
    __proto__: dart.getMethods(drag$.Drag.__proto__),
    update: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    end: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(drag$.Drag, "package:flutter/src/gestures/drag.dart");
  const _name$1 = dart.privateName(raw_keyboard, "_name");
  let C17;
  let C18;
  let C19;
  let C20;
  const _isLeftRightModifierPressed = dart.privateName(raw_keyboard_android, "_isLeftRightModifierPressed");
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  raw_keyboard.RawKeyEventData = class RawKeyEventData extends core.Object {
    get isControlPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.controlModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isShiftPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.shiftModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isAltPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.altModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isMetaPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.metaModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get modifiersPressed() {
      let result = new (LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of raw_keyboard.ModifierKey.values) {
        if (dart.test(this.isModifierPressed(key))) {
          result[$_set](key, this.getModifierSide(key));
        }
      }
      return result;
    }
  };
  (raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEventData);
  dart.setGetterSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEventData, "package:flutter/src/services/raw_keyboard.dart");
  raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get plainCodePoint() {
      return this[plainCodePoint$];
    }
    set plainCodePoint(value) {
      super.plainCodePoint = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get eventSource() {
      return this[eventSource$];
    }
    set eventSource(value) {
      super.eventSource = value;
    }
    get vendorId() {
      return this[vendorId$];
    }
    set vendorId(value) {
      super.vendorId = value;
    }
    get productId() {
      return this[productId$];
    }
    set productId(value) {
      super.productId = value;
    }
    get keyLabel() {
      return this.plainCodePoint === 0 ? null : core.String.fromCharCode((dart.notNull(this.plainCodePoint) & 2147483647) >>> 0);
    }
    get physicalKey() {
      let t2;
      if (dart.test(keyboard_maps.kAndroidToPhysicalKey[$containsKey](this.scanCode))) {
        t2 = keyboard_maps.kAndroidToPhysicalKey[$_get](this.scanCode);
        return t2 == null ? keyboard_key.PhysicalKeyboardKey.none : t2;
      }
      if ((dart.notNull(this.eventSource) & 16777232) >>> 0 === 16777232) {
        let foundKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowUp)) {
          return keyboard_key.PhysicalKeyboardKey.arrowUp;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowDown)) {
          return keyboard_key.PhysicalKeyboardKey.arrowDown;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowLeft)) {
          return keyboard_key.PhysicalKeyboardKey.arrowLeft;
        }
        if (dart.equals(foundKey, keyboard_key.LogicalKeyboardKey.arrowRight)) {
          return keyboard_key.PhysicalKeyboardKey.arrowRight;
        }
      }
      return keyboard_key.PhysicalKeyboardKey.none;
    }
    get logicalKey() {
      let t2;
      let numPadKey = keyboard_maps.kAndroidNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let combinedCodePoint = (dart.notNull(this.plainCodePoint) & 2147483647) >>> 0;
        let keyId = (0 | (combinedCodePoint & 4294967295.0) >>> 0) >>> 0;
        t2 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t2 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t2;
      }
      let newKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((8589934592.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Android key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C17 || CT.C17:
        {
          return true;
        }
        case C18 || CT.C18:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        case C19 || CT.C19:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0;
        }
        case C20 || CT.C20:
        {
          return (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C17 || CT.C17;
      if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 225, 12, "side != null");
      switch (key) {
        case C21 || CT.C21:
        {
          return this[_isLeftRightModifierPressed](side, 4096, 8192, 16384);
        }
        case C22 || CT.C22:
        {
          return this[_isLeftRightModifierPressed](side, 1, 64, 128);
        }
        case C23 || CT.C23:
        {
          return this[_isLeftRightModifierPressed](side, 2, 16, 32);
        }
        case C24 || CT.C24:
        {
          return this[_isLeftRightModifierPressed](side, 65536, 131072, 262144);
        }
        case C25 || CT.C25:
        {
          return (dart.notNull(this.metaState) & 1048576) !== 0;
        }
        case C26 || CT.C26:
        {
          return (dart.notNull(this.metaState) & 2097152) !== 0;
        }
        case C27 || CT.C27:
        {
          return (dart.notNull(this.metaState) & 4194304) !== 0;
        }
        case C28 || CT.C28:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case C29 || CT.C29:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.metaState) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case C21 || CT.C21:
        {
          return findSide(8192, 16384);
        }
        case C22 || CT.C22:
        {
          return findSide(64, 128);
        }
        case C23 || CT.C23:
        {
          return findSide(16, 32);
        }
        case C24 || CT.C24:
        {
          return findSide(131072, 262144);
        }
        case C25 || CT.C25:
        case C26 || CT.C26:
        case C27 || CT.C27:
        case C28 || CT.C28:
        case C29 || CT.C29:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 281, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + " flags: " + dart.str(this.flags) + ", codePoint: " + dart.str(this.codePoint) + ", " + "keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + ", metaState: " + dart.str(this.metaState) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    let eventSource = opts && 'eventSource' in opts ? opts.eventSource : 0;
    let vendorId = opts && 'vendorId' in opts ? opts.vendorId : 0;
    let productId = opts && 'productId' in opts ? opts.productId : 0;
    this[flags$] = flags;
    this[codePoint$] = codePoint;
    this[plainCodePoint$] = plainCodePoint;
    this[keyCode$] = keyCode;
    this[scanCode$] = scanCode;
    this[metaState$] = metaState;
    this[eventSource$] = eventSource;
    this[vendorId$] = vendorId;
    this[productId$] = productId;
    if (!(flags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 39, 15, "flags != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 40, 15, "codePoint != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 41, 15, "keyCode != null");
    if (!(scanCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 42, 15, "scanCode != null");
    if (!(metaState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_android.dart", 43, 15, "metaState != null");
    raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(raw_keyboard_android.RawKeyEventDataAndroid);
  const flags$ = Symbol("RawKeyEventDataAndroid.flags");
  const codePoint$ = Symbol("RawKeyEventDataAndroid.codePoint");
  const plainCodePoint$ = Symbol("RawKeyEventDataAndroid.plainCodePoint");
  const keyCode$ = Symbol("RawKeyEventDataAndroid.keyCode");
  const scanCode$ = Symbol("RawKeyEventDataAndroid.scanCode");
  const metaState$ = Symbol("RawKeyEventDataAndroid.metaState");
  const eventSource$ = Symbol("RawKeyEventDataAndroid.eventSource");
  const vendorId$ = Symbol("RawKeyEventDataAndroid.vendorId");
  const productId$ = Symbol("RawKeyEventDataAndroid.productId");
  dart.setMethodSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getGetters(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_android.RawKeyEventDataAndroid, "package:flutter/src/services/raw_keyboard_android.dart");
  dart.setFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    plainCodePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int),
    eventSource: dart.finalFieldType(core.int),
    vendorId: dart.finalFieldType(core.int),
    productId: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_android.RawKeyEventDataAndroid, ['toString']);
  dart.defineLazy(raw_keyboard_android.RawKeyEventDataAndroid, {
    /*raw_keyboard_android.RawKeyEventDataAndroid._sourceJoystick*/get _sourceJoystick() {
      return 16777232;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  });
  dart.defineLazy(raw_keyboard_android, {
    /*raw_keyboard_android._kCombiningCharacterMask*/get _kCombiningCharacterMask() {
      return 2147483647;
    }
  });
  text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.TextInputFormatter);
  dart.setLibraryUri(text_formatter.TextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      return this.formatFunction(oldValue, newValue);
    }
  };
  (text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 64, 14, "formatFunction != null");
    ;
  }).prototype = text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter._SimpleTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]))
  }));
  text_formatter.BlacklistingTextInputFormatter = class BlacklistingTextInputFormatter extends text_formatter.TextInputFormatter {
    get blacklistedPattern() {
      return this[blacklistedPattern$];
    }
    set blacklistedPattern(value) {
      super.blacklistedPattern = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => substring[$replaceAll](this.blacklistedPattern, this.replacementString), StringToString()));
    }
  };
  (text_formatter.BlacklistingTextInputFormatter.new = function(blacklistedPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[blacklistedPattern$] = blacklistedPattern;
    this[replacementString$] = replacementString;
    if (!(blacklistedPattern != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 99, 15, "blacklistedPattern != null");
    ;
  }).prototype = text_formatter.BlacklistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.BlacklistingTextInputFormatter);
  const blacklistedPattern$ = Symbol("BlacklistingTextInputFormatter.blacklistedPattern");
  const replacementString$ = Symbol("BlacklistingTextInputFormatter.replacementString");
  dart.setMethodSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.BlacklistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.BlacklistingTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.BlacklistingTextInputFormatter.__proto__),
    blacklistedPattern: dart.finalFieldType(core.Pattern),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(text_formatter.BlacklistingTextInputFormatter, {
    /*text_formatter.BlacklistingTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.BlacklistingTextInputFormatter.new(core.RegExp.new("\\n"));
    }
  });
  text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    formatEditUpdate(oldValue, newValue) {
      if (this.maxLength != null && dart.notNull(this.maxLength) > 0 && dart.notNull(newValue.text[$runes][$length]) > dart.notNull(this.maxLength)) {
        let newSelection = newValue.selection.copyWith({baseOffset: math.min(core.int, newValue.selection.start, this.maxLength), extentOffset: math.min(core.int, newValue.selection.end, this.maxLength)});
        let iterator = new core.RuneIterator.new(newValue.text);
        if (dart.test(iterator.moveNext())) for (let count = 0; count < dart.notNull(this.maxLength); count = count + 1)
          if (!dart.test(iterator.moveNext())) break;
        let truncated = newValue.text[$substring](0, iterator.rawIndex);
        return new text_input.TextEditingValue.new({text: truncated, selection: newSelection, composing: text_editing.TextRange.empty});
      }
      return newValue;
    }
  };
  (text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength) {
    this[maxLength$] = maxLength;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 140, 14, "maxLength == null || maxLength == -1 || maxLength > 0");
    ;
  }).prototype = text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.LengthLimitingTextInputFormatter);
  const maxLength$ = Symbol("LengthLimitingTextInputFormatter.maxLength");
  dart.setMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.LengthLimitingTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(core.int)
  }));
  text_formatter.WhitelistingTextInputFormatter = class WhitelistingTextInputFormatter extends text_formatter.TextInputFormatter {
    get whitelistedPattern() {
      return this[whitelistedPattern$];
    }
    set whitelistedPattern(value) {
      super.whitelistedPattern = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => this.whitelistedPattern[$allMatches](substring)[$map](core.String, dart.fn(match => match.group(0), MatchToString()))[$join](), StringToString()));
    }
  };
  (text_formatter.WhitelistingTextInputFormatter.new = function(whitelistedPattern) {
    this[whitelistedPattern$] = whitelistedPattern;
    if (!(whitelistedPattern != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_formatter.dart", 219, 14, "ssert(whitelistedPattern !");
    ;
  }).prototype = text_formatter.WhitelistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.WhitelistingTextInputFormatter);
  const whitelistedPattern$ = Symbol("WhitelistingTextInputFormatter.whitelistedPattern");
  dart.setMethodSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.WhitelistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.WhitelistingTextInputFormatter, "package:flutter/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.WhitelistingTextInputFormatter.__proto__),
    whitelistedPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(text_formatter.WhitelistingTextInputFormatter, {
    /*text_formatter.WhitelistingTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d+"));
    }
  });
  let C30;
  text_formatter._selectionAwareTextManipulation = function _selectionAwareTextManipulation(value, substringManipulation) {
    let t2;
    let selectionStartIndex = value.selection.start;
    let selectionEndIndex = value.selection.end;
    let manipulatedText = null;
    let manipulatedSelection = null;
    if (dart.notNull(selectionStartIndex) < 0 || dart.notNull(selectionEndIndex) < 0) {
      manipulatedText = substringManipulation(value.text);
    } else {
      let beforeSelection = substringManipulation(value.text[$substring](0, selectionStartIndex));
      let inSelection = substringManipulation(value.text[$substring](selectionStartIndex, selectionEndIndex));
      let afterSelection = substringManipulation(value.text[$substring](selectionEndIndex));
      manipulatedText = dart.notNull(beforeSelection) + dart.notNull(inSelection) + dart.notNull(afterSelection);
      if (dart.notNull(value.selection.baseOffset) > dart.notNull(value.selection.extentOffset)) {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length + inSelection.length, extentOffset: beforeSelection.length});
      } else {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length, extentOffset: beforeSelection.length + inSelection.length});
      }
    }
    return new text_input.TextEditingValue.new({text: manipulatedText, selection: (t2 = manipulatedSelection, t2 == null ? C30 || CT.C30 : t2), composing: manipulatedText == value.text ? value.composing : text_editing.TextRange.empty});
  };
  const _isLeftRightModifierPressed$ = dart.privateName(raw_keyboard_fuchsia, "_isLeftRightModifierPressed");
  raw_keyboard_fuchsia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.codePoint === 0 ? null : core.String.fromCharCode(this.codePoint);
    }
    get logicalKey() {
      if (this.codePoint !== 0) {
        return new keyboard_key.LogicalKeyboardKey.new((0 | (dart.notNull(this.codePoint) & 4294967295.0) >>> 0) >>> 0, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + dart.str(this.keyLabel)});
      }
      let newKey = keyboard_maps.kFuchsiaToLogicalKey[$_get]((dart.notNull(this.hidUsage) | 4294967296.0) >>> 0);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((12884901888.0 | dart.notNull(this.hidUsage) | 1099511627776.0) >>> 0, {debugName: false ? null : "Ephemeral Fuchsia key code " + dart.str(this.hidUsage)}) : null;
      return newKey;
    }
    get physicalKey() {
      let t2;
      t2 = keyboard_maps.kFuchsiaToPhysicalKey[$_get](this.hidUsage);
      return t2 == null ? keyboard_key.PhysicalKeyboardKey.none : t2;
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C17 || CT.C17:
        {
          return true;
        }
        case C18 || CT.C18:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case C19 || CT.C19:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case C20 || CT.C20:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C17 || CT.C17;
      if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 115, 12, "side != null");
      switch (key) {
        case C21 || CT.C21:
        {
          return this[_isLeftRightModifierPressed$](side, 24, 8, 16);
        }
        case C22 || CT.C22:
        {
          return this[_isLeftRightModifierPressed$](side, 6, 2, 4);
        }
        case C23 || CT.C23:
        {
          return this[_isLeftRightModifierPressed$](side, 96, 32, 64);
        }
        case C24 || CT.C24:
        {
          return this[_isLeftRightModifierPressed$](side, 384, 128, 256);
        }
        case C25 || CT.C25:
        {
          return (dart.notNull(this.modifiers) & 1) !== 0;
        }
        case C26 || CT.C26:
        case C27 || CT.C27:
        case C28 || CT.C28:
        case C29 || CT.C29:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, combinedMask) => {
        let combined = (dart.notNull(this.modifiers) & dart.notNull(combinedMask)) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSide());
      switch (key) {
        case C21 || CT.C21:
        {
          return findSide(8, 16, 24);
        }
        case C22 || CT.C22:
        {
          return findSide(2, 4, 6);
        }
        case C23 || CT.C23:
        {
          return findSide(32, 64, 96);
        }
        case C24 || CT.C24:
        {
          return findSide(128, 256, 384);
        }
        case C25 || CT.C25:
        {
          return (dart.notNull(this.modifiers) & 1) === 0 ? null : raw_keyboard.KeyboardSide.all;
        }
        case C26 || CT.C26:
        case C27 || CT.C27:
        case C28 || CT.C28:
        case C29 || CT.C29:
        {
          return null;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 170, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(hidUsage: " + dart.str(this.hidUsage) + ", codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$0] = codePoint;
    this[modifiers$] = modifiers;
    if (!(hidUsage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 27, 15, "hidUsage != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 28, 15, "codePoint != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_fuchsia.dart", 29, 15, "modifiers != null");
    raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_fuchsia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  const hidUsage$ = Symbol("RawKeyEventDataFuchsia.hidUsage");
  const codePoint$0 = Symbol("RawKeyEventDataFuchsia.codePoint");
  const modifiers$ = Symbol("RawKeyEventDataFuchsia.modifiers");
  dart.setMethodSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getGetters(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    keyLabel: core.String,
    logicalKey: keyboard_key.LogicalKeyboardKey,
    physicalKey: keyboard_key.PhysicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, "package:flutter/src/services/raw_keyboard_fuchsia.dart");
  dart.setFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['toString']);
  dart.defineLazy(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, {
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 6;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 24;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 96;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 384;
    }
  });
  clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
    ;
  }).prototype = clipboard.ClipboardData.prototype;
  dart.addTypeTests(clipboard.ClipboardData);
  const text$ = Symbol("ClipboardData.text");
  dart.setLibraryUri(clipboard.ClipboardData, "package:flutter/src/services/clipboard.dart");
  dart.setFieldSignature(clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  clipboard.Clipboard = class Clipboard extends core.Object {
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "Clipboard.setData", new (IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(clipboard.ClipboardData, function* getData() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new clipboard.ClipboardData.new({text: core.String._check(result[$_get]("text"))});
      });
    }
  };
  (clipboard.Clipboard.__ = function() {
    ;
  }).prototype = clipboard.Clipboard.prototype;
  dart.addTypeTests(clipboard.Clipboard);
  dart.setLibraryUri(clipboard.Clipboard, "package:flutter/src/services/clipboard.dart");
  dart.defineLazy(clipboard.Clipboard, {
    /*clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  });
  raw_keyboard_linux.RawKeyEventDataLinux = class RawKeyEventDataLinux extends raw_keyboard.RawKeyEventData {
    get keyHelper() {
      return this[keyHelper$];
    }
    set keyHelper(value) {
      super.keyHelper = value;
    }
    get unicodeScalarValues() {
      return this[unicodeScalarValues$];
    }
    set unicodeScalarValues(value) {
      super.unicodeScalarValues = value;
    }
    get scanCode() {
      return this[scanCode$0];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get keyCode() {
      return this[keyCode$0];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$0];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.unicodeScalarValues === 0 ? null : core.String.fromCharCode(this.unicodeScalarValues);
    }
    get physicalKey() {
      let t2;
      t2 = keyboard_maps.kLinuxToPhysicalKey[$_get](this.scanCode);
      return t2 == null ? keyboard_key.PhysicalKeyboardKey.none : t2;
    }
    get logicalKey() {
      let t2;
      let numPadKey = this.keyHelper.numpadKey(this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let keyId = (0 | (dart.notNull(this.unicodeScalarValues) & 4294967295.0) >>> 0) >>> 0;
        t2 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t2 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t2;
      }
      let newKey = this.keyHelper.logicalKey(this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((25769803776.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C17 || CT.C17;
      return this.keyHelper.isModifierPressed(key, this.modifiers, {side: side});
    }
    getModifierSide(key) {
      return this.keyHelper.getModifierSide(key);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + "," + " unicodeScalarValues: " + dart.str(this.unicodeScalarValues) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_linux.RawKeyEventDataLinux.new = function(opts) {
    let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
    let unicodeScalarValues = opts && 'unicodeScalarValues' in opts ? opts.unicodeScalarValues : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[keyHelper$] = keyHelper;
    this[unicodeScalarValues$] = unicodeScalarValues;
    this[scanCode$0] = scanCode;
    this[keyCode$0] = keyCode;
    this[modifiers$0] = modifiers;
    if (!(scanCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 30, 15, "scanCode != null");
    if (!(unicodeScalarValues != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 31, 15, "unicodeScalarValues != null");
    if (!((dart.notNull(unicodeScalarValues) & ~4294967295.0 >>> 0) === 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 32, 15, "(unicodeScalarValues & ~LogicalKeyboardKey.valueMask) == 0");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 33, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 34, 15, "modifiers != null");
    if (!(keyHelper != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 35, 15, "keyHelper != null");
    raw_keyboard_linux.RawKeyEventDataLinux.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_linux.RawKeyEventDataLinux.prototype;
  dart.addTypeTests(raw_keyboard_linux.RawKeyEventDataLinux);
  const keyHelper$ = Symbol("RawKeyEventDataLinux.keyHelper");
  const unicodeScalarValues$ = Symbol("RawKeyEventDataLinux.unicodeScalarValues");
  const scanCode$0 = Symbol("RawKeyEventDataLinux.scanCode");
  const keyCode$0 = Symbol("RawKeyEventDataLinux.keyCode");
  const modifiers$0 = Symbol("RawKeyEventDataLinux.modifiers");
  dart.setMethodSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_linux.RawKeyEventDataLinux, "package:flutter/src/services/raw_keyboard_linux.dart");
  dart.setFieldSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getFields(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyHelper: dart.finalFieldType(raw_keyboard_linux.KeyHelper),
    unicodeScalarValues: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_linux.RawKeyEventDataLinux, ['toString']);
  raw_keyboard_linux.KeyHelper = class KeyHelper extends core.Object {
    static new(toolkit) {
      if (toolkit === "glfw") {
        return new raw_keyboard_linux.GLFWKeyHelper.new();
      } else {
        dart.throw(assertions.FlutterError.new("Window toolkit not recognized: " + dart.str(toolkit)));
      }
    }
  };
  (raw_keyboard_linux.KeyHelper[dart.mixinNew] = function() {
  }).prototype = raw_keyboard_linux.KeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.KeyHelper);
  dart.setLibraryUri(raw_keyboard_linux.KeyHelper, "package:flutter/src/services/raw_keyboard_linux.dart");
  const Object_KeyHelper$ = class Object_KeyHelper extends core.Object {};
  (Object_KeyHelper$.new = function() {
  }).prototype = Object_KeyHelper$.prototype;
  dart.applyMixin(Object_KeyHelper$, raw_keyboard_linux.KeyHelper);
  raw_keyboard_linux.GLFWKeyHelper = class GLFWKeyHelper extends Object_KeyHelper$ {
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C17 || CT.C17;
      switch (key) {
        case C21 || CT.C21:
        {
          return (dart.notNull(modifiers) & 2) !== 0;
        }
        case C22 || CT.C22:
        {
          return (dart.notNull(modifiers) & 1) !== 0;
        }
        case C23 || CT.C23:
        {
          return (dart.notNull(modifiers) & 4) !== 0;
        }
        case C24 || CT.C24:
        {
          return (dart.notNull(modifiers) & 8) !== 0;
        }
        case C25 || CT.C25:
        {
          return (dart.notNull(modifiers) & 16) !== 0;
        }
        case C26 || CT.C26:
        {
          return (dart.notNull(modifiers) & 32) !== 0;
        }
        case C28 || CT.C28:
        case C29 || CT.C29:
        case C27 || CT.C27:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      switch (key) {
        case C21 || CT.C21:
        case C22 || CT.C22:
        case C23 || CT.C23:
        case C24 || CT.C24:
        {
          return raw_keyboard.KeyboardSide.any;
        }
        case C25 || CT.C25:
        case C26 || CT.C26:
        case C28 || CT.C28:
        case C29 || CT.C29:
        case C27 || CT.C27:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_linux.dart", 246, 12, "false");
      return null;
    }
    numpadKey(keyCode) {
      return keyboard_maps.kGlfwNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps.kGlfwToLogicalKey[$_get](keyCode);
    }
  };
  (raw_keyboard_linux.GLFWKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GLFWKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GLFWKeyHelper);
  dart.setMethodSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(keyboard_key.LogicalKeyboardKey, [core.int]),
    logicalKey: dart.fnType(keyboard_key.LogicalKeyboardKey, [core.int])
  }));
  dart.setLibraryUri(raw_keyboard_linux.GLFWKeyHelper, "package:flutter/src/services/raw_keyboard_linux.dart");
  dart.defineLazy(raw_keyboard_linux.GLFWKeyHelper, {
    /*raw_keyboard_linux.GLFWKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 16;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierControl*/get modifierControl() {
      return 2;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierAlt*/get modifierAlt() {
      return 4;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierNumericPad*/get modifierNumericPad() {
      return 32;
    }
  });
  binary_messenger.BinaryMessenger = class BinaryMessenger extends core.Object {};
  (binary_messenger.BinaryMessenger.new = function() {
    ;
  }).prototype = binary_messenger.BinaryMessenger.prototype;
  dart.addTypeTests(binary_messenger.BinaryMessenger);
  dart.setLibraryUri(binary_messenger.BinaryMessenger, "package:flutter/src/services/binary_messenger.dart");
  dart.copyProperties(binary_messenger, {
    get defaultBinaryMessenger() {
      if (!dart.test(dart.fn(() => {
        if (binding$0.ServicesBinding.instance == null) {
          dart.throw(assertions.FlutterError.new("ServicesBinding.defaultBinaryMessenger was accessed before the " + "binding was initialized.\n" + "If you're running an application and need to access the binary " + "messenger before `runApp()` has been called (for example, during " + "plugin initialization), then you need to explicitly call the " + "`WidgetsFlutterBinding.ensureInitialized()` first.\n" + "If you're running a test, you can call the " + "`TestWidgetsFlutterBinding.ensureInitialized()` as the first line in " + "your test's `main()` method to initialize the binding."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/binary_messenger.dart", 71, 10, "() {\n    if (ServicesBinding.instance == null) {\n      throw FlutterError(\n        'ServicesBinding.defaultBinaryMessenger was accessed before the '\n        'binding was initialized.\\n'\n        'If you\\'re running an application and need to access the binary '\n        'messenger before `runApp()` has been called (for example, during '\n        'plugin initialization), then you need to explicitly call the '\n        '`WidgetsFlutterBinding.ensureInitialized()` first.\\n'\n        'If you\\'re running a test, you can call the '\n        '`TestWidgetsFlutterBinding.ensureInitialized()` as the first line in '\n        'your test\\'s `main()` method to initialize the binding.'\n      );\n    }\n    return true;\n  }()");
      return binding$0.ServicesBinding.instance.defaultBinaryMessenger;
    }
  });
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    dart.setLibraryUri(MessageCodec, "package:flutter/src/services/message_codec.dart");
    return MessageCodec;
  });
  message_codec.MessageCodec = message_codec.MessageCodec$();
  dart.addTypeTests(message_codec.MessageCodec, _is_MessageCodec_default);
  message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.method) + ", " + dart.str(this.arguments) + ")";
    }
  };
  (message_codec.MethodCall.new = function(method, arguments$0) {
    if (arguments$0 === void 0) arguments$0 = null;
    this[method$] = method;
    this[arguments$] = arguments$0;
    if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codec.dart", 40, 14, "method != null");
    ;
  }).prototype = message_codec.MethodCall.prototype;
  dart.addTypeTests(message_codec.MethodCall);
  const method$ = Symbol("MethodCall.method");
  const arguments$ = Symbol("MethodCall.arguments");
  dart.setLibraryUri(message_codec.MethodCall, "package:flutter/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.MethodCall, () => ({
    __proto__: dart.getFields(message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.MethodCall, ['toString']);
  message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (message_codec.MethodCodec.new = function() {
    ;
  }).prototype = message_codec.MethodCodec.prototype;
  dart.addTypeTests(message_codec.MethodCodec);
  dart.setLibraryUri(message_codec.MethodCodec, "package:flutter/src/services/message_codec.dart");
  message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    toString() {
      return "PlatformException(" + dart.str(this.code) + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ")";
    }
  };
  (message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codec.dart", 109, 15, "code != null");
    ;
  }).prototype = message_codec.PlatformException.prototype;
  dart.addTypeTests(message_codec.PlatformException);
  const code$ = Symbol("PlatformException.code");
  const message$ = Symbol("PlatformException.message");
  const details$ = Symbol("PlatformException.details");
  message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.PlatformException, "package:flutter/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.PlatformException, () => ({
    __proto__: dart.getFields(message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String),
    details: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.PlatformException, ['toString']);
  message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (message_codec.MissingPluginException.new = function(message) {
    if (message === void 0) message = null;
    this[message$0] = message;
    ;
  }).prototype = message_codec.MissingPluginException.prototype;
  dart.addTypeTests(message_codec.MissingPluginException);
  const message$0 = Symbol("MissingPluginException.message");
  message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.MissingPluginException, "package:flutter/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(message_codec.MissingPluginException, ['toString']);
  const _name$2 = dart.privateName(recognizer, "_name");
  let C31;
  let C32;
  let C33;
  recognizer.DragStartBehavior = class DragStartBehavior extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (recognizer.DragStartBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(recognizer.DragStartBehavior);
  dart.setLibraryUri(recognizer.DragStartBehavior, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.DragStartBehavior, () => ({
    __proto__: dart.getFields(recognizer.DragStartBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.DragStartBehavior, ['toString']);
  recognizer.DragStartBehavior.down = C31 || CT.C31;
  recognizer.DragStartBehavior.start = C32 || CT.C32;
  recognizer.DragStartBehavior.values = C33 || CT.C33;
  let C34;
  let C35;
  let C36;
  let C37;
  recognizer.GestureRecognizerState = class GestureRecognizerState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (recognizer.GestureRecognizerState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(recognizer.GestureRecognizerState);
  dart.setLibraryUri(recognizer.GestureRecognizerState, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.GestureRecognizerState, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizerState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.GestureRecognizerState, ['toString']);
  recognizer.GestureRecognizerState.ready = C34 || CT.C34;
  recognizer.GestureRecognizerState.possible = C35 || CT.C35;
  recognizer.GestureRecognizerState.defunct = C36 || CT.C36;
  recognizer.GestureRecognizerState.values = C37 || CT.C37;
  const _gestureAccepted = dart.privateName(recognizer, "_gestureAccepted");
  const _timer = dart.privateName(recognizer, "_timer");
  const _getGlobalDistance = dart.privateName(recognizer, "_getGlobalDistance");
  const _stopTimer = dart.privateName(recognizer, "_stopTimer");
  recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get primaryPointer() {
      return this[primaryPointer];
    }
    set primaryPointer(value) {
      this[primaryPointer] = value;
    }
    get initialPosition() {
      return this[initialPosition];
    }
    set initialPosition(value) {
      this[initialPosition] = value;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      if (dart.equals(this.state, recognizer.GestureRecognizerState.ready)) {
        this.state = recognizer.GestureRecognizerState.possible;
        this.primaryPointer = event.pointer;
        this.initialPosition = new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
        if (this.deadline != null) this[_timer] = async.Timer.new(this.deadline, dart.fn(() => this.didExceedDeadlineWithEvent(event), VoidTovoid()));
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 452, 12, "t(state != GestureRecognizerState.rea");
      if (dart.equals(this.state, recognizer.GestureRecognizerState.possible) && event.pointer == this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !dart.test(this[_gestureAccepted]) && this.preAcceptSlopTolerance != null && dart.notNull(this[_getGlobalDistance](event)) > dart.notNull(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = dart.test(this[_gestureAccepted]) && this.postAcceptSlopTolerance != null && dart.notNull(this[_getGlobalDistance](event)) > dart.notNull(this.postAcceptSlopTolerance);
        if (events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 483, 12, "t(deadline == nu");
    }
    didExceedDeadlineWithEvent(event) {
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      this[_gestureAccepted] = true;
    }
    rejectGesture(pointer) {
      if (pointer == this.primaryPointer && dart.equals(this.state, recognizer.GestureRecognizerState.possible)) {
        this[_stopTimer]();
        this.state = recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 511, 12, "t(state != GestureRecognizerState.rea");
      this[_stopTimer]();
      this.state = recognizer.GestureRecognizerState.ready;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
    [_getGlobalDistance](event) {
      let offset = event.position['-'](this.initialPosition.global);
      return offset.distance;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : 18;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : 18;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[state] = recognizer.GestureRecognizerState.ready;
    this[primaryPointer] = null;
    this[initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 390, 10, "  preAcceptSlopTolerance == null || preAcceptSlopTolerance >=");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter/src/gestures/recognizer.dart", 394, 10, "  postAcceptSlopTolerance == null || postAcceptSlopTolerance >=");
    recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.PrimaryPointerGestureRecognizer);
  const deadline$ = Symbol("PrimaryPointerGestureRecognizer.deadline");
  const preAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  const postAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  const state = Symbol("PrimaryPointerGestureRecognizer.state");
  const primaryPointer = Symbol("PrimaryPointerGestureRecognizer.primaryPointer");
  const initialPosition = Symbol("PrimaryPointerGestureRecognizer.initialPosition");
  dart.setMethodSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getGlobalDistance]: dart.fnType(core.double, [events.PointerEvent])
  }));
  dart.setLibraryUri(recognizer.PrimaryPointerGestureRecognizer, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(core.Duration),
    preAcceptSlopTolerance: dart.finalFieldType(core.double),
    postAcceptSlopTolerance: dart.finalFieldType(core.double),
    state: dart.fieldType(recognizer.GestureRecognizerState),
    primaryPointer: dart.fieldType(core.int),
    initialPosition: dart.fieldType(recognizer.OffsetPair),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const _dy = dart.privateName(ui, "_dy");
  const _dx = dart.privateName(ui, "_dx");
  let C39;
  let C38;
  recognizer.OffsetPair = class OffsetPair extends core.Object {
    get local() {
      return this[local$];
    }
    set local(value) {
      super.local = value;
    }
    get global() {
      return this[global$];
    }
    set global(value) {
      super.global = value;
    }
    static fromEventPosition(event) {
      return new recognizer.OffsetPair.new({local: event.localPosition, global: event.position});
    }
    static fromEventDelta(event) {
      return new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta});
    }
    ['+'](other) {
      return new recognizer.OffsetPair.new({local: this.local['+'](other.local), global: this.global['+'](other.global)});
    }
    ['-'](other) {
      return new recognizer.OffsetPair.new({local: this.local['-'](other.local), global: this.global['-'](other.global)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(local: " + dart.str(this.local) + ", global: " + dart.str(this.global) + ")";
    }
  };
  (recognizer.OffsetPair.new = function(opts) {
    let local = opts && 'local' in opts ? opts.local : null;
    let global = opts && 'global' in opts ? opts.global : null;
    this[local$] = local;
    this[global$] = global;
    ;
  }).prototype = recognizer.OffsetPair.prototype;
  dart.addTypeTests(recognizer.OffsetPair);
  const local$ = Symbol("OffsetPair.local");
  const global$ = Symbol("OffsetPair.global");
  dart.setMethodSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getMethods(recognizer.OffsetPair.__proto__),
    '+': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair]),
    '-': dart.fnType(recognizer.OffsetPair, [recognizer.OffsetPair])
  }));
  dart.setLibraryUri(recognizer.OffsetPair, "package:flutter/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.OffsetPair, () => ({
    __proto__: dart.getFields(recognizer.OffsetPair.__proto__),
    local: dart.finalFieldType(ui.Offset),
    global: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(recognizer.OffsetPair, ['toString']);
  dart.defineLazy(recognizer.OffsetPair, {
    /*recognizer.OffsetPair.zero*/get zero() {
      return C38 || CT.C38;
    }
  });
  const _velocityTracker = dart.privateName(multidrag, "_velocityTracker");
  const _client = dart.privateName(multidrag, "_client");
  const _pendingDelta = dart.privateName(multidrag, "_pendingDelta");
  const _lastPendingEventTimestamp = dart.privateName(multidrag, "_lastPendingEventTimestamp");
  const _arenaEntry = dart.privateName(multidrag, "_arenaEntry");
  const _setArenaEntry = dart.privateName(multidrag, "_setArenaEntry");
  const _move = dart.privateName(multidrag, "_move");
  const _startDrag = dart.privateName(multidrag, "_startDrag");
  const _up = dart.privateName(multidrag, "_up");
  const _cancel = dart.privateName(multidrag, "_cancel");
  multidrag.MultiDragPointerState = class MultiDragPointerState extends core.Object {
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get pendingDelta() {
      return this[_pendingDelta];
    }
    [_setArenaEntry](entry) {
      if (!(this[_arenaEntry] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 52, 12, "_arenaEntry == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 53, 12, "pendingDelta != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 54, 12, "_client == null");
      this[_arenaEntry] = entry;
    }
    resolve(disposition) {
      this[_arenaEntry].resolve(disposition);
    }
    [_move](event) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 66, 12, "_arenaEntry != null");
      if (!dart.test(event.synthesized)) this[_velocityTracker].addPosition(event.timeStamp, event.position);
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 70, 14, "pendingDelta == null");
        this[_client].update(new drag_details.DragUpdateDetails.new({sourceTimeStamp: event.timeStamp, delta: event.delta, globalPosition: event.position}));
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 78, 14, "pendingDelta != null");
        this[_pendingDelta] = this[_pendingDelta]['+'](event.delta);
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this.checkForResolutionAfterMove();
      }
    }
    checkForResolutionAfterMove() {
    }
    rejected() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 104, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 105, 12, "_client == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 106, 12, "pendingDelta != null");
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp] = null;
      this[_arenaEntry] = null;
    }
    [_startDrag](client) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 113, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 114, 12, "_client == null");
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 115, 12, "client != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 116, 12, "pendingDelta != null");
      this[_client] = client;
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: this[_lastPendingEventTimestamp], delta: this.pendingDelta, globalPosition: this.initialPosition});
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp] = null;
      this[_client].update(details);
    }
    [_up]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 130, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 132, 14, "pendingDelta == null");
        let details = new drag_details.DragEndDetails.new({velocity: this[_velocityTracker].getVelocity()});
        let client = this[_client];
        this[_client] = null;
        client.end(details);
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 139, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp] = null;
      }
    }
    [_cancel]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 146, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 148, 14, "pendingDelta == null");
        let client = this[_client];
        this[_client] = null;
        client.cancel();
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 154, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp] = null;
      }
    }
    dispose() {
      let t2;
      t2 = this[_arenaEntry];
      t2 == null ? null : t2.resolve(arena.GestureDisposition.rejected);
      this[_arenaEntry] = null;
      if (!dart.test(dart.fn(() => {
        this[_pendingDelta] = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 166, 12, "() { _pendingDelta = null; return true; }()");
    }
  };
  (multidrag.MultiDragPointerState.new = function(initialPosition) {
    this[_velocityTracker] = new velocity_tracker.VelocityTracker.new();
    this[_client] = null;
    this[_pendingDelta] = ui.Offset.zero;
    this[_lastPendingEventTimestamp] = null;
    this[_arenaEntry] = null;
    this[initialPosition$] = initialPosition;
    if (!(initialPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 31, 14, "initialPosition != null");
    ;
  }).prototype = multidrag.MultiDragPointerState.prototype;
  dart.addTypeTests(multidrag.MultiDragPointerState);
  const initialPosition$ = Symbol("MultiDragPointerState.initialPosition");
  dart.setMethodSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getMethods(multidrag.MultiDragPointerState.__proto__),
    [_setArenaEntry]: dart.fnType(dart.void, [arena.GestureArenaEntry]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    [_move]: dart.fnType(dart.void, [events.PointerMoveEvent]),
    checkForResolutionAfterMove: dart.fnType(dart.void, []),
    rejected: dart.fnType(dart.void, []),
    [_startDrag]: dart.fnType(dart.void, [drag$.Drag]),
    [_up]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getGetters(multidrag.MultiDragPointerState.__proto__),
    pendingDelta: ui.Offset
  }));
  dart.setLibraryUri(multidrag.MultiDragPointerState, "package:flutter/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getFields(multidrag.MultiDragPointerState.__proto__),
    initialPosition: dart.finalFieldType(ui.Offset),
    [_velocityTracker]: dart.finalFieldType(velocity_tracker.VelocityTracker),
    [_client]: dart.fieldType(drag$.Drag),
    [_pendingDelta]: dart.fieldType(ui.Offset),
    [_lastPendingEventTimestamp]: dart.fieldType(core.Duration),
    [_arenaEntry]: dart.fieldType(arena.GestureArenaEntry)
  }));
  const _pointers = dart.privateName(multidrag, "_pointers");
  const _handleEvent = dart.privateName(multidrag, "_handleEvent");
  const _removeState = dart.privateName(multidrag, "_removeState");
  const _is_MultiDragGestureRecognizer_default = Symbol('_is_MultiDragGestureRecognizer_default');
  multidrag.MultiDragGestureRecognizer$ = dart.generic(T => {
    let IdentityMapOfint$T = () => (IdentityMapOfint$T = dart.constFn(_js_helper.IdentityMap$(core.int, T)))();
    class MultiDragGestureRecognizer extends recognizer.GestureRecognizer {
      get onStart() {
        return this[onStart];
      }
      set onStart(value) {
        this[onStart] = value;
      }
      addAllowedPointer(event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 207, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 208, 12, "event.pointer != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 209, 12, "event.position != null");
        if (!!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 210, 12, "!_pointers.containsKey(event.pointer)");
        let state = this.createNewPointerState(event);
        this[_pointers][$_set](event.pointer, state);
        binding$.GestureBinding.instance.pointerRouter.addRoute(event.pointer, dart.bind(this, _handleEvent));
        state[_setArenaEntry](binding$.GestureBinding.instance.gestureArena.add(event.pointer, this));
      }
      [_handleEvent](event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 223, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 224, 12, "event.pointer != null");
        if (!(event.timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 225, 12, "event.timeStamp != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 226, 12, "event.position != null");
        if (!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 227, 12, "_pointers.containsKey(event.pointer)");
        let state = this[_pointers][$_get](event.pointer);
        if (events.PointerMoveEvent.is(event)) {
          state[_move](event);
        } else if (events.PointerUpEvent.is(event)) {
          if (!dart.equals(event.delta, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 233, 14, "event.delta == Offset.zero");
          state[_up]();
          this[_removeState](event.pointer);
        } else if (events.PointerCancelEvent.is(event)) {
          if (!dart.equals(event.delta, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 238, 14, "event.delta == Offset.zero");
          state[_cancel]();
          this[_removeState](event.pointer);
        } else if (!events.PointerDownEvent.is(event)) {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 246, 14, "false");
        }
      }
      acceptGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 252, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (state == null) return;
        state.accepted(dart.fn(initialPosition => this[_startDrag](initialPosition, pointer), OffsetToDrag()));
      }
      [_startDrag](initialPosition, pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 260, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 262, 12, "state != null");
        if (!(state[_pendingDelta] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 263, 12, "state._pendingDelta != null");
        let drag = null;
        if (this.onStart != null) drag = this.invokeCallback(drag$.Drag, "onStart", dart.fn(() => this.onStart(initialPosition), VoidToDrag()));
        if (drag != null) {
          state[_startDrag](drag);
        } else {
          this[_removeState](pointer);
        }
        return drag;
      }
      rejectGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 277, 12, "_pointers != null");
        if (dart.test(this[_pointers][$containsKey](pointer))) {
          let state = this[_pointers][$_get](pointer);
          if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 280, 14, "state != null");
          state.rejected();
          this[_removeState](pointer);
        }
      }
      [_removeState](pointer) {
        if (this[_pointers] == null) {
          return;
        }
        if (!dart.test(this[_pointers][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 292, 12, "_pointers.containsKey(pointer)");
        binding$.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, _handleEvent));
        this[_pointers][$remove](pointer).dispose();
      }
      dispose() {
        this[_pointers][$keys][$toList]()[$forEach](dart.bind(this, _removeState));
        if (!dart.test(this[_pointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 300, 12, "_pointers.isEmpty");
        this[_pointers] = null;
        super.dispose();
      }
    }
    (MultiDragGestureRecognizer.new = function(opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      this[onStart] = null;
      this[_pointers] = new (IdentityMapOfint$T()).new();
      MultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
      ;
    }).prototype = MultiDragGestureRecognizer.prototype;
    dart.addTypeTests(MultiDragGestureRecognizer);
    MultiDragGestureRecognizer.prototype[_is_MultiDragGestureRecognizer_default] = true;
    const onStart = Symbol("MultiDragGestureRecognizer.onStart");
    dart.setMethodSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getMethods(MultiDragGestureRecognizer.__proto__),
      [_handleEvent]: dart.fnType(dart.void, [events.PointerEvent]),
      acceptGesture: dart.fnType(dart.void, [core.int]),
      [_startDrag]: dart.fnType(drag$.Drag, [ui.Offset, core.int]),
      rejectGesture: dart.fnType(dart.void, [core.int]),
      [_removeState]: dart.fnType(dart.void, [core.int])
    }));
    dart.setLibraryUri(MultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
    dart.setFieldSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getFields(MultiDragGestureRecognizer.__proto__),
      onStart: dart.fieldType(dart.fnType(drag$.Drag, [ui.Offset])),
      [_pointers]: dart.fieldType(core.Map$(core.int, T))
    }));
    return MultiDragGestureRecognizer;
  });
  multidrag.MultiDragGestureRecognizer = multidrag.MultiDragGestureRecognizer$();
  dart.addTypeTests(multidrag.MultiDragGestureRecognizer, _is_MultiDragGestureRecognizer_default);
  multidrag._ImmediatePointerState = class _ImmediatePointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 311, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._ImmediatePointerState.new = function(initialPosition) {
    multidrag._ImmediatePointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._ImmediatePointerState.prototype;
  dart.addTypeTests(multidrag._ImmediatePointerState);
  dart.setMethodSignature(multidrag._ImmediatePointerState, () => ({
    __proto__: dart.getMethods(multidrag._ImmediatePointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._ImmediatePointerState, "package:flutter/src/gestures/multidrag.dart");
  multidrag.ImmediateMultiDragGestureRecognizer = class ImmediateMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._ImmediatePointerState) {
    createNewPointerState(event) {
      return new multidrag._ImmediatePointerState.new(event.position);
    }
    get debugDescription() {
      return "multidrag";
    }
  };
  (multidrag.ImmediateMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.ImmediateMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.ImmediateMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.ImmediateMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._ImmediatePointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.ImmediateMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  multidrag._HorizontalPointerState = class _HorizontalPointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 360, 12, "pendingDelta != null");
      if (this.pendingDelta.dx[$abs]() > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._HorizontalPointerState.new = function(initialPosition) {
    multidrag._HorizontalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._HorizontalPointerState.prototype;
  dart.addTypeTests(multidrag._HorizontalPointerState);
  dart.setMethodSignature(multidrag._HorizontalPointerState, () => ({
    __proto__: dart.getMethods(multidrag._HorizontalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._HorizontalPointerState, "package:flutter/src/gestures/multidrag.dart");
  multidrag.HorizontalMultiDragGestureRecognizer = class HorizontalMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._HorizontalPointerState) {
    createNewPointerState(event) {
      return new multidrag._HorizontalPointerState.new(event.position);
    }
    get debugDescription() {
      return "horizontal multidrag";
    }
  };
  (multidrag.HorizontalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.HorizontalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.HorizontalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.HorizontalMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._HorizontalPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.HorizontalMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  multidrag._VerticalPointerState = class _VerticalPointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 409, 12, "pendingDelta != null");
      if (this.pendingDelta.dy[$abs]() > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._VerticalPointerState.new = function(initialPosition) {
    multidrag._VerticalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._VerticalPointerState.prototype;
  dart.addTypeTests(multidrag._VerticalPointerState);
  dart.setMethodSignature(multidrag._VerticalPointerState, () => ({
    __proto__: dart.getMethods(multidrag._VerticalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._VerticalPointerState, "package:flutter/src/gestures/multidrag.dart");
  multidrag.VerticalMultiDragGestureRecognizer = class VerticalMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._VerticalPointerState) {
    createNewPointerState(event) {
      return new multidrag._VerticalPointerState.new(event.position);
    }
    get debugDescription() {
      return "vertical multidrag";
    }
  };
  (multidrag.VerticalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.VerticalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.VerticalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.VerticalMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._VerticalPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.VerticalMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  const _timer$ = dart.privateName(multidrag, "_timer");
  const _starter = dart.privateName(multidrag, "_starter");
  const _delayPassed = dart.privateName(multidrag, "_delayPassed");
  const _ensureTimerStopped = dart.privateName(multidrag, "_ensureTimerStopped");
  multidrag._DelayedPointerState = class _DelayedPointerState extends multidrag.MultiDragPointerState {
    [_delayPassed]() {
      if (!(this[_timer$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 463, 12, "_timer != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 464, 12, "pendingDelta != null");
      if (!(dart.notNull(this.pendingDelta.distance) <= 18)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 465, 12, "pendingDelta.distance <= kTouchSlop");
      this[_timer$] = null;
      if (this[_starter] != null) {
        this[_starter](this.initialPosition);
        this[_starter] = null;
      } else {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 473, 12, "_starter == null");
    }
    [_ensureTimerStopped]() {
      let t2;
      t2 = this[_timer$];
      t2 == null ? null : t2.cancel();
      this[_timer$] = null;
    }
    accepted(starter) {
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 483, 12, "_starter == null");
      if (this[_timer$] == null)
        starter(this.initialPosition);
      else
        this[_starter] = starter;
    }
    checkForResolutionAfterMove() {
      if (this[_timer$] == null) {
        if (!(this[_starter] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 498, 14, "_starter != null");
        return;
      }
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 501, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18) {
        this.resolve(arena.GestureDisposition.rejected);
        this[_ensureTimerStopped]();
      }
    }
    dispose() {
      this[_ensureTimerStopped]();
      super.dispose();
    }
  };
  (multidrag._DelayedPointerState.new = function(initialPosition, delay) {
    this[_timer$] = null;
    this[_starter] = null;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 454, 16, "delay != null");
    multidrag._DelayedPointerState.__proto__.new.call(this, initialPosition);
    this[_timer$] = async.Timer.new(delay, dart.bind(this, _delayPassed));
  }).prototype = multidrag._DelayedPointerState.prototype;
  dart.addTypeTests(multidrag._DelayedPointerState);
  dart.setMethodSignature(multidrag._DelayedPointerState, () => ({
    __proto__: dart.getMethods(multidrag._DelayedPointerState.__proto__),
    [_delayPassed]: dart.fnType(dart.void, []),
    [_ensureTimerStopped]: dart.fnType(dart.void, []),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._DelayedPointerState, "package:flutter/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag._DelayedPointerState, () => ({
    __proto__: dart.getFields(multidrag._DelayedPointerState.__proto__),
    [_timer$]: dart.fieldType(async.Timer),
    [_starter]: dart.fieldType(dart.fnType(drag$.Drag, [ui.Offset]))
  }));
  const _duration = dart.privateName(core, "_duration");
  let C40;
  multidrag.DelayedMultiDragGestureRecognizer = class DelayedMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._DelayedPointerState) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    createNewPointerState(event) {
      return new multidrag._DelayedPointerState.new(event.position, this.delay);
    }
    get debugDescription() {
      return "long multidrag";
    }
  };
  (multidrag.DelayedMultiDragGestureRecognizer.new = function(opts) {
    let delay = opts && 'delay' in opts ? opts.delay : C40 || CT.C40;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[delay$] = delay;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multidrag.dart", 544, 15, "delay != null");
    multidrag.DelayedMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.DelayedMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.DelayedMultiDragGestureRecognizer);
  const delay$ = Symbol("DelayedMultiDragGestureRecognizer.delay");
  dart.setMethodSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._DelayedPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.DelayedMultiDragGestureRecognizer, "package:flutter/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getFields(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    delay: dart.finalFieldType(core.Duration)
  }));
  hit_test.HitTestable = class HitTestable extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestable[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestable.prototype;
  dart.addTypeTests(hit_test.HitTestable);
  dart.setLibraryUri(hit_test.HitTestable, "package:flutter/src/gestures/hit_test.dart");
  hit_test.HitTestDispatcher = class HitTestDispatcher extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestDispatcher[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestDispatcher.prototype;
  dart.addTypeTests(hit_test.HitTestDispatcher);
  dart.setLibraryUri(hit_test.HitTestDispatcher, "package:flutter/src/gestures/hit_test.dart");
  hit_test.HitTestTarget = class HitTestTarget extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestTarget[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestTarget.prototype;
  dart.addTypeTests(hit_test.HitTestTarget);
  dart.setLibraryUri(hit_test.HitTestTarget, "package:flutter/src/gestures/hit_test.dart");
  const _transform = dart.privateName(hit_test, "_transform");
  hit_test.HitTestEntry = class HitTestEntry extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    toString() {
      return dart.str(this.target);
    }
    get transform() {
      return this[_transform];
    }
  };
  (hit_test.HitTestEntry.new = function(target) {
    this[_transform] = null;
    this[target$] = target;
    ;
  }).prototype = hit_test.HitTestEntry.prototype;
  dart.addTypeTests(hit_test.HitTestEntry);
  const target$ = Symbol("HitTestEntry.target");
  dart.setGetterSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getGetters(hit_test.HitTestEntry.__proto__),
    transform: vector_math_64.Matrix4
  }));
  dart.setLibraryUri(hit_test.HitTestEntry, "package:flutter/src/gestures/hit_test.dart");
  dart.setFieldSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getFields(hit_test.HitTestEntry.__proto__),
    target: dart.finalFieldType(hit_test.HitTestTarget),
    [_transform]: dart.fieldType(vector_math_64.Matrix4)
  }));
  dart.defineExtensionMethods(hit_test.HitTestEntry, ['toString']);
  const _path = dart.privateName(hit_test, "_path");
  const _transforms = dart.privateName(hit_test, "_transforms");
  const _debugVectorMoreOrLessEquals = dart.privateName(hit_test, "_debugVectorMoreOrLessEquals");
  hit_test.HitTestResult = class HitTestResult extends core.Object {
    get path() {
      return this[_path];
    }
    add(entry) {
      if (!(entry[_transform] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 104, 12, "entry._transform == null");
      entry[_transform] = dart.test(this[_transforms][$isEmpty]) ? null : this[_transforms][$last];
      this[_path][$add](entry);
    }
    pushTransform(transform) {
      if (!(transform != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 135, 12, "transform != null");
      if (!(dart.test(this[_debugVectorMoreOrLessEquals](transform.getRow(2), vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0))) && dart.test(this[_debugVectorMoreOrLessEquals](transform.getColumn(2), vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0))))) dart.assertFailed("The third row and third column of a transform matrix for pointer " + "events must be Vector4(0, 0, 1, 0) to ensure that a transformed " + "point is directly under the pointer device. Did you forget to run the paint " + "matrix through PointerEvent.removePerspectiveTransform?" + "The provided matrix is:\n" + dart.str(transform), "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 137, 7, "_debugVectorMoreOrLessEquals(transform.getRow(2), Vector4(0, 0, 1, 0)) &&\n      _debugVectorMoreOrLessEquals(transform.getColumn(2), Vector4(0, 0, 1, 0))");
      this[_transforms].add(vector_math_64.Matrix4._check(dart.test(this[_transforms][$isEmpty]) ? transform : transform['*'](this[_transforms][$last])));
    }
    popTransform() {
      if (!dart.test(this[_transforms][$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 163, 12, "_transforms.isNotEmpty");
      this[_transforms].removeLast();
    }
    [_debugVectorMoreOrLessEquals](a, b, opts) {
      let epsilon = opts && 'epsilon' in opts ? opts.epsilon : 1e-10;
      let result = true;
      if (!dart.test(dart.fn(() => {
        let difference = a['-'](b);
        result = difference.storage[$every](dart.fn(component => component[$abs]() < dart.notNull(epsilon), doubleTobool()));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/hit_test.dart", 169, 12, "() {\n      final Vector4 difference = a - b;\n      result = difference.storage.every((double component) => component.abs() < epsilon);\n      return true;\n    }()");
      return result;
    }
    toString() {
      return "HitTestResult(" + dart.str(dart.test(this[_path][$isEmpty]) ? "<empty path>" : this[_path][$join](", ")) + ")";
    }
  };
  (hit_test.HitTestResult.new = function() {
    this[_path] = JSArrayOfHitTestEntry().of([]);
    this[_transforms] = new (ListQueueOfMatrix4()).new();
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  (hit_test.HitTestResult.wrap = function(result) {
    this[_path] = result[_path];
    this[_transforms] = result[_transforms];
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  dart.addTypeTests(hit_test.HitTestResult);
  dart.setMethodSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getMethods(hit_test.HitTestResult.__proto__),
    add: dart.fnType(dart.void, [hit_test.HitTestEntry]),
    pushTransform: dart.fnType(dart.void, [vector_math_64.Matrix4]),
    popTransform: dart.fnType(dart.void, []),
    [_debugVectorMoreOrLessEquals]: dart.fnType(core.bool, [vector_math_64.Vector4, vector_math_64.Vector4], {epsilon: core.double})
  }));
  dart.setGetterSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getGetters(hit_test.HitTestResult.__proto__),
    path: core.Iterable$(hit_test.HitTestEntry)
  }));
  dart.setLibraryUri(hit_test.HitTestResult, "package:flutter/src/gestures/hit_test.dart");
  dart.setFieldSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getFields(hit_test.HitTestResult.__proto__),
    [_path]: dart.finalFieldType(core.List$(hit_test.HitTestEntry)),
    [_transforms]: dart.finalFieldType(collection.Queue$(vector_math_64.Matrix4))
  }));
  dart.defineExtensionMethods(hit_test.HitTestResult, ['toString']);
  const _binaryMessenger = dart.privateName(platform_channel, "_binaryMessenger");
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  platform_channel.BasicMessageChannel$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToFutureOfT = () => (TToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [T])))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      get binaryMessenger() {
        let t2;
        t2 = this[_binaryMessenger];
        return t2 == null ? binary_messenger.defaultBinaryMessenger : t2;
      }
      send(message) {
        T._check(message);
        return async.async(T, (function* send() {
          return this.codec.decodeMessage(yield this.binaryMessenger.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          this.binaryMessenger.setMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
      setMockMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          this.binaryMessenger.setMockMessageHandler(this.name, null);
        } else {
          this.binaryMessenger.setMockMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec, opts) {
      let binaryMessenger = opts && 'binaryMessenger' in opts ? opts.binaryMessenger : null;
      this[name$] = name;
      this[codec$] = codec;
      if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 38, 16, "name != null");
      if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 39, 16, "codec != null");
      this[_binaryMessenger] = binaryMessenger;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    const name$ = Symbol("BasicMessageChannel.name");
    const codec$ = Symbol("BasicMessageChannel.codec");
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(T), [core.Object]),
      setMessageHandler: dart.fnType(dart.void, [core.Object]),
      setMockMessageHandler: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(BasicMessageChannel, () => ({
      __proto__: dart.getGetters(BasicMessageChannel.__proto__),
      binaryMessenger: binary_messenger.BinaryMessenger
    }));
    dart.setLibraryUri(BasicMessageChannel, "package:flutter/src/services/platform_channel.dart");
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(message_codec.MessageCodec$(T)),
      [_binaryMessenger]: dart.finalFieldType(binary_messenger.BinaryMessenger)
    }));
    return BasicMessageChannel;
  });
  platform_channel.BasicMessageChannel = platform_channel.BasicMessageChannel$();
  dart.addTypeTests(platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  let C42;
  let C41;
  const _handleAsMethodCall = dart.privateName(platform_channel, "_handleAsMethodCall");
  platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$];
    }
    set codec(value) {
      super.codec = value;
    }
    get binaryMessenger() {
      let t2;
      t2 = this[_binaryMessenger];
      return t2 == null ? binary_messenger.defaultBinaryMessenger : t2;
    }
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod() {
        if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 313, 12, "method != null");
        let result = (yield this.binaryMessenger.send(this.name, this.codec.encodeMethodCall(new message_codec.MethodCall.new(method, arguments$0))));
        if (result == null) {
          dart.throw(new message_codec.MissingPluginException.new("No implementation found for method " + dart.str(method) + " on channel " + dart.str(this.name)));
        }
        let typedResult = T._check(this.codec.decodeEnvelope(result));
        return typedResult;
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let t2;
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        t2 = result;
        return t2 == null ? null : t2[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let t2;
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        t2 = result;
        return t2 == null ? null : t2[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      this.binaryMessenger.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    setMockMethodCallHandler(handler) {
      this.binaryMessenger.setMockMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(typed_data.ByteData, (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: dart.toString(e), details: null});
          }
        }
      }).bind(this));
    }
  };
  (platform_channel.MethodChannel.new = function(name, codec, binaryMessenger) {
    if (codec === void 0) codec = C41 || CT.C41;
    if (binaryMessenger === void 0) binaryMessenger = null;
    this[name$] = name;
    this[codec$] = codec;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 127, 16, "name != null");
    if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 128, 16, "codec != null");
    this[_binaryMessenger] = binaryMessenger;
    ;
  }).prototype = platform_channel.MethodChannel.prototype;
  dart.addTypeTests(platform_channel.MethodChannel);
  const name$ = Symbol("MethodChannel.name");
  const codec$ = Symbol("MethodChannel.codec");
  dart.setMethodSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.MethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(T), [core.String], [dart.dynamic]]),
    invokeListMethod: dart.gFnType(T => [async.Future$(core.List$(T)), [core.String], [dart.dynamic]]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(core.Map$(K, V)), [core.String], [dart.dynamic]]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [message_codec.MethodCall])]),
    setMockMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [message_codec.MethodCall])]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData, dart.fnType(async.Future, [message_codec.MethodCall])])
  }));
  dart.setGetterSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getGetters(platform_channel.MethodChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.MethodChannel, "package:flutter/src/services/platform_channel.dart");
  dart.setFieldSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger]: dart.finalFieldType(binary_messenger.BinaryMessenger)
  }));
  const invokeMethod = Symbol("invokeMethod");
  platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends platform_channel.MethodChannel {
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod$() {
        try {
          let result = (yield this[invokeMethod](T, method, arguments$0));
          return result;
        } catch (e) {
          let ex = dart.getThrown(e);
          if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else
            throw e;
        }
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return result[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return result[$cast](K, V);
      }).bind(this));
    }
    [invokeMethod](T, method, arguments$0) {
      return super.invokeMethod(T, method, arguments$0);
    }
  };
  (platform_channel.OptionalMethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = C41 || CT.C41;
    platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec);
    ;
  }).prototype = platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(platform_channel.OptionalMethodChannel);
  dart.setLibraryUri(platform_channel.OptionalMethodChannel, "package:flutter/src/services/platform_channel.dart");
  platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    get binaryMessenger() {
      let t6;
      t6 = this[_binaryMessenger];
      return t6 == null ? binary_messenger.defaultBinaryMessenger : t6;
    }
    receiveBroadcastStream(arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      let methodChannel = new platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      controller = async.StreamController.broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, dart.fn(reply => async.async(core.Null, (function*() {
            if (reply == null) {
              controller.close();
            } else {
              try {
                controller.add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (message_codec.PlatformException.is(e)) {
                  controller.addError(e);
                } else
                  throw e$;
              }
            }
            return null;
          }).bind(this)), ByteDataToFutureOfNull()));
          try {
            yield methodChannel.invokeMethod(dart.void, "listen", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while activating platform stream on channel " + dart.str(this.name))}));
          }
        }).bind(this)), VoidToFutureOfNull()), onCancel: dart.fn(() => async.async(core.Null, (function*() {
          this.binaryMessenger.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.void, "cancel", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while de-activating platform stream on channel " + dart.str(this.name))}));
          }
        }).bind(this)), VoidToFutureOfNull())});
      return controller.stream;
    }
  };
  (platform_channel.EventChannel.new = function(name, codec, binaryMessenger) {
    if (codec === void 0) codec = C41 || CT.C41;
    if (binaryMessenger === void 0) binaryMessenger = null;
    this[name$0] = name;
    this[codec$0] = codec;
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 473, 16, "name != null");
    if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/platform_channel.dart", 474, 16, "codec != null");
    this[_binaryMessenger] = binaryMessenger;
    ;
  }).prototype = platform_channel.EventChannel.prototype;
  dart.addTypeTests(platform_channel.EventChannel);
  const name$0 = Symbol("EventChannel.name");
  const codec$0 = Symbol("EventChannel.codec");
  dart.setMethodSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setGetterSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getGetters(platform_channel.EventChannel.__proto__),
    binaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(platform_channel.EventChannel, "package:flutter/src/services/platform_channel.dart");
  dart.setFieldSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec),
    [_binaryMessenger]: dart.finalFieldType(binary_messenger.BinaryMessenger)
  }));
  system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static pop() {
      return async.async(dart.void, function* pop() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemNavigator.pop");
      });
    }
  };
  (system_navigator.SystemNavigator.__ = function() {
    ;
  }).prototype = system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(system_navigator.SystemNavigator);
  dart.setLibraryUri(system_navigator.SystemNavigator, "package:flutter/src/services/system_navigator.dart");
  const _pendingPointerEvents = dart.privateName(binding$, "_pendingPointerEvents");
  const _hitTests = dart.privateName(binding$, "_hitTests");
  const _handlePointerDataPacket = dart.privateName(binding$, "_handlePointerDataPacket");
  const _flushPointerEventQueue = dart.privateName(binding$, "_flushPointerEventQueue");
  const _handlePointerEvent = dart.privateName(binding$, "_handlePointerEvent");
  binding$.GestureBinding = class GestureBinding extends binding.BindingBase {
    static get instance() {
      return binding$.GestureBinding._instance;
    }
  };
  binding$.GestureBinding[dart.mixinOn] = BindingBase => class GestureBinding extends BindingBase {
    get pointerRouter() {
      return this[pointerRouter];
    }
    set pointerRouter(value) {
      super.pointerRouter = value;
    }
    get gestureArena() {
      return this[gestureArena];
    }
    set gestureArena(value) {
      super.gestureArena = value;
    }
    get pointerSignalResolver() {
      return this[pointerSignalResolver];
    }
    set pointerSignalResolver(value) {
      super.pointerSignalResolver = value;
    }
    initInstances() {
      super.initInstances();
      binding$.GestureBinding._instance = this;
      this.window.onPointerDataPacket = dart.bind(this, _handlePointerDataPacket);
    }
    unlocked() {
      super.unlocked();
      this[_flushPointerEventQueue]();
    }
    [_handlePointerDataPacket](packet) {
      this[_pendingPointerEvents].addAll(converter.PointerEventConverter.expand(packet.data, this.window.devicePixelRatio));
      if (!dart.test(this.locked)) this[_flushPointerEventQueue]();
    }
    cancelPointer(pointer) {
      if (dart.test(this[_pendingPointerEvents][$isEmpty]) && !dart.test(this.locked)) async.scheduleMicrotask(dart.bind(this, _flushPointerEventQueue));
      this[_pendingPointerEvents].addFirst(new events.PointerCancelEvent.new({pointer: pointer}));
    }
    [_flushPointerEventQueue]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 100, 12, "!locked");
      while (dart.test(this[_pendingPointerEvents][$isNotEmpty]))
        this[_handlePointerEvent](this[_pendingPointerEvents].removeFirst());
    }
    [_handlePointerEvent](event) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 123, 12, "!locked");
      let hitTestResult = null;
      if (events.PointerDownEvent.is(event) || events.PointerSignalEvent.is(event)) {
        if (!!dart.test(this[_hitTests][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 126, 14, "!_hitTests.containsKey(event.pointer)");
        hitTestResult = new hit_test.HitTestResult.new();
        this.hitTest(hitTestResult, event.position);
        if (events.PointerDownEvent.is(event)) {
          this[_hitTests][$_set](event.pointer, hitTestResult);
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$.debugPrintHitTestResults)) print.debugPrint(dart.str(event) + ": " + dart.str(hitTestResult));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 132, 14, "() {\n        if (debugPrintHitTestResults)\n          debugPrint('$event: $hitTestResult');\n        return true;\n      }()");
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        hitTestResult = this[_hitTests][$remove](event.pointer);
      } else if (dart.test(event.down)) {
        hitTestResult = this[_hitTests][$_get](event.pointer);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintMouseHoverEvents) && events.PointerHoverEvent.is(event)) print.debugPrint(dart.str(event));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 147, 12, "() {\n      if (debugPrintMouseHoverEvents && event is PointerHoverEvent)\n        debugPrint('$event');\n      return true;\n    }()");
      if (hitTestResult != null || events.PointerHoverEvent.is(event) || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event)) {
        this.dispatchEvent(event, hitTestResult);
      }
    }
    hitTest(result, position) {
      result.add(new hit_test.HitTestEntry.new(this));
    }
    dispatchEvent(event, hitTestResult) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 174, 12, "!locked");
      if (hitTestResult == null) {
        if (!(events.PointerHoverEvent.is(event) || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/binding.dart", 178, 14, "event is PointerHoverEvent || event is PointerAddedEvent || event is PointerRemovedEvent");
        try {
          this.pointerRouter.route(event);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new binding$.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a non-hit-tested pointer event"), event: event, hitTestEntry: null, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
        }
        return;
      }
      for (let entry of hitTestResult.path) {
        try {
          entry.target.handleEvent(event.transformed(entry.transform), entry);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          assertions.FlutterError.reportError(new binding$.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a pointer event"), event: event, hitTestEntry: entry, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              yield new (DiagnosticsPropertyOfHitTestTarget()).new("Target", entry.target, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfObject())}));
        }
      }
    }
    handleEvent(event, entry) {
      this.pointerRouter.route(event);
      if (events.PointerDownEvent.is(event)) {
        this.gestureArena.close(event.pointer);
      } else if (events.PointerUpEvent.is(event)) {
        this.gestureArena.sweep(event.pointer);
      } else if (events.PointerSignalEvent.is(event)) {
        this.pointerSignalResolver.resolve(event);
      }
    }
  };
  (binding$.GestureBinding[dart.mixinNew] = function() {
    this[_pendingPointerEvents] = new (ListQueueOfPointerEvent()).new();
    this[pointerRouter] = new pointer_router.PointerRouter.new();
    this[gestureArena] = new arena.GestureArenaManager.new();
    this[pointerSignalResolver] = new pointer_signal_resolver.PointerSignalResolver.new();
    this[_hitTests] = new (IdentityMapOfint$HitTestResult()).new();
  }).prototype = binding$.GestureBinding.prototype;
  dart.addTypeTests(binding$.GestureBinding);
  const pointerRouter = Symbol("GestureBinding.pointerRouter");
  const gestureArena = Symbol("GestureBinding.gestureArena");
  const pointerSignalResolver = Symbol("GestureBinding.pointerSignalResolver");
  binding$.GestureBinding[dart.implements] = () => [hit_test.HitTestable, hit_test.HitTestDispatcher, hit_test.HitTestTarget, binding.BindingBase];
  dart.setMethodSignature(binding$.GestureBinding, () => ({
    __proto__: dart.getMethods(binding$.GestureBinding.__proto__),
    [_handlePointerDataPacket]: dart.fnType(dart.void, [ui.PointerDataPacket]),
    cancelPointer: dart.fnType(dart.void, [core.int]),
    [_flushPointerEventQueue]: dart.fnType(dart.void, []),
    [_handlePointerEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestResult]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestEntry])
  }));
  dart.setLibraryUri(binding$.GestureBinding, "package:flutter/src/gestures/binding.dart");
  dart.setFieldSignature(binding$.GestureBinding, () => ({
    __proto__: dart.getFields(binding$.GestureBinding.__proto__),
    [_pendingPointerEvents]: dart.finalFieldType(collection.Queue$(events.PointerEvent)),
    pointerRouter: dart.finalFieldType(pointer_router.PointerRouter),
    gestureArena: dart.finalFieldType(arena.GestureArenaManager),
    pointerSignalResolver: dart.finalFieldType(pointer_signal_resolver.PointerSignalResolver),
    [_hitTests]: dart.finalFieldType(core.Map$(core.int, hit_test.HitTestResult))
  }));
  dart.defineLazy(binding$.GestureBinding, {
    /*binding$.GestureBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  binding$.FlutterErrorDetailsForPointerEventDispatcher = class FlutterErrorDetailsForPointerEventDispatcher extends assertions.FlutterErrorDetails {
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
    get hitTestEntry() {
      return this[hitTestEntry$];
    }
    set hitTestEntry(value) {
      super.hitTestEntry = value;
    }
  };
  (binding$.FlutterErrorDetailsForPointerEventDispatcher.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let hitTestEntry = opts && 'hitTestEntry' in opts ? opts.hitTestEntry : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[event$] = event;
    this[hitTestEntry$] = hitTestEntry;
    binding$.FlutterErrorDetailsForPointerEventDispatcher.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = binding$.FlutterErrorDetailsForPointerEventDispatcher.prototype;
  dart.addTypeTests(binding$.FlutterErrorDetailsForPointerEventDispatcher);
  const event$ = Symbol("FlutterErrorDetailsForPointerEventDispatcher.event");
  const hitTestEntry$ = Symbol("FlutterErrorDetailsForPointerEventDispatcher.hitTestEntry");
  dart.setLibraryUri(binding$.FlutterErrorDetailsForPointerEventDispatcher, "package:flutter/src/gestures/binding.dart");
  dart.setFieldSignature(binding$.FlutterErrorDetailsForPointerEventDispatcher, () => ({
    __proto__: dart.getFields(binding$.FlutterErrorDetailsForPointerEventDispatcher.__proto__),
    event: dart.finalFieldType(events.PointerEvent),
    hitTestEntry: dart.finalFieldType(hit_test.HitTestEntry)
  }));
  let C43;
  raw_keyboard.KeyboardSide = class KeyboardSide extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (raw_keyboard.KeyboardSide.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(raw_keyboard.KeyboardSide);
  dart.setLibraryUri(raw_keyboard.KeyboardSide, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.KeyboardSide, () => ({
    __proto__: dart.getFields(raw_keyboard.KeyboardSide.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.KeyboardSide, ['toString']);
  raw_keyboard.KeyboardSide.any = C17 || CT.C17;
  raw_keyboard.KeyboardSide.left = C19 || CT.C19;
  raw_keyboard.KeyboardSide.right = C20 || CT.C20;
  raw_keyboard.KeyboardSide.all = C18 || CT.C18;
  raw_keyboard.KeyboardSide.values = C43 || CT.C43;
  let C44;
  raw_keyboard.ModifierKey = class ModifierKey extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (raw_keyboard.ModifierKey.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(raw_keyboard.ModifierKey);
  dart.setLibraryUri(raw_keyboard.ModifierKey, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.ModifierKey, () => ({
    __proto__: dart.getFields(raw_keyboard.ModifierKey.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.ModifierKey, ['toString']);
  raw_keyboard.ModifierKey.controlModifier = C21 || CT.C21;
  raw_keyboard.ModifierKey.shiftModifier = C22 || CT.C22;
  raw_keyboard.ModifierKey.altModifier = C23 || CT.C23;
  raw_keyboard.ModifierKey.metaModifier = C24 || CT.C24;
  raw_keyboard.ModifierKey.capsLockModifier = C25 || CT.C25;
  raw_keyboard.ModifierKey.numLockModifier = C26 || CT.C26;
  raw_keyboard.ModifierKey.scrollLockModifier = C27 || CT.C27;
  raw_keyboard.ModifierKey.functionModifier = C28 || CT.C28;
  raw_keyboard.ModifierKey.symbolModifier = C29 || CT.C29;
  raw_keyboard.ModifierKey.values = C44 || CT.C44;
  raw_keyboard.RawKeyEvent = class RawKeyEvent extends diagnostics.Diagnosticable {
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let t11, t11$, t11$0, t11$1, t11$2, t11$3, t11$4, t11$5, t11$6, t11$7, t11$8, t11$9, t11$10, t11$11, t11$12, t11$13, t11$14, t11$15, t11$16, t11$17, t11$18;
      let data = null;
      let keymap = core.String._check(message[$_get]("keymap"));
      switch (keymap) {
        case "android":
        {
          data = new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: core.int._check((t11 = message[$_get]("flags"), t11 == null ? 0 : t11)), codePoint: core.int._check((t11$ = message[$_get]("codePoint"), t11$ == null ? 0 : t11$)), keyCode: core.int._check((t11$0 = message[$_get]("keyCode"), t11$0 == null ? 0 : t11$0)), plainCodePoint: core.int._check((t11$1 = message[$_get]("plainCodePoint"), t11$1 == null ? 0 : t11$1)), scanCode: core.int._check((t11$2 = message[$_get]("scanCode"), t11$2 == null ? 0 : t11$2)), metaState: core.int._check((t11$3 = message[$_get]("metaState"), t11$3 == null ? 0 : t11$3)), eventSource: core.int._check((t11$4 = message[$_get]("source"), t11$4 == null ? 0 : t11$4)), vendorId: core.int._check((t11$5 = message[$_get]("vendorId"), t11$5 == null ? 0 : t11$5)), productId: core.int._check((t11$6 = message[$_get]("productId"), t11$6 == null ? 0 : t11$6))});
          break;
        }
        case "fuchsia":
        {
          data = new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: core.int._check((t11$7 = message[$_get]("hidUsage"), t11$7 == null ? 0 : t11$7)), codePoint: core.int._check((t11$8 = message[$_get]("codePoint"), t11$8 == null ? 0 : t11$8)), modifiers: core.int._check((t11$9 = message[$_get]("modifiers"), t11$9 == null ? 0 : t11$9))});
          break;
        }
        case "macos":
        {
          data = new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: core.String._check((t11$10 = message[$_get]("characters"), t11$10 == null ? "" : t11$10)), charactersIgnoringModifiers: core.String._check((t11$11 = message[$_get]("charactersIgnoringModifiers"), t11$11 == null ? "" : t11$11)), keyCode: core.int._check((t11$12 = message[$_get]("keyCode"), t11$12 == null ? 0 : t11$12)), modifiers: core.int._check((t11$13 = message[$_get]("modifiers"), t11$13 == null ? 0 : t11$13))});
          break;
        }
        case "linux":
        {
          data = new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: raw_keyboard_linux.KeyHelper.new(core.String._check((t11$14 = message[$_get]("toolkit"), t11$14 == null ? "" : t11$14))), unicodeScalarValues: core.int._check((t11$15 = message[$_get]("unicodeScalarValues"), t11$15 == null ? 0 : t11$15)), keyCode: core.int._check((t11$16 = message[$_get]("keyCode"), t11$16 == null ? 0 : t11$16)), scanCode: core.int._check((t11$17 = message[$_get]("scanCode"), t11$17 == null ? 0 : t11$17)), modifiers: core.int._check((t11$18 = message[$_get]("modifiers"), t11$18 == null ? 0 : t11$18))});
          break;
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
        }
      }
      let type = core.String._check(message[$_get]("type"));
      switch (type) {
        case "keydown":
        {
          return new raw_keyboard.RawKeyDownEvent.new({data: data, character: core.String._check(message[$_get]("character"))});
        }
        case "keyup":
        {
          return new raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown key event type: " + dart.str(type)));
        }
      }
    }
    isKeyPressed(key) {
      return raw_keyboard.RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlRight));
    }
    get isShiftPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftRight));
    }
    get isAltPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altRight));
    }
    get isMetaPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaRight));
    }
    get physicalKey() {
      return this.data.physicalKey;
    }
    get logicalKey() {
      return this.data.logicalKey;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLogicalKeyboardKey()).new("logicalKey", this.logicalKey));
      properties.add(new (DiagnosticsPropertyOfPhysicalKeyboardKey()).new("physicalKey", this.physicalKey));
    }
  };
  (raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    this[data$] = data;
    this[character$] = character;
    raw_keyboard.RawKeyEvent.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEvent);
  const character$ = Symbol("RawKeyEvent.character");
  const data$ = Symbol("RawKeyEvent.data");
  dart.setMethodSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEvent.__proto__),
    isKeyPressed: dart.fnType(core.bool, [keyboard_key.LogicalKeyboardKey])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEvent.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEvent, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyEvent.__proto__),
    character: dart.finalFieldType(core.String),
    data: dart.finalFieldType(raw_keyboard.RawKeyEventData)
  }));
  raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyDownEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyDownEvent, "package:flutter/src/services/raw_keyboard.dart");
  raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyUpEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyUpEvent, "package:flutter/src/services/raw_keyboard.dart");
  const _listeners = dart.privateName(raw_keyboard, "_listeners");
  const _keysPressed = dart.privateName(raw_keyboard, "_keysPressed");
  const _handleKeyEvent = dart.privateName(raw_keyboard, "_handleKeyEvent");
  raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    [_handleKeyEvent](message) {
      return async.async(dart.dynamic, (function* _handleKeyEvent() {
        let event = raw_keyboard.RawKeyEvent.fromMessage(MapOfString$dynamic()._check(message));
        if (event == null) {
          return;
        }
        if (raw_keyboard.RawKeyDownEvent.is(event)) {
          this[_keysPressed].add(event.logicalKey);
        }
        if (raw_keyboard.RawKeyUpEvent.is(event)) {
          this[_keysPressed].remove(event.logicalKey);
        }
        if (dart.test(this[_listeners][$isEmpty])) {
          return;
        }
        for (let listener of ListOfRawKeyEventTovoid().from(this[_listeners])) {
          if (dart.test(this[_listeners][$contains](listener))) {
            listener(event);
          }
        }
      }).bind(this));
    }
    get keysPressed() {
      return this[_keysPressed].toSet();
    }
  };
  (raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = JSArrayOfRawKeyEventTovoid().of([]);
    this[_keysPressed] = LinkedHashSetOfLogicalKeyboardKey().new();
    system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this, _handleKeyEvent));
  }).prototype = raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyboard);
  dart.setMethodSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    [_handleKeyEvent]: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyboard.__proto__),
    keysPressed: core.Set$(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyboard, "package:flutter/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]))),
    [_keysPressed]: dart.finalFieldType(core.Set$(keyboard_key.LogicalKeyboardKey))
  }));
  dart.defineLazy(raw_keyboard.RawKeyboard, {
    /*raw_keyboard.RawKeyboard.instance*/get instance() {
      return new raw_keyboard.RawKeyboard.__();
    }
  });
  const _firstRegisteredCallback = dart.privateName(pointer_signal_resolver, "_firstRegisteredCallback");
  const _currentEvent = dart.privateName(pointer_signal_resolver, "_currentEvent");
  pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 30, 12, "event != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 31, 12, "callback != null");
      if (!(this[_currentEvent] == null || dart.equals(this[_currentEvent], event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 32, 12, "_currentEvent == null || _currentEvent == event");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      let t11;
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 47, 14, "_currentEvent == null");
        return;
      }
      if (!dart.equals((t11 = this[_currentEvent].original, t11 == null ? this[_currentEvent] : t11), event)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_signal_resolver.dart", 50, 12, "(_currentEvent.original ?? _currentEvent) == event");
      try {
        this[_firstRegisteredCallback](this[_currentEvent]);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent())}));
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
  };
  (pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
    ;
  }).prototype = pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [events.PointerSignalEvent, dart.fnType(dart.void, [events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [events.PointerSignalEvent])
  }));
  dart.setLibraryUri(pointer_signal_resolver.PointerSignalResolver, "package:flutter/src/gestures/pointer_signal_resolver.dart");
  dart.setFieldSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(dart.fnType(dart.void, [events.PointerSignalEvent])),
    [_currentEvent]: dart.fieldType(events.PointerSignalEvent)
  }));
  let C46;
  let C45;
  let C47;
  let C48;
  let C50;
  let C49;
  let C52;
  let C51;
  let C53;
  let C54;
  let C55;
  let C56;
  system_channels.SystemChannels = class SystemChannels extends core.Object {};
  (system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = system_channels.SystemChannels.prototype;
  dart.addTypeTests(system_channels.SystemChannels);
  dart.setLibraryUri(system_channels.SystemChannels, "package:flutter/src/services/system_channels.dart");
  dart.defineLazy(system_channels.SystemChannels, {
    /*system_channels.SystemChannels.navigation*/get navigation() {
      return C45 || CT.C45;
    },
    /*system_channels.SystemChannels.platform*/get platform() {
      return C47 || CT.C47;
    },
    /*system_channels.SystemChannels.textInput*/get textInput() {
      return C48 || CT.C48;
    },
    /*system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return C49 || CT.C49;
    },
    /*system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return C51 || CT.C51;
    },
    /*system_channels.SystemChannels.system*/get system() {
      return C53 || CT.C53;
    },
    /*system_channels.SystemChannels.accessibility*/get accessibility() {
      return C54 || CT.C54;
    },
    /*system_channels.SystemChannels.platform_views*/get platform_views() {
      return C55 || CT.C55;
    },
    /*system_channels.SystemChannels.skia*/get skia() {
      return C56 || CT.C56;
    }
  });
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  dart.defineLazy(constants, {
    /*constants.kPressTimeout*/get kPressTimeout() {
      return C57 || CT.C57;
    },
    /*constants.kHoverTapTimeout*/get kHoverTapTimeout() {
      return C58 || CT.C58;
    },
    /*constants.kHoverTapSlop*/get kHoverTapSlop() {
      return 20;
    },
    /*constants.kLongPressTimeout*/get kLongPressTimeout() {
      return C40 || CT.C40;
    },
    /*constants.kDoubleTapTimeout*/get kDoubleTapTimeout() {
      return C59 || CT.C59;
    },
    /*constants.kDoubleTapMinTime*/get kDoubleTapMinTime() {
      return C60 || CT.C60;
    },
    /*constants.kDoubleTapTouchSlop*/get kDoubleTapTouchSlop() {
      return 18;
    },
    /*constants.kDoubleTapSlop*/get kDoubleTapSlop() {
      return 100;
    },
    /*constants.kZoomControlsTimeout*/get kZoomControlsTimeout() {
      return C61 || CT.C61;
    },
    /*constants.kTouchSlop*/get kTouchSlop() {
      return 18;
    },
    /*constants.kPagingTouchSlop*/get kPagingTouchSlop() {
      return 36;
    },
    /*constants.kPanSlop*/get kPanSlop() {
      return 36;
    },
    /*constants.kScaleSlop*/get kScaleSlop() {
      return 18;
    },
    /*constants.kWindowTouchSlop*/get kWindowTouchSlop() {
      return 16;
    },
    /*constants.kMinFlingVelocity*/get kMinFlingVelocity() {
      return 50;
    },
    /*constants.kMaxFlingVelocity*/get kMaxFlingVelocity() {
      return 8000;
    },
    /*constants.kJumpTapTimeout*/get kJumpTapTimeout() {
      return C40 || CT.C40;
    }
  });
  const _isLeftRightModifierPressed$0 = dart.privateName(raw_keyboard_macos, "_isLeftRightModifierPressed");
  raw_keyboard_macos.RawKeyEventDataMacOs = class RawKeyEventDataMacOs extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$1];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$1];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers[$isEmpty] ? null : this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t12;
      t12 = keyboard_maps.kMacOsToPhysicalKey[$_get](this.keyCode);
      return t12 == null ? keyboard_key.PhysicalKeyboardKey.none : t12;
    }
    get logicalKey() {
      let t12, t12$;
      let numPadKey = keyboard_maps.kMacOsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel)) && !dart.test(raw_keyboard_macos.RawKeyEventDataMacOs._isUnprintableKey(this.keyLabel))) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 87, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t12 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t12 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t12;
      }
      if (!dart.equals(this.physicalKey, keyboard_key.PhysicalKeyboardKey.none)) {
        let keyId = (dart.notNull(this.physicalKey.usbHidUsage) | 4294967296.0) >>> 0;
        t12$ = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t12$ == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.physicalKey.debugName, debugName: this.physicalKey.debugName}) : t12$;
      }
      return new keyboard_key.LogicalKeyboardKey.new((21474836480.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown macOS key code " + dart.str(this.keyCode)});
    }
    [_isLeftRightModifierPressed$0](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C17 || CT.C17:
        {
          return true;
        }
        case C18 || CT.C18:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case C19 || CT.C19:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case C20 || CT.C20:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C17 || CT.C17;
      let independentModifier = (dart.notNull(this.modifiers) & 4294901760.0) >>> 0;
      switch (key) {
        case C21 || CT.C21:
        {
          return this[_isLeftRightModifierPressed$0](side, (independentModifier & 262144) >>> 0, 1, 8192);
        }
        case C22 || CT.C22:
        {
          return this[_isLeftRightModifierPressed$0](side, (independentModifier & 131072) >>> 0, 2, 4);
        }
        case C23 || CT.C23:
        {
          return this[_isLeftRightModifierPressed$0](side, (independentModifier & 524288) >>> 0, 32, 64);
        }
        case C24 || CT.C24:
        {
          return this[_isLeftRightModifierPressed$0](side, (independentModifier & 1048576) >>> 0, 8, 16);
        }
        case C25 || CT.C25:
        {
          return (independentModifier & 65536) !== 0;
        }
        case C26 || CT.C26:
        {
          return (independentModifier & 2097152) !== 0;
        }
        case C28 || CT.C28:
        {
          return (independentModifier & 8388608) !== 0;
        }
        case C29 || CT.C29:
        case C27 || CT.C27:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.modifiers) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case C21 || CT.C21:
        {
          return findSide(1, 8192);
        }
        case C22 || CT.C22:
        {
          return findSide(2, 4);
        }
        case C23 || CT.C23:
        {
          return findSide(32, 64);
        }
        case C24 || CT.C24:
        {
          return findSide(8, 16);
        }
        case C25 || CT.C25:
        case C26 || CT.C26:
        case C27 || CT.C27:
        case C28 || CT.C28:
        case C29 || CT.C29:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 201, 12, "false");
      return null;
    }
    static _isUnprintableKey(label) {
      if (label.length > 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit >= 63232 && codeUnit <= 63743;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", characters: " + dart.str(this.characters) + "," + " unmodifiedCharacters: " + dart.str(this.charactersIgnoringModifiers) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_macos.RawKeyEventDataMacOs.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[characters$] = characters;
    this[charactersIgnoringModifiers$] = charactersIgnoringModifiers;
    this[keyCode$1] = keyCode;
    this[modifiers$1] = modifiers;
    if (!(characters != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 29, 15, "characters != null");
    if (!(charactersIgnoringModifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 30, 15, "charactersIgnoringModifiers != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 31, 15, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/raw_keyboard_macos.dart", 32, 15, "modifiers != null");
    raw_keyboard_macos.RawKeyEventDataMacOs.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_macos.RawKeyEventDataMacOs.prototype;
  dart.addTypeTests(raw_keyboard_macos.RawKeyEventDataMacOs);
  const characters$ = Symbol("RawKeyEventDataMacOs.characters");
  const charactersIgnoringModifiers$ = Symbol("RawKeyEventDataMacOs.charactersIgnoringModifiers");
  const keyCode$1 = Symbol("RawKeyEventDataMacOs.keyCode");
  const modifiers$1 = Symbol("RawKeyEventDataMacOs.modifiers");
  dart.setMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getMethods(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    [_isLeftRightModifierPressed$0]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getGetters(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_macos.RawKeyEventDataMacOs, "package:flutter/src/services/raw_keyboard_macos.dart");
  dart.setFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getFields(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_macos.RawKeyEventDataMacOs, ['toString']);
  dart.defineLazy(raw_keyboard_macos.RawKeyEventDataMacOs, {
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  });
  tap.TapDownDetails = class TapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get localPosition() {
      return this[localPosition$];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (tap.TapDownDetails.new = function(opts) {
    let t12;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$] = globalPosition;
    this[kind$] = kind;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 26, 15, "globalPosition != null");
    this[localPosition$] = (t12 = localPosition, t12 == null ? globalPosition : t12);
    ;
  }).prototype = tap.TapDownDetails.prototype;
  dart.addTypeTests(tap.TapDownDetails);
  const globalPosition$ = Symbol("TapDownDetails.globalPosition");
  const kind$ = Symbol("TapDownDetails.kind");
  const localPosition$ = Symbol("TapDownDetails.localPosition");
  dart.setLibraryUri(tap.TapDownDetails, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapDownDetails, () => ({
    __proto__: dart.getFields(tap.TapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  tap.TapUpDetails = class TapUpDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$0];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (tap.TapUpDetails.new = function(opts) {
    let t12;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 62, 15, "globalPosition != null");
    this[localPosition$0] = (t12 = localPosition, t12 == null ? globalPosition : t12);
    ;
  }).prototype = tap.TapUpDetails.prototype;
  dart.addTypeTests(tap.TapUpDetails);
  const globalPosition$0 = Symbol("TapUpDetails.globalPosition");
  const localPosition$0 = Symbol("TapUpDetails.localPosition");
  dart.setLibraryUri(tap.TapUpDetails, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapUpDetails, () => ({
    __proto__: dart.getFields(tap.TapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  const _sentTapDown = dart.privateName(tap, "_sentTapDown");
  const _wonArenaForPrimaryPointer = dart.privateName(tap, "_wonArenaForPrimaryPointer");
  const _finalPosition = dart.privateName(tap, "_finalPosition");
  const _initialButtons = dart.privateName(tap, "_initialButtons");
  const _checkUp = dart.privateName(tap, "_checkUp");
  const _checkCancel = dart.privateName(tap, "_checkCancel");
  const _reset = dart.privateName(tap, "_reset");
  const _checkDown = dart.privateName(tap, "_checkDown");
  tap.TapGestureRecognizer = class TapGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get onSecondaryTapDown() {
      return this[onSecondaryTapDown];
    }
    set onSecondaryTapDown(value) {
      this[onSecondaryTapDown] = value;
    }
    get onSecondaryTapUp() {
      return this[onSecondaryTapUp];
    }
    set onSecondaryTapUp(value) {
      this[onSecondaryTapUp] = value;
    }
    get onSecondaryTapCancel() {
      return this[onSecondaryTapCancel];
    }
    set onSecondaryTapCancel(value) {
      this[onSecondaryTapCancel] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onTapDown == null && this.onTap == null && this.onTapUp == null && this.onTapCancel == null) return false;
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown == null && this.onSecondaryTapUp == null && this.onSecondaryTapCancel == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      this[_initialButtons] = event.buttons;
    }
    handlePrimaryPointer(event) {
      if (events.PointerUpEvent.is(event)) {
        this[_finalPosition] = new recognizer.OffsetPair.new({global: event.position, local: event.localPosition});
        this[_checkUp]();
      } else if (events.PointerCancelEvent.is(event)) {
        this.resolve(arena.GestureDisposition.rejected);
        if (dart.test(this[_sentTapDown])) {
          this[_checkCancel]("");
        }
        this[_reset]();
      } else if (event.buttons != this[_initialButtons]) {
        this.resolve(arena.GestureDisposition.rejected);
        this.stopTrackingPointer(this.primaryPointer);
      }
    }
    resolve(disposition) {
      if (dart.test(this[_wonArenaForPrimaryPointer]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        if (!dart.test(this[_sentTapDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 294, 14, "_sentTapDown");
        this[_checkCancel]("spontaneous ");
        this[_reset]();
      }
      super.resolve(disposition);
    }
    didExceedDeadlineWithEvent(event) {
      this[_checkDown](event.pointer);
    }
    acceptGesture(pointer) {
      super.acceptGesture(pointer);
      if (pointer == this.primaryPointer) {
        this[_checkDown](pointer);
        this[_wonArenaForPrimaryPointer] = true;
        this[_checkUp]();
      }
    }
    rejectGesture(pointer) {
      super.rejectGesture(pointer);
      if (pointer == this.primaryPointer) {
        if (!!dart.equals(this.state, recognizer.GestureRecognizerState.possible)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/tap.dart", 321, 14, "state != GestureRecognizerState.possible");
        if (dart.test(this[_sentTapDown])) this[_checkCancel]("forced ");
        this[_reset]();
      }
    }
    [_checkDown](pointer) {
      if (dart.test(this[_sentTapDown])) {
        return;
      }
      let details = new tap.TapDownDetails.new({globalPosition: this.initialPosition.global, localPosition: this.initialPosition.local, kind: this.getKindForPointer(pointer)});
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => this.onTapDown(details), VoidTovoid()));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown != null) this.invokeCallback(dart.void, "onSecondaryTapDown", dart.fn(() => this.onSecondaryTapDown(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_sentTapDown] = true;
    }
    [_checkUp]() {
      if (!dart.test(this[_wonArenaForPrimaryPointer]) || this[_finalPosition] == null) {
        return;
      }
      let details = new tap.TapUpDetails.new({globalPosition: this[_finalPosition].global, localPosition: this[_finalPosition].local});
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(details), VoidTovoid()));
          if (this.onTap != null) this.invokeCallback(dart.void, "onTap", this.onTap);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapUp != null) this.invokeCallback(dart.void, "onSecondaryTapUp", dart.fn(() => this.onSecondaryTapUp(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_reset]();
    }
    [_checkCancel](note) {
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onTapCancel", this.onTapCancel);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onSecondaryTapCancel", this.onSecondaryTapCancel);
          break;
        }
        default:
      }
    }
    [_reset]() {
      this[_sentTapDown] = false;
      this[_wonArenaForPrimaryPointer] = false;
      this[_finalPosition] = null;
      this[_initialButtons] = null;
    }
    get debugDescription() {
      return "tap";
    }
    debugFillProperties(properties) {
      let t12, t12$, t12$0;
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("wonArenaForPrimaryPointer", {value: this[_wonArenaForPrimaryPointer], ifTrue: "won arena"}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalPosition", (t12 = this[_finalPosition], t12 == null ? null : t12.global), {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalLocalPosition", (t12$ = this[_finalPosition], t12$ == null ? null : t12$.local), {defaultValue: (t12$0 = this[_finalPosition], t12$0 == null ? null : t12$0.global)}));
      properties.add(new diagnostics.FlagProperty.new("sentTapDown", {value: this[_sentTapDown], ifTrue: "sent tap down"}));
    }
  };
  (tap.TapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onSecondaryTapDown] = null;
    this[onSecondaryTapUp] = null;
    this[onSecondaryTapCancel] = null;
    this[_sentTapDown] = false;
    this[_wonArenaForPrimaryPointer] = false;
    this[_finalPosition] = null;
    this[_initialButtons] = null;
    tap.TapGestureRecognizer.__proto__.new.call(this, {deadline: constants.kPressTimeout, debugOwner: debugOwner});
    ;
  }).prototype = tap.TapGestureRecognizer.prototype;
  dart.addTypeTests(tap.TapGestureRecognizer);
  const onTapDown = Symbol("TapGestureRecognizer.onTapDown");
  const onTapUp = Symbol("TapGestureRecognizer.onTapUp");
  const onTap = Symbol("TapGestureRecognizer.onTap");
  const onTapCancel = Symbol("TapGestureRecognizer.onTapCancel");
  const onSecondaryTapDown = Symbol("TapGestureRecognizer.onSecondaryTapDown");
  const onSecondaryTapUp = Symbol("TapGestureRecognizer.onSecondaryTapUp");
  const onSecondaryTapCancel = Symbol("TapGestureRecognizer.onSecondaryTapCancel");
  dart.setMethodSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getMethods(tap.TapGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkDown]: dart.fnType(dart.void, [core.int]),
    [_checkUp]: dart.fnType(dart.void, []),
    [_checkCancel]: dart.fnType(dart.void, [core.String]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getGetters(tap.TapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(tap.TapGestureRecognizer, "package:flutter/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getFields(tap.TapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    onSecondaryTapDown: dart.fieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onSecondaryTapUp: dart.fieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onSecondaryTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    [_sentTapDown]: dart.fieldType(core.bool),
    [_wonArenaForPrimaryPointer]: dart.fieldType(core.bool),
    [_finalPosition]: dart.fieldType(recognizer.OffsetPair),
    [_initialButtons]: dart.fieldType(core.int)
  }));
  let C62;
  velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    _negate() {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (!(minValue != null && dart.notNull(minValue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 54, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue != null && dart.notNull(maxValue) >= 0.0 && dart.notNull(maxValue) >= dart.notNull(minValue))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 55, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (dart.notNull(valueSquared) > dart.notNull(maxValue) * dart.notNull(maxValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (dart.notNull(valueSquared) < dart.notNull(minValue) * dart.notNull(minValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      if (!velocity_tracker.Velocity.is(other)) return false;
      let typedOther = velocity_tracker.Velocity._check(other);
      return dart.equals(this.pixelsPerSecond, typedOther.pixelsPerSecond);
    }
    get hashCode() {
      return dart.hashCode(this.pixelsPerSecond);
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 20, 15, "pixelsPerSecond != null");
    ;
  }).prototype = velocity_tracker.Velocity.prototype;
  dart.addTypeTests(velocity_tracker.Velocity);
  const pixelsPerSecond$ = Symbol("Velocity.pixelsPerSecond");
  dart.setMethodSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(velocity_tracker.Velocity, []),
    '-': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    '+': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(velocity_tracker.Velocity, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(velocity_tracker.Velocity, {
    /*velocity_tracker.Velocity.zero*/get zero() {
      return C62 || CT.C62;
    }
  });
  velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 101, 15, "pixelsPerSecond != null");
    if (!(confidence != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 102, 15, "confidence != null");
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 103, 15, "duration != null");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 104, 15, "offset != null");
    ;
  }).prototype = velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(velocity_tracker.VelocityEstimate);
  const pixelsPerSecond$0 = Symbol("VelocityEstimate.pixelsPerSecond");
  const confidence$ = Symbol("VelocityEstimate.confidence");
  const duration$ = Symbol("VelocityEstimate.duration");
  const offset$ = Symbol("VelocityEstimate.offset");
  dart.setLibraryUri(velocity_tracker.VelocityEstimate, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.VelocityEstimate, ['toString']);
  velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (velocity_tracker._PointAtTime.new = function(point, time) {
    this.point = point;
    this.time = time;
    if (!(point != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 129, 14, "point != null");
    if (!(time != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/velocity_tracker.dart", 130, 14, "time != null");
    ;
  }).prototype = velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(velocity_tracker._PointAtTime);
  dart.setLibraryUri(velocity_tracker._PointAtTime, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker._PointAtTime, ['toString']);
  const _samples = dart.privateName(velocity_tracker, "_samples");
  const _index = dart.privateName(velocity_tracker, "_index");
  velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    addPosition(time, position) {
      this[_index] = dart.notNull(this[_index]) + 1;
      if (this[_index] === 20) this[_index] = 0;
      this[_samples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = JSArrayOfdouble().of([]);
      let y = JSArrayOfdouble().of([]);
      let w = JSArrayOfdouble().of([]);
      let time = JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMilliseconds[$toDouble]();
        let delta = sample.time['-'](previousSample.time).inMilliseconds[$abs]()[$toDouble]();
        previousSample = sample;
        if (age > 100 || delta > 40) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = dart.notNull(index === 0 ? 20 : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < 20);
      if (sampleCount >= 3) {
        let xSolver = new lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui.Offset.new(dart.notNull(xFit.coefficients[$_get](1)) * 1000, dart.notNull(yFit.coefficients[$_get](1)) * 1000), confidence: dart.notNull(xFit.confidence) * dart.notNull(yFit.confidence), duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || dart.equals(estimate.pixelsPerSecond, ui.Offset.zero)) return velocity_tracker.Velocity.zero;
      return new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (velocity_tracker.VelocityTracker.new = function() {
    this[_samples] = ListOf_PointAtTime().new(20);
    this[_index] = 0;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.VelocityTracker);
  dart.setMethodSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui.Offset]),
    getVelocityEstimate: dart.fnType(velocity_tracker.VelocityEstimate, []),
    getVelocity: dart.fnType(velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(velocity_tracker.VelocityTracker, "package:flutter/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityTracker.__proto__),
    [_samples]: dart.finalFieldType(core.List$(velocity_tracker._PointAtTime)),
    [_index]: dart.fieldType(core.int)
  }));
  dart.defineLazy(velocity_tracker.VelocityTracker, {
    /*velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  });
  const _name$3 = dart.privateName(scale, "_name");
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  scale._ScaleState = class _ScaleState extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (scale._ScaleState.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = scale._ScaleState.prototype;
  dart.addTypeTests(scale._ScaleState);
  dart.setLibraryUri(scale._ScaleState, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale._ScaleState, () => ({
    __proto__: dart.getFields(scale._ScaleState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scale._ScaleState, ['toString']);
  scale._ScaleState.ready = C63 || CT.C63;
  scale._ScaleState.possible = C64 || CT.C64;
  scale._ScaleState.accepted = C65 || CT.C65;
  scale._ScaleState.started = C66 || CT.C66;
  scale._ScaleState.values = C67 || CT.C67;
  scale.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ")";
    }
  };
  (scale.ScaleStartDetails.new = function(opts) {
    let t12;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C39 || CT.C39;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    this[focalPoint$] = focalPoint;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 40, 14, "focalPoint != null");
    this[localFocalPoint$] = (t12 = localFocalPoint, t12 == null ? focalPoint : t12);
    ;
  }).prototype = scale.ScaleStartDetails.prototype;
  dart.addTypeTests(scale.ScaleStartDetails);
  const focalPoint$ = Symbol("ScaleStartDetails.focalPoint");
  const localFocalPoint$ = Symbol("ScaleStartDetails.localFocalPoint");
  dart.setLibraryUri(scale.ScaleStartDetails, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleStartDetails, () => ({
    __proto__: dart.getFields(scale.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(scale.ScaleStartDetails, ['toString']);
  scale.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get localFocalPoint() {
      return this[localFocalPoint$0];
    }
    set localFocalPoint(value) {
      super.localFocalPoint = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    toString() {
      return "ScaleUpdateDetails(focalPoint: " + dart.str(this.focalPoint) + ", localFocalPoint: " + dart.str(this.localFocalPoint) + ", scale: " + dart.str(this.scale) + ", horizontalScale: " + dart.str(this.horizontalScale) + ", verticalScale: " + dart.str(this.verticalScale) + ", rotation: " + dart.str(this.rotation) + ")";
    }
  };
  (scale.ScaleUpdateDetails.new = function(opts) {
    let t12;
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C39 || CT.C39;
    let localFocalPoint = opts && 'localFocalPoint' in opts ? opts.localFocalPoint : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    this[focalPoint$0] = focalPoint;
    this[scale$] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 81, 15, "focalPoint != null");
    if (!(scale != null && dart.notNull(scale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 82, 15, "scale != null && scale >= 0.0");
    if (!(horizontalScale != null && dart.notNull(horizontalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 83, 15, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale != null && dart.notNull(verticalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 84, 15, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 85, 15, "rotation != null");
    this[localFocalPoint$0] = (t12 = localFocalPoint, t12 == null ? focalPoint : t12);
    ;
  }).prototype = scale.ScaleUpdateDetails.prototype;
  dart.addTypeTests(scale.ScaleUpdateDetails);
  const focalPoint$0 = Symbol("ScaleUpdateDetails.focalPoint");
  const localFocalPoint$0 = Symbol("ScaleUpdateDetails.localFocalPoint");
  const scale$ = Symbol("ScaleUpdateDetails.scale");
  const horizontalScale$ = Symbol("ScaleUpdateDetails.horizontalScale");
  const verticalScale$ = Symbol("ScaleUpdateDetails.verticalScale");
  const rotation$ = Symbol("ScaleUpdateDetails.rotation");
  dart.setLibraryUri(scale.ScaleUpdateDetails, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(scale.ScaleUpdateDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    localFocalPoint: dart.finalFieldType(ui.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(scale.ScaleUpdateDetails, ['toString']);
  scale.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ")";
    }
  };
  (scale.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C62 || CT.C62;
    this[velocity$] = velocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 158, 14, "velocity != null");
    ;
  }).prototype = scale.ScaleEndDetails.prototype;
  dart.addTypeTests(scale.ScaleEndDetails);
  const velocity$ = Symbol("ScaleEndDetails.velocity");
  dart.setLibraryUri(scale.ScaleEndDetails, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleEndDetails, () => ({
    __proto__: dart.getFields(scale.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  dart.defineExtensionMethods(scale.ScaleEndDetails, ['toString']);
  scale._LineBetweenPointers = class _LineBetweenPointers extends core.Object {};
  (scale._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C39 || CT.C39;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C39 || CT.C39;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation != null && pointerEndLocation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 199, 15, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId != null && pointerEndId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 200, 15, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId != pointerEndId)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 201, 15, "pointerStartId != pointerEndId");
    ;
  }).prototype = scale._LineBetweenPointers.prototype;
  dart.addTypeTests(scale._LineBetweenPointers);
  dart.setLibraryUri(scale._LineBetweenPointers, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale._LineBetweenPointers, () => ({
    __proto__: dart.getFields(scale._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  const _state = dart.privateName(scale, "_state");
  const _lastTransform = dart.privateName(scale, "_lastTransform");
  const _initialFocalPoint = dart.privateName(scale, "_initialFocalPoint");
  const _currentFocalPoint = dart.privateName(scale, "_currentFocalPoint");
  const _initialSpan = dart.privateName(scale, "_initialSpan");
  const _currentSpan = dart.privateName(scale, "_currentSpan");
  const _initialHorizontalSpan = dart.privateName(scale, "_initialHorizontalSpan");
  const _currentHorizontalSpan = dart.privateName(scale, "_currentHorizontalSpan");
  const _initialVerticalSpan = dart.privateName(scale, "_initialVerticalSpan");
  const _currentVerticalSpan = dart.privateName(scale, "_currentVerticalSpan");
  const _initialLine = dart.privateName(scale, "_initialLine");
  const _currentLine = dart.privateName(scale, "_currentLine");
  const _pointerLocations = dart.privateName(scale, "_pointerLocations");
  const _pointerQueue = dart.privateName(scale, "_pointerQueue");
  const _velocityTrackers = dart.privateName(scale, "_velocityTrackers");
  const _scaleFactor = dart.privateName(scale, "_scaleFactor");
  const _horizontalScaleFactor = dart.privateName(scale, "_horizontalScaleFactor");
  const _verticalScaleFactor = dart.privateName(scale, "_verticalScaleFactor");
  const _computeRotationFactor = dart.privateName(scale, "_computeRotationFactor");
  const _updateLines = dart.privateName(scale, "_updateLines");
  const _update = dart.privateName(scale, "_update");
  const _reconfigure = dart.privateName(scale, "_reconfigure");
  const _advanceStateMachine = dart.privateName(scale, "_advanceStateMachine");
  const _dispatchOnStartCallbackIfNeeded = dart.privateName(scale, "_dispatchOnStartCallbackIfNeeded");
  scale.ScaleGestureRecognizer = class ScaleGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get [_scaleFactor]() {
      return dart.notNull(this[_initialSpan]) > 0.0 ? dart.notNull(this[_currentSpan]) / dart.notNull(this[_initialSpan]) : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return dart.notNull(this[_initialHorizontalSpan]) > 0.0 ? dart.notNull(this[_currentHorizontalSpan]) / dart.notNull(this[_initialHorizontalSpan]) : 1.0;
    }
    get [_verticalScaleFactor]() {
      return dart.notNull(this[_initialVerticalSpan]) > 0.0 ? dart.notNull(this[_currentVerticalSpan]) / dart.notNull(this[_initialVerticalSpan]) : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = this[_initialLine].pointerStartLocation.dx;
      let fy = this[_initialLine].pointerStartLocation.dy;
      let sx = this[_initialLine].pointerEndLocation.dx;
      let sy = this[_initialLine].pointerEndLocation.dy;
      let nfx = this[_currentLine].pointerStartLocation.dx;
      let nfy = this[_currentLine].pointerStartLocation.dy;
      let nsx = this[_currentLine].pointerEndLocation.dx;
      let nsy = this[_currentLine].pointerEndLocation.dy;
      let angle1 = math.atan2(dart.notNull(fy) - dart.notNull(sy), dart.notNull(fx) - dart.notNull(sx));
      let angle2 = math.atan2(dart.notNull(nfy) - dart.notNull(nsy), dart.notNull(nfx) - dart.notNull(nsx));
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state], scale._ScaleState.ready)) {
        this[_state] = scale._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state], scale._ScaleState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 304, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (events.PointerMoveEvent.is(event)) {
        let tracker = this[_velocityTrackers][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 309, 14, "tracker != null");
        if (!dart.test(event.synthesized)) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
        this[_lastTransform] = event.transform;
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
        this[_lastTransform] = event.transform;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || dart.test(this[_reconfigure](event.pointer))) this[_advanceStateMachine](shouldStartIfAccepted);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let focalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys])
        focalPoint = focalPoint['+'](this[_pointerLocations][$_get](pointer));
      this[_currentFocalPoint] = dart.notNull(count) > 0 ? focalPoint['/'](count[$toDouble]()) : ui.Offset.zero;
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.notNull(this[_currentFocalPoint]['-'](this[_pointerLocations][$_get](pointer)).distance);
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.notNull(this[_currentFocalPoint].dx) - dart.notNull(this[_pointerLocations][$_get](pointer).dx))[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.notNull(this[_currentFocalPoint].dy) - dart.notNull(this[_pointerLocations][$_get](pointer).dy))[$abs]();
      }
      this[_currentSpan] = dart.notNull(count) > 0 ? totalDeviation / dart.notNull(count) : 0.0;
      this[_currentHorizontalSpan] = dart.notNull(count) > 0 ? totalHorizontalDeviation / dart.notNull(count) : 0.0;
      this[_currentVerticalSpan] = dart.notNull(count) > 0 ? totalVerticalDeviation / dart.notNull(count) : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(dart.notNull(this[_pointerQueue][$length]) >= dart.notNull(count))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 365, 12, "_pointerQueue.length >= count");
      if (dart.notNull(count) < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && this[_initialLine].pointerStartId == this[_pointerQueue][$_get](0) && this[_initialLine].pointerEndId == this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
      } else {
        this[_initialLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
        this[_currentLine] = null;
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = this[_currentFocalPoint];
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (dart.equals(this[_state], scale._ScaleState.started)) {
        if (this.onEnd != null) {
          let tracker = this[_velocityTrackers][$_get](pointer);
          if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 400, 16, "tracker != null");
          let velocity = tracker.getVelocity();
          if (dart.test(scale._isFlingGesture(velocity))) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (dart.notNull(pixelsPerSecond.distanceSquared) > 8000 * 8000) velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new scale.ScaleEndDetails.new({velocity: velocity})), VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new scale.ScaleEndDetails.new({velocity: velocity_tracker.Velocity.zero})), VoidTovoid()));
          }
        }
        this[_state] = scale._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted) {
      if (dart.equals(this[_state], scale._ScaleState.ready)) this[_state] = scale._ScaleState.possible;
      if (dart.equals(this[_state], scale._ScaleState.possible)) {
        let spanDelta = (dart.notNull(this[_currentSpan]) - dart.notNull(this[_initialSpan]))[$abs]();
        let focalPointDelta = this[_currentFocalPoint]['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > 18 || dart.notNull(focalPointDelta) > 36) this.resolve(arena.GestureDisposition.accepted);
      } else if (dart.notNull(this[_state].index) >= dart.notNull(scale._ScaleState.accepted.index)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (dart.equals(this[_state], scale._ScaleState.accepted) && dart.test(shouldStartIfAccepted)) {
        this[_state] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (dart.equals(this[_state], scale._ScaleState.started) && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        this.onUpdate(new scale.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: this[_currentFocalPoint], localFocalPoint: events.PointerEvent.transformPosition(this[_lastTransform], this[_currentFocalPoint]), rotation: this[_computeRotationFactor]()}));
      }, VoidToNull()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!dart.equals(this[_state], scale._ScaleState.started)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 450, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => {
        this.onStart(new scale.ScaleStartDetails.new({focalPoint: this[_currentFocalPoint], localFocalPoint: events.PointerEvent.transformPosition(this[_lastTransform], this[_currentFocalPoint])}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state], scale._ScaleState.possible)) {
        this[_state] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state]) {
        case C64 || CT.C64:
        {
          this.resolve(arena.GestureDisposition.rejected);
          break;
        }
        case C63 || CT.C63:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 480, 16, "false");
          break;
        }
        case C65 || CT.C65:
        {
          break;
        }
        case C66 || CT.C66:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 485, 16, "false");
          break;
        }
      }
      this[_state] = scale._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (scale.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[_state] = scale._ScaleState.ready;
    this[_lastTransform] = null;
    this[_initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[_initialSpan] = null;
    this[_currentSpan] = null;
    this[_initialHorizontalSpan] = null;
    this[_currentHorizontalSpan] = null;
    this[_initialVerticalSpan] = null;
    this[_currentVerticalSpan] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[_pointerLocations] = null;
    this[_pointerQueue] = null;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    scale.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = scale.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(scale.ScaleGestureRecognizer);
  const onStart = Symbol("ScaleGestureRecognizer.onStart");
  const onUpdate = Symbol("ScaleGestureRecognizer.onUpdate");
  const onEnd = Symbol("ScaleGestureRecognizer.onEnd");
  dart.setMethodSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(scale.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(scale.ScaleGestureRecognizer.__proto__),
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setLibraryUri(scale.ScaleGestureRecognizer, "package:flutter/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(scale.ScaleGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [scale.ScaleStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [scale.ScaleUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [scale.ScaleEndDetails])),
    [_state]: dart.fieldType(scale._ScaleState),
    [_lastTransform]: dart.fieldType(vector_math_64.Matrix4),
    [_initialFocalPoint]: dart.fieldType(ui.Offset),
    [_currentFocalPoint]: dart.fieldType(ui.Offset),
    [_initialSpan]: dart.fieldType(core.double),
    [_currentSpan]: dart.fieldType(core.double),
    [_initialHorizontalSpan]: dart.fieldType(core.double),
    [_currentHorizontalSpan]: dart.fieldType(core.double),
    [_initialVerticalSpan]: dart.fieldType(core.double),
    [_currentVerticalSpan]: dart.fieldType(core.double),
    [_initialLine]: dart.fieldType(scale._LineBetweenPointers),
    [_currentLine]: dart.fieldType(scale._LineBetweenPointers),
    [_pointerLocations]: dart.fieldType(core.Map$(core.int, ui.Offset)),
    [_pointerQueue]: dart.fieldType(core.List$(core.int)),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  scale._isFlingGesture = function _isFlingGesture(velocity) {
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/scale.dart", 179, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return dart.notNull(speedSquared) > 50 * 50;
  };
  const _routeMap = dart.privateName(pointer_router, "_routeMap");
  const _globalRoutes = dart.privateName(pointer_router, "_globalRoutes");
  const _dispatch = dart.privateName(pointer_router, "_dispatch");
  pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route, transform) {
      if (transform === void 0) transform = null;
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (_HashSetOf_RouteEntry()).new(), VoidToLinkedHashSetOf_RouteEntry()));
      if (!!dart.test(routes[$any](pointer_router._RouteEntry.isRoutePredicate(route)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 29, 12, "!routes.any(_RouteEntry.isRoutePredicate(route))");
      routes.add(new pointer_router._RouteEntry.new({route: route, transform: transform}));
    }
    removeRoute(pointer, route) {
      if (!dart.test(this[_routeMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 41, 12, "_routeMap.containsKey(pointer)");
      let routes = this[_routeMap][$_get](pointer);
      if (!dart.test(routes[$any](pointer_router._RouteEntry.isRoutePredicate(route)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 43, 12, "routes.any(_RouteEntry.isRoutePredicate(route))");
      routes.removeWhere(pointer_router._RouteEntry.isRoutePredicate(route));
      if (dart.test(routes[$isEmpty])) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route, transform) {
      if (transform === void 0) transform = null;
      if (!!dart.test(this[_globalRoutes][$any](pointer_router._RouteEntry.isRoutePredicate(route)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 56, 12, "!_globalRoutes.any(_RouteEntry.isRoutePredicate(route))");
      this[_globalRoutes].add(new pointer_router._RouteEntry.new({route: route, transform: transform}));
    }
    removeGlobalRoute(route) {
      if (!dart.test(this[_globalRoutes][$any](pointer_router._RouteEntry.isRoutePredicate(route)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/pointer_router.dart", 68, 12, "_globalRoutes.any(_RouteEntry.isRoutePredicate(route))");
      this[_globalRoutes].removeWhere(pointer_router._RouteEntry.isRoutePredicate(route));
    }
    [_dispatch](event, entry) {
      try {
        event = event.transformed(entry.transform);
        entry.route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new pointer_router.FlutterErrorDetailsForPointerRouter.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while routing a pointer event"), router: this, route: entry.route, event: event, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
      }
    }
    route(event) {
      let routes = this[_routeMap][$_get](event.pointer);
      let globalRoutes = ListOf_RouteEntry().from(this[_globalRoutes]);
      if (routes != null) {
        for (let entry of ListOf_RouteEntry().from(routes)) {
          if (dart.test(routes[$any](pointer_router._RouteEntry.isRoutePredicate(entry.route)))) this[_dispatch](event, entry);
        }
      }
      for (let entry of globalRoutes) {
        if (dart.test(this[_globalRoutes][$any](pointer_router._RouteEntry.isRoutePredicate(entry.route)))) this[_dispatch](event, entry);
      }
    }
  };
  (pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (IdentityMapOfint$LinkedHashSetOf_RouteEntry()).new();
    this[_globalRoutes] = new (_HashSetOf_RouteEntry()).new();
    ;
  }).prototype = pointer_router.PointerRouter.prototype;
  dart.addTypeTests(pointer_router.PointerRouter);
  dart.setMethodSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])], [vector_math_64.Matrix4]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])], [vector_math_64.Matrix4]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [events.PointerEvent, pointer_router._RouteEntry]),
    route: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setLibraryUri(pointer_router.PointerRouter, "package:flutter/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(core.Map$(core.int, collection.LinkedHashSet$(pointer_router._RouteEntry))),
    [_globalRoutes]: dart.finalFieldType(collection.LinkedHashSet$(pointer_router._RouteEntry))
  }));
  pointer_router.FlutterErrorDetailsForPointerRouter = class FlutterErrorDetailsForPointerRouter extends assertions.FlutterErrorDetails {
    get router() {
      return this[router$];
    }
    set router(value) {
      super.router = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    get event() {
      return this[event$0];
    }
    set event(value) {
      super.event = value;
    }
  };
  (pointer_router.FlutterErrorDetailsForPointerRouter.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let router = opts && 'router' in opts ? opts.router : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[router$] = router;
    this[route$] = route;
    this[event$0] = event;
    pointer_router.FlutterErrorDetailsForPointerRouter.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = pointer_router.FlutterErrorDetailsForPointerRouter.prototype;
  dart.addTypeTests(pointer_router.FlutterErrorDetailsForPointerRouter);
  const router$ = Symbol("FlutterErrorDetailsForPointerRouter.router");
  const route$ = Symbol("FlutterErrorDetailsForPointerRouter.route");
  const event$0 = Symbol("FlutterErrorDetailsForPointerRouter.event");
  dart.setLibraryUri(pointer_router.FlutterErrorDetailsForPointerRouter, "package:flutter/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router.FlutterErrorDetailsForPointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.FlutterErrorDetailsForPointerRouter.__proto__),
    router: dart.finalFieldType(pointer_router.PointerRouter),
    route: dart.finalFieldType(dart.fnType(dart.void, [events.PointerEvent])),
    event: dart.finalFieldType(events.PointerEvent)
  }));
  pointer_router._RouteEntry = class _RouteEntry extends core.Object {
    static isRoutePredicate(route) {
      return dart.fn(entry => dart.equals(entry.route, route), _RouteEntryTobool());
    }
  };
  (pointer_router._RouteEntry.new = function(opts) {
    let route = opts && 'route' in opts ? opts.route : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    this.route = route;
    this.transform = transform;
    ;
  }).prototype = pointer_router._RouteEntry.prototype;
  dart.addTypeTests(pointer_router._RouteEntry);
  dart.setLibraryUri(pointer_router._RouteEntry, "package:flutter/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router._RouteEntry, () => ({
    __proto__: dart.getFields(pointer_router._RouteEntry.__proto__),
    route: dart.finalFieldType(dart.fnType(dart.void, [events.PointerEvent])),
    transform: dart.finalFieldType(vector_math_64.Matrix4)
  }));
  const _name$4 = dart.privateName(arena, "_name");
  let C68;
  let C69;
  let C70;
  arena.GestureDisposition = class GestureDisposition extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (arena.GestureDisposition.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = arena.GestureDisposition.prototype;
  dart.addTypeTests(arena.GestureDisposition);
  dart.setLibraryUri(arena.GestureDisposition, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureDisposition, () => ({
    __proto__: dart.getFields(arena.GestureDisposition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(arena.GestureDisposition, ['toString']);
  arena.GestureDisposition.accepted = C68 || CT.C68;
  arena.GestureDisposition.rejected = C69 || CT.C69;
  arena.GestureDisposition.values = C70 || CT.C70;
  const _arena$ = dart.privateName(arena, "_arena");
  const _pointer$ = dart.privateName(arena, "_pointer");
  const _member$ = dart.privateName(arena, "_member");
  const _resolve = dart.privateName(arena, "_resolve");
  arena.GestureArenaEntry = class GestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_arena$][_resolve](this[_pointer$], this[_member$], disposition);
    }
  };
  (arena.GestureArenaEntry.__ = function(_arena, _pointer, _member) {
    this[_arena$] = _arena;
    this[_pointer$] = _pointer;
    this[_member$] = _member;
    ;
  }).prototype = arena.GestureArenaEntry.prototype;
  dart.addTypeTests(arena.GestureArenaEntry);
  dart.setMethodSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getMethods(arena.GestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setLibraryUri(arena.GestureArenaEntry, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getFields(arena.GestureArenaEntry.__proto__),
    [_arena$]: dart.finalFieldType(arena.GestureArenaManager),
    [_pointer$]: dart.finalFieldType(core.int),
    [_member$]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  arena._GestureArena = class _GestureArena extends core.Object {
    add(member) {
      if (!dart.test(this.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 69, 12, "isOpen");
      this.members[$add](member);
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (dart.test(this.members[$isEmpty])) {
        buffer.write("<empty>");
      } else {
        buffer.write(this.members[$map](core.String, dart.fn(member => {
          if (dart.equals(member, this.eagerWinner)) return dart.str(member) + " (eager winner)";
          return dart.str(member);
        }, GestureArenaMemberToString()))[$join](", "));
      }
      if (dart.test(this.isOpen)) buffer.write(" [open]");
      if (dart.test(this.isHeld)) buffer.write(" [held]");
      if (dart.test(this.hasPendingSweep)) buffer.write(" [hasPendingSweep]");
      return buffer.toString();
    }
  };
  (arena._GestureArena.new = function() {
    this.members = JSArrayOfGestureArenaMember().of([]);
    this.isOpen = true;
    this.isHeld = false;
    this.hasPendingSweep = false;
    this.eagerWinner = null;
    ;
  }).prototype = arena._GestureArena.prototype;
  dart.addTypeTests(arena._GestureArena);
  dart.setMethodSignature(arena._GestureArena, () => ({
    __proto__: dart.getMethods(arena._GestureArena.__proto__),
    add: dart.fnType(dart.void, [arena.GestureArenaMember])
  }));
  dart.setLibraryUri(arena._GestureArena, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena._GestureArena, () => ({
    __proto__: dart.getFields(arena._GestureArena.__proto__),
    members: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    isOpen: dart.fieldType(core.bool),
    isHeld: dart.fieldType(core.bool),
    hasPendingSweep: dart.fieldType(core.bool),
    eagerWinner: dart.fieldType(arena.GestureArenaMember)
  }));
  dart.defineExtensionMethods(arena._GestureArena, ['toString']);
  const _arenas = dart.privateName(arena, "_arenas");
  const _debugLogDiagnostic = dart.privateName(arena, "_debugLogDiagnostic");
  const _tryToResolveArena = dart.privateName(arena, "_tryToResolveArena");
  const _resolveInFavorOf = dart.privateName(arena, "_resolveInFavorOf");
  const _resolveByDefault = dart.privateName(arena, "_resolveByDefault");
  arena.GestureArenaManager = class GestureArenaManager extends core.Object {
    add(pointer, member) {
      let state = this[_arenas][$putIfAbsent](pointer, dart.fn(() => {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "★ Opening new gesture arena."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 108, 14, "_debugLogDiagnostic(pointer, '★ Opening new gesture arena.");
        return new arena._GestureArena.new();
      }, VoidTo_GestureArena()));
      state.add(member);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Adding: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 112, 12, "t(_debugLogDiagnostic(pointer, 'Adding: $member");
      return new arena.GestureArenaEntry.__(this, pointer, member);
    }
    close(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isOpen = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Closing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 124, 12, "t(_debugLogDiagnostic(pointer, 'Closing', stat");
      this[_tryToResolveArena](pointer, state);
    }
    sweep(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 145, 12, "t(!state.isOp");
      if (dart.test(state.isHeld)) {
        state.hasPendingSweep = true;
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Delaying sweep", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 148, 14, "t(_debugLogDiagnostic(pointer, 'Delaying sweep', stat");
        return;
      }
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Sweeping", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 151, 12, "t(_debugLogDiagnostic(pointer, 'Sweeping', stat");
      this[_arenas][$remove](pointer);
      if (dart.test(state.members[$isNotEmpty])) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 155, 14, "t(_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}");
        state.members[$first].acceptGesture(pointer);
        for (let i = 1; i < dart.notNull(state.members[$length]); i = i + 1)
          state.members[$_get](i).rejectGesture(pointer);
      }
    }
    hold(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = true;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Holding", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 180, 12, "t(_debugLogDiagnostic(pointer, 'Holding', stat");
    }
    release(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Releasing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 197, 12, "t(_debugLogDiagnostic(pointer, 'Releasing', stat");
      if (dart.test(state.hasPendingSweep)) this.sweep(pointer);
    }
    [_resolve](pointer, member, disposition) {
      let t13;
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!dart.test(this[_debugLogDiagnostic](pointer, (dart.equals(disposition, arena.GestureDisposition.accepted) ? "Accepting" : "Rejecting") + ": " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 209, 12, "t(_debugLogDiagnostic(pointer, '${ disposition == GestureDisposition.accepted ? \"Accepting\" : \"Rejecting\" }: $member");
      if (!dart.test(state.members[$contains](member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 210, 12, "t(state.members.contains(membe");
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        state.members[$remove](member);
        member.rejectGesture(pointer);
        if (!dart.test(state.isOpen)) this[_tryToResolveArena](pointer, state);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 217, 14, "t(disposition == GestureDisposition.accept");
        if (dart.test(state.isOpen)) {
          t13 = state;
          t13.eagerWinner == null ? t13.eagerWinner = member : null;
        } else {
          if (!dart.test(this[_debugLogDiagnostic](pointer, "Self-declared winner: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 221, 16, "t(_debugLogDiagnostic(pointer, 'Self-declared winner: $member");
          this[_resolveInFavorOf](pointer, state, member);
        }
      }
    }
    [_tryToResolveArena](pointer, state) {
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 228, 12, "t(_arenas[pointer] == sta");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 229, 12, "t(!state.isOp");
      if (state.members[$length] === 1) {
        async.scheduleMicrotask(dart.fn(() => this[_resolveByDefault](pointer, state), VoidTovoid()));
      } else if (dart.test(state.members[$isEmpty])) {
        this[_arenas][$remove](pointer);
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Arena empty."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 234, 14, "t(_debugLogDiagnostic(pointer, 'Arena empty.");
      } else if (state.eagerWinner != null) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Eager winner: " + dart.str(state.eagerWinner)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 236, 14, "t(_debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}");
        this[_resolveInFavorOf](pointer, state, state.eagerWinner);
      }
    }
    [_resolveByDefault](pointer, state) {
      if (!dart.test(this[_arenas][$containsKey](pointer))) return;
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 244, 12, "t(_arenas[pointer] == sta");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 245, 12, "t(!state.isOp");
      let members = state.members;
      if (!(members[$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 247, 12, "t(members.length ==");
      this[_arenas][$remove](pointer);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Default winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 249, 12, "t(_debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}");
      state.members[$first].acceptGesture(pointer);
    }
    [_resolveInFavorOf](pointer, state, member) {
      if (!dart.equals(state, this[_arenas][$_get](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 254, 12, "t(state == _arenas[pointe");
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 255, 12, "t(state != nu");
      if (!(state.eagerWinner == null || dart.equals(state.eagerWinner, member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 256, 12, "t(state.eagerWinner == null || state.eagerWinner == memb");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 257, 12, "t(!state.isOp");
      this[_arenas][$remove](pointer);
      for (let rejectedMember of state.members) {
        if (!dart.equals(rejectedMember, member)) rejectedMember.rejectGesture(pointer);
      }
      member.acceptGesture(pointer);
    }
    [_debugLogDiagnostic](pointer, message, state) {
      if (state === void 0) state = null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintGestureArenaDiagnostics)) {
          let count = state != null ? state.members[$length] : null;
          let s = count !== 1 ? "s" : "";
          print.debugPrint("Gesture arena " + dart.toString(pointer)[$padRight](4) + " ❙ " + dart.str(message) + (count != null ? " with " + dart.str(count) + " member" + s + "." : ""));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/arena.dart", 267, 12, "t(() {\n      if (debugPrintGestureArenaDiagnostics) {\n        final int count = state != null ? state.members.length : null;\n        final String s = count != 1 ? 's' : '';\n        debugPrint('Gesture arena ${pointer.toString().padRight(4)} ❙ $message${ count != null ? \" with $count member$s.\" : \"\"}');\n      }\n      return true;\n   ");
      return true;
    }
  };
  (arena.GestureArenaManager.new = function() {
    this[_arenas] = new (IdentityMapOfint$_GestureArena()).new();
    ;
  }).prototype = arena.GestureArenaManager.prototype;
  dart.addTypeTests(arena.GestureArenaManager);
  dart.setMethodSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getMethods(arena.GestureArenaManager.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    close: dart.fnType(dart.void, [core.int]),
    sweep: dart.fnType(dart.void, [core.int]),
    hold: dart.fnType(dart.void, [core.int]),
    release: dart.fnType(dart.void, [core.int]),
    [_resolve]: dart.fnType(dart.void, [core.int, arena.GestureArenaMember, arena.GestureDisposition]),
    [_tryToResolveArena]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveByDefault]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveInFavorOf]: dart.fnType(dart.void, [core.int, arena._GestureArena, arena.GestureArenaMember]),
    [_debugLogDiagnostic]: dart.fnType(core.bool, [core.int, core.String], [arena._GestureArena])
  }));
  dart.setLibraryUri(arena.GestureArenaManager, "package:flutter/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getFields(arena.GestureArenaManager.__proto__),
    [_arenas]: dart.finalFieldType(core.Map$(core.int, arena._GestureArena))
  }));
  const _pointer = dart.privateName(converter, "_pointer");
  const _down = dart.privateName(converter, "_down");
  converter._PointerState = class _PointerState extends core.Object {
    get pointer() {
      return this[_pointer];
    }
    startNewPointer() {
      converter._PointerState._pointerCount = dart.notNull(converter._PointerState._pointerCount) + 1;
      this[_pointer] = converter._PointerState._pointerCount;
    }
    get down() {
      return this[_down];
    }
    setDown() {
      if (!!dart.test(this[_down])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 25, 12, "!_down");
      this[_down] = true;
    }
    setUp() {
      if (!dart.test(this[_down])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 29, 12, "_down");
      this[_down] = false;
    }
    deltaTo(to) {
      return to['-'](this.lastPosition);
    }
    toString() {
      return "_PointerState(pointer: " + dart.str(this.pointer) + ", down: " + dart.str(this.down) + ", lastPosition: " + dart.str(this.lastPosition) + ")";
    }
  };
  (converter._PointerState.new = function(lastPosition) {
    this[_pointer] = null;
    this[_down] = false;
    this.lastPosition = lastPosition;
    ;
  }).prototype = converter._PointerState.prototype;
  dart.addTypeTests(converter._PointerState);
  dart.setMethodSignature(converter._PointerState, () => ({
    __proto__: dart.getMethods(converter._PointerState.__proto__),
    startNewPointer: dart.fnType(dart.void, []),
    setDown: dart.fnType(dart.void, []),
    setUp: dart.fnType(dart.void, []),
    deltaTo: dart.fnType(ui.Offset, [ui.Offset])
  }));
  dart.setGetterSignature(converter._PointerState, () => ({
    __proto__: dart.getGetters(converter._PointerState.__proto__),
    pointer: core.int,
    down: core.bool
  }));
  dart.setLibraryUri(converter._PointerState, "package:flutter/src/gestures/converter.dart");
  dart.setFieldSignature(converter._PointerState, () => ({
    __proto__: dart.getFields(converter._PointerState.__proto__),
    [_pointer]: dart.fieldType(core.int),
    [_down]: dart.fieldType(core.bool),
    lastPosition: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(converter._PointerState, ['toString']);
  dart.defineLazy(converter._PointerState, {
    /*converter._PointerState._pointerCount*/get _pointerCount() {
      return 0;
    },
    set _pointerCount(_) {}
  });
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
  converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static clearPointers() {
      return converter.PointerEventConverter._pointers[$clear]();
    }
    static _ensureStateForPointer(datum, position) {
      return converter.PointerEventConverter._pointers[$putIfAbsent](datum.device, dart.fn(() => new converter._PointerState.new(position), VoidTo_PointerState()));
    }
    static expand(data, devicePixelRatio) {
      return new (SyncIterableOfPointerEvent()).new(function* expand() {
        for (let datum of data) {
          let position = new ui.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
          let radiusMinor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
          let radiusMajor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
          let radiusMin = converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
          let radiusMax = converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
          let timeStamp = datum.timeStamp;
          let kind = datum.kind;
          if (!(datum.change != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 106, 14, "datum.change != null");
          if (datum.signalKind == null || dart.equals(datum.signalKind, ui.PointerSignalKind.none)) {
            switch (datum.change) {
              case C71 || CT.C71:
              {
                if (!!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 110, 20, "!_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 112, 20, "state.lastPosition == position");
                yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C72 || CT.C72:
              {
                let alreadyAdded = converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 132, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 134, 22, "state.lastPosition == position");
                  yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                state.lastPosition = position;
                break;
              }
              case C73 || CT.C73:
              {
                let alreadyAdded = converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 176, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 178, 22, "state.lastPosition == position");
                  yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(state.lastPosition, position)) {
                  yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                state.startNewPointer();
                state.setDown();
                yield new events.PointerDownEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C74 || CT.C74:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 249, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 251, 20, "state.down");
                yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData});
                state.lastPosition = position;
                break;
              }
              case C75 || CT.C75:
              case C76 || CT.C76:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 278, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 280, 20, "state.down");
                if (!dart.equals(position, state.lastPosition)) {
                  yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                if (!dart.equals(position, state.lastPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 311, 20, "position == state.lastPosition");
                state.setUp();
                if (dart.equals(datum.change, ui.PointerChange.up)) {
                  yield new events.PointerUpEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                } else {
                  yield new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                break;
              }
              case C77 || CT.C77:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 359, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._pointers[$_get](datum.device);
                if (dart.test(state.down)) {
                  yield new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: state.lastPosition, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(position, state.lastPosition)) {
                  yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                }
                converter.PointerEventConverter._pointers[$remove](datum.device);
                yield new events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
                break;
              }
            }
          } else {
            switch (datum.signalKind) {
              case C78 || CT.C78:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 425, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) {
                  if (dart.test(state.down)) {
                    yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  } else {
                    yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  }
                  state.lastPosition = position;
                }
                let scrollDelta = new ui.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
                yield new events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta});
                break;
              }
              case C79 || CT.C79:
              {
                if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/converter.dart", 491, 20, "false");
                break;
              }
              case C80 || CT.C80:
              {
                break;
              }
            }
          }
        }
      });
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      return physicalPixels == null ? null : dart.notNull(physicalPixels) / dart.notNull(devicePixelRatio);
    }
  };
  (converter.PointerEventConverter.__ = function() {
    ;
  }).prototype = converter.PointerEventConverter.prototype;
  dart.addTypeTests(converter.PointerEventConverter);
  dart.setLibraryUri(converter.PointerEventConverter, "package:flutter/src/gestures/converter.dart");
  dart.defineLazy(converter.PointerEventConverter, {
    /*converter.PointerEventConverter._pointers*/get _pointers() {
      return new (IdentityMapOfint$_PointerState()).new();
    }
  });
  let C81;
  let C82;
  let C83;
  let C84;
  converter._synthesiseDownButtons = function _synthesiseDownButtons(buttons, kind) {
    switch (kind) {
      case C81 || CT.C81:
      {
        return buttons;
      }
      case C82 || CT.C82:
      case C83 || CT.C83:
      case C84 || CT.C84:
      {
        return (dart.notNull(buttons) | 1) >>> 0;
      }
      default:
      {
        return buttons === 0 ? 1 : buttons;
      }
    }
  };
  const _name$5 = dart.privateName(force_press, "_name");
  let C85;
  let C86;
  let C87;
  let C88;
  let C89;
  let C90;
  force_press._ForceState = class _ForceState extends core.Object {
    toString() {
      return this[_name$5];
    }
  };
  (force_press._ForceState.new = function(index, _name) {
    this.index = index;
    this[_name$5] = _name;
    ;
  }).prototype = force_press._ForceState.prototype;
  dart.addTypeTests(force_press._ForceState);
  dart.setLibraryUri(force_press._ForceState, "package:flutter/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press._ForceState, () => ({
    __proto__: dart.getFields(force_press._ForceState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$5]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(force_press._ForceState, ['toString']);
  force_press._ForceState.ready = C85 || CT.C85;
  force_press._ForceState.possible = C86 || CT.C86;
  force_press._ForceState.accepted = C87 || CT.C87;
  force_press._ForceState.started = C88 || CT.C88;
  force_press._ForceState.peaked = C89 || CT.C89;
  force_press._ForceState.values = C90 || CT.C90;
  force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$1];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
  };
  (force_press.ForcePressDetails.new = function(opts) {
    let t13;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    this[globalPosition$1] = globalPosition;
    this[pressure$] = pressure;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 56, 15, "globalPosition != null");
    if (!(pressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 57, 15, "pressure != null");
    this[localPosition$1] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    ;
  }).prototype = force_press.ForcePressDetails.prototype;
  dart.addTypeTests(force_press.ForcePressDetails);
  const globalPosition$1 = Symbol("ForcePressDetails.globalPosition");
  const localPosition$1 = Symbol("ForcePressDetails.localPosition");
  const pressure$ = Symbol("ForcePressDetails.pressure");
  dart.setLibraryUri(force_press.ForcePressDetails, "package:flutter/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  let C91;
  const _lastPosition = dart.privateName(force_press, "_lastPosition");
  const _lastPressure = dart.privateName(force_press, "_lastPressure");
  const _state$ = dart.privateName(force_press, "_state");
  force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart$];
    }
    set onStart(value) {
      this[onStart$] = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      this[onUpdate$] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      this[onEnd$] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    addAllowedPointer(event) {
      if (!events.PointerUpEvent.is(event) && dart.notNull(event.pressureMax) <= 1.0) {
        this.resolve(arena.GestureDisposition.rejected);
      } else {
        this.startTrackingPointer(event.pointer, event.transform);
        if (dart.equals(this[_state$], force_press._ForceState.ready)) {
          this[_state$] = force_press._ForceState.possible;
          this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
        }
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$], force_press._ForceState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 233, 12, "_state != _ForceState.ready");
      if (events.PointerMoveEvent.is(event) || events.PointerDownEvent.is(event)) {
        if (dart.notNull(event.pressure) > dart.notNull(event.pressureMax) || dart.notNull(event.pressure) < dart.notNull(event.pressureMin)) {
          print.debugPrint("The reported device pressure " + dart.toString(event.pressure) + " is outside of the device pressure range where: " + dart.toString(event.pressureMin) + " <= pressure <= " + dart.toString(event.pressureMax));
        }
        let pressure = this.interpolation(event.pressureMin, event.pressureMax, event.pressure);
        if (!(dart.notNull(pressure) >= 0.0 && dart.notNull(pressure) <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 246, 9, "(pressure >= 0.0 && pressure <= 1.0) || // Interpolated pressure must be between 1.0 and 0.0...\n        pressure.isNaN");
        this[_lastPosition] = recognizer.OffsetPair.fromEventPosition(event);
        this[_lastPressure] = pressure;
        if (dart.equals(this[_state$], force_press._ForceState.possible)) {
          if (dart.notNull(pressure) > dart.notNull(this.startPressure)) {
            this[_state$] = force_press._ForceState.started;
            this.resolve(arena.GestureDisposition.accepted);
          } else if (dart.notNull(event.delta.distanceSquared) > 18) {
            this.resolve(arena.GestureDisposition.rejected);
          }
        }
        if (dart.notNull(pressure) > dart.notNull(this.startPressure) && dart.equals(this[_state$], force_press._ForceState.accepted)) {
          this[_state$] = force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), VoidTovoid()));
          }
        }
        if (this.onPeak != null && dart.notNull(pressure) > dart.notNull(this.peakPressure) && dart.equals(this[_state$], force_press._ForceState.started)) {
          this[_state$] = force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => this.onPeak(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (dart.equals(this[_state$], force_press._ForceState.started) || dart.equals(this[_state$], force_press._ForceState.peaked))) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position, localPosition: event.localPosition})), VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state$], force_press._ForceState.possible)) this[_state$] = force_press._ForceState.accepted;
      if (this.onStart != null && dart.equals(this[_state$], force_press._ForceState.started)) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      let wasAccepted = dart.equals(this[_state$], force_press._ForceState.started) || dart.equals(this[_state$], force_press._ForceState.peaked);
      if (dart.equals(this[_state$], force_press._ForceState.possible)) {
        this.resolve(arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition].global, localPosition: this[_lastPosition].local})), VoidTovoid()));
        }
      }
      this[_state$] = force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 338, 12, "min <= max");
      let value = (dart.notNull(t) - dart.notNull(min)) / (dart.notNull(max) - dart.notNull(min));
      if (!value[$isNaN]) value = value[$clamp](0.0, 1.0);
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : C91 || CT.C91;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart$] = null;
    this[onUpdate$] = null;
    this[onPeak] = null;
    this[onEnd$] = null;
    this[_lastPosition] = null;
    this[_lastPressure] = null;
    this[_state$] = force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 132, 15, "startPressure != null");
    if (!(peakPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 133, 15, "peakPressure != null");
    if (!(interpolation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 134, 15, "interpolation != null");
    if (!(dart.notNull(peakPressure) > dart.notNull(startPressure))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/force_press.dart", 135, 15, "peakPressure > startPressure");
    force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(force_press.ForcePressGestureRecognizer);
  const onStart$ = Symbol("ForcePressGestureRecognizer.onStart");
  const onUpdate$ = Symbol("ForcePressGestureRecognizer.onUpdate");
  const onPeak = Symbol("ForcePressGestureRecognizer.onPeak");
  const onEnd$ = Symbol("ForcePressGestureRecognizer.onEnd");
  const startPressure$ = Symbol("ForcePressGestureRecognizer.startPressure");
  const peakPressure$ = Symbol("ForcePressGestureRecognizer.peakPressure");
  const interpolation$ = Symbol("ForcePressGestureRecognizer.interpolation");
  dart.setMethodSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(force_press.ForcePressGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(force_press.ForcePressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(force_press.ForcePressGestureRecognizer, "package:flutter/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onPeak: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(dart.fnType(core.double, [core.double, core.double, core.double])),
    [_lastPosition]: dart.fieldType(recognizer.OffsetPair),
    [_lastPressure]: dart.fieldType(core.double),
    [_state$]: dart.fieldType(force_press._ForceState)
  }));
  debug.debugAssertAllSchedulerVarsUnset = function debugAssertAllSchedulerVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug.debugPrintBeginFrameBanner) || dart.test(debug.debugPrintEndFrameBanner)) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/scheduler/debug.dart", 59, 10, "() {\n    if (debugPrintBeginFrameBanner ||\n        debugPrintEndFrameBanner) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*debug.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*debug.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  });
  drag_details.DragDownDetails = class DragDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$2];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$2];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragDownDetails.new = function(opts) {
    let t13;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$2] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 26, 15, "globalPosition != null");
    this[localPosition$2] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    ;
  }).prototype = drag_details.DragDownDetails.prototype;
  dart.addTypeTests(drag_details.DragDownDetails);
  const globalPosition$2 = Symbol("DragDownDetails.globalPosition");
  const localPosition$2 = Symbol("DragDownDetails.localPosition");
  dart.setLibraryUri(drag_details.DragDownDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragDownDetails, ['toString']);
  drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get globalPosition() {
      return this[globalPosition$3];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$3];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragStartDetails.new = function(opts) {
    let t13;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$3] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 73, 15, "globalPosition != null");
    this[localPosition$3] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    ;
  }).prototype = drag_details.DragStartDetails.prototype;
  dart.addTypeTests(drag_details.DragStartDetails);
  const sourceTimeStamp$ = Symbol("DragStartDetails.sourceTimeStamp");
  const globalPosition$3 = Symbol("DragStartDetails.globalPosition");
  const localPosition$3 = Symbol("DragStartDetails.localPosition");
  dart.setLibraryUri(drag_details.DragStartDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragStartDetails, ['toString']);
  drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$4];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$4];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.delta) + ")";
    }
  };
  (drag_details.DragUpdateDetails.new = function(opts) {
    let t13;
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : C39 || CT.C39;
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$4] = globalPosition;
    if (!(delta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 137, 15, "delta != null");
    if (!(primaryDelta == null || primaryDelta == delta.dx && delta.dy === 0.0 || primaryDelta == delta.dy && delta.dx === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 138, 15, "primaryDelta == null\n           || (primaryDelta == delta.dx && delta.dy == 0.0)\n           || (primaryDelta == delta.dy && delta.dx == 0.0)");
    this[localPosition$4] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    ;
  }).prototype = drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(drag_details.DragUpdateDetails);
  const sourceTimeStamp$0 = Symbol("DragUpdateDetails.sourceTimeStamp");
  const delta$ = Symbol("DragUpdateDetails.delta");
  const primaryDelta$ = Symbol("DragUpdateDetails.primaryDelta");
  const globalPosition$4 = Symbol("DragUpdateDetails.globalPosition");
  const localPosition$4 = Symbol("DragUpdateDetails.localPosition");
  dart.setLibraryUri(drag_details.DragUpdateDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    delta: dart.finalFieldType(ui.Offset),
    primaryDelta: dart.finalFieldType(core.double),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragUpdateDetails, ['toString']);
  drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$0];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.velocity) + ")";
    }
  };
  (drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C62 || CT.C62;
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$0] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 214, 15, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/drag_details.dart", 215, 15, "primaryVelocity == null\n           || primaryVelocity == velocity.pixelsPerSecond.dx\n           || primaryVelocity == velocity.pixelsPerSecond.dy");
    ;
  }).prototype = drag_details.DragEndDetails.prototype;
  dart.addTypeTests(drag_details.DragEndDetails);
  const velocity$0 = Symbol("DragEndDetails.velocity");
  const primaryVelocity$ = Symbol("DragEndDetails.primaryVelocity");
  dart.setLibraryUri(drag_details.DragEndDetails, "package:flutter/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(drag_details.DragEndDetails, ['toString']);
  const _loaded = dart.privateName(font_loader, "_loaded");
  const _fontFutures = dart.privateName(font_loader, "_fontFutures");
  font_loader.FontLoader = class FontLoader extends core.Object {
    get family() {
      return this[family$];
    }
    set family(value) {
      super.family = value;
    }
    addFont(bytes) {
      if (dart.test(this[_loaded])) dart.throw(new core.StateError.new("FontLoader is already loaded"));
      this[_fontFutures][$add](bytes.then(typed_data.Uint8List, dart.fn(data => typed_data.Uint8List.view(data[$buffer], data[$offsetInBytes], data[$lengthInBytes]), ByteDataToUint8List())));
    }
    load() {
      return async.async(dart.void, (function* load() {
        if (dart.test(this[_loaded])) dart.throw(new core.StateError.new("FontLoader is already loaded"));
        this[_loaded] = true;
        let loadFutures = this[_fontFutures][$map](FutureOfvoid(), dart.fn(f => f.then(dart.void, dart.fn(list => this.loadFont(list, this.family), Uint8ListToFutureOfvoid())), FutureOfUint8ListToFutureOfvoid()));
        return async.Future.wait(dart.void, loadFutures[$toList]());
      }).bind(this));
    }
    loadFont(list, family) {
      return ui.loadFontFromList(list, {fontFamily: family});
    }
  };
  (font_loader.FontLoader.new = function(family) {
    this[family$] = family;
    this[_loaded] = false;
    this[_fontFutures] = JSArrayOfFutureOfUint8List().of([]);
    ;
  }).prototype = font_loader.FontLoader.prototype;
  dart.addTypeTests(font_loader.FontLoader);
  const family$ = Symbol("FontLoader.family");
  dart.setMethodSignature(font_loader.FontLoader, () => ({
    __proto__: dart.getMethods(font_loader.FontLoader.__proto__),
    addFont: dart.fnType(dart.void, [async.Future$(typed_data.ByteData)]),
    load: dart.fnType(async.Future$(dart.void), []),
    loadFont: dart.fnType(async.Future$(dart.void), [typed_data.Uint8List, core.String])
  }));
  dart.setLibraryUri(font_loader.FontLoader, "package:flutter/src/services/font_loader.dart");
  dart.setFieldSignature(font_loader.FontLoader, () => ({
    __proto__: dart.getFields(font_loader.FontLoader.__proto__),
    family: dart.finalFieldType(core.String),
    [_loaded]: dart.fieldType(core.bool),
    [_fontFutures]: dart.finalFieldType(core.List$(async.Future$(typed_data.Uint8List)))
  }));
  let C92;
  events.PointerEvent = class PointerEvent extends diagnostics.Diagnosticable {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get localPosition() {
      return this[localPosition$5];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get delta() {
      return this[delta$0];
    }
    set delta(value) {
      super.delta = value;
    }
    get localDelta() {
      return this[localDelta$];
    }
    set localDelta(value) {
      super.localDelta = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get down() {
      return this[down$];
    }
    set down(value) {
      super.down = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get pressure() {
      return this[pressure$0];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get pressureMin() {
      return this[pressureMin$];
    }
    set pressureMin(value) {
      super.pressureMin = value;
    }
    get pressureMax() {
      return this[pressureMax$];
    }
    set pressureMax(value) {
      super.pressureMax = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get distanceMax() {
      return this[distanceMax$];
    }
    set distanceMax(value) {
      super.distanceMax = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get radiusMajor() {
      return this[radiusMajor$];
    }
    set radiusMajor(value) {
      super.radiusMajor = value;
    }
    get radiusMinor() {
      return this[radiusMinor$];
    }
    set radiusMinor(value) {
      super.radiusMinor = value;
    }
    get radiusMin() {
      return this[radiusMin$];
    }
    set radiusMin(value) {
      super.radiusMin = value;
    }
    get radiusMax() {
      return this[radiusMax$];
    }
    set radiusMax(value) {
      super.radiusMax = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get tilt() {
      return this[tilt$];
    }
    set tilt(value) {
      super.tilt = value;
    }
    get platformData() {
      return this[platformData$];
    }
    set platformData(value) {
      super.platformData = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    get distanceMin() {
      return 0.0;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("position", this.position));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("localPosition", this.localPosition, {defaultValue: this.position, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("delta", this.delta, {defaultValue: ui.Offset.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("localDelta", this.localDelta, {defaultValue: this.delta, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp, {defaultValue: core.Duration.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("pointer", this.pointer, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (EnumPropertyOfPointerDeviceKind()).new("kind", this.kind, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("device", this.device, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("buttons", this.buttons, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("down", this.down, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressure", this.pressure, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMin", this.pressureMin, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMax", this.pressureMax, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distance", this.distance, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMin", this.distanceMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMax", this.distanceMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMajor", this.radiusMajor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMinor", this.radiusMinor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMin", this.radiusMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMax", this.radiusMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("orientation", this.orientation, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("tilt", this.tilt, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("platformData", this.platformData, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("obscured", {value: this.obscured, ifTrue: "obscured", level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized", level: diagnostics.DiagnosticLevel.debug}));
    }
    toStringFull() {
      return this.toString({minLevel: diagnostics.DiagnosticLevel.fine});
    }
    static transformPosition(transform, position) {
      if (transform == null) {
        return position;
      }
      let position3 = vector_math_64.Vector3.new(position.dx, position.dy, 0.0);
      let transformed3 = transform.perspectiveTransform(position3);
      return new ui.Offset.new(transformed3.x, transformed3.y);
    }
    static transformDeltaViaPositions(opts) {
      let untransformedEndPosition = opts && 'untransformedEndPosition' in opts ? opts.untransformedEndPosition : null;
      let transformedEndPosition = opts && 'transformedEndPosition' in opts ? opts.transformedEndPosition : null;
      let untransformedDelta = opts && 'untransformedDelta' in opts ? opts.untransformedDelta : null;
      let transform = opts && 'transform' in opts ? opts.transform : null;
      if (transform == null) {
        return untransformedDelta;
      }
      transformedEndPosition == null ? transformedEndPosition = events.PointerEvent.transformPosition(transform, untransformedEndPosition) : null;
      let transformedStartPosition = events.PointerEvent.transformPosition(transform, untransformedEndPosition['-'](untransformedDelta));
      return transformedEndPosition['-'](transformedStartPosition);
    }
    static removePerspectiveTransform(transform) {
      let t13;
      let vector = vector_math_64.Vector4.new(0.0, 0.0, 1.0, 0.0);
      t13 = transform.clone();
      t13.setColumn(2, vector);
      t13.setRow(2, vector);
      return t13;
    }
  };
  (events.PointerEvent.new = function(opts) {
    let t13, t13$;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C39 || CT.C39;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    this[timeStamp$] = timeStamp;
    this[pointer$] = pointer;
    this[kind$0] = kind;
    this[device$] = device;
    this[position$] = position;
    this[delta$0] = delta;
    this[buttons$] = buttons;
    this[down$] = down;
    this[obscured$] = obscured;
    this[pressure$0] = pressure;
    this[pressureMin$] = pressureMin;
    this[pressureMax$] = pressureMax;
    this[distance$] = distance;
    this[distanceMax$] = distanceMax;
    this[size$] = size;
    this[radiusMajor$] = radiusMajor;
    this[radiusMinor$] = radiusMinor;
    this[radiusMin$] = radiusMin;
    this[radiusMax$] = radiusMax;
    this[orientation$] = orientation;
    this[tilt$] = tilt;
    this[platformData$] = platformData;
    this[synthesized$] = synthesized;
    this[transform$] = transform;
    this[original$] = original;
    this[localPosition$5] = (t13 = localPosition, t13 == null ? position : t13);
    this[localDelta$] = (t13$ = localDelta, t13$ == null ? delta : t13$);
    events.PointerEvent.__proto__.new.call(this);
    ;
  }).prototype = events.PointerEvent.prototype;
  dart.addTypeTests(events.PointerEvent);
  const timeStamp$ = Symbol("PointerEvent.timeStamp");
  const pointer$ = Symbol("PointerEvent.pointer");
  const kind$0 = Symbol("PointerEvent.kind");
  const device$ = Symbol("PointerEvent.device");
  const position$ = Symbol("PointerEvent.position");
  const localPosition$5 = Symbol("PointerEvent.localPosition");
  const delta$0 = Symbol("PointerEvent.delta");
  const localDelta$ = Symbol("PointerEvent.localDelta");
  const buttons$ = Symbol("PointerEvent.buttons");
  const down$ = Symbol("PointerEvent.down");
  const obscured$ = Symbol("PointerEvent.obscured");
  const pressure$0 = Symbol("PointerEvent.pressure");
  const pressureMin$ = Symbol("PointerEvent.pressureMin");
  const pressureMax$ = Symbol("PointerEvent.pressureMax");
  const distance$ = Symbol("PointerEvent.distance");
  const distanceMax$ = Symbol("PointerEvent.distanceMax");
  const size$ = Symbol("PointerEvent.size");
  const radiusMajor$ = Symbol("PointerEvent.radiusMajor");
  const radiusMinor$ = Symbol("PointerEvent.radiusMinor");
  const radiusMin$ = Symbol("PointerEvent.radiusMin");
  const radiusMax$ = Symbol("PointerEvent.radiusMax");
  const orientation$ = Symbol("PointerEvent.orientation");
  const tilt$ = Symbol("PointerEvent.tilt");
  const platformData$ = Symbol("PointerEvent.platformData");
  const synthesized$ = Symbol("PointerEvent.synthesized");
  const transform$ = Symbol("PointerEvent.transform");
  const original$ = Symbol("PointerEvent.original");
  dart.setMethodSignature(events.PointerEvent, () => ({
    __proto__: dart.getMethods(events.PointerEvent.__proto__),
    toStringFull: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(events.PointerEvent, () => ({
    __proto__: dart.getGetters(events.PointerEvent.__proto__),
    distanceMin: core.double
  }));
  dart.setLibraryUri(events.PointerEvent, "package:flutter/src/gestures/events.dart");
  dart.setFieldSignature(events.PointerEvent, () => ({
    __proto__: dart.getFields(events.PointerEvent.__proto__),
    timeStamp: dart.finalFieldType(core.Duration),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    device: dart.finalFieldType(core.int),
    position: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    delta: dart.finalFieldType(ui.Offset),
    localDelta: dart.finalFieldType(ui.Offset),
    buttons: dart.finalFieldType(core.int),
    down: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    pressure: dart.finalFieldType(core.double),
    pressureMin: dart.finalFieldType(core.double),
    pressureMax: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    distanceMax: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    radiusMajor: dart.finalFieldType(core.double),
    radiusMinor: dart.finalFieldType(core.double),
    radiusMin: dart.finalFieldType(core.double),
    radiusMax: dart.finalFieldType(core.double),
    orientation: dart.finalFieldType(core.double),
    tilt: dart.finalFieldType(core.double),
    platformData: dart.finalFieldType(core.int),
    synthesized: dart.finalFieldType(core.bool),
    transform: dart.finalFieldType(vector_math_64.Matrix4),
    original: dart.finalFieldType(events.PointerEvent)
  }));
  events.PointerAddedEvent = class PointerAddedEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerAddedEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: events.PointerAddedEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerAddedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerAddedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerAddedEvent.prototype;
  dart.addTypeTests(events.PointerAddedEvent);
  dart.setMethodSignature(events.PointerAddedEvent, () => ({
    __proto__: dart.getMethods(events.PointerAddedEvent.__proto__),
    transformed: dart.fnType(events.PointerAddedEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerAddedEvent, "package:flutter/src/gestures/events.dart");
  events.PointerRemovedEvent = class PointerRemovedEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerRemovedEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distanceMax: this.distanceMax, radiusMin: this.radiusMin, radiusMax: this.radiusMax, transform: transform, original: events.PointerRemovedEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerRemovedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerRemovedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, transform: transform, original: original});
    ;
  }).prototype = events.PointerRemovedEvent.prototype;
  dart.addTypeTests(events.PointerRemovedEvent);
  dart.setMethodSignature(events.PointerRemovedEvent, () => ({
    __proto__: dart.getMethods(events.PointerRemovedEvent.__proto__),
    transformed: dart.fnType(events.PointerRemovedEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerRemovedEvent, "package:flutter/src/gestures/events.dart");
  events.PointerHoverEvent = class PointerHoverEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerHoverEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, synthesized: this.synthesized, transform: transform, original: events.PointerHoverEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerHoverEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C39 || CT.C39;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerHoverEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerHoverEvent.prototype;
  dart.addTypeTests(events.PointerHoverEvent);
  dart.setMethodSignature(events.PointerHoverEvent, () => ({
    __proto__: dart.getMethods(events.PointerHoverEvent.__proto__),
    transformed: dart.fnType(events.PointerHoverEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerHoverEvent, "package:flutter/src/gestures/events.dart");
  events.PointerEnterEvent = class PointerEnterEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerEnterEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, synthesized: this.synthesized, transform: transform, original: events.PointerEnterEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerEnterEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C39 || CT.C39;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerEnterEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerEnterEvent.prototype;
  (events.PointerEnterEvent.fromHoverEvent = function(event) {
    events.PointerEnterEvent.fromMouseEvent.call(this, event);
  }).prototype = events.PointerEnterEvent.prototype;
  (events.PointerEnterEvent.fromMouseEvent = function(event) {
    let t13, t13$, t13$0, t13$1, t13$2, t13$3, t13$4, t13$5, t13$6, t13$7, t13$8, t13$9, t13$10, t13$11, t13$12, t13$13, t13$14, t13$15, t13$16, t13$17, t13$18, t13$19, t13$20;
    events.PointerEnterEvent.new.call(this, {timeStamp: (t13 = event, t13 == null ? null : t13.timeStamp), kind: (t13$ = event, t13$ == null ? null : t13$.kind), device: (t13$0 = event, t13$0 == null ? null : t13$0.device), position: (t13$1 = event, t13$1 == null ? null : t13$1.position), localPosition: (t13$2 = event, t13$2 == null ? null : t13$2.localPosition), delta: (t13$3 = event, t13$3 == null ? null : t13$3.delta), localDelta: (t13$4 = event, t13$4 == null ? null : t13$4.localDelta), buttons: (t13$5 = event, t13$5 == null ? null : t13$5.buttons), obscured: (t13$6 = event, t13$6 == null ? null : t13$6.obscured), pressureMin: (t13$7 = event, t13$7 == null ? null : t13$7.pressureMin), pressureMax: (t13$8 = event, t13$8 == null ? null : t13$8.pressureMax), distance: (t13$9 = event, t13$9 == null ? null : t13$9.distance), distanceMax: (t13$10 = event, t13$10 == null ? null : t13$10.distanceMax), size: (t13$11 = event, t13$11 == null ? null : t13$11.size), radiusMajor: (t13$12 = event, t13$12 == null ? null : t13$12.radiusMajor), radiusMinor: (t13$13 = event, t13$13 == null ? null : t13$13.radiusMinor), radiusMin: (t13$14 = event, t13$14 == null ? null : t13$14.radiusMin), radiusMax: (t13$15 = event, t13$15 == null ? null : t13$15.radiusMax), orientation: (t13$16 = event, t13$16 == null ? null : t13$16.orientation), tilt: (t13$17 = event, t13$17 == null ? null : t13$17.tilt), synthesized: (t13$18 = event, t13$18 == null ? null : t13$18.synthesized), transform: (t13$19 = event, t13$19 == null ? null : t13$19.transform), original: events.PointerEnterEvent._check((t13$20 = event, t13$20 == null ? null : t13$20.original))});
  }).prototype = events.PointerEnterEvent.prototype;
  dart.addTypeTests(events.PointerEnterEvent);
  dart.setMethodSignature(events.PointerEnterEvent, () => ({
    __proto__: dart.getMethods(events.PointerEnterEvent.__proto__),
    transformed: dart.fnType(events.PointerEnterEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerEnterEvent, "package:flutter/src/gestures/events.dart");
  events.PointerExitEvent = class PointerExitEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerExitEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, synthesized: this.synthesized, transform: transform, original: events.PointerExitEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerExitEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C39 || CT.C39;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerExitEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerExitEvent.prototype;
  (events.PointerExitEvent.fromHoverEvent = function(event) {
    events.PointerExitEvent.fromMouseEvent.call(this, event);
  }).prototype = events.PointerExitEvent.prototype;
  (events.PointerExitEvent.fromMouseEvent = function(event) {
    let t13, t13$, t13$0, t13$1, t13$2, t13$3, t13$4, t13$5, t13$6, t13$7, t13$8, t13$9, t13$10, t13$11, t13$12, t13$13, t13$14, t13$15, t13$16, t13$17, t13$18, t13$19, t13$20;
    events.PointerExitEvent.new.call(this, {timeStamp: (t13 = event, t13 == null ? null : t13.timeStamp), kind: (t13$ = event, t13$ == null ? null : t13$.kind), device: (t13$0 = event, t13$0 == null ? null : t13$0.device), position: (t13$1 = event, t13$1 == null ? null : t13$1.position), localPosition: (t13$2 = event, t13$2 == null ? null : t13$2.localPosition), delta: (t13$3 = event, t13$3 == null ? null : t13$3.delta), localDelta: (t13$4 = event, t13$4 == null ? null : t13$4.localDelta), buttons: (t13$5 = event, t13$5 == null ? null : t13$5.buttons), obscured: (t13$6 = event, t13$6 == null ? null : t13$6.obscured), pressureMin: (t13$7 = event, t13$7 == null ? null : t13$7.pressureMin), pressureMax: (t13$8 = event, t13$8 == null ? null : t13$8.pressureMax), distance: (t13$9 = event, t13$9 == null ? null : t13$9.distance), distanceMax: (t13$10 = event, t13$10 == null ? null : t13$10.distanceMax), size: (t13$11 = event, t13$11 == null ? null : t13$11.size), radiusMajor: (t13$12 = event, t13$12 == null ? null : t13$12.radiusMajor), radiusMinor: (t13$13 = event, t13$13 == null ? null : t13$13.radiusMinor), radiusMin: (t13$14 = event, t13$14 == null ? null : t13$14.radiusMin), radiusMax: (t13$15 = event, t13$15 == null ? null : t13$15.radiusMax), orientation: (t13$16 = event, t13$16 == null ? null : t13$16.orientation), tilt: (t13$17 = event, t13$17 == null ? null : t13$17.tilt), synthesized: (t13$18 = event, t13$18 == null ? null : t13$18.synthesized), transform: (t13$19 = event, t13$19 == null ? null : t13$19.transform), original: events.PointerExitEvent._check((t13$20 = event, t13$20 == null ? null : t13$20.original))});
  }).prototype = events.PointerExitEvent.prototype;
  dart.addTypeTests(events.PointerExitEvent);
  dart.setMethodSignature(events.PointerExitEvent, () => ({
    __proto__: dart.getMethods(events.PointerExitEvent.__proto__),
    transformed: dart.fnType(events.PointerExitEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerExitEvent, "package:flutter/src/gestures/events.dart");
  events.PointerDownEvent = class PointerDownEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerDownEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), buttons: this.buttons, obscured: this.obscured, pressure: this.pressure, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: events.PointerDownEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerDownEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerDownEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerDownEvent.prototype;
  dart.addTypeTests(events.PointerDownEvent);
  dart.setMethodSignature(events.PointerDownEvent, () => ({
    __proto__: dart.getMethods(events.PointerDownEvent.__proto__),
    transformed: dart.fnType(events.PointerDownEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerDownEvent, "package:flutter/src/gestures/events.dart");
  events.PointerMoveEvent = class PointerMoveEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      let transformedPosition = events.PointerEvent.transformPosition(transform, this.position);
      return new events.PointerMoveEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: transformedPosition, delta: this.delta, localDelta: events.PointerEvent.transformDeltaViaPositions({transform: transform, untransformedDelta: this.delta, untransformedEndPosition: this.position, transformedEndPosition: transformedPosition}), buttons: this.buttons, obscured: this.obscured, pressure: this.pressure, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, platformData: this.platformData, synthesized: this.synthesized, transform: transform, original: events.PointerMoveEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerMoveEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let delta = opts && 'delta' in opts ? opts.delta : C39 || CT.C39;
    let localDelta = opts && 'localDelta' in opts ? opts.localDelta : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerMoveEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, delta: delta, localDelta: localDelta, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, platformData: platformData, synthesized: synthesized, transform: transform, original: original});
    ;
  }).prototype = events.PointerMoveEvent.prototype;
  dart.addTypeTests(events.PointerMoveEvent);
  dart.setMethodSignature(events.PointerMoveEvent, () => ({
    __proto__: dart.getMethods(events.PointerMoveEvent.__proto__),
    transformed: dart.fnType(events.PointerMoveEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerMoveEvent, "package:flutter/src/gestures/events.dart");
  events.PointerUpEvent = class PointerUpEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerUpEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), buttons: this.buttons, obscured: this.obscured, pressure: this.pressure, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: events.PointerUpEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerUpEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerUpEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, buttons: buttons, down: false, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerUpEvent.prototype;
  dart.addTypeTests(events.PointerUpEvent);
  dart.setMethodSignature(events.PointerUpEvent, () => ({
    __proto__: dart.getMethods(events.PointerUpEvent.__proto__),
    transformed: dart.fnType(events.PointerUpEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerUpEvent, "package:flutter/src/gestures/events.dart");
  events.PointerSignalEvent = class PointerSignalEvent extends events.PointerEvent {};
  (events.PointerSignalEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C81 || CT.C81;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerSignalEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, transform: transform, original: original});
    ;
  }).prototype = events.PointerSignalEvent.prototype;
  dart.addTypeTests(events.PointerSignalEvent);
  dart.setLibraryUri(events.PointerSignalEvent, "package:flutter/src/gestures/events.dart");
  events.PointerScrollEvent = class PointerScrollEvent extends events.PointerSignalEvent {
    get scrollDelta() {
      return this[scrollDelta$];
    }
    set scrollDelta(value) {
      super.scrollDelta = value;
    }
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerScrollEvent.new({timeStamp: this.timeStamp, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), scrollDelta: this.scrollDelta, transform: transform, original: events.PointerScrollEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (events.PointerScrollEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let kind = opts && 'kind' in opts ? opts.kind : C81 || CT.C81;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let scrollDelta = opts && 'scrollDelta' in opts ? opts.scrollDelta : C39 || CT.C39;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    this[scrollDelta$] = scrollDelta;
    if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1414, 15, "timeStamp != null");
    if (!(kind != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1415, 15, "kind != null");
    if (!(device != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1416, 15, "device != null");
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1417, 15, "position != null");
    if (!(scrollDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/events.dart", 1418, 15, "scrollDelta != null");
    events.PointerScrollEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, localPosition: localPosition, transform: transform, original: original});
    ;
  }).prototype = events.PointerScrollEvent.prototype;
  dart.addTypeTests(events.PointerScrollEvent);
  const scrollDelta$ = Symbol("PointerScrollEvent.scrollDelta");
  dart.setMethodSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getMethods(events.PointerScrollEvent.__proto__),
    transformed: dart.fnType(events.PointerScrollEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerScrollEvent, "package:flutter/src/gestures/events.dart");
  dart.setFieldSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getFields(events.PointerScrollEvent.__proto__),
    scrollDelta: dart.finalFieldType(ui.Offset)
  }));
  events.PointerCancelEvent = class PointerCancelEvent extends events.PointerEvent {
    transformed(transform) {
      let t13;
      if (transform == null || dart.equals(transform, this.transform)) {
        return this;
      }
      return new events.PointerCancelEvent.new({timeStamp: this.timeStamp, pointer: this.pointer, kind: this.kind, device: this.device, position: this.position, localPosition: events.PointerEvent.transformPosition(transform, this.position), buttons: this.buttons, obscured: this.obscured, pressureMin: this.pressureMin, pressureMax: this.pressureMax, distance: this.distance, distanceMax: this.distanceMax, size: this.size, radiusMajor: this.radiusMajor, radiusMinor: this.radiusMinor, radiusMin: this.radiusMin, radiusMax: this.radiusMax, orientation: this.orientation, tilt: this.tilt, transform: transform, original: events.PointerCancelEvent._check((t13 = this.original, t13 == null ? this : t13))});
    }
  };
  (events.PointerCancelEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C92 || CT.C92;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C82 || CT.C82;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let original = opts && 'original' in opts ? opts.original : null;
    events.PointerCancelEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, localPosition: localPosition, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, transform: transform, original: original});
    ;
  }).prototype = events.PointerCancelEvent.prototype;
  dart.addTypeTests(events.PointerCancelEvent);
  dart.setMethodSignature(events.PointerCancelEvent, () => ({
    __proto__: dart.getMethods(events.PointerCancelEvent.__proto__),
    transformed: dart.fnType(events.PointerCancelEvent, [vector_math_64.Matrix4])
  }));
  dart.setLibraryUri(events.PointerCancelEvent, "package:flutter/src/gestures/events.dart");
  events.nthMouseButton = function nthMouseButton(number) {
    return ((1)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.nthStylusButton = function nthStylusButton(number) {
    return ((2)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.smallestButton = function smallestButton(buttons) {
    return (dart.notNull(buttons) & -dart.notNull(buttons)) >>> 0;
  };
  events.isSingleButton = function isSingleButton(buttons) {
    return buttons !== 0 && events.smallestButton(buttons) == buttons;
  };
  dart.defineLazy(events, {
    /*events.kPrimaryButton*/get kPrimaryButton() {
      return 1;
    },
    /*events.kSecondaryButton*/get kSecondaryButton() {
      return 2;
    },
    /*events.kPrimaryMouseButton*/get kPrimaryMouseButton() {
      return 1;
    },
    /*events.kSecondaryMouseButton*/get kSecondaryMouseButton() {
      return 2;
    },
    /*events.kStylusContact*/get kStylusContact() {
      return 1;
    },
    /*events.kPrimaryStylusButton*/get kPrimaryStylusButton() {
      return 2;
    },
    /*events.kMiddleMouseButton*/get kMiddleMouseButton() {
      return 4;
    },
    /*events.kSecondaryStylusButton*/get kSecondaryStylusButton() {
      return 4;
    },
    /*events.kBackMouseButton*/get kBackMouseButton() {
      return 8;
    },
    /*events.kForwardMouseButton*/get kForwardMouseButton() {
      return 16;
    },
    /*events.kTouchContact*/get kTouchContact() {
      return 1;
    }
  });
  long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$5];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$6];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
  };
  (long_press.LongPressStartDetails.new = function(opts) {
    let t13;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    this[globalPosition$5] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 58, 15, "globalPosition != null");
    this[localPosition$6] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    ;
  }).prototype = long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(long_press.LongPressStartDetails);
  const globalPosition$5 = Symbol("LongPressStartDetails.globalPosition");
  const localPosition$6 = Symbol("LongPressStartDetails.localPosition");
  dart.setLibraryUri(long_press.LongPressStartDetails, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset)
  }));
  long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$6];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$7];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
    get localOffsetFromOrigin() {
      return this[localOffsetFromOrigin$];
    }
    set localOffsetFromOrigin(value) {
      super.localOffsetFromOrigin = value;
    }
  };
  (long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let t13, t13$;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : C39 || CT.C39;
    let localOffsetFromOrigin = opts && 'localOffsetFromOrigin' in opts ? opts.localOffsetFromOrigin : null;
    this[globalPosition$6] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 84, 15, "globalPosition != null");
    if (!(offsetFromOrigin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 85, 15, "offsetFromOrigin != null");
    this[localPosition$7] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    this[localOffsetFromOrigin$] = (t13$ = localOffsetFromOrigin, t13$ == null ? offsetFromOrigin : t13$);
    ;
  }).prototype = long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(long_press.LongPressMoveUpdateDetails);
  const globalPosition$6 = Symbol("LongPressMoveUpdateDetails.globalPosition");
  const localPosition$7 = Symbol("LongPressMoveUpdateDetails.localPosition");
  const offsetFromOrigin$ = Symbol("LongPressMoveUpdateDetails.offsetFromOrigin");
  const localOffsetFromOrigin$ = Symbol("LongPressMoveUpdateDetails.localOffsetFromOrigin");
  dart.setLibraryUri(long_press.LongPressMoveUpdateDetails, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    offsetFromOrigin: dart.finalFieldType(ui.Offset),
    localOffsetFromOrigin: dart.finalFieldType(ui.Offset)
  }));
  long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$7];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get localPosition() {
      return this[localPosition$8];
    }
    set localPosition(value) {
      super.localPosition = value;
    }
    get velocity() {
      return this[velocity$1];
    }
    set velocity(value) {
      super.velocity = value;
    }
  };
  (long_press.LongPressEndDetails.new = function(opts) {
    let t13;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C39 || CT.C39;
    let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : C62 || CT.C62;
    this[globalPosition$7] = globalPosition;
    this[velocity$1] = velocity;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 121, 15, "globalPosition != null");
    this[localPosition$8] = (t13 = localPosition, t13 == null ? globalPosition : t13);
    ;
  }).prototype = long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(long_press.LongPressEndDetails);
  const globalPosition$7 = Symbol("LongPressEndDetails.globalPosition");
  const localPosition$8 = Symbol("LongPressEndDetails.localPosition");
  const velocity$1 = Symbol("LongPressEndDetails.velocity");
  dart.setLibraryUri(long_press.LongPressEndDetails, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    localPosition: dart.finalFieldType(ui.Offset),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  const _longPressAccepted = dart.privateName(long_press, "_longPressAccepted");
  const _longPressOrigin = dart.privateName(long_press, "_longPressOrigin");
  const _initialButtons$ = dart.privateName(long_press, "_initialButtons");
  const _velocityTracker$ = dart.privateName(long_press, "_velocityTracker");
  const _checkLongPressStart = dart.privateName(long_press, "_checkLongPressStart");
  const _checkLongPressEnd = dart.privateName(long_press, "_checkLongPressEnd");
  const _reset$ = dart.privateName(long_press, "_reset");
  const _checkLongPressMoveUpdate = dart.privateName(long_press, "_checkLongPressMoveUpdate");
  long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(this.primaryPointer);
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (!dart.test(event.synthesized)) {
        if (events.PointerDownEvent.is(event)) {
          this[_velocityTracker$] = new velocity_tracker.VelocityTracker.new();
          this[_velocityTracker$].addPosition(event.timeStamp, event.localPosition);
        }
        if (events.PointerMoveEvent.is(event)) {
          if (!(this[_velocityTracker$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 260, 16, "_velocityTracker != null");
          this[_velocityTracker$].addPosition(event.timeStamp, event.localPosition);
        }
      }
      if (events.PointerUpEvent.is(event)) {
        if (dart.equals(this[_longPressAccepted], true)) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(arena.GestureDisposition.rejected);
        }
        this[_reset$]();
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reset$]();
      } else if (events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = recognizer.OffsetPair.fromEventPosition(event);
        this[_initialButtons$] = event.buttons;
      } else if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$]) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else if (dart.test(this[_longPressAccepted])) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressStart]() {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 290, 12, "_initialButtons == kPrimaryButton");
      if (this.onLongPressStart != null) {
        let details = new long_press.LongPressStartDetails.new({globalPosition: this[_longPressOrigin].global, localPosition: this[_longPressOrigin].local});
        this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => this.onLongPressStart(details), VoidTovoid()));
      }
      if (this.onLongPress != null) this.invokeCallback(dart.void, "onLongPress", this.onLongPress);
    }
    [_checkLongPressMoveUpdate](event) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 304, 12, "_initialButtons == kPrimaryButton");
      let details = new long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, localPosition: event.localPosition, offsetFromOrigin: event.position['-'](this[_longPressOrigin].global), localOffsetFromOrigin: event.localPosition['-'](this[_longPressOrigin].local)});
      if (this.onLongPressMoveUpdate != null) this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => this.onLongPressMoveUpdate(details), VoidTovoid()));
    }
    [_checkLongPressEnd](event) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/long_press.dart", 317, 12, "_initialButtons == kPrimaryButton");
      let estimate = this[_velocityTracker$].getVelocityEstimate();
      let velocity = estimate == null ? velocity_tracker.Velocity.zero : new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
      let details = new long_press.LongPressEndDetails.new({globalPosition: event.position, localPosition: event.localPosition, velocity: velocity});
      this[_velocityTracker$] = null;
      if (this.onLongPressEnd != null) this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => this.onLongPressEnd(details), VoidTovoid()));
      if (this.onLongPressUp != null) this.invokeCallback(dart.void, "onLongPressUp", this.onLongPressUp);
    }
    [_reset$]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons$] = null;
      this[_velocityTracker$] = null;
    }
    resolve(disposition) {
      if (dart.test(this[_longPressAccepted]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_reset$]();
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {
    }
    get debugDescription() {
      return "long press";
    }
  };
  (long_press.LongPressGestureRecognizer.new = function(opts) {
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons$] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    this[_velocityTracker$] = null;
    long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: constants.kLongPressTimeout, postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, debugOwner: debugOwner});
    ;
  }).prototype = long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(long_press.LongPressGestureRecognizer);
  const onLongPress = Symbol("LongPressGestureRecognizer.onLongPress");
  const onLongPressStart = Symbol("LongPressGestureRecognizer.onLongPressStart");
  const onLongPressMoveUpdate = Symbol("LongPressGestureRecognizer.onLongPressMoveUpdate");
  const onLongPressUp = Symbol("LongPressGestureRecognizer.onLongPressUp");
  const onLongPressEnd = Symbol("LongPressGestureRecognizer.onLongPressEnd");
  dart.setMethodSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [events.PointerEvent]),
    [_reset$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(long_press.LongPressGestureRecognizer, "package:flutter/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(recognizer.OffsetPair),
    [_initialButtons$]: dart.fieldType(core.int),
    onLongPress: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressStart: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressStartDetails])),
    onLongPressMoveUpdate: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails])),
    onLongPressUp: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressEnd: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressEndDetails])),
    [_velocityTracker$]: dart.fieldType(velocity_tracker.VelocityTracker)
  }));
  platform_messages.BinaryMessages = class BinaryMessages extends core.Object {
    static handlePlatformMessage(channel, data, callback) {
      return platform_messages.BinaryMessages._binaryMessenger.handlePlatformMessage(channel, data, callback);
    }
    static send(channel, message) {
      return platform_messages.BinaryMessages._binaryMessenger.send(channel, message);
    }
    static setMessageHandler(channel, handler) {
      platform_messages.BinaryMessages._binaryMessenger.setMessageHandler(channel, handler);
    }
    static setMockMessageHandler(channel, handler) {
      platform_messages.BinaryMessages._binaryMessenger.setMockMessageHandler(channel, handler);
    }
  };
  (platform_messages.BinaryMessages.__ = function() {
    ;
  }).prototype = platform_messages.BinaryMessages.prototype;
  dart.addTypeTests(platform_messages.BinaryMessages);
  dart.setLibraryUri(platform_messages.BinaryMessages, "package:flutter/src/services/platform_messages.dart");
  dart.defineLazy(platform_messages.BinaryMessages, {
    /*platform_messages.BinaryMessages._binaryMessenger*/get _binaryMessenger() {
      return binary_messenger.defaultBinaryMessenger;
    }
  });
  message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      typed_data.ByteData._check(message);
      return message;
    }
  };
  (message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(message_codecs.BinaryCodec);
  message_codecs.BinaryCodec[dart.implements] = () => [message_codec.MessageCodec$(typed_data.ByteData)];
  dart.setMethodSignature(message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(typed_data.ByteData, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  dart.setLibraryUri(message_codecs.BinaryCodec, "package:flutter/src/services/message_codecs.dart");
  message_codecs.StringCodec = class StringCodec extends core.Object {
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List](message[$offsetInBytes], message[$lengthInBytes]));
    }
    encodeMessage(message) {
      core.String._check(message);
      if (message == null) return null;
      let encoded = convert.utf8.encoder.convert(message);
      return encoded[$buffer][$asByteData]();
    }
  };
  (message_codecs.StringCodec.new = function() {
    ;
  }).prototype = message_codecs.StringCodec.prototype;
  dart.addTypeTests(message_codecs.StringCodec);
  message_codecs.StringCodec[dart.implements] = () => [message_codec.MessageCodec$(core.String)];
  dart.setMethodSignature(message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(core.String, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  dart.setLibraryUri(message_codecs.StringCodec, "package:flutter/src/services/message_codecs.dart");
  message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      return (C52 || CT.C52).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode((C52 || CT.C52).decodeMessage(message));
    }
  };
  (message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMessageCodec);
  message_codecs.JSONMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.JSONMessageCodec, "package:flutter/src/services/message_codecs.dart");
  message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    encodeMethodCall(call) {
      return (C50 || CT.C50).encodeMessage(new (IdentityMapOfString$dynamic()).from(["method", call.method, "args", call.arguments]));
    }
    decodeMethodCall(methodCall) {
      let decoded = (C50 || CT.C50).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = dart.dsend(decoded, '_get', ["method"]);
      let arguments$0 = dart.dsend(decoded, '_get', ["args"]);
      if (typeof method == 'string') return new message_codec.MethodCall.new(method, arguments$0);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (C50 || CT.C50).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (dart.equals(dart.dload(decoded, 'length'), 1)) return dart.dsend(decoded, '_get', [0]);
      if (dart.equals(dart.dload(decoded, 'length'), 3) && typeof dart.dsend(decoded, '_get', [0]) == 'string' && (dart.dsend(decoded, '_get', [1]) == null || typeof dart.dsend(decoded, '_get', [1]) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String._check(dart.dsend(decoded, '_get', [0])), message: core.String._check(dart.dsend(decoded, '_get', [1])), details: dart.dsend(decoded, '_get', [2])}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return (C50 || CT.C50).encodeMessage([result]);
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codecs.dart", 164, 12, "code != null");
      return (C50 || CT.C50).encodeMessage([code, message, details]);
    }
  };
  (message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMethodCodec);
  message_codecs.JSONMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [typed_data.ByteData]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String})
  }));
  dart.setLibraryUri(message_codecs.JSONMethodCodec, "package:flutter/src/services/message_codecs.dart");
  let C93;
  message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (dart.test(buffer.hasRemaining)) dart.throw(C93 || CT.C93);
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(bytes));
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, dynamicAnddynamicToNull()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!dart.test(buffer.hasRemaining)) dart.throw(C93 || CT.C93);
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 0:
        {
          return null;
        }
        case 1:
        {
          return true;
        }
        case 2:
        {
          return false;
        }
        case 3:
        {
          return buffer.getInt32();
        }
        case 4:
        {
          return buffer.getInt64();
        }
        case 6:
        {
          return buffer.getFloat64();
        }
        case 5:
        case 7:
        {
          let length = this.readSize(buffer);
          return convert.utf8.decoder.convert(buffer.getUint8List(length));
        }
        case 8:
        {
          let length = this.readSize(buffer);
          return buffer.getUint8List(length);
        }
        case 9:
        {
          let length = this.readSize(buffer);
          return buffer.getInt32List(length);
        }
        case 10:
        {
          let length = this.readSize(buffer);
          return buffer.getInt64List(length);
        }
        case 11:
        {
          let length = this.readSize(buffer);
          return buffer.getFloat64List(length);
        }
        case 12:
        {
          let length = this.readSize(buffer);
          let result = core.List.new(length);
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            dart.dsend(result, '_set', [i, this.readValue(buffer)]);
          return result;
        }
        case 13:
        {
          let length = this.readSize(buffer);
          let result = new _js_helper.LinkedMap.new();
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            dart.dsend(result, '_set', [this.readValue(buffer), this.readValue(buffer)]);
          return result;
        }
        default:
        {
          dart.throw(C93 || CT.C93);
        }
      }
    }
    writeSize(buffer, value) {
      if (!(0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/message_codecs.dart", 464, 12, "0 <= value && value <= 0xffffffff");
      if (dart.notNull(value) < 254) {
        buffer.putUint8(value);
      } else if (dart.notNull(value) <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMessageCodec);
  message_codecs.StandardMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    writeValue: dart.fnType(dart.void, [serialization.WriteBuffer, dart.dynamic]),
    readValue: dart.fnType(dart.dynamic, [serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.dynamic, [core.int, serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [serialization.ReadBuffer])
  }));
  dart.setLibraryUri(message_codecs.StandardMessageCodec, "package:flutter/src/services/message_codecs.dart");
  dart.defineLazy(message_codecs.StandardMessageCodec, {
    /*message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    }
  });
  let C94;
  let C95;
  let C96;
  message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    encodeMethodCall(call) {
      let buffer = new serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, call.method);
      this.messageCodec.writeValue(buffer, call.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new serialization.ReadBuffer.new(methodCall);
      let method = this.messageCodec.readValue(buffer);
      let arguments$0 = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !dart.test(buffer.hasRemaining))
        return new message_codec.MethodCall.new(method, arguments$0);
      else
        dart.throw(C94 || CT.C94);
    }
    encodeSuccessEnvelope(result) {
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) dart.throw(C95 || CT.C95);
      let buffer = new serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !dart.test(buffer.hasRemaining))
        dart.throw(new message_codec.PlatformException.new({code: errorCode, message: core.String._check(errorMessage), details: errorDetails}));
      else
        dart.throw(C96 || CT.C96);
    }
  };
  (message_codecs.StandardMethodCodec.new = function(messageCodec) {
    if (messageCodec === void 0) messageCodec = C42 || CT.C42;
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMethodCodec);
  const messageCodec$ = Symbol("StandardMethodCodec.messageCodec");
  message_codecs.StandardMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.StandardMethodCodec, "package:flutter/src/services/message_codecs.dart");
  dart.setFieldSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(message_codecs.StandardMessageCodec)
  }));
  keyboard_key.KeyboardKey = class KeyboardKey extends diagnostics.Diagnosticable {};
  (keyboard_key.KeyboardKey.new = function() {
    keyboard_key.KeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.KeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.KeyboardKey);
  dart.setLibraryUri(keyboard_key.KeyboardKey, "package:flutter/src/services/keyboard_key.dart");
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
  let C234;
  let C235;
  let C236;
  let C237;
  let C238;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C245;
  let C246;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C261;
  let C262;
  let C263;
  let C264;
  let C265;
  let C266;
  let C267;
  let C268;
  let C269;
  let C270;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C276;
  let C277;
  let C278;
  let C279;
  let C280;
  let C281;
  let C282;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C294;
  let C295;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C306;
  let C307;
  let C308;
  let C309;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C318;
  let C319;
  let C320;
  let C321;
  let C322;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C333;
  let C334;
  let C335;
  let C336;
  let C337;
  let C338;
  let C339;
  let C340;
  let C341;
  let C342;
  let C343;
  let C344;
  let C345;
  let C346;
  let C347;
  let C348;
  let C349;
  let C350;
  let C351;
  let C352;
  let C353;
  let C354;
  let C355;
  let C356;
  let C357;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C364;
  let C365;
  let C366;
  keyboard_key.LogicalKeyboardKey = class LogicalKeyboardKey extends keyboard_key.KeyboardKey {
    get keyId() {
      return this[keyId$];
    }
    set keyId(value) {
      super.keyId = value;
    }
    get debugName() {
      return this[debugName$];
    }
    set debugName(value) {
      super.debugName = value;
    }
    get keyLabel() {
      return this[keyLabel$];
    }
    set keyLabel(value) {
      super.keyLabel = value;
    }
    get hashCode() {
      return dart.hashCode(this.keyId);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let typedOther = keyboard_key.LogicalKeyboardKey._check(other);
      return this.keyId == typedOther.keyId;
    }
    static findKeyByKeyId(keyId) {
      return keyboard_key.LogicalKeyboardKey._knownLogicalKeys[$_get](keyId);
    }
    static isControlCharacter(label) {
      if (label.length > 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit <= 31 && codeUnit >= 0 || codeUnit >= 127 && codeUnit <= 159;
    }
    get isAutogenerated() {
      return (dart.notNull(this.keyId) & 1099511627776.0) !== 0;
    }
    get synonyms() {
      let result = keyboard_key.LogicalKeyboardKey._synonyms[$_get](this);
      return result == null ? LinkedHashSetOfLogicalKeyboardKey().new() : LinkedHashSetOfLogicalKeyboardKey().from([result]);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("keyId", "0x" + this.keyId[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("keyLabel", this.keyLabel, {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.LogicalKeyboardKey.new = function(keyId, opts) {
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    let keyLabel = opts && 'keyLabel' in opts ? opts.keyLabel : null;
    this[keyId$] = keyId;
    this[debugName$] = debugName;
    this[keyLabel$] = keyLabel;
    if (!(keyId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/keyboard_key.dart", 139, 16, "keyId != null");
    keyboard_key.LogicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.LogicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.LogicalKeyboardKey);
  const keyId$ = Symbol("LogicalKeyboardKey.keyId");
  const debugName$ = Symbol("LogicalKeyboardKey.debugName");
  const keyLabel$ = Symbol("LogicalKeyboardKey.keyLabel");
  dart.setGetterSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getGetters(keyboard_key.LogicalKeyboardKey.__proto__),
    isAutogenerated: core.bool,
    synonyms: core.Set$(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setLibraryUri(keyboard_key.LogicalKeyboardKey, "package:flutter/src/services/keyboard_key.dart");
  dart.setFieldSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.LogicalKeyboardKey.__proto__),
    keyId: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(core.String),
    keyLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.LogicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.LogicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.LogicalKeyboardKey, {
    /*keyboard_key.LogicalKeyboardKey.valueMask*/get valueMask() {
      return 4294967295.0;
    },
    /*keyboard_key.LogicalKeyboardKey.platformMask*/get platformMask() {
      return 1095216660480.0;
    },
    /*keyboard_key.LogicalKeyboardKey.autogeneratedMask*/get autogeneratedMask() {
      return 1099511627776.0;
    },
    /*keyboard_key.LogicalKeyboardKey.synonymMask*/get synonymMask() {
      return 2199023255552.0;
    },
    /*keyboard_key.LogicalKeyboardKey.unicodePlane*/get unicodePlane() {
      return 0;
    },
    /*keyboard_key.LogicalKeyboardKey.hidPlane*/get hidPlane() {
      return 4294967296.0;
    },
    /*keyboard_key.LogicalKeyboardKey.none*/get none() {
      return C97 || CT.C97;
    },
    /*keyboard_key.LogicalKeyboardKey.hyper*/get hyper() {
      return C98 || CT.C98;
    },
    /*keyboard_key.LogicalKeyboardKey.superKey*/get superKey() {
      return C99 || CT.C99;
    },
    /*keyboard_key.LogicalKeyboardKey.fn*/get fn() {
      return C100 || CT.C100;
    },
    /*keyboard_key.LogicalKeyboardKey.fnLock*/get fnLock() {
      return C101 || CT.C101;
    },
    /*keyboard_key.LogicalKeyboardKey.suspend*/get suspend() {
      return C102 || CT.C102;
    },
    /*keyboard_key.LogicalKeyboardKey.resume*/get resume() {
      return C103 || CT.C103;
    },
    /*keyboard_key.LogicalKeyboardKey.turbo*/get turbo() {
      return C104 || CT.C104;
    },
    /*keyboard_key.LogicalKeyboardKey.sleep*/get sleep() {
      return C105 || CT.C105;
    },
    /*keyboard_key.LogicalKeyboardKey.wakeUp*/get wakeUp() {
      return C106 || CT.C106;
    },
    /*keyboard_key.LogicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C107 || CT.C107;
    },
    /*keyboard_key.LogicalKeyboardKey.usbReserved*/get usbReserved() {
      return C108 || CT.C108;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C109 || CT.C109;
    },
    /*keyboard_key.LogicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C110 || CT.C110;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C111 || CT.C111;
    },
    /*keyboard_key.LogicalKeyboardKey.keyA*/get keyA() {
      return C112 || CT.C112;
    },
    /*keyboard_key.LogicalKeyboardKey.keyB*/get keyB() {
      return C113 || CT.C113;
    },
    /*keyboard_key.LogicalKeyboardKey.keyC*/get keyC() {
      return C114 || CT.C114;
    },
    /*keyboard_key.LogicalKeyboardKey.keyD*/get keyD() {
      return C115 || CT.C115;
    },
    /*keyboard_key.LogicalKeyboardKey.keyE*/get keyE() {
      return C116 || CT.C116;
    },
    /*keyboard_key.LogicalKeyboardKey.keyF*/get keyF() {
      return C117 || CT.C117;
    },
    /*keyboard_key.LogicalKeyboardKey.keyG*/get keyG() {
      return C118 || CT.C118;
    },
    /*keyboard_key.LogicalKeyboardKey.keyH*/get keyH() {
      return C119 || CT.C119;
    },
    /*keyboard_key.LogicalKeyboardKey.keyI*/get keyI() {
      return C120 || CT.C120;
    },
    /*keyboard_key.LogicalKeyboardKey.keyJ*/get keyJ() {
      return C121 || CT.C121;
    },
    /*keyboard_key.LogicalKeyboardKey.keyK*/get keyK() {
      return C122 || CT.C122;
    },
    /*keyboard_key.LogicalKeyboardKey.keyL*/get keyL() {
      return C123 || CT.C123;
    },
    /*keyboard_key.LogicalKeyboardKey.keyM*/get keyM() {
      return C124 || CT.C124;
    },
    /*keyboard_key.LogicalKeyboardKey.keyN*/get keyN() {
      return C125 || CT.C125;
    },
    /*keyboard_key.LogicalKeyboardKey.keyO*/get keyO() {
      return C126 || CT.C126;
    },
    /*keyboard_key.LogicalKeyboardKey.keyP*/get keyP() {
      return C127 || CT.C127;
    },
    /*keyboard_key.LogicalKeyboardKey.keyQ*/get keyQ() {
      return C128 || CT.C128;
    },
    /*keyboard_key.LogicalKeyboardKey.keyR*/get keyR() {
      return C129 || CT.C129;
    },
    /*keyboard_key.LogicalKeyboardKey.keyS*/get keyS() {
      return C130 || CT.C130;
    },
    /*keyboard_key.LogicalKeyboardKey.keyT*/get keyT() {
      return C131 || CT.C131;
    },
    /*keyboard_key.LogicalKeyboardKey.keyU*/get keyU() {
      return C132 || CT.C132;
    },
    /*keyboard_key.LogicalKeyboardKey.keyV*/get keyV() {
      return C133 || CT.C133;
    },
    /*keyboard_key.LogicalKeyboardKey.keyW*/get keyW() {
      return C134 || CT.C134;
    },
    /*keyboard_key.LogicalKeyboardKey.keyX*/get keyX() {
      return C135 || CT.C135;
    },
    /*keyboard_key.LogicalKeyboardKey.keyY*/get keyY() {
      return C136 || CT.C136;
    },
    /*keyboard_key.LogicalKeyboardKey.keyZ*/get keyZ() {
      return C137 || CT.C137;
    },
    /*keyboard_key.LogicalKeyboardKey.digit1*/get digit1() {
      return C138 || CT.C138;
    },
    /*keyboard_key.LogicalKeyboardKey.digit2*/get digit2() {
      return C139 || CT.C139;
    },
    /*keyboard_key.LogicalKeyboardKey.digit3*/get digit3() {
      return C140 || CT.C140;
    },
    /*keyboard_key.LogicalKeyboardKey.digit4*/get digit4() {
      return C141 || CT.C141;
    },
    /*keyboard_key.LogicalKeyboardKey.digit5*/get digit5() {
      return C142 || CT.C142;
    },
    /*keyboard_key.LogicalKeyboardKey.digit6*/get digit6() {
      return C143 || CT.C143;
    },
    /*keyboard_key.LogicalKeyboardKey.digit7*/get digit7() {
      return C144 || CT.C144;
    },
    /*keyboard_key.LogicalKeyboardKey.digit8*/get digit8() {
      return C145 || CT.C145;
    },
    /*keyboard_key.LogicalKeyboardKey.digit9*/get digit9() {
      return C146 || CT.C146;
    },
    /*keyboard_key.LogicalKeyboardKey.digit0*/get digit0() {
      return C147 || CT.C147;
    },
    /*keyboard_key.LogicalKeyboardKey.enter*/get enter() {
      return C148 || CT.C148;
    },
    /*keyboard_key.LogicalKeyboardKey.escape*/get escape() {
      return C149 || CT.C149;
    },
    /*keyboard_key.LogicalKeyboardKey.backspace*/get backspace() {
      return C150 || CT.C150;
    },
    /*keyboard_key.LogicalKeyboardKey.tab*/get tab() {
      return C151 || CT.C151;
    },
    /*keyboard_key.LogicalKeyboardKey.space*/get space() {
      return C152 || CT.C152;
    },
    /*keyboard_key.LogicalKeyboardKey.minus*/get minus() {
      return C153 || CT.C153;
    },
    /*keyboard_key.LogicalKeyboardKey.equal*/get equal() {
      return C154 || CT.C154;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C155 || CT.C155;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketRight*/get bracketRight() {
      return C156 || CT.C156;
    },
    /*keyboard_key.LogicalKeyboardKey.backslash*/get backslash() {
      return C157 || CT.C157;
    },
    /*keyboard_key.LogicalKeyboardKey.semicolon*/get semicolon() {
      return C158 || CT.C158;
    },
    /*keyboard_key.LogicalKeyboardKey.quote*/get quote() {
      return C159 || CT.C159;
    },
    /*keyboard_key.LogicalKeyboardKey.backquote*/get backquote() {
      return C160 || CT.C160;
    },
    /*keyboard_key.LogicalKeyboardKey.comma*/get comma() {
      return C161 || CT.C161;
    },
    /*keyboard_key.LogicalKeyboardKey.period*/get period() {
      return C162 || CT.C162;
    },
    /*keyboard_key.LogicalKeyboardKey.slash*/get slash() {
      return C163 || CT.C163;
    },
    /*keyboard_key.LogicalKeyboardKey.capsLock*/get capsLock() {
      return C164 || CT.C164;
    },
    /*keyboard_key.LogicalKeyboardKey.f1*/get f1() {
      return C165 || CT.C165;
    },
    /*keyboard_key.LogicalKeyboardKey.f2*/get f2() {
      return C166 || CT.C166;
    },
    /*keyboard_key.LogicalKeyboardKey.f3*/get f3() {
      return C167 || CT.C167;
    },
    /*keyboard_key.LogicalKeyboardKey.f4*/get f4() {
      return C168 || CT.C168;
    },
    /*keyboard_key.LogicalKeyboardKey.f5*/get f5() {
      return C169 || CT.C169;
    },
    /*keyboard_key.LogicalKeyboardKey.f6*/get f6() {
      return C170 || CT.C170;
    },
    /*keyboard_key.LogicalKeyboardKey.f7*/get f7() {
      return C171 || CT.C171;
    },
    /*keyboard_key.LogicalKeyboardKey.f8*/get f8() {
      return C172 || CT.C172;
    },
    /*keyboard_key.LogicalKeyboardKey.f9*/get f9() {
      return C173 || CT.C173;
    },
    /*keyboard_key.LogicalKeyboardKey.f10*/get f10() {
      return C174 || CT.C174;
    },
    /*keyboard_key.LogicalKeyboardKey.f11*/get f11() {
      return C175 || CT.C175;
    },
    /*keyboard_key.LogicalKeyboardKey.f12*/get f12() {
      return C176 || CT.C176;
    },
    /*keyboard_key.LogicalKeyboardKey.printScreen*/get printScreen() {
      return C177 || CT.C177;
    },
    /*keyboard_key.LogicalKeyboardKey.scrollLock*/get scrollLock() {
      return C178 || CT.C178;
    },
    /*keyboard_key.LogicalKeyboardKey.pause*/get pause() {
      return C179 || CT.C179;
    },
    /*keyboard_key.LogicalKeyboardKey.insert*/get insert() {
      return C180 || CT.C180;
    },
    /*keyboard_key.LogicalKeyboardKey.home*/get home() {
      return C181 || CT.C181;
    },
    /*keyboard_key.LogicalKeyboardKey.pageUp*/get pageUp() {
      return C182 || CT.C182;
    },
    /*keyboard_key.LogicalKeyboardKey.delete*/get delete() {
      return C183 || CT.C183;
    },
    /*keyboard_key.LogicalKeyboardKey.end*/get end() {
      return C184 || CT.C184;
    },
    /*keyboard_key.LogicalKeyboardKey.pageDown*/get pageDown() {
      return C185 || CT.C185;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowRight*/get arrowRight() {
      return C186 || CT.C186;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C187 || CT.C187;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowDown*/get arrowDown() {
      return C188 || CT.C188;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowUp*/get arrowUp() {
      return C189 || CT.C189;
    },
    /*keyboard_key.LogicalKeyboardKey.numLock*/get numLock() {
      return C190 || CT.C190;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C191 || CT.C191;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C192 || CT.C192;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C193 || CT.C193;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C194 || CT.C194;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C195 || CT.C195;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad1*/get numpad1() {
      return C196 || CT.C196;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad2*/get numpad2() {
      return C197 || CT.C197;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad3*/get numpad3() {
      return C198 || CT.C198;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad4*/get numpad4() {
      return C199 || CT.C199;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad5*/get numpad5() {
      return C200 || CT.C200;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad6*/get numpad6() {
      return C201 || CT.C201;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad7*/get numpad7() {
      return C202 || CT.C202;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad8*/get numpad8() {
      return C203 || CT.C203;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad9*/get numpad9() {
      return C204 || CT.C204;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad0*/get numpad0() {
      return C205 || CT.C205;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C206 || CT.C206;
    },
    /*keyboard_key.LogicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C207 || CT.C207;
    },
    /*keyboard_key.LogicalKeyboardKey.contextMenu*/get contextMenu() {
      return C208 || CT.C208;
    },
    /*keyboard_key.LogicalKeyboardKey.power*/get power() {
      return C209 || CT.C209;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C210 || CT.C210;
    },
    /*keyboard_key.LogicalKeyboardKey.f13*/get f13() {
      return C211 || CT.C211;
    },
    /*keyboard_key.LogicalKeyboardKey.f14*/get f14() {
      return C212 || CT.C212;
    },
    /*keyboard_key.LogicalKeyboardKey.f15*/get f15() {
      return C213 || CT.C213;
    },
    /*keyboard_key.LogicalKeyboardKey.f16*/get f16() {
      return C214 || CT.C214;
    },
    /*keyboard_key.LogicalKeyboardKey.f17*/get f17() {
      return C215 || CT.C215;
    },
    /*keyboard_key.LogicalKeyboardKey.f18*/get f18() {
      return C216 || CT.C216;
    },
    /*keyboard_key.LogicalKeyboardKey.f19*/get f19() {
      return C217 || CT.C217;
    },
    /*keyboard_key.LogicalKeyboardKey.f20*/get f20() {
      return C218 || CT.C218;
    },
    /*keyboard_key.LogicalKeyboardKey.f21*/get f21() {
      return C219 || CT.C219;
    },
    /*keyboard_key.LogicalKeyboardKey.f22*/get f22() {
      return C220 || CT.C220;
    },
    /*keyboard_key.LogicalKeyboardKey.f23*/get f23() {
      return C221 || CT.C221;
    },
    /*keyboard_key.LogicalKeyboardKey.f24*/get f24() {
      return C222 || CT.C222;
    },
    /*keyboard_key.LogicalKeyboardKey.open*/get open() {
      return C223 || CT.C223;
    },
    /*keyboard_key.LogicalKeyboardKey.help*/get help() {
      return C224 || CT.C224;
    },
    /*keyboard_key.LogicalKeyboardKey.select*/get select() {
      return C225 || CT.C225;
    },
    /*keyboard_key.LogicalKeyboardKey.again*/get again() {
      return C226 || CT.C226;
    },
    /*keyboard_key.LogicalKeyboardKey.undo*/get undo() {
      return C227 || CT.C227;
    },
    /*keyboard_key.LogicalKeyboardKey.cut*/get cut() {
      return C228 || CT.C228;
    },
    /*keyboard_key.LogicalKeyboardKey.copy*/get copy() {
      return C229 || CT.C229;
    },
    /*keyboard_key.LogicalKeyboardKey.paste*/get paste() {
      return C230 || CT.C230;
    },
    /*keyboard_key.LogicalKeyboardKey.find*/get find() {
      return C231 || CT.C231;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C232 || CT.C232;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C233 || CT.C233;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C234 || CT.C234;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadComma*/get numpadComma() {
      return C235 || CT.C235;
    },
    /*keyboard_key.LogicalKeyboardKey.intlRo*/get intlRo() {
      return C236 || CT.C236;
    },
    /*keyboard_key.LogicalKeyboardKey.kanaMode*/get kanaMode() {
      return C237 || CT.C237;
    },
    /*keyboard_key.LogicalKeyboardKey.intlYen*/get intlYen() {
      return C238 || CT.C238;
    },
    /*keyboard_key.LogicalKeyboardKey.convert*/get convert() {
      return C239 || CT.C239;
    },
    /*keyboard_key.LogicalKeyboardKey.nonConvert*/get nonConvert() {
      return C240 || CT.C240;
    },
    /*keyboard_key.LogicalKeyboardKey.lang1*/get lang1() {
      return C241 || CT.C241;
    },
    /*keyboard_key.LogicalKeyboardKey.lang2*/get lang2() {
      return C242 || CT.C242;
    },
    /*keyboard_key.LogicalKeyboardKey.lang3*/get lang3() {
      return C243 || CT.C243;
    },
    /*keyboard_key.LogicalKeyboardKey.lang4*/get lang4() {
      return C244 || CT.C244;
    },
    /*keyboard_key.LogicalKeyboardKey.lang5*/get lang5() {
      return C245 || CT.C245;
    },
    /*keyboard_key.LogicalKeyboardKey.abort*/get abort() {
      return C246 || CT.C246;
    },
    /*keyboard_key.LogicalKeyboardKey.props*/get props() {
      return C247 || CT.C247;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C248 || CT.C248;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C249 || CT.C249;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C250 || CT.C250;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C251 || CT.C251;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C252 || CT.C252;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C253 || CT.C253;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C254 || CT.C254;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C255 || CT.C255;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C256 || CT.C256;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClear*/get numpadClear() {
      return C257 || CT.C257;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C258 || CT.C258;
    },
    /*keyboard_key.LogicalKeyboardKey.controlLeft*/get controlLeft() {
      return C259 || CT.C259;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C260 || CT.C260;
    },
    /*keyboard_key.LogicalKeyboardKey.altLeft*/get altLeft() {
      return C261 || CT.C261;
    },
    /*keyboard_key.LogicalKeyboardKey.metaLeft*/get metaLeft() {
      return C262 || CT.C262;
    },
    /*keyboard_key.LogicalKeyboardKey.controlRight*/get controlRight() {
      return C263 || CT.C263;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftRight*/get shiftRight() {
      return C264 || CT.C264;
    },
    /*keyboard_key.LogicalKeyboardKey.altRight*/get altRight() {
      return C265 || CT.C265;
    },
    /*keyboard_key.LogicalKeyboardKey.metaRight*/get metaRight() {
      return C266 || CT.C266;
    },
    /*keyboard_key.LogicalKeyboardKey.info*/get info() {
      return C267 || CT.C267;
    },
    /*keyboard_key.LogicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C268 || CT.C268;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C269 || CT.C269;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C270 || CT.C270;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C271 || CT.C271;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C272 || CT.C272;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C273 || CT.C273;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C274 || CT.C274;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaLast*/get mediaLast() {
      return C275 || CT.C275;
    },
    /*keyboard_key.LogicalKeyboardKey.launchPhone*/get launchPhone() {
      return C276 || CT.C276;
    },
    /*keyboard_key.LogicalKeyboardKey.programGuide*/get programGuide() {
      return C277 || CT.C277;
    },
    /*keyboard_key.LogicalKeyboardKey.exit*/get exit() {
      return C278 || CT.C278;
    },
    /*keyboard_key.LogicalKeyboardKey.channelUp*/get channelUp() {
      return C279 || CT.C279;
    },
    /*keyboard_key.LogicalKeyboardKey.channelDown*/get channelDown() {
      return C280 || CT.C280;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C281 || CT.C281;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C282 || CT.C282;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C283 || CT.C283;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C284 || CT.C284;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C285 || CT.C285;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C286 || CT.C286;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaStop*/get mediaStop() {
      return C287 || CT.C287;
    },
    /*keyboard_key.LogicalKeyboardKey.eject*/get eject() {
      return C288 || CT.C288;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C289 || CT.C289;
    },
    /*keyboard_key.LogicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C290 || CT.C290;
    },
    /*keyboard_key.LogicalKeyboardKey.bassBoost*/get bassBoost() {
      return C291 || CT.C291;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C292 || CT.C292;
    },
    /*keyboard_key.LogicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C293 || CT.C293;
    },
    /*keyboard_key.LogicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C294 || CT.C294;
    },
    /*keyboard_key.LogicalKeyboardKey.launchMail*/get launchMail() {
      return C295 || CT.C295;
    },
    /*keyboard_key.LogicalKeyboardKey.launchContacts*/get launchContacts() {
      return C296 || CT.C296;
    },
    /*keyboard_key.LogicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C297 || CT.C297;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp2*/get launchApp2() {
      return C298 || CT.C298;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp1*/get launchApp1() {
      return C299 || CT.C299;
    },
    /*keyboard_key.LogicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C300 || CT.C300;
    },
    /*keyboard_key.LogicalKeyboardKey.logOff*/get logOff() {
      return C301 || CT.C301;
    },
    /*keyboard_key.LogicalKeyboardKey.lockScreen*/get lockScreen() {
      return C302 || CT.C302;
    },
    /*keyboard_key.LogicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C303 || CT.C303;
    },
    /*keyboard_key.LogicalKeyboardKey.selectTask*/get selectTask() {
      return C304 || CT.C304;
    },
    /*keyboard_key.LogicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C305 || CT.C305;
    },
    /*keyboard_key.LogicalKeyboardKey.spellCheck*/get spellCheck() {
      return C306 || CT.C306;
    },
    /*keyboard_key.LogicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C307 || CT.C307;
    },
    /*keyboard_key.LogicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C308 || CT.C308;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C309 || CT.C309;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C310 || CT.C310;
    },
    /*keyboard_key.LogicalKeyboardKey.newKey*/get newKey() {
      return C311 || CT.C311;
    },
    /*keyboard_key.LogicalKeyboardKey.close*/get close() {
      return C312 || CT.C312;
    },
    /*keyboard_key.LogicalKeyboardKey.save*/get save() {
      return C313 || CT.C313;
    },
    /*keyboard_key.LogicalKeyboardKey.print*/get print() {
      return C314 || CT.C314;
    },
    /*keyboard_key.LogicalKeyboardKey.browserSearch*/get browserSearch() {
      return C315 || CT.C315;
    },
    /*keyboard_key.LogicalKeyboardKey.browserHome*/get browserHome() {
      return C316 || CT.C316;
    },
    /*keyboard_key.LogicalKeyboardKey.browserBack*/get browserBack() {
      return C317 || CT.C317;
    },
    /*keyboard_key.LogicalKeyboardKey.browserForward*/get browserForward() {
      return C318 || CT.C318;
    },
    /*keyboard_key.LogicalKeyboardKey.browserStop*/get browserStop() {
      return C319 || CT.C319;
    },
    /*keyboard_key.LogicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C320 || CT.C320;
    },
    /*keyboard_key.LogicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C321 || CT.C321;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomIn*/get zoomIn() {
      return C322 || CT.C322;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomOut*/get zoomOut() {
      return C323 || CT.C323;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C324 || CT.C324;
    },
    /*keyboard_key.LogicalKeyboardKey.redo*/get redo() {
      return C325 || CT.C325;
    },
    /*keyboard_key.LogicalKeyboardKey.mailReply*/get mailReply() {
      return C326 || CT.C326;
    },
    /*keyboard_key.LogicalKeyboardKey.mailForward*/get mailForward() {
      return C327 || CT.C327;
    },
    /*keyboard_key.LogicalKeyboardKey.mailSend*/get mailSend() {
      return C328 || CT.C328;
    },
    /*keyboard_key.LogicalKeyboardKey.keyboardLayoutSelect*/get keyboardLayoutSelect() {
      return C329 || CT.C329;
    },
    /*keyboard_key.LogicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C330 || CT.C330;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton1*/get gameButton1() {
      return C331 || CT.C331;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton2*/get gameButton2() {
      return C332 || CT.C332;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton3*/get gameButton3() {
      return C333 || CT.C333;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton4*/get gameButton4() {
      return C334 || CT.C334;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton5*/get gameButton5() {
      return C335 || CT.C335;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton6*/get gameButton6() {
      return C336 || CT.C336;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton7*/get gameButton7() {
      return C337 || CT.C337;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton8*/get gameButton8() {
      return C338 || CT.C338;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton9*/get gameButton9() {
      return C339 || CT.C339;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton10*/get gameButton10() {
      return C340 || CT.C340;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton11*/get gameButton11() {
      return C341 || CT.C341;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton12*/get gameButton12() {
      return C342 || CT.C342;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton13*/get gameButton13() {
      return C343 || CT.C343;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton14*/get gameButton14() {
      return C344 || CT.C344;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton15*/get gameButton15() {
      return C345 || CT.C345;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButton16*/get gameButton16() {
      return C346 || CT.C346;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonA*/get gameButtonA() {
      return C347 || CT.C347;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonB*/get gameButtonB() {
      return C348 || CT.C348;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonC*/get gameButtonC() {
      return C349 || CT.C349;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonLeft1*/get gameButtonLeft1() {
      return C350 || CT.C350;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonLeft2*/get gameButtonLeft2() {
      return C351 || CT.C351;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonMode*/get gameButtonMode() {
      return C352 || CT.C352;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonRight1*/get gameButtonRight1() {
      return C353 || CT.C353;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonRight2*/get gameButtonRight2() {
      return C354 || CT.C354;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonSelect*/get gameButtonSelect() {
      return C355 || CT.C355;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonStart*/get gameButtonStart() {
      return C356 || CT.C356;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonThumbLeft*/get gameButtonThumbLeft() {
      return C357 || CT.C357;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonThumbRight*/get gameButtonThumbRight() {
      return C358 || CT.C358;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonX*/get gameButtonX() {
      return C359 || CT.C359;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonY*/get gameButtonY() {
      return C360 || CT.C360;
    },
    /*keyboard_key.LogicalKeyboardKey.gameButtonZ*/get gameButtonZ() {
      return C361 || CT.C361;
    },
    /*keyboard_key.LogicalKeyboardKey.shift*/get shift() {
      return C362 || CT.C362;
    },
    /*keyboard_key.LogicalKeyboardKey.meta*/get meta() {
      return C363 || CT.C363;
    },
    /*keyboard_key.LogicalKeyboardKey.alt*/get alt() {
      return C364 || CT.C364;
    },
    /*keyboard_key.LogicalKeyboardKey.control*/get control() {
      return C365 || CT.C365;
    },
    /*keyboard_key.LogicalKeyboardKey._knownLogicalKeys*/get _knownLogicalKeys() {
      return C366 || CT.C366;
    },
    /*keyboard_key.LogicalKeyboardKey._synonyms*/get _synonyms() {
      return new (LinkedMapOfLogicalKeyboardKey$LogicalKeyboardKey()).from([keyboard_key.LogicalKeyboardKey.shiftLeft, keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.shiftRight, keyboard_key.LogicalKeyboardKey.shift, keyboard_key.LogicalKeyboardKey.metaLeft, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.metaRight, keyboard_key.LogicalKeyboardKey.meta, keyboard_key.LogicalKeyboardKey.altLeft, keyboard_key.LogicalKeyboardKey.alt, keyboard_key.LogicalKeyboardKey.altRight, keyboard_key.LogicalKeyboardKey.alt, keyboard_key.LogicalKeyboardKey.controlLeft, keyboard_key.LogicalKeyboardKey.control, keyboard_key.LogicalKeyboardKey.controlRight, keyboard_key.LogicalKeyboardKey.control]);
    }
  });
  let C367;
  let C368;
  let C369;
  let C370;
  let C371;
  let C372;
  let C373;
  let C374;
  let C375;
  let C376;
  let C377;
  let C378;
  let C379;
  let C380;
  let C381;
  let C382;
  let C383;
  let C384;
  let C385;
  let C386;
  let C387;
  let C388;
  let C389;
  let C390;
  let C391;
  let C392;
  let C393;
  let C394;
  let C395;
  let C396;
  let C397;
  let C398;
  let C399;
  let C400;
  let C401;
  let C402;
  let C403;
  let C404;
  let C405;
  let C406;
  let C407;
  let C408;
  let C409;
  let C410;
  let C411;
  let C412;
  let C413;
  let C414;
  let C415;
  let C416;
  let C417;
  let C418;
  let C419;
  let C420;
  let C421;
  let C422;
  let C423;
  let C424;
  let C425;
  let C426;
  let C427;
  let C428;
  let C429;
  let C430;
  let C431;
  let C432;
  let C433;
  let C434;
  let C435;
  let C436;
  let C437;
  let C438;
  let C439;
  let C440;
  let C441;
  let C442;
  let C443;
  let C444;
  let C445;
  let C446;
  let C447;
  let C448;
  let C449;
  let C450;
  let C451;
  let C452;
  let C453;
  let C454;
  let C455;
  let C456;
  let C457;
  let C458;
  let C459;
  let C460;
  let C461;
  let C462;
  let C463;
  let C464;
  let C465;
  let C466;
  let C467;
  let C468;
  let C469;
  let C470;
  let C471;
  let C472;
  let C473;
  let C474;
  let C475;
  let C476;
  let C477;
  let C478;
  let C479;
  let C480;
  let C481;
  let C482;
  let C483;
  let C484;
  let C485;
  let C486;
  let C487;
  let C488;
  let C489;
  let C490;
  let C491;
  let C492;
  let C493;
  let C494;
  let C495;
  let C496;
  let C497;
  let C498;
  let C499;
  let C500;
  let C501;
  let C502;
  let C503;
  let C504;
  let C505;
  let C506;
  let C507;
  let C508;
  let C509;
  let C510;
  let C511;
  let C512;
  let C513;
  let C514;
  let C515;
  let C516;
  let C517;
  let C518;
  let C519;
  let C520;
  let C521;
  let C522;
  let C523;
  let C524;
  let C525;
  let C526;
  let C527;
  let C528;
  let C529;
  let C530;
  let C531;
  let C532;
  let C533;
  let C534;
  let C535;
  let C536;
  let C537;
  let C538;
  let C539;
  let C540;
  let C541;
  let C542;
  let C543;
  let C544;
  let C545;
  let C546;
  let C547;
  let C548;
  let C549;
  let C550;
  let C551;
  let C552;
  let C553;
  let C554;
  let C555;
  let C556;
  let C557;
  let C558;
  let C559;
  let C560;
  let C561;
  let C562;
  let C563;
  let C564;
  let C565;
  let C566;
  let C567;
  let C568;
  let C569;
  let C570;
  let C571;
  let C572;
  let C573;
  let C574;
  let C575;
  let C576;
  let C577;
  let C578;
  let C579;
  let C580;
  let C581;
  let C582;
  let C583;
  let C584;
  let C585;
  let C586;
  let C587;
  let C588;
  let C589;
  let C590;
  let C591;
  let C592;
  let C593;
  let C594;
  let C595;
  let C596;
  let C597;
  let C598;
  let C599;
  let C600;
  let C601;
  let C602;
  let C603;
  let C604;
  let C605;
  let C606;
  let C607;
  let C608;
  let C609;
  let C610;
  let C611;
  let C612;
  let C613;
  let C614;
  let C615;
  let C616;
  let C617;
  let C618;
  let C619;
  let C620;
  let C621;
  let C622;
  let C623;
  let C624;
  let C625;
  let C626;
  let C627;
  let C628;
  let C629;
  let C630;
  let C631;
  let C632;
  keyboard_key.PhysicalKeyboardKey = class PhysicalKeyboardKey extends keyboard_key.KeyboardKey {
    get usbHidUsage() {
      return this[usbHidUsage$];
    }
    set usbHidUsage(value) {
      super.usbHidUsage = value;
    }
    get debugName() {
      return this[debugName$0];
    }
    set debugName(value) {
      super.debugName = value;
    }
    static findKeyByCode(usageCode) {
      return keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys[$_get](usageCode);
    }
    get hashCode() {
      return dart.hashCode(this.usbHidUsage);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let typedOther = keyboard_key.PhysicalKeyboardKey._check(other);
      return this.usbHidUsage == typedOther.usbHidUsage;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("usbHidUsage", "0x" + this.usbHidUsage[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.PhysicalKeyboardKey.new = function(usbHidUsage, opts) {
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    this[usbHidUsage$] = usbHidUsage;
    this[debugName$0] = debugName;
    if (!(usbHidUsage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/keyboard_key.dart", 2033, 16, "})\n      : assert(u");
    keyboard_key.PhysicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.PhysicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.PhysicalKeyboardKey);
  const usbHidUsage$ = Symbol("PhysicalKeyboardKey.usbHidUsage");
  const debugName$0 = Symbol("PhysicalKeyboardKey.debugName");
  dart.setLibraryUri(keyboard_key.PhysicalKeyboardKey, "package:flutter/src/services/keyboard_key.dart");
  dart.setFieldSignature(keyboard_key.PhysicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.PhysicalKeyboardKey.__proto__),
    usbHidUsage: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.PhysicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.PhysicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.PhysicalKeyboardKey, {
    /*keyboard_key.PhysicalKeyboardKey.none*/get none() {
      return C367 || CT.C367;
    },
    /*keyboard_key.PhysicalKeyboardKey.hyper*/get hyper() {
      return C368 || CT.C368;
    },
    /*keyboard_key.PhysicalKeyboardKey.superKey*/get superKey() {
      return C369 || CT.C369;
    },
    /*keyboard_key.PhysicalKeyboardKey.fn*/get fn() {
      return C370 || CT.C370;
    },
    /*keyboard_key.PhysicalKeyboardKey.fnLock*/get fnLock() {
      return C371 || CT.C371;
    },
    /*keyboard_key.PhysicalKeyboardKey.suspend*/get suspend() {
      return C372 || CT.C372;
    },
    /*keyboard_key.PhysicalKeyboardKey.resume*/get resume() {
      return C373 || CT.C373;
    },
    /*keyboard_key.PhysicalKeyboardKey.turbo*/get turbo() {
      return C374 || CT.C374;
    },
    /*keyboard_key.PhysicalKeyboardKey.sleep*/get sleep() {
      return C375 || CT.C375;
    },
    /*keyboard_key.PhysicalKeyboardKey.wakeUp*/get wakeUp() {
      return C376 || CT.C376;
    },
    /*keyboard_key.PhysicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C377 || CT.C377;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbReserved*/get usbReserved() {
      return C378 || CT.C378;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C379 || CT.C379;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C380 || CT.C380;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C381 || CT.C381;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyA*/get keyA() {
      return C382 || CT.C382;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyB*/get keyB() {
      return C383 || CT.C383;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyC*/get keyC() {
      return C384 || CT.C384;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyD*/get keyD() {
      return C385 || CT.C385;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyE*/get keyE() {
      return C386 || CT.C386;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyF*/get keyF() {
      return C387 || CT.C387;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyG*/get keyG() {
      return C388 || CT.C388;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyH*/get keyH() {
      return C389 || CT.C389;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyI*/get keyI() {
      return C390 || CT.C390;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyJ*/get keyJ() {
      return C391 || CT.C391;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyK*/get keyK() {
      return C392 || CT.C392;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyL*/get keyL() {
      return C393 || CT.C393;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyM*/get keyM() {
      return C394 || CT.C394;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyN*/get keyN() {
      return C395 || CT.C395;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyO*/get keyO() {
      return C396 || CT.C396;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyP*/get keyP() {
      return C397 || CT.C397;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyQ*/get keyQ() {
      return C398 || CT.C398;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyR*/get keyR() {
      return C399 || CT.C399;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyS*/get keyS() {
      return C400 || CT.C400;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyT*/get keyT() {
      return C401 || CT.C401;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyU*/get keyU() {
      return C402 || CT.C402;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyV*/get keyV() {
      return C403 || CT.C403;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyW*/get keyW() {
      return C404 || CT.C404;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyX*/get keyX() {
      return C405 || CT.C405;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyY*/get keyY() {
      return C406 || CT.C406;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyZ*/get keyZ() {
      return C407 || CT.C407;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit1*/get digit1() {
      return C408 || CT.C408;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit2*/get digit2() {
      return C409 || CT.C409;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit3*/get digit3() {
      return C410 || CT.C410;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit4*/get digit4() {
      return C411 || CT.C411;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit5*/get digit5() {
      return C412 || CT.C412;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit6*/get digit6() {
      return C413 || CT.C413;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit7*/get digit7() {
      return C414 || CT.C414;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit8*/get digit8() {
      return C415 || CT.C415;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit9*/get digit9() {
      return C416 || CT.C416;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit0*/get digit0() {
      return C417 || CT.C417;
    },
    /*keyboard_key.PhysicalKeyboardKey.enter*/get enter() {
      return C418 || CT.C418;
    },
    /*keyboard_key.PhysicalKeyboardKey.escape*/get escape() {
      return C419 || CT.C419;
    },
    /*keyboard_key.PhysicalKeyboardKey.backspace*/get backspace() {
      return C420 || CT.C420;
    },
    /*keyboard_key.PhysicalKeyboardKey.tab*/get tab() {
      return C421 || CT.C421;
    },
    /*keyboard_key.PhysicalKeyboardKey.space*/get space() {
      return C422 || CT.C422;
    },
    /*keyboard_key.PhysicalKeyboardKey.minus*/get minus() {
      return C423 || CT.C423;
    },
    /*keyboard_key.PhysicalKeyboardKey.equal*/get equal() {
      return C424 || CT.C424;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C425 || CT.C425;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketRight*/get bracketRight() {
      return C426 || CT.C426;
    },
    /*keyboard_key.PhysicalKeyboardKey.backslash*/get backslash() {
      return C427 || CT.C427;
    },
    /*keyboard_key.PhysicalKeyboardKey.semicolon*/get semicolon() {
      return C428 || CT.C428;
    },
    /*keyboard_key.PhysicalKeyboardKey.quote*/get quote() {
      return C429 || CT.C429;
    },
    /*keyboard_key.PhysicalKeyboardKey.backquote*/get backquote() {
      return C430 || CT.C430;
    },
    /*keyboard_key.PhysicalKeyboardKey.comma*/get comma() {
      return C431 || CT.C431;
    },
    /*keyboard_key.PhysicalKeyboardKey.period*/get period() {
      return C432 || CT.C432;
    },
    /*keyboard_key.PhysicalKeyboardKey.slash*/get slash() {
      return C433 || CT.C433;
    },
    /*keyboard_key.PhysicalKeyboardKey.capsLock*/get capsLock() {
      return C434 || CT.C434;
    },
    /*keyboard_key.PhysicalKeyboardKey.f1*/get f1() {
      return C435 || CT.C435;
    },
    /*keyboard_key.PhysicalKeyboardKey.f2*/get f2() {
      return C436 || CT.C436;
    },
    /*keyboard_key.PhysicalKeyboardKey.f3*/get f3() {
      return C437 || CT.C437;
    },
    /*keyboard_key.PhysicalKeyboardKey.f4*/get f4() {
      return C438 || CT.C438;
    },
    /*keyboard_key.PhysicalKeyboardKey.f5*/get f5() {
      return C439 || CT.C439;
    },
    /*keyboard_key.PhysicalKeyboardKey.f6*/get f6() {
      return C440 || CT.C440;
    },
    /*keyboard_key.PhysicalKeyboardKey.f7*/get f7() {
      return C441 || CT.C441;
    },
    /*keyboard_key.PhysicalKeyboardKey.f8*/get f8() {
      return C442 || CT.C442;
    },
    /*keyboard_key.PhysicalKeyboardKey.f9*/get f9() {
      return C443 || CT.C443;
    },
    /*keyboard_key.PhysicalKeyboardKey.f10*/get f10() {
      return C444 || CT.C444;
    },
    /*keyboard_key.PhysicalKeyboardKey.f11*/get f11() {
      return C445 || CT.C445;
    },
    /*keyboard_key.PhysicalKeyboardKey.f12*/get f12() {
      return C446 || CT.C446;
    },
    /*keyboard_key.PhysicalKeyboardKey.printScreen*/get printScreen() {
      return C447 || CT.C447;
    },
    /*keyboard_key.PhysicalKeyboardKey.scrollLock*/get scrollLock() {
      return C448 || CT.C448;
    },
    /*keyboard_key.PhysicalKeyboardKey.pause*/get pause() {
      return C449 || CT.C449;
    },
    /*keyboard_key.PhysicalKeyboardKey.insert*/get insert() {
      return C450 || CT.C450;
    },
    /*keyboard_key.PhysicalKeyboardKey.home*/get home() {
      return C451 || CT.C451;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageUp*/get pageUp() {
      return C452 || CT.C452;
    },
    /*keyboard_key.PhysicalKeyboardKey.delete*/get delete() {
      return C453 || CT.C453;
    },
    /*keyboard_key.PhysicalKeyboardKey.end*/get end() {
      return C454 || CT.C454;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageDown*/get pageDown() {
      return C455 || CT.C455;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowRight*/get arrowRight() {
      return C456 || CT.C456;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C457 || CT.C457;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowDown*/get arrowDown() {
      return C458 || CT.C458;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowUp*/get arrowUp() {
      return C459 || CT.C459;
    },
    /*keyboard_key.PhysicalKeyboardKey.numLock*/get numLock() {
      return C460 || CT.C460;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C461 || CT.C461;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C462 || CT.C462;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C463 || CT.C463;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C464 || CT.C464;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C465 || CT.C465;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad1*/get numpad1() {
      return C466 || CT.C466;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad2*/get numpad2() {
      return C467 || CT.C467;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad3*/get numpad3() {
      return C468 || CT.C468;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad4*/get numpad4() {
      return C469 || CT.C469;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad5*/get numpad5() {
      return C470 || CT.C470;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad6*/get numpad6() {
      return C471 || CT.C471;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad7*/get numpad7() {
      return C472 || CT.C472;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad8*/get numpad8() {
      return C473 || CT.C473;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad9*/get numpad9() {
      return C474 || CT.C474;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad0*/get numpad0() {
      return C475 || CT.C475;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C476 || CT.C476;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C477 || CT.C477;
    },
    /*keyboard_key.PhysicalKeyboardKey.contextMenu*/get contextMenu() {
      return C478 || CT.C478;
    },
    /*keyboard_key.PhysicalKeyboardKey.power*/get power() {
      return C479 || CT.C479;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C480 || CT.C480;
    },
    /*keyboard_key.PhysicalKeyboardKey.f13*/get f13() {
      return C481 || CT.C481;
    },
    /*keyboard_key.PhysicalKeyboardKey.f14*/get f14() {
      return C482 || CT.C482;
    },
    /*keyboard_key.PhysicalKeyboardKey.f15*/get f15() {
      return C483 || CT.C483;
    },
    /*keyboard_key.PhysicalKeyboardKey.f16*/get f16() {
      return C484 || CT.C484;
    },
    /*keyboard_key.PhysicalKeyboardKey.f17*/get f17() {
      return C485 || CT.C485;
    },
    /*keyboard_key.PhysicalKeyboardKey.f18*/get f18() {
      return C486 || CT.C486;
    },
    /*keyboard_key.PhysicalKeyboardKey.f19*/get f19() {
      return C487 || CT.C487;
    },
    /*keyboard_key.PhysicalKeyboardKey.f20*/get f20() {
      return C488 || CT.C488;
    },
    /*keyboard_key.PhysicalKeyboardKey.f21*/get f21() {
      return C489 || CT.C489;
    },
    /*keyboard_key.PhysicalKeyboardKey.f22*/get f22() {
      return C490 || CT.C490;
    },
    /*keyboard_key.PhysicalKeyboardKey.f23*/get f23() {
      return C491 || CT.C491;
    },
    /*keyboard_key.PhysicalKeyboardKey.f24*/get f24() {
      return C492 || CT.C492;
    },
    /*keyboard_key.PhysicalKeyboardKey.open*/get open() {
      return C493 || CT.C493;
    },
    /*keyboard_key.PhysicalKeyboardKey.help*/get help() {
      return C494 || CT.C494;
    },
    /*keyboard_key.PhysicalKeyboardKey.select*/get select() {
      return C495 || CT.C495;
    },
    /*keyboard_key.PhysicalKeyboardKey.again*/get again() {
      return C496 || CT.C496;
    },
    /*keyboard_key.PhysicalKeyboardKey.undo*/get undo() {
      return C497 || CT.C497;
    },
    /*keyboard_key.PhysicalKeyboardKey.cut*/get cut() {
      return C498 || CT.C498;
    },
    /*keyboard_key.PhysicalKeyboardKey.copy*/get copy() {
      return C499 || CT.C499;
    },
    /*keyboard_key.PhysicalKeyboardKey.paste*/get paste() {
      return C500 || CT.C500;
    },
    /*keyboard_key.PhysicalKeyboardKey.find*/get find() {
      return C501 || CT.C501;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C502 || CT.C502;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C503 || CT.C503;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C504 || CT.C504;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadComma*/get numpadComma() {
      return C505 || CT.C505;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlRo*/get intlRo() {
      return C506 || CT.C506;
    },
    /*keyboard_key.PhysicalKeyboardKey.kanaMode*/get kanaMode() {
      return C507 || CT.C507;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlYen*/get intlYen() {
      return C508 || CT.C508;
    },
    /*keyboard_key.PhysicalKeyboardKey.convert*/get convert() {
      return C509 || CT.C509;
    },
    /*keyboard_key.PhysicalKeyboardKey.nonConvert*/get nonConvert() {
      return C510 || CT.C510;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang1*/get lang1() {
      return C511 || CT.C511;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang2*/get lang2() {
      return C512 || CT.C512;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang3*/get lang3() {
      return C513 || CT.C513;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang4*/get lang4() {
      return C514 || CT.C514;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang5*/get lang5() {
      return C515 || CT.C515;
    },
    /*keyboard_key.PhysicalKeyboardKey.abort*/get abort() {
      return C516 || CT.C516;
    },
    /*keyboard_key.PhysicalKeyboardKey.props*/get props() {
      return C517 || CT.C517;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C518 || CT.C518;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C519 || CT.C519;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C520 || CT.C520;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C521 || CT.C521;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C522 || CT.C522;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C523 || CT.C523;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C524 || CT.C524;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C525 || CT.C525;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C526 || CT.C526;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClear*/get numpadClear() {
      return C527 || CT.C527;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C528 || CT.C528;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlLeft*/get controlLeft() {
      return C529 || CT.C529;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C530 || CT.C530;
    },
    /*keyboard_key.PhysicalKeyboardKey.altLeft*/get altLeft() {
      return C531 || CT.C531;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaLeft*/get metaLeft() {
      return C532 || CT.C532;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlRight*/get controlRight() {
      return C533 || CT.C533;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftRight*/get shiftRight() {
      return C534 || CT.C534;
    },
    /*keyboard_key.PhysicalKeyboardKey.altRight*/get altRight() {
      return C535 || CT.C535;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaRight*/get metaRight() {
      return C536 || CT.C536;
    },
    /*keyboard_key.PhysicalKeyboardKey.info*/get info() {
      return C537 || CT.C537;
    },
    /*keyboard_key.PhysicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C538 || CT.C538;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C539 || CT.C539;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C540 || CT.C540;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C541 || CT.C541;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C542 || CT.C542;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C543 || CT.C543;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C544 || CT.C544;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaLast*/get mediaLast() {
      return C545 || CT.C545;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchPhone*/get launchPhone() {
      return C546 || CT.C546;
    },
    /*keyboard_key.PhysicalKeyboardKey.programGuide*/get programGuide() {
      return C547 || CT.C547;
    },
    /*keyboard_key.PhysicalKeyboardKey.exit*/get exit() {
      return C548 || CT.C548;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelUp*/get channelUp() {
      return C549 || CT.C549;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelDown*/get channelDown() {
      return C550 || CT.C550;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C551 || CT.C551;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C552 || CT.C552;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C553 || CT.C553;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C554 || CT.C554;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C555 || CT.C555;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C556 || CT.C556;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaStop*/get mediaStop() {
      return C557 || CT.C557;
    },
    /*keyboard_key.PhysicalKeyboardKey.eject*/get eject() {
      return C558 || CT.C558;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C559 || CT.C559;
    },
    /*keyboard_key.PhysicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C560 || CT.C560;
    },
    /*keyboard_key.PhysicalKeyboardKey.bassBoost*/get bassBoost() {
      return C561 || CT.C561;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C562 || CT.C562;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C563 || CT.C563;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C564 || CT.C564;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchMail*/get launchMail() {
      return C565 || CT.C565;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchContacts*/get launchContacts() {
      return C566 || CT.C566;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C567 || CT.C567;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp2*/get launchApp2() {
      return C568 || CT.C568;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp1*/get launchApp1() {
      return C569 || CT.C569;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C570 || CT.C570;
    },
    /*keyboard_key.PhysicalKeyboardKey.logOff*/get logOff() {
      return C571 || CT.C571;
    },
    /*keyboard_key.PhysicalKeyboardKey.lockScreen*/get lockScreen() {
      return C572 || CT.C572;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C573 || CT.C573;
    },
    /*keyboard_key.PhysicalKeyboardKey.selectTask*/get selectTask() {
      return C574 || CT.C574;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C575 || CT.C575;
    },
    /*keyboard_key.PhysicalKeyboardKey.spellCheck*/get spellCheck() {
      return C576 || CT.C576;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C577 || CT.C577;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C578 || CT.C578;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C579 || CT.C579;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C580 || CT.C580;
    },
    /*keyboard_key.PhysicalKeyboardKey.newKey*/get newKey() {
      return C581 || CT.C581;
    },
    /*keyboard_key.PhysicalKeyboardKey.close*/get close() {
      return C582 || CT.C582;
    },
    /*keyboard_key.PhysicalKeyboardKey.save*/get save() {
      return C583 || CT.C583;
    },
    /*keyboard_key.PhysicalKeyboardKey.print*/get print() {
      return C584 || CT.C584;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserSearch*/get browserSearch() {
      return C585 || CT.C585;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserHome*/get browserHome() {
      return C586 || CT.C586;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserBack*/get browserBack() {
      return C587 || CT.C587;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserForward*/get browserForward() {
      return C588 || CT.C588;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserStop*/get browserStop() {
      return C589 || CT.C589;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C590 || CT.C590;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C591 || CT.C591;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomIn*/get zoomIn() {
      return C592 || CT.C592;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomOut*/get zoomOut() {
      return C593 || CT.C593;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C594 || CT.C594;
    },
    /*keyboard_key.PhysicalKeyboardKey.redo*/get redo() {
      return C595 || CT.C595;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailReply*/get mailReply() {
      return C596 || CT.C596;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailForward*/get mailForward() {
      return C597 || CT.C597;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailSend*/get mailSend() {
      return C598 || CT.C598;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyboardLayoutSelect*/get keyboardLayoutSelect() {
      return C599 || CT.C599;
    },
    /*keyboard_key.PhysicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C600 || CT.C600;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton1*/get gameButton1() {
      return C601 || CT.C601;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton2*/get gameButton2() {
      return C602 || CT.C602;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton3*/get gameButton3() {
      return C603 || CT.C603;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton4*/get gameButton4() {
      return C604 || CT.C604;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton5*/get gameButton5() {
      return C605 || CT.C605;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton6*/get gameButton6() {
      return C606 || CT.C606;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton7*/get gameButton7() {
      return C607 || CT.C607;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton8*/get gameButton8() {
      return C608 || CT.C608;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton9*/get gameButton9() {
      return C609 || CT.C609;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton10*/get gameButton10() {
      return C610 || CT.C610;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton11*/get gameButton11() {
      return C611 || CT.C611;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton12*/get gameButton12() {
      return C612 || CT.C612;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton13*/get gameButton13() {
      return C613 || CT.C613;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton14*/get gameButton14() {
      return C614 || CT.C614;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton15*/get gameButton15() {
      return C615 || CT.C615;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButton16*/get gameButton16() {
      return C616 || CT.C616;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonA*/get gameButtonA() {
      return C617 || CT.C617;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonB*/get gameButtonB() {
      return C618 || CT.C618;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonC*/get gameButtonC() {
      return C619 || CT.C619;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonLeft1*/get gameButtonLeft1() {
      return C620 || CT.C620;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonLeft2*/get gameButtonLeft2() {
      return C621 || CT.C621;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonMode*/get gameButtonMode() {
      return C622 || CT.C622;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonRight1*/get gameButtonRight1() {
      return C623 || CT.C623;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonRight2*/get gameButtonRight2() {
      return C624 || CT.C624;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonSelect*/get gameButtonSelect() {
      return C625 || CT.C625;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonStart*/get gameButtonStart() {
      return C626 || CT.C626;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonThumbLeft*/get gameButtonThumbLeft() {
      return C627 || CT.C627;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonThumbRight*/get gameButtonThumbRight() {
      return C628 || CT.C628;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonX*/get gameButtonX() {
      return C629 || CT.C629;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonY*/get gameButtonY() {
      return C630 || CT.C630;
    },
    /*keyboard_key.PhysicalKeyboardKey.gameButtonZ*/get gameButtonZ() {
      return C631 || CT.C631;
    },
    /*keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys*/get _knownPhysicalKeys() {
      return C632 || CT.C632;
    }
  });
  const _value$ = dart.privateName(priority, "_value");
  let C633;
  let C634;
  let C635;
  priority.Priority = class Priority extends core.Object {
    get value() {
      return this[_value$];
    }
    ['+'](offset) {
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new priority.Priority.__(dart.notNull(this[_value$]) + dart.notNull(offset));
    }
    ['-'](offset) {
      return this['+'](-dart.notNull(offset));
    }
  };
  (priority.Priority.__ = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = priority.Priority.prototype;
  dart.addTypeTests(priority.Priority);
  dart.setMethodSignature(priority.Priority, () => ({
    __proto__: dart.getMethods(priority.Priority.__proto__),
    '+': dart.fnType(priority.Priority, [core.int]),
    '-': dart.fnType(priority.Priority, [core.int])
  }));
  dart.setGetterSignature(priority.Priority, () => ({
    __proto__: dart.getGetters(priority.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(priority.Priority, "package:flutter/src/scheduler/priority.dart");
  dart.setFieldSignature(priority.Priority, () => ({
    __proto__: dart.getFields(priority.Priority.__proto__),
    [_value$]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(priority.Priority, {
    /*priority.Priority.idle*/get idle() {
      return C633 || CT.C633;
    },
    /*priority.Priority.animation*/get animation() {
      return C634 || CT.C634;
    },
    /*priority.Priority.touch*/get touch() {
      return C635 || CT.C635;
    },
    /*priority.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  });
  const _name$6 = dart.privateName(text_input, "_name");
  let C636;
  let C637;
  let C638;
  let C639;
  let C640;
  let C641;
  let C642;
  let C643;
  let C644;
  let C645;
  text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    get [_name$6]() {
      return "TextInputType." + dart.str(text_input.TextInputType._names[$_get](this.index));
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["name", this[_name$6], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + "name: " + dart.str(this[_name$6]) + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (!text_input.TextInputType.is(other)) return false;
      let typedOther = text_input.TextInputType._check(other);
      return typedOther.index == this.index && dart.equals(typedOther.signed, this.signed) && dart.equals(typedOther.decimal, this.decimal);
    }
    get hashCode() {
      return ui.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = text_input.TextInputType.prototype;
  (text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = text_input.TextInputType.prototype;
  dart.addTypeTests(text_input.TextInputType);
  const index$ = Symbol("TextInputType.index");
  const signed$ = Symbol("TextInputType.signed");
  const decimal$ = Symbol("TextInputType.decimal");
  dart.setMethodSignature(text_input.TextInputType, () => ({
    __proto__: dart.getMethods(text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(text_input.TextInputType, () => ({
    __proto__: dart.getGetters(text_input.TextInputType.__proto__),
    [_name$6]: core.String
  }));
  dart.setLibraryUri(text_input.TextInputType, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputType, () => ({
    __proto__: dart.getFields(text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(core.bool),
    decimal: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextInputType, ['hashCode']);
  dart.defineLazy(text_input.TextInputType, {
    /*text_input.TextInputType.text*/get text() {
      return C636 || CT.C636;
    },
    /*text_input.TextInputType.multiline*/get multiline() {
      return C637 || CT.C637;
    },
    /*text_input.TextInputType.number*/get number() {
      return C638 || CT.C638;
    },
    /*text_input.TextInputType.phone*/get phone() {
      return C639 || CT.C639;
    },
    /*text_input.TextInputType.datetime*/get datetime() {
      return C640 || CT.C640;
    },
    /*text_input.TextInputType.emailAddress*/get emailAddress() {
      return C641 || CT.C641;
    },
    /*text_input.TextInputType.url*/get url() {
      return C642 || CT.C642;
    },
    /*text_input.TextInputType.visiblePassword*/get visiblePassword() {
      return C643 || CT.C643;
    },
    /*text_input.TextInputType.values*/get values() {
      return C644 || CT.C644;
    },
    /*text_input.TextInputType._names*/get _names() {
      return C645 || CT.C645;
    }
  });
  let C646;
  let C647;
  let C648;
  let C649;
  let C650;
  let C651;
  let C652;
  let C653;
  let C654;
  let C655;
  let C656;
  let C657;
  let C658;
  let C659;
  text_input.TextInputAction = class TextInputAction extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (text_input.TextInputAction.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = text_input.TextInputAction.prototype;
  dart.addTypeTests(text_input.TextInputAction);
  dart.setLibraryUri(text_input.TextInputAction, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputAction, () => ({
    __proto__: dart.getFields(text_input.TextInputAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$6]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextInputAction, ['toString']);
  text_input.TextInputAction.none = C646 || CT.C646;
  text_input.TextInputAction.unspecified = C647 || CT.C647;
  text_input.TextInputAction.done = C648 || CT.C648;
  text_input.TextInputAction.go = C649 || CT.C649;
  text_input.TextInputAction.search = C650 || CT.C650;
  text_input.TextInputAction.send = C651 || CT.C651;
  text_input.TextInputAction.next = C652 || CT.C652;
  text_input.TextInputAction.previous = C653 || CT.C653;
  text_input.TextInputAction.continueAction = C654 || CT.C654;
  text_input.TextInputAction.join = C655 || CT.C655;
  text_input.TextInputAction.route = C656 || CT.C656;
  text_input.TextInputAction.emergencyCall = C657 || CT.C657;
  text_input.TextInputAction.newline = C658 || CT.C658;
  text_input.TextInputAction.values = C659 || CT.C659;
  let C660;
  let C661;
  let C662;
  let C663;
  let C664;
  text_input.TextCapitalization = class TextCapitalization extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (text_input.TextCapitalization.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = text_input.TextCapitalization.prototype;
  dart.addTypeTests(text_input.TextCapitalization);
  dart.setLibraryUri(text_input.TextCapitalization, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextCapitalization, () => ({
    __proto__: dart.getFields(text_input.TextCapitalization.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$6]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextCapitalization, ['toString']);
  text_input.TextCapitalization.words = C660 || CT.C660;
  text_input.TextCapitalization.sentences = C661 || CT.C661;
  text_input.TextCapitalization.characters = C662 || CT.C662;
  text_input.TextCapitalization.none = C663 || CT.C663;
  text_input.TextCapitalization.values = C664 || CT.C664;
  text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["inputType", this.inputType.toJson(), "obscureText", this.obscureText, "autocorrect", this.autocorrect, "actionLabel", this.actionLabel, "inputAction", dart.toString(this.inputAction), "textCapitalization", dart.toString(this.textCapitalization), "keyboardAppearance", dart.toString(this.keyboardAppearance)]);
    }
  };
  (text_input.TextInputConfiguration.new = function(opts) {
    let inputType = opts && 'inputType' in opts ? opts.inputType : C636 || CT.C636;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C648 || CT.C648;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C9 || CT.C9;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C663 || CT.C663;
    this[inputType$] = inputType;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    if (!(inputType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 393, 15, "inputType != null");
    if (!(obscureText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 394, 15, "obscureText != null");
    if (!(autocorrect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 395, 15, "autocorrect != null");
    if (!(keyboardAppearance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 396, 15, "keyboardAppearance != null");
    if (!(inputAction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 397, 15, "inputAction != null");
    if (!(textCapitalization != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 398, 15, "textCapitalization != null");
    ;
  }).prototype = text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(text_input.TextInputConfiguration);
  const inputType$ = Symbol("TextInputConfiguration.inputType");
  const obscureText$ = Symbol("TextInputConfiguration.obscureText");
  const autocorrect$ = Symbol("TextInputConfiguration.autocorrect");
  const actionLabel$ = Symbol("TextInputConfiguration.actionLabel");
  const inputAction$ = Symbol("TextInputConfiguration.inputAction");
  const textCapitalization$ = Symbol("TextInputConfiguration.textCapitalization");
  const keyboardAppearance$ = Symbol("TextInputConfiguration.keyboardAppearance");
  dart.setMethodSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(text_input.TextInputConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(text_input.TextInputConfiguration, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(text_input.TextInputType),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(core.String),
    inputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui.Brightness)
  }));
  let C665;
  let C666;
  let C667;
  let C668;
  text_input.FloatingCursorDragState = class FloatingCursorDragState extends core.Object {
    toString() {
      return this[_name$6];
    }
  };
  (text_input.FloatingCursorDragState.new = function(index, _name) {
    this.index = index;
    this[_name$6] = _name;
    ;
  }).prototype = text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(text_input.FloatingCursorDragState);
  dart.setLibraryUri(text_input.FloatingCursorDragState, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.FloatingCursorDragState, () => ({
    __proto__: dart.getFields(text_input.FloatingCursorDragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$6]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.FloatingCursorDragState, ['toString']);
  text_input.FloatingCursorDragState.Start = C665 || CT.C665;
  text_input.FloatingCursorDragState.Update = C666 || CT.C666;
  text_input.FloatingCursorDragState.End = C667 || CT.C667;
  text_input.FloatingCursorDragState.values = C668 || CT.C668;
  text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
  };
  (text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$0] = offset;
    this[state$] = state;
    if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 484, 15, "state != null");
    if (!(!dart.equals(state, text_input.FloatingCursorDragState.Update) || offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 485, 15, "state != FloatingCursorDragState.Update || offset != null");
    ;
  }).prototype = text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(text_input.RawFloatingCursorPoint);
  const offset$0 = Symbol("RawFloatingCursorPoint.offset");
  const state$ = Symbol("RawFloatingCursorPoint.state");
  dart.setLibraryUri(text_input.RawFloatingCursorPoint, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(ui.Offset),
    state: dart.finalFieldType(text_input.FloatingCursorDragState)
  }));
  let C669;
  text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t13, t13$, t13$0, t13$1, t13$2, t13$3;
      return new text_input.TextEditingValue.new({text: core.String._check(encoded[$_get]("text")), selection: new text_editing.TextSelection.new({baseOffset: core.int._check((t13 = encoded[$_get]("selectionBase"), t13 == null ? -1 : t13)), extentOffset: core.int._check((t13$ = encoded[$_get]("selectionExtent"), t13$ == null ? -1 : t13$)), affinity: (t13$0 = text_input._toTextAffinity(core.String._check(encoded[$_get]("selectionAffinity"))), t13$0 == null ? ui.TextAffinity.downstream : t13$0), isDirectional: core.bool._check((t13$1 = encoded[$_get]("selectionIsDirectional"), t13$1 == null ? false : t13$1))}), composing: new text_editing.TextRange.new({start: core.int._check((t13$2 = encoded[$_get]("composingBase"), t13$2 == null ? -1 : t13$2)), end: core.int._check((t13$3 = encoded[$_get]("composingExtent"), t13$3 == null ? -1 : t13$3))})});
    }
    toJSON() {
      return new (IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", dart.toString(this.selection.affinity), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    copyWith(opts) {
      let t13, t13$, t13$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_input.TextEditingValue.new({text: (t13 = text, t13 == null ? this.text : t13), selection: (t13$ = selection, t13$ == null ? this.selection : t13$), composing: (t13$0 = composing, t13$0 == null ? this.composing : t13$0)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(text: ┤" + dart.str(this.text) + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_input.TextEditingValue.is(other)) return false;
      let typedOther = text_input.TextEditingValue._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.selection, this.selection) && dart.equals(typedOther.composing, this.composing);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.text), dart.hashCode(this.selection), dart.hashCode(this.composing));
    }
  };
  (text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : C30 || CT.C30;
    let composing = opts && 'composing' in opts ? opts.composing : C13 || CT.C13;
    this[text$0] = text;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 507, 15, "text != null");
    if (!(selection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 508, 15, "selection != null");
    if (!(composing != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 509, 15, "composing != null");
    ;
  }).prototype = text_input.TextEditingValue.prototype;
  dart.addTypeTests(text_input.TextEditingValue);
  const text$0 = Symbol("TextEditingValue.text");
  const selection$ = Symbol("TextEditingValue.selection");
  const composing$ = Symbol("TextEditingValue.composing");
  dart.setMethodSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(text_input.TextEditingValue.__proto__),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(text_input.TextEditingValue, [], {composing: text_editing.TextRange, selection: text_editing.TextSelection, text: core.String})
  }));
  dart.setLibraryUri(text_input.TextEditingValue, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(text_editing.TextRange)
  }));
  dart.defineExtensionMethods(text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(text_input.TextEditingValue, {
    /*text_input.TextEditingValue.empty*/get empty() {
      return C669 || CT.C669;
    }
  });
  text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {
    get cutEnabled() {
      return true;
    }
    get copyEnabled() {
      return true;
    }
    get pasteEnabled() {
      return true;
    }
    get selectAllEnabled() {
      return true;
    }
  };
  (text_input.TextSelectionDelegate.new = function() {
    ;
  }).prototype = text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(text_input.TextSelectionDelegate);
  dart.setGetterSignature(text_input.TextSelectionDelegate, () => ({
    __proto__: dart.getGetters(text_input.TextSelectionDelegate.__proto__),
    cutEnabled: core.bool,
    copyEnabled: core.bool,
    pasteEnabled: core.bool,
    selectAllEnabled: core.bool
  }));
  dart.setLibraryUri(text_input.TextSelectionDelegate, "package:flutter/src/services/text_input.dart");
  text_input.TextInputClient = class TextInputClient extends core.Object {};
  (text_input.TextInputClient.new = function() {
    ;
  }).prototype = text_input.TextInputClient.prototype;
  dart.addTypeTests(text_input.TextInputClient);
  dart.setLibraryUri(text_input.TextInputClient, "package:flutter/src/services/text_input.dart");
  const _client$ = dart.privateName(text_input, "_client");
  const _id = dart.privateName(text_input, "_id");
  const _currentConnection = dart.privateName(text_input, "_currentConnection");
  const _scheduleHide = dart.privateName(text_input, "_scheduleHide");
  text_input.TextInputConnection = class TextInputConnection extends core.Object {
    get attached() {
      return dart.equals(text_input._clientHandler[_currentConnection], this);
    }
    show() {
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 658, 12, "attached");
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.show");
    }
    setEditingState(value) {
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 664, 12, "attached");
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setEditingState", value.toJSON());
    }
    setEditableSizeAndTransform(editableBoxSize, transform) {
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setEditableSizeAndTransform", new (IdentityMapOfString$dynamic()).from(["width", editableBoxSize.width, "height", editableBoxSize.height, "transform", transform.storage]));
    }
    setStyle(opts) {
      let t13;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 703, 12, "attached");
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setStyle", new (IdentityMapOfString$dynamic()).from(["fontFamily", fontFamily, "fontSize", fontSize, "fontWeightIndex", (t13 = fontWeight, t13 == null ? null : t13.index), "textAlignIndex", textAlign.index, "textDirectionIndex", textDirection.index]));
    }
    close() {
      let t13;
      if (dart.test(this.attached)) {
        system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.clearClient");
        t13 = text_input._clientHandler;
        t13[_currentConnection] = null;
        t13[_scheduleHide]();
        t13;
      }
      if (!!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 728, 12, "!attached");
    }
  };
  (text_input.TextInputConnection.__ = function(_client) {
    let t13;
    this[_client$] = _client;
    if (!(_client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 645, 14, "_client != null");
    this[_id] = (t13 = text_input.TextInputConnection._nextId, text_input.TextInputConnection._nextId = dart.notNull(t13) + 1, t13);
    ;
  }).prototype = text_input.TextInputConnection.prototype;
  dart.addTypeTests(text_input.TextInputConnection);
  dart.setMethodSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    setEditingState: dart.fnType(dart.void, [text_input.TextEditingValue]),
    setEditableSizeAndTransform: dart.fnType(dart.void, [ui.Size, vector_math_64.Matrix4]),
    setStyle: dart.fnType(dart.void, [], {fontFamily: core.String, fontSize: core.double, fontWeight: ui.FontWeight, textAlign: ui.TextAlign, textDirection: ui.TextDirection}),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setLibraryUri(text_input.TextInputConnection, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(text_input.TextInputConnection.__proto__),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(text_input.TextInputClient)
  }));
  dart.defineLazy(text_input.TextInputConnection, {
    /*text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  const _hidePending = dart.privateName(text_input, "_hidePending");
  const _handleTextInputInvocation = dart.privateName(text_input, "_handleTextInputInvocation");
  text_input._TextInputClientHandler = class _TextInputClientHandler extends core.Object {
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        let args = core.List._check(methodCall.arguments);
        let client = core.int._check(args[$_get](0));
        if (client != this[_currentConnection][_id]) return;
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            this[_currentConnection][_client$].updateEditingValue(text_input.TextEditingValue.fromJSON(MapOfString$dynamic()._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.performAction":
          {
            this[_currentConnection][_client$].performAction(text_input._toTextInputAction(core.String._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            this[_currentConnection][_client$].updateFloatingCursor(text_input._toTextPoint(text_input._toTextCursorAction(core.String._check(args[$_get](1))), MapOfString$dynamic()._check(args[$_get](2))));
            break;
          }
          default:
          {
            dart.throw(new message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (dart.test(this[_hidePending])) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.hide");
      }, VoidToNull()));
    }
  };
  (text_input._TextInputClientHandler.new = function() {
    this[_currentConnection] = null;
    this[_hidePending] = false;
    system_channels.SystemChannels.textInput.setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = text_input._TextInputClientHandler.prototype;
  dart.addTypeTests(text_input._TextInputClientHandler);
  dart.setMethodSignature(text_input._TextInputClientHandler, () => ({
    __proto__: dart.getMethods(text_input._TextInputClientHandler.__proto__),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(text_input._TextInputClientHandler, "package:flutter/src/services/text_input.dart");
  dart.setFieldSignature(text_input._TextInputClientHandler, () => ({
    __proto__: dart.getFields(text_input._TextInputClientHandler.__proto__),
    [_currentConnection]: dart.fieldType(text_input.TextInputConnection),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  let C670;
  let C671;
  text_input.TextInput = class TextInput extends core.Object {
    static attach(client, configuration) {
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 876, 12, "client != null");
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 877, 12, "configuration != null");
      if (!dart.test(text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 878, 12, "_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)");
      let connection = new text_input.TextInputConnection.__(client);
      text_input._clientHandler[_currentConnection] = connection;
      system_channels.SystemChannels.textInput.invokeMethod(dart.void, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      return connection;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.test(dart.fn(() => {
        if (true) {
          return true;
        }
        if (dart.test(io.Platform.isIOS)) {
          if (!dart.test(text_input.TextInput._iOSSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 896, 11, "_iOSSupportedInputActions.contains(inputAction)");
        } else if (dart.test(io.Platform.isAndroid)) {
          if (!dart.test(text_input.TextInput._androidSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 901, 11, "_androidSupportedInputActions.contains(inputAction)");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 889, 12, "() {\n      if (_kIsBrowser) {\n        // TODO(flutterweb): what makes sense here?\n        return true;\n      }\n      if (Platform.isIOS) {\n        assert(\n          _iOSSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on iOS.',\n        );\n      } else if (Platform.isAndroid) {\n        assert(\n          _androidSupportedInputActions.contains(inputAction),\n          'The requested TextInputAction \"$inputAction\" is not supported on Android.',\n        );\n      }\n      return true;\n    }()");
      return true;
    }
  };
  (text_input.TextInput.__ = function() {
    ;
  }).prototype = text_input.TextInput.prototype;
  dart.addTypeTests(text_input.TextInput);
  dart.setLibraryUri(text_input.TextInput, "package:flutter/src/services/text_input.dart");
  dart.defineLazy(text_input.TextInput, {
    /*text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return C670 || CT.C670;
    },
    /*text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return C671 || CT.C671;
    }
  });
  text_input._toTextAffinity = function _toTextAffinity(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui.TextAffinity.upstream;
      }
    }
    return null;
  };
  text_input._toTextInputAction = function _toTextInputAction(action) {
    switch (action) {
      case "TextInputAction.none":
      {
        return text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return text_input.TextInputAction.next;
      }
      case "TextInputAction.previuos":
      {
        return text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return text_input.TextInputAction.newline;
      }
    }
    dart.throw(assertions.FlutterError.new("Unknown text input action: " + dart.str(action)));
  };
  text_input._toTextCursorAction = function _toTextCursorAction(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(assertions.FlutterError.new("Unknown text cursor action: " + dart.str(state)));
  };
  text_input._toTextPoint = function _toTextPoint(state, encoded) {
    if (!(state != null)) dart.assertFailed("You must provide a state to set a new editing point.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 777, 10, "state != null");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 778, 10, "encoded['X'] != null");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.", "org-dartlang-app:///packages/flutter/src/services/text_input.dart", 779, 10, "encoded['Y'] != null");
    let offset = dart.equals(state, text_input.FloatingCursorDragState.Update) ? new ui.Offset.new(core.double._check(encoded[$_get]("X")), core.double._check(encoded[$_get]("Y"))) : C39 || CT.C39;
    return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  dart.defineLazy(text_input, {
    /*text_input._kIsBrowser*/get _kIsBrowser() {
      return true;
    },
    /*text_input._clientHandler*/get _clientHandler() {
      return new text_input._TextInputClientHandler.new();
    }
  });
  let C672;
  let C673;
  let C674;
  let C675;
  let C676;
  let C677;
  let C678;
  let C679;
  let C680;
  dart.defineLazy(keyboard_maps, {
    /*keyboard_maps.kAndroidToLogicalKey*/get kAndroidToLogicalKey() {
      return C672 || CT.C672;
    },
    /*keyboard_maps.kAndroidToPhysicalKey*/get kAndroidToPhysicalKey() {
      return C673 || CT.C673;
    },
    /*keyboard_maps.kAndroidNumPadMap*/get kAndroidNumPadMap() {
      return C674 || CT.C674;
    },
    /*keyboard_maps.kFuchsiaToLogicalKey*/get kFuchsiaToLogicalKey() {
      return C675 || CT.C675;
    },
    /*keyboard_maps.kFuchsiaToPhysicalKey*/get kFuchsiaToPhysicalKey() {
      return C632 || CT.C632;
    },
    /*keyboard_maps.kMacOsToPhysicalKey*/get kMacOsToPhysicalKey() {
      return C676 || CT.C676;
    },
    /*keyboard_maps.kMacOsNumPadMap*/get kMacOsNumPadMap() {
      return C677 || CT.C677;
    },
    /*keyboard_maps.kGlfwToLogicalKey*/get kGlfwToLogicalKey() {
      return C678 || CT.C678;
    },
    /*keyboard_maps.kGlfwNumpadMap*/get kGlfwNumpadMap() {
      return C679 || CT.C679;
    },
    /*keyboard_maps.kLinuxToPhysicalKey*/get kLinuxToPhysicalKey() {
      return C680 || CT.C680;
    }
  });
  debug$.debugAssertAllGesturesVarsUnset = function debugAssertAllGesturesVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug$.debugPrintHitTestResults) || dart.test(debug$.debugPrintGestureArenaDiagnostics) || dart.test(debug$.debugPrintRecognizerCallbacksTrace)) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/debug.dart", 60, 10, "() {\n    if (debugPrintHitTestResults ||\n        debugPrintGestureArenaDiagnostics ||\n        debugPrintRecognizerCallbacksTrace)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug$, {
    /*debug$.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*debug$.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*debug$.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*debug$.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {}
  });
  const _combiner$ = dart.privateName(team, "_combiner");
  const _member = dart.privateName(team, "_member");
  const _resolve$ = dart.privateName(team, "_resolve");
  let C681;
  const _arena = dart.privateName(team, "_arena");
  let C682;
  const _pointer$0 = dart.privateName(team, "_pointer");
  let C683;
  team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    get [_member]() {
      return this[_member$0];
    }
    set [_member](value) {
      super[_member] = value;
    }
    resolve(disposition) {
      this[_combiner$][_resolve$](this[_member], disposition);
    }
    get [_member$]() {
      return arena.GestureArenaMember._check(this[$noSuchMethod](new core._Invocation.getter(C681 || CT.C681)));
    }
    get [_arena$]() {
      return arena.GestureArenaManager._check(this[$noSuchMethod](new core._Invocation.getter(C682 || CT.C682)));
    }
    get [_pointer$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(C683 || CT.C683)));
    }
  };
  (team._CombiningGestureArenaEntry.new = function(_combiner, _member) {
    this[_combiner$] = _combiner;
    this[_member$0] = _member;
    ;
  }).prototype = team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(team._CombiningGestureArenaEntry);
  const _member$0 = Symbol("_CombiningGestureArenaEntry._member");
  team._CombiningGestureArenaEntry[dart.implements] = () => [arena.GestureArenaEntry];
  dart.setMethodSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setGetterSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getGetters(team._CombiningGestureArenaEntry.__proto__),
    [_member$]: arena.GestureArenaMember,
    [_arena$]: arena.GestureArenaManager,
    [_pointer$]: core.int
  }));
  dart.setLibraryUri(team._CombiningGestureArenaEntry, "package:flutter/src/gestures/team.dart");
  dart.setFieldSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaEntry.__proto__),
    [_combiner$]: dart.finalFieldType(team._CombiningGestureArenaMember),
    [_member]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  const _members = dart.privateName(team, "_members");
  const _resolved = dart.privateName(team, "_resolved");
  const _winner = dart.privateName(team, "_winner");
  const _entry = dart.privateName(team, "_entry");
  const _owner$ = dart.privateName(team, "_owner");
  const _close = dart.privateName(team, "_close");
  const _combiners = dart.privateName(team, "_combiners");
  const _add = dart.privateName(team, "_add");
  team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends arena.GestureArenaMember {
    acceptGesture(pointer) {
      let t13;
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 33, 12, "_pointer == pointer");
      if (!(this[_winner] != null || dart.test(this[_members][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 34, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      this[_winner] == null ? this[_winner] = (t13 = this[_owner$].captain, t13 == null ? this[_members][$_get](0) : t13) : null;
      for (let member of this[_members]) {
        if (!dart.equals(member, this[_winner])) member.rejectGesture(pointer);
      }
      this[_winner].acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 46, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 53, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner$][_combiners][$remove](this[_pointer$0]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 56, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 60, 12, "!_resolved");
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 61, 12, "_pointer == pointer");
      this[_members][$add](member);
      this[_entry] == null ? this[_entry] = binding$.GestureBinding.instance.gestureArena.add(pointer, this) : null;
      return new team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve$](member, disposition) {
      let t13;
      if (dart.test(this[_resolved])) return;
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$0]);
        if (dart.test(this[_members][$isEmpty])) this[_entry].resolve(disposition);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/team.dart", 76, 14, "disposition == GestureDisposition.accepted");
        this[_winner] == null ? this[_winner] = (t13 = this[_owner$].captain, t13 == null ? member : t13) : null;
        this[_entry].resolve(disposition);
      }
    }
  };
  (team._CombiningGestureArenaMember.new = function(_owner, _pointer) {
    this[_members] = JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner$] = _owner;
    this[_pointer$0] = _pointer;
    ;
  }).prototype = team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(team._CombiningGestureArenaMember);
  dart.setMethodSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    [_resolve$]: dart.fnType(dart.void, [arena.GestureArenaMember, arena.GestureDisposition])
  }));
  dart.setLibraryUri(team._CombiningGestureArenaMember, "package:flutter/src/gestures/team.dart");
  dart.setFieldSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaMember.__proto__),
    [_owner$]: dart.finalFieldType(team.GestureArenaTeam),
    [_members]: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    [_pointer$0]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(arena.GestureArenaMember),
    [_entry]: dart.fieldType(arena.GestureArenaEntry)
  }));
  team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new team._CombiningGestureArenaMember.new(this, pointer), VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
  };
  (team.GestureArenaTeam.new = function() {
    this[_combiners] = new (IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
    ;
  }).prototype = team.GestureArenaTeam.prototype;
  dart.addTypeTests(team.GestureArenaTeam);
  const captain = Symbol("GestureArenaTeam.captain");
  dart.setMethodSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(team.GestureArenaTeam.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember])
  }));
  dart.setLibraryUri(team.GestureArenaTeam, "package:flutter/src/gestures/team.dart");
  dart.setFieldSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(core.Map$(core.int, team._CombiningGestureArenaMember)),
    captain: dart.fieldType(arena.GestureArenaMember)
  }));
  const _timeout = dart.privateName(multitap, "_timeout");
  const _timer$0 = dart.privateName(multitap, "_timer");
  const _onTimeout = dart.privateName(multitap, "_onTimeout");
  multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    this[_timeout] = false;
    this[_timer$0] = null;
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 45, 17, "duration != null");
    this[_timer$0] = async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = multitap._CountdownZoned.prototype;
  dart.addTypeTests(multitap._CountdownZoned);
  dart.setMethodSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(multitap._CountdownZoned, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer)
  }));
  const _isTrackingPointer = dart.privateName(multitap, "_isTrackingPointer");
  const _initialGlobalPosition = dart.privateName(multitap, "_initialGlobalPosition");
  const _doubleTapMinTimeCountdown = dart.privateName(multitap, "_doubleTapMinTimeCountdown");
  multitap._TapTracker = class _TapTracker extends core.Object {
    startTrackingPointer(route, transform) {
      if (!dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = true;
        binding$.GestureBinding.instance.pointerRouter.addRoute(this.pointer, route, transform);
      }
    }
    stopTrackingPointer(route) {
      if (dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = false;
        binding$.GestureBinding.instance.pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinGlobalTolerance(event, tolerance) {
      let offset = event.position['-'](this[_initialGlobalPosition]);
      return dart.notNull(offset.distance) <= dart.notNull(tolerance);
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      return event.buttons == this.initialButtons;
    }
  };
  (multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    let entry = opts && 'entry' in opts ? opts.entry : null;
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    this[_isTrackingPointer] = false;
    this.entry = entry;
    if (!(doubleTapMinTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 66, 15, "doubleTapMinTime != null");
    if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 67, 15, "event != null");
    if (!(event.buttons != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 68, 15, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialGlobalPosition] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new multitap._CountdownZoned.new({duration: doubleTapMinTime});
    ;
  }).prototype = multitap._TapTracker.prototype;
  dart.addTypeTests(multitap._TapTracker);
  dart.setMethodSignature(multitap._TapTracker, () => ({
    __proto__: dart.getMethods(multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent]), vector_math_64.Matrix4]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    isWithinGlobalTolerance: dart.fnType(core.bool, [events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [events.PointerDownEvent])
  }));
  dart.setLibraryUri(multitap._TapTracker, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._TapTracker, () => ({
    __proto__: dart.getFields(multitap._TapTracker.__proto__),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(arena.GestureArenaEntry),
    [_initialGlobalPosition]: dart.finalFieldType(ui.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  const _doubleTapTimer = dart.privateName(multitap, "_doubleTapTimer");
  const _firstTap = dart.privateName(multitap, "_firstTap");
  const _trackers = dart.privateName(multitap, "_trackers");
  const _reset$0 = dart.privateName(multitap, "_reset");
  const _trackFirstTap = dart.privateName(multitap, "_trackFirstTap");
  const _stopDoubleTapTimer = dart.privateName(multitap, "_stopDoubleTapTimer");
  const _handleEvent$ = dart.privateName(multitap, "_handleEvent");
  const _registerFirstTap = dart.privateName(multitap, "_registerFirstTap");
  const _registerSecondTap = dart.privateName(multitap, "_registerSecondTap");
  const _reject = dart.privateName(multitap, "_reject");
  const _freezeTracker = dart.privateName(multitap, "_freezeTracker");
  const _clearTrackers = dart.privateName(multitap, "_clearTrackers");
  const _startDoubleTapTimer = dart.privateName(multitap, "_startDoubleTapTimer");
  const _checkUp$ = dart.privateName(multitap, "_checkUp");
  multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    isPointerAllowed(event) {
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDoubleTap == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      if (this[_firstTap] != null) {
        if (!dart.test(this[_firstTap].isWithinGlobalTolerance(event, 100))) {
          return;
        } else if (!dart.test(this[_firstTap].hasElapsedMinTime()) || !dart.test(this[_firstTap].hasSameButton(events.PointerDownEvent._check(event)))) {
          this[_reset$0]();
          return this[_trackFirstTap](event);
        }
      }
      this[_trackFirstTap](event);
    }
    [_trackFirstTap](event) {
      this[_stopDoubleTapTimer]();
      let tracker = new multitap._TapTracker.new({event: events.PointerDownEvent._check(event), entry: binding$.GestureBinding.instance.gestureArena.add(event.pointer, this), doubleTapMinTime: constants.kDoubleTapMinTime});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent$), event.transform);
    }
    [_handleEvent$](event) {
      let tracker = this[_trackers][$_get](event.pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 204, 12, "tracker != null");
      if (events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(tracker.isWithinGlobalTolerance(event, 18))) this[_reject](tracker);
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && this[_firstTap].pointer == pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null && (dart.test(this[_trackers][$isEmpty]) || dart.equals(tracker, this[_firstTap]))) this[_reset$0]();
    }
    dispose() {
      this[_reset$0]();
      super.dispose();
    }
    [_reset$0]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        let tracker = this[_firstTap];
        this[_firstTap] = null;
        this[_reject](tracker);
        binding$.GestureBinding.instance.gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      this[_startDoubleTapTimer]();
      binding$.GestureBinding.instance.gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      this[_firstTap].entry.resolve(arena.GestureDisposition.accepted);
      tracker.entry.resolve(arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp$](tracker.initialButtons);
      this[_reset$0]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!dart.test(this[_trackers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 287, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent$));
    }
    [_startDoubleTapTimer]() {
      this[_doubleTapTimer] == null ? this[_doubleTapTimer] = async.Timer.new(constants.kDoubleTapTimeout, dart.bind(this, _reset$0)) : null;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        this[_doubleTapTimer].cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp$](buttons) {
      if (!(buttons === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 306, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", this.onDoubleTap);
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onDoubleTap] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (IdentityMapOfint$_TapTracker()).new();
    multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.DoubleTapGestureRecognizer);
  const onDoubleTap = Symbol("DoubleTapGestureRecognizer.onDoubleTap");
  dart.setMethodSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.DoubleTapGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_trackFirstTap]: dart.fnType(dart.void, [events.PointerEvent]),
    [_handleEvent$]: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_reset$0]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.DoubleTapGestureRecognizer, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTap: dart.fieldType(dart.fnType(dart.void, [])),
    [_doubleTapTimer]: dart.fieldType(async.Timer),
    [_firstTap]: dart.fieldType(multitap._TapTracker),
    [_trackers]: dart.finalFieldType(core.Map$(core.int, multitap._TapTracker))
  }));
  const _wonArena = dart.privateName(multitap, "_wonArena");
  const _finalPosition$ = dart.privateName(multitap, "_finalPosition");
  const _lastPosition$ = dart.privateName(multitap, "_lastPosition");
  const _dispatchLongTap = dart.privateName(multitap, "_dispatchLongTap");
  const _check = dart.privateName(multitap, "_check");
  const _dispatchCancel = dart.privateName(multitap, "_dispatchCancel");
  const _dispatchTap = dart.privateName(multitap, "_dispatchTap");
  multitap._TapGesture = class _TapGesture extends multitap._TapTracker {
    handleEvent(event) {
      if (!(event.pointer == this.pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 348, 12, "event.pointer == pointer");
      if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(this.isWithinGlobalTolerance(event, 18)))
          this.cancel();
        else
          this[_lastPosition$] = recognizer.OffsetPair.fromEventPosition(event);
      } else if (events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition$] = recognizer.OffsetPair.fromEventPosition(event);
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t13;
      t13 = this[_timer$0];
      t13 == null ? null : t13.cancel();
      this[_timer$0] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (dart.test(this[_wonArena]))
        this.reject();
      else
        this.entry.resolve(arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (dart.test(this[_wonArena]) && this[_finalPosition$] != null) this.gestureRecognizer[_dispatchTap](this.pointer, this[_finalPosition$]);
    }
  };
  (multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    this[_wonArena] = false;
    this[_timer$0] = null;
    this[_finalPosition$] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition$] = recognizer.OffsetPair.fromEventPosition(event);
    multitap._TapGesture.__proto__.new.call(this, {event: events.PointerDownEvent._check(event), entry: binding$.GestureBinding.instance.gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: constants.kDoubleTapMinTime});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'), event.transform);
    if (dart.test(longTapDelay['>'](core.Duration.zero))) {
      this[_timer$0] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer$0] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition$]);
      }, VoidToNull()));
    }
  }).prototype = multitap._TapGesture.prototype;
  dart.addTypeTests(multitap._TapGesture);
  dart.setMethodSignature(multitap._TapGesture, () => ({
    __proto__: dart.getMethods(multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(multitap._TapGesture, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._TapGesture, () => ({
    __proto__: dart.getFields(multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer),
    [_lastPosition$]: dart.fieldType(recognizer.OffsetPair),
    [_finalPosition$]: dart.fieldType(recognizer.OffsetPair)
  }));
  const _gestureMap = dart.privateName(multitap, "_gestureMap");
  multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown$];
    }
    set onTapDown(value) {
      this[onTapDown$] = value;
    }
    get onTapUp() {
      return this[onTapUp$];
    }
    set onTapUp(value) {
      this[onTapUp$] = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      this[onTap$] = value;
    }
    get onTapCancel() {
      return this[onTapCancel$];
    }
    set onTapCancel(value) {
      this[onTapCancel$] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    addAllowedPointer(event) {
      if (!!dart.test(this[_gestureMap][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 441, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        this.onTapDown(event.pointer, new tap.TapDownDetails.new({globalPosition: event.position, localPosition: event.localPosition, kind: event.kind}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 459, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).accept();
    }
    rejectGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 465, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).reject();
      if (!!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 467, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 471, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => this.onTapCancel(pointer), VoidTovoid()));
    }
    [_dispatchTap](pointer, position) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 478, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => {
        this.onTapUp(pointer, new tap.TapUpDetails.new({localPosition: position.local, globalPosition: position.global}));
      }, VoidToNull()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => this.onTap(pointer), VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 492, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        this.onLongTapDown(pointer, new tap.TapDownDetails.new({globalPosition: lastPosition.global, localPosition: lastPosition.local, kind: this.getKindForPointer(pointer)}));
      }, VoidToNull()));
    }
    dispose() {
      let localGestures = ListOf_TapGesture().from(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!dart.test(this[_gestureMap][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/multitap.dart", 512, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : C92 || CT.C92;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onTapDown$] = null;
    this[onTapUp$] = null;
    this[onTap$] = null;
    this[onTapCancel$] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.MultiTapGestureRecognizer);
  const onTapDown$ = Symbol("MultiTapGestureRecognizer.onTapDown");
  const onTapUp$ = Symbol("MultiTapGestureRecognizer.onTapUp");
  const onTap$ = Symbol("MultiTapGestureRecognizer.onTap");
  const onTapCancel$ = Symbol("MultiTapGestureRecognizer.onTapCancel");
  const longTapDelay$ = Symbol("MultiTapGestureRecognizer.longTapDelay");
  const onLongTapDown = Symbol("MultiTapGestureRecognizer.onLongTapDown");
  dart.setMethodSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.MultiTapGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, recognizer.OffsetPair])
  }));
  dart.setGetterSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.MultiTapGestureRecognizer, "package:flutter/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [core.int])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [core.int])),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapDownDetails])),
    [_gestureMap]: dart.finalFieldType(core.Map$(core.int, multitap._TapGesture))
  }));
  let C684;
  asset_bundle.AssetBundle = class AssetBundle extends core.Object {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      return async.async(core.String, (function* loadString() {
        let data = (yield this.load(key));
        if (data == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        if (dart.notNull(data[$lengthInBytes]) < 10 * 1024) {
          return convert.utf8.decode(data[$buffer][$asUint8List]());
        }
        return isolates.compute(typed_data.ByteData, core.String, C684 || CT.C684, data, {debugLabel: "UTF8 decode for \"" + dart.str(key) + "\""});
      }).bind(this));
    }
    static _utf8decode(data) {
      return convert.utf8.decode(data[$buffer][$asUint8List]());
    }
    evict(key) {
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "()";
    }
  };
  (asset_bundle.AssetBundle.new = function() {
    ;
  }).prototype = asset_bundle.AssetBundle.prototype;
  dart.addTypeTests(asset_bundle.AssetBundle);
  dart.setMethodSignature(asset_bundle.AssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.AssetBundle.__proto__),
    loadString: dart.fnType(async.Future$(core.String), [core.String], {cache: core.bool}),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(asset_bundle.AssetBundle, "package:flutter/src/services/asset_bundle.dart");
  dart.defineExtensionMethods(asset_bundle.AssetBundle, ['toString']);
  const _baseUrl = dart.privateName(asset_bundle, "_baseUrl");
  const _httpClient = dart.privateName(asset_bundle, "_httpClient");
  const _urlFromKey = dart.privateName(asset_bundle, "_urlFromKey");
  asset_bundle.NetworkAssetBundle = class NetworkAssetBundle extends asset_bundle.AssetBundle {
    [_urlFromKey](key) {
      return this[_baseUrl].resolve(key);
    }
    load(key) {
      return async.async(typed_data.ByteData, (function* load() {
        let request = (yield this[_httpClient].getUrl(this[_urlFromKey](key)));
        let response = (yield request.close());
        if (response.statusCode !== 200) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key) + "\n" + "HTTP status code: " + dart.str(response.statusCode)));
        let bytes = (yield consolidate_response.consolidateHttpClientResponseBytes(response));
        return bytes[$buffer][$asByteData]();
      }).bind(this));
    }
    loadStructuredData(T, key, parser) {
      return async.async(T, (function* loadStructuredData() {
        if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 134, 12, "key != null");
        if (!(parser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 135, 12, "parser != null");
        return parser(yield this.loadString(key));
      }).bind(this));
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this[_baseUrl]) + ")";
    }
  };
  (asset_bundle.NetworkAssetBundle.new = function(baseUrl) {
    this[_baseUrl] = baseUrl;
    this[_httpClient] = _http.HttpClient.new();
    ;
  }).prototype = asset_bundle.NetworkAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.NetworkAssetBundle);
  dart.setMethodSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.NetworkAssetBundle.__proto__),
    [_urlFromKey]: dart.fnType(core.Uri, [core.String]),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String]),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(asset_bundle.NetworkAssetBundle, "package:flutter/src/services/asset_bundle.dart");
  dart.setFieldSignature(asset_bundle.NetworkAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.NetworkAssetBundle.__proto__),
    [_baseUrl]: dart.finalFieldType(core.Uri),
    [_httpClient]: dart.finalFieldType(_http.HttpClient)
  }));
  dart.defineExtensionMethods(asset_bundle.NetworkAssetBundle, ['toString']);
  const _stringCache = dart.privateName(asset_bundle, "_stringCache");
  const _structuredDataCache = dart.privateName(asset_bundle, "_structuredDataCache");
  asset_bundle.CachingAssetBundle = class CachingAssetBundle extends asset_bundle.AssetBundle {
    loadString(key, opts) {
      let cache = opts && 'cache' in opts ? opts.cache : true;
      if (dart.test(cache)) return this[_stringCache][$putIfAbsent](key, dart.fn(() => super.loadString(key), VoidToFutureOfString()));
      return super.loadString(key);
    }
    loadStructuredData(T, key, parser) {
      if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 178, 12, "key != null");
      if (!(parser != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/asset_bundle.dart", 179, 12, "parser != null");
      if (dart.test(this[_structuredDataCache][$containsKey](key))) return async.Future$(T)._check(this[_structuredDataCache][$_get](key));
      let completer = null;
      let result = null;
      this.loadString(key, {cache: false}).then(T, parser).then(dart.void, dart.fn(value => {
        result = new (synchronous_future.SynchronousFuture$(T)).new(value);
        this[_structuredDataCache][$_set](key, result);
        if (completer != null) {
          completer.complete(value);
        }
      }, dart.fnType(core.Null, [T])));
      if (result != null) {
        return result;
      }
      completer = async.Completer$(T).new();
      this[_structuredDataCache][$_set](key, completer.future);
      return completer.future;
    }
    evict(key) {
      this[_stringCache][$remove](key);
      this[_structuredDataCache][$remove](key);
    }
  };
  (asset_bundle.CachingAssetBundle.new = function() {
    this[_stringCache] = new (IdentityMapOfString$FutureOfString()).new();
    this[_structuredDataCache] = new (IdentityMapOfString$Future()).new();
    ;
  }).prototype = asset_bundle.CachingAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.CachingAssetBundle);
  dart.setMethodSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.CachingAssetBundle.__proto__),
    loadStructuredData: dart.gFnType(T => [async.Future$(T), [core.String, dart.fnType(async.Future$(T), [core.String])]])
  }));
  dart.setLibraryUri(asset_bundle.CachingAssetBundle, "package:flutter/src/services/asset_bundle.dart");
  dart.setFieldSignature(asset_bundle.CachingAssetBundle, () => ({
    __proto__: dart.getFields(asset_bundle.CachingAssetBundle.__proto__),
    [_stringCache]: dart.finalFieldType(core.Map$(core.String, async.Future$(core.String))),
    [_structuredDataCache]: dart.finalFieldType(core.Map$(core.String, async.Future))
  }));
  asset_bundle.PlatformAssetBundle = class PlatformAssetBundle extends asset_bundle.CachingAssetBundle {
    load(key) {
      return async.async(typed_data.ByteData, function* load() {
        let encoded = convert.utf8.encoder.convert(core._Uri.new({path: core.Uri.encodeFull(key)}).path);
        let asset = (yield binary_messenger.defaultBinaryMessenger.send("flutter/assets", encoded[$buffer][$asByteData]()));
        if (asset == null) dart.throw(assertions.FlutterError.new("Unable to load asset: " + dart.str(key)));
        return asset;
      });
    }
  };
  (asset_bundle.PlatformAssetBundle.new = function() {
    asset_bundle.PlatformAssetBundle.__proto__.new.call(this);
    ;
  }).prototype = asset_bundle.PlatformAssetBundle.prototype;
  dart.addTypeTests(asset_bundle.PlatformAssetBundle);
  dart.setMethodSignature(asset_bundle.PlatformAssetBundle, () => ({
    __proto__: dart.getMethods(asset_bundle.PlatformAssetBundle.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [core.String])
  }));
  dart.setLibraryUri(asset_bundle.PlatformAssetBundle, "package:flutter/src/services/asset_bundle.dart");
  asset_bundle._initRootBundle = function _initRootBundle() {
    return new asset_bundle.PlatformAssetBundle.new();
  };
  dart.defineLazy(asset_bundle, {
    /*asset_bundle.rootBundle*/get rootBundle() {
      return asset_bundle._initRootBundle();
    }
  });
  const _defaultBinaryMessenger = dart.privateName(binding$0, "_defaultBinaryMessenger");
  let C685;
  const _addLicenses = dart.privateName(binding$0, "_addLicenses");
  let C686;
  let C687;
  binding$0.ServicesBinding = class ServicesBinding extends binding.BindingBase {
    static get instance() {
      return binding$0.ServicesBinding._instance;
    }
    static _parseLicenses(rawLicenses) {
      let _licenseSeparator = "\n" + "-"[$times](80) + "\n";
      let result = JSArrayOfLicenseEntry().of([]);
      let licenses = rawLicenses[$split](_licenseSeparator);
      for (let license of licenses) {
        let split = license[$indexOf]("\n\n");
        if (split >= 0) {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(license[$substring](0, split)[$split]("\n"), license[$substring](split + 2)));
        } else {
          result[$add](new licenses$.LicenseEntryWithLineBreaks.new(C687 || CT.C687, license));
        }
      }
      return result;
    }
  };
  binding$0.ServicesBinding[dart.mixinOn] = BindingBase => class ServicesBinding extends BindingBase {
    initInstances() {
      let t13;
      super.initInstances();
      binding$0.ServicesBinding._instance = this;
      this[_defaultBinaryMessenger] = this.createBinaryMessenger();
      t13 = this.window;
      t13.onPlatformMessage = dart.bind(this.defaultBinaryMessenger, 'handlePlatformMessage');
      t13;
      this.initLicenses();
    }
    get defaultBinaryMessenger() {
      return this[_defaultBinaryMessenger];
    }
    createBinaryMessenger() {
      return C685 || CT.C685;
    }
    initLicenses() {
      licenses$.LicenseRegistry.addLicense(dart.bind(this, _addLicenses));
    }
    [_addLicenses]() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* _addLicenses(stream) {
        let rawLicenses = CompleterOfString().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          rawLicenses.complete(asset_bundle.rootBundle.loadString("LICENSE", {cache: false}));
        }), VoidToFutureOfNull()));
        yield rawLicenses.future;
        let parsedLicenses = CompleterOfListOfLicenseEntry().new();
        async.Timer.run(dart.fn(() => async.async(core.Null, function*() {
          parsedLicenses.complete(isolates.compute(core.String, ListOfLicenseEntry(), C686 || CT.C686, yield rawLicenses.future, {debugLabel: "parseLicenses"}));
        }), VoidToFutureOfNull()));
        yield parsedLicenses.future;
        if (stream.addStream(StreamOfLicenseEntry().fromIterable(yield parsedLicenses.future))) return;
        yield;
      }).stream;
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(dart.fn(() => {
        this.registerStringServiceExtension({name: "evict", getter: dart.fn(() => async.async(core.String, function*() {
            return "";
          }), VoidToFutureOfString()), setter: dart.fn(value => async.async(core.Null, (function*() {
            this.evict(value);
          }).bind(this)), StringToFutureOfNull())});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/services/binding.dart", 112, 12, "() {\n      registerStringServiceExtension(\n        // ext.flutter.evict value=foo.png will cause foo.png to be evicted from\n        // the rootBundle cache and cause the entire image cache to be cleared.\n        // This is used by hot reload mode to clear out the cache of resources\n        // that have changed.\n        name: 'evict',\n        getter: () async => '',\n        setter: (String value) async {\n          evict(value);\n        },\n      );\n      return true;\n    }()");
    }
    evict(asset) {
      asset_bundle.rootBundle.evict(asset);
    }
  };
  (binding$0.ServicesBinding[dart.mixinNew] = function() {
    this[_defaultBinaryMessenger] = null;
  }).prototype = binding$0.ServicesBinding.prototype;
  dart.addTypeTests(binding$0.ServicesBinding);
  binding$0.ServicesBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getMethods(binding$0.ServicesBinding.__proto__),
    createBinaryMessenger: dart.fnType(binary_messenger.BinaryMessenger, []),
    initLicenses: dart.fnType(dart.void, []),
    [_addLicenses]: dart.fnType(async.Stream$(licenses$.LicenseEntry), []),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getGetters(binding$0.ServicesBinding.__proto__),
    defaultBinaryMessenger: binary_messenger.BinaryMessenger
  }));
  dart.setLibraryUri(binding$0.ServicesBinding, "package:flutter/src/services/binding.dart");
  dart.setFieldSignature(binding$0.ServicesBinding, () => ({
    __proto__: dart.getFields(binding$0.ServicesBinding.__proto__),
    [_defaultBinaryMessenger]: dart.fieldType(binary_messenger.BinaryMessenger)
  }));
  dart.defineLazy(binding$0.ServicesBinding, {
    /*binding$0.ServicesBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const _sendPlatformMessage = dart.privateName(binding$0, "_sendPlatformMessage");
  binding$0._DefaultBinaryMessenger = class _DefaultBinaryMessenger extends binary_messenger.BinaryMessenger {
    [_sendPlatformMessage](channel, message) {
      let completer = CompleterOfByteData().new();
      ui.window.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message response callback")}));
        }
      }, ByteDataToNull()));
      return completer.future;
    }
    handlePlatformMessage(channel, data, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        let response = null;
        try {
          let handler = binding$0._DefaultBinaryMessenger._handlers[$_get](channel);
          if (handler != null) response = (yield handler(data));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message callback")}));
        } finally {
          callback(response);
        }
      });
    }
    send(channel, message) {
      let handler = binding$0._DefaultBinaryMessenger._mockHandlers[$_get](channel);
      if (handler != null) return handler(message);
      return this[_sendPlatformMessage](channel, message);
    }
    setMessageHandler(channel, handler) {
      if (handler == null)
        binding$0._DefaultBinaryMessenger._handlers[$remove](channel);
      else
        binding$0._DefaultBinaryMessenger._handlers[$_set](channel, handler);
    }
    setMockMessageHandler(channel, handler) {
      if (handler == null)
        binding$0._DefaultBinaryMessenger._mockHandlers[$remove](channel);
      else
        binding$0._DefaultBinaryMessenger._mockHandlers[$_set](channel, handler);
    }
  };
  (binding$0._DefaultBinaryMessenger.__ = function() {
    binding$0._DefaultBinaryMessenger.__proto__.new.call(this);
    ;
  }).prototype = binding$0._DefaultBinaryMessenger.prototype;
  dart.addTypeTests(binding$0._DefaultBinaryMessenger);
  dart.setMethodSignature(binding$0._DefaultBinaryMessenger, () => ({
    __proto__: dart.getMethods(binding$0._DefaultBinaryMessenger.__proto__),
    [_sendPlatformMessage]: dart.fnType(async.Future$(typed_data.ByteData), [core.String, typed_data.ByteData]),
    handlePlatformMessage: dart.fnType(async.Future$(dart.void), [core.String, typed_data.ByteData, dart.fnType(dart.void, [typed_data.ByteData])]),
    send: dart.fnType(async.Future$(typed_data.ByteData), [core.String, typed_data.ByteData]),
    setMessageHandler: dart.fnType(dart.void, [core.String, dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData])]),
    setMockMessageHandler: dart.fnType(dart.void, [core.String, dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData])])
  }));
  dart.setLibraryUri(binding$0._DefaultBinaryMessenger, "package:flutter/src/services/binding.dart");
  dart.defineLazy(binding$0._DefaultBinaryMessenger, {
    /*binding$0._DefaultBinaryMessenger._handlers*/get _handlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    },
    /*binding$0._DefaultBinaryMessenger._mockHandlers*/get _mockHandlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    }
  });
  const _name$7 = dart.privateName(monodrag, "_name");
  let C688;
  let C689;
  let C690;
  let C691;
  monodrag._DragState = class _DragState extends core.Object {
    toString() {
      return this[_name$7];
    }
  };
  (monodrag._DragState.new = function(index, _name) {
    this.index = index;
    this[_name$7] = _name;
    ;
  }).prototype = monodrag._DragState.prototype;
  dart.addTypeTests(monodrag._DragState);
  dart.setLibraryUri(monodrag._DragState, "package:flutter/src/gestures/monodrag.dart");
  dart.setFieldSignature(monodrag._DragState, () => ({
    __proto__: dart.getFields(monodrag._DragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$7]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(monodrag._DragState, ['toString']);
  monodrag._DragState.ready = C688 || CT.C688;
  monodrag._DragState.possible = C689 || CT.C689;
  monodrag._DragState.accepted = C690 || CT.C690;
  monodrag._DragState.values = C691 || CT.C691;
  const _state$0 = dart.privateName(monodrag, "_state");
  const _initialPosition = dart.privateName(monodrag, "_initialPosition");
  const _pendingDragOffset = dart.privateName(monodrag, "_pendingDragOffset");
  const _lastPendingEventTimestamp$ = dart.privateName(monodrag, "_lastPendingEventTimestamp");
  const _initialButtons$0 = dart.privateName(monodrag, "_initialButtons");
  const _lastTransform$ = dart.privateName(monodrag, "_lastTransform");
  const _globalDistanceMoved = dart.privateName(monodrag, "_globalDistanceMoved");
  const _velocityTrackers$ = dart.privateName(monodrag, "_velocityTrackers");
  const _checkDown$ = dart.privateName(monodrag, "_checkDown");
  const _giveUpPointer = dart.privateName(monodrag, "_giveUpPointer");
  const _getDeltaForDetails = dart.privateName(monodrag, "_getDeltaForDetails");
  const _getPrimaryValueFromOffset = dart.privateName(monodrag, "_getPrimaryValueFromOffset");
  const _checkUpdate = dart.privateName(monodrag, "_checkUpdate");
  const _hasSufficientGlobalDistanceToAccept = dart.privateName(monodrag, "_hasSufficientGlobalDistanceToAccept");
  const _checkStart = dart.privateName(monodrag, "_checkStart");
  const _checkCancel$ = dart.privateName(monodrag, "_checkCancel");
  const _checkEnd = dart.privateName(monodrag, "_checkEnd");
  monodrag.DragGestureRecognizer = class DragGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart$0];
    }
    set onStart(value) {
      this[onStart$0] = value;
    }
    get onUpdate() {
      return this[onUpdate$0];
    }
    set onUpdate(value) {
      this[onUpdate$0] = value;
    }
    get onEnd() {
      return this[onEnd$0];
    }
    set onEnd(value) {
      this[onEnd$0] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    isPointerAllowed(event) {
      if (this[_initialButtons$0] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons != this[_initialButtons$0]) {
          return false;
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer, event.transform);
      this[_velocityTrackers$][$_set](event.pointer, new velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state$0], monodrag._DragState.ready)) {
        this[_state$0] = monodrag._DragState.possible;
        this[_initialPosition] = new recognizer.OffsetPair.new({global: event.position, local: event.localPosition});
        this[_initialButtons$0] = event.buttons;
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_globalDistanceMoved] = 0.0;
        this[_lastPendingEventTimestamp$] = event.timeStamp;
        this[_lastTransform$] = event.transform;
        this[_checkDown$]();
      } else if (dart.equals(this[_state$0], monodrag._DragState.accepted)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      let t15;
      if (!!dart.equals(this[_state$0], monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 244, 12, "_state != _DragState.ready");
      if (!dart.test(event.synthesized) && (events.PointerDownEvent.is(event) || events.PointerMoveEvent.is(event))) {
        let tracker = this[_velocityTrackers$][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 248, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.localPosition);
      }
      if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$0]) {
          this[_giveUpPointer](event.pointer);
          return;
        }
        if (dart.equals(this[_state$0], monodrag._DragState.accepted)) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](event.localDelta), primaryDelta: this[_getPrimaryValueFromOffset](event.localDelta), globalPosition: event.position, localPosition: event.localPosition});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](new recognizer.OffsetPair.new({local: event.localDelta, global: event.delta}));
          this[_lastPendingEventTimestamp$] = event.timeStamp;
          this[_lastTransform$] = event.transform;
          let movedLocally = this[_getDeltaForDetails](event.localDelta);
          let localToGlobalTransform = event.transform == null ? null : vector_math_64.Matrix4.tryInvert(event.transform);
          this[_globalDistanceMoved] = dart.notNull(this[_globalDistanceMoved]) + dart.notNull(events.PointerEvent.transformDeltaViaPositions({transform: localToGlobalTransform, untransformedDelta: movedLocally, untransformedEndPosition: event.localPosition}).distance) * (t15 = this[_getPrimaryValueFromOffset](movedLocally), t15 == null ? 1.0 : t15)[$sign];
          if (dart.test(this[_hasSufficientGlobalDistanceToAccept])) this.resolve(arena.GestureDisposition.accepted);
        }
      }
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_giveUpPointer](event.pointer, {reject: events.PointerCancelEvent.is(event) || dart.equals(this[_state$0], monodrag._DragState.possible)});
      }
    }
    acceptGesture(pointer) {
      if (!dart.equals(this[_state$0], monodrag._DragState.accepted)) {
        this[_state$0] = monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = this[_lastPendingEventTimestamp$];
        let transform = this[_lastTransform$];
        let localUpdateDelta = null;
        switch (this.dragStartBehavior) {
          case C32 || CT.C32:
          {
            this[_initialPosition] = this[_initialPosition]['+'](delta);
            localUpdateDelta = ui.Offset.zero;
            break;
          }
          case C31 || CT.C31:
          {
            localUpdateDelta = this[_getDeltaForDetails](delta.local);
            break;
          }
        }
        this[_pendingDragOffset] = recognizer.OffsetPair.zero;
        this[_lastPendingEventTimestamp$] = null;
        this[_lastTransform$] = null;
        this[_checkStart](timestamp);
        if (!dart.equals(localUpdateDelta, ui.Offset.zero) && this.onUpdate != null) {
          let localToGlobal = transform != null ? vector_math_64.Matrix4.tryInvert(transform) : null;
          let correctedLocalPosition = this[_initialPosition].local['+'](localUpdateDelta);
          let globalUpdateDelta = events.PointerEvent.transformDeltaViaPositions({untransformedEndPosition: correctedLocalPosition, untransformedDelta: localUpdateDelta, transform: localToGlobal});
          let updateDelta = new recognizer.OffsetPair.new({local: localUpdateDelta, global: globalUpdateDelta});
          let correctedPosition = this[_initialPosition]['+'](updateDelta);
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: localUpdateDelta, primaryDelta: this[_getPrimaryValueFromOffset](localUpdateDelta), globalPosition: correctedPosition.global, localPosition: correctedPosition.local});
        }
      }
    }
    rejectGesture(pointer) {
      this[_giveUpPointer](pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this[_state$0], monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 337, 12, "_state != _DragState.ready");
      switch (this[_state$0]) {
        case C688 || CT.C688:
        {
          break;
        }
        case C689 || CT.C689:
        {
          this.resolve(arena.GestureDisposition.rejected);
          this[_checkCancel$]();
          break;
        }
        case C690 || CT.C690:
        {
          this[_checkEnd](pointer);
          break;
        }
      }
      this[_velocityTrackers$][$clear]();
      this[_initialButtons$0] = null;
      this[_state$0] = monodrag._DragState.ready;
    }
    [_giveUpPointer](pointer, opts) {
      let reject = opts && 'reject' in opts ? opts.reject : true;
      this.stopTrackingPointer(pointer);
      if (dart.test(reject)) {
        if (dart.test(this[_velocityTrackers$][$containsKey](pointer))) {
          this[_velocityTrackers$][$remove](pointer);
          this.resolvePointer(pointer, arena.GestureDisposition.rejected);
        }
      }
    }
    [_checkDown$]() {
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 367, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragDownDetails.new({globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local});
      if (this.onDown != null) this.invokeCallback(dart.void, "onDown", dart.fn(() => this.onDown(details), VoidTovoid()));
    }
    [_checkStart](timestamp) {
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 377, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition].global, localPosition: this[_initialPosition].local});
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(details), VoidTovoid()));
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      let localPosition = opts && 'localPosition' in opts ? opts.localPosition : null;
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 394, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition, localPosition: localPosition});
      if (this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(details), VoidTovoid()));
    }
    [_checkEnd](pointer) {
      let t15, t15$;
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 407, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = this[_velocityTrackers$][$_get](pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 412, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && dart.test(this.isFlingGesture(estimate))) {
        let velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((t15 = this.minFlingVelocity, t15 == null ? 50 : t15), (t15$ = this.maxFlingVelocity, t15$ == null ? 8000 : t15$));
        details = new drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", VoidToString());
      } else {
        details = new drag_details.DragEndDetails.new({velocity: velocity_tracker.Velocity.zero, primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(details), VoidTovoid()), {debugReport: VoidToString()._check(debugReport)});
    }
    [_checkCancel$]() {
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 443, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", this.onCancel);
    }
    dispose() {
      this[_velocityTrackers$][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C32 || CT.C32;
    this[onDown] = null;
    this[onStart$0] = null;
    this[onUpdate$0] = null;
    this[onEnd$0] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state$0] = monodrag._DragState.ready;
    this[_initialPosition] = null;
    this[_pendingDragOffset] = null;
    this[_lastPendingEventTimestamp$] = null;
    this[_initialButtons$0] = null;
    this[_lastTransform$] = null;
    this[_globalDistanceMoved] = null;
    this[_velocityTrackers$] = new (IdentityMapOfint$VelocityTracker()).new();
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/monodrag.dart", 66, 15, "dragStartBehavior != null");
    monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.DragGestureRecognizer);
  const dragStartBehavior$ = Symbol("DragGestureRecognizer.dragStartBehavior");
  const onDown = Symbol("DragGestureRecognizer.onDown");
  const onStart$0 = Symbol("DragGestureRecognizer.onStart");
  const onUpdate$0 = Symbol("DragGestureRecognizer.onUpdate");
  const onEnd$0 = Symbol("DragGestureRecognizer.onEnd");
  const onCancel = Symbol("DragGestureRecognizer.onCancel");
  const minFlingDistance = Symbol("DragGestureRecognizer.minFlingDistance");
  const minFlingVelocity = Symbol("DragGestureRecognizer.minFlingVelocity");
  const maxFlingVelocity = Symbol("DragGestureRecognizer.maxFlingVelocity");
  dart.setMethodSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_giveUpPointer]: dart.fnType(dart.void, [core.int], {reject: core.bool}),
    [_checkDown$]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration]),
    [_checkUpdate]: dart.fnType(dart.void, [], {delta: ui.Offset, globalPosition: ui.Offset, localPosition: ui.Offset, primaryDelta: core.double, sourceTimeStamp: core.Duration}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel$]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(monodrag.DragGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  dart.setFieldSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onDown: dart.fieldType(dart.fnType(dart.void, [drag_details.DragDownDetails])),
    onStart: dart.fieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    onCancel: dart.fieldType(dart.fnType(dart.void, [])),
    minFlingDistance: dart.fieldType(core.double),
    minFlingVelocity: dart.fieldType(core.double),
    maxFlingVelocity: dart.fieldType(core.double),
    [_state$0]: dart.fieldType(monodrag._DragState),
    [_initialPosition]: dart.fieldType(recognizer.OffsetPair),
    [_pendingDragOffset]: dart.fieldType(recognizer.OffsetPair),
    [_lastPendingEventTimestamp$]: dart.fieldType(core.Duration),
    [_initialButtons$0]: dart.fieldType(core.int),
    [_lastTransform$]: dart.fieldType(vector_math_64.Matrix4),
    [_globalDistanceMoved]: dart.fieldType(core.double),
    [_velocityTrackers$]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate) {
      let t15, t15$;
      let minVelocity = (t15 = this.minFlingVelocity, t15 == null ? 50 : t15);
      let minDistance = (t15$ = this.minFlingDistance, t15$ == null ? 18 : t15$);
      return estimate.pixelsPerSecond.dy[$abs]() > dart.notNull(minVelocity) && estimate.offset.dy[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientGlobalDistanceToAccept]() {
      return this[_globalDistanceMoved][$abs]() > 18;
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.VerticalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.VerticalDragGestureRecognizer.__proto__),
    [_hasSufficientGlobalDistanceToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.VerticalDragGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate) {
      let t15, t15$;
      let minVelocity = (t15 = this.minFlingVelocity, t15 == null ? 50 : t15);
      let minDistance = (t15$ = this.minFlingDistance, t15$ == null ? 18 : t15$);
      return estimate.pixelsPerSecond.dx[$abs]() > dart.notNull(minVelocity) && estimate.offset.dx[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientGlobalDistanceToAccept]() {
      return this[_globalDistanceMoved][$abs]() > 18;
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.HorizontalDragGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_hasSufficientGlobalDistanceToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.HorizontalDragGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  monodrag.PanGestureRecognizer = class PanGestureRecognizer extends monodrag.DragGestureRecognizer {
    isFlingGesture(estimate) {
      let t15, t15$;
      let minVelocity = (t15 = this.minFlingVelocity, t15 == null ? 50 : t15);
      let minDistance = (t15$ = this.minFlingDistance, t15$ == null ? 18 : t15$);
      return dart.notNull(estimate.pixelsPerSecond.distanceSquared) > dart.notNull(minVelocity) * dart.notNull(minVelocity) && dart.notNull(estimate.offset.distanceSquared) > dart.notNull(minDistance) * dart.notNull(minDistance);
    }
    get [_hasSufficientGlobalDistanceToAccept]() {
      return this[_globalDistanceMoved][$abs]() > 36;
    }
    [_getDeltaForDetails](delta) {
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.PanGestureRecognizer);
  dart.setMethodSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.PanGestureRecognizer.__proto__),
    isFlingGesture: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.PanGestureRecognizer.__proto__),
    [_hasSufficientGlobalDistanceToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.PanGestureRecognizer, "package:flutter/src/gestures/monodrag.dart");
  haptic_feedback.HapticFeedback = class HapticFeedback extends core.Object {
    static vibrate() {
      return async.async(dart.void, function* vibrate() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate");
      });
    }
    static lightImpact() {
      return async.async(dart.void, function* lightImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.lightImpact");
      });
    }
    static mediumImpact() {
      return async.async(dart.void, function* mediumImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.mediumImpact");
      });
    }
    static heavyImpact() {
      return async.async(dart.void, function* heavyImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.heavyImpact");
      });
    }
    static selectionClick() {
      return async.async(dart.void, function* selectionClick() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "HapticFeedback.vibrate", "HapticFeedbackType.selectionClick");
      });
    }
  };
  (haptic_feedback.HapticFeedback.__ = function() {
    ;
  }).prototype = haptic_feedback.HapticFeedback.prototype;
  dart.addTypeTests(haptic_feedback.HapticFeedback);
  dart.setLibraryUri(haptic_feedback.HapticFeedback, "package:flutter/src/services/haptic_feedback.dart");
  const _offset = dart.privateName(lsq_solver, "_offset");
  const _length = dart.privateName(lsq_solver, "_length");
  const _elements = dart.privateName(lsq_solver, "_elements");
  lsq_solver._Vector = class _Vector extends core.Object {
    _get(i) {
      return this[_elements][$_get](dart.notNull(i) + dart.notNull(this[_offset]));
    }
    _set(i, value$) {
      let value = value$;
      this[_elements][$_set](dart.notNull(i) + dart.notNull(this[_offset]), value);
      return value$;
    }
    ['*'](a) {
      let result = 0.0;
      for (let i = 0; i < dart.notNull(this[_length]); i = i + 1)
        result = result + dart.notNull(this._get(i)) * dart.notNull(a._get(i));
      return result;
    }
    norm() {
      return math.sqrt(this['*'](this));
    }
  };
  (lsq_solver._Vector.new = function(size) {
    this[_offset] = 0;
    this[_length] = size;
    this[_elements] = _native_typed_data.NativeFloat64List.new(size);
    ;
  }).prototype = lsq_solver._Vector.prototype;
  (lsq_solver._Vector.fromVOL = function(values, offset, length) {
    this[_offset] = offset;
    this[_length] = length;
    this[_elements] = values;
    ;
  }).prototype = lsq_solver._Vector.prototype;
  dart.addTypeTests(lsq_solver._Vector);
  dart.setMethodSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getMethods(lsq_solver._Vector.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double]),
    '*': dart.fnType(core.double, [lsq_solver._Vector]),
    norm: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(lsq_solver._Vector, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getFields(lsq_solver._Vector.__proto__),
    [_offset]: dart.finalFieldType(core.int),
    [_length]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  const _columns = dart.privateName(lsq_solver, "_columns");
  lsq_solver._Matrix = class _Matrix extends core.Object {
    get(row, col) {
      return this[_elements][$_get](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col));
    }
    set(row, col, value) {
      this[_elements][$_set](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col), value);
    }
    getRow(row) {
      return new lsq_solver._Vector.fromVOL(this[_elements], dart.notNull(row) * dart.notNull(this[_columns]), this[_columns]);
    }
  };
  (lsq_solver._Matrix.new = function(rows, cols) {
    this[_columns] = cols;
    this[_elements] = _native_typed_data.NativeFloat64List.new(dart.notNull(rows) * dart.notNull(cols));
    ;
  }).prototype = lsq_solver._Matrix.prototype;
  dart.addTypeTests(lsq_solver._Matrix);
  dart.setMethodSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getMethods(lsq_solver._Matrix.__proto__),
    get: dart.fnType(core.double, [core.int, core.int]),
    set: dart.fnType(dart.void, [core.int, core.int, core.double]),
    getRow: dart.fnType(lsq_solver._Vector, [core.int])
  }));
  dart.setLibraryUri(lsq_solver._Matrix, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getFields(lsq_solver._Matrix.__proto__),
    [_columns]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  lsq_solver.PolynomialFit = class PolynomialFit extends core.Object {
    get coefficients() {
      return this[coefficients];
    }
    set coefficients(value) {
      super.coefficients = value;
    }
    get confidence() {
      return this[confidence];
    }
    set confidence(value) {
      this[confidence] = value;
    }
  };
  (lsq_solver.PolynomialFit.new = function(degree) {
    this[confidence] = null;
    this[coefficients] = _native_typed_data.NativeFloat64List.new(dart.notNull(degree) + 1);
    ;
  }).prototype = lsq_solver.PolynomialFit.prototype;
  dart.addTypeTests(lsq_solver.PolynomialFit);
  const coefficients = Symbol("PolynomialFit.coefficients");
  const confidence = Symbol("PolynomialFit.confidence");
  dart.setLibraryUri(lsq_solver.PolynomialFit, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getFields(lsq_solver.PolynomialFit.__proto__),
    coefficients: dart.finalFieldType(core.List$(core.double)),
    confidence: dart.fieldType(core.double)
  }));
  lsq_solver.LeastSquaresSolver = class LeastSquaresSolver extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get w() {
      return this[w$];
    }
    set w(value) {
      super.w = value;
    }
    solve(degree) {
      let t16, t15, t16$, t15$;
      if (dart.notNull(degree) > dart.notNull(this.x[$length])) return null;
      let result = new lsq_solver.PolynomialFit.new(degree);
      let m = this.x[$length];
      let n = dart.notNull(degree) + 1;
      let a = new lsq_solver._Matrix.new(n, m);
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        a.set(0, h, this.w[$_get](h));
        for (let i = 1; i < n; i = i + 1)
          a.set(i, h, dart.notNull(a.get(i - 1, h)) * dart.notNull(this.x[$_get](h)));
      }
      let q = new lsq_solver._Matrix.new(n, m);
      let r = new lsq_solver._Matrix.new(n, n);
      for (let j = 0; j < n; j = j + 1) {
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, a.get(j, h));
        for (let i = 0; i < j; i = i + 1) {
          let dot = q.getRow(j)['*'](q.getRow(i));
          for (let h = 0; h < dart.notNull(m); h = h + 1)
            q.set(j, h, dart.notNull(q.get(j, h)) - dart.notNull(dot) * dart.notNull(q.get(i, h)));
        }
        let norm = q.getRow(j).norm();
        if (dart.notNull(norm) < 1e-10) {
          return null;
        }
        let inverseNorm = 1.0 / dart.notNull(norm);
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, dart.notNull(q.get(j, h)) * inverseNorm);
        for (let i = 0; i < n; i = i + 1)
          r.set(j, i, i < j ? 0.0 : q.getRow(j)['*'](a.getRow(i)));
      }
      let wy = new lsq_solver._Vector.new(m);
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        wy._set(h, dart.notNull(this.y[$_get](h)) * dart.notNull(this.w[$_get](h)));
      for (let i = n - 1; i >= 0; i = i - 1) {
        result.coefficients[$_set](i, q.getRow(i)['*'](wy));
        for (let j = n - 1; j > i; j = j - 1) {
          t15 = result.coefficients;
          t16 = i;
          t15[$_set](t16, dart.notNull(t15[$_get](t16)) - dart.notNull(r.get(i, j)) * dart.notNull(result.coefficients[$_get](j)));
        }
        t15$ = result.coefficients;
        t16$ = i;
        t15$[$_set](t16$, dart.notNull(t15$[$_get](t16$)) / dart.notNull(r.get(i, i)));
      }
      let yMean = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        yMean = yMean + dart.notNull(this.y[$_get](h));
      yMean = yMean / dart.notNull(m);
      let sumSquaredError = 0.0;
      let sumSquaredTotal = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        let term = 1.0;
        let err = dart.notNull(this.y[$_get](h)) - dart.notNull(result.coefficients[$_get](0));
        for (let i = 1; i < n; i = i + 1) {
          term = term * dart.notNull(this.x[$_get](h));
          err = err - term * dart.notNull(result.coefficients[$_get](i));
        }
        sumSquaredError = sumSquaredError + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * err * err;
        let v = dart.notNull(this.y[$_get](h)) - yMean;
        sumSquaredTotal = sumSquaredTotal + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * v * v;
      }
      result.confidence = sumSquaredTotal <= 1e-10 ? 1.0 : 1.0 - sumSquaredError / sumSquaredTotal;
      return result;
    }
  };
  (lsq_solver.LeastSquaresSolver.new = function(x, y, w) {
    this[x$] = x;
    this[y$] = y;
    this[w$] = w;
    if (!(x[$length] == y[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/lsq_solver.dart", 86, 14, "x.length == y.length");
    if (!(y[$length] == w[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/gestures/lsq_solver.dart", 87, 14, "y.length == w.length");
    ;
  }).prototype = lsq_solver.LeastSquaresSolver.prototype;
  dart.addTypeTests(lsq_solver.LeastSquaresSolver);
  const x$ = Symbol("LeastSquaresSolver.x");
  const y$ = Symbol("LeastSquaresSolver.y");
  const w$ = Symbol("LeastSquaresSolver.w");
  dart.setMethodSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getMethods(lsq_solver.LeastSquaresSolver.__proto__),
    solve: dart.fnType(lsq_solver.PolynomialFit, [core.int])
  }));
  dart.setLibraryUri(lsq_solver.LeastSquaresSolver, "package:flutter/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getFields(lsq_solver.LeastSquaresSolver.__proto__),
    x: dart.finalFieldType(core.List$(core.double)),
    y: dart.finalFieldType(core.List$(core.double)),
    w: dart.finalFieldType(core.List$(core.double))
  }));
  dart.trackLibraries("packages/flutter/src/gestures/arena", {
    "package:flutter/src/services/system_chrome.dart": system_chrome,
    "package:flutter/src/services/text_editing.dart": text_editing,
    "package:flutter/src/gestures/eager.dart": eager,
    "package:flutter/src/services/system_sound.dart": system_sound,
    "package:flutter/src/gestures/drag.dart": drag$,
    "package:flutter/src/services/raw_keyboard_android.dart": raw_keyboard_android,
    "package:flutter/src/services/text_formatter.dart": text_formatter,
    "package:flutter/src/services/raw_keyboard_fuchsia.dart": raw_keyboard_fuchsia,
    "package:flutter/src/services/clipboard.dart": clipboard,
    "package:flutter/src/services/raw_keyboard_linux.dart": raw_keyboard_linux,
    "package:flutter/src/services/binary_messenger.dart": binary_messenger,
    "package:flutter/src/services/message_codec.dart": message_codec,
    "package:flutter/src/gestures/recognizer.dart": recognizer,
    "package:flutter/src/gestures/multidrag.dart": multidrag,
    "package:flutter/src/gestures/hit_test.dart": hit_test,
    "package:flutter/src/services/platform_channel.dart": platform_channel,
    "package:flutter/src/services/system_navigator.dart": system_navigator,
    "package:flutter/src/gestures/binding.dart": binding$,
    "package:flutter/src/services/raw_keyboard.dart": raw_keyboard,
    "package:flutter/src/gestures/pointer_signal_resolver.dart": pointer_signal_resolver,
    "package:flutter/src/services/system_channels.dart": system_channels,
    "package:flutter/src/gestures/constants.dart": constants,
    "package:flutter/src/services/raw_keyboard_macos.dart": raw_keyboard_macos,
    "package:flutter/src/gestures/tap.dart": tap,
    "package:flutter/src/gestures/velocity_tracker.dart": velocity_tracker,
    "package:flutter/src/gestures/scale.dart": scale,
    "package:flutter/src/gestures/pointer_router.dart": pointer_router,
    "package:flutter/src/gestures/arena.dart": arena,
    "package:flutter/src/gestures/converter.dart": converter,
    "package:flutter/src/gestures/force_press.dart": force_press,
    "package:flutter/src/scheduler/debug.dart": debug,
    "package:flutter/src/gestures/drag_details.dart": drag_details,
    "package:flutter/src/services/font_loader.dart": font_loader,
    "package:flutter/src/gestures/events.dart": events,
    "package:flutter/src/gestures/long_press.dart": long_press,
    "package:flutter/src/services/platform_messages.dart": platform_messages,
    "package:flutter/src/services/message_codecs.dart": message_codecs,
    "package:flutter/src/services/keyboard_key.dart": keyboard_key,
    "package:flutter/src/scheduler/priority.dart": priority,
    "package:flutter/src/services/text_input.dart": text_input,
    "package:flutter/src/services/keyboard_maps.dart": keyboard_maps,
    "package:flutter/src/gestures/debug.dart": debug$,
    "package:flutter/src/gestures/team.dart": team,
    "package:flutter/src/gestures/multitap.dart": multitap,
    "package:flutter/src/services/asset_bundle.dart": asset_bundle,
    "package:flutter/src/services/binding.dart": binding$0,
    "package:flutter/src/gestures/monodrag.dart": monodrag,
    "package:flutter/src/services/haptic_feedback.dart": haptic_feedback,
    "package:flutter/src/gestures/lsq_solver.dart": lsq_solver
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../services/system_chrome.dart","../services/text_editing.dart","arena.dart","recognizer.dart","eager.dart","../services/system_sound.dart","drag.dart","../services/raw_keyboard.dart","../services/raw_keyboard_android.dart","../services/text_formatter.dart","../services/raw_keyboard_fuchsia.dart","../services/clipboard.dart","../services/raw_keyboard_linux.dart","../services/binary_messenger.dart","../services/message_codec.dart","multidrag.dart","hit_test.dart","../services/platform_channel.dart","../services/system_navigator.dart","binding.dart","pointer_signal_resolver.dart","../services/system_channels.dart","constants.dart","../services/raw_keyboard_macos.dart","tap.dart","velocity_tracker.dart","scale.dart","pointer_router.dart","converter.dart","force_press.dart","../scheduler/debug.dart","drag_details.dart","../services/font_loader.dart","events.dart","long_press.dart","../services/platform_messages.dart","../services/message_codecs.dart","../services/keyboard_key.dart","../scheduler/priority.dart","../services/text_input.dart","../services/keyboard_maps.dart","debug.dart","team.dart","multitap.dart","../services/asset_bundle.dart","../services/binding.dart","monodrag.dart","../services/haptic_feedback.dart","lsq_solver.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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DACZ,SAAS,sBACA,sCACM,uCACF,mBAAmB,aAEpC,wBACC,4BACG,+BACA,4BACH,4BACG,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,wBACO,6BACF,SAAS,6CACD,MAAT,sBAAS,OAAG;IAE1B;;;QAvFW;QACS;QACd;QACG;QACA;QACA;QACA;QACH;QACC;QACE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACF;QACG;QACU;AACf,kEACa,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,iBACH,aAAa,SACrB,KAAK,cACA,UAAU,WACb,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,eACG,WAAW,aACb,SAAS,YACV,QAAQ;;EACnB;;;;;;;;gBA+IgC;;AACpC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAEI,gCAAmC,sCAAkB,SAAS,EAAE;AAC7E,YAAO,8CACM,sBACL,mBACE,uBACE,8BACK,mBAAmB,SAC3B,wBACkB,2DACZ,SAAS,sBACA,sCACM,uCACF,mBAAmB,aAEpC,wBACC,4BACG,+BACA,4BACH,4BACG,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,wBACO,6BACF,SAAS,6CACD,MAAT,sBAAS,OAAG;IAE1B;;;QA1HW;QACS;QACd;QACG;QACA;QACA;QACA;QACH;QACC;QACE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACF;QACG;QACU;AACf,kEACa,SAAS,QACd,IAAI,UACF,MAAM,YACJ,QAAQ,iBACH,aAAa,SACrB,KAAK,cACA,UAAU,WACb,OAAO,QACV,iBACI,QAAQ,YACR,kBACG,WAAW,eACX,WAAW,YACd,QAAQ,eACL,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,e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AAI,aACC,SAAS,YACV,QAAQ;;EACnB;;;;;;;;gBAqG+B;;AACnC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAEI,gCAAmC,sCAAkB,SAAS,EAAE;AAE7E,YAAO,6CACM,yBACF,oBACH,mBACE,uBACE,8BACK,mBAAmB,SAC3B,wBACkB,2DACZ,SAAS,sBACA,sCACM,uCACF,mBAAmB,aAEpC,wBACC,yBACA,4BACG,+BACA,+BACA,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,yBACQ,gCACD,6BACF,SAAS,4CACD,MAAT,sBAAS,OAAG;IAE1B;;;QA9FW;QACL;QACc;QACd;QACG;QACA;QACA;QACA;QACH;QACC;QACE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACH;QACC;QACG;QACS;AACd,iEACa,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YACJ,QAAQ,iBACH,aAAa,SACrB,KAAK,cACA,UAAU,WACb,OAAO,QACV,gBACI,QAAQ,YACR,QAAQ,eACL,WAAW,eACX,WAAW,YACd,kBACG,WAAW,QAClB,IAAI,eACG,WAAW,eACX,WAAW,aACb,SAAS,aACT,SAAS,eACP,WAAW,QAClB,IAAI,gBACI,YAAY,eACb,WAAW,aACb,SAAS,YACV,QAAQ;;EACnB;;;;;;;;gBAqG6B;;AACjC,UAAI,AAAU,SAAD,IAAI,QAAkB,YAAV,SAAS,EAAS;AACzC,cAAO;;AAET,YAAO,2CACM,yBACF,oBACH,mBACE,uBACE,8BACkB,sCAAkB,SAAS,EAAE,yBAChD,wBACC,yBACA,4BACG,+BACA,4BACH,4BACG,wBACP,wBACO,+BACA,6BACF,2BACA,6BACE,wBACP,sBACK,SAAS,0CACD,MAAT,sBAAS,OAAG;IAE1B;;;QA/EW;QACL;QACc;QACd;QACG;QACA;QACH;QACC;QAGE;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACC;QACO;AACZ,+DACa,SAAS,WACX,OAAO,QACV,IAAI,UACF,MAAM,YAC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","file":"arena.ddc.js"}');
  // Exports:
  return {
    src__services__system_chrome: system_chrome,
    src__services__text_editing: text_editing,
    src__gestures__eager: eager,
    src__services__system_sound: system_sound,
    src__gestures__drag: drag$,
    src__services__raw_keyboard_android: raw_keyboard_android,
    src__services__text_formatter: text_formatter,
    src__services__raw_keyboard_fuchsia: raw_keyboard_fuchsia,
    src__services__clipboard: clipboard,
    src__services__raw_keyboard_linux: raw_keyboard_linux,
    src__services__binary_messenger: binary_messenger,
    src__services__message_codec: message_codec,
    src__gestures__recognizer: recognizer,
    src__gestures__multidrag: multidrag,
    src__gestures__hit_test: hit_test,
    src__services__platform_channel: platform_channel,
    src__services__system_navigator: system_navigator,
    src__gestures__binding: binding$,
    src__services__raw_keyboard: raw_keyboard,
    src__gestures__pointer_signal_resolver: pointer_signal_resolver,
    src__services__system_channels: system_channels,
    src__gestures__constants: constants,
    src__services__raw_keyboard_macos: raw_keyboard_macos,
    src__gestures__tap: tap,
    src__gestures__velocity_tracker: velocity_tracker,
    src__gestures__scale: scale,
    src__gestures__pointer_router: pointer_router,
    src__gestures__arena: arena,
    src__gestures__converter: converter,
    src__gestures__force_press: force_press,
    src__scheduler__debug: debug,
    src__gestures__drag_details: drag_details,
    src__services__font_loader: font_loader,
    src__gestures__events: events,
    src__gestures__long_press: long_press,
    src__services__platform_messages: platform_messages,
    src__services__message_codecs: message_codecs,
    src__services__keyboard_key: keyboard_key,
    src__scheduler__priority: priority,
    src__services__text_input: text_input,
    src__services__keyboard_maps: keyboard_maps,
    src__gestures__debug: debug$,
    src__gestures__team: team,
    src__gestures__multitap: multitap,
    src__services__asset_bundle: asset_bundle,
    src__services__binding: binding$0,
    src__gestures__monodrag: monodrag,
    src__services__haptic_feedback: haptic_feedback,
    src__gestures__lsq_solver: lsq_solver
  };
});

//# sourceMappingURL=arena.ddc.js.map
