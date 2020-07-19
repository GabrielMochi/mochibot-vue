<template>
  <v-container fluid class="fill-height d-block">
    <div id="chat-messages"></div>
    <v-form v-model="isFormValid" @submit.prevent>
      <v-row align="center">
        <v-col>
          <v-text-field
            id="user-text-input"
            solo
            placeholder="Seus desejos são uma ordem..."
            hide-details
            flat
            rounded
            required
            :rules="[ notEmptyRule ]"
            class="elevation-8"
          ></v-text-field>
        </v-col>
        <v-btn :disabled="!isFormValid" fab color="primary" class="elevation-8" @click="submit">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'ChatMessages',
  data: () => ({
    isFormValid: false,
    notEmptyRule: v => !!v
  }),
  methods: {
    submit() {}
  }
};
</script>

<style scoped>
#chat-messages {
  height: calc(100% - 72px);
}
</style>