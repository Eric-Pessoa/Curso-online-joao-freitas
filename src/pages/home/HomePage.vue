<script setup lang="ts">
import { computed, ref } from 'vue'

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
  { title: 'aula 13', subtitle: '13 subtítulo' }
])

const pageSize = 6
const pagedAssets = computed(() => {
  // get the start index for your paged result set.
  // The page number starts at 1 so the active item in the pagination is displayed properly.
  // However for our calculation the page number must start at (n-1)
  const startIndex = (paginatorModel.value - 1) * pageSize
  // create a copy of your assets list so we don't modify the original data set
  const data = [...mockedListLessons.value]
  // only return the data for the current page using splice
  return data.splice(startIndex, pageSize)
})
const paginatorModel = ref(1)
const TotalPaginatorPages = computed(() => {
  return Math.ceil(mockedListLessons.value.length / 6)
})
</script>

<template>
  <div id="main-container">
    <div id="video-player">div 1</div>
    <div id="video-toolbar">
      <div id="title">Violão básico</div>
      <div id="lessons-list">
        <v-list lines="two">
          <v-list-item
            v-for="n in pagedAssets"
            :key="n.title"
            :title="n.title"
            :subtitle="n.subtitle"
          ></v-list-item>
        </v-list>
      </div>
      <v-pagination
        id="paginator"
        v-model="paginatorModel"
        :length="TotalPaginatorPages"
        ellipsis="•••"
      ></v-pagination>
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
    border-radius: 15px;
  }
  #video-toolbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 250px;
    min-width: 350px;
    background-color: #f9f1f1;
    border-radius: 15px;
    #title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat';
      font-size: 20px;
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 50px;
      background-color: #035e7b;
      color: #f9f1f1;
    }
    #lessons-list {
      width: 100%;
      .v-list {
        padding: 0;
        .v-list-item {
          background-color: #f9f1f1;
          font-family: 'Montserrat';
        }
      }
    }
    #paginator {
      display: flex;
      width: 100%;
      height: 50px;
      background-color: #035e7b;
      border-radius: 0 0 15px 15px;
      justify-content: center;
      align-items: center;
      color: #f9f1f1;
    }
  }
}
</style>
