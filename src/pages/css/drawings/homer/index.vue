<script setup lang="ts">
</script>

<template>
  <!-- homer illustration -->
  <div id="drawing" class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <button @click="$router.push({ name: 'draw-homer' })"
      class="mb-10">Inspect</button>
    <div>
      <div class="head">
        <div class="forehead"></div>
            <div class="hair1"></div>
            <div class="hair2"></div>

            <div class="head-base"></div>

        <div class="eye-right">
            <div class="eye-right-pupil"></div>
        </div>
        <div class="eye-left">
            <div class="eye-left-pupil"></div>
        </div>

        <div class="neck"></div>

        <div class="mouth">
            <div class="bottom-lip"></div>
            <div class="upper-lip"></div>
        </div>
        <div class="mouth-side"></div>
        <div class="mouth-side-mask"></div>
        <div class="mouth-upper"></div>
        <div class="mouth-mask"></div>
        <div class="head-side"></div>

        <div class="ear">
            <div class="ear-inner">
            </div>
        </div>
        <div class="nose"></div>
        <div class="collar-left"></div>
        <div class="collar-right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#drawing {
  --bg: #DE433F ;
  --base: black;
  --neutral: white;
  --skin: #FED90F;
  --mouth: #D1B271
}
.bg {
  margin: 0;
  padding: 0;
  background: var(--bg);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade {
  opacity: 0.8;
}
.head {
  position: relative;
  width: 215px;
  height: 405px;
}
.forehead {
  position: absolute;
  top: 10px;
  width: 170px;
  height: 200px;
  border-radius: 60%/50%;
  transform: rotate(-18deg);
  background-color: var(--skin);
  border: 1px solid var(--base);
}
.hair1 {
  position: absolute;
  width: 80px;
  height: 70px;
  top: 15px;
  border-top: 2px solid var(--base);
  transform: rotate(-40deg);
  border-radius: 50%;
}
.hair2 {
  position: absolute;
  width: 80px;
  height: 70px;
  left: 10px;
  border-top: 2px solid var(--base);
  transform: rotate(-30deg);
  border-radius: 50%;
}
.eye-right {
  position: absolute;
  left: 120px;
  width: 75px;
  height: 75px;
  top: 110px;
  border-radius: 50%;
  background-color: var(--neutral);
  border: 1px solid var(--base);
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
  top: 165px;
  left: 23px;
  position: absolute;
  width: 40px;
  height: 60px;
  background-color: var(--skin);
  transform: rotate(-11deg);
  border-left: 1px solid var(--base);
}
.nose {
  position: absolute;
  width: 60px;
  height: 32px;
  background-color: var(--skin);
  top: 172px;
  left: 130px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-right: 1px solid var(--base);
  border-top: 1px solid var(--base);
  border-bottom: 1px solid var(--base);
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
  top: 62px;
  left: 98px;
  border-radius: 50%;
  border-right: 1px solid var(--base);
  transform: rotate(15deg);
}
.upper-lip {
  position: absolute;
  width: 120px;
  height: 60px;
  background-color: var(--mouth);
  top: 21px;
  left: 31px;
  border-right: 1px solid var(--base);
  border-bottom: 1px solid var(--base);
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 60%;
  transform: rotate(-6deg);
    /* z-index: -1; */
}
.mouth-side {
  position: absolute;
  width: 35px;
  height: 40px;
  background-color: var(--mouth);
  top: 230px;
  left: 166px;
  border-top-right-radius: 5%;
  border-top: 1px solid var(--base);
  border-bottom-right-radius: 100%;
  transform: rotate(40deg);
}
.mouth-side-mask {
  content: "";
  position: absolute;
  width: 35px;
  height: 5px;
  background-color: var(--bg);
  top: 236px;
  left: 187px;
  border-top-right-radius: 5%;
  transform: rotate(40deg);
}
.mouth-upper {
  position: absolute;
  width: 60px;
  height: 30px;
  background-color: var(--mouth);
  top: 200px;
  left: 130px;
  border-top: 1px solid var(--base);
  border-right: 1px solid var(--base);
  border-top-right-radius: 70%;
}
.mouth-mask {
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: var(--mouth);
  top: 250px;
  left: 80px;
}
.neck {
  position: absolute;
  width: 125px;
  height: 150px;
  background-color: var(--skin);
  top: 200px;
  left: 28px;
  border-left: 1px solid var(--base);
  border-right: 1px solid var(--base);
  transform: rotate(2deg);
}
.collar-left {
  position: absolute;
  width: 110px;
  height: 60px;
  background-color: var(--neutral);
  top: 330px;
  left: 10px;
  transform: rotate(15deg);
  border-radius: 10%;
  border: 1px solid var(--base);
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
.ear {
  position: absolute;
  width: 32px;
  height: 37px;
  background-color: var(--skin);
  top: 200px;
  left: 10px;
  border-radius: 50%;
  transform: rotate(10deg);
  border: 1px solid var(--base);
}
.ear-inner {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 8px;
    left: 8px;
    border-left: 1px solid var(--base);
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
}

</style>
