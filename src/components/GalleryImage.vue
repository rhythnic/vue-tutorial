<template>
  <img :src="src" :alt="alt" :style="style" />
</template>

<script>
export default {
  name: 'gallery-image',

  props: ['src', 'alt', 'likes', 'mostLikes'],

  computed: {
    style () {
      const blur = Math.floor(this.mostLikes / this.likes) - 1
      return `filter: blur(${blur}px)`
    }
  }
}
</script>
