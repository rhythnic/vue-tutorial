<template>
  <div class="grid">
    <GalleryImage
      v-for="image in images"
      :key="image.id"
      class="image"
      :src="image.previewURL"
      :alt="image.tags"
    />
  </div>
</template>

<script>
import pixabayApi from '../services/pixabay'
import GalleryImage from './GalleryImage'

export default {
  components: {
    GalleryImage
  },

  name: 'gallery',

  data () {
    return {
      images: []
    }
  },

  methods: {
    fetchImages () {
      pixabayApi.getImages()
        .then(x => { this.images = x.hits })
        .catch(console.error)
    }
  },

  created () {
    this.fetchImages()
  }
}
</script>

<style scoped>
  .grid {
    display: flex;
    flex-flow: row wrap;
  }
  .image {
    margin: 16px;
  }
</style>
