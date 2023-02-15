<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul class="header-list">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  grid-column: 1;
}

a {
  color: white;
  padding: 10px;
}

a:hover {
  color: rgb(175, 175, 175);
}
</style>
