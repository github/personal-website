// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart'
    hide TextSelectionControls, TextSelectionOverlay;
import 'package:flutter/rendering.dart' show ViewportOffset;
import 'package:flutter/services.dart'
    show TextRange, TextInputAction, TextInputConfiguration;
import 'package:flutter_logger/flutter_logger.dart';

import '../extensions.dart';
import '../rendering/rich_editable.dart';
import '../services/rich_text_parser.dart';
import '../services/text_input.dart';
import '../widgets/text_selection.dart';

/// Signature for the callback that reports when the user changes the selection
/// (including the cursor location).
typedef void SelectionChangedCallback(TextSelection selection, bool longPress);

const Duration _kCursorBlinkHalfPeriod = const Duration(milliseconds: 500);

class StyleController extends ValueNotifier<TextStyle> {
  StyleController({TextStyle style}) : super(style ?? material);

  static const TextStyle material = const TextStyle(
      fontFamily: 'Roboto',
      inherit: true,
      color: Colors.black87,
      fontSize: 16.0,
      fontWeight: FontWeight.w400,
      textBaseline: TextBaseline.alphabetic);

  void setState(RichEditableTextState state) {}

  void removeState() {}
}

/// A controller for an editable text field.
///
/// Whenever the user modifies a text field with an associated
/// [RichTextEditingController], the text field updates [value] and the controller
/// notifies its listeners. Listeners can then read the [text] and [selection]
/// properties to learn what the user has typed or how the selection has been
/// updated.
///
/// Similarly, if you modify the [text] or [selection] properties, the text
/// field will be notified and will update itself appropriately.
///
/// A [RichTextEditingController] can also be used to provide an initial value for a
/// text field. If you build a text field with a controller that already has
/// [text], the text field will use that text as its initial value.
///
/// See also:
///
///  * [TextField], which is a Material Design text field that can be controlled
///    with a [TextEditingController].
///  * [RichEditableText], which is a raw region of editable text that can be
///    controlled with a [TextEditingController].
class RichTextEditingController extends ValueNotifier<RichTextEditingValue> {
  /// Creates a controller for an editable text field.
  ///
  /// This constructor treats a null [textSpan] argument as if it were the empty
  /// string.
  RichTextEditingController({TextSpan textSpan})
      : super(textSpan == null
            ? RichTextEditingValue.empty
            : new RichTextEditingValue(value: textSpan));

  /// Creates a controller for an editiable text field from an initial [RichTextEditingValue].
  ///
  /// This constructor treats a null [value] argument as if it were
  /// [RichTextEditingValue.empty].
  RichTextEditingController.fromValue(RichTextEditingValue value)
      : super(value ?? RichTextEditingValue.empty);

  /// The current [TextSpan] the user is editing.
  TextSpan get textSpan => value.value;

  /// Setting this will notify all the listeners of this [RichTextEditingController]
  /// that they need to update (it calls [notifyListeners]). For this reason,
  /// this value should only be set between frames, e.g. in response to user
  /// actions, not during the build, layout, or paint phases.
  set text(TextSpan newTextSpan) {
    value = value.copyWith(
        value: newTextSpan,
        selection: const TextSelection.collapsed(offset: -1),
        composing: TextRange.empty);
  }

  /// The currently selected [text].
  ///
  /// If the selection is collapsed, then this property gives the offset of the
  /// cursor within the text.
  TextSelection get selection => value.selection;

  /// Setting this will notify all the listeners of this [RichTextEditingController]
  /// that they need to update (it calls [notifyListeners]). For this reason,
  /// this value should only be set between frames, e.g. in response to user
  /// actions, not during the build, layout, or paint phases.
  set selection(TextSelection newSelection) {
    if (newSelection.start > Extensions.length(textSpan) ||
        newSelection.end > Extensions.length(textSpan))
      throw new FlutterError('invalid text selection: $newSelection');
    value = value.copyWith(selection: newSelection, composing: TextRange.empty);
  }

  /// Set the [value] to empty.
  ///
  /// After calling this function, [text] will be the empty string and the
  /// selection will be invalid.
  ///
  /// Calling this will notify all the listeners of this [RichTextEditingController]
  /// that they need to update (it calls [notifyListeners]). For this reason,
  /// this method should only be called between frames, e.g. in response to user
  /// actions, not during the build, layout, or paint phases.
  void clear() {
    value = RichTextEditingValue.empty;
  }

  /// Set the composing region to an empty range.
  ///
  /// The composing region is the range of text that is still being composed.
  /// Calling this function indicates that the user is done composing that
  /// region.
  ///
  /// Calling this will notify all the listeners of this [RichTextEditingController]
  /// that they need to update (it calls [notifyListeners]). For this reason,
  /// this method should only be called between frames, e.g. in response to user
  /// actions, not during the build, layout, or paint phases.
  void clearComposing() {
    value = value.copyWith(composing: TextRange.empty);
  }
}

/// A basic text input field.
///
/// This widget interacts with the [TextInput] service to let the user edit the
/// text it contains. It also provides scrolling, selection, and cursor
/// movement. This widget does not provide any focus management (e.g.,
/// tap-to-focus).
///
/// Rather than using this widget directly, consider using [TextField], which
/// is a full-featured, material-design text input field with placeholder text,
/// labels, and [Form] integration.
///
/// See also:
///
///  * [TextField], which is a full-featured, material-design text input field
///    with placeholder text, labels, and [Form] integration.
class RichEditableText extends StatefulWidget {
  /// Creates a basic text input control.
  ///
  /// The [maxLines] property can be set to null to remove the restriction on
  /// the number of lines. By default, it is one, meaning this is a single-line
  /// text field. [maxLines] must be null or greater than zero.
  ///
  /// If [keyboardType] is not set or is null, it will default to
  /// [TextInputType.text] unless [maxLines] is greater than one, when it will
  /// default to [TextInputType.multiline].
  ///
  /// The [controller], [focusNode], [style], [cursorColor], and [textAlign]
  /// arguments must not be null.
  RichEditableText({
    Key key,
    @required this.controller,
    @required this.styleController,
    @required this.focusNode,
    this.autocorrect: true,
    @required this.style,
    @required this.cursorColor,
    this.textAlign: TextAlign.start,
    this.textDirection,
    this.textScaleFactor,
    this.maxLines: 1,
    this.autofocus: false,
    this.selectionColor,
    this.selectionControls,
    TextInputType keyboardType,
    this.onChanged,
    this.onSubmitted,
    this.onSelectionChanged,
  })  : assert(controller != null),
        assert(focusNode != null),
        assert(autocorrect != null),
        assert(style != null),
        assert(cursorColor != null),
        assert(textAlign != null),
        assert(maxLines == null || maxLines > 0),
        assert(autofocus != null),
        keyboardType = keyboardType ??
            (maxLines == 1 ? TextInputType.text : TextInputType.multiline),
        super(key: key);

  /// Controls the text being edited.
  final RichTextEditingController controller;

  final StyleController styleController;

  /// Controls whether this widget has keyboard focus.
  final FocusNode focusNode;

  /// Whether to enable autocorrection.
  ///
  /// Defaults to true.
  final bool autocorrect;

  /// The text style to use for the editable text.
  final TextStyle style;

  /// How the text should be aligned horizontally.
  ///
  /// Defaults to [TextAlign.start].
  final TextAlign textAlign;

  /// The directionality of the text.
  ///
  /// This decides how [textAlign] values like [TextAlign.start] and
  /// [TextAlign.end] are interpreted.
  ///
  /// This is also used to disambiguate how to render bidirectional text. For
  /// example, if the text is an English phrase followed by a Hebrew phrase,
  /// in a [TextDirection.ltr] context the English phrase will be on the left
  /// and the Hebrew phrase to its right, while in a [TextDirection.rtl]
  /// context, the English phrase will be on the right and the Hebrow phrase on
  /// its left.
  ///
  /// Defaults to the ambient [Directionality], if any.
  final TextDirection textDirection;

  /// The number of font pixels for each logical pixel.
  ///
  /// For example, if the text scale factor is 1.5, text will be 50% larger than
  /// the specified font size.
  ///
  /// Defaults to the [MediaQueryData.textScaleFactor] obtained from the ambient
  /// [MediaQuery], or 1.0 if there is no [MediaQuery] in scope.
  final double textScaleFactor;

  /// The color to use when painting the cursor.
  final Color cursorColor;

  /// The maximum number of lines for the text to span, wrapping if necessary.
  ///
  /// If this is 1 (the default), the text will not wrap, but will scroll
  /// horizontally instead.
  ///
  /// If this is null, there is no limit to the number of lines. If it is not
  /// null, the value must be greater than zero.
  final int maxLines;

  /// Whether this input field should focus itself if nothing else is already focused.
  /// If true, the keyboard will open as soon as this input obtains focus. Otherwise,
  /// the keyboard is only shown after the user taps the text field.
  ///
  /// Defaults to false.
  final bool autofocus;

  /// The color to use when painting the selection.
  final Color selectionColor;

  /// Optional delegate for building the text selection handles and toolbar.
  final TextSelectionControls selectionControls;

  /// The type of keyboard to use for editing the text.
  final TextInputType keyboardType;

  /// Called when the text being edited changes.
  final ValueChanged<String> onChanged;

  /// Called when the user indicates that they are done editing the text in the field.
  final ValueChanged<String> onSubmitted;

  /// Called when the user changes the selection of text (including the cursor
  /// location).
  final SelectionChangedCallback onSelectionChanged;

  @override
  RichEditableTextState createState() => new RichEditableTextState();

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder description) {
    super.debugFillProperties(description);
    description.add(new DiagnosticsProperty<RichTextEditingController>(
        'controller', controller));
    description.add(new DiagnosticsProperty<FocusNode>('focusNode', focusNode));
    description.add(new DiagnosticsProperty<bool>('autocorrect', autocorrect,
        defaultValue: true));
    style?.debugFillProperties(description);
    description.add(new EnumProperty<TextAlign>('textAlign', textAlign,
        defaultValue: null));
    description.add(new EnumProperty<TextDirection>(
        'textDirection', textDirection,
        defaultValue: null));
    description.add(new DoubleProperty('textScaleFactor', textScaleFactor,
        defaultValue: null));
    description.add(new IntProperty('maxLines', maxLines, defaultValue: 1));
    description.add(new DiagnosticsProperty<bool>('autofocus', autofocus,
        defaultValue: false));
    description.add(new EnumProperty<TextInputType>(
        'keyboardType', keyboardType,
        defaultValue: null));
  }
}

/// State for a [RichEditableText].
class RichEditableTextState extends State<RichEditableText>
    with AutomaticKeepAliveClientMixin
    implements TextInputClient<RichTextEditingValue> {
  final Log log = new Log("RichEditableTextState");

  Timer _cursorTimer;
  final ValueNotifier<bool> _showCursor = new ValueNotifier<bool>(false);

  TextInputConnection _textInputConnection;
  TextSelectionOverlay _selectionOverlay;

  final ScrollController _scrollController = new ScrollController();
  final LayerLink _layerLink = new LayerLink();
  bool _didAutoFocus = false;

  /// Don't dispose the selection and the selection overlay if the focus is lost
  /// because of toolbar event.
  bool saveValueBeforeFocusLoss = false;

  bool closeKeyboardIfNeeded = true;

  /// Restore the keyboard when the focus is regained, after being lost by an
  /// toolbar event.
  bool restoreKeyboard = false;

  @override
  bool get wantKeepAlive => widget.focusNode.hasFocus;

  TextStyle _currentSelectedStyle;
  StyleController _styleController;

  // State lifecycle:
  @override
  void initState() {
    super.initState();
    log.d(
        "--------------------------------------------------------------initState");
    widget.controller.addListener(_didChangeTextEditingValue);
    widget.focusNode.addListener(_handleFocusChanged);
    _scrollController.addListener(() {
      _selectionOverlay?.updateForScroll();
    });

    if (widget.styleController == null)
      _styleController = new StyleController(
          style: widget.style ?? Theme.of(context).textTheme.subhead);
    else {
      _styleController = widget.styleController;
      assert(_styleController.value ==
          (widget.style ?? Theme.of(context).textTheme.subhead));
    }
    _styleController.addListener(_styleChangedListener);
    _styleController.setState(this);
    _currentSelectedStyle = _styleController.value;

    _editingValue = _editingValue.copyWith(
        value: Extensions.copySpanWith(
            base: _editingValue.value, style: _styleController.value));
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    log.d(
        "--------------------------------------------------didChangeDependencies");
    if (!_didAutoFocus && widget.autofocus) {
      FocusScope.of(context).autofocus(widget.focusNode);
      _didAutoFocus = true;
    }
  }

  @override
  void didUpdateWidget(RichEditableText oldWidget) {
    super.didUpdateWidget(oldWidget);
    log.d(
        "--------------------------------------------------------didUpdateWidget");
    if (widget.controller != oldWidget.controller) {
      oldWidget.controller.removeListener(_didChangeTextEditingValue);
      widget.controller.addListener(_didChangeTextEditingValue);
      _updateRemoteEditingValueIfNeeded();
    }
    if (widget.focusNode != oldWidget.focusNode) {
      oldWidget.focusNode.removeListener(_handleFocusChanged);
      widget.focusNode.addListener(_handleFocusChanged);
      updateKeepAlive();
    }

    if (widget.styleController != oldWidget.styleController) {
      oldWidget.styleController.removeListener(_styleChangedListener);
      oldWidget.styleController.removeState();
      widget.styleController.addListener(_styleChangedListener);
      widget.styleController.setState(this);

      _currentSelectedStyle = widget.styleController.value;
    }
  }

  @override
  void dispose() {
    log.d(
        "----------------------------------------------------------------dispose");
    widget.styleController.removeListener(_styleChangedListener);
    widget.styleController.removeState();

    widget.controller.removeListener(_didChangeTextEditingValue);
    _closeInputConnectionIfNeeded();
    assert(!_hasInputConnection);
    _stopCursorTimer();
    assert(_cursorTimer == null);
    _selectionOverlay?.dispose();
    _selectionOverlay = null;
    widget.focusNode.removeListener(_handleFocusChanged);

    super.dispose();
  }

  void _styleChangedListener() {
    var currentSpan = _editingValue.value;
    var currentSelection = _editingValue.selection;

    if (currentSelection.baseOffset != currentSelection.extentOffset) {
      var newSpan = RichTextEditingValueParser.updateSpansWithStyle(currentSpan,
          currentSelection, _currentSelectedStyle, _styleController.value);

      _editingValue = _editingValue.copyWith(value: newSpan);
    }

    _currentSelectedStyle = _styleController.value;
  }

  // TextInputClient implementation:
  RichTextEditingValue _lastKnownRemoteTextEditingValue;

  @override
  void updateEditingValue(RichTextEditingValue value) {
    bool textChanged = value.value != _editingValue.value;
    if (textChanged) _hideSelectionOverlayIfNeeded();

    _lastKnownRemoteTextEditingValue = value;
    _formatAndSetValue(value, textChanged);
  }

  @override
  void performAction(TextInputAction action) {
    switch (action) {
      case TextInputAction.done:
        widget.controller.clearComposing();
        widget.focusNode.unfocus();
        if (widget.onSubmitted != null)
          widget.onSubmitted(_editingValue.value.toPlainText());
        break;
      case TextInputAction.newline:
        // Do nothing for a "newline" action: the newline is already inserted.
        break;
      case TextInputAction.none:
        // TODO: Handle this case.
        break;
      case TextInputAction.unspecified:
        // TODO: Handle this case.
        break;
      case TextInputAction.go:
        // TODO: Handle this case.
        break;
      case TextInputAction.search:
        // TODO: Handle this case.
        break;
      case TextInputAction.send:
        // TODO: Handle this case.
        break;
      case TextInputAction.next:
        // TODO: Handle this case.
        break;
      case TextInputAction.previous:
        // TODO: Handle this case.
        break;
      case TextInputAction.continueAction:
        // TODO: Handle this case.
        break;
      case TextInputAction.join:
        // TODO: Handle this case.
        break;
      case TextInputAction.route:
        // TODO: Handle this case.
        break;
      case TextInputAction.emergencyCall:
        // TODO: Handle this case.
        break;
    }
  }

  @override
  RichTextEditingValue getValue(Map<String, dynamic> encoded) =>
      RichTextEditingValueParser.parse(
          oldValue: _editingValue.copyWith(),
          newValue: new RichTextEditingValue.fromJSON(
              encoded, widget.style ?? Theme.of(context).textTheme.subhead),
          style: _currentSelectedStyle.copyWith());

  void _updateRemoteEditingValueIfNeeded() {
    log.d("_updateRemoteEditingValueIfNeeded");
    if (!_hasInputConnection) return;
    final RichTextEditingValue localValue = _editingValue;
    if (localValue == _lastKnownRemoteTextEditingValue) return;
    _lastKnownRemoteTextEditingValue = localValue;

    log.d(
        "_updateRemoteEditingValueIfNeeded ${localValue.value.toPlainText()}");
    _textInputConnection.setEditingState(localValue);
  }

  RichTextEditingValue get _editingValue => widget.controller.value;

  set _editingValue(RichTextEditingValue value) {
    widget.controller.value = value;
  }

  bool get _hasFocus => widget.focusNode.hasFocus;

  bool get _isMultiline => widget.maxLines != 1;

  // Calculate the new scroll offset so the cursor remains visible.
  double _getScrollOffsetForCaret(Rect caretRect) {
    final double caretStart = _isMultiline ? caretRect.top : caretRect.left;
    final double caretEnd = _isMultiline ? caretRect.bottom : caretRect.right;
    double scrollOffset = _scrollController.offset;
    final double viewportExtent = _scrollController.position.viewportDimension;
    if (caretStart < 0.0) // cursor before start of bounds
      scrollOffset += caretStart;
    else if (caretEnd >= viewportExtent) // cursor after end of bounds
      scrollOffset += caretEnd - viewportExtent;
    return scrollOffset;
  }

  bool get _hasInputConnection =>
      _textInputConnection != null && _textInputConnection.attached;

  void _openInputConnection() {
    if (!_hasInputConnection) {
      final RichTextEditingValue localValue = _editingValue;
      _lastKnownRemoteTextEditingValue = localValue;
      _textInputConnection = TextInput.attach(
          this,
          new TextInputConfiguration(
              inputType: widget.keyboardType,
              autocorrect: widget.autocorrect,
              inputAction: widget.keyboardType == TextInputType.multiline
                  ? TextInputAction.newline
                  : TextInputAction.done))
        ..setEditingState(localValue);
    }
    _textInputConnection.show();
  }

  void _closeInputConnectionIfNeeded() {
    if (_hasInputConnection) {
      _textInputConnection.close();
      _textInputConnection = null;
      _lastKnownRemoteTextEditingValue = null;
    }
  }

  void _openOrCloseInputConnectionIfNeeded() {
    if (_hasFocus && widget.focusNode.consumeKeyboardToken()) {
      _openInputConnection();
    } else if (!_hasFocus) {
      _closeInputConnectionIfNeeded();
      widget.controller.clearComposing();
    }
  }

  /// Express interest in interacting with the keyboard.
  ///
  /// If this control is already attached to the keyboard, this function will
  /// request that the keyboard become visible. Otherwise, this function will
  /// ask the focus system that it become focused. If successful in acquiring
  /// focus, the control will then attach to the keyboard and request that the
  /// keyboard become visible.
  void requestKeyboard() {
    if (_hasFocus)
      _openInputConnection();
    else
      FocusScope.of(context).requestFocus(widget.focusNode);
  }

  void _hideSelectionOverlayIfNeeded() {
    _selectionOverlay?.hide();
    _selectionOverlay = null;
  }

  void _updateOrDisposeSelectionOverlayIfNeeded() {
    if (_selectionOverlay != null) {
      if (_hasFocus) {
        _selectionOverlay.update(_editingValue);
      } else {
        _selectionOverlay.dispose();
        _selectionOverlay = null;
      }
    }
  }

  void _handleSelectionChanged(TextSelection selection,
      RenderRichEditable renderObject, bool longPress) {
    widget.controller.selection = selection;

    // Update style when user taps on a specific location.
    _updateStyleForPosition(selection);

    // This will show the keyboard for all selection changes on the
    // EditableWidget, not just changes triggered by user gestures.
    requestKeyboard();

    _hideSelectionOverlayIfNeeded();

    if (widget.selectionControls != null) {
      _selectionOverlay = new TextSelectionOverlay(
        context: context,
        value: _editingValue,
        debugRequiredFor: widget,
        layerLink: _layerLink,
        renderObject: renderObject,
        onSelectionOverlayChanged: _handleSelectionOverlayChanged,
        selectionControls: widget.selectionControls,
      );
      if (Extensions.isEmpty(_editingValue.value) || longPress)
        _selectionOverlay.showHandles();
      if (longPress) _selectionOverlay.showToolbar();

      if (widget.onSelectionChanged != null)
        widget.onSelectionChanged(selection, longPress);
    }
  }

  void _handleSelectionOverlayChanged(
      RichTextEditingValue value, Rect caretRect) {
    assert(!value
        .composing.isValid); // composing range must be empty while selecting.
    _formatAndSetValue(value, false);
    // Update style when the user drags the handler to a specific location.
    _updateStyleForPosition(value.selection);

    _scrollController.jumpTo(_getScrollOffsetForCaret(caretRect));

    log.d("_handleSelectionOverlayChanged");
    if (widget.onSelectionChanged != null)
      widget.onSelectionChanged(value.selection, false);
  }

  /// Update the style for this position.
  void _updateStyleForPosition(TextSelection selection) {
    log.d("_updateStyleForPosition: $selection");

    if (selection.baseOffset == selection.extentOffset) {
      _styleController.value =
          _editingValue.value.getSpanForPosition(selection.base).style;
    } else {
      _styleController.value = Extensions.emptyStyle;
    }
  }

  bool _textChangedSinceLastCaretUpdate = false;

  void _handleCaretChanged(Rect caretRect) {
    // If the caret location has changed due to an update to the text or
    // selection, then scroll the caret into view.
    if (_textChangedSinceLastCaretUpdate) {
      _textChangedSinceLastCaretUpdate = false;
      scheduleMicrotask(() {
        _scrollController.animateTo(
          _getScrollOffsetForCaret(caretRect),
          curve: Curves.fastOutSlowIn,
          duration: const Duration(milliseconds: 50),
        );
      });
    }
  }

  void _formatAndSetValue(RichTextEditingValue value, bool textChanged) {
    log.d("textChanged: $textChanged");

    _editingValue = value;
    if (textChanged && widget.onChanged != null)
      widget.onChanged(value.value.toPlainText());
  }

  /// Whether the blinking cursor is actually visible at this precise moment
  /// (it's hidden half the time, since it blinks).
  @visibleForTesting
  bool get cursorCurrentlyVisible => _showCursor.value;

  /// The cursor blink interval (the amount of time the cursor is in the "on"
  /// state or the "off" state). A complete cursor blink period is twice this
  /// value (half on, half off).
  @visibleForTesting
  Duration get cursorBlinkInterval => _kCursorBlinkHalfPeriod;

  int _obscureShowCharTicksPending = 0;
  int _obscureLatestCharIndex;

  void _cursorTick(Timer timer) {
    _showCursor.value = !_showCursor.value;
    if (_obscureShowCharTicksPending > 0) {
      setState(() {
        _obscureShowCharTicksPending--;
      });
    }
  }

  void _startCursorTimer() {
    _showCursor.value = true;
    _cursorTimer = new Timer.periodic(_kCursorBlinkHalfPeriod, _cursorTick);
  }

  void _stopCursorTimer() {
    _cursorTimer?.cancel();
    _cursorTimer = null;
    _showCursor.value = false;
    _obscureShowCharTicksPending = 0;
  }

  void _startOrStopCursorTimerIfNeeded() {
    if (_cursorTimer == null &&
        _hasFocus &&
        _editingValue.selection.isCollapsed)
      _startCursorTimer();
    else if (_cursorTimer != null &&
        (!_hasFocus || !_editingValue.selection.isCollapsed))
      _stopCursorTimer();
  }

  void _didChangeTextEditingValue() {
    _updateRemoteEditingValueIfNeeded();
    _startOrStopCursorTimerIfNeeded();
    _updateOrDisposeSelectionOverlayIfNeeded();
    _textChangedSinceLastCaretUpdate = true;
    // TODO(abarth): Teach RenderEditable about ValueNotifier<TextEditingValue>
    // to avoid this setState().
    setState(() {
      /* We use widget.controller.value in build(). */
    });
  }

  void requestFocus() {
    FocusScope.of(context).requestFocus(widget.focusNode);
    restoreKeyboard = true;
  }

  void _handleFocusChanged() {
    log.d("_handleFocusChanged hasFocus: $_hasFocus $_hasInputConnection");

    if (closeKeyboardIfNeeded) {
      _openOrCloseInputConnectionIfNeeded();
      _startOrStopCursorTimerIfNeeded();
    }

    if (restoreKeyboard && _hasFocus) {
      restoreKeyboard = false;
      closeKeyboardIfNeeded = true;
      _openInputConnection();
    }

    if (!saveValueBeforeFocusLoss) {
      saveValueBeforeFocusLoss = false;
      _updateOrDisposeSelectionOverlayIfNeeded();
      if (!_hasFocus) {
        // Clear the selection and composition state if this widget lost focus.
        _editingValue = _editingValue.copyWith(value: _editingValue.value);
      }
    }

    updateKeepAlive();
  }

  TextDirection get _textDirection {
    final TextDirection result =
        widget.textDirection ?? Directionality.of(context);
    assert(result != null,
        '$runtimeType created without a textDirection and with no ambient Directionality.');
    return result;
  }

  @override
  Widget build(BuildContext context) {
    log.d(
        "----------------------------------------------------------------------------------------------------------------------BUILD");
    // FocusScope.of(context).reparentIfNeeded(widget.focusNode);
    super.build(context); // See AutomaticKeepAliveClientMixin.
    return new Scrollable(
      axisDirection: _isMultiline ? AxisDirection.down : AxisDirection.right,
      controller: _scrollController,
      physics: const ClampingScrollPhysics(),
      viewportBuilder: (BuildContext context, ViewportOffset offset) {
        return new CompositedTransformTarget(
          link: _layerLink,
          child: new _RichEditable(
            editingValue: _editingValue,
            style: widget.style,
            currentStyle: _styleController.value,
            cursorColor: widget.cursorColor,
            showCursor: _showCursor,
            maxLines: widget.maxLines,
            selectionColor: widget.selectionColor,
            textScaleFactor: widget.textScaleFactor ??
                MediaQuery.of(context, nullOk: true)?.textScaleFactor ??
                1.0,
            textAlign: widget.textAlign,
            textDirection: _textDirection,
            obscureShowCharacterAtIndex: _obscureShowCharTicksPending > 0
                ? _obscureLatestCharIndex
                : null,
            autocorrect: widget.autocorrect,
            offset: offset,
            onSelectionChanged: _handleSelectionChanged,
            onCaretChanged: _handleCaretChanged,
          ),
        );
      },
    );
  }
}

class _RichEditable extends LeafRenderObjectWidget {
  const _RichEditable({
    Key key,
    this.editingValue,
    this.style,
    this.currentStyle,
    this.cursorColor,
    this.showCursor,
    this.maxLines,
    this.selectionColor,
    this.textScaleFactor,
    this.textAlign,
    @required this.textDirection,
    this.obscureText,
    this.obscureShowCharacterAtIndex,
    this.autocorrect,
    this.offset,
    this.onSelectionChanged,
    this.onCaretChanged,
  })  : assert(textDirection != null),
        super(key: key);

  final RichTextEditingValue editingValue;
  final TextStyle style;
  final TextStyle currentStyle;
  final Color cursorColor;
  final ValueNotifier<bool> showCursor;
  final int maxLines;
  final Color selectionColor;
  final double textScaleFactor;
  final TextAlign textAlign;
  final TextDirection textDirection;
  final bool obscureText;
  final int obscureShowCharacterAtIndex;
  final bool autocorrect;
  final ViewportOffset offset;
  final SelectionChangedHandler onSelectionChanged;
  final CaretChangedHandler onCaretChanged;

  @override
  RenderRichEditable createRenderObject(BuildContext context) {
    return new RenderRichEditable(
      text: _styledTextSpan,
      cursorColor: cursorColor,
      showCursor: showCursor,
      maxLines: maxLines,
      selectionColor: selectionColor,
      textScaleFactor: textScaleFactor,
      textAlign: textAlign,
      textDirection: textDirection,
      selection: editingValue.selection,
      offset: offset,
      onSelectionChanged: onSelectionChanged,
      onCaretChanged: onCaretChanged,
    );
  }

  @override
  void updateRenderObject(
      BuildContext context, RenderRichEditable renderObject) {
    renderObject
      ..text = _styledTextSpan
      ..cursorColor = cursorColor
      ..showCursor = showCursor
      ..maxLines = maxLines
      ..selectionColor = selectionColor
      ..textScaleFactor = textScaleFactor
      ..textAlign = textAlign
      ..textDirection = textDirection
      ..selection = editingValue.selection
      ..offset = offset
      ..onSelectionChanged = onSelectionChanged
      ..onCaretChanged = onCaretChanged;

    renderObject.setCaretPrototype();
  }

  TextSpan get _styledTextSpan {
    if (editingValue.composing.isValid) {
      return RichTextEditingValueParser.updateSpansWithStyle(
          editingValue.value,
          new TextSelection(
            baseOffset: editingValue.composing.start,
            extentOffset: editingValue.composing.end,
          ),
          currentStyle,
          const TextStyle(decoration: TextDecoration.underline));
    }

    return editingValue.value;
  }
}
