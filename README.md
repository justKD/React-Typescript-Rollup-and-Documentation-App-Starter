# React-Typescript-Rollup-and-Documentation-App-Starter

##### v 2.0.0 | © Cadence Holmes 2020 | MIT License

This is a starter template for React Typescript projects. It includes a template for creating an app for documentation purposes and dev tools for bundling modules via Rollup.

[Fork on CodeSandbox](https://codesandbox.io/s/elated-water-vvn6c?file=/README.md)

---

## Dev Instructions

#### Remove this section once you've updated the template for your own project.

### Bundling Template Instructions

##### `./src/Module/` should be replaced with your modules folder/files.

##### `./src/dev/build/MyModule.js` is the entry point for building your module.

- This is where you should put JS (not TS) versions of your module files prepared for bundling. Don't remove `build/index.js`!

##### Update `./src/dev/build/index.js`

- Update the import (ie. change the path and name to match your module files).
- Name definitions with your modules information.
- Update the namespace that `window` will use to store your module in the case the environment is not actually modular (eg. served over CDN).

##### `./src/dev` contains files that handle bundling your module.

- If you don't see the UI buttons, refresh your page.
- `Copy Bundle` will copy the bundled file contents to your clipboard.
- `Download Bundle` will download the bundle as `bundle.js`.

##### `./src/dist/MyModule.bundle.js` is the bundled result from `MyModule.js`.

- This file is an example of what the bundled output will look like.

##### Removing the bundling features and UI controls

- Delete the `./src/dev/` folder.
- Remove `rollup` and `rollup-plugin-cleanup` from the dependencies in `package.json`.
- Remove the rollup import from `./src/index.tsx`.

##### Client template instructions

- See the example components and build your own.
- Then update `./src/client/AppInfo.tsx/`.
  - Replace the example component imports with your own imports.
  - Update the `headerText`, `headerDescription`, and `exampleLists` exports.
  - Change `drawerWidth` as needed.

---

## This section is the actual readme template for the project.

## Install

`src/dist/MyModule.bundle.js` can be added to your project in multiple ways:

```
// CommonJS / ES / Node module
// add to your module file

import { MyModule } from "MyModule.bundle.js";
console.log( MyModule );
```

```
// AMD / Require module
// add to your module file

require(["MyModule.bundle.js"], function(MyModule) {
  console.log( MyModule );
});
```

```
// Non-module / CDN
// add to your html file

<script src="MyModule.bundle.js"></script>
<script>
  const MyModule = window.kd.MyModule;
  console.log( MyModule );
</script>
```

## Basic Example

This is a basic example for the readme.

```
// code
```

## Extended Examples

These are more specific or advanced use cases.

```
// more code
```

And another...

```
// another code
```

## API

| Method | Type | Description |
| ------ | ---- | ----------- |
|        |      |             |
|        |      |             |
