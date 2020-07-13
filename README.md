# React Components

![Release](https://github.com/nestagencyuk/react_components/workflows/Release/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ad5d505b-eb09-4889-bc8c-d29cbb3f8b02/deploy-status)](https://app.netlify.com/sites/twigs-react-components/deploys)
[![codecov](https://codecov.io/gh/nestagencyuk/react_components/branch/master/graph/badge.svg?token=JHZN4BD36F)](https://codecov.io/gh/nestagencyuk/react_components)

## Usage:

Usage is outlined in our [Documentation](https://twigs.nestagency.io/).

## Contribution:

### Develop

Bundles all components using Storybook, starts the dev server and watches for changes.

```sh
$ npm run dev
```

**A NOTE ON ICONS** 

When adding new icons to this repo, they must fit the following spec:

1. Icons should be SVGs.
2. Icons should have lowercase, hyphenated names `your-icon.svg`, as spaces in filenames may cause issues across browsers or operating systems.
3. Icons should not have an inline `fill` property, this can cause colours passed via CSS to appear incorrectly or not at all.

Included in this repo is a handy CLI batch processing tool to help you with the above:

1. First, ensure you have put all your svg files in `src/assets/icons/`.
2. To process all icon files to adhere to the above spec, run `npm run icon:files`.
3. To generate a temporary file that has icon stories (to paste into Storybook) and generate TypeScript types, run `npm run icon:stories`. Copy your types into `src/components/Icon/types` and your stories in `src/components/Icon/Icon.stories.mdx`. Remember to delete the generated temp file too.

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

| Command                      | Description                        |
| :--------------------------- | :--------------------------------- |
| `$ npm run build:components` | Build just the components          |
| `$ npm run build:docs`       | Build just storybook documentation |

### Testing

Run all tests:

```sh
$ npm run test
```

Run individual tests:

| Command                   | Description                                 |
| :------------------------ | :------------------------------------------ |
| `$ npm run test:cypress`  | Run automated browser tests                 |
| `$ npm run test:unit`     | Run component unit tests                    |
| `$ npm run test:coverage` | Run coverage tests and send coverage report |

### Release

To create a new release:

- First ensure that you're on the `develop` branch and all pull requests and branches have been pulled and merged in (incl. master as the version may have been bumped).
- Using [Git Flow](https://github.com/nvie/gitflow/wiki/Mac-OS-X)\*, run `git flow release start vX.X.X`, replacing the `X.X.X` with the appropriate new version number, incremented by one. Follow semvar practices, e.g vX.0.0 denotes a major version, v0.X.0 is a minor version and v0.0.X is a patch. See the package.json for the most recent version number.
- Carry out any last minute work on the release branch and commit as normal.
- When finished, run `git flow release finish vX.X.X` and add any relevant commit messages. You **must** add a tag message otherwise the release will fail.
- The release branch should now be merged into both `develop` and `master`. Now you just need to run `npm run deploy` and you're done! The CI pipeline will handle the rest.

> \*Using Git Flow ensures the tagging is handled correctly. Creating a release branch manually won't work.
