<script setup lang="ts">
import WistiaLite from './WistiaLite.vue'
import type { TemplateBlock } from '../data/content'

defineProps<{ block: TemplateBlock; flip?: boolean }>()
</script>

<template>
  <article class="mt-24 first:mt-12 max-md:mt-16">
    <div class="grid grid-cols-[0.82fr_1.18fr] items-center gap-12 max-md:grid-cols-1 max-md:gap-7">
      <div v-reveal :class="flip ? 'md:order-2' : ''">
        <div class="flex flex-col">
          <span
            class="font-display text-[clamp(2.6rem,5vw,3.8rem)] leading-none font-semibold tracking-[-0.04em] text-accent"
          >
            {{ block.count }}
          </span>
          <span class="mt-2 font-display text-[1.35rem] font-medium tracking-[-0.01em]">
            {{ block.name }}
          </span>
        </div>
        <p class="mt-[1.1rem] text-[0.98rem] text-ink/62">{{ block.copy }}</p>
        <div class="mt-6 border-t border-ink/10 pt-[1.4rem]">
          <span
            class="mb-3 block text-[0.62rem] font-semibold tracking-[0.2em] text-ink/38 uppercase"
          >
            Works with every major editor
          </span>
          <div class="max-w-[19rem] rounded-2xl border border-ink/10 bg-ink/[0.025] p-1.5">
            <img
              :src="block.software"
              :alt="`Software compatible with ${block.name}`"
              loading="lazy"
              class="w-full rounded-[0.85rem]"
            />
          </div>
        </div>
      </div>

      <div v-reveal="80" class="bezel">
        <div class="bezel-core overflow-hidden p-2">
          <WistiaLite :id="block.banner" ratio="16 / 9" />
        </div>
      </div>
    </div>

    <div v-if="block.grid" v-reveal="60" class="bezel mt-3">
      <div class="bezel-core overflow-hidden p-[0.9rem]">
        <span
          class="block px-1 pt-1 pb-3 text-[0.66rem] font-semibold tracking-[0.16em] text-ink/38 uppercase"
        >
          A glimpse inside our {{ block.name }}
        </span>
        <img
          :src="block.grid"
          :alt="`${block.name} showcase`"
          loading="lazy"
          class="w-full rounded-2xl border border-ink/10"
        />
      </div>
    </div>
  </article>
</template>
