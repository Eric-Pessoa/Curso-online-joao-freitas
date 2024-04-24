<script setup lang="ts"></script>

<template>
  <v-app-bar color="#090809" :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon color="#ededed"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title style="color: #ededed">Espaço da música</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon>
        <v-icon color="#ededed">logout</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style></style>
