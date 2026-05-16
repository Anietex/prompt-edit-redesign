<script setup lang="ts">
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ConceptSection from './components/sections/ConceptSection.vue'
import BeforeAfterSection from './components/sections/BeforeAfterSection.vue'
import ToolkitSection from './components/sections/ToolkitSection.vue'
import PricingSection from './components/sections/PricingSection.vue'
import TemplatesSection from './components/sections/TemplatesSection.vue'
import SoundSection from './components/sections/SoundSection.vue'
import TestimonialsSection from './components/sections/TestimonialsSection.vue'
import QualifySection from './components/sections/QualifySection.vue'
import GuaranteeSection from './components/sections/GuaranteeSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import FinalCtaSection from './components/sections/FinalCtaSection.vue'
</script>

<template>
  <div class="grain" aria-hidden="true"></div>

  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="absolute -top-[14vw] -right-[10vw] size-[46vw] rounded-full bg-[radial-gradient(circle,rgba(67,173,244,0.16),transparent_68%)] blur-[120px]"
    ></div>
    <div
      class="absolute top-[60vh] -left-[18vw] size-[52vw] rounded-full bg-[radial-gradient(circle,rgba(122,134,156,0.13),transparent_70%)] blur-[120px]"
    ></div>
    <div
      class="absolute -right-[8vw] -bottom-[12vw] size-[40vw] rounded-full bg-[radial-gradient(circle,rgba(67,173,244,0.09),transparent_70%)] blur-[120px]"
    ></div>
  </div>

  <SiteNav />

  <main>
    <!-- Attention -->
    <HeroSection />
    <!-- Interest -->
    <ConceptSection />
    <BeforeAfterSection />
    <ToolkitSection />
    <!-- Desire -->
    <PricingSection />
    <TemplatesSection />
    <SoundSection />
    <TestimonialsSection />
    <QualifySection />
    <!-- Action -->
    <GuaranteeSection />
    <FaqSection />
    <FinalCtaSection />
  </main>

  <SiteFooter />
</template>
