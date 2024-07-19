<script setup>

onMounted(()=>{
  getProfileByID
})
const route = useRoute()
 async function getProfileByID(){
const profileId = route.params.profileId
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


<style lang="scss" scoped>

</style>