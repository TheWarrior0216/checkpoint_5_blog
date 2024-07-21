<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";

const account = computed(()=> AppState.account)

async function createPost(){
  try {
    logger.log('hello mate')
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
  <div class="row justify-content-between formBorder">
    <div class="col-2 mt-2">
<img :src="account?.picture" alt="account photo" class="pfp-2 " />
    </div>
    <div class="col-9">
      <div class="m-3">
<form @submit.prevent="createPost()" >
  <textarea class="form-control w-100" id="postBox" rows="4"  placeholder="Enter a Post Here!!!"></textarea>
  <button type="submit" class="btn mdi mdi-send-outline"> Post</button>
</form>
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

</style>