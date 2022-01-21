<script setup lang="ts">
</script>

<template>
  <!-- google logo -->
  <div class="w-full h-screen
    flex flex-col justify-center items-center">
    <button @click="$router.push({ name: 'logo-google-steps'})"
      class="mb-5">Start</button>
    <div class="google" id="logo">
      <div class="base round"></div>
      <div class="base half"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<route>
{
  "name": "logo-google"
}
</route>

<style scoped>
#logo {
  --red: #E33E2B;
  --yellow: #F1B500;
  --green: #2BA14B;
  --blue: #3A7CEC;
}
.google {
  position: relative;
  width: 150px;
  height: 150px;
}
.base {
  position: absolute;
  width: 150px;
  height: 150px;
}
.round {
  border-top: 30px solid var(--red);
  border-right: 30px solid transparent;
  border-bottom: 30px solid var(--green);
  border-left: 30px solid var(--yellow);
  border-radius: 50%;
}
.half {
  border: 30px solid transparent;
  border-right: 30px solid var(--blue);
  transform: rotate(45deg);
  border-radius: 50%;
  z-index: -1;
}
.line {
  position: absolute;
  width: 80px;
  height: 30px;
  background-color: var(--blue);
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-bottom-right-radius: 15px;
}
</style>
