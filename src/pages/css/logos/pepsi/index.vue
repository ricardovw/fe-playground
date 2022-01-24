<script setup lang="ts">
</script>

<template>
  <!-- pepsi logo -->
  <div class="w-full h-screen bg-slate-300
    flex flex-col justify-center items-center">
    <div class="pepsi"></div>
    <button @click="$router.push({ name: 'logo-instagram-steps'})"
      class="mt-10">Start</button>
  </div>
</template>

<route>
{
  "name": "logo-pepsi"
}
</route>

<style scoped>
.pepsi {
  height: 300px;
  width: 300px;
  background-color: #34588e;
  border-radius: 50%;
  border: 10px solid white;
  position: relative;
  overflow: hidden;
}
.pepsi:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  border-radius: 25%;
  background-color: white;
  top: -160px;
  left: -240px;
  transform: rotate(-18deg);
}
.pepsi:after {
  position: absolute;
  content: "";
  height: 500px;
  width: 550px;
  border-radius: 50%;
  background-color: var(--red);
  top: -270px;
  left: -300px;
}
</style>
