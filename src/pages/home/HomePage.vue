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
  { title: 'aula 12', subtitle: '12 subtítulo' }
])

function clickLesson(videoTitle: string) {
  console.log(videoTitle)
}
</script>

<template>
  <div class="main-container">
    <div class="video-player">
      <video class="video-player-window" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Seu navegador não suporta a funcionalidade de vídeo.
      </video>
    </div>
    <div class="video-toolbar">
      <div class="title">Violão básico</div>
      <div class="lessons-list">
        <v-list lines="two">
          <v-list-item
            v-for="n in mockedListLessons"
            :key="n.title"
            :title="n.title"
            :subtitle="n.subtitle"
            @click="clickLesson(n.title)"
          ></v-list-item>
        </v-list>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 15px;
  background-color: #ededed;
  column-gap: 10px;
  .video-player {
    display: flex;
    flex: 3 2 600px;
    border-radius: 15px;
    .video-player-window {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }
  .video-toolbar {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
    align-items: center; */
    flex: 1 0 250px;
    min-width: 350px;
    max-height: 720px;
    background-color: #f9f1f1;
    border-radius: 15px;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat';
      font-size: 20px;
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 40px;
      background-color: #035e7b;
      color: #f9f1f1;
    }
    .lessons-list {
      width: 100%;
      flex: 1;
      overflow-y: scroll;
      .v-list {
        padding: 0;
        .v-list-item {
          background-color: #f9f1f1;
          font-family: 'Montserrat';
        }
      }
    }
    .footer {
      border-radius: 0 0 15px 15px;
      width: 100%;
      height: 40px;
      background-color: #035e7b;
    }
  }
}
</style>
