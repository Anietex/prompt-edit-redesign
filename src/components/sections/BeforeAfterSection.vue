<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { img } from '../../data/content'
import CtaButton from '../CtaButton.vue'
import SectionHeading from '../SectionHeading.vue'

const root = ref<HTMLElement | null>(null)
const pos = ref(50)
let dragging = false

const update = (clientX: number | undefined) => {
  if (!root.value || clientX === undefined) return
  const r = root.value.getBoundingClientRect()
  pos.value = Math.min(97, Math.max(3, ((clientX - r.left) / r.width) * 100))
}
const pointFrom = (e: PointerEvent | TouchEvent): number | undefined =>
  'clientX' in e ? e.clientX : e.touches[0]?.clientX

const onDown = (e: PointerEvent | TouchEvent) => {
  dragging = true
  update(pointFrom(e))
}
const onMove = (e: PointerEvent | TouchEvent) => {
  if (dragging) update(pointFrom(e))
}
const onUp = () => {
  dragging = false
}
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') pos.value = Math.max(3, pos.value - 4)
  if (e.key === 'ArrowRight') pos.value = Math.min(97, pos.value + 4)
}

onMounted(() => {
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', onUp)
  window.addEventListener('touchmove', onMove, { passive: true })
  window.addEventListener('touchend', onUp)
})
onUnmounted(() => {
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerup', onUp)
  window.removeEventListener('touchmove', onMove)
  window.removeEventListener('touchend', onUp)
})
</script>

<template>
  <section class="section">
    <div class="wrap">
      <SectionHeading v-reveal eyebrow="The transformation">
        Your workflow, before and<br />after <span class="text-accent">one login.</span>
        <template #lead>
          On the left, the scattered reality most creators live in. On the right, the same work:
          consolidated, calmer, cheaper. Drag the handle and see it for yourself.
        </template>
      </SectionHeading>

      <div v-reveal="80" class="bezel mt-12">
        <div class="bezel-core overflow-hidden p-2">
          <div
            ref="root"
            class="relative aspect-[1732/810] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-2xl bg-canvas"
            @pointerdown="onDown"
            @touchstart="onDown"
          >
            <img
              :src="img.after"
              alt="After Prompt Edit"
              draggable="false"
              class="absolute inset-0 size-full object-cover"
            />
            <img
              :src="img.before"
              alt="Before Prompt Edit"
              draggable="false"
              class="absolute inset-0 size-full object-cover"
              :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }"
            />

            <span
              class="absolute top-4 left-4 rounded-full border border-ink/15 bg-[#0e0e10]/80 px-3 py-1.5 text-[0.66rem] font-bold tracking-[0.16em] text-ink/62 uppercase backdrop-blur-sm transition-opacity duration-300"
              :style="{ opacity: pos > 14 ? 1 : 0 }"
            >
              Before
            </span>
            <span
              class="absolute top-4 right-4 rounded-full bg-ink px-3 py-1.5 text-[0.66rem] font-bold tracking-[0.16em] text-canvas uppercase transition-opacity duration-300"
              :style="{ opacity: pos < 86 ? 1 : 0 }"
            >
              After
            </span>

            <div
              class="absolute inset-y-0 flex w-0 items-center justify-center"
              :style="{ left: `${pos}%` }"
            >
              <span
                class="absolute inset-y-0 w-0.5 bg-accent shadow-[0_0_16px_1px_rgba(67,173,244,0.6)]"
              ></span>
              <button
                type="button"
                role="slider"
                tabindex="0"
                aria-label="Reveal before and after"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-valuenow="Math.round(pos)"
                class="relative grid size-12 cursor-ew-resize place-items-center rounded-full bg-ink text-canvas shadow-[0_10px_30px_-8px_rgba(0,0,0,0.8)] max-sm:size-10"
                @keydown="onKey"
              >
                <svg
                  class="size-[1.3rem]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    d="M14 7l-5 5 5 5M10 7l5 5-5 5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
        <p class="font-display text-[1.15rem] text-ink/62">Stop paying for the mess on the left.</p>
        <CtaButton label="Switch to Prompt Edit" href="#pricing" />
      </div>
    </div>
  </section>
</template>
