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
          <div class="col-md-9 shadow border my-3 coverImg">
<h1>Hello There, General Kenobi
</h1>
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
  height: 45dvh;
  width:100%;
  background-image: v-bind(profileCoverImg)
  opacity
}
</style>
