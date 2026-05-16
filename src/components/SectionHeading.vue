<script setup lang="ts">
// The eyebrow + heading + lead cluster shared by most sections.
// Heading content goes in the default slot; optional lead copy in #lead.
withDefaults(defineProps<{ eyebrow: string; align?: 'left' | 'center' }>(), {
  align: 'left',
})
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-[40rem] text-center' : 'max-w-[42rem]'">
    <span class="eyebrow">
      <span class="size-[5px] rounded-full bg-accent" />
      {{ eyebrow }}
    </span>
    <h2 class="mt-6 text-h2">
      <slot />
    </h2>
    <p v-if="$slots.lead" class="mt-6 text-lead text-ink/62">
      <slot name="lead" />
    </p>
  </div>
</template>
