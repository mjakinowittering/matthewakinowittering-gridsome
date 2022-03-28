<template>
  <div class="skills">
    <div class="skill" v-for="edge in $static.allSkill.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
      <div v-html="edge.node.content"></div>
    </div>
  </div>
</template>

<static-query>
  query {
    allSkill(sortBy: "index", order: ASC) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
</static-query>

<script>
  export default {
    name: 'Skills'
  }
</script>

<style>

</style>
