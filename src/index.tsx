import * as React from 'react';
import { render } from 'react-dom';
import { App } from './client/App';

import './dev/rollup/';
import * as MyModule from './dist/MyModule.bundle';
console.log(MyModule);

const rootElement = document.getElementById('app');
render(<App />, rootElement);
