<template>
  <div
    class="toast"
    :class="{ open: toastOpen, error: toast && toast.error }"
  >
    <p v-if="toast" :class="{ error: toast.error }">
      {{toast.text}}<br/>
      <small>{{toast.secondaryText}}</small>
    </p>
    <button v-if="toast && toast.onAction" @click.stop="callAction">
      {{toast.actionText}}
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'feedback',

  data () {
    return {
      toastOpen: false,
      actionCalled: false,
      openTimerId: null
    }
  },

  computed: {
    ...mapState(['toast', 'error', 'showError'])
  },

  methods: {
    callAction () {
      this.actionCalled = true
      this.toastOpen = false
    }
  },

  watch: {
    toast (data) {
      if (!data) return
      this.toastOpen = true
      this.actionCalled = false
      window.clearTimeout(this.openTimerId)
      this.openTimerId = setTimeout(() => { this.toastOpen = false }, data.timeout || 4000)
    },
    toastOpen (open) {
      if (open || !this.toast) return
      if (this.actionCalled && this.toast.onAction) this.toast.onAction()
      if (!this.actionCalled && this.toast.onTimeout) this.toast.onTimeout()
    },
    showError (show) {
      if (show) alert(this.error)
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
