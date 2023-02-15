<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderBar from "@/components/HeaderBar.vue";
</script>

<template>
  <header>
    <HeaderBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: repeat(3, 33.3%);
  grid-template-columns: repeat(3, 33.3%);
}
</style>
