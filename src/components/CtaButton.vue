<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    href?: string
    variant?: 'solid' | 'ghost'
    size?: 'md' | 'lg'
    /** Stretch full-width with the label and icon pushed to opposite ends. */
    block?: boolean
  }>(),
  { label: 'Get Started Today', href: '#pricing', variant: 'solid', size: 'md', block: false },
)

const solid = computed(() => props.variant === 'solid')
const lg = computed(() => props.size === 'lg')
</script>

<template>
  <a
    :href="href"
    class="group flex items-center rounded-full font-semibold transition-all duration-500 ease-fluid active:scale-[0.98]"
    :class="[
      block ? 'w-full justify-between' : 'w-max gap-3 whitespace-nowrap',
      lg ? 'py-2 pr-2 pl-7 text-[1.05rem]' : 'py-1.5 pr-1.5 pl-5 text-[0.95rem]',
      solid
        ? 'bg-ink text-canvas shadow-[0_16px_44px_-18px_rgba(236,233,226,0.5)] hover:bg-white hover:shadow-[0_20px_52px_-16px_rgba(236,233,226,0.6)]'
        : 'border border-ink/15 bg-ink/[0.04] text-ink hover:border-ink/25 hover:bg-ink/[0.09]',
    ]"
  >
    <span>{{ label }}</span>
    <span
      aria-hidden="true"
      class="grid place-items-center rounded-full transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      :class="[
        lg ? 'size-11' : 'size-9',
        solid ? 'bg-canvas/15' : 'border border-ink/10 bg-ink/[0.08]',
      ]"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </a>
</template>
