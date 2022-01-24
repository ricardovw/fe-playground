<script setup lang="ts">
</script>

<template>
  <!-- batman symbol -->
  <div class="w-full h-screen transition-all duration-300
    flex flex-col justify-center items-center bg">
    <button @click="$router.push({ name: 'draw-batman' })"
      class="mb-10">Inspect</button>
    <div class="oval" id="drawing">
      <div class="batman">
        <div class="maskA"></div>
        <div class="maskB"></div>
        <div class="maskC"></div>
        <div class="maskD"></div>
        <div class="maskE"></div>
        <div class="maskF"></div>
        <div class="maskG"></div>
        <div class="maskI"></div>
        <div class="maskH"></div>
      </div>
    </div>
  </div>
</template>

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
  overflow: hidden;
}
.batman {
  position: absolute;
  width: 212px;
  height: 112px;
  border-radius: 50%;
  background-color: var(--base);
}
.maskA {
  position: absolute;
  background-color: var(--primary);
  width: 33px;
  height: 70px;
  border-radius: 50%;
  top: 67px;
  left: 44px;
  transform: rotate(-41deg);
}
.maskB {
  position: absolute;
  background-color: var(--primary);
  width: 33px;
  height: 70px;
  border-radius: 50%;
  top: 67px;
  right: 44px;
  transform: rotate(41deg);
}
.maskC {
  position: absolute;
  width: 38px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary);
  top: 73px;
  left: 68px;
  transform: rotate(-15deg);
}
.maskD {
  position: absolute;
  width: 38px;
  height: 70px;
  border-radius: 50%;
  background-color: var(--primary);
  top: 73px;
  right: 68px;
  transform: rotate(15deg);
}
.maskE {
  position: absolute;
  width: 37px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  top: 0;
  left: 57px;
}
.maskF {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  top: 0;
  left: 74px;
}
.maskG {
  position: absolute;
  width: 37px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  top: 0;
  right: 57px;
}
.maskI {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  top: 0;
  right: 74px;
}
.maskH {
  position: absolute;
  top: 0;
  left: 95px;
  border-bottom: 12px solid var(--primary);
  border-left: 6px solid var(--base);
  border-right: 6px solid var(--base);
  width: 22px;
  transform: rotate(180deg);
}
</style>
