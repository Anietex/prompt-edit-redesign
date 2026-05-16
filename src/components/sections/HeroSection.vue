<script setup lang="ts">
import CtaButton from '../CtaButton.vue'

// The wall: every tile is real content the platform produces, sliced from
// the template library and the AI demos. Distributed round-robin into four
// columns, each doubled so it can scroll on a seamless loop.
const wallImports = import.meta.glob('../../assets/media/wall-*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const tiles = Object.keys(wallImports)
  .sort()
  .map((k) => wallImports[k] as string)

const columns = [0, 1, 2, 3].map((c) => {
  const col = tiles.filter((_, i) => i % 4 === c)
  return [...col, ...col]
})

const durations = ['66s', '82s', '58s', '74s']
</script>

<template>
  <section id="top" class="relative min-h-[100dvh] overflow-hidden">
    <!-- Living wall of real platform output -->
    <div
      class="absolute inset-0 flex justify-center gap-3 px-3 sm:gap-4 sm:px-4"
      aria-hidden="true"
    >
      <div
        v-for="(col, ci) in columns"
        :key="ci"
        class="flex w-1/2 min-w-0 flex-col gap-3 will-change-transform animate-wall sm:gap-4 md:w-1/4"
        :class="[
          ci % 2 === 1 ? '[animation-direction:reverse]' : '',
          ci > 1 ? 'hidden md:flex' : '',
        ]"
        :style="{ animationDuration: durations[ci], marginTop: ci % 2 ? '-7rem' : '0' }"
      >
        <img
          v-for="(t, ti) in col"
          :key="ti"
          :src="t"
          alt=""
          class="block w-full shrink-0 rounded-xl border border-ink/10"
        />
      </div>
    </div>

    <!-- Grade: a soft pool behind the caption only; the wall stays vivid -->
    <div
      class="absolute inset-0 bg-[radial-gradient(115%_100%_at_2%_50%,#09090a_6%,rgba(9,9,10,0.86)_30%,rgba(9,9,10,0.32)_58%,transparent_80%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,10,0.5),transparent_12%),linear-gradient(to_top,rgba(9,9,10,0.4),transparent_18%)]"
    ></div>

    <!-- Caption -->
    <div class="wrap relative z-[1] flex min-h-[100dvh] flex-col justify-center py-28">
      <div class="max-w-[46rem] [text-shadow:0_2px_30px_rgba(0,0,0,0.92)]">
        <p
          class="flex items-center gap-2.5 text-[0.68rem] font-semibold tracking-[0.26em] text-ink/55 uppercase [animation:hero-in_0.85s_var(--ease-fluid)_both]"
        >
          <span class="size-[5px] rounded-full bg-accent"></span>
          Exclusive offer · AI Creator Course
        </p>

        <h1
          class="mt-6 text-[clamp(2.5rem,5.6vw,4.8rem)] leading-[1]"
          style="letter-spacing: -0.038em"
        >
          <span
            class="block [animation:hero-in_0.85s_var(--ease-fluid)_both]"
            style="animation-delay: 90ms"
          >
            Every AI tool.
          </span>
          <span
            class="block [animation:hero-in_0.85s_var(--ease-fluid)_both]"
            style="animation-delay: 170ms"
          >
            One login.
          </span>
          <span
            class="block text-accent [animation:hero-in_0.85s_var(--ease-fluid)_both]"
            style="animation-delay: 250ms"
          >
            Pay per use.
          </span>
        </h1>

        <p
          class="mt-7 max-w-[34rem] text-lead text-ink/72 [animation:hero-in_0.85s_var(--ease-fluid)_both]"
          style="animation-delay: 350ms"
        >
          One marketplace for every major AI model. Skip the stack of subscriptions and pay only for
          what you actually create.
        </p>

        <div
          class="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 [animation:hero-in_0.85s_var(--ease-fluid)_both]"
          style="animation-delay: 440ms"
        >
          <CtaButton label="Get Started Today" href="#pricing" size="lg" />
          <a
            href="#concept"
            class="group flex items-center gap-2 text-[0.95rem] text-ink/70 transition-colors duration-300 hover:text-ink"
          >
            See how it works
            <span class="transition-transform duration-300 ease-fluid group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>

        <p
          class="mt-8 text-[0.82rem] text-ink/45 [animation:hero-in_0.85s_var(--ease-fluid)_both]"
          style="animation-delay: 530ms"
        >
          Trusted by 43,943+ content creators
        </p>
      </div>
    </div>

    <p
      class="absolute right-[clamp(1.25rem,4vw,2.5rem)] bottom-[clamp(1.5rem,4vw,2.5rem)] z-[1] text-[0.62rem] font-semibold tracking-[0.18em] text-ink/40 uppercase max-lg:hidden"
    >
      Every tile above was created on Prompt Edit
    </p>
  </section>
</template>
