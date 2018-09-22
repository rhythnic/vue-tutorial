# Step - 7

## Changes

- Use [Vuex](https://vuex.vuejs.org/)
- Create, configure, and export store in `/src/store/index.js`
- Add main store module at `/src/store/main.js`
- Add store to app in `/src/main.js`

## About Vuex

Vuex is the package for central state management in Vue.
Vuex is to Vue what Redux is to React, except Vuex is very different.
It's similar to Mobx.  It shares a lot with the Vue component model.

| Component     | Vuex          |
| ------------- |:-------------:|
| data          | state         |
| computed      | getters       |
| methods       | actions       |
| assignment    | mutations     |

There are no watchers in Vuex, but you can subscribe to the store.
You can listen to mutations and actions.  You can also watch the
store's state or getters in components.

## The Main Store Module

The main store module contains things that are common to all apps.