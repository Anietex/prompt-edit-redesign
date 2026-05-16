<script setup lang="ts">
import { img } from '../../data/content'
import CtaButton from '../CtaButton.vue'

const points: string[] = [
  'Cancel your membership at any time. No contracts, no friction.',
  'Within 30 days of signing up, get a full refund on your purchase.',
  'Unused credits are refundable. Spent credits are like burned gas, fair and simple.',
]
</script>

<template>
  <section class="section">
    <div class="wrap">
      <div v-reveal class="bezel">
        <div
          class="bezel-core relative grid grid-cols-[0.78fr_1.22fr] items-center gap-[clamp(2rem,5vw,4rem)] overflow-hidden bg-gradient-to-br from-accent/[0.05] to-raised p-[clamp(2rem,5vw,3.6rem)] max-md:grid-cols-1"
        >
          <span
            aria-hidden="true"
            class="absolute -top-56 -left-32 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(67,173,244,0.28),transparent_68%)] blur-[60px]"
          ></span>

          <div class="relative grid place-items-center">
            <img
              :src="img.guarantee"
              alt="100% Money-Back Satisfaction Guarantee"
              class="w-full max-w-[17rem] animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] max-md:max-w-[12rem]"
            />
          </div>

          <div class="relative">
            <span class="eyebrow">
              <span class="size-[5px] rounded-full bg-accent"></span>Zero-risk promise
            </span>
            <h2 class="mt-5 text-h2">
              Try it. If it's not for you,<br />
              you pay <span class="text-accent">nothing.</span>
            </h2>
            <p class="mt-5 max-w-[34rem] text-[1.02rem] text-ink/62">
              Prompt Edit is built on customer satisfaction. Your purchase is backed by a 100%
              money-back satisfaction guarantee. The only thing you can lose is the subscriptions
              you're about to cancel.
            </p>
            <ul class="mt-6 flex flex-col gap-3.5">
              <li
                v-for="p in points"
                :key="p"
                class="flex items-start gap-3 text-[0.94rem] text-ink/62"
              >
                <span
                  class="mt-px grid size-[1.35rem] shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/12 text-accent"
                >
                  <svg
                    class="size-[0.85rem]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.1"
                  >
                    <path d="M5 13l4 4 10-11" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                {{ p }}
              </li>
            </ul>
            <div class="mt-8">
              <CtaButton label="Get Started risk-free" href="#pricing" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
