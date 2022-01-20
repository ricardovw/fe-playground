<script setup lang="ts">
import { ref, computed, unref } from 'vue';

const step = ref(0)
const max = 21

const gitLock = computed(() => unref(step) >= 2 ? 2 : unref(step) )
const mbLock = computed(() => unref(step) >= 4 ? 4 : unref(step) )
const mbbLock = computed(() => unref(step) >= 8 ? 8 : unref(step) )
const mbaLock = computed(() => unref(step) >= 12 ? 12 : unref(step) )
const dbLock = computed(() => unref(step) >= 15 ? 15 : unref(step) )
const dbbLock = computed(() => unref(step) >= 19 ? 19 : unref(step) )
const dbrLock = computed(() => unref(step) >= 20 ? 20 : unref(step) )


const btnLabel = computed(() => {
  if (unref(step) === max) return 'Done!'
  return `Next ${unref(step)}/${max}`
})
</script>

<template>
  <!-- git logo -->
  <div class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center">
    <button @click="step++" class="mb-10"
      :disabled="step === max">
      {{ btnLabel }}
    </button>
    <div :class="[`git-${gitLock}`, `git-rotate-${step}`]" class="transition-all duration-300">
      <div :class="[`main-branch-${mbLock}`, `mbb-${mbbLock}`, `mba-${mbaLock}`]" class="transition-all duration-300"></div>
      <div :class="[`dev-branch-${dbLock}`, `dbb-${dbbLock}`, `db-rotate-${dbrLock}`]" class="transition-all duration-300"></div>
    </div>
  </div>
</template>

<route>
{
  "name": "logo-git-steps"
}
</route>

<style scoped>
.git-0 {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: transparent;
}
.git-1 {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #F05033;
}
.git-2 {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #F05033;
  border-radius: 15px;
}
.main-branch-2 {
  width: 110px;
  height: 12px;
  background: transparent;
  position: absolute;
  top: 0;
}
.main-branch-3 {
  width: 110px;
  height: 12px;
  background: white;
  position: absolute;
  top: 0;
}
.main-branch-4 {
  width: 110px;
  height: 12px;
  background: white;
  position: absolute;
  top: 40px;
}
.mbb-4:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 0%;
  left: 0px;
  top: 0px;
  transition: all 300ms;
}
.mbb-5:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 0px;
  top: 0px;
  transition: all 300ms;
}
.mbb-6:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 0px;
  top: -8px;
  transition: all 300ms;
}
.mbb-7:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 30px;
  top: -8px;
  transition: all 300ms;
}
.mbb-8:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  left: 30px;
  top: -8px;
  transition: all 300ms;
}
.mba-8:after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 0%;
  left: 0px;
  top: 0px;
  transition: all 300ms;
}
.mba-9:after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 0px;
  top: 0px;
  transition: all 300ms;
}
.mba-10:after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 0px;
  top: -8px;
  transition: all 300ms;
}
.mba-11:after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 90px;
  top: -8px;
  transition: all 300ms;
}
.mba-12:after {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  left: 90px;
  top: -8px;
  transition: all 300ms;
}
.dev-branch-12 {
  width: 90px;
  height: 12px;
  background: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
}
.dev-branch-13 {
  width: 90px;
  height: 12px;
  background: white;
  position: absolute;
  top: 0px;
  left: 0px;
}
.dev-branch-14 {
  width: 90px;
  height: 12px;
  background: white;
  position: absolute;
  top: 70px;
  left: 0px;
}
.dev-branch-15 {
  width: 90px;
  height: 12px;
  background: white;
  position: absolute;
  top: 70px;
  left: 30px;
}
.dbb-15:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 0%;
  left: 0px;
  top: 0px;
  transition: all 300ms;
}
.dbb-16:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 0px;
  top: 0px;
  transition: all 300ms;
}
.dbb-17:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 0px;
  top: -8px;
  transition: all 300ms;
}
.dbb-18:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 0%;
  left: 70px;
  top: -8px;
  transition: all 300ms;
}
.dbb-19:before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  left: 70px;
  top: -8px;
  transition: all 300ms;
}
.db-rotate-20 {
  transform: rotate(45deg);
}
.git-rotate-21 {
  transform: rotate(45deg);
}
</style>
