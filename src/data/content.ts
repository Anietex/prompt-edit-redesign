// All sales-page copy + asset URLs in one place.
// Sourced from contentcreator.com/prompt-edit (see ASSETS.md) and re-shaped
// into a direct-response sales flow.

// Self-hosted media. Every CDN image was downloaded, resized and converted
// to WebP, then bundled here. No third-party image requests at page load.
const media = import.meta.glob('../assets/media/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const asset = (name: string): string => {
  const url = media[`../assets/media/${name}.webp`]
  if (!url && import.meta.env.DEV) {
    console.warn(`[content] missing media asset: ${name}.webp`)
  }
  return url ?? ''
}

export const img = {
  logo: asset('logo'),
  before: asset('before'),
  after: asset('after'),
  imageTools: asset('tools-image'),
  videoTools: asset('tools-video'),
  audioTools: asset('tools-audio'),
  pluginTools: asset('tools-plugins'),
  detailedLook: asset('detailed-look'),
  payments: asset('payments'),
  guarantee: asset('guarantee'),
} as const

export const conceptVideo = 'eu37od3pav' // "AI tool vs marketplace"

export const oldWay: string[] = [
  'A dozen logins, dashboards and billing dates to juggle',
  'Monthly subscriptions draining whether you create or not',
  'A new interface to re-learn every time a tool launches',
  'Paying for a full plan just to use a tool twice a month',
]
export const newWay: string[] = [
  'One login for every major AI model on earth',
  'Buy credits once, then spend them on anything, anytime',
  'One interface to learn, mastered in minutes',
  'New tools added for you the moment they launch',
]

export interface Demo {
  label: string
  id: string
}
export interface Toolkit {
  id: string
  kicker: string
  title: string
  blurb: string
  image: string
  demos: Demo[]
}

export const toolkits: Toolkit[] = [
  {
    id: 'image',
    kicker: 'AI Image Tools',
    title: 'Imagery that looks shot, not generated',
    blurb:
      'Generate scroll-stopping visuals from a single prompt, then refine them until they are unmistakably yours: clones, posts, designs, thumbnails and ads.',
    image: img.imageTools,
    demos: [
      { label: 'AI Clones', id: '6ugrp949dp' },
      { label: 'Social Media Posts', id: '5bzldtmz36' },
      { label: 'Graphic Design', id: 'kvqvjrid9z' },
      { label: 'Image Editing', id: '72zakh7jbf' },
      { label: 'YouTube Thumbnails', id: 'yrq89m8ns0' },
      { label: 'Online Ads', id: 'cypx73wu36' },
    ],
  },
  {
    id: 'video',
    kicker: 'AI Video Tools',
    title: 'Cinematic video without the cinema budget',
    blurb:
      'Direct full scenes, clone yourself on camera, and add Hollywood-grade effects. Every format your audience watches, generated from a text box.',
    image: img.videoTools,
    demos: [
      { label: 'Clone Videos', id: 'v39qn2mla0' },
      { label: 'Visual Effects', id: 'qx4qain2eg' },
      { label: 'Cinematic Films', id: '3rllmh5doc' },
      { label: 'Video Ads', id: '1muopqfwh6' },
      { label: 'Reels & TikToks', id: 'fq2zoz36cz' },
      { label: 'YouTube Videos', id: '8nri26so0p' },
    ],
  },
  {
    id: 'audio',
    kicker: 'AI Audio Tools',
    title: 'A studio-grade sound team, on tap',
    blurb:
      'Voiceovers, voice clones, swaps, original score and effects. Every layer of your soundtrack generated on demand, in any voice you need.',
    image: img.audioTools,
    demos: [
      { label: 'AI Voiceovers', id: 'rsh692c710' },
      { label: 'Voice Clones', id: 'rusyskd1ox' },
      { label: 'Voice Swaps', id: 'x6w5dao4h0' },
      { label: 'AI Sound Effects', id: '0yhtigj9mg' },
      { label: 'AI Music Generation', id: '81m386dh7h' },
    ],
  },
  {
    id: 'plugins',
    kicker: 'AI Editing Plugins',
    title: 'AI tools, living inside your editor',
    blurb:
      'No browser tab to babysit. The plugins open right inside Premiere Pro, After Effects, DaVinci Resolve and Final Cut, so every generation drops straight onto your timeline.',
    image: img.pluginTools,
    demos: [{ label: 'Editing Plugin Demo', id: '821b33oy7g' }],
  },
]

export interface Plan {
  id: string
  badge: string
  name: string
  price: string
  cadence: string
  headline: string
  sub: string
  features: string[]
  cta: string
  featured: boolean
}

export const plans: Plan[] = [
  {
    id: 'credits',
    badge: 'Pay as you go',
    name: 'Credit Pack',
    price: '$98',
    cadence: 'one payment',
    headline: 'Get $110 of AI credits today',
    sub: 'A one-time top-up with an instant bonus. No subscription, no expiry pressure.',
    features: [
      'Spend credits on any AI tool across the entire site',
      'Every major model: Nano Banana Pro, Veo, Kling, Suno and more',
      'Run out? Buy more anytime, never a subscription',
      '30-day money-back guarantee on unused credits',
    ],
    cta: 'Claim the credit pack',
    featured: false,
  },
  {
    id: 'subscription',
    badge: 'Best value',
    name: 'All-Access Membership',
    price: '$39',
    cadence: 'per month',
    headline: 'Save on everything, every single month',
    sub: '$49 of AI credits each month, plus a lifetime discount on everything else you create.',
    features: [
      '$49 of AI credits every month, a lifetime 20% boost',
      '10% off anytime you top up additional credits',
      'Unlimited access to the 100,000+ Templates Library',
      'Faster generation speeds + run multiple jobs at once',
      'Cancel anytime. No contracts, no friction',
    ],
    cta: 'Start the membership',
    featured: true,
  },
]

export interface TemplateBlock {
  id: string
  count: string
  name: string
  copy: string
  banner: string
  grid: string | null
  software: string
}

export const templateBlocks: TemplateBlock[] = [
  {
    id: 'luts',
    count: '4,000+',
    name: 'LUTs & Color Grades',
    copy: 'Ever watched a video and thought the colors looked incredible? That cinematic look comes from a LUT. Drop one on and your footage is transformed in seconds, and they work flawlessly with every major editor.',
    banner: '1el02ytkgq',
    grid: asset('grid-luts'),
    software: asset('compat-luts'),
  },
  {
    id: 'sfx',
    count: '60,000+',
    name: 'Sound Effects',
    copy: 'A professionally-built SFX vault with smart categories and a powerful search bar. Every sound is studio-made and works with any editing software. Just drag, drop, done.',
    banner: '8hilvsvzng',
    grid: null,
    software: asset('compat-sfx'),
  },
  {
    id: 'titles',
    count: '3,000+',
    name: 'Text & Title Animations',
    copy: 'Make your videos impossible to ignore. Pick a layout, type your message, customize, and add modern, professional text effects with zero motion-design skills required.',
    banner: '11av7ceye6',
    grid: asset('grid-titles'),
    software: asset('compat-titles'),
  },
  {
    id: 'overlays',
    count: '2,000+',
    name: 'Overlays',
    copy: 'Want that viral social-clip energy or an old-school vintage vibe? Drag an overlay onto your video, change the blend mode, and your shot transforms instantly.',
    banner: 'gmarfftvn7',
    grid: asset('grid-overlays'),
    software: asset('compat-overlays'),
  },
  {
    id: 'backgrounds',
    count: '5,000+',
    name: 'Animated Backgrounds',
    copy: 'The base layer of a polished video. Modern, high-quality animated backgrounds that make every project feel intentional, never cheap, never off-brand.',
    banner: 'zv193w4q59',
    grid: asset('grid-backgrounds'),
    software: asset('compat-backgrounds'),
  },
]

export interface SoundClip {
  id: string
  label: string
}

export const soundCompare: SoundClip[] = [
  { id: '9s64bo03y0', label: 'Watch the same clip without sound design' },
  { id: 'hk5pw8ztg4', label: 'Now watch it with our sound effects layered in' },
]
export const soundSamples: SoundClip[] = [
  { id: '2ve4xlevtb', label: 'Whooshes & Transitions' },
  { id: 'm4foab6mu6', label: 'Impacts & Hits' },
  { id: '1zkz745vsy', label: 'Ambience & Nature' },
  { id: '88wnd1t5pj', label: 'UI & Tech' },
  { id: '5vsrw5dx7r', label: 'Cinematic Risers' },
  { id: 'k1okxdkoqv', label: 'Foley & Texture' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'My daughter and I got more editing work done today in 3 hours than we normally do in 3 days.',
    name: 'Hilda Schlueter',
    role: 'Online Course Creator',
    image: asset('avatar-hilda'),
  },
  {
    quote:
      "My videos wouldn't look HALF as good as they do if it wasn't for this library. I lean into it heavily for every single edit.",
    name: 'Matt Lilley',
    role: 'ContentCreator.com Student',
    image: asset('avatar-brady'),
  },
  {
    quote: "A fantastic resource. I don't need any other digital asset subscriptions anymore.",
    name: 'Verified Member',
    role: 'ContentCreator.com Student',
    image: '',
  },
]

export const qualify: string[] = [
  'You want every best-in-class AI tool in one place, behind one easy interface.',
  'You want the best possible deal on AI credits so you can create more and spend less.',
  'You want cinematic results using the same templates professional editors rely on.',
  'You are still learning to edit but refuse to wait months for a professional look.',
  'You are tired of hunting the web for one perfect template locked inside a $130 pack.',
]

export interface Faq {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: 'What exactly is Prompt Edit?',
    a: 'Think of Prompt Edit as a grocery store for AI tools. Instead of subscribing to a dozen different sites and learning a dozen different interfaces, you get one place to access every major AI tool. You pay only for what you use by purchasing credits, like buying gas for a car. Whenever a revolutionary new tool launches, we add it for you.',
  },
  {
    q: 'Can I use what I create for social media or commercial videos?',
    a: 'Yes. Everything you create or download during your active membership is cleared for use in all commercial projects. You pay one fee for everything, and we never charge extra for commercial licensing.',
  },
  {
    q: 'Is the quality different from using each AI tool directly?',
    a: 'There is no quality difference whatsoever. With Prompt Edit you are accessing the exact same tools on a pay-per-use basis instead of paying a separate subscription on each tool’s own website.',
  },
  {
    q: 'What is the Content Creator Templates Library?',
    a: 'It is the world’s most affordable library of 100,000+ royalty-free editing templates: color grades, titles, effects, project templates, sound effects, motion backgrounds and more. An All-Access Membership includes full, unlimited access to it.',
  },
  {
    q: 'Do any limits apply to downloads?',
    a: 'No limits apply. One login gets you unlimited downloads of every template on the site. Per our terms, the subscription is for an individual, with no account sharing and no automated scraping tools.',
  },
  {
    q: 'Will the templates work in my editing platform?',
    a: 'Yes. The templates are compatible with all video editing platforms, so download them and use them in whatever program you already have. Some custom templates are also built for specific editors.',
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Absolutely. There are no long-term contracts. Cancel directly from the site at any time, or email support@contentcreator.com and we will cancel your membership immediately.',
  },
  {
    q: 'What happens to credits and templates if I cancel?',
    a: 'Cancel within 30 days of signing up and we will refund your purchase, including any unused credits. Spent credits are non-refundable, like gas you have already burned. Anything you created during your membership is cleared for use for life.',
  },
]
