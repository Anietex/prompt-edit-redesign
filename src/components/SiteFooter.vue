<script setup lang="ts">
import BrandMark from './BrandMark.vue'

const year = new Date().getFullYear()
const cols: { title: string; links: string[] }[] = [
  {
    title: 'Toolkit',
    links: ['AI Image Tools', 'AI Video Tools', 'AI Audio Tools', 'Editing Plugins'],
  },
  { title: 'Company', links: ['Pricing', 'Templates Library', 'Tutorials', 'Log in'] },
  { title: 'Support', links: ['Help Center', 'support@contentcreator.com', 'Terms', 'Privacy'] },
]
</script>

<template>
  <footer class="relative z-[1] border-t border-ink/10 bg-black/40 pt-16 pb-10">
    <div class="mx-auto w-full max-w-[1240px] px-8 max-md:px-5">
      <div class="grid grid-cols-[1.2fr_1.6fr] gap-12 max-md:grid-cols-1 max-md:gap-10">
        <div>
          <a href="#top" aria-label="Prompt Edit"><BrandMark size="lg" /></a>
          <p class="mt-4 max-w-[22rem] text-[0.9rem] text-ink/38">
            The most affordable AI marketplace on earth. Every major tool, one login, pay only for
            what you use.
          </p>
        </div>

        <nav class="grid grid-cols-3 gap-6 max-sm:grid-cols-2" aria-label="Footer">
          <div v-for="col in cols" :key="col.title">
            <h3 class="text-[0.7rem] font-semibold tracking-[0.16em] text-ink/38 uppercase">
              {{ col.title }}
            </h3>
            <ul class="mt-4 flex flex-col gap-2.5">
              <li v-for="l in col.links" :key="l">
                <a
                  href="#pricing"
                  class="text-[0.9rem] text-ink/55 transition-colors duration-300 hover:text-accent"
                >
                  {{ l }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="mt-14 border-t border-ink/10 pt-8 max-md:mt-10">
        <p class="text-[0.78rem] leading-relaxed text-ink/38">
          © {{ year }} Paul Xavier International LLC. By visiting this page you agree to the terms
          &amp; conditions, privacy policy and earnings disclaimer.
        </p>
        <p class="mt-2 text-[0.78rem] leading-relaxed text-ink/25">
          This site is not a part of, nor endorsed by, the Facebook website or Meta Platforms, Inc.
          Sales figures referenced are not a guarantee of your results, which depend on your own
          effort and market conditions.
        </p>
      </div>
    </div>
  </footer>
</template>
