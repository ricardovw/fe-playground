<script setup lang="ts">
import { ref, unref, computed, resolveComponent } from 'vue'
import { model, bind } from '@baleada/vue-features'

const input = ref(null)
const modelValue = ref('')

const phrase = 'I got some defaults...'
let typed = ''

model({ element: input, modelValue });

function clear() {
  modelValue.value = '';
  typed = '';
}

async function applyDefaults() {
  for (let letter of phrase) {
    await new Promise((resolve) => {
      setTimeout(() => {
        typed += letter
        modelValue.value = typed
        resolve(letter)
      }, 88)
    })
  }
}
</script>

<template>
  <div class="m-10 flex flex-col items-center justify-center space-y-5">
    <span class="text-slate-300 text-sm">
      Two way data binding affordance for template refs
    </span>
    <input
      ref="input"
      type="text"
      placeholder="Input sth..." />
    <div class="flex space-x-5">
      <button ref="btn1" @click="clear">Clear</button>
      <button ref="btn2" @click="applyDefaults">Default</button>
    </div>
    <div class="border-8 border-slate-100 border-dashed mt-10 p-10
      min-w-444 flex justify-center items-center">
      <div ref="output">{{ modelValue }}</div>
    </div>
  </div>
</template>

<route>
{
  "name": "vue3-baleada-vmodel"
}
</route>

<style scoped>
</style>
