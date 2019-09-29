import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart' hide DropdownButton, DropdownMenuItem;
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'package:flutter_logger/flutter_logger.dart';
import '../../src/extensions.dart';
import '../../src/material/dropdown.dart';
import '../../src/material/rich_text_field.dart';
import '../../src/widgets/rich_editable_text.dart';

const double _defaultFontSize = 16.0;
const FontItem _defaultFont = const FontItem(
  name: "Roboto",
  weights: const <int>[100, 200, 300, 400, 500, 600, 700, 800, 900],
);
const Color _defaultColor = Colors.black87;

class FormatToolbar extends StatefulWidget {
  FormatToolbar({
    @required StyleController styleController,
    @required GlobalKey<RichTextFieldState> richTextFieldState,
  })  : _styleController = styleController,
        _richTextFieldState = richTextFieldState;

  final StyleController _styleController;
  final GlobalKey<RichTextFieldState> _richTextFieldState;

  @override
  State<StatefulWidget> createState() => new _FormatToolbarState();
}

class _FormatToolbarState extends State<FormatToolbar> {
  final Log log = new Log("_FormatToolbarState");
  final GlobalKey<_FontSizeWidgetState> _fontSizeState =
      new GlobalKey<_FontSizeWidgetState>();

  StyleController _styleController;
  TextStyle _lastKnownStyle;

  bool _bold = false;
  bool _italic = false;
  bool _underline = false;
  bool _lineThrough = false;
  bool _overline = false;
  double _size = _defaultFontSize;
  String _fontName = "Roboto";
  Color _textColor = _defaultColor;

  @override
  void initState() {
    super.initState();
    _styleController = widget._styleController;
    _styleController.addListener(_onStyleChanged);

    _lastKnownStyle = _styleController.value;
    _size = widget._styleController.value.fontSize;
  }

  @override
  void didUpdateWidget(FormatToolbar oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget._styleController != oldWidget._styleController) {
      oldWidget._styleController.removeListener(_onStyleChanged);
      widget._styleController.addListener(_onStyleChanged);
    }
  }

  @override
  void dispose() {
    super.dispose();
    _styleController.removeListener(_onStyleChanged);
  }

  void _setFont(FontItem value) {
    log.d(value);
    _styleController.value = Extensions.copyStyleWith(
      base: _styleController.value,
      fontFamily: value.name,
      package: "rich_editor",
    );
    setState(() => _fontName = value.name);
  }

  _setTextColor(Color color) {
    widget._richTextFieldState.currentState.restoreFocus();
    if (color == null) return;

    _styleController.value = _styleController.value.copyWith(color: color);
    setState(() => _textColor = color);
  }

  void _setFontSize(double size) {
    _styleController.value = _styleController.value.copyWith(fontSize: size);
    setState(() => _size = size);
  }

  void _setBold() {
    var fontWeight = _lastKnownStyle.fontWeight == FontWeight.bold
        ? FontWeight.normal
        : FontWeight.bold;

    _styleController.value =
        _styleController.value.copyWith(fontWeight: fontWeight);

    setState(() {
      _bold = fontWeight == FontWeight.bold;
    });
  }

  void _setItalic() {
    var fontStyle = _lastKnownStyle.fontStyle == FontStyle.italic
        ? FontStyle.normal
        : FontStyle.italic;

    _styleController.value =
        _styleController.value.copyWith(fontStyle: fontStyle);

    setState(() {
      _italic = fontStyle == FontStyle.italic;
    });
  }

  void _setUnderlined() {
    var underlineDecoration;
    var lineThroughDecoration;
    var overlineDecoration;

    if (_lastKnownStyle.decoration != null) {
      underlineDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.underline)
              ? TextDecoration.none
              : TextDecoration.underline;

      lineThroughDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.lineThrough)
              ? TextDecoration.lineThrough
              : TextDecoration.none;

      overlineDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.overline)
              ? TextDecoration.overline
              : TextDecoration.none;
    } else {
      underlineDecoration = TextDecoration.underline;
      lineThroughDecoration = TextDecoration.none;
      overlineDecoration = TextDecoration.none;
    }

    var textDecoration = new TextDecoration.combine(
      [underlineDecoration, lineThroughDecoration, overlineDecoration],
    );

    _styleController.value =
        _styleController.value.copyWith(decoration: textDecoration);

    setState(() {
      _underline = textDecoration.contains(TextDecoration.underline);
    });
  }

  void _setLineThrough() {
    var underlineDecoration;
    var lineThroughDecoration;
    var overlineDecoration;

    if (_lastKnownStyle.decoration != null) {
      underlineDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.underline)
              ? TextDecoration.underline
              : TextDecoration.none;

      lineThroughDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.lineThrough)
              ? TextDecoration.none
              : TextDecoration.lineThrough;

      overlineDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.overline)
              ? TextDecoration.overline
              : TextDecoration.none;
    } else {
      underlineDecoration = TextDecoration.none;
      lineThroughDecoration = TextDecoration.lineThrough;
      overlineDecoration = TextDecoration.none;
    }

    var textDecoration = new TextDecoration.combine(
      [underlineDecoration, lineThroughDecoration, overlineDecoration],
    );

    _styleController.value =
        _styleController.value.copyWith(decoration: textDecoration);

    setState(() {
      _lineThrough = textDecoration.contains(TextDecoration.lineThrough);
    });
  }

  void _setOverline() {
    var underlineDecoration;
    var lineThroughDecoration;
    var overlineDecoration;

    if (_lastKnownStyle.decoration != null) {
      underlineDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.underline)
              ? TextDecoration.underline
              : TextDecoration.none;

      lineThroughDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.lineThrough)
              ? TextDecoration.lineThrough
              : TextDecoration.none;

      overlineDecoration =
          _lastKnownStyle.decoration.contains(TextDecoration.overline)
              ? TextDecoration.none
              : TextDecoration.overline;
    } else {
      underlineDecoration = TextDecoration.none;
      lineThroughDecoration = TextDecoration.none;
      overlineDecoration = TextDecoration.overline;
    }

    var textDecoration = new TextDecoration.combine(
      [underlineDecoration, lineThroughDecoration, overlineDecoration],
    );

    _styleController.value =
        _styleController.value.copyWith(decoration: textDecoration);

    setState(() {
      _overline = textDecoration.contains(TextDecoration.overline);
    });
  }

  void _onDropdownEvent(OnTapState value) {
    switch (value) {
      case OnTapState.START:
        widget._richTextFieldState.currentState.prepareForFocusLoss();
        break;

      case OnTapState.END:
        widget._richTextFieldState.currentState.restoreFocus();
        break;
    }
  }

  void _onStyleChanged() {
    log.d("_FormatToolbarState: $_lastKnownStyle");
    log.d("_FormatToolbarState: ${_styleController.value}");
    _lastKnownStyle = _styleController.value;

    setState(() {
      _bold = _isBold();
      _italic = _isItalic();
      _underline = _isUnderlined();
      _lineThrough = _isLineThrough();
      _overline = _isOverlined();
      _size = _lastKnownStyle.fontSize;
      _fontSizeState.currentState.setSize(_lastKnownStyle.fontSize);
      _fontName = () {
        // fontFamily come in this form > packages/rich_editor/Berkshire Swash
        var font = _lastKnownStyle.fontFamily;
        log.d(font);
        var index = font?.lastIndexOf("/");
        if (index != -1)
          return font?.substring(index + 1);
        else
          return font;
      }();
      _textColor = _lastKnownStyle.color;
    });
  }

  bool _isBold() {
    if (_lastKnownStyle.fontWeight == FontWeight.bold)
      return true;
    else
      return false;
  }

  bool _isItalic() {
    if (_lastKnownStyle.fontStyle == FontStyle.italic)
      return true;
    else
      return false;
  }

  bool _isUnderlined() {
    if (_lastKnownStyle.decoration == null) return false;
    if (_lastKnownStyle.decoration.contains(TextDecoration.underline))
      return true;
    else
      return false;
  }

  bool _isLineThrough() {
    if (_lastKnownStyle.decoration == null) return false;
    if (_lastKnownStyle.decoration.contains(TextDecoration.lineThrough))
      return true;
    else
      return false;
  }

  bool _isOverlined() {
    if (_lastKnownStyle.decoration == null) return false;
    if (_lastKnownStyle.decoration.contains(TextDecoration.overline))
      return true;
    else
      return false;
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> childrenList = <Widget>[
      new FontSizeWidget(
        key: _fontSizeState,
        size: _size,
        onChange: _setFontSize,
      ),
      new DropdownButton(
        items: fonts,
        onTap: _onDropdownEvent,
        onChanged: _setFont,
        value: fontsMap[_fontName],
      ),
      ColorPicker(
        // button: new Center(
        //   child: new Icon(
        //     Icons.format_color_text,
        //     color: _textColor,
        //   ),
        // ),
        pickerColor: _textColor,
        onColorChanged: _setTextColor,
        // onShow: (type) {
        //   widget._richTextFieldState.currentState.prepareForFocusLoss(
        //       closeKeyboardIfNeeded:
        //           type == DisplayType.bottomSheet ? true : false);
        // },
      ),
      new IconButton(
        onPressed: _setBold,
        icon: new Icon(
          Icons.format_bold,
        ),
        color: _bold ? Theme.of(context).primaryColor : null,
      ),
      new IconButton(
        onPressed: _setItalic,
        icon: new Icon(
          Icons.format_italic,
        ),
        color: _italic ? Theme.of(context).primaryColor : null,
      ),
      new IconButton(
        onPressed: _setUnderlined,
        icon: new Icon(
          Icons.format_underlined,
        ),
        color: _underline ? Theme.of(context).primaryColor : null,
      ),
      new IconButton(
        onPressed: _setLineThrough,
        icon: new Icon(
          Icons.format_strikethrough,
        ),
        color: _lineThrough ? Theme.of(context).primaryColor : null,
      ),
      new IconButton(
        onPressed: _setOverline,
        icon: new ImageIcon(new AssetImage("res/images/format_overline.png",
            package: "rich_editor")),
        color: _overline ? Theme.of(context).primaryColor : null,
      ),
    ];

    return new Container(
      alignment: Alignment.bottomCenter,
      height: 48.0,
      decoration: new BoxDecoration(
        color: new Color(0xFFE8E8E8),
      ),
      child: new ListView(
        scrollDirection: Axis.horizontal,
        children: childrenList,
      ),
    );
  }
}

const List<DropdownMenuItem<FontItem>> fonts =
    const <DropdownMenuItem<FontItem>>[
  const DropdownMenuItem(
    child: const Text(
      "Roboto",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Roboto",
      ),
    ),
    value: _defaultFont,
  ),
  const DropdownMenuItem(
    child: const Text(
      "Berkshire Swash",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Berkshire Swash",
        package: "rich_editor",
      ),
    ),
    value: const FontItem(
      name: "Berkshire Swash",
      weights: const <int>[400],
    ),
  ),
  const DropdownMenuItem(
    child: const Text(
      "Cinzel Decorative",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Cinzel Decorative",
        package: "rich_editor",
      ),
    ),
    value: const FontItem(
      name: "Cinzel Decorative",
      weights: const <int>[400, 700, 900],
    ),
  ),
  const DropdownMenuItem(
    child: const Text(
      "Comfortaa",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Comfortaa",
        package: "rich_editor",
      ),
    ),
    value: const FontItem(
      name: "Comfortaa",
      weights: const <int>[300, 400, 700],
    ),
  ),
  const DropdownMenuItem(
    child: const Text(
      "Indie Flower",
      style: const TextStyle(
          color: Colors.black,
          fontFamily: "Indie Flower",
          package: "rich_editor",
          fontSize: 18.0),
    ),
    value: const FontItem(
      name: "Indie Flower",
      weights: const <int>[400],
    ),
  ),
  const DropdownMenuItem(
    child: const Text(
      "Lobster",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Lobster",
        package: "rich_editor",
      ),
    ),
    value: const FontItem(
      name: "Lobster",
      weights: const <int>[400],
    ),
  ),
  const DropdownMenuItem(
    child: const Text(
      "Satisfy",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Satisfy",
        package: "rich_editor",
      ),
    ),
    value: const FontItem(
      name: "Satisfy",
      weights: const <int>[400],
    ),
  ),
  const DropdownMenuItem(
    child: const Text(
      "Tangerine",
      style: const TextStyle(
        color: Colors.black,
        fontFamily: "Tangerine",
        package: "rich_editor",
        fontSize: 26.0,
        fontWeight: FontWeight.w700,
      ),
    ),
    value: const FontItem(
      name: "Tangerine",
      weights: const <int>[400, 700],
    ),
  ),
];

const Map<String, FontItem> fontsMap = const <String, FontItem>{
  "Roboto": _defaultFont,
  "Berkshire Swash": const FontItem(
    name: "Berkshire Swash",
    weights: const <int>[400],
  ),
  "Cinzel Decorative": const FontItem(
    name: "Cinzel Decorative",
    weights: const <int>[400, 700, 900],
  ),
  "Comfortaa": const FontItem(
    name: "Comfortaa",
    weights: const <int>[300, 400, 700],
  ),
  "Indie Flower": const FontItem(
    name: "Indie Flower",
    weights: const <int>[400],
  ),
  "Lobster": const FontItem(
    name: "Lobster",
    weights: const <int>[400],
  ),
  "Satisfy": const FontItem(
    name: "Satisfy",
    weights: const <int>[400],
  ),
  "Tangerine": const FontItem(
    name: "Tangerine",
    weights: const <int>[400, 700],
  ),
};

class FontItem {
  const FontItem({@required this.name, @required this.weights});

  final String name;
  final List<int> weights;

  @override
  String toString() => "FontItem {name: \"$name\", weights: \"$weights\"}";
}

class FontSizeWidget extends StatefulWidget {
  const FontSizeWidget({Key key, this.size, this.onChange}) : super(key: key);

  final double size;

  final ValueChanged<double> onChange;

  @override
  _FontSizeWidgetState createState() => new _FontSizeWidgetState();
}

class _FontSizeWidgetState extends State<FontSizeWidget> {
  double _size;

  @override
  void initState() {
    super.initState();
    _size = widget.size ?? _defaultFontSize;
  }

  void setSize(double size) {
    setState(() => _size = size ?? _defaultFontSize);
  }

  @override
  Widget build(BuildContext context) {
    return new Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        new IconButton(
          onPressed: () {
            setState(() {
              if (_size != 8.0) {
                _size--;
                widget.onChange(_size);
              }
            });
          },
          icon: new Icon(
            Icons.keyboard_arrow_down,
          ),
        ),
        new Text(_size.toInt().toString()),
        new IconButton(
          onPressed: () {
            setState(() {
              if (_size != 96.0) {
                _size++;
                widget.onChange(_size);
              }
            });
          },
          icon: new Icon(
            Icons.keyboard_arrow_up,
          ),
        ),
      ],
    );
  }
}
