<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { AppState } from "../AppState.js";

watchEffect(()=>{
  getProfileByID()
  getPostsByID()
})

const profile = computed(()=> AppState.profile)
const posts = computed(()=> AppState.personalPosts)
const profileCoverImg = computed(() => `url(${profile.value?.coverImg})`)
const route = useRoute()
 async function getProfileByID(){
  try {
    const profileId = route.params.profileId
    await postsService.getProfileByID(profileId)
  }
  catch (error){
    Pop.error(error);
  }
 }


async function getPostsByID() {
  try {

    const profileId = route.params.profileId
    await postsService.getPostsByID(profileId)
  }
  catch (error){
    Pop.error(error);
  }
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
          <div class="col-md-9 ">
<div class="row shadow border m-4">
  <div class="col-12  coverImg text-end">
<img class="pfp mt-2" :src="profile?.picture" :alt="profile?.name"> <span v-if="profile?.graduated" class="mdi mdi-school-outline fs-1"></span>
  </div>
  <div class="col-12">
<h5 class="m-3 ps-3 fw-light">{{ profile?.class }}</h5>

<h2 class="m-3 ps-3"> <span class="">
  
  <div class="d-flex flex-direction column justify-content-between" >
    {{ profile?.name }}
    <div class="d-flex flex-direction column" >

      <a v-if="profile?.linkedin" :href="profile?.linkedin"> 
        
        <p class=" fs-3 mdi mdi-linkedin"></p>
      </a>
      <a v-if="profile?.github" :href="profile?.github">
        <p class=" fs-3"><i class="mdi mdi-github" ></i></p>
      </a>
      <a v-if="profile?.resume" :href="profile?.resume">
        <p class=" fs-3"><i class="mdi mdi-note-outline"></i></p>
      </a>
    </div>
            </div>
</span> </h2>
<p class="m-3 ps-3">{{ profile?.bio }} </p>



  </div>
</div>
          </div>
          <div v-for="post in posts" :key="post.id" class="col-md-9">
<PostCard :postProp ='post' />
          </div>
          <div class="col-sm-1 col-md-4">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.coverImg{
  height: 25dvh;
  width:100%;
  background-image: v-bind(profileCoverImg);
  background-size: cover;
  background-position: center;
  
}
.pfp{
  height: 20dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
.pfp-2{
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>
