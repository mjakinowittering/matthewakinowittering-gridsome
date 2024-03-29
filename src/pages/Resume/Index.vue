<template>
  <Layout>
    <div class="m-resume">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds-desktop">
            <h1>{{ $page.introduction.title }}</h1>
            <div class="m-story">
              <div class="content" v-html="$page.introduction.content"></div>
            </div>
            <hr />
            <Topic title="Employment" :organisations="$page.companies.edges" />
            <hr />
            <Topic title="Education" :organisations="$page.universities.edges" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    introduction: block(id: "resume") {
      title
      content
    }
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
          content
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
import moment from 'moment'
import Topic from '~/components/Resume/Topic.vue'
export default {
  metaInfo() {
    return {
      title: 'Resume'
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
  margin: 0 1rem;
  padding: 2.5rem 0;

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

@media screen and (min-width: 1024px) {
  .m-resume {
    margin: 0;
    padding: 5rem 0;
  }
}
</style>
