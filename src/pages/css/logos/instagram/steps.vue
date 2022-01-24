<script setup lang="ts">
import { ref, computed, unref } from 'vue';

const step = ref(0)
const max = 17

const instagramLock = computed(() => unref(step) >= 8 ? 8 : unref(step) )
const cameraLock = computed(() => unref(step) >= 12 ? 12 : unref(step) )
const lenseLock = computed(() => unref(step) >= 13 ? 13 : unref(step) )


const btnLabel = computed(() => {
  if (unref(step) === max) return 'Done!'
  return `Next ${unref(step)}/${max}`
})
</script>

<template>
  <!-- instagram logo -->
  <div class="w-full h-screen transition-all duration-200
    flex flex-col justify-center items-center">
    <button @click="step++"
      class="mb-5" :disabled="step === max">
      {{ btnLabel }}
    </button>
    <div id="logo" class="transition-all duration-200"
      :class="`instagram-${instagramLock}`">
      <div :class="`camera-${cameraLock}`">
        <div :class="`lense-${lenseLock}`"></div>
        <div :class="`flash-${step}`"></div>
      </div>
    </div>
  </div>
</template>

<route>
{
  "name": "logo-instagram-steps"
}
</route>

<style scoped>
#logo {
  --base: white;
  --yellow: #FDF497;
  --orange: #FD5949;
  --pink: #D6249F;
  --blue: #285AEB;
}
.animate {
  transition: all 200ms;
}
.instagram-0 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--blue) 0%, var(--blue) 5%, var(--blue) 45%, var(--blue) 60%, var(--blue) 90%);
  opacity: 0;
}
.instagram-1 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--blue) 0%, var(--blue) 5%, var(--blue) 45%, var(--blue) 60%, var(--blue) 90%);
  opacity: 1;
}
.instagram-2 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--blue) 0%, var(--blue) 5%, var(--blue) 45%, var(--pink) 60%, var(--blue) 90%);
}
.instagram-3 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--blue) 0%, var(--blue) 5%, var(--orange) 45%, var(--pink) 60%, var(--blue) 90%);
}
.instagram-4 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--yellow) 0%, var(--yellow) 5%, var(--orange) 45%, var(--pink) 60%, var(--blue) 90%);
}
.instagram-5 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--yellow) 0%, var(--yellow) 5%, var(--orange) 45%, var(--pink) 60%, var(--blue) 90%);
  border-radius: 60px;
  display: flex;
  align-items: start;
}
.camera-5 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 0px solid var(--base);
  transition: all 200ms;
  position: relative;
}
.instagram-6 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--yellow) 0%, var(--yellow) 5%, var(--orange) 45%, var(--pink) 60%, var(--blue) 90%);
  border-radius: 60px;
  display: flex;
}
.camera-6 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  position: relative;
}
.instagram-7 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--yellow) 0%, var(--yellow) 5%, var(--orange) 45%, var(--pink) 60%, var(--blue) 90%);
  border-radius: 60px;
  display: flex;
  align-items: center;
}
.camera-7 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  position: relative;
}
.instagram-8 {
  height: 200px;
  width: 200px;
  transition: all 200ms;
  background: radial-gradient(circle at 30% 107%, var(--yellow) 0%, var(--yellow) 5%, var(--orange) 45%, var(--pink) 60%, var(--blue) 90%);
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.camera-8 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: start;
}
.camera-9 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  border-radius: 45px;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: start;
}
.lense-9 {
  height: 80px;
  width: 80px;
  transition: all 200ms;
  background-color: transparent;
  border: 0px solid var(--base);
}
.camera-10 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  border-radius: 45px;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: start;
}
.lense-10 {
  height: 80px;
  width: 80px;
  transition: all 200ms;
  background-color: transparent;
  border: 12px solid var(--base);
}
.camera-11 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  border-radius: 45px;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
}
.lense-11 {
  height: 80px;
  width: 80px;
  transition: all 200ms;
  background-color: transparent;
  /* border-radius: 50px; */
  border: 12px solid var(--base);
}
.camera-12 {
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: 12px solid var(--base);
  transition: all 200ms;
  border-radius: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lense-12 {
  height: 80px;
  width: 80px;
  transition: all 200ms;
  background-color: transparent;
  border: 12px solid var(--base);
}
.lense-13 {
  height: 80px;
  width: 80px;
  transition: all 200ms;
  background-color: transparent;
  border-radius: 50px;
  border: 12px solid var(--base);
}
.flash-13 {
  height: 15px;
  width: 15px;
  opacity: 0;
  background-color: transparent;
  position: absolute;
  transition: all 200ms;
}
.flash-14 {
  height: 15px;
  width: 15px;
  opacity: 1;
  background-color: var(--base);
  position: absolute;
  transition: all 200ms;
}
.flash-15 {
  height: 15px;
  width: 15px;
  opacity: 1;
  background-color: var(--base);
  position: absolute;
  top: 15px;
  transition: all 200ms;
}
.flash-16 {
  height: 15px;
  width: 15px;
  opacity: 1;
  background-color: var(--base);
  position: absolute;
  top: 15px;
  right: 15px;
  transition: all 200ms;
}
.flash-17 {
  height: 15px;
  width: 15px;
  opacity: 1;
  background-color: var(--base);
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: all 200ms;
}
</style>
