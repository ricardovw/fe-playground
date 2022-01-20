<script setup lang="ts">
</script>

<template>
  <!-- git logo -->
  <div class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center">
    <button @click="$router.push({ name: 'logo-git-steps' })"
      class="mb-10">Start</button>
    <div class="git">
      <div class="main-branch"></div>
      <div class="dev-branch"></div>
    </div>
  </div>
</template>

<style scoped>
.git {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #F05033;
  border-radius: 15px;
  transform: rotate(45deg);
}
.main-branch {
  width: 110px;
  height: 12px;
  background: white;
  position: absolute;
  top: 40px;
}
.main-branch:before,
.main-branch:after,
.dev-branch:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
}
.main-branch:before {
  left: 30px;
  top: -8px;
}
.main-branch:after {
  left: 90px;
  top: -8px;
}
.dev-branch {
  width: 90px;
  height: 12px;
  background: white;
  position: absolute;
  top: 70px;
  left: 30px;
  transform: rotate(45deg);
}
.dev-branch:before {
  left: 70px;
  top: -8px;
}
</style>
