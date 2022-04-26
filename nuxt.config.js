export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Home',
    titleTemplate: '%s - D’artagnan Memories',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'D’artagnan Memories' },
      { hid: 'description', name: 'description', content: 'This website is a place to remember and celebrate my late guide dog D’artagnan. D’artagnan went to the Rainbow Bridge on 29 March 2022, just nine days after a wonderful gathering to celebrate his 12th birthday and retirement, attended by 70 of his human friends and many canine friends too.' },
      { name: 'image', property: 'og:image', content: 'https://dartagnanmemories.org/img/dmemories-twitter-preview.png' },
      { name: 'author', content: 'Gisele Mesnage' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'title', property: 'og:title', content: 'D’artagnan Memories' },
      { name: 'description', property: 'og:description' content: 'This website is a place to remember and celebrate my late guide dog D’artagnan. D’artagnan went to the Rainbow Bridge on 29 March 2022, just nine days after a wonderful gathering to celebrate his 12th birthday and retirement, attended by 70 of his human friends and many canine friends too.' },
      { name: 'twitter:title', content: 'D’artagnan Memories' },
      { name: 'twitter:description', content: 'This website is a place to remember and celebrate my late guide dog D’artagnan. D’artagnan went to the Rainbow Bridge on 29 March 2022, just nine days after a wonderful gathering to celebrate his 12th birthday and retirement, attended by 70 of his human friends and many canine friends too.' },
      { name: 'twitter:image', content: 'https://dartagnanmemories.org/img/dmemories-twitter-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:alt', content: 'Screenshot of the D\'artagnan Memories Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/site.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-announcer.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
