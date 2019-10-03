define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $setRange = dartx.setRange;
  const $elementSizeInBytes = dartx.elementSizeInBytes;
  const $offsetInBytes = dartx.offsetInBytes;
  const $buffer = dartx.buffer;
  const $addAll = dartx.addAll;
  const $insertAll = dartx.insertAll;
  const CT = Object.create(null);
  const _buffer = dart.privateName(typed_buffers, "_buffer");
  const _length = dart.privateName(typed_buffers, "_length");
  const _typedBuffer = dart.privateName(typed_buffers, "_typedBuffer");
  const _defaultValue = dart.privateName(typed_buffers, "_defaultValue");
  const _createBuffer = dart.privateName(typed_buffers, "_createBuffer");
  const _createBiggerBuffer = dart.privateName(typed_buffers, "_createBiggerBuffer");
  const _grow = dart.privateName(typed_buffers, "_grow");
  const _add = dart.privateName(typed_buffers, "_add");
  const _addAll = dart.privateName(typed_buffers, "_addAll");
  const _insertKnownLength = dart.privateName(typed_buffers, "_insertKnownLength");
  const _ensureCapacity = dart.privateName(typed_buffers, "_ensureCapacity");
  const _setRange = dart.privateName(typed_buffers, "_setRange");
  const _is__TypedDataBuffer_default = Symbol('_is__TypedDataBuffer_default');
  typed_buffers._TypedDataBuffer$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let _TypedDataBufferOfE = () => (_TypedDataBufferOfE = dart.constFn(typed_buffers._TypedDataBuffer$(E)))();
    class _TypedDataBuffer extends collection.ListBase$(E) {
      get [_typedBuffer]() {
        return typed_data.TypedData.as(this[_buffer]);
      }
      get length() {
        return this[_length];
      }
      _get(index) {
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(new core.IndexError.new(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        if (dart.notNull(index) >= dart.notNull(this.length)) dart.throw(new core.IndexError.new(index, this));
        this[_buffer][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (dart.notNull(newLength) < dart.notNull(this[_length])) {
          let defaultValue = this[_defaultValue];
          for (let i = newLength; dart.notNull(i) < dart.notNull(this[_length]); i = dart.notNull(i) + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (dart.notNull(newLength) > dart.notNull(this[_buffer][$length])) {
          let newBuffer = null;
          if (this[_buffer][$length] === 0) {
            newBuffer = this[_createBuffer](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length] = newLength;
      }
      [_add](value) {
        let t0;
        if (this[_length] == this[_buffer][$length]) this[_grow](this[_length]);
        this[_buffer][$_set]((t0 = this[_length], this[_length] = dart.notNull(t0) + 1, t0), value);
      }
      add(value) {
        E._check(value);
        this[_add](value);
      }
      addAll(values, start, end) {
        IterableOfE()._check(values);
        if (start === void 0) start = 0;
        if (end === void 0) end = null;
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && dart.notNull(start) > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start, end) {
        let t0;
        IterableOfE()._check(values);
        if (start === void 0) start = 0;
        if (end === void 0) end = null;
        core.RangeError.checkValidIndex(index, this, "index", dart.notNull(this[_length]) + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (dart.notNull(start) > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start == end) return;
        }
        if (index == this[_length]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && core.List.is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length];
        let skipCount = start;
        for (let value of values) {
          if (dart.notNull(skipCount) > 0) {
            skipCount = dart.notNull(skipCount) - 1;
            continue;
          }
          if (writeIndex == this[_buffer][$length]) {
            this[_grow](writeIndex);
          }
          this[_buffer][$_set]((t0 = writeIndex, writeIndex = dart.notNull(t0) + 1, t0), value);
        }
        if (dart.notNull(skipCount) > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && dart.notNull(writeIndex) < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], index, this[_length]);
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], this[_length], writeIndex);
        typed_buffers._TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = dart.notNull(end) - 1;
        while (dart.notNull(start) < dart.notNull(end)) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = dart.notNull(start) + 1;
          end = dart.notNull(end) - 1;
        }
      }
      [_addAll](values, start, end) {
        if (start === void 0) start = 0;
        if (end === void 0) end = null;
        if (core.List.is(values)) end == null ? end = values[$length] : null;
        if (end != null) {
          this[_insertKnownLength](this[_length], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= dart.notNull(start)) this.add(value);
          i = i + 1;
        }
        if (i < dart.notNull(start)) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        if (core.List.is(values)) {
          end == null ? end = values[$length] : null;
          if (dart.notNull(start) > dart.notNull(values[$length]) || dart.notNull(end) > dart.notNull(values[$length])) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        } else {
          if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/typed_data/typed_buffers.dart", 210, 14, "end != null");
        }
        let valuesLength = dart.notNull(end) - dart.notNull(start);
        let newLength = dart.notNull(this[_length]) + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](dart.notNull(index) + valuesLength, dart.notNull(this[_length]) + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, dart.notNull(index) + valuesLength, values, start);
        this[_length] = newLength;
      }
      insert(index, element) {
        E._check(element);
        if (dart.notNull(index) < 0 || dart.notNull(index) > dart.notNull(this[_length])) {
          dart.throw(new core.RangeError.range(index, 0, this[_length]));
        }
        if (dart.notNull(this[_length]) < dart.notNull(this[_buffer][$length])) {
          this[_buffer][$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length] = dart.notNull(this[_length]) + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](dart.notNull(index) + 1, dart.notNull(this[_length]) + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length] = dart.notNull(this[_length]) + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (dart.notNull(requiredCapacity) <= dart.notNull(this[_buffer][$length])) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = dart.notNull(this[_buffer][$length]) * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer](newLength);
      }
      [_grow](length) {
        let t0;
        this[_buffer] = (t0 = this[_createBiggerBuffer](null), t0[$setRange](0, length, this[_buffer]), t0);
      }
      setRange(start, end, source, skipCount) {
        IterableOfE()._check(source);
        if (skipCount === void 0) skipCount = 0;
        if (dart.notNull(end) > dart.notNull(this[_length])) dart.throw(new core.RangeError.range(end, 0, this[_length]));
        this[_setRange](start, end, source, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        if (_TypedDataBufferOfE().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return dart.notNull(this[_length]) * dart.notNull(this[_typedBuffer][$elementSizeInBytes]);
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (_TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length] = buffer[$length];
      ;
    }).prototype = _TypedDataBuffer.prototype;
    dart.addTypeTests(_TypedDataBuffer);
    _TypedDataBuffer.prototype[_is__TypedDataBuffer_default] = true;
    dart.setMethodSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getMethods(_TypedDataBuffer.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [E]),
      addAll: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      [$addAll]: dart.fnType(dart.void, [core.Object], [core.int, core.int]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object], [core.int, core.int]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object], [core.int, core.int]),
      [_addAll]: dart.fnType(dart.void, [core.Iterable$(E)], [core.int, core.int]),
      [_insertKnownLength]: dart.fnType(dart.void, [core.int, core.Iterable$(E), core.int, core.int]),
      [_ensureCapacity]: dart.fnType(dart.void, [core.int]),
      [_createBiggerBuffer]: dart.fnType(core.List$(E), [core.int]),
      [_grow]: dart.fnType(dart.void, [core.int]),
      [_setRange]: dart.fnType(dart.void, [core.int, core.int, core.Iterable$(E), core.int])
    }));
    dart.setGetterSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getGetters(_TypedDataBuffer.__proto__),
      [_typedBuffer]: typed_data.TypedData,
      length: core.int,
      [$length]: core.int,
      elementSizeInBytes: core.int,
      lengthInBytes: core.int,
      offsetInBytes: core.int,
      buffer: typed_data.ByteBuffer
    }));
    dart.setSetterSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getSetters(_TypedDataBuffer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedDataBuffer, "package:typed_data/typed_buffers.dart");
    dart.setFieldSignature(_TypedDataBuffer, () => ({
      __proto__: dart.getFields(_TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(core.List$(E)),
      [_length]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(_TypedDataBuffer, ['length']);
    return _TypedDataBuffer;
  });
  typed_buffers._TypedDataBuffer = typed_buffers._TypedDataBuffer$();
  dart.defineLazy(typed_buffers._TypedDataBuffer, {
    /*typed_buffers._TypedDataBuffer.INITIAL_LENGTH*/get INITIAL_LENGTH() {
      return 8;
    }
  });
  dart.addTypeTests(typed_buffers._TypedDataBuffer, _is__TypedDataBuffer_default);
  typed_buffers._IntBuffer = class _IntBuffer extends typed_buffers._TypedDataBuffer$(core.int) {
    get [_defaultValue]() {
      return 0;
    }
  };
  (typed_buffers._IntBuffer.new = function(buffer) {
    typed_buffers._IntBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffers._IntBuffer.prototype;
  dart.addTypeTests(typed_buffers._IntBuffer);
  dart.setGetterSignature(typed_buffers._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffers._IntBuffer.__proto__),
    [_defaultValue]: core.int
  }));
  dart.setLibraryUri(typed_buffers._IntBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers._FloatBuffer = class _FloatBuffer extends typed_buffers._TypedDataBuffer$(core.double) {
    get [_defaultValue]() {
      return 0.0;
    }
  };
  (typed_buffers._FloatBuffer.new = function(buffer) {
    typed_buffers._FloatBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffers._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffers._FloatBuffer);
  dart.setGetterSignature(typed_buffers._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffers._FloatBuffer.__proto__),
    [_defaultValue]: core.double
  }));
  dart.setLibraryUri(typed_buffers._FloatBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint8Buffer = class Uint8Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
  };
  (typed_buffers.Uint8Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint8Buffer.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint8Buffer);
  dart.setMethodSignature(typed_buffers.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint8Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint8Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int8Buffer = class Int8Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
  };
  (typed_buffers.Int8Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int8Buffer.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int8Buffer);
  dart.setMethodSignature(typed_buffers.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int8Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int8Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
  };
  (typed_buffers.Uint8ClampedBuffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint8ClampedBuffer.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffers.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffers.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint8ClampedBuffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint8ClampedList, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint8ClampedBuffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint16Buffer = class Uint16Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
  };
  (typed_buffers.Uint16Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint16Buffer.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint16Buffer);
  dart.setMethodSignature(typed_buffers.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint16Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint16Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int16Buffer = class Int16Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
  };
  (typed_buffers.Int16Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int16Buffer.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int16Buffer);
  dart.setMethodSignature(typed_buffers.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int16Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int16Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint32Buffer = class Uint32Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
  };
  (typed_buffers.Uint32Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint32Buffer.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint32Buffer);
  dart.setMethodSignature(typed_buffers.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int32Buffer = class Int32Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
  };
  (typed_buffers.Int32Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int32Buffer.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int32Buffer);
  dart.setMethodSignature(typed_buffers.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Uint64Buffer = class Uint64Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffers.Uint64Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
    ;
  }).prototype = typed_buffers.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Uint64Buffer);
  dart.setMethodSignature(typed_buffers.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Uint64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Uint64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Uint64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int64Buffer = class Int64Buffer extends typed_buffers._IntBuffer {
    [_createBuffer](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffers.Int64Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int64Buffer);
  dart.setMethodSignature(typed_buffers.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Int64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Float32Buffer = class Float32Buffer extends typed_buffers._FloatBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
  };
  (typed_buffers.Float32Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Float32Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(initialLength));
    ;
  }).prototype = typed_buffers.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float32Buffer);
  dart.setMethodSignature(typed_buffers.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float32Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Float32Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Float64Buffer = class Float64Buffer extends typed_buffers._FloatBuffer {
    [_createBuffer](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
  };
  (typed_buffers.Float64Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Float64Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(initialLength));
    ;
  }).prototype = typed_buffers.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float64Buffer);
  dart.setMethodSignature(typed_buffers.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float64Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffers.Float64Buffer, "package:typed_data/typed_buffers.dart");
  typed_buffers.Int32x4Buffer = class Int32x4Buffer extends typed_buffers._TypedDataBuffer$(typed_data.Int32x4) {
    get [_defaultValue]() {
      return typed_buffers.Int32x4Buffer._zero;
    }
    [_createBuffer](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
  };
  (typed_buffers.Int32x4Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Int32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(initialLength));
    ;
  }).prototype = typed_buffers.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffers.Int32x4Buffer);
  dart.setMethodSignature(typed_buffers.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Int32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Int32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffers.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffers.Int32x4Buffer.__proto__),
    [_defaultValue]: typed_data.Int32x4
  }));
  dart.setLibraryUri(typed_buffers.Int32x4Buffer, "package:typed_data/typed_buffers.dart");
  dart.defineLazy(typed_buffers.Int32x4Buffer, {
    /*typed_buffers.Int32x4Buffer._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    },
    set _zero(_) {}
  });
  typed_buffers.Float32x4Buffer = class Float32x4Buffer extends typed_buffers._TypedDataBuffer$(typed_data.Float32x4) {
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_createBuffer](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
  };
  (typed_buffers.Float32x4Buffer.new = function(initialLength) {
    if (initialLength === void 0) initialLength = 0;
    typed_buffers.Float32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(initialLength));
    ;
  }).prototype = typed_buffers.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffers.Float32x4Buffer);
  dart.setMethodSignature(typed_buffers.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffers.Float32x4Buffer.__proto__),
    [_createBuffer]: dart.fnType(typed_data.Float32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffers.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffers.Float32x4Buffer.__proto__),
    [_defaultValue]: typed_data.Float32x4
  }));
  dart.setLibraryUri(typed_buffers.Float32x4Buffer, "package:typed_data/typed_buffers.dart");
  dart.trackLibraries("packages/typed_data/typed_buffers", {
    "package:typed_data/typed_buffers.dart": typed_buffers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_buffers.dart"],"names":[],"mappings":"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","file":"typed_buffers.ddc.js"}');
  // Exports:
  return {
    typed_buffers: typed_buffers
  };
});

//# sourceMappingURL=typed_buffers.ddc.js.map
