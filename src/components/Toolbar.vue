<template>
  <v-app-bar
    v-if="$vuetify.breakpoint.mdAndDown"
    id="toolbar"
    app
    color="primary"
    class="my-5 mx-3"
  >
    <v-spacer />
    <theme-mode-button></theme-mode-button>
  </v-app-bar>
</template>

<script>
import ThemeModeButton from './ThemeModeButton'

export default {
  name: 'Toolbar',
  components: { ThemeModeButton }
}
</script>

<style scoped>
#toolbar {
  border-radius: 16px;
}
</style>
