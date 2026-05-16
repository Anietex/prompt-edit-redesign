<script setup lang="ts">
import { oldWay, newWay, conceptVideo } from '../../data/content'
import WistiaLite from '../WistiaLite.vue'
import CtaButton from '../CtaButton.vue'
import SectionHeading from '../SectionHeading.vue'
</script>

<template>
  <section id="concept" class="section">
    <div class="wrap">
      <SectionHeading v-reveal eyebrow="How it works">
        A grocery store <span class="text-accent">for AI.</span>
        <template #lead>
          Stop signing up for a dozen sites and stacking subscriptions you barely use. Prompt Edit
          puts every tool on one shelf, so you only pay for what lands in your cart. Watch the
          60-second breakdown.
        </template>
      </SectionHeading>

      <div v-reveal="80" class="bezel mt-12">
        <div class="bezel-core overflow-hidden p-2">
          <WistiaLite :id="conceptVideo" ratio="16 / 9" />
        </div>
      </div>

      <div
        v-reveal="120"
        class="mt-12 grid grid-cols-[1fr_auto_1fr] items-center gap-5 max-md:grid-cols-1"
      >
        <article class="rounded-bezel border border-ink/10 bg-ink/[0.02] p-8 opacity-80">
          <header class="mb-6 flex items-center justify-between border-b border-ink/10 pb-6">
            <span class="text-[0.72rem] font-semibold tracking-[0.16em] text-ink/38 uppercase">
              The old way
            </span>
            <span class="font-display text-[1.5rem] font-semibold tracking-[-0.03em] text-ink/38">
              Pay <i class="font-sans text-[0.78rem] not-italic">regardless</i>
            </span>
          </header>
          <ul class="flex flex-col gap-4">
            <li
              v-for="item in oldWay"
              :key="item"
              class="flex items-start gap-3.5 text-[0.96rem] text-ink/62"
            >
              <span
                class="mt-px grid size-6 shrink-0 place-items-center rounded-[7px] border border-ink/10 bg-ink/[0.04] text-ink/38"
              >
                <svg
                  class="size-[0.95rem]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path d="M7 7l10 10M17 7L7 17" stroke-linecap="round" />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>
        </article>

        <span
          class="grid size-12 place-items-center rounded-full border border-ink/15 bg-raised text-accent max-md:mx-auto max-md:rotate-90"
          aria-hidden="true"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <path d="M4 12h16M14 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>

        <article class="rounded-bezel border border-accent/25 bg-accent/[0.04] p-8">
          <header class="mb-6 flex items-center justify-between border-b border-ink/10 pb-6">
            <span class="text-[0.72rem] font-semibold tracking-[0.16em] text-accent uppercase">
              With Prompt Edit
            </span>
            <span class="font-display text-[1.5rem] font-semibold tracking-[-0.03em]">
              Pay <i class="font-sans text-[0.78rem] not-italic text-ink/38">per use</i>
            </span>
          </header>
          <ul class="flex flex-col gap-4">
            <li
              v-for="item in newWay"
              :key="item"
              class="flex items-start gap-3.5 text-[0.96rem] text-ink/70"
            >
              <span
                class="mt-px grid size-6 shrink-0 place-items-center rounded-[7px] border border-accent/30 bg-accent/12 text-accent"
              >
                <svg
                  class="size-[0.95rem]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 13l4 4 10-11" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>
        </article>
      </div>

      <div v-reveal class="mt-10 flex justify-center">
        <CtaButton label="Get instant access" href="#pricing" />
      </div>
    </div>
  </section>
</template>
