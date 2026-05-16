<script setup lang="ts">
import { templateBlocks, img } from '../../data/content'
import TemplateBlock from '../TemplateBlock.vue'
import CtaButton from '../CtaButton.vue'
import SectionHeading from '../SectionHeading.vue'
</script>

<template>
  <section id="library" class="section">
    <div class="wrap">
      <div class="grid grid-cols-2 items-center gap-[clamp(2rem,5vw,4rem)] max-md:grid-cols-1">
        <div v-reveal>
          <SectionHeading eyebrow="Included free with every membership">
            100,000+ editing templates,<br />
            <span class="text-accent">bundled in.</span>
            <template #lead>
              Your All-Access Membership unlocks the Content Creator Templates Library, the world's
              most affordable vault of royalty-free assets professional editors actually reach for.
              Color grades, sound, titles, overlays, backgrounds and more.
            </template>
          </SectionHeading>
          <div class="mt-8">
            <CtaButton label="Get the whole library" href="#pricing" size="lg" />
          </div>
        </div>

        <div v-reveal="120" class="bezel">
          <div class="bezel-core overflow-hidden p-[0.9rem]">
            <img
              :src="img.detailedLook"
              alt="Inside the Templates Library"
              loading="lazy"
              class="w-full rounded-2xl border border-ink/10"
            />
          </div>
        </div>
      </div>

      <TemplateBlock
        v-for="(block, i) in templateBlocks"
        :key="block.id"
        :block="block"
        :flip="i % 2 === 1"
      />
    </div>
  </section>
</template>
