<script setup lang="ts">
import { img } from '../data/content'

withDefaults(defineProps<{ size?: 'sm' | 'lg' }>(), { size: 'sm' })
</script>

<template>
  <img
    :src="img.logo"
    alt="Prompt Edit"
    class="w-auto"
    :class="size === 'lg' ? 'h-7' : 'h-[1.4rem]'"
  />
</template>
