<template>
  <Layout>
    <Headline />
    <AboutMe />
    <WhatIDo />
    <ExternalLinks />
  </Layout>
</template>

<script>
import Headline from '~/components/Home/Headline.vue'
import AboutMe from '~/components/Home/AboutMe.vue'
import WhatIDo from '~/components/Home/WhatIDo.vue'
import ExternalLinks from '~/components/Home/ExternalLinks.vue'
export default {
  metaInfo() {
    return {
      title: 'Home'
    }
  },
  components: {
    Headline,
    AboutMe,
    WhatIDo,
    ExternalLinks
  }
}
</script>
