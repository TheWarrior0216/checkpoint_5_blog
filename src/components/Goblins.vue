<script setup>
import { computed, onMounted } from "vue";
import { goblinsService } from "../services/GoblinService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

onMounted(()=>{
  getGoblins()
})

const goblins = computed(()=> AppState.goblina)

async function getGoblins(){
  try {
    await goblinsService.getGoblins()
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
<a class="pb-3" href= {{goblins[0]?.linkURL}}> <img :src="goblins[0]?.banner" alt=""></a>
<a class="pb-3"  href= {{goblins[1]?.linkURL}}> <img :src="goblins[1]?.banner" alt=""></a>

</template>


<style lang="scss" scoped>

</style>

