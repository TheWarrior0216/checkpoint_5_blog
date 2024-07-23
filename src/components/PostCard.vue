<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Post } from "../models/Post.js";
import { RouterLink } from "vue-router";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
const account = computed(()=> AppState.account)

defineProps({postProp: {type: Post}}, )

async function like(ProfileId){
  try {
    await postsService.like(ProfileId)
  }
  catch (error){
    Pop.error(error);
  }
}

async function decimate(decimationItem){
  try {
    const confirmation = await Pop.confirm(`Hello ${account.value.name} would you like to decimate this post?`)
    if(confirmation){
    await postsService.decimate( decimationItem)
    }
    return
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
  <div class="row shadow-lg m-2 border align-items-center">

    <div class="col-md-2 py-4">
        <RouterLink :to="{name: 'Profile', params: {profileId: postProp.creatorId}}">
        <img :title="`Go to ${postProp.creator.name}'s Profile`" :src="postProp.creator.picture" :alt="postProp.creator.name" class="pfp selectable">
      </RouterLink>
      </div>
    <div class="col-md-10 ">

      <p class="fs-5"> {{ postProp.creator.name }}</p>
      <p class="fs-7">{{ postProp.updatedAt.toLocaleDateString() }}</p>
    </div>
    <div class="col-12">
      <p>{{ postProp.body }}</p>
      <img v-if="postProp.imgUrl" :src="postProp.imgUrl" alt="some Image" class="img-fluid img-fix">
      <div v-if="account" :class="account?.id == postProp.creatorId ? 'justify-content-between' : 'justify-content-end'" class=" d-flex  text-end">
        <button @click="decimate(postProp.id)" v-if="account.id == postProp.creatorId" class="btn mdi mdi-delete-outline fs-4 text-danger">Delete</button>
        <div>
          <i v-if="postProp.likes.isliked" @click="like(`${postProp.id}`)" class="mdi mdi-heart-outline selectable fs-4"> {{ postProp.likes.length }}</i>
          <i v-else @click="like(`${postProp.id}`)" class="mdi mdi-heart-outline selectable fs-4"> {{ postProp.likes.length }}</i>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.pfp{
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
.img-fix{
  width: 100%;
  object-fit: cover;
  object-position: center;
  max-height: 80dvh;
}

</style>