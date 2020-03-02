<template>
  <v-app>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndDown"
      app
      color="primary"
    >
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
