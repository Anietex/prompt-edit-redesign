<script setup lang="ts">
import { qualify } from '../../data/content'
import CtaButton from '../CtaButton.vue'
</script>

<template>
  <section class="section">
    <div class="wrap">
      <div v-reveal class="bezel">
        <div
          class="bezel-core grid grid-cols-[0.85fr_1.15fr] gap-[clamp(2rem,5vw,4rem)] p-[clamp(2rem,4vw,3.4rem)] max-md:grid-cols-1"
        >
          <div>
            <span class="eyebrow">
              <span class="size-[5px] rounded-full bg-accent"></span>Is this for you?
            </span>
            <h2 class="mt-6 text-h2">Prompt Edit is built<br />for you if…</h2>
            <p class="mt-5 mb-8 max-w-[20rem] text-[0.96rem] text-ink/62">
              If two or more of these sound familiar, the membership will pay for itself fast.
            </p>
            <CtaButton label="Yes, get me started" href="#pricing" />
          </div>

          <ul class="flex flex-col">
            <li
              v-for="(item, i) in qualify"
              :key="item"
              v-reveal="i * 70"
              class="flex items-start gap-5 border-b border-ink/10 py-5 first:pt-0 last:border-0 last:pb-0"
            >
              <span
                class="pt-0.5 font-display text-[0.92rem] font-semibold tracking-[0.04em] text-accent"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="text-[1.06rem] leading-[1.45] tracking-[-0.015em]">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
