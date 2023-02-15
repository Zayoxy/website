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

<style scoped></style>
