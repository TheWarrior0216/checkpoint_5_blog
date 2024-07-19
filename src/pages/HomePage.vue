<script setup>
import { computed, onMounted } from "vue";
import { postsService } from "../services/PostsService.js";
import { AppState } from "../AppState.js";
import Login from "../components/Login.vue";

onMounted(()=> getPosts())

const posts = computed(()=> AppState.posts)

async function getPosts(){
  await postsService.getPosts()
}

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 text-center pt-5 border">
<Login/>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-12 bg-info sticky-top">
<h4>LOGO HERE</h4>
          </div>
          <div v-for="post in posts" :key="post.id" class="col-9">
<PostCard :postProp ='post'/>
          </div>
          <div class="col-4">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


</style>

