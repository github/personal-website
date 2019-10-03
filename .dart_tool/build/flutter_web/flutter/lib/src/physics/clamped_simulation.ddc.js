define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const spring_simulation = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const tolerance = Object.create(dart.library);
  const simulation = Object.create(dart.library);
  const friction_simulation = Object.create(dart.library);
  const gravity_simulation = Object.create(dart.library);
  const clamped_simulation = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $sign = dartx.sign;
  const $abs = dartx.abs;
  const $clamp = dartx.clamp;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: spring_simulation.SpringType.prototype,
        [_name$]: "SpringType.criticallyDamped",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: spring_simulation.SpringType.prototype,
        [_name$]: "SpringType.underDamped",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: spring_simulation.SpringType.prototype,
        [_name$]: "SpringType.overDamped",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], spring_simulation.SpringType);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 0.001,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.001
      });
    }
  });
  const SpringDescription_mass = dart.privateName(spring_simulation, "SpringDescription.mass");
  const SpringDescription_stiffness = dart.privateName(spring_simulation, "SpringDescription.stiffness");
  const SpringDescription_damping = dart.privateName(spring_simulation, "SpringDescription.damping");
  spring_simulation.SpringDescription = class SpringDescription extends core.Object {
    get mass() {
      return this[mass$];
    }
    set mass(value) {
      super.mass = value;
    }
    get stiffness() {
      return this[stiffness$];
    }
    set stiffness(value) {
      super.stiffness = value;
    }
    get damping() {
      return this[damping$];
    }
    set damping(value) {
      super.damping = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(mass: " + this.mass[$toStringAsFixed](1) + ", stiffness: " + this.stiffness[$toStringAsFixed](1) + ", damping: " + this.damping[$toStringAsFixed](1) + ")";
    }
  };
  (spring_simulation.SpringDescription.new = function(opts) {
    let mass = opts && 'mass' in opts ? opts.mass : null;
    let stiffness = opts && 'stiffness' in opts ? opts.stiffness : null;
    let damping = opts && 'damping' in opts ? opts.damping : null;
    this[mass$] = mass;
    this[stiffness$] = stiffness;
    this[damping$] = damping;
    ;
  }).prototype = spring_simulation.SpringDescription.prototype;
  (spring_simulation.SpringDescription.withDampingRatio = function(opts) {
    let mass = opts && 'mass' in opts ? opts.mass : null;
    let stiffness = opts && 'stiffness' in opts ? opts.stiffness : null;
    let ratio = opts && 'ratio' in opts ? opts.ratio : 1;
    this[mass$] = mass;
    this[stiffness$] = stiffness;
    this[damping$] = dart.notNull(ratio) * 2.0 * math.sqrt(dart.notNull(mass) * dart.notNull(stiffness));
    ;
  }).prototype = spring_simulation.SpringDescription.prototype;
  dart.addTypeTests(spring_simulation.SpringDescription);
  const mass$ = SpringDescription_mass;
  const stiffness$ = SpringDescription_stiffness;
  const damping$ = SpringDescription_damping;
  dart.setLibraryUri(spring_simulation.SpringDescription, "package:flutter/src/physics/spring_simulation.dart");
  dart.setFieldSignature(spring_simulation.SpringDescription, () => ({
    __proto__: dart.getFields(spring_simulation.SpringDescription.__proto__),
    mass: dart.finalFieldType(core.double),
    stiffness: dart.finalFieldType(core.double),
    damping: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(spring_simulation.SpringDescription, ['toString']);
  const _name$ = dart.privateName(spring_simulation, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  spring_simulation.SpringType = class SpringType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (spring_simulation.SpringType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = spring_simulation.SpringType.prototype;
  dart.addTypeTests(spring_simulation.SpringType);
  dart.setLibraryUri(spring_simulation.SpringType, "package:flutter/src/physics/spring_simulation.dart");
  dart.setFieldSignature(spring_simulation.SpringType, () => ({
    __proto__: dart.getFields(spring_simulation.SpringType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(spring_simulation.SpringType, ['toString']);
  spring_simulation.SpringType.criticallyDamped = C0 || CT.C0;
  spring_simulation.SpringType.underDamped = C1 || CT.C1;
  spring_simulation.SpringType.overDamped = C2 || CT.C2;
  spring_simulation.SpringType.values = C3 || CT.C3;
  const Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  const Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  const Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  let C4;
  const _endPosition = dart.privateName(spring_simulation, "_endPosition");
  const _solution = dart.privateName(spring_simulation, "_solution");
  const Simulation_tolerance = dart.privateName(simulation, "Simulation.tolerance");
  simulation.Simulation = class Simulation extends core.Object {
    get tolerance() {
      return this[tolerance$];
    }
    set tolerance(value) {
      this[tolerance$] = value;
    }
    toString() {
      return dart.str(this[$runtimeType]);
    }
  };
  (simulation.Simulation.new = function(opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C4 || CT.C4;
    this[tolerance$] = tolerance;
    ;
  }).prototype = simulation.Simulation.prototype;
  dart.addTypeTests(simulation.Simulation);
  const tolerance$ = Simulation_tolerance;
  dart.setLibraryUri(simulation.Simulation, "package:flutter/src/physics/simulation.dart");
  dart.setFieldSignature(simulation.Simulation, () => ({
    __proto__: dart.getFields(simulation.Simulation.__proto__),
    tolerance: dart.fieldType(tolerance.Tolerance)
  }));
  dart.defineExtensionMethods(simulation.Simulation, ['toString']);
  spring_simulation.SpringSimulation = class SpringSimulation extends simulation.Simulation {
    get type() {
      return this[_solution].type;
    }
    x(time) {
      return dart.notNull(this[_endPosition]) + dart.notNull(this[_solution].x(time));
    }
    dx(time) {
      return this[_solution].dx(time);
    }
    isDone(time) {
      return dart.test(utils.nearZero(this[_solution].x(time), this.tolerance.distance)) && dart.test(utils.nearZero(this[_solution].dx(time), this.tolerance.velocity));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(end: " + dart.str(this[_endPosition]) + ", " + dart.str(this.type) + ")";
    }
  };
  (spring_simulation.SpringSimulation.new = function(spring, start, end, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C4 || CT.C4;
    this[_endPosition] = end;
    this[_solution] = spring_simulation._SpringSolution.new(spring, dart.notNull(start) - dart.notNull(end), velocity);
    spring_simulation.SpringSimulation.__proto__.new.call(this, {tolerance: tolerance});
    ;
  }).prototype = spring_simulation.SpringSimulation.prototype;
  dart.addTypeTests(spring_simulation.SpringSimulation);
  dart.setMethodSignature(spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getMethods(spring_simulation.SpringSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getGetters(spring_simulation.SpringSimulation.__proto__),
    type: spring_simulation.SpringType
  }));
  dart.setLibraryUri(spring_simulation.SpringSimulation, "package:flutter/src/physics/spring_simulation.dart");
  dart.setFieldSignature(spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getFields(spring_simulation.SpringSimulation.__proto__),
    [_endPosition]: dart.finalFieldType(core.double),
    [_solution]: dart.finalFieldType(spring_simulation._SpringSolution)
  }));
  dart.defineExtensionMethods(spring_simulation.SpringSimulation, ['toString']);
  spring_simulation.ScrollSpringSimulation = class ScrollSpringSimulation extends spring_simulation.SpringSimulation {
    x(time) {
      return dart.test(this.isDone(time)) ? this[_endPosition] : super.x(time);
    }
  };
  (spring_simulation.ScrollSpringSimulation.new = function(spring, start, end, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C4 || CT.C4;
    spring_simulation.ScrollSpringSimulation.__proto__.new.call(this, spring, start, end, velocity, {tolerance: tolerance});
    ;
  }).prototype = spring_simulation.ScrollSpringSimulation.prototype;
  dart.addTypeTests(spring_simulation.ScrollSpringSimulation);
  dart.setLibraryUri(spring_simulation.ScrollSpringSimulation, "package:flutter/src/physics/spring_simulation.dart");
  spring_simulation._SpringSolution = class _SpringSolution extends core.Object {
    static new(spring, initialPosition, initialVelocity) {
      if (!(spring != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/spring_simulation.dart", 154, 12, "rt(spring != n");
      if (!(spring.mass != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/spring_simulation.dart", 155, 12, "rt(spring.mass != n");
      if (!(spring.stiffness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/spring_simulation.dart", 156, 12, "rt(spring.stiffness != n");
      if (!(spring.damping != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/spring_simulation.dart", 157, 12, "rt(spring.damping != n");
      if (!(initialPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/spring_simulation.dart", 158, 12, "rt(initialPosition != n");
      if (!(initialVelocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/spring_simulation.dart", 159, 12, "rt(initialVelocity != n");
      let cmk = dart.notNull(spring.damping) * dart.notNull(spring.damping) - 4 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness);
      if (cmk === 0.0) return spring_simulation._CriticalSolution.new(spring, initialPosition, initialVelocity);
      if (cmk > 0.0) return spring_simulation._OverdampedSolution.new(spring, initialPosition, initialVelocity);
      return spring_simulation._UnderdampedSolution.new(spring, initialPosition, initialVelocity);
    }
  };
  (spring_simulation._SpringSolution[dart.mixinNew] = function() {
  }).prototype = spring_simulation._SpringSolution.prototype;
  dart.addTypeTests(spring_simulation._SpringSolution);
  dart.setLibraryUri(spring_simulation._SpringSolution, "package:flutter/src/physics/spring_simulation.dart");
  const _r = dart.privateName(spring_simulation, "_r");
  const _c1 = dart.privateName(spring_simulation, "_c1");
  const _c2 = dart.privateName(spring_simulation, "_c2");
  spring_simulation._CriticalSolution = class _CriticalSolution extends core.Object {
    static new(spring, distance, velocity) {
      let r = -dart.notNull(spring.damping) / (2.0 * dart.notNull(spring.mass));
      let c1 = distance;
      let c2 = dart.notNull(velocity) / (r * dart.notNull(distance));
      return new spring_simulation._CriticalSolution.withArgs(r, c1, c2);
    }
    x(time) {
      return (dart.notNull(this[_c1]) + dart.notNull(this[_c2]) * dart.notNull(time)) * math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time));
    }
    dx(time) {
      let power = math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time));
      return dart.notNull(this[_r]) * (dart.notNull(this[_c1]) + dart.notNull(this[_c2]) * dart.notNull(time)) * power + dart.notNull(this[_c2]) * power;
    }
    get type() {
      return spring_simulation.SpringType.criticallyDamped;
    }
  };
  (spring_simulation._CriticalSolution.withArgs = function(r, c1, c2) {
    this[_r] = r;
    this[_c1] = c1;
    this[_c2] = c2;
    ;
  }).prototype = spring_simulation._CriticalSolution.prototype;
  dart.addTypeTests(spring_simulation._CriticalSolution);
  spring_simulation._CriticalSolution[dart.implements] = () => [spring_simulation._SpringSolution];
  dart.setMethodSignature(spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getMethods(spring_simulation._CriticalSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getGetters(spring_simulation._CriticalSolution.__proto__),
    type: spring_simulation.SpringType
  }));
  dart.setLibraryUri(spring_simulation._CriticalSolution, "package:flutter/src/physics/spring_simulation.dart");
  dart.setFieldSignature(spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getFields(spring_simulation._CriticalSolution.__proto__),
    [_r]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _r1 = dart.privateName(spring_simulation, "_r1");
  const _r2 = dart.privateName(spring_simulation, "_r2");
  spring_simulation._OverdampedSolution = class _OverdampedSolution extends core.Object {
    static new(spring, distance, velocity) {
      let cmk = dart.notNull(spring.damping) * dart.notNull(spring.damping) - 4 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness);
      let r1 = (-dart.notNull(spring.damping) - math.sqrt(cmk)) / (2.0 * dart.notNull(spring.mass));
      let r2 = (-dart.notNull(spring.damping) + math.sqrt(cmk)) / (2.0 * dart.notNull(spring.mass));
      let c2 = (dart.notNull(velocity) - r1 * dart.notNull(distance)) / (r2 - r1);
      let c1 = dart.notNull(distance) - c2;
      return new spring_simulation._OverdampedSolution.withArgs(r1, r2, c1, c2);
    }
    x(time) {
      return dart.notNull(this[_c1]) * math.pow(2.718281828459045, dart.notNull(this[_r1]) * dart.notNull(time)) + dart.notNull(this[_c2]) * math.pow(2.718281828459045, dart.notNull(this[_r2]) * dart.notNull(time));
    }
    dx(time) {
      return dart.notNull(this[_c1]) * dart.notNull(this[_r1]) * math.pow(2.718281828459045, dart.notNull(this[_r1]) * dart.notNull(time)) + dart.notNull(this[_c2]) * dart.notNull(this[_r2]) * math.pow(2.718281828459045, dart.notNull(this[_r2]) * dart.notNull(time));
    }
    get type() {
      return spring_simulation.SpringType.overDamped;
    }
  };
  (spring_simulation._OverdampedSolution.withArgs = function(r1, r2, c1, c2) {
    this[_r1] = r1;
    this[_r2] = r2;
    this[_c1] = c1;
    this[_c2] = c2;
    ;
  }).prototype = spring_simulation._OverdampedSolution.prototype;
  dart.addTypeTests(spring_simulation._OverdampedSolution);
  spring_simulation._OverdampedSolution[dart.implements] = () => [spring_simulation._SpringSolution];
  dart.setMethodSignature(spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getMethods(spring_simulation._OverdampedSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getGetters(spring_simulation._OverdampedSolution.__proto__),
    type: spring_simulation.SpringType
  }));
  dart.setLibraryUri(spring_simulation._OverdampedSolution, "package:flutter/src/physics/spring_simulation.dart");
  dart.setFieldSignature(spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getFields(spring_simulation._OverdampedSolution.__proto__),
    [_r1]: dart.finalFieldType(core.double),
    [_r2]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _w = dart.privateName(spring_simulation, "_w");
  spring_simulation._UnderdampedSolution = class _UnderdampedSolution extends core.Object {
    static new(spring, distance, velocity) {
      let w = math.sqrt(4.0 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness) - dart.notNull(spring.damping) * dart.notNull(spring.damping)) / (2.0 * dart.notNull(spring.mass));
      let r = -(dart.notNull(spring.damping) / 2.0 * dart.notNull(spring.mass));
      let c1 = distance;
      let c2 = (dart.notNull(velocity) - r * dart.notNull(distance)) / w;
      return new spring_simulation._UnderdampedSolution.withArgs(w, r, c1, c2);
    }
    x(time) {
      return math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time)) * (dart.notNull(this[_c1]) * math.cos(dart.notNull(this[_w]) * dart.notNull(time)) + dart.notNull(this[_c2]) * math.sin(dart.notNull(this[_w]) * dart.notNull(time)));
    }
    dx(time) {
      let power = math.pow(2.718281828459045, dart.notNull(this[_r]) * dart.notNull(time));
      let cosine = math.cos(dart.notNull(this[_w]) * dart.notNull(time));
      let sine = math.sin(dart.notNull(this[_w]) * dart.notNull(time));
      return power * (dart.notNull(this[_c2]) * dart.notNull(this[_w]) * cosine - dart.notNull(this[_c1]) * dart.notNull(this[_w]) * sine) + dart.notNull(this[_r]) * power * (dart.notNull(this[_c2]) * sine + dart.notNull(this[_c1]) * cosine);
    }
    get type() {
      return spring_simulation.SpringType.underDamped;
    }
  };
  (spring_simulation._UnderdampedSolution.withArgs = function(w, r, c1, c2) {
    this[_w] = w;
    this[_r] = r;
    this[_c1] = c1;
    this[_c2] = c2;
    ;
  }).prototype = spring_simulation._UnderdampedSolution.prototype;
  dart.addTypeTests(spring_simulation._UnderdampedSolution);
  spring_simulation._UnderdampedSolution[dart.implements] = () => [spring_simulation._SpringSolution];
  dart.setMethodSignature(spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getMethods(spring_simulation._UnderdampedSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getGetters(spring_simulation._UnderdampedSolution.__proto__),
    type: spring_simulation.SpringType
  }));
  dart.setLibraryUri(spring_simulation._UnderdampedSolution, "package:flutter/src/physics/spring_simulation.dart");
  dart.setFieldSignature(spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getFields(spring_simulation._UnderdampedSolution.__proto__),
    [_w]: dart.finalFieldType(core.double),
    [_r]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  utils.nearEqual = function nearEqual(a, b, epsilon) {
    if (!(epsilon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/utils.dart", 11, 10, "epsilon != null");
    if (!(dart.notNull(epsilon) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/utils.dart", 12, 10, "epsilon >= 0.0");
    if (a == null || b == null) return a == b;
    return dart.notNull(a) > dart.notNull(b) - dart.notNull(epsilon) && dart.notNull(a) < dart.notNull(b) + dart.notNull(epsilon) || a == b;
  };
  utils.nearZero = function nearZero(a, epsilon) {
    return utils.nearEqual(a, 0.0, epsilon);
  };
  tolerance.Tolerance = class Tolerance extends core.Object {
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "Tolerance(distance: ±" + dart.str(this.distance) + ", time: ±" + dart.str(this.time) + ", velocity: ±" + dart.str(this.velocity) + ")";
    }
  };
  (tolerance.Tolerance.new = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : 0.001;
    let time = opts && 'time' in opts ? opts.time : 0.001;
    let velocity = opts && 'velocity' in opts ? opts.velocity : 0.001;
    this[distance$] = distance;
    this[time$] = time;
    this[velocity$] = velocity;
    ;
  }).prototype = tolerance.Tolerance.prototype;
  dart.addTypeTests(tolerance.Tolerance);
  const distance$ = Tolerance_distance;
  const time$ = Tolerance_time;
  const velocity$ = Tolerance_velocity;
  dart.setLibraryUri(tolerance.Tolerance, "package:flutter/src/physics/tolerance.dart");
  dart.setFieldSignature(tolerance.Tolerance, () => ({
    __proto__: dart.getFields(tolerance.Tolerance.__proto__),
    distance: dart.finalFieldType(core.double),
    time: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(tolerance.Tolerance, ['toString']);
  dart.defineLazy(tolerance.Tolerance, {
    /*tolerance.Tolerance._epsilonDefault*/get _epsilonDefault() {
      return 0.001;
    },
    /*tolerance.Tolerance.defaultTolerance*/get defaultTolerance() {
      return C4 || CT.C4;
    }
  });
  const _drag = dart.privateName(friction_simulation, "_drag");
  const _dragLog = dart.privateName(friction_simulation, "_dragLog");
  const _x = dart.privateName(friction_simulation, "_x");
  const _v = dart.privateName(friction_simulation, "_v");
  friction_simulation.FrictionSimulation = class FrictionSimulation extends simulation.Simulation {
    static through(startPosition, endPosition, startVelocity, endVelocity) {
      if (!(startVelocity === 0.0 || endVelocity === 0.0 || startVelocity[$sign] === endVelocity[$sign])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/friction_simulation.dart", 44, 12, "startVelocity == 0.0 || endVelocity == 0.0 || startVelocity.sign == endVelocity.sign");
      if (!(startVelocity[$abs]() >= endVelocity[$abs]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/friction_simulation.dart", 45, 12, "startVelocity.abs() >= endVelocity.abs()");
      if (!((dart.notNull(endPosition) - dart.notNull(startPosition))[$sign] === startVelocity[$sign])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/friction_simulation.dart", 46, 12, "(endPosition - startPosition).sign == startVelocity.sign");
      return new friction_simulation.FrictionSimulation.new(friction_simulation.FrictionSimulation._dragFor(startPosition, endPosition, startVelocity, endVelocity), startPosition, startVelocity, {tolerance: new tolerance.Tolerance.new({velocity: endVelocity[$abs]()})});
    }
    static _dragFor(startPosition, endPosition, startVelocity, endVelocity) {
      return math.pow(2.718281828459045, (dart.notNull(startVelocity) - dart.notNull(endVelocity)) / (dart.notNull(startPosition) - dart.notNull(endPosition)));
    }
    x(time) {
      return dart.notNull(this[_x]) + dart.notNull(this[_v]) * math.pow(this[_drag], time) / dart.notNull(this[_dragLog]) - dart.notNull(this[_v]) / dart.notNull(this[_dragLog]);
    }
    dx(time) {
      return dart.notNull(this[_v]) * math.pow(this[_drag], time);
    }
    get finalX() {
      return dart.notNull(this[_x]) - dart.notNull(this[_v]) / dart.notNull(this[_dragLog]);
    }
    timeAtX(x) {
      if (x == this[_x]) return 0.0;
      if (this[_v] === 0.0 || (dart.notNull(this[_v]) > 0 ? dart.notNull(x) < dart.notNull(this[_x]) || dart.notNull(x) > dart.notNull(this.finalX) : dart.notNull(x) > dart.notNull(this[_x]) || dart.notNull(x) < dart.notNull(this.finalX))) return 1 / 0;
      return math.log(dart.notNull(this[_dragLog]) * (dart.notNull(x) - dart.notNull(this[_x])) / dart.notNull(this[_v]) + 1.0) / dart.notNull(this[_dragLog]);
    }
    isDone(time) {
      return this.dx(time)[$abs]() < dart.notNull(this.tolerance.velocity);
    }
  };
  (friction_simulation.FrictionSimulation.new = function(drag, position, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : C4 || CT.C4;
    this[_drag] = drag;
    this[_dragLog] = math.log(drag);
    this[_x] = position;
    this[_v] = velocity;
    friction_simulation.FrictionSimulation.__proto__.new.call(this, {tolerance: tolerance});
    ;
  }).prototype = friction_simulation.FrictionSimulation.prototype;
  dart.addTypeTests(friction_simulation.FrictionSimulation);
  dart.setMethodSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getMethods(friction_simulation.FrictionSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    timeAtX: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getGetters(friction_simulation.FrictionSimulation.__proto__),
    finalX: core.double
  }));
  dart.setLibraryUri(friction_simulation.FrictionSimulation, "package:flutter/src/physics/friction_simulation.dart");
  dart.setFieldSignature(friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getFields(friction_simulation.FrictionSimulation.__proto__),
    [_drag]: dart.finalFieldType(core.double),
    [_dragLog]: dart.finalFieldType(core.double),
    [_x]: dart.finalFieldType(core.double),
    [_v]: dart.finalFieldType(core.double)
  }));
  const _minX$ = dart.privateName(friction_simulation, "_minX");
  const _maxX$ = dart.privateName(friction_simulation, "_maxX");
  friction_simulation.BoundedFrictionSimulation = class BoundedFrictionSimulation extends friction_simulation.FrictionSimulation {
    x(time) {
      return super.x(time)[$clamp](this[_minX$], this[_maxX$]);
    }
    isDone(time) {
      return dart.test(super.isDone(time)) || (dart.notNull(this.x(time)) - dart.notNull(this[_minX$]))[$abs]() < dart.notNull(this.tolerance.distance) || (dart.notNull(this.x(time)) - dart.notNull(this[_maxX$]))[$abs]() < dart.notNull(this.tolerance.distance);
    }
  };
  (friction_simulation.BoundedFrictionSimulation.new = function(drag, position, velocity, _minX, _maxX) {
    this[_minX$] = _minX;
    this[_maxX$] = _maxX;
    if (!(position[$clamp](_minX, _maxX) === position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/friction_simulation.dart", 111, 14, "position.clamp(_minX, _maxX) == position");
    friction_simulation.BoundedFrictionSimulation.__proto__.new.call(this, drag, position, velocity);
    ;
  }).prototype = friction_simulation.BoundedFrictionSimulation.prototype;
  dart.addTypeTests(friction_simulation.BoundedFrictionSimulation);
  dart.setLibraryUri(friction_simulation.BoundedFrictionSimulation, "package:flutter/src/physics/friction_simulation.dart");
  dart.setFieldSignature(friction_simulation.BoundedFrictionSimulation, () => ({
    __proto__: dart.getFields(friction_simulation.BoundedFrictionSimulation.__proto__),
    [_minX$]: dart.finalFieldType(core.double),
    [_maxX$]: dart.finalFieldType(core.double)
  }));
  const _a = dart.privateName(gravity_simulation, "_a");
  const _x$ = dart.privateName(gravity_simulation, "_x");
  const _v$ = dart.privateName(gravity_simulation, "_v");
  const _end = dart.privateName(gravity_simulation, "_end");
  gravity_simulation.GravitySimulation = class GravitySimulation extends simulation.Simulation {
    x(time) {
      return dart.notNull(this[_x$]) + dart.notNull(this[_v$]) * dart.notNull(time) + 0.5 * dart.notNull(this[_a]) * dart.notNull(time) * dart.notNull(time);
    }
    dx(time) {
      return dart.notNull(this[_v$]) + dart.notNull(time) * dart.notNull(this[_a]);
    }
    isDone(time) {
      return this.x(time)[$abs]() >= dart.notNull(this[_end]);
    }
  };
  (gravity_simulation.GravitySimulation.new = function(acceleration, distance, endDistance, velocity) {
    if (!(acceleration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/gravity_simulation.dart", 59, 14, "(acceleration != nul");
    if (!(distance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/gravity_simulation.dart", 60, 14, "(distance != nul");
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/gravity_simulation.dart", 61, 14, "(velocity != nul");
    if (!(endDistance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/gravity_simulation.dart", 62, 14, "(endDistance != nul");
    if (!(dart.notNull(endDistance) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/gravity_simulation.dart", 63, 14, "(endDistance >= ");
    this[_a] = acceleration;
    this[_x$] = distance;
    this[_v$] = velocity;
    this[_end] = endDistance;
    gravity_simulation.GravitySimulation.__proto__.new.call(this);
    ;
  }).prototype = gravity_simulation.GravitySimulation.prototype;
  dart.addTypeTests(gravity_simulation.GravitySimulation);
  dart.setMethodSignature(gravity_simulation.GravitySimulation, () => ({
    __proto__: dart.getMethods(gravity_simulation.GravitySimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(gravity_simulation.GravitySimulation, "package:flutter/src/physics/gravity_simulation.dart");
  dart.setFieldSignature(gravity_simulation.GravitySimulation, () => ({
    __proto__: dart.getFields(gravity_simulation.GravitySimulation.__proto__),
    [_x$]: dart.finalFieldType(core.double),
    [_v$]: dart.finalFieldType(core.double),
    [_a]: dart.finalFieldType(core.double),
    [_end]: dart.finalFieldType(core.double)
  }));
  const ClampedSimulation_simulation = dart.privateName(clamped_simulation, "ClampedSimulation.simulation");
  const ClampedSimulation_xMin = dart.privateName(clamped_simulation, "ClampedSimulation.xMin");
  const ClampedSimulation_xMax = dart.privateName(clamped_simulation, "ClampedSimulation.xMax");
  const ClampedSimulation_dxMin = dart.privateName(clamped_simulation, "ClampedSimulation.dxMin");
  const ClampedSimulation_dxMax = dart.privateName(clamped_simulation, "ClampedSimulation.dxMax");
  clamped_simulation.ClampedSimulation = class ClampedSimulation extends simulation.Simulation {
    get simulation() {
      return this[simulation$];
    }
    set simulation(value) {
      super.simulation = value;
    }
    get xMin() {
      return this[xMin$];
    }
    set xMin(value) {
      super.xMin = value;
    }
    get xMax() {
      return this[xMax$];
    }
    set xMax(value) {
      super.xMax = value;
    }
    get dxMin() {
      return this[dxMin$];
    }
    set dxMin(value) {
      super.dxMin = value;
    }
    get dxMax() {
      return this[dxMax$];
    }
    set dxMax(value) {
      super.dxMax = value;
    }
    x(time) {
      return this.simulation.x(time)[$clamp](this.xMin, this.xMax);
    }
    dx(time) {
      return this.simulation.dx(time)[$clamp](this.dxMin, this.dxMax);
    }
    isDone(time) {
      return this.simulation.isDone(time);
    }
  };
  (clamped_simulation.ClampedSimulation.new = function(simulation, opts) {
    let xMin = opts && 'xMin' in opts ? opts.xMin : -1 / 0;
    let xMax = opts && 'xMax' in opts ? opts.xMax : 1 / 0;
    let dxMin = opts && 'dxMin' in opts ? opts.dxMin : -1 / 0;
    let dxMax = opts && 'dxMax' in opts ? opts.dxMax : 1 / 0;
    this[simulation$] = simulation;
    this[xMin$] = xMin;
    this[xMax$] = xMax;
    this[dxMin$] = dxMin;
    this[dxMax$] = dxMax;
    if (!(simulation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/clamped_simulation.dart", 30, 15, "simulation != null");
    if (!(dart.notNull(xMax) >= dart.notNull(xMin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/clamped_simulation.dart", 31, 15, "xMax >= xMin");
    if (!(dart.notNull(dxMax) >= dart.notNull(dxMin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/physics/clamped_simulation.dart", 32, 15, "dxMax >= dxMin");
    clamped_simulation.ClampedSimulation.__proto__.new.call(this);
    ;
  }).prototype = clamped_simulation.ClampedSimulation.prototype;
  dart.addTypeTests(clamped_simulation.ClampedSimulation);
  const simulation$ = ClampedSimulation_simulation;
  const xMin$ = ClampedSimulation_xMin;
  const xMax$ = ClampedSimulation_xMax;
  const dxMin$ = ClampedSimulation_dxMin;
  const dxMax$ = ClampedSimulation_dxMax;
  dart.setMethodSignature(clamped_simulation.ClampedSimulation, () => ({
    __proto__: dart.getMethods(clamped_simulation.ClampedSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(clamped_simulation.ClampedSimulation, "package:flutter/src/physics/clamped_simulation.dart");
  dart.setFieldSignature(clamped_simulation.ClampedSimulation, () => ({
    __proto__: dart.getFields(clamped_simulation.ClampedSimulation.__proto__),
    simulation: dart.finalFieldType(simulation.Simulation),
    xMin: dart.finalFieldType(core.double),
    xMax: dart.finalFieldType(core.double),
    dxMin: dart.finalFieldType(core.double),
    dxMax: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter/src/physics/clamped_simulation", {
    "package:flutter/src/physics/spring_simulation.dart": spring_simulation,
    "package:flutter/src/physics/utils.dart": utils,
    "package:flutter/src/physics/tolerance.dart": tolerance,
    "package:flutter/src/physics/simulation.dart": simulation,
    "package:flutter/src/physics/friction_simulation.dart": friction_simulation,
    "package:flutter/src/physics/gravity_simulation.dart": gravity_simulation,
    "package:flutter/src/physics/clamped_simulation.dart": clamped_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["spring_simulation.dart","simulation.dart","utils.dart","tolerance.dart","friction_simulation.dart","gravity_simulation.dart","clamped_simulation.dart"],"names":[],"mappings":"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","file":"clamped_simulation.ddc.js"}');
  // Exports:
  return {
    src__physics__spring_simulation: spring_simulation,
    src__physics__utils: utils,
    src__physics__tolerance: tolerance,
    src__physics__simulation: simulation,
    src__physics__friction_simulation: friction_simulation,
    src__physics__gravity_simulation: gravity_simulation,
    src__physics__clamped_simulation: clamped_simulation
  };
});

//# sourceMappingURL=clamped_simulation.ddc.js.map
