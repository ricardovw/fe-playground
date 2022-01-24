<script setup lang="ts">
import { ref, computed, unref } from 'vue';

const step = ref(0)
const max = 15

const pepsiLock = computed(() => unref(step) >= 3 ? 3 : unref(step) )
const beforeLock = computed(() => unref(step) >= 8 ? 8 : unref(step) )
const afterLock = computed(() => unref(step) >= 12 ? 12 : unref(step) )
const overflowLock = computed(() => unref(step) >= 13 ? 13 : unref(step) )


const btnLabel = computed(() => {
  if (unref(step) === max) return 'Done!'
  return `Next ${unref(step)}/${max}`
})
</script>

<template>
  <!-- pepsi logo steps-->
  <div class="w-full h-screen bg-slate-300
    flex flex-col justify-center items-center">
    <div :class="[
      `pepsi-${pepsiLock}`,
      `before-${beforeLock}`,
      `after-${afterLock}`,
      `overflow-${overflowLock}`,
      `opacity-${step}`,
      ]"
      class="transition-all duration-200" id="logo"></div>
    <button @click="step++"
      class="mt-8" :disabled="step === max"
      style="z-index: 888;">
      {{ btnLabel }}
    </button>
  </div>
</template>

<route>
{
  "name": "logo-pepsi-steps"
}
</route>

<style scoped>
#logo {
  --blue: #34588e;
  --red: #da473c;
  --base: white;
}
.pepsi-0 {
  height: 300px;
  width: 300px;
  background-color: transparent;
  position: relative;}
.pepsi-1 {
  height: 300px;
  width: 300px;
  background-color: var(--blue);
  position: relative;
}
.pepsi-2 {
  height: 300px;
  width: 300px;
  background-color: var(--blue);
  border-radius: 50%;
  /* border: 10px solid var(--base); */
  position: relative;
}
.pepsi-3 {
  height: 300px;
  width: 300px;
  background-color: var(--blue);
  border-radius: 50%;
  border: 10px solid var(--base);
  position: relative;
}
.before-3:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  opacity: 0.7;
  background-color: transparent;
  transition: all 200ms;
}
.before-4:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  opacity: 0.7;
  background-color: var(--base);
  top: 0px;
  left: 0px;
  transition: all 200ms;
}
.before-5:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  opacity: 0.7;
  background-color: var(--base);
  top: -160px;
  left: 0px;
  transition: all 200ms;
}
.before-6:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  opacity: 0.7;
  background-color: var(--base);
  top: -160px;
  left: -240px;
  transition: all 200ms;
}
.before-7:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  opacity: 0.7;
  background-color: var(--base);
  top: -160px;
  left: -240px;
  transform: rotate(-18deg);
  transition: all 200ms;
}
.before-8:before {
  position: absolute;
  content: "";
  height: 400px;
  width: 500px;
  opacity: 0.7;
  border-radius: 25%;
  background-color: var(--base);
  top: -160px;
  left: -240px;
  transform: rotate(-18deg);
  transition: all 200ms;
}
.after-8:after {
  position: absolute;
  content: "";
  height: 500px;
  width: 550px;
  opacity: 0.7;
  background-color: transparent;
  top: 0px;
  left: 0px;
  transition: all 200ms;
}
.after-9:after {
  position: absolute;
  content: "";
  height: 500px;
  width: 550px;
  opacity: 0.7;
  background-color: var(--red);
  top: 0px;
  left: 0px;
  transition: all 200ms;
}
.after-10:after {
  position: absolute;
  content: "";
  height: 500px;
  width: 550px;
  opacity: 0.7;
  background-color: var(--red);
  top: -270px;
  left: 0px;
  transition: all 200ms;
}
.after-11:after {
  position: absolute;
  content: "";
  height: 500px;
  width: 550px;
  opacity: 0.7;
  /* border-radius: 50%; */
  background-color: var(--red);
  top: -270px;
  left: -300px;
  transition: all 200ms;
}
.after-12:after {
  position: absolute;
  content: "";
  height: 500px;
  width: 550px;
  opacity: 0.7;
  border-radius: 50%;
  background-color: var(--red);
  top: -270px;
  left: -300px;
  transition: all 200ms;
}
.overflow-13 {
  overflow: hidden;
  transition: all 200ms;
}
.opacity-14:before {
  opacity: 1;
}

.opacity-15:before,
.opacity-15:after {
  opacity: 1;
}
</style>
