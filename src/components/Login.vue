<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService';

const identity = computed(() => AppState.identity)
const account = computed(() => AppState.account)
async function login() {
  AuthService.loginWithPopup()
  
}
async function logout() {
  AuthService.logout()
}

</script>

<template>
  <span class="navbar-text">
    <button class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" @click="login" v-if="!identity">
      <h3 title="Click Here To Make A Post, Like Comments, and So Much More">
        Login Here!
      </h3>
    </button>
    <div v-else>
      <div class="dropdown py-2 py-lg-0">
        <div type="button" class=" border-0 selectable no-select" data-bs-toggle="dropdown"
          aria-expanded="false">
          <div v-if="account?.picture || identity?.picture">
            <img :src="account?.picture || identity?.picture" alt="account photo" class="pfp" />
            <h2 class="my-2">{{ account?.name }}</h2>
            <a v-if="account?.linkedin" :href="account?.linkedin">
              <h2 class="my-5">Linkedin Profile</h2>
            </a>
            <a v-if="account?.github" :href="account?.github">
              <h2 class="my-5">Github Profile</h2>
            </a>
            <a v-if="account?.resume" :href="account?.resume">
              <h2 class="my-5">Resume</h2>
            </a>

          </div>
        </div>
        <div class="dropdown-menu dropdown-menu-sm-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
          <div class="list-group">
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item dropdown-item list-group-item-action">
                Manage Account
              </div>
            </router-link>
            <div class="list-group-item dropdown-item list-group-item-action text-danger selectable" @click="logout">
              <i class="mdi mdi-logout"></i>
              logout
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.pfp{
  height: 20dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>
