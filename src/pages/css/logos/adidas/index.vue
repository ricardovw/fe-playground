<script setup lang="ts">
</script>

<template>
  <!-- adidas logo -->
  <div class="w-full h-screen
    flex flex-col justify-center items-center">
    <button @click="$router.push({ name: 'logo-adidas-steps' })"
      class="mb-5">Start</button>
    <div class="adidas" id="logo">
      <div class="line one"></div>
      <div class="line two"></div>
      <div class="line three"></div>
    </div>
  </div>
</template>

<style scoped>
#logo {
  --primary: #111;
}
.adidas {
  position: relative;
  width: 206px;
  height: 120px;
  overflow: hidden;
}
.line {
  width: 46px;
  height: 150px;
  background-color: var(--primary);
  position: absolute;
  transform: rotate(-31deg)
}
.one {
  top: 86px;
  left: 36px;
}
.two {
  top: 45px;
  left: 82px;
}
.three {
  top: 4px;
  left: 129px;
}
</style>
