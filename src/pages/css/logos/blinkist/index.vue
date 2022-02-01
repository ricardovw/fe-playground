<script setup lang="ts">
</script>

<template>
  <!-- blinkist logo -->
  <div class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <div id="logo" class="icon shadow-lg">
      <div class="blinkist">
        <div class="blinks"></div>
      </div>
    </div>
    <button @click="$router.push({ name: 'logo-blinkist-steps' })"
      class="mt-10">Start</button>
  </div>
</template>

<style scoped>
#logo {
  --primary: #00e375;
  --secondary: #002f57;
  --base: white;
}
.bg {
  background: linear-gradient(#e6e6e6, #dadada);
}
.icon {
  position: relative;
  height: 444px;
  width: 444px;
  background-color: var(--base);
  border-radius: 25%;
  overflow: hidden;
}
.blinkist {
  position: relative;
  height: 339px;
  width: 339px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary);
}
.blinkist:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -154%) rotate(-45deg);
}
.blinks {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%) rotate(-45deg);
}
</style>
