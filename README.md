# Step-By-Step Vue Tutorial

## Step 1

Step 1 has the initial file structure from scaffolding the app with
the [vue-cli](https://cli.vuejs.org/) using the
[webpack template](https://github.com/vuejs-templates/webpack).

### File structure
- **build** - Build script and webpack configurations.
- **config** - Configure environment variables and development/build settings.
- **dist** - Built files.
- **src** - Src
- **src/asstes** - Images, etc. that are imported into code.
- **static** - Static files that are copied into dist at build time.
- **test** - Jest unit tests and Nightwatch e2e tests.


### Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
