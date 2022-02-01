<script setup lang="ts">
import { ref, unref, computed } from 'vue'
import { nanoid } from 'nanoid'
import { bind } from '@baleada/vue-features'

const inputClasses = 'w-full b-slate-200 bg-slate-100 text-xs py-2 px-3'
const defaultClasses = 'transition-all duration-200 bg-slate-200 p-3 hover:bg-slate-100 cursor-pointer rounded-lg text-slate-500 hover:texxt-slate-700 shadow-sm hover:shadow-lg'

const output = ref(null)
const inputValue = ref('')

const appliedClasses = computed(() => `transition-all duration-200 ${unref(inputValue)}`)

bind({
  element: output,
  values: {
    class: appliedClasses,
    ariaLabel: new Date(),
    dataName: nanoid(),
  }
});

function clear() {
  inputValue.value = '';
}
function applyDefaults() {
  inputValue.value = defaultClasses
}
</script>

<template>
  <div class="m-10 flex flex-col items-center justify-center space-y-5">
    <span class="text-slate-300 text-sm">
      bg-slate-200 hover:bg-slate-100 p-3 cursor-pointer text-slate-500 rounded-lg
    </span>
    <input
      v-model="inputValue"
      type="text"
      :class="inputClasses"
      placeholder="Add Classes" />
    <div class="flex space-x-5">
      <button ref="btn1" @click="clear">Clear</button>
      <button ref="btn2" @click="applyDefaults">Default</button>
    </div>
    <div class="border-8 border-slate-100 border-dashed mt-10 p-10
      min-w-444 min-h-333 flex justify-center items-center">
      <div ref="output">Test</div>
    </div>
  </div>
</template>

<route>
{
  "name": "vue3-baleada-vbind"
}
</route>

<style scoped>
</style>
