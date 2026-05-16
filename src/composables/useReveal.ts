import type { Directive } from 'vue'

// v-reveal: scroll entry choreography. Elements fade up out of a soft blur
// as they enter the viewport. Optional binding value sets a stagger delay in
// ms: v-reveal="120". One shared IntersectionObserver keeps this cheap.

const supportsObserver = typeof IntersectionObserver !== 'undefined'
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Reveal when in view, or when scrolled clean past (a fast scroll can
        // skip the intersecting notification, leaving elements stuck hidden).
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          entry.target.classList.add('reveal-in')
          observer?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  return observer
}

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (!supportsObserver || prefersReducedMotion) return
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
