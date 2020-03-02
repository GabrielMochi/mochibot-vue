<template>
  <v-btn
    dark
    icon
    @click="$vuetify.theme.dark = !$vuetify.theme.dark"
  >
    <v-icon v-if="$vuetify.theme.dark">mdi-brightness-5</v-icon>
    <v-icon v-else>mdi-brightness-7</v-icon>
  </v-btn>
</template>
