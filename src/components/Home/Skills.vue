<template>
  <div>
    <h2>What I do</h2>
    <div v-for="skill in $static.allSkill.edges" :key="skill.node.id">
      <img class="mb-2" :src="skill.node.img.src" height="64" width="64" />
      <h3>{{ skill.node.title }}</h3>
      <p v-html="skill.node.content"></p>
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
          img {
            src
          }
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

