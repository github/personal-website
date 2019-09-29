import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_logger/flutter_logger.dart';

import '../../src/extensions.dart';
import '../../src/services/text_input.dart';

class RichTextEditingValueParser {
  static final Log log = new Log("RichTextEditingValueParser");

  static RichTextEditingValue parse(
      {@required RichTextEditingValue oldValue,
      @required RichTextEditingValue newValue,
      @required TextStyle style}) {
    if (_equalTextValue(oldValue, newValue)) {
      log.d(
          "Same text value and same selection and composing. We are not changing anything.");
      return oldValue;
    } else if (_sameTextDiffSelection(oldValue, newValue)) {
      log.d(
          "Same text, but different selection or composing. Update only that.");
      return newValue.copyWith(value: oldValue.value);
    }

    final TextSpan currentSpan = oldValue.value;
    final TextSelection currentSelection = oldValue.selection;
    final TextSelection newSelection = newValue.selection;

    log.d("Current span has children: ${currentSpan.children != null}");

    /// If the root [TextSpan] doesn't have any children we can simply set the
    /// root text to the new value.
    ///
    /// Otherwise we look to the span that changed.
    if (currentSpan.children == null) {
      log.d("The style is the same: ${currentSpan.style == style}");

      /// If the user didn't changed the default [TextStyle] we update the root
      /// text value with the new value. Also if the user DID changed the
      /// [style] but is deleting, we just set the new value.
      ///
      /// Otherwise we create a new [TextSpan] with the added text
      if (currentSpan.style == style // no change in style, no need to update
              ||
              currentSelection.baseOffset >
                  newSelection.baseOffset // text was deleted, no need to update
          ) {
        log.d("The user did change the default style or has deleted text.");
      } else {
        var text = newValue.text
            .substring(currentSelection.baseOffset, newSelection.baseOffset);

        /// If the insert position, indicated by [currentSelection.baseOffset]
        /// is contained in the text of the root [TextSpan], we recreate the
        /// root with the first part of the root text, and the below children:
        ///
        /// [1]: a new [TextSpan] with the text added by the user and the
        /// [style];
        ///
        /// [2]: another [TextSpan] with the last part of root text, but keeping
        /// the  same style as the root.
        if (currentSpan.text.length > currentSelection.baseOffset) {
          var textBefore = currentSelection.textBefore(currentSpan.text);
          var textAfter = currentSelection.textAfter(currentSpan.text);

          log.d(
              "A new child was added at ${textBefore.isEmpty ? "start" : "middle"}.");

          if (textBefore.isEmpty) {
            newValue = newValue.copyWith(
              value: new TextSpan(
                text: "",
                style: currentSpan.style,
                children: [
                  new TextSpan(
                    text: text,
                    style: style,
                  ),
                  new TextSpan(
                    text: textAfter,
                    style: currentSpan.style,
                  ),
                ],
              ),
            );
          } else {
            newValue = newValue.copyWith(
              value: new TextSpan(
                text: textBefore,
                style: currentSpan.style,
                children: [
                  new TextSpan(
                    text: text,
                    style: style,
                  ),
                  new TextSpan(
                    text: textAfter,
                    style: currentSpan.style,
                  ),
                ],
              ),
            );
          }
        } else {
          log.d("A new child was added at end.");
          newValue = newValue.copyWith(
            value: new TextSpan(
              style: currentSpan.style,
              text: currentSpan.text,
              children: [
                new TextSpan(
                  text: text,
                  style: style,
                ),
              ],
            ),
          );
        }
      }
    } else {
      /// Something was added
      if (currentSelection.baseOffset < newSelection.baseOffset) {
        log.d("The user added some text.");

        String oldPlainText = currentSpan.toPlainText();

        /// If the insert position, indicated by [currentSelection.start] is
        /// contained in the [text] of the root [TextSpan], just update the text
        /// of the root element.
        if (currentSpan.text.length >= currentSelection.start) {
          log.d(
              "----------------------------------------------ADD TO ROOT TEXT");
          var text = newValue.text
              .substring(currentSelection.start, newSelection.start);

          var textBefore = currentSelection.textBefore(currentSpan.text);
          var textAfter = currentSelection.textAfter(currentSpan.text);

          if (currentSpan.style == style) {
            log.d("same style");

            newValue = newValue.copyWith(
              value: Extensions.copySpanWith(
                base: currentSpan,
                text: textBefore + text + textAfter,
              ),
            );
          } else {
            log.d("different style");

            if (textBefore.isEmpty) {
              log.d("start");
              List<TextSpan> children = [
                new TextSpan(
                  text: text,
                  style: style,
                ),
                new TextSpan(
                  text: currentSpan.text,
                  style: currentSpan.style,
                ),
              ];

              children.add(TextSpan(children: currentSpan.children));

              newValue = newValue.copyWith(
                value: new TextSpan(
                  text: "",
                  style: currentSpan.style,
                  children: children,
                ),
              );
            } else if (textAfter.isEmpty) {
              log.d("end");

              List<TextSpan> children = currentSpan.children.toList();
              children.insert(
                0,
                new TextSpan(
                  text: text,
                  style: style,
                ),
              );

              newValue = newValue.copyWith(
                  value: Extensions.copySpanWith(
                      base: currentSpan, children: children));
            } else {
              log.d("middle");

              List<TextSpan> children = [
                new TextSpan(
                  text: text,
                  style: style,
                ),
                new TextSpan(
                  text: textAfter,
                  style: currentSpan.style,
                ),
              ];

              children.add(TextSpan(children: currentSpan.children));

              newValue = newValue.copyWith(
                value: new TextSpan(
                  text: textBefore,
                  style: currentSpan.style,
                  children: children,
                ),
              );
            }
          }
        }

        /// If the insert position is in one of the children then we retrieve
        /// that child and find its start and end position in the parent. Then
        /// we update the text of that [TextSpan] with the new value.
        else if (oldPlainText.length >= currentSelection.start) {
          log.d(
              "-----------------------------------------------ADD TO CHILDREN");
          var text = newValue.text
              .substring(currentSelection.start, newSelection.start);
          List<TextSpan> children = currentSpan.children.toList();
          TextSpan affectedSpan = Extensions.getSpanForPosition(
              currentSpan, currentSelection.baseOffset);

          log.d(affectedSpan);
          var index = children.indexOf(affectedSpan);

          TextSpan root;
          //last span
          if (index == children.length - 1) {
            var index = children.indexOf(affectedSpan);
            children.removeAt(index);

            var affectedSpanStart =
                Extensions.getOffsetInParent(currentSpan, affectedSpan);

            String textBefore = oldPlainText.substring(
                affectedSpanStart, currentSelection.base.offset);

            String textAfter =
                oldPlainText.substring(currentSelection.base.offset);

            if (affectedSpan.style == style) {
              log.d(
                  "----------------------------------------------------SAME STYLE");
              affectedSpan = Extensions.copySpanWith(
                  base: affectedSpan, text: textBefore + text + textAfter);

              children.add(affectedSpan);
            } else {
              log.d(
                  "-----------------------------------------------DIFFERENT STYLE");
              if (textBefore.isEmpty) {
                log.d("start");
                children.add(new TextSpan(
                  text: text,
                  style: style,
                ));
                children.add(affectedSpan);
              } else if (textAfter.isEmpty) {
                log.d("end");
                children.add(affectedSpan);
                children.add(new TextSpan(
                  text: text,
                  style: style,
                ));
              } else {
                log.d("middle");
                children.add(new TextSpan(
                  text: textBefore,
                  style: affectedSpan.style,
                ));
                children.add(new TextSpan(
                  text: text,
                  style: style,
                ));
                children.add(new TextSpan(
                  text: textAfter,
                  style: affectedSpan.style,
                ));
              }
            }

            root = Extensions.copySpanWith(
              base: currentSpan,
              children: children,
            );
          } else {
            var index = children.indexOf(affectedSpan);
            children.removeAt(index);

            var affectedSpanStart =
                Extensions.getOffsetInParent(currentSpan, affectedSpan);

            var affectedSpanEnd = affectedSpanStart + affectedSpan.text.length;

            String textBefore = oldPlainText.substring(
                affectedSpanStart, currentSelection.base.offset);

            String textAfter = oldPlainText.substring(
                currentSelection.base.offset, affectedSpanEnd);

            if (affectedSpan.style == style) {
              log.d(
                  "----------------------------------------------------SAME STYLE");
              affectedSpan = Extensions.copySpanWith(
                  base: affectedSpan, text: textBefore + text + textAfter);

              children.insert(index, affectedSpan);
            } else {
              log.d(
                  "-----------------------------------------------DIFFERENT STYLE");
              if (textBefore.isEmpty) {
                assert(false);
                log.d("start");
                children.insert(
                    index,
                    new TextSpan(
                      text: text,
                      style: style,
                    ));
                children.insert(index + 1, affectedSpan);
              } else if (textAfter.isEmpty) {
                log.d("end");
                children.insert(index, affectedSpan);

                TextSpan nextSpan = children[index + 1];

                if (nextSpan.style == style) {
                  log.d(
                      "----------------------------------------------------SAME STYLE");
                  children.removeAt(index + 1);
                  children.insert(
                      index + 1,
                      Extensions.copySpanWith(
                        base: nextSpan,
                        text: text + nextSpan.text,
                      ));
                } else {
                  log.d(
                      "-----------------------------------------------DIFFERENT STYLE");
                  children.removeAt(index + 1);

                  var nextSpanStart =
                      Extensions.getOffsetInParent(currentSpan, nextSpan);

                  var nextSpanEnd = nextSpanStart + nextSpan.text.length;

                  String textBefore = oldPlainText.substring(
                      nextSpanStart, currentSelection.base.offset);

                  String textAfter = oldPlainText.substring(
                      currentSelection.base.offset, nextSpanEnd);

                  if (textBefore.isEmpty) {
                    log.d("start");
                    children.insert(
                        index + 1,
                        new TextSpan(
                          text: text,
                          style: style,
                        ));
                    children.insert(index + 2, nextSpan);
                  } else if (textAfter.isEmpty) {
                    log.d("end");
                    children.insert(index + 1, nextSpan);
                    children.insert(
                        index + 2,
                        new TextSpan(
                          text: text,
                          style: style,
                        ));
                  } else {
                    log.d("middle");
                    children.insert(
                        index + 1,
                        new TextSpan(
                          text: textBefore,
                          style: nextSpan.style,
                        ));
                    children.insert(
                        index + 2,
                        new TextSpan(
                          text: text,
                          style: style,
                        ));
                    children.insert(
                        index + 3,
                        new TextSpan(
                          text: textAfter,
                          style: nextSpan.style,
                        ));
                  }
                }
              } else {
                log.d("middle");
                children.insert(
                    index,
                    new TextSpan(
                      text: textBefore,
                      style: affectedSpan.style,
                    ));
                children.insert(
                    index + 1,
                    new TextSpan(
                      text: text,
                      style: style,
                    ));
                children.insert(
                    index + 2,
                    new TextSpan(
                      text: textAfter,
                      style: affectedSpan.style,
                    ));
              }
            }

            root = Extensions.copySpanWith(
              base: currentSpan,
              children: children,
            );
          }

          newValue = newValue.copyWith(value: root);
        }
      }

      /// Something was deleted
      else {
        if (currentSpan.text.length >= currentSelection.start &&
            currentSelection.isCollapsed) {
          log.d(
              "-----------------------------------------DELETE FROM ROOT TEXT");
          var text = currentSpan.text.substring(0, newSelection.extentOffset) +
              currentSpan.text.substring(oldValue.selection.extentOffset);

          newValue = newValue.copyWith(
            value: Extensions.copySpanWith(
              base: currentSpan,
              text: text,
            ),
          );
        } else {
          log.d(
              "------------------------------------------DELETE FROM CHILDREN");
          List<TextSpan> children = currentSpan.children.toList();

          var isCollapsed = currentSelection.start - newSelection.start == 1 &&
              currentSelection.isCollapsed;
          var rootText = currentSpan.text;

          if (isCollapsed) {
            log.d("------------------------------------------IS COLAPSED");
            // This is the⦚ text.
            // This is th⦚ text.

            // This is th⦚e text.
            // This is t⦚e text.

            TextSpan affectedSpan = Extensions.getSpanForPosition(
                currentSpan, currentSelection.start);

            int index = children.indexOf(affectedSpan);
            children.removeAt(index);

            if (affectedSpan.text.length == 1) {
              affectedSpan = null;
            } else {
              var start = currentSelection.start -
                  Extensions.getOffsetInParent(currentSpan, affectedSpan);

              var textBefore = affectedSpan.text.substring(0, start - 1);
              var textAfter = affectedSpan.text.substring(start);

              affectedSpan = Extensions.copySpanWith(
                base: affectedSpan,
                text: textBefore + textAfter,
              );
            }

            if (affectedSpan != null) children.insert(index, affectedSpan);
          } else {
            log.d("------------------------------------------IS NOT COLAPSED");
            //
            // This is the⦚ text.
            // This is ⦚ text.                        => fast delete by keyboard

            // This is ⟦the ⟧text.
            // This is ⦚text.

            var selection = currentSelection;
            if (currentSelection.start - newSelection.start != 1) {
              //fast delete by keyboard
              selection = new TextSelection(
                baseOffset: newSelection.start,
                extentOffset: currentSelection.end,
                affinity: currentSelection.affinity,
              );
            }

            TextSpan startSpan =
                Extensions.getSpanForPosition(currentSpan, selection.start);
            TextSpan endSpan =
                Extensions.getSpanForPosition(currentSpan, selection.end);

            if (startSpan == currentSpan) {
              //delete from root too
              rootText = rootText.substring(0, newSelection.start);
              int index = children.indexOf(endSpan);
              children.removeRange(0, index + 1);

              var span = _deleteSelectionRange(
                  parent: currentSpan, span: endSpan, selection: selection);

              if (span != null) children.insert(0, span);
            } else if (startSpan == endSpan) {
              int index = children.indexOf(startSpan);
              children.removeAt(index);

              var span = _deleteSelectionRange(
                  parent: currentSpan, span: startSpan, selection: selection);

              if (span != null) children.insert(index, span);
            } else {
              int startIndex = children.indexOf(startSpan);
              int endIndex = children.indexOf(endSpan);
              children.removeRange(startIndex, endIndex + 1);

              startSpan = _deleteSelectionRange(
                  parent: currentSpan, span: startSpan, selection: selection);

              endSpan = _deleteSelectionRange(
                  parent: currentSpan, span: endSpan, selection: selection);

              if (startSpan != null && endSpan != null) {
                children.insert(startIndex, startSpan);
                children.insert(startIndex + 1, endSpan);
              } else
                children.insert(
                    startIndex, startSpan == null ? endSpan : startSpan);
            }
          }

          if (children.isEmpty) children = null;

          newValue = newValue.copyWith(
            value: new TextSpan(
              text: rootText,
              style: currentSpan.style,
              recognizer: currentSpan.recognizer,
              children: children,
            ),
          );
        }
      }
    }

    newValue = newValue.copyWith(
      value: Extensions.copySpanWith(
        base: newValue.value,
        children: optimiseChildren(newValue.value.children),
      ),
    );

    log.d(newValue.value.toPlainText());
    return newValue;
  }

  static TextSpan _deleteSelectionRange({
    @required TextSpan parent,
    @required TextSpan span,
    @required TextSelection selection,
  }) {
    try {
      if (span.text.length == 1)
        return null;
      else {
        int offsetInParent = Extensions.getOffsetInParent(parent, span);
        int spanLength = span.text.length;

        String text;

        if (selection.start - offsetInParent < 0) {
          int start = selection.end - offsetInParent;
          text = span.text.substring(start);
        } else {
          int start = selection.start - offsetInParent;
          int end = min(selection.end - offsetInParent, spanLength);

          String textBefore = span.text.substring(0, start);
          String textAfter = span.text.substring(end);

          text = textBefore + textAfter;
        }

        return Extensions.copySpanWith(
          base: span,
          text: text,
        );
      }
    } catch (e) {
      log.e(e);
      log.d(span);
      return null;
    }
  }

  static TextSpan updateSpansWithStyle(TextSpan span, TextSelection selection,
      TextStyle currentStyle, TextStyle newStyle) {
    if (newStyle == Extensions.emptyStyle) {
      log.w("The new style is empty. We are not touching anything!");
      return span;
    }

    List<TextSpan> children = [];

    if (span.children != null) {
      /// We need a copy of the children list to avoid changing the
      /// [oldValue] content. <b>Remove this and see what happens. :D</b>
      span.children.forEach((it) => children.add(it));
    }

    var newSpan = span;
    var rootTextLength = span.text.length;
    TextStyle diffStyle = Extensions.getDifferenceStyle(currentStyle, newStyle);

    /// The selection include the root text.
    if (rootTextLength > selection.baseOffset) {
      log.d("----------------------------------------------START: ROOT TEXT");

      /// The selection ends in the root text.
      if (rootTextLength >= selection.extentOffset) {
        log.d("-----------------------------------------END: ROOT TEXT");

        var beforeText = selection.textBefore(span.text);
        var insideText = selection.textInside(span.text);

        children.insert(
            0,
            new TextSpan(
                text: insideText,
                style: Extensions.deepMerge(span.style, diffStyle)));

        if (rootTextLength != selection.extentOffset) {
          var afterText = selection.textAfter(span.text);
          children.insert(1, new TextSpan(text: afterText, style: span.style));
        }

        newSpan = Extensions.copySpanWith(
            base: span, text: beforeText, children: children);
      }

      /// The selection ends in one of the children.
      else {
        assert(children.isNotEmpty);

        //handle root text
        var rootTextBeforeSelection = selection.textBefore(span.text);
        var rootTextInSelection = span.text.substring(selection.baseOffset);

        //handle children
        var startSpan = span.getSpanForPosition(new TextPosition(
            offset: span.text.length, affinity: selection.affinity));

        var endSpan = span.getSpanForPosition(selection.extent);

        var startIndex = children.indexOf(startSpan); //must be 0
        var endIndex = children.indexOf(endSpan);

        /// The selection ends in the first child.
        if (startIndex == endIndex) {
          log.d(
              "-------------------------------------------------END: CHILDREN: startIndex == endIndex");

          var startSpanText = startSpan.text;

          var beforeText = startSpanText.substring(
              0, selection.extentOffset - span.text.length);
          var afterText = startSpanText.substring(beforeText.length);

          children.remove(startSpan);
          children.insert(
              0,
              Extensions.copySpanWith(
                  base: startSpan,
                  text: beforeText,
                  style: Extensions.deepMerge(startSpan.style, diffStyle)));

          if (afterText.isNotEmpty) {
            children.insert(
                1, Extensions.copySpanWith(base: startSpan, text: afterText));
          }
        }

        /// The selection ends in the second child.
        else if (endIndex - startIndex == 1) {
          log.d(
              "-------------------------------------------------END: CHILDREN: endIndex - startIndex == 1");
          var endSpanText = endSpan.text;

          var beforeText = endSpanText.substring(
              0,
              selection.extentOffset -
                  Extensions.getOffsetInParent(span, endSpan));
          var afterText = endSpanText.substring(beforeText.length);

          children.remove(startSpan);
          children.remove(endSpan);

          children.insert(
              0,
              Extensions.copySpanWith(
                  base: startSpan,
                  style: Extensions.deepMerge(startSpan.style, diffStyle)));
          children.insert(
              1,
              Extensions.copySpanWith(
                  base: endSpan,
                  text: beforeText,
                  style: Extensions.deepMerge(endSpan.style, diffStyle)));

          if (afterText.isNotEmpty) {
            children.insert(
                2, Extensions.copySpanWith(base: endSpan, text: afterText));
          }
        }

        /// The selection ends in another child
        else {
          log.d(
              "-------------------------------------------------END: CHILDREN: else");
          var endSpanText = endSpan.text;

          var beforeEndText = endSpanText.substring(
              0,
              selection.extentOffset -
                  Extensions.getOffsetInParent(span, endSpan));
          assert(beforeEndText.isNotEmpty);

          var afterEndText = endSpanText.substring(beforeEndText.length);

          var newChildren = [];
          children.getRange(0, endIndex).forEach((span) => newChildren.add(
              Extensions.copySpanWith(
                  base: span,
                  style: Extensions.deepMerge(span.style, diffStyle))));
          newChildren.add(Extensions.copySpanWith(
              base: endSpan,
              text: beforeEndText,
              style: Extensions.deepMerge(endSpan.style, diffStyle)));

          if (afterEndText.isNotEmpty)
            newChildren.add(
                Extensions.copySpanWith(base: endSpan, text: afterEndText));

          newChildren.addAll(children.getRange(endIndex + 1, children.length));

          children = newChildren;
        }

        children.insert(
            0,
            new TextSpan(
                text: rootTextInSelection,
                style: Extensions.deepMerge(span.style, diffStyle)));

        children = optimiseChildren(children);
        newSpan = Extensions.copySpanWith(
            base: span, text: rootTextBeforeSelection, children: children);
      }
    }

    /// The selection is only in children.
    else {
      log.d("--------------------------------START: CHILDREN <> END: CHILDREN");

      var startSpan = span.getSpanForPosition(selection.base);
      var endSpan = span.getSpanForPosition(new TextPosition(
          offset: selection.end - 1, affinity: selection.affinity));

      var startIndex = children.indexOf(startSpan);
      var endIndex = children.indexOf(endSpan);

      /// Get the children before the selection if there are any.
      var beforeChildren = [];
      if (startIndex != 0) {
        //
        children
            .getRange(0, startIndex)
            .forEach((span) => beforeChildren.add(span));
      }

      /// Get the children after the selection if there are any.
      var afterChildren = [];
      if (endIndex != children.length - 1) {
        children
            .getRange(endIndex + 1, children.length)
            .forEach((span) => afterChildren.add(span));
      }

      /// The selection is starts and ends in the same span.
      if (startIndex == endIndex) {
        log.d(
            "-------------------------------------------------startIndex == endIndex");
        var startSpanText = startSpan.text;

        var beforeText = startSpanText.substring(
            0,
            selection.baseOffset -
                Extensions.getOffsetInParent(span, startSpan));

        var insideText = startSpanText.substring(beforeText.length,
            beforeText.length + selection.extentOffset - selection.baseOffset);

        var afterText =
            startSpanText.substring(beforeText.length + insideText.length);

        if (beforeText.isNotEmpty) {
          beforeChildren
              .add(Extensions.copySpanWith(base: startSpan, text: beforeText));
        }

        if (insideText.isNotEmpty) {
          beforeChildren.add(Extensions.copySpanWith(
              base: startSpan,
              text: insideText,
              style: Extensions.deepMerge(startSpan.style, diffStyle)));
        }

        if (afterText.isNotEmpty) {
          beforeChildren
              .add(Extensions.copySpanWith(base: startSpan, text: afterText));
        }
      }

      /// The selection start in on span and ends in another one.
      else {
        log.d(
            "-------------------------------------------------endIndex - startIndex == 1");
        //start span
        var startSpanText = startSpan.text;
        var beforeStartText = startSpanText.substring(
            0,
            selection.baseOffset -
                Extensions.getOffsetInParent(span, startSpan));
        var afterStartText = startSpanText.substring(beforeStartText.length);

        //end span
        var endSpanText = endSpan.text;
        var beforeEndText = endSpanText.substring(
            0,
            selection.extentOffset -
                Extensions.getOffsetInParent(span, endSpan));
        var afterEndText = endSpanText.substring(beforeEndText.length);

        if (beforeStartText.isNotEmpty) {
          beforeChildren.add(
              Extensions.copySpanWith(base: startSpan, text: beforeStartText));
        }

        beforeChildren.add(Extensions.copySpanWith(
            base: startSpan,
            text: afterStartText,
            style: Extensions.deepMerge(startSpan.style, diffStyle)));

        if (endIndex - startIndex > 1) {
          children.getRange(startIndex + 1, endIndex).forEach((span) =>
              beforeChildren.add(Extensions.copySpanWith(
                  base: span,
                  style: Extensions.deepMerge(span.style, diffStyle))));
        }

        beforeChildren.add(Extensions.copySpanWith(
            base: endSpan,
            text: beforeEndText,
            style: Extensions.deepMerge(endSpan.style, diffStyle)));
        if (afterEndText.isNotEmpty) {
          beforeChildren
              .add(Extensions.copySpanWith(base: endSpan, text: afterEndText));
        }
      }

      beforeChildren.addAll(afterChildren);
      beforeChildren = optimiseChildren(beforeChildren);
      newSpan = Extensions.copySpanWith(base: span, children: beforeChildren);
    }

    return newSpan;
  }

  /// Return an optimized list of children where [TextSpan]s that are next to
  /// each other and have the same [TextStyle] are merged.
  static List<TextSpan> optimiseChildren(List<TextSpan> children) {
    if (children == null || children.isEmpty) return children;
    var newChildren = [];

    for (int i = 0; i < children.length; i++) {
      var span = children[i];
      if (i == 0) {
        newChildren.add(span);
        continue;
      }

      var previousSpan = children[i - 1];

      if (span.style == previousSpan.style) {
        TextSpan lastSpanInNewChildren = newChildren.last;
        newChildren[newChildren.length - 1] = Extensions.copySpanWith(
          base: previousSpan,
          text: lastSpanInNewChildren.text + span.text,
        );
      } else
        newChildren.add(span);
    }

    return newChildren;
  }

  static bool _equalTextValue(RichTextEditingValue a, RichTextEditingValue b) {
    return a.value.toPlainText() == b.value.toPlainText() &&
        a.selection == b.selection &&
        a.composing == b.composing;
  }

  static bool _sameTextDiffSelection(
      RichTextEditingValue a, RichTextEditingValue b) {
    return a.value.toPlainText() == b.value.toPlainText() &&
        (a.selection != b.selection || a.composing != b.composing);
  }
}
