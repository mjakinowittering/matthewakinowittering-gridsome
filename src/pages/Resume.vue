<template>
  <Layout>
    <section>
      <h1>Resume</h1>
    </section>
    <section>
      <h2>Education</h2>
      <div class="university" v-for="university in $page.allUniversity.edges" :key="university.node.id">
        <h3>{{ university.node.name }}</h3>
        <Timeframe :dateFrom="university.node.dateFrom" :dateTo="university.node.dateTo" v-if="university.node.courses.edges.length > 1" />
        <Event :event="course" v-for="course in university.node.courses.edges" :key="course.node.id" />
      </div>
    </section>
    <section>
      <h2>Employment</h2>
      <div class="company" v-for="(company, index) in $page.allCompany.edges" :key="company.node.id" :id="index">
        <h3>{{ company.node.name }}</h3>
        <Timeframe :dateFrom="company.node.dateFrom" :dateTo="company.node.dateTo" v-if="company.node.roles.edges.length > 1" />
        <Event :event="role" v-for="role in company.node.roles.edges" :key="role.node.id" />
        <hr v-if="index != $page.allCompany.edges.length - 1">
      </div>
    </section>
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
  import Event from '~/components/Resume/Event.vue'
  import Timeframe from '~/components/Resume/Timeframe.vue'
  export default {
    metaInfo() {
      return {
        title: 'Resume',
      }
    },
    components: {
      Event,
      Timeframe
    }
  }
</script>
