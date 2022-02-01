<script setup lang="ts">
import { ref, unref, computed } from 'vue'
import { on, bind } from '@baleada/vue-features'

const counter = ref(0);
const btn = ref(null);

const vOnCounter = (): number => counter.value++

on({
  element: btn,
  effects: {
    click: vOnCounter,
    'cmd+shift+o': vOnCounter,
  }
})
</script>

<template>
  <div class="m-10 flex items-center space-x-5">
    <button ref="btn">Increase</button>
    <p>Count: {{ counter }}</p>
  </div>
</template>

<route>
{
  "name": "vue3-baleada-von"
}
</route>

<style scoped>
</style>
