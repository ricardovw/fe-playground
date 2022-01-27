<script setup lang="ts">
import { ref, unref } from 'vue'

const opacity = ref(false)
const position = ref(false)

</script>

<template>
  <!-- homer illustration -->
  <div id="drawing" class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <div class="flex justify-center space-x-5 mb-10 z-50">
      <button @click="opacity = !opacity">Opacity</button>
      <button @click="position = !position">Deconstruct</button>
    </div>
    <div>
      <div class="homer">
        <div class="forehead transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'forehead-pon' : 'forehead-poff']"></div>
            <div class="hair1 transition-all duration-200"
              :class="[opacity ? 'opacity-50' : 'opacity-100',
              position ? 'hair1-pon' : 'hair1-poff']"></div>
            <div class="hair2 transition-all duration-200"
              :class="[opacity ? 'opacity-50' : 'opacity-100',
              position ? 'hair2-pon' : 'hair2-poff']"></div>
            <div class="head-base transition-all duration-200"
              :class="[opacity ? 'opacity-50' : 'opacity-100',
              position ? 'head-base-pon' : 'head-base-off']"></div>

        <div class="eye-right transition-all duration-200 "
          :class="[opacity ? 'opacity-50' : 'opacity-100',
            position ? 'eye-right-pon' : 'eye-right-poff']">
            <div class="eye-right-pupil"></div>
        </div>
        <div class="eye-left" :class="opacity ? 'opacity-50' : 'opacity-100'">
            <div class="eye-left-pupil"></div>
        </div>

        <div class="neck transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'neck-pon' : 'neck-poff']"></div>

        <div class="mouth" :class="opacity ? 'opacity-50' : 'opacity-100'">
            <div class="bottom-lip transition-all duration-200"
              :class="[opacity ? 'opacity-50' : 'opacity-100',
              position ? 'bottom-lip-pon' : 'bottom-lip-poff']"></div>
            <div class="upper-lip transition-all duration-200"
              :class="[opacity ? 'opacity-50' : 'opacity-100',
              position ? 'upper-lip-pon' : 'upper-lip-poff']"></div>
        </div>
        <div class="mouth-side transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'mouth-side-pon' : 'mouth-side-poff']"></div>
        <div class="mouth-side-mask transition-all duration-200" 
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'mouth-side-mask-pon' : 'mouth-side-mask-poff']"></div>
        <div class="mouth-upper transition-all duration-200" 
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'mouth-upper-pon' : 'mouth-upper-poff']"></div>
        <div class="mouth-mask transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'mouth-mask-pon' : 'mouth-mask-poff']"></div>
        <div class="head-side transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'head-side-pon' : 'head-side-poff']"></div>

        <div class="ear transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
            position ? 'ear-pon' : 'ear-poff']">
            <div class="ear-inner transition-all duration-200"
              :class="[opacity ? 'opacityOn' : 'opacityOff',
              position ? 'ear-inner-pon' : 'ear-inner-poff']">
            </div>
        </div>
        <div class="nose transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'nose-pon' : 'nose-poff']"></div>
        <div class="collar-left transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'collar-left-pon' : 'collar-left-poff']"></div>
        <div class="collar-right transition-all duration-200"
          :class="[opacity ? 'opacity-50' : 'opacity-100',
          position ? 'collar-right-pon' : 'collar-right-poff']"></div>
      </div>
    </div>
  </div>
</template>

<route>
{
  "name": "draw-homer"
}
</route>

<style scoped>
#drawing {
  --bg: #DE433F ;
  --base: black;
  --neutral: white;
  --skin: #FED90F;
  --mouth: #D1B271
}
.opacity-on {
  opacity: 0.65;
}
.opacity-off {
  opacity: 1;
}
.bg {
  margin: 0;
  padding: 0;
  background: var(--neutral);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homer {
  position: relative;
  width: 215px;
  height: 405px;
}
.forehead {
  position: absolute;
  width: 170px;
  height: 200px;
  border-radius: 60%/50%;
  transform: rotate(-18deg);
  background-color: var(--skin);
  border: 1px solid var(--base);
}
.forehead-pon {
  top: -60px;
}
.forehead-poff {
  top: 10px;
}
.hair1 {
  position: absolute;
  width: 80px;
  height: 70px;
  border-top: 2px solid var(--base);
  border-radius: 50%;
}
.hair1-pon {
  top: 0px;
  left: -105px;
  transform: rotate(0deg);
}
.hair1-poff {
  top: 15px;
  left: 0px;
  transform: rotate(-40deg);
}
.hair2 {
  position: absolute;
  width: 80px;
  height: 70px;
  border-top: 2px solid var(--base);
  border-radius: 50%;
}
.hair2-pon {
  top: -30px;
  left: -105px;
  transform: rotate(0deg);
}
.hair2-poff {
  top: 10px;
  left: 0px;
  transform: rotate(-30deg);
}
.eye-right {
  position: absolute;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: var(--neutral);
  border: 1px solid var(--base);
}
.eye-right-pon {
  left: 180px;
  top: 68px;
}
.eye-right-poff {
  left: 120px;
  top: 110px;
}
.eye-right-pupil {
  position: absolute;
  width: 9px;
  height: 9px;
  background-color: var(--base);
  left: 35px;
  top: 40px;
  border-radius: 50%;
  animation: right-eye 3s linear 0s infinite;
}
.eye-left {
  position: absolute;
  width: 75px;
  height: 75px;
  top: 115px;
  left: 60px;
  border-radius: 50%;
  background-color: var(--neutral);
  border: 1px solid var(--base);
}
.eye-left-pupil {
  position: absolute;
  width: 9px;
  height: 9px;
  background-color: var(--base);
  left: 25px;
  top: 40px;
  border-radius: 50%;
  animation: right-eye 3s linear 0s infinite;
}
.head-base {
  top: 185px;
  left: 30px;
  position: absolute;
  width: 140px;
  height: 60px;
  background-color: var(--skin);
}
.head-side {
  position: absolute;
  width: 40px;
  height: 60px;
  background-color: var(--skin);
  border-left: 1px solid var(--base);
}
.head-side-pon {
  top: 165px;
  left: -60px;
  transform: rotate(0deg);
}
.head-side-poff {
  top: 165px;
  left: 23px;
  transform: rotate(-11deg);
}
.nose {
  position: absolute;
  width: 60px;
  height: 32px;
  background-color: var(--skin);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-right: 1px solid var(--base);
  border-top: 1px solid var(--base);
  border-bottom: 1px solid var(--base);
}
.nose-pon {
  top: 162px;
  left: 195px;
}
.nose-poff {
  top: 172px;
  left: 130px;
}
.mouth {
  position: absolute;
  width: 115px;
  height: 120px;
  background-color: var(--mouth);
  top: 202px;
  left: 60px;
  border-radius: 50%;
  border: 1px solid var(--base);
}
.bottom-lip {
  position: absolute;
  width: 20px;
  height: 30px;
  background-color: var(--mouth);
  border-radius: 50%;
  border-right: 1px solid var(--base);
}
.bottom-lip-pon {
  top: 133px;
  left: 133px;
  transform: rotate(0deg);
}
.bottom-lip-poff {
  top: 62px;
  left: 98px;
  transform: rotate(15deg);
}
.upper-lip {
  position: absolute;
  width: 120px;
  height: 60px;
  background-color: var(--mouth);
  border-right: 1px solid var(--base);
  border-bottom: 1px solid var(--base);
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 60%;
}
.upper-lip-pon {
  top: 63px;
  left: 131px;
  transform: rotate(0deg);
}
.upper-lip-poff {
  top: 21px;
  left: 31px;
  transform: rotate(-6deg);
}
.mouth-side {
  position: absolute;
  width: 35px;
  height: 40px;
  background-color: var(--mouth);
  border-top-right-radius: 5%;
  border-top: 1px solid var(--base);
  border-bottom-right-radius: 100%;
}
.mouth-side-pon {
  top: 208px;
  left: 196px;
  transform: rotate(0deg);
}
.mouth-side-poff {
  top: 230px;
  left: 166px;
  transform: rotate(40deg);
}
.mouth-side-mask {
  content: "";
  position: absolute;
  width: 35px;
  height: 5px;
  background-color: var(--neutral);
  border-top-right-radius: 5%;
}
.mouth-side-mask-pon {
  top: 266px;
  left: 118px;
  transform: rotate(0deg);
}
.mouth-side-mask-poff {
  top: 236px;
  left: 187px;
  transform: rotate(40deg);
}
.mouth-upper {
  position: absolute;
  width: 60px;
  height: 30px;
  background-color: var(--mouth);
  border-top: 1px solid var(--base);
  border-right: 1px solid var(--base);
  border-top-right-radius: 70%;
}
.mouth-upper-pon {
  top: 213px;
  left: 250px;
}
.mouth-upper-poff {
  top: 200px;
  left: 130px;
}
.mouth-mask {
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: var(--mouth);
}
.mouth-mask-pon {
  top: 268px;
  left: -13px;
}
.mouth-mask-poff {
  top: 250px;
  left: 80px;
}
.neck {
  position: absolute;
  width: 125px;
  height: 150px;
  background-color: var(--skin);
  border-left: 1px solid var(--base);
  border-right: 1px solid var(--base);
}
.neck-pon {
  top: 330px;
  left: 28px;
  transform: rotate(0deg);
}
.neck-poff {
  top: 200px;
  left: 28px;
  transform: rotate(2deg);
}
.collar-left {
  position: absolute;
  width: 110px;
  height: 60px;
  background-color: var(--neutral);
  border-radius: 10%;
  border: 1px solid var(--base);
}
.collar-left-pon {
  top: 340px;
  left: -68px;
  transform: rotate(0deg);
}
.collar-left-poff {
  top: 330px;
  left: 10px;
  transform: rotate(15deg);
}
.collar-right {
  position: absolute;
  width: 20px;
  height: 50px;
  background-color: var(--neutral);
  top: 340px;
  left: 150px;
  transform: rotate(-20deg);
  border: 1px solid var(--base);
}
.collar-right-pon {
  top: 400px;
  left: 180px;
  transform: rotate(0deg);
}
.collar-right-poff {
  top: 340px;
  left: 150px;
  transform: rotate(-20deg);
}
.ear {
  position: absolute;
  width: 32px;
  height: 37px;
  background-color: var(--skin);
  border-radius: 50%;
  border: 1px solid var(--base);
}
.ear-pon {
  top: 250px;
  left: -80px;
  transform: rotate(0deg);
}
.ear-poff {
  top: 200px;
  left: 10px;
  transform: rotate(10deg);
}
.ear-inner {
    position: absolute;
    width: 15px;
    height: 15px;
    border-left: 1px solid var(--base);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}
.ear-inner-pon {
  top: -10px;
  left: 35px;
}
.ear-inner-poff {
  top: 8px;
  left: 8px;
}
</style>
