<template>
  <v-card
    v-if="$vuetify.breakpoint.lgAndUp"
    id="info-card"
    color="primary"
    class="
      pa-3
      no-border-radius-top-right
      no-border-bottom-top-right
      elevation-8
      mr-5
      mt-5
      mb-5
    "
  >
    <theme-mode-button id="dark-mode-button"></theme-mode-button>
  </v-card>
</template>

<script>
import ThemeModeButton from './ThemeModeButton'

export default {
  name: 'InfoCard',
  components: { ThemeModeButton }  
}
</script>

<style scoped>
#info-card {
  width: 448px;
  border-radius: 16px;
}

#dark-mode-button {
  position: absolute;
  right: 10px;
}
</style>
