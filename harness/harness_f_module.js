function print(msg) {
  console.log(msg);
}
//assert.js
// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of assertion functions used throughout test262
defines: [assert]
---*/


function assert(mustBeTrue, message) {
  if (mustBeTrue === true) {
    return;
  }

  if (message === undefined) {
    message = 'Expected true but got ' + assert._toString(mustBeTrue);
  }
  throw new Test262Error(message);
}

assert._isSameValue = function (a, b) {
  if (a === b) {
    // Handle +/-0 vs. -/+0
    return a !== 0 || 1 / a === 1 / b;
  }

  // Handle NaN vs. NaN
  return a !== a && b !== b;
};

assert.sameValue = function (actual, expected, message) {
  try {
    if (assert._isSameValue(actual, expected)) {
      return;
    }
  } catch (error) {
    throw new Test262Error(message + ' (_isSameValue operation threw) ' + error);
    return;
  }

  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  message += 'Expected SameValue(«' + assert._toString(actual) + '», «' + assert._toString(expected) + '») to be true';

  throw new Test262Error(message);
};

assert.notSameValue = function (actual, unexpected, message) {
  if (!assert._isSameValue(actual, unexpected)) {
    return;
  }

  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  message += 'Expected SameValue(«' + assert._toString(actual) + '», «' + assert._toString(unexpected) + '») to be false';

  throw new Test262Error(message);
};

assert.throws = function (expectedErrorConstructor, func, message) {
  var expectedName, actualName;
  if (typeof func !== "function") {
    throw new Test262Error('assert.throws requires two arguments: the error constructor ' +
      'and a function to run');
    return;
  }
  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  try {
    func();
  } catch (thrown) {
    if (typeof thrown !== 'object' || thrown === null) {
      message += 'Thrown value was not an object!';
      throw new Test262Error(message);
    } else if (thrown.constructor !== expectedErrorConstructor) {
      expectedName = expectedErrorConstructor.name;
      actualName = thrown.constructor.name;
      if (expectedName === actualName) {
        message += 'Expected a ' + expectedName + ' but got a different error constructor with the same name';
      } else {
        message += 'Expected a ' + expectedName + ' but got a ' + actualName;
      }
      throw new Test262Error(message);
    }
    return;
  }

  message += 'Expected a ' + expectedErrorConstructor.name + ' to be thrown but no exception was thrown at all';
  throw new Test262Error(message);
};

assert._toString = function (value) {
  try {
    if (value === 0 && 1 / value === -Infinity) {
      return '-0';
    }

    return String(value);
  } catch (err) {
    if (err.name === 'TypeError') {
      return Object.prototype.toString.call(value);
    }

    throw err;
  }
};

//compareIterator.js
// Copyright (C) 2018 Peter Wong.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Compare the values of an iterator with an array of expected values
defines: [assert.compareIterator]
---*/

// Example:
//
//    function* numbers() {
//      yield 1;
//      yield 2;
//      yield 3;
//    }
//
//    compareIterator(numbers(), [
//      v => assert.sameValue(v, 1),
//      v => assert.sameValue(v, 2),
//      v => assert.sameValue(v, 3),
//    ]);
//
assert.compareIterator = function(iter, validators, message) {
  message = message || '';

  var i, result;
  for (i = 0; i < validators.length; i++) {
    result = iter.next();
    assert(!result.done, 'Expected ' + i + ' values(s). Instead iterator only produced ' + (i - 1) + ' value(s). ' + message);
    validators[i](result.value);
  }

  result = iter.next();
  assert(result.done, 'Expected only ' + i + ' values(s). Instead iterator produced more. ' + message);
  assert.sameValue(result.value, undefined, 'Expected value of `undefined` when iterator completes. ' + message);
}

//wellKnownIntrinsicObjects.js
// Copyright (C) 2018 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    An Array of all representable Well-Known Intrinsic Objects
defines: [WellKnownIntrinsicObjects]
---*/

const WellKnownIntrinsicObjects = [
  {
    name: '%AggregateError%',
    source: 'AggregateError',
  },
  {
    name: '%Array%',
    source: 'Array',
  },
  {
    name: '%ArrayBuffer%',
    source: 'ArrayBuffer',
  },
  {
    name: '%ArrayIteratorPrototype%',
    source: 'Object.getPrototypeOf([][Symbol.iterator]())',
  },
  {
    name: '%AsyncFromSyncIteratorPrototype%',
    source: 'undefined',
  },
  {
    name: '%AsyncFunction%',
    source: '(async function() {}).constructor',
  },
  {
    name: '%AsyncGeneratorFunction%',
    source: 'Object.getPrototypeOf(async function * () {})',
  },
  {
    name: '%AsyncIteratorPrototype%',
    source: '((async function * () {})())[Symbol.asyncIterator]()',
  },
  {
    name: '%Atomics%',
    source: 'Atomics',
  },
  {
    name: '%BigInt%',
    source: 'BigInt',
  },
  {
    name: '%BigInt64Array%',
    source: 'BigInt64Array',
  },
  {
    name: '%BigUint64Array%',
    source: 'BigUint64Array',
  },
  {
    name: '%Boolean%',
    source: 'Boolean',
  },
  {
    name: '%DataView%',
    source: 'DataView',
  },
  {
    name: '%Date%',
    source: 'Date',
  },
  {
    name: '%decodeURI%',
    source: 'decodeURI',
  },
  {
    name: '%decodeURIComponent%',
    source: 'decodeURIComponent',
  },
  {
    name: '%encodeURI%',
    source: 'encodeURI',
  },
  {
    name: '%encodeURIComponent%',
    source: 'encodeURIComponent',
  },
  {
    name: '%Error%',
    source: 'Error',
  },
  {
    name: '%eval%',
    source: 'eval',
  },
  {
    name: '%EvalError%',
    source: 'EvalError',
  },
  {
    name: '%FinalizationRegistry%',
    source: 'FinalizationRegistry',
  },
  {
    name: '%Float32Array%',
    source: 'Float32Array',
  },
  {
    name: '%Float64Array%',
    source: 'Float64Array',
  },
  {
    name: '%ForInIteratorPrototype%',
    source: '',
  },
  {
    name: '%Function%',
    source: 'Function',
  },
  {
    name: '%GeneratorFunction%',
    source: 'Object.getPrototypeOf(function * () {})',
  },
  {
    name: '%Int8Array%',
    source: 'Int8Array',
  },
  {
    name: '%Int16Array%',
    source: 'Int16Array',
  },
  {
    name: '%Int32Array%',
    source: 'Int32Array',
  },
  {
    name: '%isFinite%',
    source: 'isFinite',
  },
  {
    name: '%isNaN%',
    source: 'isNaN',
  },
  {
    name: '%IteratorPrototype%',
    source: 'Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))',
  },
  {
    name: '%JSON%',
    source: 'JSON',
  },
  {
    name: '%Map%',
    source: 'Map',
  },
  {
    name: '%MapIteratorPrototype%',
    source: 'Object.getPrototypeOf(new Map()[Symbol.iterator]())',
  },
  {
    name: '%Math%',
    source: 'Math',
  },
  {
    name: '%Number%',
    source: 'Number',
  },
  {
    name: '%Object%',
    source: 'Object',
  },
  {
    name: '%parseFloat%',
    source: 'parseFloat',
  },
  {
    name: '%parseInt%',
    source: 'parseInt',
  },
  {
    name: '%Promise%',
    source: 'Promise',
  },
  {
    name: '%Proxy%',
    source: 'Proxy',
  },
  {
    name: '%RangeError%',
    source: 'RangeError',
  },
  {
    name: '%ReferenceError%',
    source: 'ReferenceError',
  },
  {
    name: '%Reflect%',
    source: 'Reflect',
  },
  {
    name: '%RegExp%',
    source: 'RegExp',
  },
  {
    name: '%RegExpStringIteratorPrototype%',
    source: 'RegExp.prototype[Symbol.matchAll]("")',
  },
  {
    name: '%Set%',
    source: 'Set',
  },
  {
    name: '%SetIteratorPrototype%',
    source: 'Object.getPrototypeOf(new Set()[Symbol.iterator]())',
  },
  {
    name: '%SharedArrayBuffer%',
    source: 'SharedArrayBuffer',
  },
  {
    name: '%String%',
    source: 'String',
  },
  {
    name: '%StringIteratorPrototype%',
    source: 'Object.getPrototypeOf(new String()[Symbol.iterator]())',
  },
  {
    name: '%Symbol%',
    source: 'Symbol',
  },
  {
    name: '%SyntaxError%',
    source: 'SyntaxError',
  },
  {
    name: '%ThrowTypeError%',
    source: '(function() { "use strict"; return Object.getOwnPropertyDescriptor(arguments, "callee").get })()',
  },
  {
    name: '%TypedArray%',
    source: 'Object.getPrototypeOf(Uint8Array)',
  },
  {
    name: '%TypeError%',
    source: 'TypeError',
  },
  {
    name: '%Uint8Array%',
    source: 'Uint8Array',
  },
  {
    name: '%Uint8ClampedArray%',
    source: 'Uint8ClampedArray',
  },
  {
    name: '%Uint16Array%',
    source: 'Uint16Array',
  },
  {
    name: '%Uint32Array%',
    source: 'Uint32Array',
  },
  {
    name: '%URIError%',
    source: 'URIError',
  },
  {
    name: '%WeakMap%',
    source: 'WeakMap',
  },
  {
    name: '%WeakRef%',
    source: 'WeakRef',
  },
  {
    name: '%WeakSet%',
    source: 'WeakSet',
  },
];

WellKnownIntrinsicObjects.forEach((wkio) => {
  var actual;

  try {
    actual = new Function("return " + wkio.source)();
  } catch (exception) {
    // Nothing to do here.
  }

  wkio.value = actual;
});

//promiseHelper.js
// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Check that an array contains a numeric sequence starting at 1
    and incrementing by 1 for each entry in the array. Used by
    Promise tests to assert the order of execution in deep Promise
    resolution pipelines.
defines: [checkSequence, checkSettledPromises]
---*/

function checkSequence(arr, message) {
  arr.forEach(function(e, i) {
    if (e !== (i+1)) {
      throw new Test262Error((message ? message : "Steps in unexpected sequence:") +
             " '" + arr.join(',') + "'");
    }
  });

  return true;
}

function checkSettledPromises(settleds, expected, message) {
  const prefix = message ? `${message}: ` : '';

  assert.sameValue(Array.isArray(settleds), true, `${prefix}Settled values is an array`);

  assert.sameValue(
    settleds.length,
    expected.length,
    `${prefix}The settled values has a different length than expected`
  );

  settleds.forEach((settled, i) => {
    assert.sameValue(
      Object.prototype.hasOwnProperty.call(settled, 'status'),
      true,
      `${prefix}The settled value has a property status`
    );

    assert.sameValue(settled.status, expected[i].status, `${prefix}status for item ${i}`);

    if (settled.status === 'fulfilled') {
      assert.sameValue(
        Object.prototype.hasOwnProperty.call(settled, 'value'),
        true,
        `${prefix}The fulfilled promise has a property named value`
      );

      assert.sameValue(
        Object.prototype.hasOwnProperty.call(settled, 'reason'),
        false,
        `${prefix}The fulfilled promise has no property named reason`
      );

      assert.sameValue(settled.value, expected[i].value, `${prefix}value for item ${i}`);
    } else {
      assert.sameValue(settled.status, 'rejected', `${prefix}Valid statuses are only fulfilled or rejected`);

      assert.sameValue(
        Object.prototype.hasOwnProperty.call(settled, 'value'),
        false,
        `${prefix}The fulfilled promise has no property named value`
      );

      assert.sameValue(
        Object.prototype.hasOwnProperty.call(settled, 'reason'),
        true,
        `${prefix}The fulfilled promise has a property named reason`
      );

      assert.sameValue(settled.reason, expected[i].reason, `${prefix}Reason value for item ${i}`);
    }
  });
}

//isConstructor.js
// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
    Test if a given function is a constructor function.
defines: [isConstructor]
---*/

function isConstructor(f) {
    try {
        Reflect.construct(function(){}, [], f);
    } catch (e) {
        return false;
    }
    return true;
}

//async-gc.js
// Copyright (C) 2019  Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Collection of functions used to capture references cleanup from garbage collectors
features: [FinalizationRegistry.prototype.cleanupSome, FinalizationRegistry, Symbol, async-functions]
flags: [non-deterministic]
defines: [asyncGC, asyncGCDeref, resolveAsyncGC]
---*/

function asyncGC(...targets) {
  var finalizationRegistry = new FinalizationRegistry(() => {});
  var length = targets.length;

  for (let target of targets) {
    finalizationRegistry.register(target, 'target');
    target = null;
  }

  targets = null;

  return Promise.resolve('tick').then(() => asyncGCDeref()).then(() => {
    var names = [];

    // consume iterator to capture names
    finalizationRegistry.cleanupSome(name => { names.push(name); });

    if (!names || names.length != length) {
      throw asyncGC.notCollected;
    }
  });
}

asyncGC.notCollected = Symbol('Object was not collected');

async function asyncGCDeref() {
  var trigger;

  // TODO: Remove this when $262.clearKeptObject becomes documented and required
  if ($262.clearKeptObjects) {
    trigger = $262.clearKeptObjects();
  }

  await $262.gc();

  return Promise.resolve(trigger);
}

function resolveAsyncGC(err) {
  if (err === asyncGC.notCollected) {
    // Do not fail as GC can't provide necessary resources.
    $DONE();
  }

  $DONE(err);
}

//proxyTrapsHelper.js
// Copyright (C) 2016 Jordan Harband.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Used to assert the correctness of object behavior in the presence
    and context of Proxy objects.
defines: [allowProxyTraps]
---*/

function allowProxyTraps(overrides) {
  function throwTest262Error(msg) {
    return function () { throw new Test262Error(msg); };
  }
  if (!overrides) { overrides = {}; }
  return {
    getPrototypeOf: overrides.getPrototypeOf || throwTest262Error('[[GetPrototypeOf]] trap called'),
    setPrototypeOf: overrides.setPrototypeOf || throwTest262Error('[[SetPrototypeOf]] trap called'),
    isExtensible: overrides.isExtensible || throwTest262Error('[[IsExtensible]] trap called'),
    preventExtensions: overrides.preventExtensions || throwTest262Error('[[PreventExtensions]] trap called'),
    getOwnPropertyDescriptor: overrides.getOwnPropertyDescriptor || throwTest262Error('[[GetOwnProperty]] trap called'),
    has: overrides.has || throwTest262Error('[[HasProperty]] trap called'),
    get: overrides.get || throwTest262Error('[[Get]] trap called'),
    set: overrides.set || throwTest262Error('[[Set]] trap called'),
    deleteProperty: overrides.deleteProperty || throwTest262Error('[[Delete]] trap called'),
    defineProperty: overrides.defineProperty || throwTest262Error('[[DefineOwnProperty]] trap called'),
    enumerate: throwTest262Error('[[Enumerate]] trap called: this trap has been removed'),
    ownKeys: overrides.ownKeys || throwTest262Error('[[OwnPropertyKeys]] trap called'),
    apply: overrides.apply || throwTest262Error('[[Call]] trap called'),
    construct: overrides.construct || throwTest262Error('[[Construct]] trap called')
  };
}

//hidden-constructors.js
// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Provides uniform access to built-in constructors that are not exposed to the global object.
defines:
  - AsyncArrowFunction
  - AsyncFunction
  - AsyncGeneratorFunction
  - GeneratorFunction
---*/

var AsyncArrowFunction = Object.getPrototypeOf(async () => {}).constructor;
var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;
var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;

//decimalToHexString.js
// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of various encoding operations.
defines: [decimalToHexString, decimalToPercentHexString]
---*/

function decimalToHexString(n) {
  var hex = "0123456789ABCDEF";
  n >>>= 0;
  var s = "";
  while (n) {
    s = hex[n & 0xf] + s;
    n >>>= 4;
  }
  while (s.length < 4) {
    s = "0" + s;
  }
  return s;
}

function decimalToPercentHexString(n) {
  var hex = "0123456789ABCDEF";
  return "%" + hex[(n >> 4) & 0xf] + hex[n & 0xf];
}

//deepEqual.js
// Copyright 2019 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  Compare two values structurally
defines: [assert.deepEqual]
---*/

assert.deepEqual = function(actual, expected, message) {
  var format = assert.deepEqual.format;
  assert(
    assert.deepEqual._compare(actual, expected),
    `Expected ${format(actual)} to be structurally equal to ${format(expected)}. ${(message || '')}`
  );
};

assert.deepEqual.format = function(value, seen) {
  switch (typeof value) {
    case 'string':
      return typeof JSON !== "undefined" ? JSON.stringify(value) : `"${value}"`;
    case 'number':
    case 'boolean':
    case 'symbol':
    case 'bigint':
      return value.toString();
    case 'undefined':
      return 'undefined';
    case 'function':
      return `[Function${value.name ? `: ${value.name}` : ''}]`;
    case 'object':
      if (value === null) return 'null';
      if (value instanceof Date) return `Date "${value.toISOString()}"`;
      if (value instanceof RegExp) return value.toString();
      if (!seen) {
        seen = {
          counter: 0,
          map: new Map()
        };
      }

      let usage = seen.map.get(value);
      if (usage) {
        usage.used = true;
        return `[Ref: #${usage.id}]`;
      }

      usage = { id: ++seen.counter, used: false };
      seen.map.set(value, usage);

      if (typeof Set !== "undefined" && value instanceof Set) {
        return `Set {${Array.from(value).map(value => assert.deepEqual.format(value, seen)).join(', ')}}${usage.used ? ` as #${usage.id}` : ''}`;
      }
      if (typeof Map !== "undefined" && value instanceof Map) {
        return `Map {${Array.from(value).map(pair => `${assert.deepEqual.format(pair[0], seen)} => ${assert.deepEqual.format(pair[1], seen)}}`).join(', ')}}${usage.used ? ` as #${usage.id}` : ''}`;
      }
      if (Array.isArray ? Array.isArray(value) : value instanceof Array) {
        return `[${value.map(value => assert.deepEqual.format(value, seen)).join(', ')}]${usage.used ? ` as #${usage.id}` : ''}`;
      }
      let tag = Symbol.toStringTag in value ? value[Symbol.toStringTag] : 'Object';
      if (tag === 'Object' && Object.getPrototypeOf(value) === null) {
        tag = '[Object: null prototype]';
      }
      return `${tag ? `${tag} ` : ''}{ ${Object.keys(value).map(key => `${key.toString()}: ${assert.deepEqual.format(value[key], seen)}`).join(', ')} }${usage.used ? ` as #${usage.id}` : ''}`;
    default:
      return typeof value;
  }
};

assert.deepEqual._compare = (function () {
  var EQUAL = 1;
  var NOT_EQUAL = -1;
  var UNKNOWN = 0;

  function deepEqual(a, b) {
    return compareEquality(a, b) === EQUAL;
  }

  function compareEquality(a, b, cache) {
    return compareIf(a, b, isOptional, compareOptionality)
      || compareIf(a, b, isPrimitiveEquatable, comparePrimitiveEquality)
      || compareIf(a, b, isObjectEquatable, compareObjectEquality, cache)
      || NOT_EQUAL;
  }

  function compareIf(a, b, test, compare, cache) {
    return !test(a)
      ? !test(b) ? UNKNOWN : NOT_EQUAL
      : !test(b) ? NOT_EQUAL : cacheComparison(a, b, compare, cache);
  }

  function tryCompareStrictEquality(a, b) {
    return a === b ? EQUAL : UNKNOWN;
  }

  function tryCompareTypeOfEquality(a, b) {
    return typeof a !== typeof b ? NOT_EQUAL : UNKNOWN;
  }

  function tryCompareToStringTagEquality(a, b) {
    var aTag = Symbol.toStringTag in a ? a[Symbol.toStringTag] : undefined;
    var bTag = Symbol.toStringTag in b ? b[Symbol.toStringTag] : undefined;
    return aTag !== bTag ? NOT_EQUAL : UNKNOWN;
  }

  function isOptional(value) {
    return value === undefined
      || value === null;
  }

  function compareOptionality(a, b) {
    return tryCompareStrictEquality(a, b)
      || NOT_EQUAL;
  }

  function isPrimitiveEquatable(value) {
    switch (typeof value) {
      case 'string':
      case 'number':
      case 'bigint':
      case 'boolean':
      case 'symbol':
        return true;
      default:
        return isBoxed(value);
    }
  }

  function comparePrimitiveEquality(a, b) {
    if (isBoxed(a)) a = a.valueOf();
    if (isBoxed(b)) b = b.valueOf();
    return tryCompareStrictEquality(a, b)
      || tryCompareTypeOfEquality(a, b)
      || compareIf(a, b, isNaNEquatable, compareNaNEquality)
      || NOT_EQUAL;
  }

  function isNaNEquatable(value) {
    return typeof value === 'number';
  }

  function compareNaNEquality(a, b) {
    return isNaN(a) && isNaN(b) ? EQUAL : NOT_EQUAL;
  }

  function isObjectEquatable(value) {
    return typeof value === 'object';
  }

  function compareObjectEquality(a, b, cache) {
    if (!cache) cache = new Map();
    return getCache(cache, a, b)
      || setCache(cache, a, b, EQUAL) // consider equal for now
      || cacheComparison(a, b, tryCompareStrictEquality, cache)
      || cacheComparison(a, b, tryCompareToStringTagEquality, cache)
      || compareIf(a, b, isValueOfEquatable, compareValueOfEquality)
      || compareIf(a, b, isToStringEquatable, compareToStringEquality)
      || compareIf(a, b, isArrayLikeEquatable, compareArrayLikeEquality, cache)
      || compareIf(a, b, isStructurallyEquatable, compareStructuralEquality, cache)
      || compareIf(a, b, isIterableEquatable, compareIterableEquality, cache)
      || cacheComparison(a, b, fail, cache);
  }

  function isBoxed(value) {
    return value instanceof String
      || value instanceof Number
      || value instanceof Boolean
      || typeof Symbol === 'function' && value instanceof Symbol
      || typeof BigInt === 'function' && value instanceof BigInt;
  }

  function isValueOfEquatable(value) {
    return value instanceof Date;
  }

  function compareValueOfEquality(a, b) {
    return compareIf(a.valueOf(), b.valueOf(), isPrimitiveEquatable, comparePrimitiveEquality)
      || NOT_EQUAL;
  }

  function isToStringEquatable(value) {
    return value instanceof RegExp;
  }

  function compareToStringEquality(a, b) {
    return compareIf(a.toString(), b.toString(), isPrimitiveEquatable, comparePrimitiveEquality)
      || NOT_EQUAL;
  }

  function isArrayLikeEquatable(value) {
    return (Array.isArray ? Array.isArray(value) : value instanceof Array)
      || (typeof Uint8Array === 'function' && value instanceof Uint8Array)
      || (typeof Uint8ClampedArray === 'function' && value instanceof Uint8ClampedArray)
      || (typeof Uint16Array === 'function' && value instanceof Uint16Array)
      || (typeof Uint32Array === 'function' && value instanceof Uint32Array)
      || (typeof Int8Array === 'function' && value instanceof Int8Array)
      || (typeof Int16Array === 'function' && value instanceof Int16Array)
      || (typeof Int32Array === 'function' && value instanceof Int32Array)
      || (typeof Float32Array === 'function' && value instanceof Float32Array)
      || (typeof Float64Array === 'function' && value instanceof Float64Array)
      || (typeof BigUint64Array === 'function' && value instanceof BigUint64Array)
      || (typeof BigInt64Array === 'function' && value instanceof BigInt64Array);
  }

  function compareArrayLikeEquality(a, b, cache) {
    if (a.length !== b.length) return NOT_EQUAL;
    for (var i = 0; i < a.length; i++) {
      if (compareEquality(a[i], b[i], cache) === NOT_EQUAL) {
        return NOT_EQUAL;
      }
    }
    return EQUAL;
  }

  function isStructurallyEquatable(value) {
    return !(typeof Promise === 'function' && value instanceof Promise // only comparable by reference
      || typeof WeakMap === 'function' && value instanceof WeakMap // only comparable by reference
      || typeof WeakSet === 'function' && value instanceof WeakSet // only comparable by reference
      || typeof Map === 'function' && value instanceof Map // comparable via @@iterator
      || typeof Set === 'function' && value instanceof Set); // comparable via @@iterator
  }

  function compareStructuralEquality(a, b, cache) {
    var aKeys = [];
    for (var key in a) aKeys.push(key);

    var bKeys = [];
    for (var key in b) bKeys.push(key);

    if (aKeys.length !== bKeys.length) {
      return NOT_EQUAL;
    }

    aKeys.sort();
    bKeys.sort();

    for (var i = 0; i < aKeys.length; i++) {
      var aKey = aKeys[i];
      var bKey = bKeys[i];
      if (compareEquality(aKey, bKey, cache) === NOT_EQUAL) {
        return NOT_EQUAL;
      }
      if (compareEquality(a[aKey], b[bKey], cache) === NOT_EQUAL) {
        return NOT_EQUAL;
      }
    }

    return compareIf(a, b, isIterableEquatable, compareIterableEquality, cache)
      || EQUAL;
  }

  function isIterableEquatable(value) {
    return typeof Symbol === 'function'
      && typeof value[Symbol.iterator] === 'function';
  }

  function compareIteratorEquality(a, b, cache) {
    if (typeof Map === 'function' && a instanceof Map && b instanceof Map ||
      typeof Set === 'function' && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return NOT_EQUAL; // exit early if we detect a difference in size
    }

    var ar, br;
    while (true) {
      ar = a.next();
      br = b.next();
      if (ar.done) {
        if (br.done) return EQUAL;
        if (b.return) b.return();
        return NOT_EQUAL;
      }
      if (br.done) {
        if (a.return) a.return();
        return NOT_EQUAL;
      }
      if (compareEquality(ar.value, br.value, cache) === NOT_EQUAL) {
        if (a.return) a.return();
        if (b.return) b.return();
        return NOT_EQUAL;
      }
    }
  }

  function compareIterableEquality(a, b, cache) {
    return compareIteratorEquality(a[Symbol.iterator](), b[Symbol.iterator](), cache);
  }

  function cacheComparison(a, b, compare, cache) {
    var result = compare(a, b, cache);
    if (cache && (result === EQUAL || result === NOT_EQUAL)) {
      setCache(cache, a, b, /** @type {EQUAL | NOT_EQUAL} */(result));
    }
    return result;
  }

  function fail() {
    return NOT_EQUAL;
  }

  function setCache(cache, left, right, result) {
    var otherCache;

    otherCache = cache.get(left);
    if (!otherCache) cache.set(left, otherCache = new Map());
    otherCache.set(right, result);

    otherCache = cache.get(right);
    if (!otherCache) cache.set(right, otherCache = new Map());
    otherCache.set(left, result);
  }

  function getCache(cache, left, right) {
    var otherCache;
    var result;

    otherCache = cache.get(left);
    result = otherCache && otherCache.get(right);
    if (result) return result;

    otherCache = cache.get(right);
    result = otherCache && otherCache.get(left);
    if (result) return result;

    return UNKNOWN;
  }

  return deepEqual;
})();

//detachArrayBuffer.js
// Copyright (C) 2016 the V8 project authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    A function used in the process of asserting correctness of TypedArray objects.

    $262.detachArrayBuffer is defined by a host.
defines: [$DETACHBUFFER]
---*/

function $DETACHBUFFER(buffer) {
  if (!$262 || typeof $262.detachArrayBuffer !== "function") {
    throw new Test262Error("No method available to detach an ArrayBuffer");
  }
  $262.detachArrayBuffer(buffer);
}

//temporalHelpers.js
// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    This defines helper objects and functions for testing Temporal.
defines: [TemporalHelpers]
features: [Symbol.species, Symbol.iterator, Temporal]
---*/

var TemporalHelpers = {
  /*
   * assertDuration(duration, years, ...,  nanoseconds[, description]):
   *
   * Shorthand for asserting that each field of a Temporal.Duration is equal to
   * an expected value.
   */
  assertDuration(duration, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, description = "") {
    assert(duration instanceof Temporal.Duration, `${description} instanceof`);
    assert.sameValue(duration.years, years, `${description} years result`);
    assert.sameValue(duration.months, months, `${description} months result`);
    assert.sameValue(duration.weeks, weeks, `${description} weeks result`);
    assert.sameValue(duration.days, days, `${description} days result`);
    assert.sameValue(duration.hours, hours, `${description} hours result`);
    assert.sameValue(duration.minutes, minutes, `${description} minutes result`);
    assert.sameValue(duration.seconds, seconds, `${description} seconds result`);
    assert.sameValue(duration.milliseconds, milliseconds, `${description} milliseconds result`);
    assert.sameValue(duration.microseconds, microseconds, `${description} microseconds result`);
    assert.sameValue(duration.nanoseconds, nanoseconds, `${description} nanoseconds result`);
  },

  /*
   * assertDurationsEqual(actual, expected[, description]):
   *
   * Shorthand for asserting that each field of a Temporal.Duration is equal to
   * the corresponding field in another Temporal.Duration.
   */
  assertDurationsEqual(actual, expected, description = "") {
    assert(expected instanceof Temporal.Duration, `${description} expected value should be a Temporal.Duration`);
    TemporalHelpers.assertDuration(actual, expected.years, expected.months, expected.weeks, expected.days, expected.hours, expected.minutes, expected.seconds, expected.milliseconds, expected.microseconds, expected.nanoseconds, description);
  },

  /*
   * assertInstantsEqual(actual, expected[, description]):
   *
   * Shorthand for asserting that two Temporal.Instants are of the correct type
   * and equal according to their equals() methods.
   */
  assertInstantsEqual(actual, expected, description = "") {
    assert(expected instanceof Temporal.Instant, `${description} expected value should be a Temporal.Instant`);
    assert(actual instanceof Temporal.Instant, `${description} instanceof`);
    assert(actual.equals(expected), `${description} equals method`);
  },

  /*
   * assertPlainDate(date, year, ..., nanosecond[, description[, era, eraYear]]):
   *
   * Shorthand for asserting that each field of a Temporal.PlainDate is equal to
   * an expected value. (Except the `calendar` property, since callers may want
   * to assert either object equality with an object they put in there, or the
   * result of date.calendar.toString().)
   */
  assertPlainDate(date, year, month, monthCode, day, description = "", era = undefined, eraYear = undefined) {
    assert(date instanceof Temporal.PlainDate, `${description} instanceof`);
    assert.sameValue(date.era, era, `${description} era result`);
    assert.sameValue(date.eraYear, eraYear, `${description} eraYear result`);
    assert.sameValue(date.year, year, `${description} year result`);
    assert.sameValue(date.month, month, `${description} month result`);
    assert.sameValue(date.monthCode, monthCode, `${description} monthCode result`);
    assert.sameValue(date.day, day, `${description} day result`);
  },

  /*
   * assertPlainDateTime(datetime, year, ..., nanosecond[, description[, era, eraYear]]):
   *
   * Shorthand for asserting that each field of a Temporal.PlainDateTime is
   * equal to an expected value. (Except the `calendar` property, since callers
   * may want to assert either object equality with an object they put in there,
   * or the result of datetime.calendar.toString().)
   */
  assertPlainDateTime(datetime, year, month, monthCode, day, hour, minute, second, millisecond, microsecond, nanosecond, description = "", era = undefined, eraYear = undefined) {
    assert(datetime instanceof Temporal.PlainDateTime, `${description} instanceof`);
    assert.sameValue(datetime.era, era, `${description} era result`);
    assert.sameValue(datetime.eraYear, eraYear, `${description} eraYear result`);
    assert.sameValue(datetime.year, year, `${description} year result`);
    assert.sameValue(datetime.month, month, `${description} month result`);
    assert.sameValue(datetime.monthCode, monthCode, `${description} monthCode result`);
    assert.sameValue(datetime.day, day, `${description} day result`);
    assert.sameValue(datetime.hour, hour, `${description} hour result`);
    assert.sameValue(datetime.minute, minute, `${description} minute result`);
    assert.sameValue(datetime.second, second, `${description} second result`);
    assert.sameValue(datetime.millisecond, millisecond, `${description} millisecond result`);
    assert.sameValue(datetime.microsecond, microsecond, `${description} microsecond result`);
    assert.sameValue(datetime.nanosecond, nanosecond, `${description} nanosecond result`);
  },

  /*
   * assertPlainDateTimesEqual(actual, expected[, description]):
   *
   * Shorthand for asserting that two Temporal.PlainDateTimes are of the correct
   * type, equal according to their equals() methods, and additionally that
   * their calendars are the same value.
   */
  assertPlainDateTimesEqual(actual, expected, description = "") {
    assert(expected instanceof Temporal.PlainDateTime, `${description} expected value should be a Temporal.PlainDateTime`);
    assert(actual instanceof Temporal.PlainDateTime, `${description} instanceof`);
    assert(actual.equals(expected), `${description} equals method`);
    assert.sameValue(actual.calendar, expected.calendar, `${description} calendar same value`);
  },

  /*
   * assertPlainMonthDay(monthDay, monthCode, day[, description [, referenceISOYear]]):
   *
   * Shorthand for asserting that each field of a Temporal.PlainMonthDay is
   * equal to an expected value. (Except the `calendar` property, since callers
   * may want to assert either object equality with an object they put in there,
   * or the result of monthDay.calendar.toString().)
   */
  assertPlainMonthDay(monthDay, monthCode, day, description = "", referenceISOYear = 1972) {
    assert(monthDay instanceof Temporal.PlainMonthDay, `${description} instanceof`);
    assert.sameValue(monthDay.monthCode, monthCode, `${description} monthCode result`);
    assert.sameValue(monthDay.day, day, `${description} day result`);
    assert.sameValue(monthDay.getISOFields().isoYear, referenceISOYear, `${description} referenceISOYear result`);
  },

  /*
   * assertPlainTime(time, hour, ..., nanosecond[, description]):
   *
   * Shorthand for asserting that each field of a Temporal.PlainTime is equal to
   * an expected value.
   */
  assertPlainTime(time, hour, minute, second, millisecond, microsecond, nanosecond, description = "") {
    assert(time instanceof Temporal.PlainTime, `${description} instanceof`);
    assert.sameValue(time.hour, hour, `${description} hour result`);
    assert.sameValue(time.minute, minute, `${description} minute result`);
    assert.sameValue(time.second, second, `${description} second result`);
    assert.sameValue(time.millisecond, millisecond, `${description} millisecond result`);
    assert.sameValue(time.microsecond, microsecond, `${description} microsecond result`);
    assert.sameValue(time.nanosecond, nanosecond, `${description} nanosecond result`);
  },

  /*
   * assertPlainTimesEqual(actual, expected[, description]):
   *
   * Shorthand for asserting that two Temporal.PlainTimes are of the correct
   * type and equal according to their equals() methods.
   */
  assertPlainTimesEqual(actual, expected, description = "") {
    assert(expected instanceof Temporal.PlainTime, `${description} expected value should be a Temporal.PlainTime`);
    assert(actual instanceof Temporal.PlainTime, `${description} instanceof`);
    assert(actual.equals(expected), `${description} equals method`);
  },

  /*
   * assertPlainYearMonth(yearMonth, year, month, monthCode[, description[, era, eraYear]]):
   *
   * Shorthand for asserting that each field of a Temporal.PlainYearMonth is
   * equal to an expected value. (Except the `calendar` property, since callers
   * may want to assert either object equality with an object they put in there,
   * or the result of yearMonth.calendar.toString().)
   */
  assertPlainYearMonth(yearMonth, year, month, monthCode, description = "", era = undefined, eraYear = undefined) {
    assert(yearMonth instanceof Temporal.PlainYearMonth, `${description} instanceof`);
    assert.sameValue(yearMonth.era, era, `${description} era result`);
    assert.sameValue(yearMonth.eraYear, eraYear, `${description} eraYear result`);
    assert.sameValue(yearMonth.year, year, `${description} year result`);
    assert.sameValue(yearMonth.month, month, `${description} month result`);
    assert.sameValue(yearMonth.monthCode, monthCode, `${description} monthCode result`);
  },

  /*
   * assertZonedDateTimesEqual(actual, expected[, description]):
   *
   * Shorthand for asserting that two Temporal.ZonedDateTimes are of the correct
   * type, equal according to their equals() methods, and additionally that
   * their time zones and calendars are the same value.
   */
  assertZonedDateTimesEqual(actual, expected, description = "") {
    assert(expected instanceof Temporal.ZonedDateTime, `${description} expected value should be a Temporal.ZonedDateTime`);
    assert(actual instanceof Temporal.ZonedDateTime, `${description} instanceof`);
    assert(actual.equals(expected), `${description} equals method`);
    assert.sameValue(actual.timeZone, expected.timeZone, `${description} time zone same value`);
    assert.sameValue(actual.calendar, expected.calendar, `${description} calendar same value`);
  },

  /*
   * assertUnreachable(description):
   *
   * Helper for asserting that code is not executed. This is useful for
   * assertions that methods of user calendars and time zones are not called.
   */
  assertUnreachable(description) {
    let message = "This code should not be executed";
    if (description) {
      message = `${message}: ${description}`;
    }
    throw new Test262Error(message);
  },

  /*
   * checkCalendarDateUntilLargestUnitSingular(func, expectedLargestUnitCalls):
   *
   * When an options object with a largestUnit property is synthesized inside
   * Temporal and passed to user code such as calendar.dateUntil(), the value of
   * the largestUnit property should be in the singular form, even if the input
   * was given in the plural form.
   * (This doesn't apply when the options object is passed through verbatim.)
   *
   * func(calendar, largestUnit, index) is the operation under test. It's called
   * with an instance of a calendar that keeps track of which largestUnit is
   * passed to dateUntil(), each key of expectedLargestUnitCalls in turn, and
   * the key's numerical index in case the function needs to generate test data
   * based on the index. At the end, the actual values passed to dateUntil() are
   * compared with the array values of expectedLargestUnitCalls.
   */
  checkCalendarDateUntilLargestUnitSingular(func, expectedLargestUnitCalls) {
    const actual = [];

    class DateUntilOptionsCalendar extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }

      dateUntil(earlier, later, options) {
        actual.push(options.largestUnit);
        return super.dateUntil(earlier, later, options);
      }

      toString() {
        return "date-until-options";
      }
    }

    const calendar = new DateUntilOptionsCalendar();
    Object.entries(expectedLargestUnitCalls).forEach(([largestUnit, expected], index) => {
      func(calendar, largestUnit, index);
      assert.compareArray(actual, expected, `largestUnit passed to calendar.dateUntil() for largestUnit ${largestUnit}`);
      actual.splice(0, actual.length); // empty it for the next check
    });
  },

  /*
   * checkFractionalSecondDigitsOptionWrongType(temporalObject):
   *
   * Checks the string-or-number type handling of the fractionalSecondDigits
   * option to the various types' toString() methods. temporalObject is an
   * instance of the Temporal type under test.
   */
  checkFractionalSecondDigitsOptionWrongType(temporalObject) {
    // null is not a number, and converts to the string "null", which is an invalid string value
    assert.throws(RangeError, () => temporalObject.toString({ fractionalSecondDigits: null }), "null");
    // Booleans are not numbers, and convert to the strings "true" or "false", which are invalid
    assert.throws(RangeError, () => temporalObject.toString({ fractionalSecondDigits: true }), "true");
    assert.throws(RangeError, () => temporalObject.toString({ fractionalSecondDigits: false }), "false");
    // Symbols are not numbers and cannot convert to strings
    assert.throws(TypeError, () => temporalObject.toString({ fractionalSecondDigits: Symbol() }), "symbol");
    // BigInts are not numbers and convert to strings which are invalid
    assert.throws(RangeError, () => temporalObject.toString({ fractionalSecondDigits: 2n }), "bigint");

    // Objects are not numbers and prefer their toString() methods when converting to a string
    assert.throws(RangeError, () => temporalObject.toString({ fractionalSecondDigits: {} }), "plain object");

    const toStringExpected = temporalObject.toString({ fractionalSecondDigits: 'auto' });
    const expected = [
      "get fractionalSecondDigits.toString",
      "call fractionalSecondDigits.toString",
    ];
    const actual = [];
    const observer = TemporalHelpers.toPrimitiveObserver(actual, "auto", "fractionalSecondDigits");
    const result = temporalObject.toString({ fractionalSecondDigits: observer });
    assert.sameValue(result, toStringExpected, "object with toString");
    assert.compareArray(actual, expected, "order of operations");
  },

  /*
   * checkPlainDateTimeConversionFastPath(func):
   *
   * ToTemporalDate and ToTemporalTime should both, if given a
   * Temporal.PlainDateTime instance, convert to the desired type by reading the
   * PlainDateTime's internal slots, rather than calling any getters.
   *
   * func(datetime, calendar) is the actual operation to test, that must
   * internally call the abstract operation ToTemporalDate or ToTemporalTime.
   * It is passed a Temporal.PlainDateTime instance, as well as the instance's
   * calendar object (so that it doesn't have to call the calendar getter itself
   * if it wants to make any assertions about the calendar.)
   */
  checkPlainDateTimeConversionFastPath(func) {
    const actual = [];
    const expected = [];

    const calendar = new Temporal.Calendar("iso8601");
    const datetime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321, calendar);
    const prototypeDescrs = Object.getOwnPropertyDescriptors(Temporal.PlainDateTime.prototype);
    ["year", "month", "monthCode", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach((property) => {
      Object.defineProperty(datetime, property, {
        get() {
          actual.push(`get ${property}`);
          const value = prototypeDescrs[property].get.call(this);
          return {
            toString() {
              actual.push(`toString ${property}`);
              return value.toString();
            },
            valueOf() {
              actual.push(`valueOf ${property}`);
              return value;
            },
          };
        },
      });
    });
    Object.defineProperty(datetime, "calendar", {
      get() {
        actual.push("get calendar");
        return calendar;
      },
    });

    func(datetime, calendar);
    assert.compareArray(actual, expected, "property getters not called");
  },

  /*
   * Check that an options bag that accepts units written in the singular form,
   * also accepts the same units written in the plural form.
   * func(unit) should call the method with the appropriate options bag
   * containing unit as a value. This will be called twice for each element of
   * validSingularUnits, once with singular and once with plural, and the
   * results of each pair should be the same (whether a Temporal object or a
   * primitive value.)
   */
  checkPluralUnitsAccepted(func, validSingularUnits) {
    const plurals = {
      year: 'years',
      month: 'months',
      week: 'weeks',
      day: 'days',
      hour: 'hours',
      minute: 'minutes',
      second: 'seconds',
      millisecond: 'milliseconds',
      microsecond: 'microseconds',
      nanosecond: 'nanoseconds',
    };

    validSingularUnits.forEach((unit) => {
      const singularValue = func(unit);
      const pluralValue = func(plurals[unit]);
      const desc = `Plural ${plurals[unit]} produces the same result as singular ${unit}`;
      if (singularValue instanceof Temporal.Duration) {
        TemporalHelpers.assertDurationsEqual(pluralValue, singularValue, desc);
      } else if (singularValue instanceof Temporal.Instant) {
        TemporalHelpers.assertInstantsEqual(pluralValue, singularValue, desc);
      } else if (singularValue instanceof Temporal.PlainDateTime) {
        TemporalHelpers.assertPlainDateTimesEqual(pluralValue, singularValue, desc);
      } else if (singularValue instanceof Temporal.PlainTime) {
        TemporalHelpers.assertPlainTimesEqual(pluralValue, singularValue, desc);
      } else if (singularValue instanceof Temporal.ZonedDateTime) {
        TemporalHelpers.assertZonedDateTimesEqual(pluralValue, singularValue, desc);
      } else {
        assert.sameValue(pluralValue, singularValue);
      }
    });
  },

  /*
   * checkRoundingIncrementOptionWrongType(checkFunc, assertTrueResultFunc, assertObjectResultFunc):
   *
   * Checks the type handling of the roundingIncrement option.
   * checkFunc(roundingIncrement) is a function which takes the value of
   * roundingIncrement to test, and calls the method under test with it,
   * returning the result. assertTrueResultFunc(result, description) should
   * assert that result is the expected result with roundingIncrement: true, and
   * assertObjectResultFunc(result, description) should assert that result is
   * the expected result with roundingIncrement being an object with a valueOf()
   * method.
   */
  checkRoundingIncrementOptionWrongType(checkFunc, assertTrueResultFunc, assertObjectResultFunc) {
    // null converts to 0, which is out of range
    assert.throws(RangeError, () => checkFunc(null), "null");
    // Booleans convert to either 0 or 1, and 1 is allowed
    const trueResult = checkFunc(true);
    assertTrueResultFunc(trueResult, "true");
    assert.throws(RangeError, () => checkFunc(false), "false");
    // Symbols and BigInts cannot convert to numbers
    assert.throws(TypeError, () => checkFunc(Symbol()), "symbol");
    assert.throws(TypeError, () => checkFunc(2n), "bigint");

    // Objects prefer their valueOf() methods when converting to a number
    assert.throws(RangeError, () => checkFunc({}), "plain object");

    const expected = [
      "get roundingIncrement.valueOf",
      "call roundingIncrement.valueOf",
    ];
    const actual = [];
    const observer = TemporalHelpers.toPrimitiveObserver(actual, 2, "roundingIncrement");
    const objectResult = checkFunc(observer);
    assertObjectResultFunc(objectResult, "object with valueOf");
    assert.compareArray(actual, expected, "order of operations");
  },

  /*
   * checkStringOptionWrongType(propertyName, value, checkFunc, assertFunc):
   *
   * Checks the type handling of a string option, of which there are several in
   * Temporal.
   * propertyName is the name of the option, and value is the value that
   * assertFunc should expect it to have.
   * checkFunc(value) is a function which takes the value of the option to test,
   * and calls the method under test with it, returning the result.
   * assertFunc(result, description) should assert that result is the expected
   * result with the option value being an object with a toString() method
   * which returns the given value.
   */
  checkStringOptionWrongType(propertyName, value, checkFunc, assertFunc) {
    // null converts to the string "null", which is an invalid string value
    assert.throws(RangeError, () => checkFunc(null), "null");
    // Booleans convert to the strings "true" or "false", which are invalid
    assert.throws(RangeError, () => checkFunc(true), "true");
    assert.throws(RangeError, () => checkFunc(false), "false");
    // Symbols cannot convert to strings
    assert.throws(TypeError, () => checkFunc(Symbol()), "symbol");
    // Numbers convert to strings which are invalid
    assert.throws(RangeError, () => checkFunc(2), "number");
    // BigInts convert to strings which are invalid
    assert.throws(RangeError, () => checkFunc(2n), "bigint");

    // Objects prefer their toString() methods when converting to a string
    assert.throws(RangeError, () => checkFunc({}), "plain object");

    const expected = [
      `get ${propertyName}.toString`,
      `call ${propertyName}.toString`,
    ];
    const actual = [];
    const observer = TemporalHelpers.toPrimitiveObserver(actual, value, propertyName);
    const result = checkFunc(observer);
    assertFunc(result, "object with toString");
    assert.compareArray(actual, expected, "order of operations");
  },

  /*
   * checkSubclassingIgnored(construct, constructArgs, method, methodArgs,
   *   resultAssertions):
   *
   * Methods of Temporal classes that return a new instance of the same class,
   * must not take the constructor of a subclass into account, nor the @@species
   * property. This helper runs tests to ensure this.
   *
   * construct(...constructArgs) must yield a valid instance of the Temporal
   * class. instance[method](...methodArgs) is the method call under test, which
   * must also yield a valid instance of the same Temporal class, not a
   * subclass. See below for the individual tests that this runs.
   * resultAssertions() is a function that performs additional assertions on the
   * instance returned by the method under test.
   */
  checkSubclassingIgnored(...args) {
    this.checkSubclassConstructorNotObject(...args);
    this.checkSubclassConstructorUndefined(...args);
    this.checkSubclassConstructorThrows(...args);
    this.checkSubclassConstructorNotCalled(...args);
    this.checkSubclassSpeciesInvalidResult(...args);
    this.checkSubclassSpeciesNotAConstructor(...args);
    this.checkSubclassSpeciesNull(...args);
    this.checkSubclassSpeciesUndefined(...args);
    this.checkSubclassSpeciesThrows(...args);
  },

  /*
   * Checks that replacing the 'constructor' property of the instance with
   * various primitive values does not affect the returned new instance.
   */
  checkSubclassConstructorNotObject(construct, constructArgs, method, methodArgs, resultAssertions) {
    function check(value, description) {
      const instance = new construct(...constructArgs);
      instance.constructor = value;
      const result = instance[method](...methodArgs);
      assert.sameValue(Object.getPrototypeOf(result), construct.prototype, description);
      resultAssertions(result);
    }

    check(null, "null");
    check(true, "true");
    check("test", "string");
    check(Symbol(), "Symbol");
    check(7, "number");
    check(7n, "bigint");
  },

  /*
   * Checks that replacing the 'constructor' property of the subclass with
   * undefined does not affect the returned new instance.
   */
  checkSubclassConstructorUndefined(construct, constructArgs, method, methodArgs, resultAssertions) {
    let called = 0;

    class MySubclass extends construct {
      constructor() {
        ++called;
        super(...constructArgs);
      }
    }

    const instance = new MySubclass();
    assert.sameValue(called, 1);

    MySubclass.prototype.constructor = undefined;

    const result = instance[method](...methodArgs);
    assert.sameValue(called, 1);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
    resultAssertions(result);
  },

  /*
   * Checks that making the 'constructor' property of the instance throw when
   * called does not affect the returned new instance.
   */
  checkSubclassConstructorThrows(construct, constructArgs, method, methodArgs, resultAssertions) {
    function CustomError() {}
    const instance = new construct(...constructArgs);
    Object.defineProperty(instance, "constructor", {
      get() {
        throw new CustomError();
      }
    });
    const result = instance[method](...methodArgs);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
    resultAssertions(result);
  },

  /*
   * Checks that when subclassing, the subclass constructor is not called by
   * the method under test.
   */
  checkSubclassConstructorNotCalled(construct, constructArgs, method, methodArgs, resultAssertions) {
    let called = 0;

    class MySubclass extends construct {
      constructor() {
        ++called;
        super(...constructArgs);
      }
    }

    const instance = new MySubclass();
    assert.sameValue(called, 1);

    const result = instance[method](...methodArgs);
    assert.sameValue(called, 1);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
    resultAssertions(result);
  },

  /*
   * Check that the constructor's @@species property is ignored when it's a
   * constructor that returns a non-object value.
   */
  checkSubclassSpeciesInvalidResult(construct, constructArgs, method, methodArgs, resultAssertions) {
    function check(value, description) {
      const instance = new construct(...constructArgs);
      instance.constructor = {
        [Symbol.species]: function() {
          return value;
        },
      };
      const result = instance[method](...methodArgs);
      assert.sameValue(Object.getPrototypeOf(result), construct.prototype, description);
      resultAssertions(result);
    }

    check(undefined, "undefined");
    check(null, "null");
    check(true, "true");
    check("test", "string");
    check(Symbol(), "Symbol");
    check(7, "number");
    check(7n, "bigint");
    check({}, "plain object");
  },

  /*
   * Check that the constructor's @@species property is ignored when it's not a
   * constructor.
   */
  checkSubclassSpeciesNotAConstructor(construct, constructArgs, method, methodArgs, resultAssertions) {
    function check(value, description) {
      const instance = new construct(...constructArgs);
      instance.constructor = {
        [Symbol.species]: value,
      };
      const result = instance[method](...methodArgs);
      assert.sameValue(Object.getPrototypeOf(result), construct.prototype, description);
      resultAssertions(result);
    }

    check(true, "true");
    check("test", "string");
    check(Symbol(), "Symbol");
    check(7, "number");
    check(7n, "bigint");
    check({}, "plain object");
  },

  /*
   * Check that the constructor's @@species property is ignored when it's null.
   */
  checkSubclassSpeciesNull(construct, constructArgs, method, methodArgs, resultAssertions) {
    let called = 0;

    class MySubclass extends construct {
      constructor() {
        ++called;
        super(...constructArgs);
      }
    }

    const instance = new MySubclass();
    assert.sameValue(called, 1);

    MySubclass.prototype.constructor = {
      [Symbol.species]: null,
    };

    const result = instance[method](...methodArgs);
    assert.sameValue(called, 1);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
    resultAssertions(result);
  },

  /*
   * Check that the constructor's @@species property is ignored when it's
   * undefined.
   */
  checkSubclassSpeciesUndefined(construct, constructArgs, method, methodArgs, resultAssertions) {
    let called = 0;

    class MySubclass extends construct {
      constructor() {
        ++called;
        super(...constructArgs);
      }
    }

    const instance = new MySubclass();
    assert.sameValue(called, 1);

    MySubclass.prototype.constructor = {
      [Symbol.species]: undefined,
    };

    const result = instance[method](...methodArgs);
    assert.sameValue(called, 1);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
    resultAssertions(result);
  },

  /*
   * Check that the constructor's @@species property is ignored when it throws,
   * i.e. it is not called at all.
   */
  checkSubclassSpeciesThrows(construct, constructArgs, method, methodArgs, resultAssertions) {
    function CustomError() {}

    const instance = new construct(...constructArgs);
    instance.constructor = {
      get [Symbol.species]() {
        throw new CustomError();
      },
    };

    const result = instance[method](...methodArgs);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
  },

  /*
   * checkSubclassingIgnoredStatic(construct, method, methodArgs, resultAssertions):
   *
   * Static methods of Temporal classes that return a new instance of the class,
   * must not use the this-value as a constructor. This helper runs tests to
   * ensure this.
   *
   * construct[method](...methodArgs) is the static method call under test, and
   * must yield a valid instance of the Temporal class, not a subclass. See
   * below for the individual tests that this runs.
   * resultAssertions() is a function that performs additional assertions on the
   * instance returned by the method under test.
   */
  checkSubclassingIgnoredStatic(...args) {
    this.checkStaticInvalidReceiver(...args);
    this.checkStaticReceiverNotCalled(...args);
    this.checkThisValueNotCalled(...args);
  },

  /*
   * Check that calling the static method with a receiver that's not callable,
   * still calls the intrinsic constructor.
   */
  checkStaticInvalidReceiver(construct, method, methodArgs, resultAssertions) {
    function check(value, description) {
      const result = construct[method].apply(value, methodArgs);
      assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
      resultAssertions(result);
    }

    check(undefined, "undefined");
    check(null, "null");
    check(true, "true");
    check("test", "string");
    check(Symbol(), "symbol");
    check(7, "number");
    check(7n, "bigint");
    check({}, "Non-callable object");
  },

  /*
   * Check that calling the static method with a receiver that returns a value
   * that's not callable, still calls the intrinsic constructor.
   */
  checkStaticReceiverNotCalled(construct, method, methodArgs, resultAssertions) {
    function check(value, description) {
      const receiver = function () {
        return value;
      };
      const result = construct[method].apply(receiver, methodArgs);
      assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
      resultAssertions(result);
    }

    check(undefined, "undefined");
    check(null, "null");
    check(true, "true");
    check("test", "string");
    check(Symbol(), "symbol");
    check(7, "number");
    check(7n, "bigint");
    check({}, "Non-callable object");
  },

  /*
   * Check that the receiver isn't called.
   */
  checkThisValueNotCalled(construct, method, methodArgs, resultAssertions) {
    let called = false;

    class MySubclass extends construct {
      constructor(...args) {
        called = true;
        super(...args);
      }
    }

    const result = MySubclass[method](...methodArgs);
    assert.sameValue(called, false);
    assert.sameValue(Object.getPrototypeOf(result), construct.prototype);
    resultAssertions(result);
  },

  /*
   * Check that any iterable returned from a custom time zone's
   * getPossibleInstantsFor() method is exhausted.
   * The custom time zone object is passed in to func().
   * expected is an array of strings representing the expected calls to the
   * getPossibleInstantsFor() method. The PlainDateTimes that it is called with,
   * are compared (using their toString() results) with the array.
   */
  checkTimeZonePossibleInstantsIterable(func, expected) {
    // A custom time zone that returns an iterable instead of an array from its
    // getPossibleInstantsFor() method, and for testing purposes skips
    // 00:00-01:00 UTC on January 1, 2030, and repeats 00:00-01:00 UTC+1 on
    // January 3, 2030. Otherwise identical to the UTC time zone.
    class TimeZonePossibleInstantsIterable extends Temporal.TimeZone {
      constructor() {
        super("UTC");
        this.getPossibleInstantsForCallCount = 0;
        this.getPossibleInstantsForCalledWith = [];
        this.getPossibleInstantsForReturns = [];
        this.iteratorExhausted = [];
      }

      toString() {
        return "Custom/Iterable";
      }

      getOffsetNanosecondsFor(instant) {
        if (Temporal.Instant.compare(instant, "2030-01-01T00:00Z") >= 0 &&
          Temporal.Instant.compare(instant, "2030-01-03T01:00Z") < 0) {
          return 3600_000_000_000;
        } else {
          return 0;
        }
      }

      getPossibleInstantsFor(dateTime) {
        this.getPossibleInstantsForCallCount++;
        this.getPossibleInstantsForCalledWith.push(dateTime);

        // Fake DST transition
        let retval = super.getPossibleInstantsFor(dateTime);
        if (dateTime.toPlainDate().equals("2030-01-01") && dateTime.hour === 0) {
          retval = [];
        } else if (dateTime.toPlainDate().equals("2030-01-03") && dateTime.hour === 0) {
          retval.push(retval[0].subtract({ hours: 1 }));
        } else if (dateTime.year === 2030 && dateTime.month === 1 && dateTime.day >= 1 && dateTime.day <= 2) {
          retval[0] = retval[0].subtract({ hours: 1 });
        }

        this.getPossibleInstantsForReturns.push(retval);
        this.iteratorExhausted.push(false);
        return {
          callIndex: this.getPossibleInstantsForCallCount - 1,
          timeZone: this,
          *[Symbol.iterator]() {
            yield* this.timeZone.getPossibleInstantsForReturns[this.callIndex];
            this.timeZone.iteratorExhausted[this.callIndex] = true;
          },
        };
      }
    }

    const timeZone = new TimeZonePossibleInstantsIterable();
    func(timeZone);

    assert.sameValue(timeZone.getPossibleInstantsForCallCount, expected.length, "getPossibleInstantsFor() method called correct number of times");

    for (let index = 0; index < expected.length; index++) {
      assert.sameValue(timeZone.getPossibleInstantsForCalledWith[index].toString(), expected[index], "getPossibleInstantsFor() called with expected PlainDateTime");
      assert(timeZone.iteratorExhausted[index], "iterated through the whole iterable");
    }
  },

  /*
   * Check that any calendar-carrying Temporal object has its [[Calendar]]
   * internal slot read by ToTemporalCalendar, and does not fetch the calendar
   * by calling getters.
   * The custom calendar object is passed in to func() so that it can do its
   * own additional assertions involving the calendar if necessary. (Sometimes
   * there is nothing to assert as the calendar isn't stored anywhere that can
   * be asserted about.)
   */
  checkToTemporalCalendarFastPath(func) {
    class CalendarFastPathCheck extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }

      toString() {
        return "fast-path-check";
      }
    }
    const calendar = new CalendarFastPathCheck();

    const plainDate = new Temporal.PlainDate(2000, 5, 2, calendar);
    const plainDateTime = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 654, 321, calendar);
    const plainMonthDay = new Temporal.PlainMonthDay(5, 2, calendar);
    const plainYearMonth = new Temporal.PlainYearMonth(2000, 5, calendar);
    const zonedDateTime = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC", calendar);

    [plainDate, plainDateTime, plainMonthDay, plainYearMonth, zonedDateTime].forEach((temporalObject) => {
      const actual = [];
      const expected = [];

      Object.defineProperty(temporalObject, "calendar", {
        get() {
          actual.push("get calendar");
          return calendar;
        },
      });

      func(temporalObject, calendar);
      assert.compareArray(actual, expected, "calendar getter not called");
    });
  },

  checkToTemporalInstantFastPath(func) {
    const actual = [];
    const expected = [];

    const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
    Object.defineProperty(datetime, 'toString', {
      get() {
        actual.push("get toString");
        return function (options) {
          actual.push("call toString");
          return Temporal.ZonedDateTime.prototype.toString.call(this, options);
        };
      },
    });

    func(datetime);
    assert.compareArray(actual, expected, "toString not called");
  },

  checkToTemporalPlainDateTimeFastPath(func) {
    const actual = [];
    const expected = [];

    const calendar = new Temporal.Calendar("iso8601");
    const date = new Temporal.PlainDate(2000, 5, 2, calendar);
    const prototypeDescrs = Object.getOwnPropertyDescriptors(Temporal.PlainDate.prototype);
    ["year", "month", "monthCode", "day"].forEach((property) => {
      Object.defineProperty(date, property, {
        get() {
          actual.push(`get ${property}`);
          const value = prototypeDescrs[property].get.call(this);
          return TemporalHelpers.toPrimitiveObserver(actual, value, property);
        },
      });
    });
    ["hour", "minute", "second", "millisecond", "microsecond", "nanosecond"].forEach((property) => {
      Object.defineProperty(date, property, {
        get() {
          actual.push(`get ${property}`);
          return undefined;
        },
      });
    });
    Object.defineProperty(date, "calendar", {
      get() {
        actual.push("get calendar");
        return calendar;
      },
    });

    func(date, calendar);
    assert.compareArray(actual, expected, "property getters not called");
  },

  /*
   * A custom calendar that asserts its dateAdd() method is called with the
   * options parameter having the value undefined.
   */
  calendarDateAddUndefinedOptions() {
    class CalendarDateAddUndefinedOptions extends Temporal.Calendar {
      constructor() {
        super("iso8601");
        this.dateAddCallCount = 0;
      }

      toString() {
        return "dateadd-undef-options";
      }

      dateAdd(date, duration, options) {
        this.dateAddCallCount++;
        assert.sameValue(options, undefined, "dateAdd shouldn't be called with options");
        return super.dateAdd(date, duration, options);
      }
    }
    return new CalendarDateAddUndefinedOptions();
  },

  /*
   * A custom calendar that asserts its dateAdd() method is called with a
   * PlainDate instance. Optionally, it also asserts that the PlainDate instance
   * is the specific object `this.specificPlainDate`, if it is set by the
   * calling code.
   */
  calendarDateAddPlainDateInstance() {
    class CalendarDateAddPlainDateInstance extends Temporal.Calendar {
      constructor() {
        super("iso8601");
        this.dateAddCallCount = 0;
        this.specificPlainDate = undefined;
      }

      toString() {
        return "dateadd-plain-date-instance";
      }

      dateAdd(date, duration, options) {
        this.dateAddCallCount++;
        assert(date instanceof Temporal.PlainDate, "dateAdd() should be called with a PlainDate instance");
        if (this.dateAddCallCount === 1 && this.specificPlainDate) {
          assert.sameValue(date, this.specificPlainDate, `dateAdd() should be called first with the specific PlainDate instance ${this.specificPlainDate}`);
        }
        return super.dateAdd(date, duration, options);
      }
    }
    return new CalendarDateAddPlainDateInstance();
  },

  /*
   * A custom calendar that returns @returnValue from its dateUntil() method,
   * recording the call in @calls.
   */
  calendarDateUntilObservable(calls, returnValue) {
    class CalendarDateUntilObservable extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }

      dateUntil() {
        calls.push("call dateUntil");
        return returnValue;
      }
    }

    return new CalendarDateUntilObservable();
  },

  /*
   * A custom calendar that returns an iterable instead of an array from its
   * fields() method, otherwise identical to the ISO calendar.
   */
  calendarFieldsIterable() {
    class CalendarFieldsIterable extends Temporal.Calendar {
      constructor() {
        super("iso8601");
        this.fieldsCallCount = 0;
        this.fieldsCalledWith = [];
        this.iteratorExhausted = [];
      }

      toString() {
        return "fields-iterable";
      }

      fields(fieldNames) {
        this.fieldsCallCount++;
        this.fieldsCalledWith.push(fieldNames.slice());
        this.iteratorExhausted.push(false);
        return {
          callIndex: this.fieldsCallCount - 1,
          calendar: this,
          *[Symbol.iterator]() {
            yield* this.calendar.fieldsCalledWith[this.callIndex];
            this.calendar.iteratorExhausted[this.callIndex] = true;
          },
        };
      }
    }
    return new CalendarFieldsIterable();
  },

  /*
   * A custom calendar that modifies the fields object passed in to
   * dateFromFields, sabotaging its time properties.
   */
  calendarMakeInfinityTime() {
    class CalendarMakeInfinityTime extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }

      dateFromFields(fields, options) {
        const retval = super.dateFromFields(fields, options);
        fields.hour = Infinity;
        fields.minute = Infinity;
        fields.second = Infinity;
        fields.millisecond = Infinity;
        fields.microsecond = Infinity;
        fields.nanosecond = Infinity;
        return retval;
      }
    }
    return new CalendarMakeInfinityTime();
  },

  /*
   * A custom calendar that defines getters on the fields object passed into
   * dateFromFields that throw, sabotaging its time properties.
   */
  calendarMakeInvalidGettersTime() {
    class CalendarMakeInvalidGettersTime extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }

      dateFromFields(fields, options) {
        const retval = super.dateFromFields(fields, options);
        const throwingDescriptor = {
          get() {
            throw new Test262Error("reading a sabotaged time field");
          },
        };
        Object.defineProperties(fields, {
          hour: throwingDescriptor,
          minute: throwingDescriptor,
          second: throwingDescriptor,
          millisecond: throwingDescriptor,
          microsecond: throwingDescriptor,
          nanosecond: throwingDescriptor,
        });
        return retval;
      }
    }
    return new CalendarMakeInvalidGettersTime();
  },

  /*
   * A custom calendar whose mergeFields() method returns a proxy object with
   * all of its Get and HasProperty operations observable, as well as adding a
   * "shouldNotBeCopied": true property.
   */
  calendarMergeFieldsGetters() {
    class CalendarMergeFieldsGetters extends Temporal.Calendar {
      constructor() {
        super("iso8601");
        this.mergeFieldsReturnOperations = [];
      }

      toString() {
        return "merge-fields-getters";
      }

      dateFromFields(fields, options) {
        assert.sameValue(fields.shouldNotBeCopied, undefined, "extra fields should not be copied");
        return super.dateFromFields(fields, options);
      }

      yearMonthFromFields(fields, options) {
        assert.sameValue(fields.shouldNotBeCopied, undefined, "extra fields should not be copied");
        return super.yearMonthFromFields(fields, options);
      }

      monthDayFromFields(fields, options) {
        assert.sameValue(fields.shouldNotBeCopied, undefined, "extra fields should not be copied");
        return super.monthDayFromFields(fields, options);
      }

      mergeFields(fields, additionalFields) {
        const retval = super.mergeFields(fields, additionalFields);
        retval._calendar = this;
        retval.shouldNotBeCopied = true;
        return new Proxy(retval, {
          get(target, key) {
            target._calendar.mergeFieldsReturnOperations.push(`get ${key}`);
            const result = target[key];
            if (result === undefined) {
              return undefined;
            }
            return TemporalHelpers.toPrimitiveObserver(target._calendar.mergeFieldsReturnOperations, result, key);
          },
          has(target, key) {
            target._calendar.mergeFieldsReturnOperations.push(`has ${key}`);
            return key in target;
          },
        });
      }
    }
    return new CalendarMergeFieldsGetters();
  },

  /*
   * A custom calendar whose mergeFields() method returns a primitive value,
   * given by @primitive, and which records the number of calls made to its
   * dateFromFields(), yearMonthFromFields(), and monthDayFromFields() methods.
   */
  calendarMergeFieldsReturnsPrimitive(primitive) {
    class CalendarMergeFieldsPrimitive extends Temporal.Calendar {
      constructor(mergeFieldsReturnValue) {
        super("iso8601");
        this._mergeFieldsReturnValue = mergeFieldsReturnValue;
        this.dateFromFieldsCallCount = 0;
        this.monthDayFromFieldsCallCount = 0;
        this.yearMonthFromFieldsCallCount = 0;
      }

      toString() {
        return "merge-fields-primitive";
      }

      dateFromFields(fields, options) {
        this.dateFromFieldsCallCount++;
        return super.dateFromFields(fields, options);
      }

      yearMonthFromFields(fields, options) {
        this.yearMonthFromFieldsCallCount++;
        return super.yearMonthFromFields(fields, options);
      }

      monthDayFromFields(fields, options) {
        this.monthDayFromFieldsCallCount++;
        return super.monthDayFromFields(fields, options);
      }

      mergeFields() {
        return this._mergeFieldsReturnValue;
      }
    }
    return new CalendarMergeFieldsPrimitive(primitive);
  },

  /*
   * observeProperty(calls, object, propertyName, value):
   *
   * Defines an own property @object.@propertyName with value @value, that
   * will log any calls to its accessors to the array @calls.
   */
  observeProperty(calls, object, propertyName, value) {
    let displayName = propertyName;
    if (typeof propertyName === 'symbol') {
      if (Symbol.keyFor(propertyName) !== undefined) {
        displayName = `[Symbol.for('${Symbol.keyFor(propertyName)}')]`;
      } else if (propertyName.description.startsWith('Symbol.')) {
        displayName = `[${propertyName.description}]`;
      } else {
        displayName = `[Symbol('${propertyName.description}')]`
      }
    }
    Object.defineProperty(object, propertyName, {
      get() {
        calls.push(`get ${displayName}`);
        return value;
      },
      set(v) {
        calls.push(`set ${displayName}`);
      }
    });
  },

  /*
   * A custom calendar that does not allow any of its methods to be called, for
   * the purpose of asserting that a particular operation does not call into
   * user code.
   */
  calendarThrowEverything() {
    class CalendarThrowEverything extends Temporal.Calendar {
      constructor() {
        super("iso8601");
      }
      toString() {
        TemporalHelpers.assertUnreachable("toString should not be called");
      }
      dateFromFields() {
        TemporalHelpers.assertUnreachable("dateFromFields should not be called");
      }
      yearMonthFromFields() {
        TemporalHelpers.assertUnreachable("yearMonthFromFields should not be called");
      }
      monthDayFromFields() {
        TemporalHelpers.assertUnreachable("monthDayFromFields should not be called");
      }
      dateAdd() {
        TemporalHelpers.assertUnreachable("dateAdd should not be called");
      }
      dateUntil() {
        TemporalHelpers.assertUnreachable("dateUntil should not be called");
      }
      era() {
        TemporalHelpers.assertUnreachable("era should not be called");
      }
      eraYear() {
        TemporalHelpers.assertUnreachable("eraYear should not be called");
      }
      year() {
        TemporalHelpers.assertUnreachable("year should not be called");
      }
      month() {
        TemporalHelpers.assertUnreachable("month should not be called");
      }
      monthCode() {
        TemporalHelpers.assertUnreachable("monthCode should not be called");
      }
      day() {
        TemporalHelpers.assertUnreachable("day should not be called");
      }
      fields() {
        TemporalHelpers.assertUnreachable("fields should not be called");
      }
      mergeFields() {
        TemporalHelpers.assertUnreachable("mergeFields should not be called");
      }
    }

    return new CalendarThrowEverything();
  },

  /*
   * oneShiftTimeZone(shiftInstant, shiftNanoseconds):
   *
   * In the case of a spring-forward time zone offset transition (skipped time),
   * and disambiguation === 'earlier', BuiltinTimeZoneGetInstantFor subtracts a
   * negative number of nanoseconds from a PlainDateTime, which should balance
   * with the microseconds field.
   *
   * This returns an instance of a custom time zone class which skips a length
   * of time equal to shiftNanoseconds (a number), at the Temporal.Instant
   * shiftInstant. Before shiftInstant, it's identical to UTC, and after
   * shiftInstant it's a constant-offset time zone.
   *
   * It provides a getPossibleInstantsForCalledWith member which is an array
   * with the result of calling toString() on any PlainDateTimes passed to
   * getPossibleInstantsFor().
   */
  oneShiftTimeZone(shiftInstant, shiftNanoseconds) {
    class OneShiftTimeZone extends Temporal.TimeZone {
      constructor(shiftInstant, shiftNanoseconds) {
        super("+00:00");
        this._shiftInstant = shiftInstant;
        this._epoch1 = shiftInstant.epochNanoseconds;
        this._epoch2 = this._epoch1 + BigInt(shiftNanoseconds);
        this._shiftNanoseconds = shiftNanoseconds;
        this._shift = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, this._shiftNanoseconds);
        this.getPossibleInstantsForCalledWith = [];
      }

      _isBeforeShift(instant) {
        return instant.epochNanoseconds < this._epoch1;
      }

      getOffsetNanosecondsFor(instant) {
        return this._isBeforeShift(instant) ? 0 : this._shiftNanoseconds;
      }

      getPossibleInstantsFor(plainDateTime) {
        this.getPossibleInstantsForCalledWith.push(plainDateTime.toString());
        const [instant] = super.getPossibleInstantsFor(plainDateTime);
        if (this._shiftNanoseconds > 0) {
          if (this._isBeforeShift(instant)) return [instant];
          if (instant.epochNanoseconds < this._epoch2) return [];
          return [instant.add(this._shift)];
        }
        if (instant.epochNanoseconds < this._epoch2) return [instant];
        const shifted = instant.add(this._shift);
        if (this._isBeforeShift(instant)) return [instant, shifted];
        return [shifted];
      }

      getNextTransition(instant) {
        return this._isBeforeShift(instant) ? this._shiftInstant : null;
      }

      getPreviousTransition(instant) {
        return this._isBeforeShift(instant) ? null : this._shiftInstant;
      }

      toString() {
        return "Custom/One_Shift";
      }
    }
    return new OneShiftTimeZone(shiftInstant, shiftNanoseconds);
  },

  /*
   * specificOffsetTimeZone():
   *
   * This returns an instance of a custom time zone class, which returns a
   * specific custom value from its getOffsetNanosecondsFrom() method. This is
   * for the purpose of testing the validation of what this method returns.
   *
   * It also returns an empty array from getPossibleInstantsFor(), so as to
   * trigger calls to getOffsetNanosecondsFor() when used from the
   * BuiltinTimeZoneGetInstantFor operation.
   */
  specificOffsetTimeZone(offsetValue) {
    class SpecificOffsetTimeZone extends Temporal.TimeZone {
      constructor(offsetValue) {
        super("UTC");
        this._offsetValue = offsetValue;
      }

      getOffsetNanosecondsFor() {
        return this._offsetValue;
      }

      getPossibleInstantsFor() {
        return [];
      }
    }
    return new SpecificOffsetTimeZone(offsetValue);
  },

  /*
   * springForwardFallBackTimeZone():
   *
   * This returns an instance of a custom time zone class that implements one
   * single spring-forward/fall-back transition, for the purpose of testing the
   * disambiguation option, without depending on system time zone data.
   *
   * The spring-forward occurs at epoch second 954669600 (2000-04-02T02:00
   * local) and goes from offset -08:00 to -07:00.
   *
   * The fall-back occurs at epoch second 972810000 (2000-10-29T02:00 local) and
   * goes from offset -07:00 to -08:00.
   */
  springForwardFallBackTimeZone() {
    const { compare } = Temporal.PlainDateTime;
    const springForwardLocal = new Temporal.PlainDateTime(2000, 4, 2, 2);
    const springForwardEpoch = 954669600_000_000_000n;
    const fallBackLocal = new Temporal.PlainDateTime(2000, 10, 29, 1);
    const fallBackEpoch = 972810000_000_000_000n;
    const winterOffset = new Temporal.TimeZone('-08:00');
    const summerOffset = new Temporal.TimeZone('-07:00');

    class SpringForwardFallBackTimeZone extends Temporal.TimeZone {
      constructor() {
        super("-08:00");
      }

      getOffsetNanosecondsFor(instant) {
        if (instant.epochNanoseconds < springForwardEpoch ||
          instant.epochNanoseconds >= fallBackEpoch) {
          return winterOffset.getOffsetNanosecondsFor(instant);
        }
        return summerOffset.getOffsetNanosecondsFor(instant);
      }

      getPossibleInstantsFor(datetime) {
        if (compare(datetime, springForwardLocal) >= 0 && compare(datetime, springForwardLocal.add({ hours: 1 })) < 0) {
          return [];
        }
        if (compare(datetime, fallBackLocal) >= 0 && compare(datetime, fallBackLocal.add({ hours: 1 })) < 0) {
          return [summerOffset.getInstantFor(datetime), winterOffset.getInstantFor(datetime)];
        }
        if (compare(datetime, springForwardLocal) < 0 || compare(datetime, fallBackLocal) >= 0) {
          return [winterOffset.getInstantFor(datetime)];
        }
        return [summerOffset.getInstantFor(datetime)];
      }

      getPreviousTransition(instant) {
        if (instant.epochNanoseconds > fallBackEpoch) return new Temporal.Instant(fallBackEpoch);
        if (instant.epochNanoseconds > springForwardEpoch) return new Temporal.Instant(springForwardEpoch);
        return null;
      }

      getNextTransition(instant) {
        if (instant.epochNanoseconds < springForwardEpoch) return new Temporal.Instant(springForwardEpoch);
        if (instant.epochNanoseconds < fallBackEpoch) return new Temporal.Instant(fallBackEpoch);
        return null;
      }

      toString() {
        return "Custom/Spring_Fall";
      }
    }
    return new SpringForwardFallBackTimeZone();
  },

  /*
   * Returns an object that will append logs of any Gets or Calls of its valueOf
   * or toString properties to the array calls. Both valueOf and toString will
   * return the actual primitiveValue. propertyName is used in the log.
   */
  toPrimitiveObserver(calls, primitiveValue, propertyName) {
    return {
      get valueOf() {
        calls.push(`get ${propertyName}.valueOf`);
        return function () {
          calls.push(`call ${propertyName}.valueOf`);
          return primitiveValue;
        };
      },
      get toString() {
        calls.push(`get ${propertyName}.toString`);
        return function () {
          calls.push(`call ${propertyName}.toString`);
          if (primitiveValue === undefined) return undefined;
          return primitiveValue.toString();
        };
      },
    };
  },
};

//byteConversionValues.js
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Provide a list for original and expected values for different byte
    conversions.
    This helper is mostly used on tests for TypedArray and DataView, and each
    array from the expected values must match the original values array on every
    index containing its original value.
defines: [byteConversionValues]
---*/
var byteConversionValues = {
  values: [
    127,         // 2 ** 7 - 1
    128,         // 2 ** 7
    32767,       // 2 ** 15 - 1
    32768,       // 2 ** 15
    2147483647,  // 2 ** 31 - 1
    2147483648,  // 2 ** 31
    255,         // 2 ** 8 - 1
    256,         // 2 ** 8
    65535,       // 2 ** 16 - 1
    65536,       // 2 ** 16
    4294967295,  // 2 ** 32 - 1
    4294967296,  // 2 ** 32
    9007199254740991, // 2 ** 53 - 1
    9007199254740992, // 2 ** 53
    1.1,
    0.1,
    0.5,
    0.50000001,
    0.6,
    0.7,
    undefined,
    -1,
    -0,
    -0.1,
    -1.1,
    NaN,
    -127,        // - ( 2 ** 7 - 1 )
    -128,        // - ( 2 ** 7 )
    -32767,      // - ( 2 ** 15 - 1 )
    -32768,      // - ( 2 ** 15 )
    -2147483647, // - ( 2 ** 31 - 1 )
    -2147483648, // - ( 2 ** 31 )
    -255,        // - ( 2 ** 8 - 1 )
    -256,        // - ( 2 ** 8 )
    -65535,      // - ( 2 ** 16 - 1 )
    -65536,      // - ( 2 ** 16 )
    -4294967295, // - ( 2 ** 32 - 1 )
    -4294967296, // - ( 2 ** 32 )
    Infinity,
    -Infinity,
    0
  ],

  expected: {
    Int8: [
      127,  // 127
      -128, // 128
      -1,   // 32767
      0,    // 32768
      -1,   // 2147483647
      0,    // 2147483648
      -1,   // 255
      0,    // 256
      -1,   // 65535
      0,    // 65536
      -1,   // 4294967295
      0,    // 4294967296
      -1,   // 9007199254740991
      0,    // 9007199254740992
      1,    // 1.1
      0,    // 0.1
      0,    // 0.5
      0,    // 0.50000001,
      0,    // 0.6
      0,    // 0.7
      0,    // undefined
      -1,   // -1
      0,    // -0
      0,    // -0.1
      -1,   // -1.1
      0,    // NaN
      -127, // -127
      -128, // -128
      1,    // -32767
      0,    // -32768
      1,    // -2147483647
      0,    // -2147483648
      1,    // -255
      0,    // -256
      1,    // -65535
      0,    // -65536
      1,    // -4294967295
      0,    // -4294967296
      0,    // Infinity
      0,    // -Infinity
      0
    ],
    Uint8: [
      127, // 127
      128, // 128
      255, // 32767
      0,   // 32768
      255, // 2147483647
      0,   // 2147483648
      255, // 255
      0,   // 256
      255, // 65535
      0,   // 65536
      255, // 4294967295
      0,   // 4294967296
      255, // 9007199254740991
      0,   // 9007199254740992
      1,   // 1.1
      0,   // 0.1
      0,   // 0.5
      0,   // 0.50000001,
      0,   // 0.6
      0,   // 0.7
      0,   // undefined
      255, // -1
      0,   // -0
      0,   // -0.1
      255, // -1.1
      0,   // NaN
      129, // -127
      128, // -128
      1,   // -32767
      0,   // -32768
      1,   // -2147483647
      0,   // -2147483648
      1,   // -255
      0,   // -256
      1,   // -65535
      0,   // -65536
      1,   // -4294967295
      0,   // -4294967296
      0,   // Infinity
      0,   // -Infinity
      0
    ],
    Uint8Clamped: [
      127, // 127
      128, // 128
      255, // 32767
      255, // 32768
      255, // 2147483647
      255, // 2147483648
      255, // 255
      255, // 256
      255, // 65535
      255, // 65536
      255, // 4294967295
      255, // 4294967296
      255, // 9007199254740991
      255, // 9007199254740992
      1,   // 1.1,
      0,   // 0.1
      0,   // 0.5
      1,   // 0.50000001,
      1,   // 0.6
      1,   // 0.7
      0,   // undefined
      0,   // -1
      0,   // -0
      0,   // -0.1
      0,   // -1.1
      0,   // NaN
      0,   // -127
      0,   // -128
      0,   // -32767
      0,   // -32768
      0,   // -2147483647
      0,   // -2147483648
      0,   // -255
      0,   // -256
      0,   // -65535
      0,   // -65536
      0,   // -4294967295
      0,   // -4294967296
      255, // Infinity
      0,   // -Infinity
      0
    ],
    Int16: [
      127,    // 127
      128,    // 128
      32767,  // 32767
      -32768, // 32768
      -1,     // 2147483647
      0,      // 2147483648
      255,    // 255
      256,    // 256
      -1,     // 65535
      0,      // 65536
      -1,     // 4294967295
      0,      // 4294967296
      -1,     // 9007199254740991
      0,      // 9007199254740992
      1,      // 1.1
      0,      // 0.1
      0,      // 0.5
      0,      // 0.50000001,
      0,      // 0.6
      0,      // 0.7
      0,      // undefined
      -1,     // -1
      0,      // -0
      0,      // -0.1
      -1,     // -1.1
      0,      // NaN
      -127,   // -127
      -128,   // -128
      -32767, // -32767
      -32768, // -32768
      1,      // -2147483647
      0,      // -2147483648
      -255,   // -255
      -256,   // -256
      1,      // -65535
      0,      // -65536
      1,      // -4294967295
      0,      // -4294967296
      0,      // Infinity
      0,      // -Infinity
      0
    ],
    Uint16: [
      127,   // 127
      128,   // 128
      32767, // 32767
      32768, // 32768
      65535, // 2147483647
      0,     // 2147483648
      255,   // 255
      256,   // 256
      65535, // 65535
      0,     // 65536
      65535, // 4294967295
      0,     // 4294967296
      65535, // 9007199254740991
      0,     // 9007199254740992
      1,     // 1.1
      0,     // 0.1
      0,     // 0.5
      0,     // 0.50000001,
      0,     // 0.6
      0,     // 0.7
      0,     // undefined
      65535, // -1
      0,     // -0
      0,     // -0.1
      65535, // -1.1
      0,     // NaN
      65409, // -127
      65408, // -128
      32769, // -32767
      32768, // -32768
      1,     // -2147483647
      0,     // -2147483648
      65281, // -255
      65280, // -256
      1,     // -65535
      0,     // -65536
      1,     // -4294967295
      0,     // -4294967296
      0,     // Infinity
      0,     // -Infinity
      0
    ],
    Int32: [
      127,         // 127
      128,         // 128
      32767,       // 32767
      32768,       // 32768
      2147483647,  // 2147483647
      -2147483648, // 2147483648
      255,         // 255
      256,         // 256
      65535,       // 65535
      65536,       // 65536
      -1,          // 4294967295
      0,           // 4294967296
      -1,          // 9007199254740991
      0,           // 9007199254740992
      1,           // 1.1
      0,           // 0.1
      0,           // 0.5
      0,           // 0.50000001,
      0,           // 0.6
      0,           // 0.7
      0,           // undefined
      -1,          // -1
      0,           // -0
      0,           // -0.1
      -1,          // -1.1
      0,           // NaN
      -127,        // -127
      -128,        // -128
      -32767,      // -32767
      -32768,      // -32768
      -2147483647, // -2147483647
      -2147483648, // -2147483648
      -255,        // -255
      -256,        // -256
      -65535,      // -65535
      -65536,      // -65536
      1,           // -4294967295
      0,           // -4294967296
      0,           // Infinity
      0,           // -Infinity
      0
    ],
    Uint32: [
      127,        // 127
      128,        // 128
      32767,      // 32767
      32768,      // 32768
      2147483647, // 2147483647
      2147483648, // 2147483648
      255,        // 255
      256,        // 256
      65535,      // 65535
      65536,      // 65536
      4294967295, // 4294967295
      0,          // 4294967296
      4294967295, // 9007199254740991
      0,          // 9007199254740992
      1,          // 1.1
      0,          // 0.1
      0,          // 0.5
      0,          // 0.50000001,
      0,          // 0.6
      0,          // 0.7
      0,          // undefined
      4294967295, // -1
      0,          // -0
      0,          // -0.1
      4294967295, // -1.1
      0,          // NaN
      4294967169, // -127
      4294967168, // -128
      4294934529, // -32767
      4294934528, // -32768
      2147483649, // -2147483647
      2147483648, // -2147483648
      4294967041, // -255
      4294967040, // -256
      4294901761, // -65535
      4294901760, // -65536
      1,          // -4294967295
      0,          // -4294967296
      0,          // Infinity
      0,          // -Infinity
      0
    ],
    Float32: [
      127,                  // 127
      128,                  // 128
      32767,                // 32767
      32768,                // 32768
      2147483648,           // 2147483647
      2147483648,           // 2147483648
      255,                  // 255
      256,                  // 256
      65535,                // 65535
      65536,                // 65536
      4294967296,           // 4294967295
      4294967296,           // 4294967296
      9007199254740992,     // 9007199254740991
      9007199254740992,     // 9007199254740992
      1.100000023841858,    // 1.1
      0.10000000149011612,  // 0.1
      0.5,                  // 0.5
      0.5,                  // 0.50000001,
      0.6000000238418579,   // 0.6
      0.699999988079071,    // 0.7
      NaN,                  // undefined
      -1,                   // -1
      -0,                   // -0
      -0.10000000149011612, // -0.1
      -1.100000023841858,   // -1.1
      NaN,                  // NaN
      -127,                 // -127
      -128,                 // -128
      -32767,               // -32767
      -32768,               // -32768
      -2147483648,          // -2147483647
      -2147483648,          // -2147483648
      -255,                 // -255
      -256,                 // -256
      -65535,               // -65535
      -65536,               // -65536
      -4294967296,          // -4294967295
      -4294967296,          // -4294967296
      Infinity,             // Infinity
      -Infinity,            // -Infinity
      0
    ],
    Float64: [
      127,         // 127
      128,         // 128
      32767,       // 32767
      32768,       // 32768
      2147483647,  // 2147483647
      2147483648,  // 2147483648
      255,         // 255
      256,         // 256
      65535,       // 65535
      65536,       // 65536
      4294967295,  // 4294967295
      4294967296,  // 4294967296
      9007199254740991, // 9007199254740991
      9007199254740992, // 9007199254740992
      1.1,         // 1.1
      0.1,         // 0.1
      0.5,         // 0.5
      0.50000001,  // 0.50000001,
      0.6,         // 0.6
      0.7,         // 0.7
      NaN,         // undefined
      -1,          // -1
      -0,          // -0
      -0.1,        // -0.1
      -1.1,        // -1.1
      NaN,         // NaN
      -127,        // -127
      -128,        // -128
      -32767,      // -32767
      -32768,      // -32768
      -2147483647, // -2147483647
      -2147483648, // -2147483648
      -255,        // -255
      -256,        // -256
      -65535,      // -65535
      -65536,      // -65536
      -4294967295, // -4294967295
      -4294967296, // -4294967296
      Infinity,    // Infinity
      -Infinity,   // -Infinity
      0
    ]
  }
};

//nans.js
// Copyright (C) 2016 the V8 project authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    A collection of NaN values produced from expressions that have been observed
    to create distinct bit representations on various platforms. These provide a
    weak basis for assertions regarding the consistent canonicalization of NaN
    values in Array buffers.
defines: [NaNs]
---*/

var NaNs = [
  NaN,
  Number.NaN,
  NaN * 0,
  0/0,
  Infinity/Infinity,
  -(0/0),
  Math.pow(-1, 0.5),
  -Math.pow(-1, 0.5),
  Number("Not-a-Number"),
];

//testBigIntTypedArray.js
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of BigInt TypedArray objects.
defines:
  - TypedArray
  - testWithBigIntTypedArrayConstructors
---*/

/**
 * The %TypedArray% intrinsic constructor function.
 */
var TypedArray = Object.getPrototypeOf(Int8Array);

/**
 * Calls the provided function for every typed array constructor.
 *
 * @param {typedArrayConstructorCallback} f - the function to call for each typed array constructor.
 * @param {Array} selected - An optional Array with filtered typed arrays
 */
function testWithBigIntTypedArrayConstructors(f, selected) {
  /**
   * Array containing every BigInt typed array constructor.
   */
  var constructors = selected || [
    BigInt64Array,
    BigUint64Array
  ];

  for (var i = 0; i < constructors.length; ++i) {
    var constructor = constructors[i];
    try {
      f(constructor);
    } catch (e) {
      e.message += " (Testing with " + constructor.name + ".)";
      throw e;
    }
  }
}

//sta.js
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Provides both:

    - An error class to avoid false positives when testing for thrown exceptions
    - A function to explicitly throw an exception using the Test262Error class
defines: [Test262Error, $DONOTEVALUATE]
---*/


function Test262Error(message) {
  this.message = message || "";
}

Test262Error.prototype.toString = function () {
  return "Test262Error: " + this.message;
};

Test262Error.thrower = (message) => {
  throw new Test262Error(message);
};

function $DONOTEVALUATE() {
  throw "Test262: This statement should not be evaluated.";
}


//doneprintHandle.js
// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
defines: [$DONE]
---*/

function __consolePrintHandle__(msg) {
  print(msg);
}

function $DONE(error) {
  if (error) {
    if(typeof error === 'object' && error !== null && 'name' in error) {
      __consolePrintHandle__('Test262:AsyncTestFailure:' + error.name + ': ' + error.message);
    } else {
      __consolePrintHandle__('Test262:AsyncTestFailure:Test262Error: ' + error);
    }
  } else {
    __consolePrintHandle__('Test262:AsyncTestComplete');
  }
}

//regExpUtils.js
// Copyright (C) 2017 Mathias Bynens.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of RegExp objects.
defines: [buildString, testPropertyEscapes, testPropertyOfStrings, matchValidator]
---*/

function buildString(args) {
  // Use member expressions rather than destructuring `args` for improved
  // compatibility with engines that only implement assignment patterns
  // partially or not at all.
  const loneCodePoints = args.loneCodePoints;
  const ranges = args.ranges;
  const CHUNK_SIZE = 10000;
  let result = Reflect.apply(String.fromCodePoint, null, loneCodePoints);
  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];
    const start = range[0];
    const end = range[1];
    const codePoints = [];
    for (let length = 0, codePoint = start; codePoint <= end; codePoint++) {
      codePoints[length++] = codePoint;
      if (length === CHUNK_SIZE) {
        result += Reflect.apply(String.fromCodePoint, null, codePoints);
        codePoints.length = length = 0;
      }
    }
    result += Reflect.apply(String.fromCodePoint, null, codePoints);
  }
  return result;
}

function printCodePoint(codePoint) {
  const hex = codePoint
    .toString(16)
    .toUpperCase()
    .padStart(6, "0");
  return `U+${hex}`;
}

function printStringCodePoints(string) {
  const buf = [];
  for (const symbol of string) {
    const formatted = printCodePoint(symbol.codePointAt(0));
    buf.push(formatted);
  }
  return buf.join(' ');
}

function testPropertyEscapes(regExp, string, expression) {
  if (!regExp.test(string)) {
    for (const symbol of string) {
      printCodePoint(symbol.codePointAt(0));
      assert(
        regExp.test(symbol),
        `\`${ expression }\` should match U+${ hex } (\`${ symbol }\`)`
      );
    }
  }
}

function testPropertyOfStrings(args) {
  // Use member expressions rather than destructuring `args` for improved
  // compatibility with engines that only implement assignment patterns
  // partially or not at all.
  const regExp = args.regExp;
  const expression = args.expression;
  const matchStrings = args.matchStrings;
  const nonMatchStrings = args.nonMatchStrings;
  const allStrings = matchStrings.join('');
  if (!regExp.test(allStrings)) {
    for (const string of matchStrings) {
      assert(
        regExp.test(string),
        `\`${ expression }\` should match ${ string } (U+${ printStringCodePoints(string) })`
      );
    }
  }

  const allNonMatchStrings = nonMatchStrings.join('');
  if (regExp.test(allNonMatchStrings)) {
    for (const string of nonMatchStrings) {
      assert(
        !regExp.test(string),
        `\`${ expression }\` should not match ${ string } (U+${ printStringCodePoints(string) })`
      );
    }
  }
}

// Returns a function that validates a RegExp match result.
//
// Example:
//
//    var validate = matchValidator(['b'], 1, 'abc');
//    validate(/b/.exec('abc'));
//
function matchValidator(expectedEntries, expectedIndex, expectedInput) {
  return function(match) {
    assert.compareArray(match, expectedEntries, 'Match entries');
    assert.sameValue(match.index, expectedIndex, 'Match index');
    assert.sameValue(match.input, expectedInput, 'Match input');
  }
}

//assertRelativeDateMs.js
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Verify that the given date object's Number representation describes the
    correct number of milliseconds since the Unix epoch relative to the local
    time zone (as interpreted at the specified date).
defines: [assertRelativeDateMs]
---*/

/**
 * @param {Date} date
 * @param {Number} expectedMs
 */
function assertRelativeDateMs(date, expectedMs) {
  var actualMs = date.valueOf();
  var localOffset = date.getTimezoneOffset() * 60000;

  if (actualMs - localOffset !== expectedMs) {
    throw new Test262Error(
      'Expected ' + date + ' to be ' + expectedMs +
      ' milliseconds from the Unix epoch'
    );
  }
}

//typeCoercion.js
// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Functions to help generate test cases for testing type coercion abstract
    operations like ToNumber.
defines:
  - testCoercibleToIndexZero
  - testCoercibleToIndexOne
  - testCoercibleToIndexFromIndex
  - testCoercibleToIntegerZero
  - testCoercibleToIntegerOne
  - testCoercibleToNumberZero
  - testCoercibleToNumberNan
  - testCoercibleToNumberOne
  - testCoercibleToIntegerFromInteger
  - testPrimitiveWrappers
  - testCoercibleToPrimitiveWithMethod
  - testNotCoercibleToIndex
  - testNotCoercibleToInteger
  - testNotCoercibleToNumber
  - testNotCoercibleToPrimitive
  - testCoercibleToString
  - testNotCoercibleToString
  - testCoercibleToBooleanTrue
  - testCoercibleToBooleanFalse
  - testCoercibleToBigIntZero
  - testCoercibleToBigIntOne
  - testCoercibleToBigIntFromBigInt
  - testNotCoercibleToBigInt
---*/

function testCoercibleToIndexZero(test) {
  testCoercibleToIntegerZero(test);
}

function testCoercibleToIndexOne(test) {
  testCoercibleToIntegerOne(test);
}

function testCoercibleToIndexFromIndex(nominalIndex, test) {
  assert(Number.isInteger(nominalIndex));
  assert(0 <= nominalIndex && nominalIndex <= 2**53 - 1);
  testCoercibleToIntegerFromInteger(nominalIndex, test);
}

function testCoercibleToIntegerZero(test) {
  testCoercibleToNumberZero(test);

  testCoercibleToIntegerFromInteger(0, test);

  // NaN -> +0
  testCoercibleToNumberNan(test);

  // When toString() returns a string that parses to NaN:
  test({});
  test([]);
}

function testCoercibleToIntegerOne(test) {
  testCoercibleToNumberOne(test);

  testCoercibleToIntegerFromInteger(1, test);

  // When toString() returns "1"
  test([1]);
  test(["1"]);
}

function testCoercibleToNumberZero(test) {
  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(null);
  testPrimitiveValue(false);
  testPrimitiveValue(0);
  testPrimitiveValue("0");
}

function testCoercibleToNumberNan(test) {
  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(undefined);
  testPrimitiveValue(NaN);
  testPrimitiveValue("");
  testPrimitiveValue("foo");
  testPrimitiveValue("true");
}

function testCoercibleToNumberOne(test) {
  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(true);
  testPrimitiveValue(1);
  testPrimitiveValue("1");
}

function testCoercibleToIntegerFromInteger(nominalInteger, test) {
  assert(Number.isInteger(nominalInteger));

  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);

    // Non-primitive values that coerce to the nominal integer:
    // toString() returns a string that parsers to a primitive value.
    test([value]);
  }

  function testPrimitiveNumber(number) {
    testPrimitiveValue(number);
    // ToNumber: String -> Number
    testPrimitiveValue(number.toString());
  }

  testPrimitiveNumber(nominalInteger);

  // ToInteger: floor(abs(number))
  if (nominalInteger >= 0) {
    testPrimitiveNumber(nominalInteger + 0.9);
  }
  if (nominalInteger <= 0) {
    testPrimitiveNumber(nominalInteger - 0.9);
  }
}

function testPrimitiveWrappers(primitiveValue, hint, test) {
  if (primitiveValue != null) {
    // null and undefined result in {} rather than a proper wrapper,
    // so skip this case for those values.
    test(Object(primitiveValue));
  }

  testCoercibleToPrimitiveWithMethod(hint, function() {
    return primitiveValue;
  }, test);
}

function testCoercibleToPrimitiveWithMethod(hint, method, test) {
  var methodNames;
  if (hint === "number") {
    methodNames = ["valueOf", "toString"];
  } else if (hint === "string") {
    methodNames = ["toString", "valueOf"];
  } else {
    throw new Test262Error();
  }
  // precedence order
  test({
    [Symbol.toPrimitive]: method,
    [methodNames[0]]: function() { throw new Test262Error(); },
    [methodNames[1]]: function() { throw new Test262Error(); },
  });
  test({
    [methodNames[0]]: method,
    [methodNames[1]]: function() { throw new Test262Error(); },
  });
  if (hint === "number") {
    // The default valueOf returns an object, which is unsuitable.
    // The default toString returns a String, which is suitable.
    // Therefore this test only works for valueOf falling back to toString.
    test({
      // this is toString:
      [methodNames[1]]: method,
    });
  }

  // GetMethod: if func is undefined or null, return undefined.
  test({
    [Symbol.toPrimitive]: undefined,
    [methodNames[0]]: method,
    [methodNames[1]]: method,
  });
  test({
    [Symbol.toPrimitive]: null,
    [methodNames[0]]: method,
    [methodNames[1]]: method,
  });

  // if methodNames[0] is not callable, fallback to methodNames[1]
  test({
    [methodNames[0]]: null,
    [methodNames[1]]: method,
  });
  test({
    [methodNames[0]]: 1,
    [methodNames[1]]: method,
  });
  test({
    [methodNames[0]]: {},
    [methodNames[1]]: method,
  });

  // if methodNames[0] returns an object, fallback to methodNames[1]
  test({
    [methodNames[0]]: function() { return {}; },
    [methodNames[1]]: method,
  });
  test({
    [methodNames[0]]: function() { return Object(1); },
    [methodNames[1]]: method,
  });
}

function testNotCoercibleToIndex(test) {
  function testPrimitiveValue(value) {
    test(RangeError, value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", function(value) {
      test(RangeError, value);
    });
  }

  // Let integerIndex be ? ToInteger(value).
  testNotCoercibleToInteger(test);

  // If integerIndex < 0, throw a RangeError exception.
  testPrimitiveValue(-1);
  testPrimitiveValue(-2.5);
  testPrimitiveValue("-2.5");
  testPrimitiveValue(-Infinity);

  // Let index be ! ToLength(integerIndex).
  // If SameValueZero(integerIndex, index) is false, throw a RangeError exception.
  testPrimitiveValue(2 ** 53);
  testPrimitiveValue(Infinity);
}

function testNotCoercibleToInteger(test) {
  // ToInteger only throws from ToNumber.
  testNotCoercibleToNumber(test);
}

function testNotCoercibleToNumber(test) {
  function testPrimitiveValue(value) {
    test(TypeError, value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", function(value) {
      test(TypeError, value);
    });
  }

  // ToNumber: Symbol -> TypeError
  testPrimitiveValue(Symbol("1"));

  if (typeof BigInt !== "undefined") {
    // ToNumber: BigInt -> TypeError
    testPrimitiveValue(BigInt(0));
  }

  // ToPrimitive
  testNotCoercibleToPrimitive("number", test);
}

function testNotCoercibleToPrimitive(hint, test) {
  function MyError() {}

  // ToPrimitive: input[@@toPrimitive] is not callable (and non-null)
  test(TypeError, {[Symbol.toPrimitive]: 1});
  test(TypeError, {[Symbol.toPrimitive]: {}});

  // ToPrimitive: input[@@toPrimitive] returns object
  test(TypeError, {[Symbol.toPrimitive]: function() { return Object(1); }});
  test(TypeError, {[Symbol.toPrimitive]: function() { return {}; }});

  // ToPrimitive: input[@@toPrimitive] throws
  test(MyError, {[Symbol.toPrimitive]: function() { throw new MyError(); }});

  // OrdinaryToPrimitive: method throws
  testCoercibleToPrimitiveWithMethod(hint, function() {
    throw new MyError();
  }, function(value) {
    test(MyError, value);
  });

  // OrdinaryToPrimitive: both methods are unsuitable
  function testUnsuitableMethod(method) {
    test(TypeError, {valueOf:method, toString:method});
  }
  // not callable:
  testUnsuitableMethod(null);
  testUnsuitableMethod(1);
  testUnsuitableMethod({});
  // returns object:
  testUnsuitableMethod(function() { return Object(1); });
  testUnsuitableMethod(function() { return {}; });
}

function testCoercibleToString(test) {
  function testPrimitiveValue(value, expectedString) {
    test(value, expectedString);
    // ToPrimitive
    testPrimitiveWrappers(value, "string", function(value) {
      test(value, expectedString);
    });
  }

  testPrimitiveValue(undefined, "undefined");
  testPrimitiveValue(null, "null");
  testPrimitiveValue(true, "true");
  testPrimitiveValue(false, "false");
  testPrimitiveValue(0, "0");
  testPrimitiveValue(-0, "0");
  testPrimitiveValue(Infinity, "Infinity");
  testPrimitiveValue(-Infinity, "-Infinity");
  testPrimitiveValue(123.456, "123.456");
  testPrimitiveValue(-123.456, "-123.456");
  testPrimitiveValue("", "");
  testPrimitiveValue("foo", "foo");

  if (typeof BigInt !== "undefined") {
    // BigInt -> TypeError
    testPrimitiveValue(BigInt(0), "0");
  }

  // toString of a few objects
  test([], "");
  test(["foo", "bar"], "foo,bar");
  test({}, "[object Object]");
}

function testNotCoercibleToString(test) {
  function testPrimitiveValue(value) {
    test(TypeError, value);
    // ToPrimitive
    testPrimitiveWrappers(value, "string", function(value) {
      test(TypeError, value);
    });
  }

  // Symbol -> TypeError
  testPrimitiveValue(Symbol("1"));

  // ToPrimitive
  testNotCoercibleToPrimitive("string", test);
}

function testCoercibleToBooleanTrue(test) {
  test(true);
  test(1);
  test("string");
  test(Symbol("1"));
  test({});
}

function testCoercibleToBooleanFalse(test) {
  test(undefined);
  test(null);
  test(false);
  test(0);
  test(-0);
  test(NaN);
  test("");
}

function testCoercibleToBigIntZero(test) {
  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);
  }

  testCoercibleToBigIntFromBigInt(BigInt(0), test);
  testPrimitiveValue(-BigInt(0));
  testPrimitiveValue("-0");
  testPrimitiveValue(false);
  testPrimitiveValue("");
  testPrimitiveValue("   ");

  // toString() returns ""
  test([]);

  // toString() returns "0"
  test([0]);
}

function testCoercibleToBigIntOne(test) {
  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);
  }

  testCoercibleToBigIntFromBigInt(BigInt(1), test);
  testPrimitiveValue(true);

  // toString() returns "1"
  test([1]);
}

function testCoercibleToBigIntFromBigInt(nominalBigInt, test) {
  function testPrimitiveValue(value) {
    test(value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", test);
  }

  testPrimitiveValue(nominalBigInt);
  testPrimitiveValue(nominalBigInt.toString());
  testPrimitiveValue("0b" + nominalBigInt.toString(2));
  testPrimitiveValue("0o" + nominalBigInt.toString(8));
  testPrimitiveValue("0x" + nominalBigInt.toString(16));
  testPrimitiveValue("   " + nominalBigInt.toString() + "   ");

  // toString() returns the decimal string representation
  test([nominalBigInt]);
  test([nominalBigInt.toString()]);
}

function testNotCoercibleToBigInt(test) {
  function testPrimitiveValue(error, value) {
    test(error, value);
    // ToPrimitive
    testPrimitiveWrappers(value, "number", function(value) {
      test(error, value);
    });
  }

  // Undefined, Null, Number, Symbol -> TypeError
  testPrimitiveValue(TypeError, undefined);
  testPrimitiveValue(TypeError, null);
  testPrimitiveValue(TypeError, 0);
  testPrimitiveValue(TypeError, NaN);
  testPrimitiveValue(TypeError, Infinity);
  testPrimitiveValue(TypeError, Symbol("1"));

  // when a String parses to NaN -> SyntaxError
  function testStringValue(string) {
    testPrimitiveValue(SyntaxError, string);
    testPrimitiveValue(SyntaxError, "   " + string);
    testPrimitiveValue(SyntaxError, string + "   ");
    testPrimitiveValue(SyntaxError, "   " + string + "   ");
  }
  testStringValue("a");
  testStringValue("0b2");
  testStringValue("0o8");
  testStringValue("0xg");
  testStringValue("1n");
}

//testTypedArray.js
// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of TypedArray objects.
defines:
  - typedArrayConstructors
  - floatArrayConstructors
  - intArrayConstructors
  - TypedArray
  - testWithTypedArrayConstructors
  - testWithAtomicsFriendlyTypedArrayConstructors
  - testWithNonAtomicsFriendlyTypedArrayConstructors
  - testTypedArrayConversions
---*/

/**
 * Array containing every typed array constructor.
 */
var typedArrayConstructors = [
  Float64Array,
  Float32Array,
  Int32Array,
  Int16Array,
  Int8Array,
  Uint32Array,
  Uint16Array,
  Uint8Array,
  Uint8ClampedArray
];

var floatArrayConstructors = typedArrayConstructors.slice(0, 2);
var intArrayConstructors = typedArrayConstructors.slice(2, 7);

/**
 * The %TypedArray% intrinsic constructor function.
 */
var TypedArray = Object.getPrototypeOf(Int8Array);

/**
 * Callback for testing a typed array constructor.
 *
 * @callback typedArrayConstructorCallback
 * @param {Function} Constructor the constructor object to test with.
 */

/**
 * Calls the provided function for every typed array constructor.
 *
 * @param {typedArrayConstructorCallback} f - the function to call for each typed array constructor.
 * @param {Array} selected - An optional Array with filtered typed arrays
 */
function testWithTypedArrayConstructors(f, selected) {
  var constructors = selected || typedArrayConstructors;
  for (var i = 0; i < constructors.length; ++i) {
    var constructor = constructors[i];
    try {
      f(constructor);
    } catch (e) {
      e.message += " (Testing with " + constructor.name + ".)";
      throw e;
    }
  }
}

/**
 * Calls the provided function for every non-"Atomics Friendly" typed array constructor.
 *
 * @param {typedArrayConstructorCallback} f - the function to call for each typed array constructor.
 * @param {Array} selected - An optional Array with filtered typed arrays
 */
function testWithNonAtomicsFriendlyTypedArrayConstructors(f) {
  testWithTypedArrayConstructors(f, [
    Float64Array,
    Float32Array,
    Uint8ClampedArray
  ]);
}

/**
 * Calls the provided function for every "Atomics Friendly" typed array constructor.
 *
 * @param {typedArrayConstructorCallback} f - the function to call for each typed array constructor.
 * @param {Array} selected - An optional Array with filtered typed arrays
 */
function testWithAtomicsFriendlyTypedArrayConstructors(f) {
  testWithTypedArrayConstructors(f, [
    Int32Array,
    Int16Array,
    Int8Array,
    Uint32Array,
    Uint16Array,
    Uint8Array,
  ]);
}

/**
 * Helper for conversion operations on TypedArrays, the expected values
 * properties are indexed in order to match the respective value for each
 * TypedArray constructor
 * @param  {Function} fn - the function to call for each constructor and value.
 *                         will be called with the constructor, value, expected
 *                         value, and a initial value that can be used to avoid
 *                         a false positive with an equivalent expected value.
 */
function testTypedArrayConversions(byteConversionValues, fn) {
  var values = byteConversionValues.values;
  var expected = byteConversionValues.expected;

  testWithTypedArrayConstructors(function(TA) {
    var name = TA.name.slice(0, -5);

    return values.forEach(function(value, index) {
      var exp = expected[name][index];
      var initial = 0;
      if (exp === 0) {
        initial = 1;
      }
      fn(TA, value, exp, initial);
    });
  });
}

//dateConstants.js
// Copyright (C) 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of date-centric values
defines:
  - date_1899_end
  - date_1900_start
  - date_1969_end
  - date_1970_start
  - date_1999_end
  - date_2000_start
  - date_2099_end
  - date_2100_start
  - start_of_time
  - end_of_time
---*/

var date_1899_end = -2208988800001;
var date_1900_start = -2208988800000;
var date_1969_end = -1;
var date_1970_start = 0;
var date_1999_end = 946684799999;
var date_2000_start = 946684800000;
var date_2099_end = 4102444799999;
var date_2100_start = 4102444800000;

var start_of_time = -8.64e15;
var end_of_time = 8.64e15;

//tcoHelper.js
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    This defines the number of consecutive recursive function calls that must be
    made in order to prove that stack frames are properly destroyed according to
    ES2015 tail call optimization semantics.
defines: [$MAX_ITERATIONS]
---*/




var $MAX_ITERATIONS = 100000;

//testIntl.js
// Copyright (C) 2011 2012 Norbert Lindenberg. All rights reserved.
// Copyright (C) 2012 2013 Mozilla Corporation. All rights reserved.
// Copyright (C) 2020 Apple Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    This file contains shared functions for the tests in the conformance test
    suite for the ECMAScript Internationalization API.
author: Norbert Lindenberg
defines:
  - testWithIntlConstructors
  - taintDataProperty
  - taintMethod
  - taintProperties
  - taintArray
  - getLocaleSupportInfo
  - getInvalidLanguageTags
  - isCanonicalizedStructurallyValidLanguageTag
  - getInvalidLocaleArguments
  - testOption
  - testForUnwantedRegExpChanges
  - allCalendars
  - allCollations
  - allNumberingSystems
  - isValidNumberingSystem
  - numberingSystemDigits
  - allSimpleSanctionedUnits
  - testNumberFormat
  - getDateTimeComponents
  - getDateTimeComponentValues
  - isCanonicalizedStructurallyValidTimeZoneName
---*/
/**
 */


/**
 * @description Calls the provided function for every service constructor in
 * the Intl object.
 * @param {Function} f the function to call for each service constructor in
 *   the Intl object.
 *   @param {Function} Constructor the constructor object to test with.
 */
function testWithIntlConstructors(f) {
  var constructors = ["Collator", "NumberFormat", "DateTimeFormat"];

  // Optionally supported Intl constructors.
  // NB: Intl.Locale isn't an Intl service constructor!
  // Intl.DisplayNames cannot be called without type in options.
  ["PluralRules", "RelativeTimeFormat", "ListFormat"].forEach(function(constructor) {
    if (typeof Intl[constructor] === "function") {
      constructors[constructors.length] = constructor;
    }
  });

  constructors.forEach(function (constructor) {
    var Constructor = Intl[constructor];
    try {
      f(Constructor);
    } catch (e) {
      e.message += " (Testing with " + constructor + ".)";
      throw e;
    }
  });
}


/**
 * Taints a named data property of the given object by installing
 * a setter that throws an exception.
 * @param {object} obj the object whose data property to taint
 * @param {string} property the property to taint
 */
function taintDataProperty(obj, property) {
  Object.defineProperty(obj, property, {
    set: function(value) {
      throw new Test262Error("Client code can adversely affect behavior: setter for " + property + ".");
    },
    enumerable: false,
    configurable: true
  });
}


/**
 * Taints a named method of the given object by replacing it with a function
 * that throws an exception.
 * @param {object} obj the object whose method to taint
 * @param {string} property the name of the method to taint
 */
function taintMethod(obj, property) {
  Object.defineProperty(obj, property, {
    value: function() {
      throw new Test262Error("Client code can adversely affect behavior: method " + property + ".");
    },
    writable: true,
    enumerable: false,
    configurable: true
  });
}


/**
 * Taints the given properties (and similarly named properties) by installing
 * setters on Object.prototype that throw exceptions.
 * @param {Array} properties an array of property names to taint
 */
function taintProperties(properties) {
  properties.forEach(function (property) {
    var adaptedProperties = [property, "__" + property, "_" + property, property + "_", property + "__"];
    adaptedProperties.forEach(function (property) {
      taintDataProperty(Object.prototype, property);
    });
  });
}


/**
 * Taints the Array object by creating a setter for the property "0" and
 * replacing some key methods with functions that throw exceptions.
 */
function taintArray() {
  taintDataProperty(Array.prototype, "0");
  taintMethod(Array.prototype, "indexOf");
  taintMethod(Array.prototype, "join");
  taintMethod(Array.prototype, "push");
  taintMethod(Array.prototype, "slice");
  taintMethod(Array.prototype, "sort");
}


/**
 * Gets locale support info for the given constructor object, which must be one
 * of Intl constructors.
 * @param {object} Constructor the constructor for which to get locale support info
 * @param {object} options the options while calling the constructor
 * @return {object} locale support info with the following properties:
 *   supported: array of fully supported language tags
 *   byFallback: array of language tags that are supported through fallbacks
 *   unsupported: array of unsupported language tags
 */
function getLocaleSupportInfo(Constructor, options) {
  var languages = ["zh", "es", "en", "hi", "ur", "ar", "ja", "pa"];
  var scripts = ["Latn", "Hans", "Deva", "Arab", "Jpan", "Hant", "Guru"];
  var countries = ["CN", "IN", "US", "PK", "JP", "TW", "HK", "SG", "419"];

  var allTags = [];
  var i, j, k;
  var language, script, country;
  for (i = 0; i < languages.length; i++) {
    language = languages[i];
    allTags.push(language);
    for (j = 0; j < scripts.length; j++) {
      script = scripts[j];
      allTags.push(language + "-" + script);
      for (k = 0; k < countries.length; k++) {
        country = countries[k];
        allTags.push(language + "-" + script + "-" + country);
      }
    }
    for (k = 0; k < countries.length; k++) {
      country = countries[k];
      allTags.push(language + "-" + country);
    }
  }

  var supported = [];
  var byFallback = [];
  var unsupported = [];
  for (i = 0; i < allTags.length; i++) {
    var request = allTags[i];
    var result = new Constructor([request], options).resolvedOptions().locale;
    if (request === result) {
      supported.push(request);
    } else if (request.indexOf(result) === 0) {
      byFallback.push(request);
    } else {
      unsupported.push(request);
    }
  }

  return {
    supported: supported,
    byFallback: byFallback,
    unsupported: unsupported
  };
}


/**
 * Returns an array of strings for which IsStructurallyValidLanguageTag() returns false
 */
function getInvalidLanguageTags() {
  var invalidLanguageTags = [
    "", // empty tag
    "i", // singleton alone
    "x", // private use without subtag
    "u", // extension singleton in first place
    "419", // region code in first place
    "u-nu-latn-cu-bob", // extension sequence without language
    "hans-cmn-cn", // "hans" could theoretically be a 4-letter language code,
                   // but those can't be followed by extlang codes.
    "cmn-hans-cn-u-u", // duplicate singleton
    "cmn-hans-cn-t-u-ca-u", // duplicate singleton
    "de-gregory-gregory", // duplicate variant
    "*", // language range
    "de-*", // language range
    "中文", // non-ASCII letters
    "en-ß", // non-ASCII letters
    "ıd", // non-ASCII letters
    "es-Latn-latn", // two scripts
    "pl-PL-pl", // two regions
    "u-ca-gregory", // extension in first place
    "de-1996-1996", // duplicate numeric variant
    "pt-u-ca-gregory-u-nu-latn", // duplicate singleton subtag

    // Invalid tags starting with: https://github.com/tc39/ecma402/pull/289
    "no-nyn", // regular grandfathered in BCP47, but invalid in UTS35
    "i-klingon", // irregular grandfathered in BCP47, but invalid in UTS35
    "zh-hak-CN", // language with extlang in BCP47, but invalid in UTS35
    "sgn-ils", // language with extlang in BCP47, but invalid in UTS35
    "x-foo", // privateuse-only in BCP47, but invalid in UTS35
    "x-en-US-12345", // more privateuse-only variants.
    "x-12345-12345-en-US",
    "x-en-US-12345-12345",
    "x-en-u-foo",
    "x-en-u-foo-u-bar",
    "x-u-foo",

    // underscores in different parts of the language tag
    "de_DE",
    "DE_de",
    "cmn_Hans",
    "cmn-hans_cn",
    "es_419",
    "es-419-u-nu-latn-cu_bob",
    "i_klingon",
    "cmn-hans-cn-t-ca-u-ca-x_t-u",
    "enochian_enochian",
    "de-gregory_u-ca-gregory",

    "en\u0000", // null-terminator sequence
    " en", // leading whitespace
    "en ", // trailing whitespace
    "it-IT-Latn", // country before script tag
    "de-u", // incomplete Unicode extension sequences
    "de-u-",
    "de-u-ca-",
    "de-u-ca-gregory-",
    "si-x", // incomplete private-use tags
    "x-",
    "x-y-",
  ];

  // make sure the data above is correct
  for (var i = 0; i < invalidLanguageTags.length; ++i) {
    var invalidTag = invalidLanguageTags[i];
    assert(
      !isCanonicalizedStructurallyValidLanguageTag(invalidTag),
      "Test data \"" + invalidTag + "\" is a canonicalized and structurally valid language tag."
    );
  }

  return invalidLanguageTags;
}


/**
 * @description Tests whether locale is a String value representing a
 * structurally valid and canonicalized BCP 47 language tag, as defined in
 * sections 6.2.2 and 6.2.3 of the ECMAScript Internationalization API
 * Specification.
 * @param {String} locale the string to be tested.
 * @result {Boolean} whether the test succeeded.
 */
function isCanonicalizedStructurallyValidLanguageTag(locale) {

  /**
   * Regular expression defining Unicode BCP 47 Locale Identifiers.
   *
   * Spec: https://unicode.org/reports/tr35/#Unicode_locale_identifier
   */
  var alpha = "[a-z]",
    digit = "[0-9]",
    alphanum = "[a-z0-9]",
    variant = "(" + alphanum + "{5,8}|(?:" + digit + alphanum + "{3}))",
    region = "(" + alpha + "{2}|" + digit + "{3})",
    script = "(" + alpha + "{4})",
    language = "(" + alpha + "{2,3}|" + alpha + "{5,8})",
    privateuse = "(x(-[a-z0-9]{1,8})+)",
    singleton = "(" + digit + "|[a-wy-z])",
    attribute= "(" + alphanum + "{3,8})",
    keyword = "(" + alphanum + alpha + "(-" + alphanum + "{3,8})*)",
    unicode_locale_extensions = "(u((-" + keyword + ")+|((-" + attribute + ")+(-" + keyword + ")*)))",
    tlang = "(" + language + "(-" + script + ")?(-" + region + ")?(-" + variant + ")*)",
    tfield = "(" + alpha + digit + "(-" + alphanum + "{3,8})+)",
    transformed_extensions = "(t((-" + tlang + "(-" + tfield + ")*)|(-" + tfield + ")+))",
    other_singleton = "(" + digit + "|[a-sv-wy-z])",
    other_extensions = "(" + other_singleton + "(-" + alphanum + "{2,8})+)",
    extension = "(" + unicode_locale_extensions + "|" + transformed_extensions + "|" + other_extensions + ")",
    locale_id = language + "(-" + script + ")?(-" + region + ")?(-" + variant + ")*(-" + extension + ")*(-" + privateuse + ")?",
    languageTag = "^(" + locale_id + ")$",
    languageTagRE = new RegExp(languageTag, "i");

  var duplicateSingleton = "-" + singleton + "-(.*-)?\\1(?!" + alphanum + ")",
    duplicateSingletonRE = new RegExp(duplicateSingleton, "i"),
    duplicateVariant = "(" + alphanum + "{2,8}-)+" + variant + "-(" + alphanum + "{2,8}-)*\\2(?!" + alphanum + ")",
    duplicateVariantRE = new RegExp(duplicateVariant, "i");

  var transformKeyRE = new RegExp("^" + alpha + digit + "$", "i");

  /**
   * Verifies that the given string is a well-formed Unicode BCP 47 Locale Identifier
   * with no duplicate variant or singleton subtags.
   *
   * Spec: ECMAScript Internationalization API Specification, draft, 6.2.2.
   */
  function isStructurallyValidLanguageTag(locale) {
    if (!languageTagRE.test(locale)) {
      return false;
    }
    locale = locale.split(/-x-/)[0];
    return !duplicateSingletonRE.test(locale) && !duplicateVariantRE.test(locale);
  }


  /**
   * Mappings from complete tags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __tagMappings = {
    // property names must be in lower case; values in canonical form

    "art-lojban": "jbo",
    "cel-gaulish": "xtg",
    "zh-guoyu": "zh",
    "zh-hakka": "hak",
    "zh-xiang": "hsn",
  };


  /**
   * Mappings from language subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __languageMappings = {
    // property names and values must be in canonical case

    "aam": "aas",
    "aar": "aa",
    "abk": "ab",
    "adp": "dz",
    "afr": "af",
    "aju": "jrb",
    "aka": "ak",
    "alb": "sq",
    "als": "sq",
    "amh": "am",
    "ara": "ar",
    "arb": "ar",
    "arg": "an",
    "arm": "hy",
    "asd": "snz",
    "asm": "as",
    "aue": "ktz",
    "ava": "av",
    "ave": "ae",
    "aym": "ay",
    "ayr": "ay",
    "ayx": "nun",
    "aze": "az",
    "azj": "az",
    "bak": "ba",
    "bam": "bm",
    "baq": "eu",
    "bcc": "bal",
    "bcl": "bik",
    "bel": "be",
    "ben": "bn",
    "bgm": "bcg",
    "bh": "bho",
    "bih": "bho",
    "bis": "bi",
    "bjd": "drl",
    "bod": "bo",
    "bos": "bs",
    "bre": "br",
    "bul": "bg",
    "bur": "my",
    "bxk": "luy",
    "bxr": "bua",
    "cat": "ca",
    "ccq": "rki",
    "ces": "cs",
    "cha": "ch",
    "che": "ce",
    "chi": "zh",
    "chu": "cu",
    "chv": "cv",
    "cjr": "mom",
    "cka": "cmr",
    "cld": "syr",
    "cmk": "xch",
    "cmn": "zh",
    "cor": "kw",
    "cos": "co",
    "coy": "pij",
    "cqu": "quh",
    "cre": "cr",
    "cwd": "cr",
    "cym": "cy",
    "cze": "cs",
    "dan": "da",
    "deu": "de",
    "dgo": "doi",
    "dhd": "mwr",
    "dik": "din",
    "diq": "zza",
    "dit": "dif",
    "div": "dv",
    "drh": "mn",
    "dut": "nl",
    "dzo": "dz",
    "ekk": "et",
    "ell": "el",
    "emk": "man",
    "eng": "en",
    "epo": "eo",
    "esk": "ik",
    "est": "et",
    "eus": "eu",
    "ewe": "ee",
    "fao": "fo",
    "fas": "fa",
    "fat": "ak",
    "fij": "fj",
    "fin": "fi",
    "fra": "fr",
    "fre": "fr",
    "fry": "fy",
    "fuc": "ff",
    "ful": "ff",
    "gav": "dev",
    "gaz": "om",
    "gbo": "grb",
    "geo": "ka",
    "ger": "de",
    "gfx": "vaj",
    "ggn": "gvr",
    "gla": "gd",
    "gle": "ga",
    "glg": "gl",
    "glv": "gv",
    "gno": "gon",
    "gre": "el",
    "grn": "gn",
    "gti": "nyc",
    "gug": "gn",
    "guj": "gu",
    "guv": "duz",
    "gya": "gba",
    "hat": "ht",
    "hau": "ha",
    "hdn": "hai",
    "hea": "hmn",
    "heb": "he",
    "her": "hz",
    "him": "srx",
    "hin": "hi",
    "hmo": "ho",
    "hrr": "jal",
    "hrv": "hr",
    "hun": "hu",
    "hye": "hy",
    "ibi": "opa",
    "ibo": "ig",
    "ice": "is",
    "ido": "io",
    "iii": "ii",
    "ike": "iu",
    "iku": "iu",
    "ile": "ie",
    "ilw": "gal",
    "in": "id",
    "ina": "ia",
    "ind": "id",
    "ipk": "ik",
    "isl": "is",
    "ita": "it",
    "iw": "he",
    "jav": "jv",
    "jeg": "oyb",
    "ji": "yi",
    "jpn": "ja",
    "jw": "jv",
    "kal": "kl",
    "kan": "kn",
    "kas": "ks",
    "kat": "ka",
    "kau": "kr",
    "kaz": "kk",
    "kgc": "tdf",
    "kgh": "kml",
    "khk": "mn",
    "khm": "km",
    "kik": "ki",
    "kin": "rw",
    "kir": "ky",
    "kmr": "ku",
    "knc": "kr",
    "kng": "kg",
    "knn": "kok",
    "koj": "kwv",
    "kom": "kv",
    "kon": "kg",
    "kor": "ko",
    "kpv": "kv",
    "krm": "bmf",
    "ktr": "dtp",
    "kua": "kj",
    "kur": "ku",
    "kvs": "gdj",
    "kwq": "yam",
    "kxe": "tvd",
    "kzj": "dtp",
    "kzt": "dtp",
    "lao": "lo",
    "lat": "la",
    "lav": "lv",
    "lbk": "bnc",
    "lii": "raq",
    "lim": "li",
    "lin": "ln",
    "lit": "lt",
    "llo": "ngt",
    "lmm": "rmx",
    "ltz": "lb",
    "lub": "lu",
    "lug": "lg",
    "lvs": "lv",
    "mac": "mk",
    "mah": "mh",
    "mal": "ml",
    "mao": "mi",
    "mar": "mr",
    "may": "ms",
    "meg": "cir",
    "mhr": "chm",
    "mkd": "mk",
    "mlg": "mg",
    "mlt": "mt",
    "mnk": "man",
    "mo": "ro",
    "mol": "ro",
    "mon": "mn",
    "mri": "mi",
    "msa": "ms",
    "mst": "mry",
    "mup": "raj",
    "mwj": "vaj",
    "mya": "my",
    "myd": "aog",
    "myt": "mry",
    "nad": "xny",
    "nau": "na",
    "nav": "nv",
    "nbl": "nr",
    "ncp": "kdz",
    "nde": "nd",
    "ndo": "ng",
    "nep": "ne",
    "nld": "nl",
    "nno": "nn",
    "nns": "nbr",
    "nnx": "ngv",
    "no": "nb",
    "nob": "nb",
    "nor": "nb",
    "npi": "ne",
    "nts": "pij",
    "nya": "ny",
    "oci": "oc",
    "ojg": "oj",
    "oji": "oj",
    "ori": "or",
    "orm": "om",
    "ory": "or",
    "oss": "os",
    "oun": "vaj",
    "pan": "pa",
    "pbu": "ps",
    "pcr": "adx",
    "per": "fa",
    "pes": "fa",
    "pli": "pi",
    "plt": "mg",
    "pmc": "huw",
    "pmu": "phr",
    "pnb": "lah",
    "pol": "pl",
    "por": "pt",
    "ppa": "bfy",
    "ppr": "lcq",
    "pry": "prt",
    "pus": "ps",
    "puz": "pub",
    "que": "qu",
    "quz": "qu",
    "rmy": "rom",
    "roh": "rm",
    "ron": "ro",
    "rum": "ro",
    "run": "rn",
    "rus": "ru",
    "sag": "sg",
    "san": "sa",
    "sca": "hle",
    "scc": "sr",
    "scr": "hr",
    "sin": "si",
    "skk": "oyb",
    "slk": "sk",
    "slo": "sk",
    "slv": "sl",
    "sme": "se",
    "smo": "sm",
    "sna": "sn",
    "snd": "sd",
    "som": "so",
    "sot": "st",
    "spa": "es",
    "spy": "kln",
    "sqi": "sq",
    "src": "sc",
    "srd": "sc",
    "srp": "sr",
    "ssw": "ss",
    "sun": "su",
    "swa": "sw",
    "swe": "sv",
    "swh": "sw",
    "tah": "ty",
    "tam": "ta",
    "tat": "tt",
    "tdu": "dtp",
    "tel": "te",
    "tgk": "tg",
    "tgl": "fil",
    "tha": "th",
    "thc": "tpo",
    "thx": "oyb",
    "tib": "bo",
    "tie": "ras",
    "tir": "ti",
    "tkk": "twm",
    "tl": "fil",
    "tlw": "weo",
    "tmp": "tyj",
    "tne": "kak",
    "ton": "to",
    "tsf": "taj",
    "tsn": "tn",
    "tso": "ts",
    "ttq": "tmh",
    "tuk": "tk",
    "tur": "tr",
    "tw": "ak",
    "twi": "ak",
    "uig": "ug",
    "ukr": "uk",
    "umu": "del",
    "uok": "ema",
    "urd": "ur",
    "uzb": "uz",
    "uzn": "uz",
    "ven": "ve",
    "vie": "vi",
    "vol": "vo",
    "wel": "cy",
    "wln": "wa",
    "wol": "wo",
    "xba": "cax",
    "xho": "xh",
    "xia": "acn",
    "xkh": "waw",
    "xpe": "kpe",
    "xsj": "suj",
    "xsl": "den",
    "ybd": "rki",
    "ydd": "yi",
    "yid": "yi",
    "yma": "lrr",
    "ymt": "mtm",
    "yor": "yo",
    "yos": "zom",
    "yuu": "yug",
    "zai": "zap",
    "zha": "za",
    "zho": "zh",
    "zsm": "ms",
    "zul": "zu",
    "zyb": "za",
  };


  /**
   * Mappings from region subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __regionMappings = {
    // property names and values must be in canonical case

    "004": "AF",
    "008": "AL",
    "010": "AQ",
    "012": "DZ",
    "016": "AS",
    "020": "AD",
    "024": "AO",
    "028": "AG",
    "031": "AZ",
    "032": "AR",
    "036": "AU",
    "040": "AT",
    "044": "BS",
    "048": "BH",
    "050": "BD",
    "051": "AM",
    "052": "BB",
    "056": "BE",
    "060": "BM",
    "062": "034",
    "064": "BT",
    "068": "BO",
    "070": "BA",
    "072": "BW",
    "074": "BV",
    "076": "BR",
    "084": "BZ",
    "086": "IO",
    "090": "SB",
    "092": "VG",
    "096": "BN",
    "100": "BG",
    "104": "MM",
    "108": "BI",
    "112": "BY",
    "116": "KH",
    "120": "CM",
    "124": "CA",
    "132": "CV",
    "136": "KY",
    "140": "CF",
    "144": "LK",
    "148": "TD",
    "152": "CL",
    "156": "CN",
    "158": "TW",
    "162": "CX",
    "166": "CC",
    "170": "CO",
    "174": "KM",
    "175": "YT",
    "178": "CG",
    "180": "CD",
    "184": "CK",
    "188": "CR",
    "191": "HR",
    "192": "CU",
    "196": "CY",
    "203": "CZ",
    "204": "BJ",
    "208": "DK",
    "212": "DM",
    "214": "DO",
    "218": "EC",
    "222": "SV",
    "226": "GQ",
    "230": "ET",
    "231": "ET",
    "232": "ER",
    "233": "EE",
    "234": "FO",
    "238": "FK",
    "239": "GS",
    "242": "FJ",
    "246": "FI",
    "248": "AX",
    "249": "FR",
    "250": "FR",
    "254": "GF",
    "258": "PF",
    "260": "TF",
    "262": "DJ",
    "266": "GA",
    "268": "GE",
    "270": "GM",
    "275": "PS",
    "276": "DE",
    "278": "DE",
    "280": "DE",
    "288": "GH",
    "292": "GI",
    "296": "KI",
    "300": "GR",
    "304": "GL",
    "308": "GD",
    "312": "GP",
    "316": "GU",
    "320": "GT",
    "324": "GN",
    "328": "GY",
    "332": "HT",
    "334": "HM",
    "336": "VA",
    "340": "HN",
    "344": "HK",
    "348": "HU",
    "352": "IS",
    "356": "IN",
    "360": "ID",
    "364": "IR",
    "368": "IQ",
    "372": "IE",
    "376": "IL",
    "380": "IT",
    "384": "CI",
    "388": "JM",
    "392": "JP",
    "398": "KZ",
    "400": "JO",
    "404": "KE",
    "408": "KP",
    "410": "KR",
    "414": "KW",
    "417": "KG",
    "418": "LA",
    "422": "LB",
    "426": "LS",
    "428": "LV",
    "430": "LR",
    "434": "LY",
    "438": "LI",
    "440": "LT",
    "442": "LU",
    "446": "MO",
    "450": "MG",
    "454": "MW",
    "458": "MY",
    "462": "MV",
    "466": "ML",
    "470": "MT",
    "474": "MQ",
    "478": "MR",
    "480": "MU",
    "484": "MX",
    "492": "MC",
    "496": "MN",
    "498": "MD",
    "499": "ME",
    "500": "MS",
    "504": "MA",
    "508": "MZ",
    "512": "OM",
    "516": "NA",
    "520": "NR",
    "524": "NP",
    "528": "NL",
    "531": "CW",
    "533": "AW",
    "534": "SX",
    "535": "BQ",
    "540": "NC",
    "548": "VU",
    "554": "NZ",
    "558": "NI",
    "562": "NE",
    "566": "NG",
    "570": "NU",
    "574": "NF",
    "578": "NO",
    "580": "MP",
    "581": "UM",
    "583": "FM",
    "584": "MH",
    "585": "PW",
    "586": "PK",
    "591": "PA",
    "598": "PG",
    "600": "PY",
    "604": "PE",
    "608": "PH",
    "612": "PN",
    "616": "PL",
    "620": "PT",
    "624": "GW",
    "626": "TL",
    "630": "PR",
    "634": "QA",
    "638": "RE",
    "642": "RO",
    "643": "RU",
    "646": "RW",
    "652": "BL",
    "654": "SH",
    "659": "KN",
    "660": "AI",
    "662": "LC",
    "663": "MF",
    "666": "PM",
    "670": "VC",
    "674": "SM",
    "678": "ST",
    "682": "SA",
    "686": "SN",
    "688": "RS",
    "690": "SC",
    "694": "SL",
    "702": "SG",
    "703": "SK",
    "704": "VN",
    "705": "SI",
    "706": "SO",
    "710": "ZA",
    "716": "ZW",
    "720": "YE",
    "724": "ES",
    "728": "SS",
    "729": "SD",
    "732": "EH",
    "736": "SD",
    "740": "SR",
    "744": "SJ",
    "748": "SZ",
    "752": "SE",
    "756": "CH",
    "760": "SY",
    "762": "TJ",
    "764": "TH",
    "768": "TG",
    "772": "TK",
    "776": "TO",
    "780": "TT",
    "784": "AE",
    "788": "TN",
    "792": "TR",
    "795": "TM",
    "796": "TC",
    "798": "TV",
    "800": "UG",
    "804": "UA",
    "807": "MK",
    "818": "EG",
    "826": "GB",
    "830": "JE",
    "831": "GG",
    "832": "JE",
    "833": "IM",
    "834": "TZ",
    "840": "US",
    "850": "VI",
    "854": "BF",
    "858": "UY",
    "860": "UZ",
    "862": "VE",
    "876": "WF",
    "882": "WS",
    "886": "YE",
    "887": "YE",
    "891": "RS",
    "894": "ZM",
    "958": "AA",
    "959": "QM",
    "960": "QN",
    "962": "QP",
    "963": "QQ",
    "964": "QR",
    "965": "QS",
    "966": "QT",
    "967": "EU",
    "968": "QV",
    "969": "QW",
    "970": "QX",
    "971": "QY",
    "972": "QZ",
    "973": "XA",
    "974": "XB",
    "975": "XC",
    "976": "XD",
    "977": "XE",
    "978": "XF",
    "979": "XG",
    "980": "XH",
    "981": "XI",
    "982": "XJ",
    "983": "XK",
    "984": "XL",
    "985": "XM",
    "986": "XN",
    "987": "XO",
    "988": "XP",
    "989": "XQ",
    "990": "XR",
    "991": "XS",
    "992": "XT",
    "993": "XU",
    "994": "XV",
    "995": "XW",
    "996": "XX",
    "997": "XY",
    "998": "XZ",
    "999": "ZZ",
    "BU": "MM",
    "CS": "RS",
    "CT": "KI",
    "DD": "DE",
    "DY": "BJ",
    "FQ": "AQ",
    "FX": "FR",
    "HV": "BF",
    "JT": "UM",
    "MI": "UM",
    "NH": "VU",
    "NQ": "AQ",
    "PU": "UM",
    "PZ": "PA",
    "QU": "EU",
    "RH": "ZW",
    "TP": "TL",
    "UK": "GB",
    "VD": "VN",
    "WK": "UM",
    "YD": "YE",
    "YU": "RS",
    "ZR": "CD",
  };


  /**
   * Complex mappings from language subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __complexLanguageMappings = {
    // property names and values must be in canonical case

    "cnr": {language: "sr", region: "ME"},
    "drw": {language: "fa", region: "AF"},
    "hbs": {language: "sr", script: "Latn"},
    "prs": {language: "fa", region: "AF"},
    "sh": {language: "sr", script: "Latn"},
    "swc": {language: "sw", region: "CD"},
    "tnf": {language: "fa", region: "AF"},
  };


  /**
   * Complex mappings from region subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __complexRegionMappings = {
    // property names and values must be in canonical case

    "172": {
      default: "RU",
      "ab": "GE",
      "az": "AZ",
      "be": "BY",
      "crh": "UA",
      "gag": "MD",
      "got": "UA",
      "hy": "AM",
      "ji": "UA",
      "ka": "GE",
      "kaa": "UZ",
      "kk": "KZ",
      "ku-Yezi": "GE",
      "ky": "KG",
      "os": "GE",
      "rue": "UA",
      "sog": "UZ",
      "tg": "TJ",
      "tk": "TM",
      "tkr": "AZ",
      "tly": "AZ",
      "ttt": "AZ",
      "ug-Cyrl": "KZ",
      "uk": "UA",
      "und-Armn": "AM",
      "und-Chrs": "UZ",
      "und-Geor": "GE",
      "und-Goth": "UA",
      "und-Sogd": "UZ",
      "und-Sogo": "UZ",
      "und-Yezi": "GE",
      "uz": "UZ",
      "xco": "UZ",
      "xmf": "GE",
    },
    "200": {
      default: "CZ",
      "sk": "SK",
    },
    "530": {
      default: "CW",
      "vic": "SX",
    },
    "532": {
      default: "CW",
      "vic": "SX",
    },
    "536": {
      default: "SA",
      "akk": "IQ",
      "ckb": "IQ",
      "ku-Arab": "IQ",
      "mis": "IQ",
      "syr": "IQ",
      "und-Hatr": "IQ",
      "und-Syrc": "IQ",
      "und-Xsux": "IQ",
    },
    "582": {
      default: "FM",
      "mh": "MH",
      "pau": "PW",
    },
    "810": {
      default: "RU",
      "ab": "GE",
      "az": "AZ",
      "be": "BY",
      "crh": "UA",
      "et": "EE",
      "gag": "MD",
      "got": "UA",
      "hy": "AM",
      "ji": "UA",
      "ka": "GE",
      "kaa": "UZ",
      "kk": "KZ",
      "ku-Yezi": "GE",
      "ky": "KG",
      "lt": "LT",
      "ltg": "LV",
      "lv": "LV",
      "os": "GE",
      "rue": "UA",
      "sgs": "LT",
      "sog": "UZ",
      "tg": "TJ",
      "tk": "TM",
      "tkr": "AZ",
      "tly": "AZ",
      "ttt": "AZ",
      "ug-Cyrl": "KZ",
      "uk": "UA",
      "und-Armn": "AM",
      "und-Chrs": "UZ",
      "und-Geor": "GE",
      "und-Goth": "UA",
      "und-Sogd": "UZ",
      "und-Sogo": "UZ",
      "und-Yezi": "GE",
      "uz": "UZ",
      "vro": "EE",
      "xco": "UZ",
      "xmf": "GE",
    },
    "890": {
      default: "RS",
      "bs": "BA",
      "hr": "HR",
      "mk": "MK",
      "sl": "SI",
    },
    "AN": {
      default: "CW",
      "vic": "SX",
    },
    "NT": {
      default: "SA",
      "akk": "IQ",
      "ckb": "IQ",
      "ku-Arab": "IQ",
      "mis": "IQ",
      "syr": "IQ",
      "und-Hatr": "IQ",
      "und-Syrc": "IQ",
      "und-Xsux": "IQ",
    },
    "PC": {
      default: "FM",
      "mh": "MH",
      "pau": "PW",
    },
    "SU": {
      default: "RU",
      "ab": "GE",
      "az": "AZ",
      "be": "BY",
      "crh": "UA",
      "et": "EE",
      "gag": "MD",
      "got": "UA",
      "hy": "AM",
      "ji": "UA",
      "ka": "GE",
      "kaa": "UZ",
      "kk": "KZ",
      "ku-Yezi": "GE",
      "ky": "KG",
      "lt": "LT",
      "ltg": "LV",
      "lv": "LV",
      "os": "GE",
      "rue": "UA",
      "sgs": "LT",
      "sog": "UZ",
      "tg": "TJ",
      "tk": "TM",
      "tkr": "AZ",
      "tly": "AZ",
      "ttt": "AZ",
      "ug-Cyrl": "KZ",
      "uk": "UA",
      "und-Armn": "AM",
      "und-Chrs": "UZ",
      "und-Geor": "GE",
      "und-Goth": "UA",
      "und-Sogd": "UZ",
      "und-Sogo": "UZ",
      "und-Yezi": "GE",
      "uz": "UZ",
      "vro": "EE",
      "xco": "UZ",
      "xmf": "GE",
    },
  };


  /**
   * Mappings from variant subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __variantMappings = {
    // property names and values must be in canonical case

    "aaland": {type: "region", replacement: "AX"},
    "arevela": {type: "language", replacement: "hy"},
    "arevmda": {type: "language", replacement: "hyw"},
    "heploc": {type: "variant", replacement: "alalc97"},
    "polytoni": {type: "variant", replacement: "polyton"},
  };


  /**
   * Mappings from Unicode extension subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __unicodeMappings = {
    // property names and values must be in canonical case

    "ca": {
      "ethiopic-amete-alem": "ethioaa",
      "islamicc": "islamic-civil",
    },
    "kb": {
      "yes": "true",
    },
    "kc": {
      "yes": "true",
    },
    "kh": {
      "yes": "true",
    },
    "kk": {
      "yes": "true",
    },
    "kn": {
      "yes": "true",
    },
    "ks": {
      "primary": "level1",
      "tertiary": "level3",
    },
    "ms": {
      "imperial": "uksystem",
    },
    "rg": {
      "cn11": "cnbj",
      "cn12": "cntj",
      "cn13": "cnhe",
      "cn14": "cnsx",
      "cn15": "cnmn",
      "cn21": "cnln",
      "cn22": "cnjl",
      "cn23": "cnhl",
      "cn31": "cnsh",
      "cn32": "cnjs",
      "cn33": "cnzj",
      "cn34": "cnah",
      "cn35": "cnfj",
      "cn36": "cnjx",
      "cn37": "cnsd",
      "cn41": "cnha",
      "cn42": "cnhb",
      "cn43": "cnhn",
      "cn44": "cngd",
      "cn45": "cngx",
      "cn46": "cnhi",
      "cn50": "cncq",
      "cn51": "cnsc",
      "cn52": "cngz",
      "cn53": "cnyn",
      "cn54": "cnxz",
      "cn61": "cnsn",
      "cn62": "cngs",
      "cn63": "cnqh",
      "cn64": "cnnx",
      "cn65": "cnxj",
      "cz10a": "cz110",
      "cz10b": "cz111",
      "cz10c": "cz112",
      "cz10d": "cz113",
      "cz10e": "cz114",
      "cz10f": "cz115",
      "cz611": "cz663",
      "cz612": "cz632",
      "cz613": "cz633",
      "cz614": "cz634",
      "cz615": "cz635",
      "cz621": "cz641",
      "cz622": "cz642",
      "cz623": "cz643",
      "cz624": "cz644",
      "cz626": "cz646",
      "cz627": "cz647",
      "czjc": "cz31",
      "czjm": "cz64",
      "czka": "cz41",
      "czkr": "cz52",
      "czli": "cz51",
      "czmo": "cz80",
      "czol": "cz71",
      "czpa": "cz53",
      "czpl": "cz32",
      "czpr": "cz10",
      "czst": "cz20",
      "czus": "cz42",
      "czvy": "cz63",
      "czzl": "cz72",
      "fra": "frges",
      "frb": "frnaq",
      "frc": "frara",
      "frd": "frbfc",
      "fre": "frbre",
      "frf": "frcvl",
      "frg": "frges",
      "frh": "frcor",
      "fri": "frbfc",
      "frj": "fridf",
      "frk": "frocc",
      "frl": "frnaq",
      "frm": "frges",
      "frn": "frocc",
      "fro": "frhdf",
      "frp": "frnor",
      "frq": "frnor",
      "frr": "frpdl",
      "frs": "frhdf",
      "frt": "frnaq",
      "fru": "frpac",
      "frv": "frara",
      "laxn": "laxs",
      "lud": "lucl",
      "lug": "luec",
      "lul": "luca",
      "mrnkc": "mr13",
      "no23": "no50",
      "nzn": "nzauk",
      "nzs": "nzcan",
      "omba": "ombj",
      "omsh": "omsj",
      "plds": "pl02",
      "plkp": "pl04",
      "pllb": "pl08",
      "plld": "pl10",
      "pllu": "pl06",
      "plma": "pl12",
      "plmz": "pl14",
      "plop": "pl16",
      "plpd": "pl20",
      "plpk": "pl18",
      "plpm": "pl22",
      "plsk": "pl26",
      "plsl": "pl24",
      "plwn": "pl28",
      "plwp": "pl30",
      "plzp": "pl32",
      "tteto": "tttob",
      "ttrcm": "ttmrc",
      "ttwto": "tttob",
      "twkhq": "twkhh",
      "twtnq": "twtnn",
      "twtpq": "twnwt",
      "twtxq": "twtxg",
    },
    "sd": {
      "cn11": "cnbj",
      "cn12": "cntj",
      "cn13": "cnhe",
      "cn14": "cnsx",
      "cn15": "cnmn",
      "cn21": "cnln",
      "cn22": "cnjl",
      "cn23": "cnhl",
      "cn31": "cnsh",
      "cn32": "cnjs",
      "cn33": "cnzj",
      "cn34": "cnah",
      "cn35": "cnfj",
      "cn36": "cnjx",
      "cn37": "cnsd",
      "cn41": "cnha",
      "cn42": "cnhb",
      "cn43": "cnhn",
      "cn44": "cngd",
      "cn45": "cngx",
      "cn46": "cnhi",
      "cn50": "cncq",
      "cn51": "cnsc",
      "cn52": "cngz",
      "cn53": "cnyn",
      "cn54": "cnxz",
      "cn61": "cnsn",
      "cn62": "cngs",
      "cn63": "cnqh",
      "cn64": "cnnx",
      "cn65": "cnxj",
      "cz10a": "cz110",
      "cz10b": "cz111",
      "cz10c": "cz112",
      "cz10d": "cz113",
      "cz10e": "cz114",
      "cz10f": "cz115",
      "cz611": "cz663",
      "cz612": "cz632",
      "cz613": "cz633",
      "cz614": "cz634",
      "cz615": "cz635",
      "cz621": "cz641",
      "cz622": "cz642",
      "cz623": "cz643",
      "cz624": "cz644",
      "cz626": "cz646",
      "cz627": "cz647",
      "czjc": "cz31",
      "czjm": "cz64",
      "czka": "cz41",
      "czkr": "cz52",
      "czli": "cz51",
      "czmo": "cz80",
      "czol": "cz71",
      "czpa": "cz53",
      "czpl": "cz32",
      "czpr": "cz10",
      "czst": "cz20",
      "czus": "cz42",
      "czvy": "cz63",
      "czzl": "cz72",
      "fra": "frges",
      "frb": "frnaq",
      "frc": "frara",
      "frd": "frbfc",
      "fre": "frbre",
      "frf": "frcvl",
      "frg": "frges",
      "frh": "frcor",
      "fri": "frbfc",
      "frj": "fridf",
      "frk": "frocc",
      "frl": "frnaq",
      "frm": "frges",
      "frn": "frocc",
      "fro": "frhdf",
      "frp": "frnor",
      "frq": "frnor",
      "frr": "frpdl",
      "frs": "frhdf",
      "frt": "frnaq",
      "fru": "frpac",
      "frv": "frara",
      "laxn": "laxs",
      "lud": "lucl",
      "lug": "luec",
      "lul": "luca",
      "mrnkc": "mr13",
      "no23": "no50",
      "nzn": "nzauk",
      "nzs": "nzcan",
      "omba": "ombj",
      "omsh": "omsj",
      "plds": "pl02",
      "plkp": "pl04",
      "pllb": "pl08",
      "plld": "pl10",
      "pllu": "pl06",
      "plma": "pl12",
      "plmz": "pl14",
      "plop": "pl16",
      "plpd": "pl20",
      "plpk": "pl18",
      "plpm": "pl22",
      "plsk": "pl26",
      "plsl": "pl24",
      "plwn": "pl28",
      "plwp": "pl30",
      "plzp": "pl32",
      "tteto": "tttob",
      "ttrcm": "ttmrc",
      "ttwto": "tttob",
      "twkhq": "twkhh",
      "twtnq": "twtnn",
      "twtpq": "twnwt",
      "twtxq": "twtxg",
    },
    "tz": {
      "aqams": "nzakl",
      "cnckg": "cnsha",
      "cnhrb": "cnsha",
      "cnkhg": "cnurc",
      "cuba": "cuhav",
      "egypt": "egcai",
      "eire": "iedub",
      "est": "utcw05",
      "gmt0": "gmt",
      "hongkong": "hkhkg",
      "hst": "utcw10",
      "iceland": "isrey",
      "iran": "irthr",
      "israel": "jeruslm",
      "jamaica": "jmkin",
      "japan": "jptyo",
      "libya": "lytip",
      "mst": "utcw07",
      "navajo": "usden",
      "poland": "plwaw",
      "portugal": "ptlis",
      "prc": "cnsha",
      "roc": "twtpe",
      "rok": "krsel",
      "turkey": "trist",
      "uct": "utc",
      "usnavajo": "usden",
      "zulu": "utc",
    },
  };


  /**
   * Mappings from Unicode extension subtags to preferred values.
   *
   * Spec: http://unicode.org/reports/tr35/#Identifiers
   * Version: CLDR, version 36.1
   */
  var __transformMappings = {
    // property names and values must be in canonical case

    "d0": {
      "name": "charname",
    },
    "m0": {
      "names": "prprname",
    },
  };

  /**
   * Canonicalizes the given well-formed BCP 47 language tag, including regularized case of subtags.
   *
   * Spec: ECMAScript Internationalization API Specification, draft, 6.2.3.
   * Spec: RFC 5646, section 4.5.
   */
  function canonicalizeLanguageTag(locale) {

    // start with lower case for easier processing, and because most subtags will need to be lower case anyway
    locale = locale.toLowerCase();

    // handle mappings for complete tags
    if (__tagMappings.hasOwnProperty(locale)) {
      return __tagMappings[locale];
    }

    var subtags = locale.split("-");
    var i = 0;

    // handle standard part: all subtags before first variant or singleton subtag
    var language;
    var script;
    var region;
    while (i < subtags.length) {
      var subtag = subtags[i];
      if (i === 0) {
        language = subtag;
      } else if (subtag.length === 2 || subtag.length === 3) {
        region = subtag.toUpperCase();
      } else if (subtag.length === 4 && !("0" <= subtag[0] && subtag[0] <= "9")) {
        script = subtag[0].toUpperCase() + subtag.substring(1).toLowerCase();
      } else {
        break;
      }
      i++;
    }

    if (__languageMappings.hasOwnProperty(language)) {
      language = __languageMappings[language];
    } else if (__complexLanguageMappings.hasOwnProperty(language)) {
      var mapping = __complexLanguageMappings[language];

      language = mapping.language;
      if (script === undefined && mapping.hasOwnProperty("script")) {
        script = mapping.script;
      }
      if (region === undefined && mapping.hasOwnProperty("region")) {
        region = mapping.region;
      }
    }

    if (region !== undefined) {
      if (__regionMappings.hasOwnProperty(region)) {
        region = __regionMappings[region];
      } else if (__complexRegionMappings.hasOwnProperty(region)) {
        var mapping = __complexRegionMappings[region];

        var mappingKey = language;
        if (script !== undefined) {
          mappingKey += "-" + script;
        }

        if (mapping.hasOwnProperty(mappingKey)) {
          region = mapping[mappingKey];
        } else {
          region = mapping.default;
        }
      }
    }

    // handle variants
    var variants = [];
    while (i < subtags.length && subtags[i].length > 1) {
      var variant = subtags[i];

      if (__variantMappings.hasOwnProperty(variant)) {
        var mapping = __variantMappings[variant];
        switch (mapping.type) {
          case "language":
            language = mapping.replacement;
            break;

          case "region":
            region = mapping.replacement;
            break;

          case "variant":
            variants.push(mapping.replacement);
            break;

          default:
            throw new Error("illegal variant mapping type");
        }
      } else {
        variants.push(variant);
      }

      i += 1;
    }
    variants.sort();

    // handle extensions
    var extensions = [];
    while (i < subtags.length && subtags[i] !== "x") {
      var extensionStart = i;
      i++;
      while (i < subtags.length && subtags[i].length > 1) {
        i++;
      }

      var extension;
      var extensionKey = subtags[extensionStart];
      if (extensionKey === "u") {
        var j = extensionStart + 1;

        // skip over leading attributes
        while (j < i && subtags[j].length > 2) {
          j++;
        }

        extension = subtags.slice(extensionStart, j).join("-");

        while (j < i) {
          var keyStart = j;
          j++;

          while (j < i && subtags[j].length > 2) {
            j++;
          }

          var key = subtags[keyStart];
          var value = subtags.slice(keyStart + 1, j).join("-");

          if (__unicodeMappings.hasOwnProperty(key)) {
            var mapping = __unicodeMappings[key];
            if (mapping.hasOwnProperty(value)) {
              value = mapping[value];
            }
          }

          extension += "-" + key;
          if (value !== "" && value !== "true") {
            extension += "-" + value;
          }
        }
      } else if (extensionKey === "t") {
        var j = extensionStart + 1;

        while (j < i && !transformKeyRE.test(subtags[j])) {
          j++;
        }

        extension = "t";

        var transformLanguage = subtags.slice(extensionStart + 1, j).join("-");
        if (transformLanguage !== "") {
          extension += "-" + canonicalizeLanguageTag(transformLanguage).toLowerCase();
        }

        while (j < i) {
          var keyStart = j;
          j++;

          while (j < i && subtags[j].length > 2) {
            j++;
          }

          var key = subtags[keyStart];
          var value = subtags.slice(keyStart + 1, j).join("-");

          if (__transformMappings.hasOwnProperty(key)) {
            var mapping = __transformMappings[key];
            if (mapping.hasOwnProperty(value)) {
              value = mapping[value];
            }
          }

          extension += "-" + key + "-" + value;
        }
      } else {
        extension = subtags.slice(extensionStart, i).join("-");
      }

      extensions.push(extension);
    }
    extensions.sort();

    // handle private use
    var privateUse;
    if (i < subtags.length) {
      privateUse = subtags.slice(i).join("-");
    }

    // put everything back together
    var canonical = language;
    if (script !== undefined) {
      canonical += "-" + script;
    }
    if (region !== undefined) {
      canonical += "-" + region;
    }
    if (variants.length > 0) {
      canonical += "-" + variants.join("-");
    }
    if (extensions.length > 0) {
      canonical += "-" + extensions.join("-");
    }
    if (privateUse !== undefined) {
      if (canonical.length > 0) {
        canonical += "-" + privateUse;
      } else {
        canonical = privateUse;
      }
    }

    return canonical;
  }

  return typeof locale === "string" && isStructurallyValidLanguageTag(locale) &&
      canonicalizeLanguageTag(locale) === locale;
}


/**
 * Returns an array of error cases handled by CanonicalizeLocaleList().
 */
function getInvalidLocaleArguments() {
  function CustomError() {}

  var topLevelErrors = [
    // fails ToObject
    [null, TypeError],

    // fails Get
    [{ get length() { throw new CustomError(); } }, CustomError],

    // fail ToLength
    [{ length: Symbol.toPrimitive }, TypeError],
    [{ length: { get [Symbol.toPrimitive]() { throw new CustomError(); } } }, CustomError],
    [{ length: { [Symbol.toPrimitive]() { throw new CustomError(); } } }, CustomError],
    [{ length: { get valueOf() { throw new CustomError(); } } }, CustomError],
    [{ length: { valueOf() { throw new CustomError(); } } }, CustomError],
    [{ length: { get toString() { throw new CustomError(); } } }, CustomError],
    [{ length: { toString() { throw new CustomError(); } } }, CustomError],

    // fail type check
    [[undefined], TypeError],
    [[null], TypeError],
    [[true], TypeError],
    [[Symbol.toPrimitive], TypeError],
    [[1], TypeError],
    [[0.1], TypeError],
    [[NaN], TypeError],
  ];

  var invalidLanguageTags = [
    "", // empty tag
    "i", // singleton alone
    "x", // private use without subtag
    "u", // extension singleton in first place
    "419", // region code in first place
    "u-nu-latn-cu-bob", // extension sequence without language
    "hans-cmn-cn", // "hans" could theoretically be a 4-letter language code,
                   // but those can't be followed by extlang codes.
    "abcdefghi", // overlong language
    "cmn-hans-cn-u-u", // duplicate singleton
    "cmn-hans-cn-t-u-ca-u", // duplicate singleton
    "de-gregory-gregory", // duplicate variant
    "*", // language range
    "de-*", // language range
    "中文", // non-ASCII letters
    "en-ß", // non-ASCII letters
    "ıd" // non-ASCII letters
  ];

  return topLevelErrors.concat(
    invalidLanguageTags.map(tag => [tag, RangeError]),
    invalidLanguageTags.map(tag => [[tag], RangeError]),
    invalidLanguageTags.map(tag => [["en", tag], RangeError]),
  )
}

/**
 * Tests whether the named options property is correctly handled by the given constructor.
 * @param {object} Constructor the constructor to test.
 * @param {string} property the name of the options property to test.
 * @param {string} type the type that values of the property are expected to have
 * @param {Array} [values] an array of allowed values for the property. Not needed for boolean.
 * @param {any} fallback the fallback value that the property assumes if not provided.
 * @param {object} testOptions additional options:
 *   @param {boolean} isOptional whether support for this property is optional for implementations.
 *   @param {boolean} noReturn whether the resulting value of the property is not returned.
 *   @param {boolean} isILD whether the resulting value of the property is implementation and locale dependent.
 *   @param {object} extra additional option to pass along, properties are value -> {option: value}.
 */
function testOption(Constructor, property, type, values, fallback, testOptions) {
  var isOptional = testOptions !== undefined && testOptions.isOptional === true;
  var noReturn = testOptions !== undefined && testOptions.noReturn === true;
  var isILD = testOptions !== undefined && testOptions.isILD === true;

  function addExtraOptions(options, value, testOptions) {
    if (testOptions !== undefined && testOptions.extra !== undefined) {
      var extra;
      if (value !== undefined && testOptions.extra[value] !== undefined) {
        extra = testOptions.extra[value];
      } else if (testOptions.extra.any !== undefined) {
        extra = testOptions.extra.any;
      }
      if (extra !== undefined) {
        Object.getOwnPropertyNames(extra).forEach(function (prop) {
          options[prop] = extra[prop];
        });
      }
    }
  }

  var testValues, options, obj, expected, actual, error;

  // test that the specified values are accepted. Also add values that convert to specified values.
  if (type === "boolean") {
    if (values === undefined) {
      values = [true, false];
    }
    testValues = values.slice(0);
    testValues.push(888);
    testValues.push(0);
  } else if (type === "string") {
    testValues = values.slice(0);
    testValues.push({toString: function () { return values[0]; }});
  }
  testValues.forEach(function (value) {
    options = {};
    options[property] = value;
    addExtraOptions(options, value, testOptions);
    obj = new Constructor(undefined, options);
    if (noReturn) {
      if (obj.resolvedOptions().hasOwnProperty(property)) {
        throw new Test262Error("Option property " + property + " is returned, but shouldn't be.");
      }
    } else {
      actual = obj.resolvedOptions()[property];
      if (isILD) {
        if (actual !== undefined && values.indexOf(actual) === -1) {
          throw new Test262Error("Invalid value " + actual + " returned for property " + property + ".");
        }
      } else {
        if (type === "boolean") {
          expected = Boolean(value);
        } else if (type === "string") {
          expected = String(value);
        }
        if (actual !== expected && !(isOptional && actual === undefined)) {
          throw new Test262Error("Option value " + value + " for property " + property +
            " was not accepted; got " + actual + " instead.");
        }
      }
    }
  });

  // test that invalid values are rejected
  if (type === "string") {
    var invalidValues = ["invalidValue", -1, null];
    // assume that we won't have values in caseless scripts
    if (values[0].toUpperCase() !== values[0]) {
      invalidValues.push(values[0].toUpperCase());
    } else {
      invalidValues.push(values[0].toLowerCase());
    }
    invalidValues.forEach(function (value) {
      options = {};
      options[property] = value;
      addExtraOptions(options, value, testOptions);
      error = undefined;
      try {
        obj = new Constructor(undefined, options);
      } catch (e) {
        error = e;
      }
      if (error === undefined) {
        throw new Test262Error("Invalid option value " + value + " for property " + property + " was not rejected.");
      } else if (error.name !== "RangeError") {
        throw new Test262Error("Invalid option value " + value + " for property " + property + " was rejected with wrong error " + error.name + ".");
      }
    });
  }

  // test that fallback value or another valid value is used if no options value is provided
  if (!noReturn) {
    options = {};
    addExtraOptions(options, undefined, testOptions);
    obj = new Constructor(undefined, options);
    actual = obj.resolvedOptions()[property];
    if (!(isOptional && actual === undefined)) {
      if (fallback !== undefined) {
        if (actual !== fallback) {
          throw new Test262Error("Option fallback value " + fallback + " for property " + property +
            " was not used; got " + actual + " instead.");
        }
      } else {
        if (values.indexOf(actual) === -1 && !(isILD && actual === undefined)) {
          throw new Test262Error("Invalid value " + actual + " returned for property " + property + ".");
        }
      }
    }
  }
}


/**
 * Properties of the RegExp constructor that may be affected by use of regular
 * expressions, and the default values of these properties. Properties are from
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Deprecated_and_obsolete_features#RegExp_Properties
 */
var regExpProperties = ["$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9",
  "$_", "$*", "$&", "$+", "$`", "$'",
  "input", "lastMatch", "lastParen", "leftContext", "rightContext"
];

var regExpPropertiesDefaultValues = (function () {
  var values = Object.create(null);
  (/(?:)/).test("");
  regExpProperties.forEach(function (property) {
    values[property] = RegExp[property];
  });
  return values;
}());


/**
 * Tests that executing the provided function (which may use regular expressions
 * in its implementation) does not create or modify unwanted properties on the
 * RegExp constructor.
 */
function testForUnwantedRegExpChanges(testFunc) {
  (/(?:)/).test("");
  testFunc();
  regExpProperties.forEach(function (property) {
    if (RegExp[property] !== regExpPropertiesDefaultValues[property]) {
      throw new Test262Error("RegExp has unexpected property " + property + " with value " +
        RegExp[property] + ".");
    }
  });
}


/**
 * Returns an array of all known calendars.
 */
function allCalendars() {
  // source: CLDR file common/bcp47/number.xml; version CLDR 39.
  // https://github.com/unicode-org/cldr/blob/master/common/bcp47/calendar.xml
  return [
    "buddhist",
    "chinese",
    "coptic",
    "dangi",
    "ethioaa",
    "ethiopic",
    "gregory",
    "hebrew",
    "indian",
    "islamic",
    "islamic-umalqura",
    "islamic-tbla",
    "islamic-civil",
    "islamic-rgsa",
    "iso8601",
    "japanese",
    "persian",
    "roc",
  ];
}


/**
 * Returns an array of all known collations.
 */
function allCollations() {
  // source: CLDR file common/bcp47/collation.xml; version CLDR 39.
  // https://github.com/unicode-org/cldr/blob/master/common/bcp47/collation.xml
  return [
    "big5han",
    "compat",
    "dict",
    "direct",
    "ducet",
    "emoji",
    "eor",
    "gb2312",
    "phonebk",
    "phonetic",
    "pinyin",
    "reformed",
    "search",
    "searchjl",
    "standard",
    "stroke",
    "trad",
    "unihan",
    "zhuyin",
  ];
}


/**
 * Returns an array of all known numbering systems.
 */
function allNumberingSystems() {
  // source: CLDR file common/bcp47/number.xml; version CLDR 39.
  // https://github.com/unicode-org/cldr/blob/master/common/bcp47/number.xml
  return [
    "adlm",
    "ahom",
    "arab",
    "arabext",
    "armn",
    "armnlow",
    "bali",
    "beng",
    "bhks",
    "brah",
    "cakm",
    "cham",
    "cyrl",
    "deva",
    "diak",
    "ethi",
    "finance",
    "fullwide",
    "geor",
    "gong",
    "gonm",
    "grek",
    "greklow",
    "gujr",
    "guru",
    "hanidays",
    "hanidec",
    "hans",
    "hansfin",
    "hant",
    "hantfin",
    "hebr",
    "hmng",
    "hmnp",
    "java",
    "jpan",
    "jpanfin",
    "jpanyear",
    "kali",
    "khmr",
    "knda",
    "lana",
    "lanatham",
    "laoo",
    "latn",
    "lepc",
    "limb",
    "mathbold",
    "mathdbl",
    "mathmono",
    "mathsanb",
    "mathsans",
    "mlym",
    "modi",
    "mong",
    "mroo",
    "mtei",
    "mymr",
    "mymrshan",
    "mymrtlng",
    "native",
    "newa",
    "nkoo",
    "olck",
    "orya",
    "osma",
    "rohg",
    "roman",
    "romanlow",
    "saur",
    "shrd",
    "sind",
    "sinh",
    "sora",
    "sund",
    "takr",
    "talu",
    "taml",
    "tamldec",
    "telu",
    "thai",
    "tirh",
    "tibt",
    "traditio",
    "vaii",
    "wara",
    "wcho",
  ];
}


/**
 * Tests whether name is a valid BCP 47 numbering system name
 * and not excluded from use in the ECMAScript Internationalization API.
 * @param {string} name the name to be tested.
 * @return {boolean} whether name is a valid BCP 47 numbering system name and
 *   allowed for use in the ECMAScript Internationalization API.
 */

function isValidNumberingSystem(name) {

  var numberingSystems = allNumberingSystems();

  var excluded = [
    "finance",
    "native",
    "traditio"
  ];


  return numberingSystems.indexOf(name) !== -1 && excluded.indexOf(name) === -1;
}


/**
 * Provides the digits of numbering systems with simple digit mappings,
 * as specified in 11.3.2.
 */

var numberingSystemDigits = {
  adlm: "𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙",
  ahom: "𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹",
  arab: "٠١٢٣٤٥٦٧٨٩",
  arabext: "۰۱۲۳۴۵۶۷۸۹",
  bali: "\u1B50\u1B51\u1B52\u1B53\u1B54\u1B55\u1B56\u1B57\u1B58\u1B59",
  beng: "০১২৩৪৫৬৭৮৯",
  bhks: "𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙",
  brah: "𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯",
  cakm: "𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿",
  cham: "꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙",
  deva: "०१२३४५६७८९",
  diak: "𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙",
  fullwide: "０１２３４５６７８９",
  gong: "𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩",
  gonm: "𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙",
  gujr: "૦૧૨૩૪૫૬૭૮૯",
  guru: "੦੧੨੩੪੫੬੭੮੯",
  hanidec: "〇一二三四五六七八九",
  hmng: "𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙",
  hmnp: "𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉",
  java: "꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙",
  kali: "꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉",
  khmr: "០១២៣៤៥៦៧៨៩",
  knda: "೦೧೨೩೪೫೬೭೮೯",
  lana: "᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉",
  lanatham: "᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙",
  laoo: "໐໑໒໓໔໕໖໗໘໙",
  latn: "0123456789",
  lepc: "᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉",
  limb: "\u1946\u1947\u1948\u1949\u194A\u194B\u194C\u194D\u194E\u194F",
  mathbold: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗",
  mathdbl: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡",
  mathmono: "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿",
  mathsanb: "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵",
  mathsans: "𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫",
  mlym: "൦൧൨൩൪൫൬൭൮൯",
  modi: "𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙",
  mong: "᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙",
  mroo: "𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩",
  mtei: "꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹",
  mymr: "၀၁၂၃၄၅၆၇၈၉",
  mymrshan: "႐႑႒႓႔႕႖႗႘႙",
  mymrtlng: "꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹",
  newa: "𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙",
  nkoo: "߀߁߂߃߄߅߆߇߈߉",
  olck: "᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙",
  orya: "୦୧୨୩୪୫୬୭୮୯",
  osma: "𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩",
  rohg: "𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹",
  saur: "꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙",
  segment: "🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹",
  shrd: "𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙",
  sind: "𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹",
  sinh: "෦෧෨෩෪෫෬෭෮෯",
  sora: "𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹",
  sund: "᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹",
  takr: "𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉",
  talu: "᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙",
  tamldec: "௦௧௨௩௪௫௬௭௮௯",
  telu: "౦౧౨౩౪౫౬౭౮౯",
  thai: "๐๑๒๓๔๕๖๗๘๙",
  tibt: "༠༡༢༣༤༥༦༧༨༩",
  tirh: "𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙",
  vaii: "꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩",
  wara: "𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩",
  wcho: "𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹",
};


/**
 * Returns an array of all simple, sanctioned unit identifiers.
 */
function allSimpleSanctionedUnits() {
  // https://tc39.es/ecma402/#table-sanctioned-simple-unit-identifiers
  return [
    "acre",
    "bit",
    "byte",
    "celsius",
    "centimeter",
    "day",
    "degree",
    "fahrenheit",
    "fluid-ounce",
    "foot",
    "gallon",
    "gigabit",
    "gigabyte",
    "gram",
    "hectare",
    "hour",
    "inch",
    "kilobit",
    "kilobyte",
    "kilogram",
    "kilometer",
    "liter",
    "megabit",
    "megabyte",
    "meter",
    "mile",
    "mile-scandinavian",
    "milliliter",
    "millimeter",
    "millisecond",
    "minute",
    "month",
    "ounce",
    "percent",
    "petabyte",
    "pound",
    "second",
    "stone",
    "terabit",
    "terabyte",
    "week",
    "yard",
    "year",
  ];
}


/**
 * Tests that number formatting is handled correctly. The function checks that the
 * digit sequences in formatted output are as specified, converted to the
 * selected numbering system, and embedded in consistent localized patterns.
 * @param {Array} locales the locales to be tested.
 * @param {Array} numberingSystems the numbering systems to be tested.
 * @param {Object} options the options to pass to Intl.NumberFormat. Options
 *   must include {useGrouping: false}, and must cause 1.1 to be formatted
 *   pre- and post-decimal digits.
 * @param {Object} testData maps input data (in ES5 9.3.1 format) to expected output strings
 *   in unlocalized format with Western digits.
 */

function testNumberFormat(locales, numberingSystems, options, testData) {
  locales.forEach(function (locale) {
    numberingSystems.forEach(function (numbering) {
      var digits = numberingSystemDigits[numbering];
      var format = new Intl.NumberFormat([locale + "-u-nu-" + numbering], options);

      function getPatternParts(positive) {
        var n = positive ? 1.1 : -1.1;
        var formatted = format.format(n);
        var oneoneRE = "([^" + digits + "]*)[" + digits + "]+([^" + digits + "]+)[" + digits + "]+([^" + digits + "]*)";
        var match = formatted.match(new RegExp(oneoneRE));
        if (match === null) {
          throw new Test262Error("Unexpected formatted " + n + " for " +
            format.resolvedOptions().locale + " and options " +
            JSON.stringify(options) + ": " + formatted);
        }
        return match;
      }

      function toNumbering(raw) {
        return raw.replace(/[0-9]/g, function (digit) {
          return digits[digit.charCodeAt(0) - "0".charCodeAt(0)];
        });
      }

      function buildExpected(raw, patternParts) {
        var period = raw.indexOf(".");
        if (period === -1) {
          return patternParts[1] + toNumbering(raw) + patternParts[3];
        } else {
          return patternParts[1] +
            toNumbering(raw.substring(0, period)) +
            patternParts[2] +
            toNumbering(raw.substring(period + 1)) +
            patternParts[3];
        }
      }

      if (format.resolvedOptions().numberingSystem === numbering) {
        // figure out prefixes, infixes, suffixes for positive and negative values
        var posPatternParts = getPatternParts(true);
        var negPatternParts = getPatternParts(false);

        Object.getOwnPropertyNames(testData).forEach(function (input) {
          var rawExpected = testData[input];
          var patternParts;
          if (rawExpected[0] === "-") {
            patternParts = negPatternParts;
            rawExpected = rawExpected.substring(1);
          } else {
            patternParts = posPatternParts;
          }
          var expected = buildExpected(rawExpected, patternParts);
          var actual = format.format(input);
          if (actual !== expected) {
            throw new Test262Error("Formatted value for " + input + ", " +
            format.resolvedOptions().locale + " and options " +
            JSON.stringify(options) + " is " + actual + "; expected " + expected + ".");
          }
        });
      }
    });
  });
}


/**
 * Return the components of date-time formats.
 * @return {Array} an array with all date-time components.
 */

function getDateTimeComponents() {
  return ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
}


/**
 * Return the valid values for the given date-time component, as specified
 * by the table in section 12.1.1.
 * @param {string} component a date-time component.
 * @return {Array} an array with the valid values for the component.
 */

function getDateTimeComponentValues(component) {

  var components = {
    weekday: ["narrow", "short", "long"],
    era: ["narrow", "short", "long"],
    year: ["2-digit", "numeric"],
    month: ["2-digit", "numeric", "narrow", "short", "long"],
    day: ["2-digit", "numeric"],
    hour: ["2-digit", "numeric"],
    minute: ["2-digit", "numeric"],
    second: ["2-digit", "numeric"],
    timeZoneName: ["short", "long"]
  };

  var result = components[component];
  if (result === undefined) {
    throw new Test262Error("Internal error: No values defined for date-time component " + component + ".");
  }
  return result;
}


/**
 * @description Tests whether timeZone is a String value representing a
 * structurally valid and canonicalized time zone name, as defined in
 * sections 6.4.1 and 6.4.2 of the ECMAScript Internationalization API
 * Specification.
 * @param {String} timeZone the string to be tested.
 * @result {Boolean} whether the test succeeded.
 */

function isCanonicalizedStructurallyValidTimeZoneName(timeZone) {
  /**
   * Regular expression defining IANA Time Zone names.
   *
   * Spec: IANA Time Zone Database, Theory file
   */
  var fileNameComponent = "(?:[A-Za-z_]|\\.(?!\\.?(?:/|$)))[A-Za-z.\\-_]{0,13}";
  var fileName = fileNameComponent + "(?:/" + fileNameComponent + ")*";
  var etcName = "(?:Etc/)?GMT[+-]\\d{1,2}";
  var systemVName = "SystemV/[A-Z]{3}\\d{1,2}(?:[A-Z]{3})?";
  var legacyName = etcName + "|" + systemVName + "|CST6CDT|EST5EDT|MST7MDT|PST8PDT|NZ";
  var zoneNamePattern = new RegExp("^(?:" + fileName + "|" + legacyName + ")$");

  if (typeof timeZone !== "string") {
    return false;
  }
  // 6.4.2 CanonicalizeTimeZoneName (timeZone), step 3
  if (timeZone === "UTC") {
    return true;
  }
  // 6.4.2 CanonicalizeTimeZoneName (timeZone), step 3
  if (timeZone === "Etc/UTC" || timeZone === "Etc/GMT") {
    return false;
  }
  return zoneNamePattern.test(timeZone);
}

//testAtomics.js
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of functions used to assert the correctness of SharedArrayBuffer objects.
defines:
  - testWithAtomicsOutOfBoundsIndices
  - testWithAtomicsInBoundsIndices
  - testWithAtomicsNonViewValues
---*/


/**
 * Calls the provided function for a each bad index that should throw a
 * RangeError when passed to an Atomics method on a SAB-backed view where
 * index 125 is out of range.
 *
 * @param f - the function to call for each bad index.
 */
function testWithAtomicsOutOfBoundsIndices(f) {
  var bad_indices = [
    function(view) { return -1; },
    function(view) { return view.length; },
    function(view) { return view.length * 2; },
    function(view) { return Number.POSITIVE_INFINITY; },
    function(view) { return Number.NEGATIVE_INFINITY; },
    function(view) { return { valueOf: function() { return 125; } }; },
    function(view) { return { toString: function() { return '125'; }, valueOf: false }; }, // non-callable valueOf triggers invocation of toString
  ];

  for (var i = 0; i < bad_indices.length; ++i) {
    var IdxGen = bad_indices[i];
    try {
      f(IdxGen);
    } catch (e) {
      e.message += ' (Testing with index gen ' + IdxGen + '.)';
      throw e;
    }
  }
}

/**
 * Calls the provided function for each good index that should not throw when
 * passed to an Atomics method on a SAB-backed view.
 *
 * The view must have length greater than zero.
 *
 * @param f - the function to call for each good index.
 */
function testWithAtomicsInBoundsIndices(f) {
  // Most of these are eventually coerced to +0 by ToIndex.
  var good_indices = [
    function(view) { return 0/-1; },
    function(view) { return '-0'; },
    function(view) { return undefined; },
    function(view) { return NaN; },
    function(view) { return 0.5; },
    function(view) { return '0.5'; },
    function(view) { return -0.9; },
    function(view) { return { password: 'qumquat' }; },
    function(view) { return view.length - 1; },
    function(view) { return { valueOf: function() { return 0; } }; },
    function(view) { return { toString: function() { return '0'; }, valueOf: false }; }, // non-callable valueOf triggers invocation of toString
  ];

  for (var i = 0; i < good_indices.length; ++i) {
    var IdxGen = good_indices[i];
    try {
      f(IdxGen);
    } catch (e) {
      e.message += ' (Testing with index gen ' + IdxGen + '.)';
      throw e;
    }
  }
}

/**
 * Calls the provided function for each value that should throw a TypeError
 * when passed to an Atomics method as a view.
 *
 * @param f - the function to call for each non-view value.
 */

function testWithAtomicsNonViewValues(f) {
  var values = [
    null,
    undefined,
    true,
    false,
    new Boolean(true),
    10,
    3.14,
    new Number(4),
    'Hi there',
    new Date,
    /a*utomaton/g,
    { password: 'qumquat' },
    new DataView(new ArrayBuffer(10)),
    new ArrayBuffer(128),
    new SharedArrayBuffer(128),
    new Error('Ouch'),
    [1,1,2,3,5,8],
    function(x) { return -x; },
    Symbol('halleluja'),
    // TODO: Proxy?
    Object,
    Int32Array,
    Date,
    Math,
    Atomics
  ];

  for (var i = 0; i < values.length; ++i) {
    var nonView = values[i];
    try {
      f(nonView);
    } catch (e) {
      e.message += ' (Testing with non-view value ' + nonView + '.)';
      throw e;
    }
  }
}