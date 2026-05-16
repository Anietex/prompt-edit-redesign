<script setup lang="ts">
import { testimonials } from '../../data/content'
import SectionHeading from '../SectionHeading.vue'

const initials = (name: string): string =>
  name
    .split(' ')
    .map((p) => p[0] ?? '')
    .join('')
    .slice(0, 2)
</script>

<template>
  <section class="section">
    <div class="wrap">
      <SectionHeading v-reveal eyebrow="From the community" align="center">
        Creators are getting weeks back.
      </SectionHeading>

      <div class="mt-12 grid grid-cols-3 gap-5 max-md:grid-cols-1">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name"
          v-reveal="i * 100"
          class="flex flex-col rounded-bezel border border-ink/10 bg-ink/[0.02] p-8 max-md:p-6"
        >
          <span class="font-display text-[2.6rem] leading-[0.4] text-accent" aria-hidden="true">
            &rdquo;
          </span>
          <blockquote
            class="mt-6 grow font-display text-[1.18rem] leading-[1.4] font-medium tracking-[-0.015em]"
          >
            {{ t.quote }}
          </blockquote>
          <figcaption class="mt-8 flex items-center gap-3 border-t border-ink/10 pt-6">
            <span
              class="grid size-[2.6rem] shrink-0 place-items-center overflow-hidden rounded-full border border-ink/15 bg-ink/[0.05] text-[0.8rem] font-semibold text-ink/62"
            >
              <img
                v-if="t.image"
                :src="t.image"
                :alt="t.name"
                loading="lazy"
                class="size-full object-cover"
              />
              <span v-else>{{ initials(t.name) }}</span>
            </span>
            <span class="flex flex-col">
              <span class="text-[0.92rem] font-semibold">{{ t.name }}</span>
              <span class="text-[0.78rem] text-ink/38">{{ t.role }}</span>
            </span>
            <span class="ml-auto text-[0.7rem] tracking-[0.1em] text-accent" aria-hidden="true">
              ★★★★★
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
