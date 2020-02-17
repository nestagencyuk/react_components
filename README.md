# Nest React Components

## Usage:
Usage is outlined in our [Documentation](https://twigs.nestagency.io/getting-started)

## Contribution:

### Develop
Bundles all components using Storybook, starts the dev server and watches for changes.
```sh
$ npm run dev
```

### Scaffold
You can quickly scaffold a new component by running:
```sh
$ NAME=MyNewComponent npm run scaffold
``` 
OR
```sh
$ NAME=MyNewComponent npm run scaffold:stateful
``` 

This will create a new stateless (functional) or stateful (using hooks) component folder with all the required files and some example variants. This is the best way of ensuring a new component complies with our coding standards and naming conventions.

### Build
Bundles everything using webpack and outputs to /dist/ ready to be republished to npm.
```sh
$ npm run build
``` 

Run individual tasks:

| Command | Description |
|:-|:-|
| `$ npm run build:components` | Build just the components |
| `$ npm run build:docs` | Build just storybook documentation |

### Testing
Run all tests:
```sh
$ npm run test
```

Run individual tests:

| Command | Description |
|:-|:-|
| `$ npm run test:cypress` | Run automated browser tests |
| `$ npm run test:unit` | Run component unit tests |
| `$ npm run test:coverage` | Run coverage tests and send coverage report |
