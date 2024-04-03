import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', () => {

  const enhance = ref(40)
  const exposure = ref(50)

  return { enhance, exposure }
})
