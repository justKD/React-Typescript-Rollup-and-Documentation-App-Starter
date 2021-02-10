/**
 * @file /src/dev/rollup/bundle.js
 * @author Cadence Holmes
 * @copyright Cadence Holmes 2020
 * @fileoverview
 * Handle building with Rollup in the browser.
 */

import * as Rollup from 'rollup';
import cleanup from 'rollup-plugin-cleanup';

const rollup = (url, filename, callback) => {
  Rollup.rollup({
    input: url,
    plugins: [cleanup({ comments: 'none' })],
  })
    .then((rolled) => rolled.generate({ format: 'esm' }))
    .then((bundle) =>
      callback(bundle.output[0].code, filename ? filename : 'bundle.rollup.js')
    );
};

const dl = (data, filename) => {
  const file = new Blob([data], { type: 'text/javascript' });
  const a = document.createElement('a');
  const url = URL.createObjectURL(file);
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 0);
};

export const bundle = {
  download: (url, filename) => url && rollup(url, filename, dl),
  log: (url) =>
    url &&
    rollup(url, '', (rollup) => {
      console.log('Bundle is copied to clipboard!');

      const code = document.createElement('input');
      code.type = 'text';
      code.value = rollup;
      document.body.appendChild(code);

      code.select();
      document.execCommand('copy');
      document.body.removeChild(code);
    }),
  dev: true,
};
