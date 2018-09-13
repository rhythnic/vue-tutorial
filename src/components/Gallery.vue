<template>
  <div class="grid">
    <GalleryImage
      v-for="image in images"
      :key="image.id"
      class="image"
      :src="image.previewURL"
      :alt="image.tags"
      :likes="image.likes"
      :mostLikes="mostLikes"
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

  computed: {
    imagesSortedByLikes () {
      return this.images.slice(0).sort((a, b) => b.likes < a.likes)
    },
    mostLikes () {
      if (!this.images.length) return 0
      return this.imagesSortedByLikes[this.images.length - 1].likes
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
