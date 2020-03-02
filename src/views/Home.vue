<template>
  <v-container fluid class="fill-height pa-0">
    <v-layout>
      <v-col>
      </v-col>
      <div
        v-if="$vuetify.breakpoint.lgAndUp"
        id="info-card"
        class="primary"
      >  
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#info-card {
  width: 448px;
}
</style>
