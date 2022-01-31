<script setup lang="ts">
import { ref, unref, reactive, computed } from 'vue'
import classHelpers from '@/functions/classHelpers'
import { classHandler, classHandlerOpts } from '@/functions/classHelpers'

// const { classHandler, classHandlerOpts } = classHelpers;

const opacity = ref(false)
const position = ref(false)
const color = ref(false)
const radius = ref(false)

// @TODO remove typeof
const refs: typeof classHandlerOpts = reactive({
  _opacity: opacity,
  _position: position,
  _color: color,
  _radius: radius,
})

const foreheadClasses = computed(() => classHandler('forehead', refs));
const hair1Classes = computed(() => classHandler('hair1', refs));
const hair2Classes = computed(() => classHandler('hair2', refs));
const eyeRightClasses = computed(() => classHandler('eye-right', refs));
const pupilRightClasses = computed(() => classHandler('pupil-right', refs));
const eyeLeftClasses = computed(() => classHandler('eye-left', refs));
const pupilLeftClasses = computed(() => classHandler('pupil-left', refs));
const headBaseClasses = computed(() => classHandler('head-base', refs));
const neckClasses = computed(() => classHandler('neck', refs));
const mouthClasses = computed(() => classHandler('mouth', refs));
const bottomLipClasses = computed(() => classHandler('bottom-lip', refs));
const upperLipClasses = computed(() => classHandler('upper-lip', refs));
const mouthSideClasses = computed(() => classHandler('mouth-side', refs));
const mouthSideMaskClasses = computed(() => classHandler('mouth-side-mask', refs));
const mouthUpperClasses = computed(() => classHandler('mouth-upper', refs));
const mouthMaskClasses = computed(() => classHandler('mouth-mask', refs));
const headSideClasses = computed(() => classHandler('head-side', refs));
const earClasses = computed(() => classHandler('ear', refs));
const earInnerClasses = computed(() => classHandler('ear-inner', refs));
const noseClasses = computed(() => classHandler('nose', refs));
const collarLeftClasses = computed(() => classHandler('collar-left', refs));
const collarRightClasses = computed(() => classHandler('collar-right', refs));
</script>

<template>
  <!-- homer illustration -->
  <div id="drawing" class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <div class="flex justify-center space-x-5 mb-10 z-50">
      <button @click="opacity = !opacity">Opacity</button>
      <button @click="position = !position">Deconstruct</button>
      <button @click="color = !color">Color</button>
      <button @click="radius = !radius">Radius</button>
    </div>
    <div>
      <div class="homer">
        <div class="forehead animate" :class="foreheadClasses"></div>
            <div class="hair1 animate" :class="hair1Classes"></div>
            <div class="hair1 animate" :class="hair2Classes"></div>
            <div class="head-base animate" :class="headBaseClasses"></div>

        <div class="eye-right animate" :class="eyeRightClasses">
            <div class="pupil-right animate" :class="pupilRightClasses"></div>
        </div>
        <div class="eye-left animate" :class="eyeLeftClasses">
            <div class="pupil-left animate" :class="pupilLeftClasses"></div>
        </div>

        <div class="neck animate" :class="neckClasses"></div>

        <div class="mouth animate" :class="mouthClasses">
            <div class="bottom-lip animate" :class="bottomLipClasses"></div>
            <div class="upper-lip animate" :class="upperLipClasses"></div>
        </div>
        <div class="mouth-side animate" :class="mouthSideClasses"></div>
        <div class="mouth-side-mask animate" :class="mouthSideMaskClasses"></div>
        <div class="mouth-upper animate" :class="mouthUpperClasses"></div>
        <div class="mouth-mask animate" :class="mouthMaskClasses"></div>
        <div class="head-side animate" :class="headSideClasses"></div>

        <div class="ear animate" :class="earClasses">
            <div class="ear-inner animate" :class="earInnerClasses">
            </div>
        </div>
        <div class="nose animate" :class="noseClasses"></div>
        <div class="collar-left animate" :class="collarLeftClasses"></div>
        <div class="collar-right animate" :class="collarRightClasses"></div>
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
.animate {
  transition: all 200ms;
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
  transform: rotate(-18deg);
  border: 1px solid var(--base);
}
.forehead-ron {
  border-top-right-radius: 0%;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 30%;
}
.forehead-roff {
    border-radius: 60%/50%;
}
.forehead-con {
  background-color: grey;
}
.forehead-coff {
  background-color: var(--skin);
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
}
.hair1-ron {
  border-top: 2px solid var(--base);
  border-radius: 0%;
}
.hair1-roff {
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
.hair2-ron {
  border-top: 2px solid var(--base);
  border-radius: 0%;
}
.hair2-roff {
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
  background-color: var(--neutral);
  border: 1px solid var(--base);
}
.eye-right-ron {
  border-radius: 0%;
}
.eye-right-roff {
  border-radius: 50%;
}
.eye-right-pon {
  left: 180px;
  top: 68px;
}
.eye-right-poff {
  left: 120px;
  top: 110px;
}
.pupil-right {
  position: absolute;
  width: 9px;
  height: 9px;
  background-color: var(--base);
  left: 35px;
  top: 40px;
  border-radius: 50%;
  animation: right-eye 3s linear 0s infinite;
}
.pupil-right-ron {
  border-radius: 0%;
}
.pupil-right-roff {
  border-radius: 50%;
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
.eye-left-ron {
  border-radius: 0%;
}
.eye-left-roff {
  border-radius: 50%;
}
.pupil-left {
  position: absolute;
  width: 9px;
  height: 9px;
  background-color: var(--base);
  left: 25px;
  top: 40px;
  border-radius: 50%;
  animation: right-eye 3s linear 0s infinite;
}
.pupil-left-ron {
  border-radius: 0%;
}
.pupil-left-roff {
  border-radius: 50%;
}
.head-base {
  position: absolute;
  top: 185px;
  left: 30px;
  width: 140px;
  height: 60px;
}
.head-base-con {
  background-color: red;
}
.head-base-coff {
  background-color: var(--skin);
}
.head-side {
  position: absolute;
  width: 40px;
  height: 60px;
  border-left: 1px solid var(--base);
}
.head-side-con {
  background-color: lightskyblue;
}
.head-side-coff {
  background-color: var(--skin);
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
  border-right: 1px solid var(--base);
  border-top: 1px solid var(--base);
  border-bottom: 1px solid var(--base);
}
.nose-ron {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.nose-roff {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.nose-con {
  background-color: greenyellow;
}
.nose-coff {
  background-color: var(--skin);
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
  border: 1px solid var(--base);
}
.mouth-ron {
  z-index: 1;
  border-radius: 0%;
}
.mouth-roff {
  border-radius: 50%;
}
.bottom-lip {
  position: absolute;
  width: 20px;
  height: 30px;
  border-right: 1px solid var(--base);
}
.bottom-lip-ron {
  border-radius: 0%;
}
.bottom-lip-roff {
  border-radius: 50%;
}
.bottom-lip-con {
  background-color: steelblue;
}
.bottom-lip-coff {
  background-color: var(--mouth);
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
}
.upper-lip-ron {
  border-top-right-radius: 0%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
}
.upper-lip-roff {
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 60%;
}

.upper-lip-con {
  background-color: blue;
}
.upper-lip-coff {
  background-color: var(--mouth);
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
  border-top: 1px solid var(--base);
}
.mouth-side-ron {
  z-index: 8;
  border-top-right-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
}
.mouth-side-roff {
  border-top-right-radius: 100%;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 100%;
}
.mouth-side-con {
  background-color: orange;
}
.mouth-side-coff {
  background-color: var(--mouth);
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
}
.mouth-upper-ron {
  z-index: 2;
  border-top-right-radius: 0%;
}
.mouth-upper-roff {
  border-top-right-radius: 70%;
}
.mouth-upper-con {
  background-color: teal;
}
.mouth-upper-coff {
  background-color: var(--mouth);
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
.mouth-mask-con {
  background-color: purple;
}
.mouth-mask-coff {
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
.neck-con {
  background-color: lightgrey;
}
.neck-coff {
  background-color: var(--skin);
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
  border: 1px solid var(--base);
}
.collar-left-ron {
  border-radius: 0%;
}
.collar-left-roff {
  border-radius: 10%;
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
.ear-ron {
  border-radius: 0%;
}
.ear-roff {
  border-radius: 50%;
}
.ear-con {
  background-color: salmon;
}
.ear-coff {
  background-color: var(--skin);
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
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}
.ear-inner-ron {
  border-left: 1px solid var(--base);
  border-radius: 0%;
}
.ear-inner-roff {
  border-left: 1px solid var(--base);
  border-radius: 50%;
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
