# Step - 9

## Changes

- Add `/src/lib/vuex-helpers.js`
- Add image module to store `/src/store/image.js`
- Add module to store configuration in `/src/store/index.js`
- Replace image state/methods in Components with calls to Vuex store.

## Vuex Helpers

The Vuex helpers are used to make the Vuex code shorter by offering
common patterns for accessing or mutating the store.  You can read
more about it [on my blog post](https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b).


## Vuex Getters

Getters can return a function as their value.  You can then use the getters dynamically,
by passing IDs and filters to get data from state.
[Method-style access](https://vuex.vuejs.org/guide/getters.html#method-style-access)