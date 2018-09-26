import Vue from 'vue'

function toLocaleDateString (value, locale, opts) {
  return new Date(value).toLocaleDateString(locale, opts)
}

Vue.filter('toLocaleDateString', toLocaleDateString)
