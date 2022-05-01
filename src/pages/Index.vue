<template>
  <Layout>
    <div>
      <h1>Hello, I am a Matthew!</h1>
      <p>I am a Product Manager with over <time v-bind:title="timeSinceBecomingProductManagerTitle()" v-bind:datetime="productManager.dateSince">{{ timeSinceBecomingProductManager() }}</time> of experience. Currently, I work for <a href="https://acorn-i.com/">Acorn Intelligence</a>, an eCommerce and Advertising agency that supports brands to grow their revenues on Amazon. I am their <a href="https://www.mindtheproduct.com/product-management-hierarchy/">Lead Product Manager</a>, I am responsible for our SaaS platform used by clients and colleagues alike, <a href="https://acorn-i.com/ignite-by-acorn-i/">Ignite by Acorn-i</a>. I typically find myself working in the following areas.</p>
      <Skill v-for="skill in $page.skills.edges" :skill="skill" :key="skill.node.id" />
      <p>Along with being a Product Manager, I am a husband, <a href="https://www.bdadyslexia.org.uk/dyslexia/about-dyslexia/what-is-dyslexia">Dyslexic</a>, hobbyist programmer, <a href="https://www.lboro.ac.uk">Loughborough University</a> graduate, occasional baker and open-source admirer, among other things.</p>
      <p>I previously worked for <a href="https://www.linkedin.com/company/the-exchange-lab/about/">The Exchange Lab</a>, a <a href="https://www.wpp.com/">WPP</a> company, as a Senior Product Manager. WPP acquired The Exchange Lab for <a href="https://www.wpp.com/news/2015/12/groupm-acquires-programmatic-marketing-solutions-company-the-exchange-lab">Proteus</a>, our proprietary Programmatic Advertising technology. I&#39;ve also been a Product Manager at <a href="http://uk.ask.com">Ask.com</a>. If you want to learn more, please read my <a href="/resume/">Resume</a>.</p>
    </div>
  </Layout>
</template>


<page-query>
  query {
    skills: allSkill(sortBy: "index", order: ASC) {
      edges {
        node {
          id
          title
          img {
            src
          }
          content
        }
      }
    }
  }
</page-query>


<script>
  import moment from 'moment';
  import Skill from '~/components/Home/Skill.vue'
  export default {
    name: 'Home',
    metaInfo() {
      return {
        title: 'Home',
      }
    },
    components: {
      Skill
    },
    data() {
      return {
        productManager: {
          dateSince: new Date('2010-06-01T00:00:00+0000')
        }
      }
    },
    methods: {
      timeSinceBecomingProductManager() {
        return moment(this.productManager.dateSince).fromNow('y')
      },
      monthBecameProductManager() {
        return this.productManager.dateSince.toLocaleString('default', { month: 'long' })
      },
      yearBecameProductManager() {
        return this.productManager.dateSince.toLocaleString('default', { year: 'numeric' })
      },
      timeSinceBecomingProductManagerTitle() {
        return `Product Manager since ${this.monthBecameProductManager()} ${this.yearBecameProductManager()}`
      }
    }
  }
</script>
