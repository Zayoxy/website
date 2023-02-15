<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import SocialMedias from "@/components/SocialMedias.vue";
</script>

<template>
  <div class="HeaderBar">
    <NavBar />
    <SocialMedias />
  </div>
</template>

<style scoped>
.HeaderBar {
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 5%;
}
</style>
