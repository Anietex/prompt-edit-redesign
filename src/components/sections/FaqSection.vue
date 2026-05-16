<script setup lang="ts">
import { ref } from 'vue'
import { faqs } from '../../data/content'

const openIndex = ref(0)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" class="section">
    <div
      class="wrap grid grid-cols-[0.78fr_1.22fr] items-start gap-[clamp(2rem,5vw,4.5rem)] max-md:grid-cols-1"
    >
      <aside v-reveal class="sticky top-26 max-md:static">
        <span class="eyebrow">
          <span class="size-[5px] rounded-full bg-accent"></span>Answers
        </span>
        <h2 class="mt-6 text-h2">Commonly asked questions</h2>
        <p class="mt-6 max-w-[16rem] text-[0.92rem] text-ink/62">
          Still unsure? Email
          <a href="mailto:support@contentcreator.com" class="border-b border-accent/40 text-accent"
            >support@contentcreator.com</a
          >
          and a human will reply.
        </p>
      </aside>

      <ul v-reveal="80">
        <li v-for="(item, i) in faqs" :key="item.q" class="border-b border-ink/10 first:border-t">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 px-0.5 py-6 text-left font-display text-[clamp(1.02rem,1.7vw,1.22rem)] font-medium tracking-[-0.015em] transition-colors duration-300 hover:text-accent"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span
              class="relative grid size-[2.2rem] shrink-0 place-items-center rounded-full border bg-ink/[0.04] transition-colors duration-300"
              :class="openIndex === i ? 'border-accent/40' : 'border-ink/15'"
              aria-hidden="true"
            >
              <i
                class="absolute h-[1.6px] w-[11px] rounded-sm transition-colors duration-300"
                :class="openIndex === i ? 'bg-accent' : 'bg-ink'"
              ></i>
              <i
                class="absolute h-[1.6px] w-[11px] rounded-sm transition-all duration-500 ease-fluid"
                :class="openIndex === i ? 'rotate-0 bg-accent' : 'rotate-90 bg-ink'"
              ></i>
            </span>
          </button>
          <div
            class="grid transition-[grid-template-rows] duration-500 ease-fluid"
            :class="openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <p
              class="overflow-hidden pr-12 text-[0.96rem] text-ink/62"
              :class="openIndex === i ? 'pb-6' : ''"
            >
              {{ item.a }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
