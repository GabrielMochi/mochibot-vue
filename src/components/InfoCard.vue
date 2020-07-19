<template>
  <v-card
    v-if="$vuetify.breakpoint.lgAndUp"
    id="info-card"
    color="primary"
    class="pa-2 no-border-radius-top-right no-border-bottom-top-right elevation-8 mr-5 mt-5 mb-5"
  >
    <theme-mode-button id="dark-mode-button"></theme-mode-button>
    <v-row class="fill-height">
      <v-col cols="12">
        <v-container class="d-flex justify-center mt-10">
          <mochi-bot-canvas />
        </v-container>
      </v-col>
      <v-col cols="12" align-self="end">
        <v-container>
          <v-row justify="center">
            <v-col cols="2" class="text-center">
              <v-btn fab small @click="downloadResume">
                <v-icon>mdi-file-account</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2" class="text-center">
              <v-btn fab small href="mailto:gmochi56@icloud.com">
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2" class="text-center">
              <v-btn fab small target="_blank" href="https://www.linkedin.com/in/gabriel-mochi">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2" class="text-center">
              <v-btn fab small target="_blank" href="https://github.com/GabrielMochi">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="2" class="text-center">
              <v-btn fab small target="_blank" href="https://twitter.com/mochi_gabriel">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import MochiBotCanvas from './MochiBotCanvas';
import ThemeModeButton from './ThemeModeButton';

export default {
  name: 'InfoCard',
  components: { MochiBotCanvas, ThemeModeButton },
  methods: {
    downloadResume() {
      alert('downloading');
    }
  }
};
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
