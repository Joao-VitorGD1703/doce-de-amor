<script setup>
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
});

const getButtonClass = () => {
  let baseClass = 'rounded-md font-bold focus:outline-none focus:shadow-outline';

  const variantClass = {
    primary: 'bg-bg-5 hover:bg-blue-700 text-tx-4 font-semibold',
    secondary: 'bg-bg-2 hover:bg-blue-700 text-tx-5 font-semibold',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
  }[props.variant];

  const sizeClass = {
    sm: 'px-2 py-1 text-sm w-4/6 mx-2 my-2',
    md: 'px-4 py-2 text-base w-4/6 mx-2 my-2',
    lg: 'px-6 py-3 text-lg w-4/6 mx-2 my-2',
  }[props.size];

  return `${baseClass} ${variantClass} ${sizeClass}`;
};
</script>

<template>
  <button :type="type" :class="getButtonClass()">
    {{ label }}
  </button>
</template>

<style scoped>
</style>
