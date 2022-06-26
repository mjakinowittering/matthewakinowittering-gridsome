<template>
  <Layout>
    <div class="m-resume">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds-desktop">
            <h1>Resume</h1>
            <h2>Education</h2>
            <div class="m-topic" v-for="(university, index) in $page.allUniversity.edges" :key="university.node.id">
              <h3>{{ university.node.name }}</h3>
              <Timeframe :dateFrom="university.node.dateFrom" :dateTo="university.node.dateTo" v-if="university.node.courses.edges.length > 1" />
              <History :events="university.node.courses.edges" />
              <hr v-if="index != $page.allUniversity.edges.length - 1">
            </div>
            <hr />
            <h2>Employment</h2>
            <div class="m-topic" v-for="(company, index) in $page.allCompany.edges" :key="company.node.id" :id="index">
              <h3>{{ company.node.name }}</h3>
              <Timeframe :dateFrom="company.node.dateFrom" :dateTo="company.node.dateTo" v-if="company.node.roles.edges.length > 1" />
              <History :events="company.node.roles.edges" />
              <hr v-if="index != $page.allCompany.edges.length - 1">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
  query {
    allUniversity(sortBy: "dateFrom", order: DESC) {
      edges {
        node {
          id
          name
          dateFrom(format: "YYYY-MM-DD")
          dateTo(format: "YYYY-MM-DD")
          courses: belongsTo(sortBy: "dateFrom", order: DESC) {
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
    allCompany(sortBy: "dateFrom", order: DESC) {
      edges {
        node {
          name
          dateFrom(format: "YYYY-MM-DD")
          dateTo(format: "YYYY-MM-DD")
          roles: belongsTo(sortBy: "dateFrom", order: DESC) {
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
  import Timeframe from '~/components/Resume/Timeframe.vue'
  import History from  '~/components/Resume/History.vue'
  export default {
    metaInfo() {
      return {
        title: 'Resume',
      }
    },
    components: {
      Timeframe,
      History
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

    h2 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 3rem 0 0;
    }

    h2 + div {
      margin: 1.5rem 0 0;
    }

    .m-topic {
      margin: 0;

      h3 {
        color: #1e2425;
        color: #2a898f;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
        margin: 1rem 0 0;
      }

      hr {
        background: #f2fbfa;
        margin: 3rem auto;
        width: 50%;
      }
    }

    .m-topic + hr {
      background: #f2fbfa;
      margin: 3rem auto;
      width: 75%;
    }
  }
</style>
