<script setup lang="ts">
</script>

<template>
  <!-- instagram logo -->
  <div class="w-full h-screen
    flex flex-col justify-center items-center">
    <button @click="$router.push({ name: 'logo-instagram-steps'})"
      class="mb-5">Start</button>
    <div class="instagram centered">
      <div class="camera outlined centered">
        <div class="lense outlined "></div>
        <div class="flash"></div>
      </div>
    </div>
  </div>
</template>

<route>
{
  "name": "logo-instagram"
}
</route>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outlined {
  border: 12px solid white;
}
.instagram {
  height: 200px;
  width: 200px;
  border-radius: 60px;
  background: radial-gradient(circle at 30% 107%, #FDF497 0%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%);
}
.camera {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border-radius: 45px;
  position: relative;
}
.lense {
  height: 80px;
  width: 80px;
  background-color: transparent;
  border-radius: 50px;
}
.flash {
  height: 15px;
  width: 15px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
