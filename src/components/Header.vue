<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative bg-bg-4 h-12 shadow-md ">
    <button @click="toggleMenu" class="block lg:hidden p-3 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 bg-transparent text-tx-1 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    
    <nav :class="{'block': isOpen, 'hidden': !isOpen}" class="absolute shadow-md w-full top-full left-0 lg:block lg:static lg:w-auto lg:bg-transparent">
      <ul class="flex flex-col lg:flex-row lg:space-x-4">
        <li><a href="#" class="block px-4 bg-bg-4 text-tx-1 py-2">Home</a></li>
        <li><a href="#" class="block px-4 bg-bg-4 text-tx-1 py-2">About</a></li>
        <li><a href="#" class="block px-4 bg-bg-4 text-tx-1 py-2">Services</a></li>
        <li><a href="#" class="block px-4 bg-bg-4 text-tx-1 py-2">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
</style>
