<script setup lang="ts">
import { toolkits } from '../../data/content'
import ToolCategory from '../ToolCategory.vue'
import CtaButton from '../CtaButton.vue'
import SectionHeading from '../SectionHeading.vue'
</script>

<template>
  <section id="toolkit" class="section">
    <div class="wrap">
      <SectionHeading v-reveal eyebrow="What you can create">
        Four creative departments.<br />One credit balance.
        <template #lead>
          Image, video, audio and editing plugins. Every department of a modern studio, all spending
          from the same pool of credits. Press play on any demo below and watch it work.
        </template>
      </SectionHeading>

      <ToolCategory v-for="(kit, i) in toolkits" :key="kit.id" :kit="kit" :flip="i % 2 === 1" />

      <div
        v-reveal
        class="mt-[clamp(3.5rem,6vw,5rem)] flex flex-wrap items-center justify-between gap-5 rounded-bezel border border-ink/10 bg-ink/[0.02] p-8"
      >
        <p class="max-w-[28rem] text-[1.05rem] text-ink/62">
          Whatever launches next, we add it. Your credits already cover it.
        </p>
        <CtaButton label="Unlock every tool" href="#pricing" size="lg" />
      </div>
    </div>
  </section>
</template>
