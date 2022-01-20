<script setup lang="ts">
import { ref, computed, unref } from 'vue';

const step = ref(0)
const max = 13

const adidasLock = computed(() => unref(step) >= 1 ? 1 : unref(step) )
const lineLock = computed(() => unref(step) >= 2 ? 2 : unref(step) )
const oneLock = computed(() => unref(step) >= 4 ? 4 : unref(step) )
const line2Lock = computed(() => unref(step) >= 5 ? 5 : unref(step) )
const twoLock = computed(() => unref(step) >= 7 ? 7 : unref(step) )
const line3Lock = computed(() => unref(step) >= 8 ? 8 : unref(step) )
const threeLock = computed(() => unref(step) >= 10 ? 10 : unref(step) )
const rotateLock = computed(() => unref(step) >= 11 ? 11 : unref(step) )


const btnLabel = computed(() => {
  if (unref(step) === max) return 'Done!'
  return `Next ${unref(step)}/${max}`
})
</script>

<template>
  <!-- adidas logo steps-->
  <div class="w-full h-screen
    flex flex-col justify-center items-center">
    <button @click="step++" class="mb-5"
      :disabled="step === max">
      {{ btnLabel }}
    </button>
    <div :class="[`adidas-${adidasLock}`, `finish-${step}`]" class="transition-all duration-300">
      <div :class="[`line-${lineLock}`, `one-${oneLock}`, `rotate-${rotateLock}`]" class="transition-all duration-300"></div>
      <div :class="[`line2-${line2Lock}`, `two-${twoLock}`, `rotate-${rotateLock}`]" class="transition-all duration-300"></div>
      <div :class="[`line3-${line3Lock}`, `three-${threeLock}`, `rotate-${rotateLock}`]" class="transition-all duration-300"></div>
    </div>
  </div>
</template>

<route>
{
  "name": "logo-adidas-steps"
}
</route>

<style scoped>
.adidas-0 {
  position: relative;
  width: 206px;
  height: 120px;
  overflow-y: visible;
  background-color: transparent;
}
.adidas-1 {
  position: relative;
  width: 206px;
  height: 120px;
  background-color: lightsalmon;
}
.line-2 {
  position: absolute;
  width: 46px;
  height: 150px;
  background-color: #111;
  opacity: 0.85;
}
.one-2{
  left: 0;
  top: 0;
}
.one-3 {
  left: 36px;
  top: 0px;
}
.one-4 {
  left: 36px;
  top: 86px;
}
.line2-5 {
  position: absolute;
  width: 46px;
  height: 150px;
  background-color: #111;
  opacity: 0.85;
}
.two-5{
  left: 0;
  top: 0;
}
.two-6 {
  left: 82px;
  top: 0px;
}
.two-7 {
  left: 82px;
  top: 45px;
}
.line3-8 {
  position: absolute;
  width: 46px;
  height: 150px;
  background-color: #111;
  opacity: 0.85;
}
.three-8{
  left: 0;
  top: 0;
}
.three-9{
  left: 129px;
  top: 0;
}
.three-10{
  left: 129px;
  top: 4px;
}
.rotate-11 {
  transform: rotate(-31deg);
}
.finish-12 {
  overflow: hidden;
}
.finish-13 {
  overflow: hidden;
  background-color: transparent;
}
</style>
