<template>
  <v-container fluid class="fill-height pa-0">
    <toolbar />
    <v-layout>
      <v-col class="px-lg-12">
        <chat-messages />
      </v-col>
      <info-card />
    </v-layout>
  </v-container>
</template>

<script>
import Toolbar from '../components/Toolbar'
import InfoCard from '../components/InfoCard'
import ChatMessages from '../components/ChatMessages'

export default {
  name: 'Home',
  components: { Toolbar, InfoCard, ChatMessages }
}
</script>
