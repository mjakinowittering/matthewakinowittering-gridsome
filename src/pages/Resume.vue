<template>
  <Layout>
    <div class="row">
      <div class="col col-lg-10 offset-lg-1">
        <h1>Resume</h1>
        <div>
          <h2>Education</h2>
          <div v-for="university in $page.allUniversity.edges" :key="university.node.id">
            <h3>{{ university.node.name }}</h3>
            <p v-if="university.node.belongsTo.edges.length > 1">{{ university.node.dateFrom }} - {{ university.node.dateTo }}</p>
            <div v-for="course in university.node.belongsTo.edges" :key="course.node.id">
              <h4>{{ course.node.title }}</h4>
              <p>{{ course.node.dateFrom }} - {{ course.node.dateTo }}</p>
              <div v-html="course.node.content"></div>
            </div>
          </div>
        </div>
        <hr>
        <div>
          <h2>Employment</h2>
          <div v-for="(company, index) in $page.allCompany.edges" :key="company.node.id" :id="index">
            <h3>{{ company.node.name }}</h3>
            <p v-if="company.node.belongsTo.edges.length > 1">{{ company.node.dateFrom }} - {{ isPresent(company.node.dateTo) }}</p>
            <div v-for="role in company.node.belongsTo.edges" :key="role.node.id">
              <h4>{{ role.node.title }}</h4>
              <p>{{ role.node.dateFrom }} - {{ isPresent(role.node.dateTo) }}</p>
              <div v-html="role.node.content"></div>
            </div>
            <hr v-if="index != $page.allCompany.edges.length - 1">
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
          belongsTo(sortBy: "dateFrom", order: DESC) {
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
          belongsTo(sortBy: "dateFrom", order: DESC) {
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
  export default {
    name: 'Resume',
    metaInfo() {
      return {
        title: 'Resume',
      }
    },
    methods: {
      isPresent(dateTo) {
        if (dateTo !== null) {
          return dateTo
        } else {
          return 'Present'
        }
      }
    }
  }
</script>
