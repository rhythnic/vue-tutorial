<template>
  <figure>
    <img :src="src" :alt="alt" :style="style" :title="alt" />
    <figcaption>{{ createdAt | toLocaleDateString }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'gallery-image',

  props: ['src', 'alt', 'likes', 'mostLikes', 'createdAt'],

  computed: {
    style () {
      const blur = Math.floor(this.mostLikes / this.likes) - 1
      return `filter: blur(${blur}px)`
    }
  }
}
</script>
