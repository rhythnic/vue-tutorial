<template>
  <div
    class="toast"
    :class="{ open: toast.open, error: toast.isError }"
  >
    <p v-if="toast.open">
      {{toast.text}}<br/>
      <small>{{toast.secondaryText}}</small>
    </p>
    <button v-if="toast.open && toast.actionText" @click.stop="resolveToast('action')">
      {{toast.actionText}}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'feedback',

  computed: {
    ...mapState(['toast', 'error'])
  },

  methods: {
    ...mapMutations(['resolveToast', 'setShowError'])
  },

  watch: {
    toast: {
      handler (toast) {
        if (toast.result === 'action' && toast.correlationId === 'error') {
          this.setShowError(true)
        }
      },
      deep: true
    },
    'error.show' (show) {
      if (show) alert(this.error.message)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    bottom: 0;
    height: 60px;
    left: 50%;
    transform: translate(-50%, 100%);
    background: black;
    color: white;
    transition: all 300ms ease-out;
  }

  .toast p {
    text-align: left;
    padding: 8px 16px;
  }

  .toast.error {
    background: rgb(177, 27, 27);
  }

  .toast.open {
    transform: translate(-50%, 0);
  }
</style>
