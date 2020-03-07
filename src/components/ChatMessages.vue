<template>
  <v-container fluid class="fill-height d-block">
    <div id="chat-messages"></div>
    <v-row align="center">
      <v-col>
        <v-text-field
          id="user-text-input"
          solo
          placeholder="Envie alguma mensagem para o MochiBot"
          hide-details
          flat
          class="elevation-8"
        ></v-text-field>
      </v-col>
      <v-btn fab color="primary" class="elevation-8">
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChatMessages'
}
</script>

<style scoped>
#chat-messages {
  height: calc(100% - 72px);
}
</style>