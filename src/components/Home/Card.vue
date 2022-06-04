<template>
  <div class="column is-flex">
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
</template>


<script>
  export default {
    props: [
      "skill"
    ]
  }
</script>


<style lang="scss" scoped>
   @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  .card {
    .card-header {
      box-shadow: none;
      padding: 1.75rem 1rem 1.75rem;

      .card-header-title {
        display: block;
        font-family: 'Permanent Marker', cursive;
        font-size: 28px;
        line-height: 28px;
        text-align: center;
      }
    }
  }
</style>
