# Step-By-Step Vue Tutorial

A Vue.js tutorial layed out in git branches, beginning with step-1.
Each step's README.md file describes the changes or additions for that step.

## Walking through the tutorial

- Clone this repo: `git clone git@github.com:rhythnic/vue-tutorial.git`
- Checkout a branch, e.g. `git checkout step-1`
- README.md will describe the changes made in that step of the tutorial.
- Look at the new code.
- Run the app at that step.

## Running the app

You need a [Pixabay API](https://pixabay.com/en/service/about/api/) key.
Before running commands below, export the environment variable for API key.
Run `npm install` from the master branch, to ensure you download all dependencies.

```
export PIXABAY_API_KEY=your_api_key_here
npm install
npm run dev
```

## Build Setup

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

For a detailed explanation on how things work for apps created with the webpack template for vue-cli,
check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).