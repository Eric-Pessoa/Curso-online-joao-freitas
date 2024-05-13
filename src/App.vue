<script setup lang="ts">
import AppHeader from './components/Header/AppHeader.vue'
</script>

<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main><RouterView /></v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  height: 600px;
}
</style>
