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
import GalleryImage from './GalleryImage'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    GalleryImage
  },

  name: 'gallery',

  computed: {
    ...mapState('image', ['page']),
    images () {
      return this.$store.getters['image/pageImages'](this.page.items)
    },
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
    ...mapActions('image', ['fetchImages'])
  },

  created () {
    this.fetchImages().catch(this.$catch('Error occurred while loading image data.'))
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
