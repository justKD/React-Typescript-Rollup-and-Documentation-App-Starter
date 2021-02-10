/**
 * @file /src/module/index.js
 * @author Cadence Holmes
 * @copyright Cadence Holmes 2020
 * @fileoverview
 * This prepares the bundled module to be available for amd require,
 * esm import, or as a non-module script.
 */

/**
 * Replace this import with the import from your module.
 */
import { MyModule } from './MyModule';

/**
 * Replace `MyModule` and `'MyModule'` with your module's info.
 */
const Module = MyModule;
const moduleName = 'MyModule';

/**
 * This is the namespace under which `window` will store the export
 * should the environment not support AMD or ES modules.
 */
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

  /**
   * AMD / Require module
   * @example
   *  require(["dist/template.bundle.js"], function(template) {
   *    console.log( template );
   *  });
   */
  if (amdRequire) {
    root['define'](['exports'], declareExports);
    return;
  }

  /**
   * CommonJS / ES / Node module
   * @example
   *  import { template } from "./dist/template.bundle.js";
   *  console.log( template );
   */
  if (esm) {
    exports !== null && declareExports(exports);
    module !== null && (module.exports = exports);
    return;
  }

  /**
   * Non-module / CDN
   * @example
   *  <script src="dist/template.bundle.js"></script>
   *  <script>
   *    const template = window.kd.template;
   *    console.log( template );
   *  </script>
   */
  if (nonmodule) {
    declareExports((root[namespace] = root[namespace] || {}));
    return;
  }

  console.warn(
    'Unable to load as ES module. Use AMD, CJS, add an export, or use as non-module script.'
  );
})(handleNonModule);
