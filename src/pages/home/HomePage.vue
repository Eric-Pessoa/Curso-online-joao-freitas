<script setup lang="ts">
import { ref } from 'vue'

const mockedListLessons = ref([
  { title: 'aula 1', subtitle: '1 subtítulo' },
  { title: 'aula 2', subtitle: '2 subtítulo' },
  { title: 'aula 3', subtitle: '3 subtítulo' },
  { title: 'aula 4', subtitle: '4 subtítulo' },
  { title: 'aula 5', subtitle: '5 subtítulo' },
  { title: 'aula 6', subtitle: '6 subtítulo' },
  { title: 'aula 7', subtitle: '7 subtítulo' },
  { title: 'aula 8', subtitle: '8 subtítulo' },
  { title: 'aula 9', subtitle: '9 subtítulo' },
  { title: 'aula 10', subtitle: '10 subtítulo' },
  { title: 'aula 11', subtitle: '11 subtítulo' },
  { title: 'aula 12', subtitle: '12 subtítulo' },
])

const paginatorModel = ref(1);
</script>

<template>
  <div id="main-container">
    <div id="video-player">div 1</div>
    <div id="video-toolbar">
      <div id="title">Teste</div>
      <div id="lessons-list">
        <v-list lines="two">
          <v-list-item
            v-for="n in mockedListLessons"
            :key="n.title"
            :title="n.title"
            :subtitle="n.subtitle"
          ></v-list-item>
        </v-list>
      </div>
      <div id="paginator">
        <v-pagination v-model="paginatorModel" :length="2" show-first-last-page></v-pagination>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 15px;
  background-color: #ededed;
  column-gap: 10px;
  #video-player {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3 2 600px;
    background-color: maroon;
    border-radius: 15px;
  }
  #video-toolbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 300px;
    background-color: green;
    border-radius: 15px;
    #title {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 50px;
      background-color: mediumslateblue;
    }
    #lessons-list {
      width: 100%;
    }
    #paginator {
      display: flex;
      width: 100%;
      height: 50px;
      background-color: mediumslateblue;
      border-radius: 0 0 15px 15px;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
