<template>
  <Layout>
    <Headline />
    <AboutMe />
    <Skills />
  </Layout>
</template>


<script>
  import Headline from '~/components/Home/Headline.vue'
  import AboutMe from '~/components/Home/AboutMe.vue'
  import Skills from '~/components/Home/Skills.vue'
  export default {
    metaInfo() {
      return {
        title: 'Home',
      }
    },
    components: {
      Headline,
      AboutMe,
      Skills
    }
  }
</script>
