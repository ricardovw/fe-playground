<script setup lang="ts">
import { ref, computed, unref } from 'vue';

const step = ref(0)
const max = 25

const iconLock = computed(() => unref(step) >= 2 ? 2 : unref(step))
const blinkistLock = computed(() => unref(step) >= 8 ? 8 : unref(step))
const iconOverflowLock = computed(() => unref(step) >= 15 ? 15 : unref(step))
const blinkistBeforeLock = computed(() => unref(step) >= 14 ? 14 : unref(step))
const blinksLock = computed(() => unref(step) >= 24 ? 24 : unref(step))
const shadowLock = computed(() => unref(step) >= 25 ? 'shadow-lg' : '')

const btnLabel = computed(() => {
  if (unref(step) === max) return 'Done!'
  return `Next ${unref(step)}/${max}`
})
</script>

<template>
  <!-- blinkist logo steps -->
  <div class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <div class="animate" id="logo" :class="[`icon-${iconLock}`, `icon-overflow-${iconOverflowLock}`, shadowLock]">
      <div class="animate" :class="`blinkist-${blinkistLock} blinkist-before-${blinkistBeforeLock}`">
        <div class="animate" :class="`blinks-${blinksLock}`"></div>
      </div>
    </div>
    <button @click="step++" class="mt-10 z-50"
      :disabled="step === max">
      {{ btnLabel }}
    </button>
  </div>
</template>

<route>
{
  "name": "logo-blinkist-steps"
}
</route>

<style scoped>
#logo {
  --primary: #00e375;
  --secondary: #002f57;
  --base: white;
}
.bg {
  background: linear-gradient(#e6e6e6, #dadada);
}
.animate {
  transition: all 200ms;
}
.icon-0 {
  position: relative;
  height: 444px;
  width: 444px;
  background-color: transparent;
}
.icon-1 {
  position: relative;
  height: 444px;
  width: 444px;
  background-color: var(--base);
}
.icon-2 {
  position: relative;
  height: 444px;
  width: 444px;
  background-color: var(--base);
  border-radius: 25%;
  overflow: display;
}
.blinkist-2 {
  position: relative;
  height: 339px;
  width: 339px;
}
.blinkist-3 {
  position: relative;
  height: 339px;
  width: 339px;
  top: 0%;
  left: 0%;
  background-color: var(--primary);
}
.blinkist-4 {
  position: relative;
  height: 339px;
  width: 339px;
  top: 50%;
  left: 0%;
  background-color: var(--primary);
}
.blinkist-5 {
  position: relative;
  height: 339px;
  width: 339px;
  top: 50%;
  left: 50%;
  background-color: var(--primary);
}
.blinkist-6 {
  position: relative;
  height: 339px;
  width: 339px;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
  background-color: var(--primary);
}
.blinkist-7 {
  position: relative;
  height: 339px;
  width: 339px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary);
}
.blinkist-8 {
  position: relative;
  height: 339px;
  width: 339px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary);
  border-radius: 50%;
}
.blinkist-before-8:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: transparent;
  top: 0;
  left: 0;
  transform: rotate(0deg);
  transition: all 200ms;
}
.blinkist-before-9:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 0;
  left: 0;
  transform: translate(0%, 0%) rotate(0deg);
  transition: all 200ms;
}
.blinkist-before-10:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 50%;
  left: 0%;
  transform: translate(0%, 0%) rotate(0deg);
  transition: all 200ms;
}
.blinkist-before-11:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 50%;
  left: 50%;
  transform: translate(0%, 0%) rotate(0deg);
  transition: all 200ms;
}
.blinkist-before-12:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%) rotate(0deg);
  transition: all 200ms;
}
.blinkist-before-13:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -154%) rotate(0deg);
  transition: all 200ms;
}
.blinkist-before-14:before {
  position: absolute;
  content: "";
  width: 180px;
  height: 180px;
  background-color: var(--base);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -154%) rotate(-45deg);
  transition: all 200ms;
}
.icon-overflow-15 {
  transition: all 200ms;
  overflow: hidden;
}
.blinks-15 {
  position: absolute;
  height: 38%;
  width: 38%;
  /* border-radius: 50%; */
  background-color: transparent;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -25%); */
}
.blinks-16 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 0%;
  left: 0%;
  /* transform: translate(-50%, -25%); */
}
.blinks-17 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 0%;
}
.blinks-18 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(0%, 0%);
}
.blinks-19 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
}
.blinks-20 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}
.blinks-21 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%) rotate(-45deg);
}
.blinks-22 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%) rotate(-45deg);
}
.blinks-23 {
  position: absolute;
  height: 38%;
  width: 38%;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 0%;
  background-color: var(--secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%) rotate(-45deg);
}
.blinks-24 {
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
