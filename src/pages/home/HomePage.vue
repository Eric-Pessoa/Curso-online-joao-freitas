<script setup lang="ts"></script>

<template>
  <div id="main-container">
    <div id="video-player">div 1</div>
    <div id="video-toolbar">
      <div id="title">Teste</div>
      <div>Teste</div>
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
    justify-content: flex-start;
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
  }
}
</style>
