<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";

const editableAccountInfo = ref( {
name: '',
picture: '',
bio:'',
class:'',
graduated: false,
coverImg:'',
linkedin:'',
github:'',
resume:''
})

onMounted(()=> editableAccountInfo.value = {...AppState.account})

async function editAccount(){
  try {
    await accountService.editAccount(editableAccountInfo.value)
  }
  catch (error){
    Pop.error(error);
  }
}
</script>


<template>
  <form @submit.prevent="editAccount()">

<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.name"  type="text" class="form-control" id="userName" placeholder="">
  <label for="userName">Username</label>
</div>

<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.picture" type="text" class="form-control" id="ProfileImg" placeholder="">
  <label for="ProfileImg">Profile Image</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.coverImg" type="text" class="form-control" id="coverImg" placeholder="">
  <label for="coverImg">Cover Image</label>
</div>

<div class="form-floating mb-3">
  <textarea v-model="editableAccountInfo.bio" class="form-control" placeholder="Leave a comment here" id="bio" style="height: 100px"></textarea>
  <label for="bio">Bio</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.class" type="text" class="form-control" id="Class" placeholder="">
  <label for="Class">Class</label>
</div>
<div class="mb-3 form-check">
    <input v-model="editableAccountInfo.graduated" type="checkbox" class="form-check-input" id="Graduated">
    <label class="form-check-label" for="Graduated">Are You Graduated</label>
  </div>
<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.linkedin" type="text" class="form-control" id="linkedin" placeholder="">
  <label for="linkedin">Linkedin</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.github" type="text" class="form-control" id="github" placeholder="">
  <label for="github">Github</label>
</div>
<div class="form-floating mb-3">
  <input v-model="editableAccountInfo.resume" type="text" class="form-control" id="Resume" placeholder="">
  <label for="Resume">Resume</label>
</div>
<button type="submit" class="btn btn-success my-3">Submit Changes</button>
  </form>
</template>


<style lang="scss" scoped>


</style>