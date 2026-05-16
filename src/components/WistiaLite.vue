<script setup lang="ts">
// Lazy Wistia embed: a designed poster card until clicked, then the real
// iframe swaps in. Keeps 30+ demo videos off the initial page load.
import { ref } from 'vue'
import { asset } from '../data/content'

const props = withDefaults(defineProps<{ id: string; label?: string; ratio?: string }>(), {
  label: '',
  ratio: '16 / 10',
})

const playing = ref(false)
// Self-hosted poster. The Wistia iframe (third-party) loads only on click.
const swatch = asset(`poster-${props.id}`)
const src = `https://fast.wistia.net/embed/iframe/${props.id}?seo=false&videoFoam=false&playerColor=43adf4`
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-2xl border border-ink/10 bg-[#0c0c0e]"
    :style="{ aspectRatio: ratio }"
  >
    <iframe
      v-if="playing"
      :src="src"
      title="Demo video"
      class="absolute inset-0 size-full"
      allow="autoplay; fullscreen"
      allowfullscreen
      frameborder="0"
    ></iframe>

    <button
      v-else
      type="button"
      class="group absolute inset-0 block size-full text-left"
      :aria-label="label ? `Play demo: ${label}` : 'Play demo video'"
      @click="playing = true"
    >
      <img
        :src="swatch"
        alt=""
        aria-hidden="true"
        loading="lazy"
        class="absolute inset-0 size-full scale-[1.08] object-cover saturate-[1.15] transition-transform duration-700 ease-fluid group-hover:scale-[1.14]"
      />
      <span
        aria-hidden="true"
        class="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_38%,rgba(9,9,10,0.15),rgba(9,9,10,0.88))]"
      ></span>
      <span
        aria-hidden="true"
        class="absolute top-1/2 left-1/2 grid size-[3.6rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-canvas shadow-[0_14px_36px_-10px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-fluid group-hover:scale-110"
      >
        <svg class="ml-0.5 size-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.2v13.6L19 12 8 5.2z" />
        </svg>
      </span>
      <span v-if="label" class="absolute inset-x-4 bottom-3.5 flex flex-col gap-1">
        <span class="text-[0.6rem] font-semibold tracking-[0.2em] text-accent uppercase">
          Watch demo
        </span>
        <span class="font-display text-[1.02rem] font-medium tracking-[-0.01em] text-ink">
          {{ label }}
        </span>
      </span>
    </button>
  </div>
</template>
