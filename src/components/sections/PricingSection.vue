<script setup lang="ts">
import { plans, img } from '../../data/content'
import CtaButton from '../CtaButton.vue'
import SectionHeading from '../SectionHeading.vue'
</script>

<template>
  <section id="pricing" class="section">
    <div class="wrap">
      <SectionHeading v-reveal eyebrow="Pricing" align="center">
        Two ways in. Both built to save you money.
        <template #lead>
          Top up once, or go all-in monthly and unlock the bonuses. Either way you are covered by a
          30-day money-back guarantee.
        </template>
      </SectionHeading>

      <div class="mt-14 grid grid-cols-[1fr_1.08fr] items-stretch gap-5 max-md:grid-cols-1">
        <article
          v-for="(plan, i) in plans"
          :key="plan.id"
          v-reveal="i * 110"
          class="relative flex flex-col rounded-bezel border p-9 max-md:p-7"
          :class="
            plan.featured
              ? 'border-accent/25 bg-gradient-to-b from-accent/[0.06] to-raised'
              : 'border-ink/10 bg-ink/[0.02]'
          "
        >
          <div class="flex flex-col gap-3.5">
            <span
              class="self-start rounded-full px-3 py-1.5 text-[0.66rem] font-semibold tracking-[0.16em] uppercase"
              :class="
                plan.featured
                  ? 'bg-accent text-[#04121d]'
                  : 'border border-ink/15 bg-ink/[0.04] text-ink/62'
              "
            >
              {{ plan.badge }}
            </span>
            <h3 class="font-display text-[1.5rem] font-semibold tracking-[-0.02em]">
              {{ plan.name }}
            </h3>
          </div>

          <div class="mt-6 flex items-baseline gap-2.5 border-b border-ink/10 pb-6">
            <span
              class="font-display text-[clamp(3.2rem,7vw,4.2rem)] leading-none font-semibold tracking-[-0.04em]"
            >
              {{ plan.price }}
            </span>
            <span class="text-[0.9rem] tracking-[0.04em] text-ink/38">{{ plan.cadence }}</span>
          </div>

          <p class="mt-6 font-display text-[1.12rem] font-medium tracking-[-0.01em]">
            {{ plan.headline }}
          </p>
          <p class="mt-2 text-[0.92rem] text-ink/62">{{ plan.sub }}</p>

          <ul class="mt-6 flex flex-col gap-3.5">
            <li
              v-for="f in plan.features"
              :key="f"
              class="flex items-start gap-3 text-[0.93rem] text-ink/62"
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
              {{ f }}
            </li>
          </ul>

          <CtaButton
            class="mt-8"
            block
            href="#final"
            :label="plan.cta"
            :variant="plan.featured ? 'solid' : 'ghost'"
          />

          <p v-if="plan.featured" class="mt-3.5 text-center text-[0.78rem] text-ink/38">
            Easily cancel at any time. No contracts.
          </p>
        </article>
      </div>

      <div v-reveal="60" class="bezel mt-6">
        <div class="bezel-core grid place-items-center p-[clamp(1.2rem,3vw,2.2rem)]">
          <img
            :src="img.payments"
            alt="Accepted payment methods: Apple Pay, Visa, Amex, Discover, Mastercard, PayPal, Google Pay"
            loading="lazy"
            class="w-full max-w-[720px] object-contain"
          />
        </div>
      </div>

      <p v-reveal class="mt-6 text-center text-[0.92rem] text-ink/62">
        <span class="mr-1.5 font-semibold text-accent">Already a student?</span>
        Your existing Content Creator discount carries over automatically at checkout.
      </p>
    </div>
  </section>
</template>
