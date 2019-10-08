# Nest React Components

This repository contains Nest's React components for use across all internal projects.

### Requirements: 
- [Node.js](https://nodejs.org/) v4+
- [React.js](https://reactjs.org/) v16+

### Usage:
Install:
```sh
$ npm i nest-components
```

Import the desired components into your .jsx or .tsx files. Including the CSS is optional - the styles fit our own branding so may not be suitable for client work. For the CSS import to work, your library consumer will need a way of handling CSS imports (webpack css-loader for example):

```js
import { Button } from 'nest-components'
import 'nest-components/dist/main.css' // Optional

ReactDOM.render(<Button />, document.getElementById('app'))
```

### Contributing
To keep this repo lean and clean, it doesn't contain an example library consumer for you to see the components in context - you will need to set one up yourself. We advise using the [Nest React Boilerplate](https://github.com/nestagencyuk/react_boilerplate) as a starting point as it is already set up with React, TypeScript and Webpack. You can then clone this repository localy, and use 'file:../my-path-to/react_components' in your package.json. Run `npm i` to reference the local version of this package whilst you develop new components or make changes to existing components.

##### Develop
Bundles all components using webpack, starts the dev server and watches for changes. If you have your consumer project set up to watch for changes it should trigger a recompile there as well.
```sh
$ npm run dev
```

##### Scaffold
You can quickly scaffold a new component by running:
```sh
$ NAME=MyNewComponent npm run scaffold
``` 
OR
```sh
$ NAME=MyNewComponent npm run scaffold:stateful
``` 

This will create a new stateless (functional) or stateful component folder with all the required files and some example variants. This is the best way of ensuring a new component complies with our coding standards and naming conventions.

##### Build
Bundles everything using webpack and outputs to /dist/ ready to be re-published to npm.
```sh
$ npm run build
``` 

##### Testing
Run all tests:
```sh
$ npm run test
```

Run individual tests:

| Command | Description |
|:-|:-|
| `$ npm run test:unit` | Run component unit tests |
