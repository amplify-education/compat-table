// The features in data-es2016plus.js do not have categories distinguishing syntax from library features

/**
 * @typedef { | 'optimization'
 * | 'syntax'
 * | 'bindings'
 * | 'functions'
 * | 'built-ins'
 * | 'built-in extensions'
 * | 'subclassing'
 * | 'misc'
 * | 'annex b'
 * | 'regular expressions'
 * | 'generators'
 * | 'deprecated'
 * | 'async/await'} Category
 */

module.exports = {
    "exponentiation (**) operator": "syntax",
    "Array.prototype.includes": "built-in extensions",
    'generator functions can\'t be used with "new"': "generators",
    "generator throw() caught by inner generator": "generators",
    "strict fn w/ non-strict non-simple params is error": "misc",
    "nested rest destructuring, declarations": "syntax",
    "nested rest destructuring, parameters": "syntax",
    'Proxy, "enumerate" handler removed': "built-in extensions",
    "Proxy internal calls, Array.prototype.includes": "built-in extensions",
    "Object static methods": "built-in extensions",
    "String padding": "built-in extensions",
    "trailing commas in function syntax": "syntax",
    "async functions": "async/await",
    "shared memory and atomics": "built-ins",
    'RegExp "u" flag, case folding': "regular expressions",
    "arguments.caller removed": "functions",
    "Object.prototype getter/setter methods": "deprecated",
    "Proxy internal calls, getter/setter methods": "deprecated",
    "assignments allowed in for-in head in non-strict mode": "deprecated",
    "object rest/spread properties": "syntax",
    "Promise.prototype.finally": "built-in extensions",
    "s (dotAll) flag for regular expressions": "regular expressions",
    "RegExp named capture groups": "regular expressions",
    "RegExp Lookbehind Assertions": "regular expressions",
    "RegExp Unicode Property Escapes": "regular expressions",
    "Asynchronous Iterators": "async/await",
    'Proxy "ownKeys" handler, duplicate keys for non-extensible targets':
      "built-in extensions",
    "template literal revision": "syntax",
    "Symbol.prototype.description": "built-in extensions",
    "Object.fromEntries": "built-in extensions",
    "string trimming": "built-in extensions",
    "Array.prototype.{flat, flatMap}": "built-in extensions",
    "optional catch binding": "syntax",
    "Function.prototype.toString revision": "built-in extensions",
    "JSON superset": "misc",
    "Well-formed JSON.stringify": "misc",
    "String.prototype.matchAll": "built-in extensions",
    BigInt: "built-ins",
    "Promise.allSettled": "built-in extensions",
    globalThis: "built-ins",
    "optional chaining operator (?.)": "syntax",
    "nullish coalescing operator (??)": "syntax",
    "String.prototype.replaceAll": "built-in extensions",
    "Promise.any": "built-in extensions",
    WeakReferences: "built-ins",
    "Logical Assignment": "syntax",
    "numeric separators": "syntax",
    "instance class fields": "syntax",
    "static class fields": "syntax",
    "private class methods": "syntax",
    "Ergonomic brand checks for private fields": "syntax",
    ".at() method on the built-in indexables": "built-in extensions",
    "Object.hasOwn": "built-in extensions",
    "Class static initialization blocks": "syntax",
    "Error.cause property": "built-in extensions",
};