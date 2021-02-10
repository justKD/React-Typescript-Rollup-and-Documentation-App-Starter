/**
 * @file /src/dist/template.bundle.js
 * @author Cadence Holmes
 * @copyright Cadence Holmes 2020
 * @fileoverview
 * This is an example of the bundle contents created by rollup.
 * `/src/module/template.bundle.js` was bundled using the UI buttons in
 * this template and the contents copied here.
 */

const MyModule = { greeting: 'hello' };

const Module = MyModule;
const moduleName = 'MyModule';
const namespace = 'kd';
const handleNonModule = function (exports) {
  exports[moduleName] = Module;
};
(function (declareExports) {
  const root = window;
  const rootDefine = root['define'];
  const amdRequire = root && typeof rootDefine === 'function' && rootDefine.amd;
  const esm = typeof module === 'object' && typeof exports === 'object';
  const nonmodule = root;
  if (amdRequire) {
    root['define'](['exports'], declareExports);
    return;
  }
  if (esm) {
    exports !== null && declareExports(exports);
    module !== null && (module.exports = exports);
    return;
  }
  if (nonmodule) {
    declareExports((root[namespace] = root[namespace] || {}));
    return;
  }
  console.warn(
    'Unable to load as ES module. Use AMD, CJS, add an export, or use as non-module script.'
  );
})(handleNonModule);
