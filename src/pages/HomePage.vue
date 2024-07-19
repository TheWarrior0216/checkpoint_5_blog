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
      <div class="col-md-3 text-center pt-5 border">
<Login/>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-12 bg-dark shadow-lg bg-gradient sticky-top py-3">
<h4><img class="pfp-2" src="https://th.bing.com/th/id/R.8aa6d273d3f1190cbb4d9445c5d6e03a?rik=YlsXx7irZdltmA&riu=http%3a%2f%2fassets.stickpng.com%2fthumbs%2f5b90ed91196573108b203a76.png&ehk=jImicU7lM8xNcpZOAaW0MO8PPo%2fDy97uuuKsiRCq6jc%3d&risl=&pid=ImgRaw&r=0" alt="I hope that works">
  Welcome to The Eye
  </h4>
          </div>
          <div v-for="post in posts" :key="post.id" class="col-md-9">
<PostCard :postProp ='post'/>
          </div>
          <div class="col-sm-1 col-md-4">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pfp-2{
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}



</style>

