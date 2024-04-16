<script setup lang="ts"></script>

<template>
  <v-app-bar color="#090809" :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Espaço da música</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon>
        <v-icon>logout</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<style></style>
