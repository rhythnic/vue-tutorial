<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  name: 'gallery-image',

  props: ['src', 'alt']
}
</script>
