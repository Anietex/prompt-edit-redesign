<script setup lang="ts">
import WistiaLite from './WistiaLite.vue'
import type { Toolkit } from '../data/content'

const props = defineProps<{ kit: Toolkit; flip?: boolean }>()
const single = props.kit.demos.length === 1
</script>

<template>
  <article class="mt-24 first:mt-12 max-md:mt-16">
    <div class="grid grid-cols-[1.05fr_0.95fr] items-center gap-12 max-lg:grid-cols-1 max-lg:gap-7">
      <div v-reveal class="bezel" :class="flip ? 'lg:order-2' : ''">
        <div
          class="bezel-core relative grid min-h-[15rem] place-items-center overflow-hidden p-8 max-md:p-6"
        >
          <span
            aria-hidden="true"
            class="absolute size-[62%] rounded-full bg-[radial-gradient(circle,rgba(67,173,244,0.13),transparent_70%)] blur-[50px]"
          ></span>
          <img
            :src="kit.image"
            :alt="kit.kicker"
            loading="lazy"
            class="relative max-h-[20rem] w-full object-contain"
          />
        </div>
      </div>

      <div v-reveal="80">
        <span class="text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase">
          {{ kit.kicker }}
        </span>
        <h3 class="mt-4 text-[clamp(1.7rem,3vw,2.5rem)] font-medium">{{ kit.title }}</h3>
        <p class="mt-4 max-w-[32rem] text-[1rem] text-ink/62">{{ kit.blurb }}</p>
        <p class="mt-6 flex items-center gap-2.5 text-[0.82rem] text-ink/38">
          <span
            class="size-1.5 rounded-full bg-accent shadow-[0_0_10px_1px_rgba(67,173,244,0.7)]"
          ></span>
          {{ kit.demos.length }} {{ single ? 'live demo' : 'live demos' }}, ready to play
        </p>
      </div>
    </div>

    <div
      class="mt-6 grid gap-4"
      :class="
        single
          ? 'mx-auto max-w-[880px] grid-cols-1'
          : 'grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'
      "
    >
      <div v-for="(demo, i) in kit.demos" :key="demo.id" v-reveal="i * 60">
        <WistiaLite :id="demo.id" :label="demo.label" :ratio="single ? '16 / 9' : '16 / 10'" />
      </div>
    </div>
  </article>
</template>
