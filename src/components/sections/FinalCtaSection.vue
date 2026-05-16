<script setup lang="ts">
import CtaButton from '../CtaButton.vue'

const stack: string[] = [
  'Every major AI model for image, video and audio',
  '$110 of credits, or $49 every month on the membership',
  'The full 100,000+ Content Creator Templates Library',
  'Faster generations, commercial rights, no subscriptions',
]
</script>

<template>
  <section id="final" class="section">
    <div class="wrap">
      <div v-reveal class="bezel">
        <div
          class="bezel-core relative overflow-hidden bg-gradient-to-b from-accent/[0.06] to-raised px-[clamp(1.6rem,5vw,4rem)] py-[clamp(2.6rem,6vw,5.5rem)] text-center"
        >
          <span
            aria-hidden="true"
            class="absolute -top-80 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(67,173,244,0.32),transparent_65%)] blur-[60px]"
          ></span>

          <span
            class="relative inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.08] px-4 py-2 text-[0.78rem] font-semibold text-accent"
          >
            <span
              class="size-[7px] rounded-full bg-accent [animation:pulse-dot_2.4s_var(--ease-fluid)_infinite]"
            ></span>
            This exclusive offer won't be here long
          </span>

          <h2 class="relative mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">
            Everything you need to<br />
            create with AI, <span class="text-accent">today.</span>
          </h2>

          <ul class="relative mx-auto mt-9 flex max-w-[30rem] flex-col gap-2.5 text-left">
            <li
              v-for="item in stack"
              :key="item"
              class="flex items-start gap-3 text-[0.96rem] text-ink/62"
            >
              <span
                class="mt-px grid size-[1.4rem] shrink-0 place-items-center rounded-full bg-accent text-[#04121d]"
              >
                <svg
                  class="size-[0.85rem]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                >
                  <path d="M5 13l4 4 10-11" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>

          <div class="relative mt-10 flex justify-center">
            <CtaButton label="Get Started Today" href="#pricing" size="lg" />
          </div>
          <p class="relative mt-5 text-[0.82rem] text-ink/38">
            One payment from $39 · 100% money-back guarantee · cancel anytime
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
