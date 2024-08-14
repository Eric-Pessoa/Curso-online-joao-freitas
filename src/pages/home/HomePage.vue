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
    <div class="video-and-lessons">
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
    <div class="lesson-info">
      <h1>Acordes</h1>
      <div>
        <ins width="300px" height="200px" class="scales_chords_api" chord="D#m(maj9)"></ins>
        <ins width="300px" height="200px" class="scales_chords_api" chord="D#m(maj9)"></ins>
        <ins width="300px" height="200px" class="scales_chords_api" chord="D#m(maj9)"></ins>
        <ins width="300px" height="200px" class="scales_chords_api" chord="D#m(maj9)"></ins>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 15px;
  .video-and-lessons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70%;
    width: 100%;
    min-height: 520px;
    max-height: 968px;
    column-gap: 10px;
    .video-player {
      display: flex;
      width: 100%;
      border-radius: 15px;
      max-height: 968px;
      .video-player-window {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }
    .video-toolbar {
      display: flex;
      flex-direction: column;
      min-width: 500px;
      max-width: 500px;
      min-height: 520px;
      max-height: 968px;
      background-color: #f9f1f1;
      border-radius: 15px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat';
        font-size: 24px;
        font-weight: 600;
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
  .lesson-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 30%;
  }
}
</style>
