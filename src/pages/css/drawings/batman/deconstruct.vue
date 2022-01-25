<script setup lang="ts">
import { ref, unref, nextTick } from 'vue'

const position = ref(true)
const overflow = ref(true)
const color = ref(false)

function deconstruct() {
  if (unref(position)) {
    overflow.value = !overflow.value
    position.value = !position.value
    return
  }
  position.value = !position.value
  setTimeout(async () => {
    overflow.value = !overflow.value
  }, 100)
}

</script>

<template>
  <!-- batman symbol -->
  <div class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <div class="space-x-5" style="z-index: 888">
      <button @click="deconstruct" class="mb-10">Deconstruct</button>
      <button @click="color = !color" class="mb-16">Color</button>
    </div>
    <div class="oval" id="drawing"
      :class="[overflow ? 'overflow-on' : 'overflow-off',
        color ? 'oval-con' : 'oval-coff']">
      <div class="batman transition-all duration-200"
        :class="[position ? 'batman-pon': 'batman-poff',
        color ? 'batman-con' : 'batman-coff']">
        <div class="maskA transition-all duration-200"
          :class="[position ? 'maskA-pon': 'maskA-poff',
          color ? 'maskA-con' : 'maskA-coff']"></div>
        <div class="maskB transition-all duration-200"
          :class="[position ? 'maskB-pon': 'maskB-poff',
          color ? 'maskB-con' : 'maskB-coff']"></div>
        <div class="maskC transition-all duration-200"
          :class="[position ? 'maskC-pon': 'maskC-poff',
          color ? 'maskC-con' : 'maskC-coff']"></div>
        <div class="maskD transition-all duration-200"
          :class="[position ? 'maskD-pon': 'maskD-poff',
          color ? 'maskD-con' : 'maskD-coff']"></div>
        <div class="maskE transition-all duration-200"
          :class="[position ? 'maskE-pon': 'maskE-poff',
          color ? 'maskE-con' : 'maskE-coff']"></div>
        <div class="maskF transition-all duration-200"
          :class="[position ? 'maskF-pon': 'maskF-poff',
          color ? 'maskF-con' : 'maskF-coff']"></div>
        <div class="maskG transition-all duration-200"
          :class="[position ? 'maskG-pon': 'maskG-poff',
          color ? 'maskG-con' : 'maskG-coff']"></div>
        <div class="maskI transition-all duration-200"
          :class="[position ? 'maskI-pon': 'maskI-poff',
          color ? 'maskI-con' : 'maskI-coff']"></div>
        <div class="maskH transition-all duration-200"
          :class="[position ? 'maskH-pon': 'maskH-poff',
          color ? 'maskH-con' : 'maskH-coff']"></div>
      </div>
    </div>
  </div>
</template>

<route>
{
  "name": "draw-batman"
}
</route>

<style scoped>
#drawing {
  --primary: #fdff00;
  --base: black;
}
.bg {
  color: white;
  background-image: linear-gradient(8deg,#000000,#303030);
}
.oval {
  width: 230px;
  height: 130px;
  border-radius: 50%;
  position: relative;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
}
.overflow-on {
  overflow: hidden;
}
.overflow-off {
  overflow: visible;
}
.oval-con {
  background-color: white;
  opacity: 0.8;
}
.oval-coff {
  background-color: var(--primary);
}
.batman {
  position: absolute;
  width: 212px;
  height: 112px;
  border-radius: 50%;
}
.batman-con {
  background-color: var(--base);
  opacity: 0.83;
}
.batman-coff {
  background-color: var(--base);
}
.maskA {
  position: absolute;
  width: 33px;
  height: 70px;
  border-radius: 50%;
  transform: rotate(-41deg);
}
.maskA-pon {
  top: 67px;
  left: 44px;
}
.maskA-poff {
  top: 110px;
  left: 11px;
}
.maskA-con {
  background-color: blue;
  opacity: 0.75;
}
.maskA-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskB {
  position: absolute;
  width: 33px;
  height: 70px;
  border-radius: 50%;
  transform: rotate(41deg);
}
.maskB-pon {
  top: 67px;
  right: 44px;
}
.maskB-poff {
  top: 110px;
  right: 11px;
}
.maskB-con {
  background-color: purple;
  opacity: 0.75;
}
.maskB-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskC {
  position: absolute;
  width: 38px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary);
}
.maskC-pon {
  top: 73px;
  left: 68px;
  transform: rotate(-15deg);
}
.maskC-poff {
  top: 128px;
  left: 63px;
  transform: rotate(-15deg);
}
.maskC-con {
  background-color: orange;
  opacity: 0.75;
}
.maskC-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskD {
  position: absolute;
  width: 38px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary);
}
.maskD-pon {
  top: 73px;
  right: 68px;
  transform: rotate(15deg);
}
.maskD-poff {
  top: 128px;
  right: 63px;
  transform: rotate(15deg);
}
.maskD-con {
  background-color: green;
  opacity: 0.75;
}
.maskD-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskE {
  position: absolute;
  width: 37px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
}
.maskE-pon {
  top: 0;
  left: 57px;
}
.maskE-poff {
  top: -13px;
  left: -39px;
}
.maskE-con {
  background-color: teal;
  opacity: 0.5;
}
.maskE-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskF {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--primary);
}
.maskF-pon {
  top: 0;
  left: 74px;
}
.maskF-poff {
  top: -39px;
  left: 38px;
}
.maskF-con {
  background-color: teal;
  opacity: 0.5;
}
.maskF-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskG {
  position: absolute;
  width: 37px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
}
.maskG-pon {
  top: 0;
  right: 57px;
}
.maskG-poff {
  top: -13px;
  right: -39px;
}
.maskG-con {
  background-color: pink;
  opacity: 0.5;
}
.maskG-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskI {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  top: 0;
  right: 74px;
}
.maskI-pon {
  top: 0;
  right: 74px;
}
.maskI-poff {
  top: -39px;
  right: 38px;
}
.maskI-con {
  background-color: pink;
  opacity: 0.5;
}
.maskI-coff {
  background-color: var(--primary);
  opacity: 1;
}
.maskH {
  position: absolute;
  top: 0;
  left: 95px;
  width: 22px;
  transform: rotate(180deg);
}

.maskH-pon {
  top: 0;
}
.maskH-poff {
  top: -35px;
}
.maskH-con {
  border-bottom: 12px solid slateblue;
  border-left: 6px solid red;
  border-right: 6px solid red;
}
.maskH-coff {
  border-bottom: 12px solid var(--primary);
  border-left: 6px solid var(--base);
  border-right: 6px solid var(--base);
}
</style>
