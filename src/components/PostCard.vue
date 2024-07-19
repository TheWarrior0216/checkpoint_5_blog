<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Post } from "../models/Post.js";
import { RouterLink } from "vue-router";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";


defineProps({postProp: {type: Post}})

async function like(ProfileId){
  try {
    await postsService.like(ProfileId)
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
      <div class="text-end">
        <i @click="like(`${postProp.id}`)" class="mdi mdi-heart-outline selectable fs-4"> {{ postProp.likes.length }}</i>
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