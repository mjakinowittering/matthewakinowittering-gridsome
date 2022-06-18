<template>
  <layout>
    <div class="m-what-i-do">
      <div class="container">
        <div class="columns">
          <div class="column has-text-centered">
            <h2 class="title">What I do</h2>
            <p class="subtitle">I work with Product Developement teams to realise valuable solutions for our customers.</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-flex" v-for="skill in $static.skills.edges" :skill="skill" :key="skill.node.id">
            <div class="card">
              <header class="card-header">
                <h3 class="card-header-title">
                  {{ skill.node.title }}
                </h3>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <g-image :src="skill.node.images.card.img.src" />
                </figure>
              </div>
              <div class="card-content is-flex-direction-row">
                <div class="is-flex-grow-1" v-html="skill.node.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>


<static-query>
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
</static-query>


<script>
  export default {
  }
</script>


<style lang="scss" scoped>
  div.m-what-i-do {
    background: pink;
  }
</style>
