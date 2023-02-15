<script setup lang="ts"></script>

<template>
  <div id="presentation">
    <img id="logo" src="@/assets/images/zayoxy.jpg" alt="Zayoxy.jpg" />
    <h1>Alexandre Guillaume</h1>
    <h2>Studying computer science</h2>
  </div>
</template>

<style scoped>
#presentation {
  width: 100%;
  grid-column: 2;
  text-align: center;
}

#logo {
  border-radius: 100%;
  border: solid 5px black;
  max-width: 70%;
  min-width: 50%;
}
</style>
