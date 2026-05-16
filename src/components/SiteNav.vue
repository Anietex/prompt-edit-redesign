<script setup lang="ts">
// Sales-page nav: deliberately stripped. No section links, so the only paths
// forward are the offer and a login. Fewer exits, higher conversion.
import { ref, onMounted, onUnmounted } from 'vue'
import CtaButton from './CtaButton.vue'
import BrandMark from './BrandMark.vue'

const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 24)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-[80] flex justify-center px-5 transition-all duration-500 ease-fluid"
    :class="scrolled ? 'pt-3' : 'pt-6'"
  >
    <nav
      class="flex w-full max-w-[1080px] items-center justify-between gap-6 rounded-full border py-2 pr-2 pl-6 backdrop-blur-xl transition-colors duration-500 ease-fluid"
      :class="scrolled ? 'border-ink/15 bg-canvas/85' : 'border-ink/8 bg-canvas/55'"
      aria-label="Primary"
    >
      <a href="#top" aria-label="Prompt Edit, back to top">
        <BrandMark />
      </a>

      <div class="flex items-center gap-5">
        <span class="hidden items-center gap-2 text-[0.8rem] text-ink/55 sm:flex">
          <span class="size-[7px] rounded-full bg-accent animate-pulse-dot"></span>
          Exclusive offer live
        </span>
        <a
          href="#pricing"
          class="text-[0.9rem] text-ink/55 transition-colors duration-300 hover:text-ink"
        >
          Log in
        </a>
        <CtaButton label="Get Started" href="#pricing" />
      </div>
    </nav>
  </header>
</template>
