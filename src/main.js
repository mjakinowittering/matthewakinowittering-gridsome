// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/styles/theme.scss'

export default function (Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = {
    class: 'has-navbar-fixed-top',
    lang: 'en-GB'
  }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
