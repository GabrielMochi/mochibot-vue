<template>
  <v-container fluid class="fill-height pa-0">
    <v-layout>

      <v-col>
        <v-container fluid class="px-lg-12 fill-height d-block">
          <div id="chat-messages"></div>
          <v-row align="center">
            <v-col>
              <v-text-field
                solo
                placeholder="Envie alguma mensagem para o MochiBot"
                hide-details
              ></v-text-field>
            </v-col>
            <v-btn fab color="primary">
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-col>

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
        <dark-mode-button id="dark-mode-button"></dark-mode-button>
      </v-card>

    </v-layout>
  </v-container>
</template>

<script>
import DarkModeButton from '../components/ThemeModeButton'

export default {
  name: 'Home',
  components: { DarkModeButton }
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

#chat-messages {
  height: calc(100% - 72px);
}
</style>
