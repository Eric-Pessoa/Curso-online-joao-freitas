<script setup lang="ts">
import { ref } from 'vue'

const items = [{ title: 'Aula 1'}, { title: 'Aula 2'}, { title: 'Aula 3'}, { title: 'Aula 3'}, { title: 'Aula 4'}, { title: 'Aula 5'}, { title: 'Aula 6'}, { title: 'Aula 7'}, { title: 'Aula 8'}, { title: 'Aula 9'}, { title: 'Aula 10'}, { title: 'Aula 10'} ,{ title: 'Aula 10'}, { title: 'Aula 10'}]
const step = ref(1)

</script>

<template>
  <div>
    <v-stepper :flat="true" color="#9FC490" non-linear :items="items" v-model="step">
      <template #[`item.${step}`]>
        <p>{{ items[step - 1].title }}</p>
      </template>
    </v-stepper>
  </div>
</template>

<style scoped></style>
