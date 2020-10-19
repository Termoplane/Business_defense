export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Общество защиты предпринимателей',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Общество защиты предпринимателей',
        hid: 'apple-mobile-web-app-title'
      },
      {
        property: 'og:title',
        content: 'Общество защиты предпринимателей',
        vmid: 'og:title',
        hid: 'og:title'
      },
      {
        property: 'og:site_name',
        content: 'Общество защиты предпринимателей',
        hid: 'og:site-name'
      },
      {
        property: 'og:image',
        content: '//og.community/icon.png',
        vmid: 'og:image',
        hid: 'og:image'
      },
      {
        property: 'og:description',
        content: 'Общество защиты предпринимателей',
        vmid: 'og:description',
        hid: 'og:description'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimal-ui' },
      { hid: 'description', name: 'description', content: 'Общество защиты предпринимателей' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/index.sass',
    'swiper/css/swiper.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/Vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/element.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCAVBSrDpGnDVzgHKQGe5VajPbDSPkTF1I',
          authDomain: 'covid-1115b.firebaseapp.com',
          databaseURL: 'https://covid-1115b.firebaseio.com',
          projectId: 'covid-1115b',
          storageBucket: 'covid-1115b.appspot.com',
          messagingSenderId: '409114479505',
          appId: '1:409114479505:web:cc172f5ffecd04a31ea830'
        },
        services: {
          auth: true,
          storage: true,
          firestore: {
            static: false, // default
            preload: false, // default
            enablePersistence: true
          }
        }
      }
    ]
  ],

  styleResources: {
    sass: [
      '@/assets/styles/_variables.sass'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
