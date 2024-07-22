<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { postsService } from "../services/PostsService.js";

const account = computed(()=> AppState.account)
const carData = ref({
  body: '',
  imgUrl: ''
})
async function createPost(){
  try {
    await postsService.createPost(carData.value)
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
  <div class="">
    <div class="row justify-content-between formBorder">
    <div class="col-2 mt-2">
<img :src="account?.picture" alt="account photo" class="pfp-2 " />
    </div>
    <div class="col-md-9">
      <div class="m-3">
<form @submit.prevent="createPost()" class="text-end w-101" >
  <textarea v-model="carData.body" class="form-control " id="postBox" rows="4"  placeholder="Enter a Post Here!!!"></textarea>
  <button type="submit" class="btn mdi mdi-send-outline"> Post</button>
</form>
</div>
    </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.pfp-2{
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
.formBorder{
  border: 2px dashed whitesmoke;
}
.w-101{
  width: 20em;
}
</style>