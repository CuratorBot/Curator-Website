<script lang="ts" setup>
import TheNavbar from "@/components/TheNavBar.vue";
</script>

<template>
  <TheNavbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="css">
#app {
  text-align: center;
  color: #cecece;
  margin-top: 60px;
}

body {
  background-color: #212121;
}
</style>
