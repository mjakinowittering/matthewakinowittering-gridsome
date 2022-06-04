<template>
  <Layout>
    <div class="container">
      <section id="me" class="section is-medium">
        <div class="columns">
          <div id="me-bio" class="column is-flex is-justify-content-center is-flex-direction-column">
            <h1 class="title">Hello, I am a Matthew!</h1>
            <p class="subtitle">I am a Product Manager with over <time v-bind:title="timeSinceBecomingProductManagerTitle()" v-bind:datetime="productManager.dateSince">{{ timeSinceBecomingProductManager() }}</time> of experience.</p>
            <p>Currently, I work for <a href="https://acorn-i.com/">Acorn Intelligence</a>, an eCommerce and Advertising agency that supports brands to grow their revenues on Amazon. I am their <a href="https://www.mindtheproduct.com/product-management-hierarchy/">Lead Product Manager</a>, I am responsible for our SaaS platform used by clients and colleagues alike, <a href="https://acorn-i.com/ignite-by-acorn-i/">Ignite by Acorn-i</a>.</p>
          </div>
          <div id="me-photo" class="column is-hidden-mobile">
            <g-image src="~/assets/img/photos/MatthewAkinoWittering-BW-Alpha.png" alt="Photo of Matthew Akino-Wittering" />
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="title">What I do</h2>
        <p class="subtitle">I work with Product Developement teams to realise valuable solutions for our customers.</p>
      </section>
      <div class="columns">
        <Card v-for="skill in $page.skills.edges" :skill="skill" :key="skill.node.id" />
      </div>
      <!-- <section id="about-me" class="section is-medium">
        <h2 class="title">About Me</h2>
        <p class="subtitle">Along with being a Product Manager, I am a husband, <a href="https://www.bdadyslexia.org.uk/dyslexia/about-dyslexia/what-is-dyslexia">Dyslexic</a>, hobbyist programmer, <a href="https://www.lboro.ac.uk">Loughborough University</a> graduate, occasional baker and open-source admirer, among other things.</p>
        <p>I was previously employeed by <a href="https://www.linkedin.com/company/the-exchange-lab/about/">The Exchange Lab</a>, a <a href="https://www.wpp.com/">WPP</a> company, as a Senior Product Manager. WPP acquired The Exchange Lab for <a href="https://www.wpp.com/news/2015/12/groupm-acquires-programmatic-marketing-solutions-company-the-exchange-lab">Proteus</a>, our proprietary Programmatic Advertising technology. I&#39;ve also been a Product Manager at <a href="http://uk.ask.com">Ask.com</a>. If you want to learn more, please read my <a href="/resume/">Resume</a>.</p>
      </section> -->
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
          content
          images {
            card {
              img
            }
          }
        }
      }
    }
  }
</page-query>


<script>
  import moment from 'moment';
  import Card from '~/components/Home/Card.vue'
  export default {
    metaInfo() {
      return {
        title: 'Home',
      }
    },
    components: {
      Card
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


<style lang="scss" scoped>
  #me {
    background: #f8f8f6;
    border-radius: 1rem;
    margin: 2rem 0;

    #me-photo {
      text-align: center;

      img {
        background: #dff9fb;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
      }
    }
  }
</style>
