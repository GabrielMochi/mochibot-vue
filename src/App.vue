<template>
  <v-app>
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
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import ThemeModeButton from './components/ThemeModeButton'

export default {
  name: 'App',
  components: { ThemeModeButton }
}
</script>

<style>
.no-border-radius-all {
  border-radius: 0 !important;
}
</style>

<style scoped>
#toolbar {
  border-radius: 16px;
}
</style>
