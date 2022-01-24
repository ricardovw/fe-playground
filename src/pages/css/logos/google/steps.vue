<script setup lang="ts">
import { ref, computed, unref } from 'vue';

const step = ref(0)
const max = 13

const outlineLock = computed(() => unref(step) >= 5 ? 5 : unref(step) )
const halfLock = computed(() => unref(step) >= 10 ? 10 : unref(step) )

const btnLabel = computed(() => {
  if (unref(step) === max) return 'Done!'
  return `Next ${unref(step)}/${max}`
})
</script>

<template>
  <!-- google logo steps -->
  <div class="w-full h-screen
    flex flex-col justify-center items-center">
    <button @click="step++"
      class="mb-5" :disabled="step === max">
      {{ btnLabel }}
    </button>
    <div class="google">
      <div class="base transition-all duration-300" :class="`outline-step-${outlineLock}`"></div>
      <div class="base transition-all duration-300" :class="`half-step-${halfLock}`"></div>
      <div class="transition-all duration-300" :class="`line-step-${step}`"></div>
    </div>
  </div>
</template>

<route>
{
  "name": "logo-google-steps"
}
</route>

<style scoped>
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
.outline-step-1 {
  border-top: 30px solid #E33E2B;
}
.outline-step-2 {
  border-top: 30px solid #E33E2B;
  border-bottom: 30px solid #2BA14B;
}
.outline-step-3 {
  border-top: 30px solid #E33E2B;
  border-bottom: 30px solid #2BA14B;
  border-left: 30px solid #F1B500;
}
.outline-step-4 {
  border-top: 30px solid #E33E2B;
  border-bottom: 30px solid #2BA14B;
  border-left: 30px solid #F1B500;
  border-right: 30px solid transparent;
}
.outline-step-5 {
  border-top: 30px solid #E33E2B;
  border-bottom: 30px solid #2BA14B;
  border-left: 30px solid #F1B500;
  border-right: 30px solid transparent;
  border-radius: 50%;
}
.half-step-6 {
  border-right: 30px solid #3A7CEC;
}
.half-step-7 {
  border: 30px solid transparent;
  border-right: 30px solid #3A7CEC;
}
.half-step-8 {
  border: 30px solid transparent;
  border-right: 30px solid #3A7CEC;
  transform: rotate(45deg);
}
.half-step-9 {
  border: 30px solid transparent;
  border-right: 30px solid #3A7CEC;
  transform: rotate(45deg);
  border-radius: 50%;
}
.half-step-10 {
  border: 30px solid transparent;
  border-right: 30px solid #3A7CEC;
  transform: rotate(45deg);
  border-radius: 50%;
  z-index: -1;
}
.line-step-11 {
  position: absolute;
  width: 80px;
  height: 30px;
  right: 0;
  background-color: #3A7CEC;
  top: 0%;
  transform: translateY(0%);
  transition: all 300ms;
}
.line-step-12 {
  position: absolute;
  width: 80px;
  height: 30px;
  background-color: #3A7CEC;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 300ms;
}
.line-step-13 {
  position: absolute;
  width: 80px;
  height: 30px;
  background-color: #3A7CEC;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-bottom-right-radius: 15px;
}
</style>
