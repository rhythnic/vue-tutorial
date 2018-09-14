<template>
  <div class="grid">
    <GalleryImage
      v-for="image in imagesSortedByLikes"
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
import { mapActions } from 'vuex'

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
      return this.images.slice(0).sort((a, b) => b.likes - a.likes)
    },
    mostLikes () {
      if (!this.images.length) return 0
      return this.imagesSortedByLikes[0].likes
    }
  },

  methods: {
    ...mapActions(['handleError']),
    fetchImages () {
      pixabayApi.getImages()
        .then(x => { this.images = x.hits })
        .catch(console.error)
    }
  },

  created () {
    this.fetchImages()
    setTimeout(
      () => this.handleError({ error: new Error('Testing 1, 2, 3') }),
      500
    )
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
