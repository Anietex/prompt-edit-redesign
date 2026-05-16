<script setup lang="ts">
import { soundCompare, soundSamples } from '../../data/content'
import WistiaLite from '../WistiaLite.vue'
import SectionHeading from '../SectionHeading.vue'
</script>

<template>
  <section class="section">
    <div class="wrap">
      <SectionHeading v-reveal eyebrow="Hear the difference">
        Sound is half the edit.
        <template #lead>
          The same footage feels amateur or cinematic depending on one thing: the sound design.
          Watch both versions back to back, then dig through a few categories from the 60,000-strong
          library.
        </template>
      </SectionHeading>

      <div class="mt-12 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <figure v-for="(v, i) in soundCompare" :key="v.id" v-reveal="i * 110" class="bezel">
          <div class="bezel-core overflow-hidden px-2 pt-2">
            <WistiaLite :id="v.id" ratio="16 / 9" />
            <figcaption
              class="flex items-center gap-2.5 px-1.5 pt-4 pb-3.5 text-[0.92rem] text-ink/62"
            >
              <span
                class="grid size-[1.6rem] place-items-center rounded-full border border-accent/30 bg-accent/12 font-display text-[0.78rem] font-semibold text-accent"
              >
                {{ i === 0 ? 'A' : 'B' }}
              </span>
              {{ v.label }}
            </figcaption>
          </div>
        </figure>
      </div>

      <div v-reveal class="mt-[clamp(3.5rem,6vw,5rem)] text-center">
        <h3 class="text-[clamp(1.5rem,3vw,2.1rem)] font-medium">Listen to a few of our sounds</h3>
        <p class="mt-3 text-[0.95rem] text-ink/62">
          Every sound is studio-made and drag-and-drop ready in any editor.
        </p>
      </div>

      <div class="mt-8 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div v-for="(s, i) in soundSamples" :key="s.id" v-reveal="i * 60">
          <WistiaLite :id="s.id" :label="s.label" ratio="16 / 10" />
        </div>
      </div>
    </div>
  </section>
</template>
