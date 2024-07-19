<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';


defineProps({postProp: {type: Post}})

</script>


<template>
<div class="row shadow m-2 border">
  <div class="col-2">
    {{ postProp.name }}
  </div>
</div>
</template>


<style lang="scss" scoped>


</style>