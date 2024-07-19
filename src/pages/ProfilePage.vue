<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { postsService } from "../services/PostsService.js";
import { AppState } from "../AppState.js";

onMounted(()=>{
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
          <div class="col-12 bg-info sticky-top py-3">
<h4>LOGO HERE</h4>
          </div>
          <div class="col-md-9 ">
<div class="row shadow border m-4">
  <div class="col-12  coverImg text-end">
<img class="pfp mt-2" :src="profile?.picture" :alt="profile?.name">
  </div>
  <div class="col-12">
<h5 class="m-3 ps-3 fw-light">{{ profile?.class }}</h5>
<h2 class="m-3 ps-3">{{ profile?.name }}</h2>
<p class="m-3 ps-3">{{ profile?.bio }}</p>


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
</style>
