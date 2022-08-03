<template>
  <Layout>
    <div class="m-resume">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds-desktop">
            <h1>Resume</h1>
            <div class="m-story">
              <div class="content">
                <p>I am Matthew Akino-Wittering, a Lead Product Manager with over <time v-bind:title="timeSinceBecomingProductManagerTitle()" v-bind:datetime="productManager.dateSince">{{ timeSinceBecomingProductManager() }}</time> of experience. I build data-driven products that support businesses by integrating Advertising and eCommerce technologies in innovative ways to create competitive advantages within the MarTech space.</p>
              </div>
            </div>
            <hr />
            <Topic title="Education" :organisations="$page.universities.edges" />
            <hr />
            <Topic title="Employment" :organisations="$page.companies.edges" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
  query {
    universities: allUniversity(sortBy: "dateFrom", order: DESC) {
      edges {
        node {
          id
          name
          address
          dateFrom(format: "YYYY-MM-DD")
          dateTo(format: "YYYY-MM-DD")
          events: belongsTo(sortBy: "dateFrom", order: DESC) {
            edges {
              node {
                ... on Course {
                  title
                  dateFrom(format: "YYYY-MM-DD")
                  dateTo(format: "YYYY-MM-DD")
                  content
                }
              }
            }
          }
        }
      }
    }
    companies: allCompany(sortBy: "dateFrom", order: DESC) {
      edges {
        node {
          id
          name
          address
          dateFrom(format: "YYYY-MM-DD")
          dateTo(format: "YYYY-MM-DD")
          events: belongsTo(sortBy: "dateFrom", order: DESC) {
            edges {
              node {
                ... on Role {
                  title
                  content
                  dateFrom(format: "YYYY-MM-DD")
                  dateTo(format: "YYYY-MM-DD")
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>


<script>
  import moment from 'moment';
  import Topic from '~/components/Resume/Topic.vue'
  export default {
    metaInfo() {
      return {
        title: 'Resume',
      }
    },
    components: {
      Topic
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
        return `I've worked in Product Management roles since ${this.monthBecameProductManager()} ${this.yearBecameProductManager()}`
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-resume {
    padding: 5rem 0;

    h1 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 36px;
      font-weight: 500;
      line-height: 36px;
      margin: 0;
    }

    .m-story {
      margin: 1.5rem 0 0;
    }

    hr {
      background: none;
      border-top: 0.15rem solid #2a898f;
      margin: 3rem auto;
      opacity: 0.2;
      width: 33%;
    }
  }
</style>
