<script setup>
import { onMounted } from "vue";
import { postsService } from "../services/PostsService.js";

onMounted(()=> getPosts())

async function getPosts(){
  await postsService.getPosts()
}

</script>

<template>
  <h1>Hello World!</h1>
</template>

<style scoped lang="scss">


</style>

