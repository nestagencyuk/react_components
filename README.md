# React Components

![Release](https://github.com/nestagencyuk/react_components/workflows/Release/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ad5d505b-eb09-4889-bc8c-d29cbb3f8b02/deploy-status)](https://app.netlify.com/sites/twigs-react-components/deploys)
[![codecov](https://codecov.io/gh/nestagencyuk/react_components/branch/master/graph/badge.svg?token=JHZN4BD36F)](https://codecov.io/gh/nestagencyuk/react_components)

This repository contains Nest's internal React component library.

[View Docs](https://twigs.nestagency.io/).

---

## Contributing

If you wish to contribute to this repo **directly**, then continue reading the [contribution](#contribution) instructions below. If you want to create a new client specific repo, then skip to the [templating](#templating) instructions.

### Setup

Install all dependencies.

```sh
$ npm install
```

### Develop

Bundles all components using Storybook, starts the dev server and watches for changes.

```sh
$ npm run dev
```

#### Adding Icons

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

1. First ensure that you're on the `develop` branch and all pull requests and branches have been pulled and merged in (incl. master as the version may have been bumped).
2. Using [Git Flow](https://github.com/nvie/gitflow/wiki/Mac-OS-X)\*, run `git flow release start vX.X.X`, replacing the `X.X.X` with the appropriate new version number, incremented by one. Follow semvar practices, e.g vX.0.0 denotes a major version, v0.X.0 is a minor version and v0.0.X is a patch. See the package.json for the most recent version number.
3. Carry out any last minute work on the release branch and commit as normal.
4. When finished, run `git flow release finish vX.X.X` and add any relevant commit messages. You **must** add a tag message otherwise the release will fail.
5. The release branch should now be merged into both `develop` and `master`. Now you just need to run `npm run deploy` and you're done! The CI pipeline will handle the rest.

> **NOTE:** Using Git Flow ensures the tagging is handled correctly. Creating a release branch manually won't work.

---

## Templating

This repository acts as a template for getting new client component libraries up and running quickly, although there are a few DevOps steps you will need to take first.

### Creating the new repo

1. Go to our [organisation page](https://github.com/nestagencyuk) and choose **"New"** to create a repository under Nest Agency Ltd.
2. Under **"Repository template"**, choose `react_components` and ensure you check **"Include all branches"**:
3. When naming the repository, follow our naming convention which is `[technology]_[client-name]-[project-type]`. So for a new client called **"Demo Company"**, their new component library repo would be `react_demo-company-components`. Ensure the repo is set to **Private**.
4. That's it! You should now clone the repo. Open in your fave IDE and just leave it open for now. Move on...

### Setting up git for future updates

To make sure the new client specific repo can easily pull in the latest changes from the master `react_components` repo without any conflicting Git histories or release tags and **before** you carry out any work, you **must** follow these steps to add the master repo as a remote.

> **NOTE:** DO NOT OPEN OR USE SOURCETREE - Sourcetree for some reason pulls and automatically adds all tags from other remotes which will cause the versioning system to not work properly.

1. Add the react_components repo as a remote, run `git remote add boilerplate git@github.com:nestagencyuk/react_components.git`.
2. Then run `git pull boilerplate master --allow-unrelated-histories --no-tags`.
3. Resolve any conflicts (there shouldn't be any if it's a fresh repo).

And you're done!! You now have a new component library set up with:

- TypeScript
- Webpack
- Storybook
- Styles
- Performant code

You can now follow the normal contribution instructions and code to your heart's content! 🎉
