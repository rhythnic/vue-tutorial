<template>
  <div></div>
</template>

<script>
import pixabayApi from '../services/pixabay'

export default {
  name: 'gallery',

  data () {
    return {
      images: []
    }
  },

  methods: {
    fetchImages () {
      pixabayApi.getImages()
        .then(x => x.hits)
        .then(x => { this.images = x })
        .catch(console.error)
    }
  },

  created () {
    this.fetchImages()
  },

  watch: {
    images (val, oldVal) {
      console.log('images array length', val.length)
      console.log('previous images array length', oldVal.length)
    }
  }
}
</script>
