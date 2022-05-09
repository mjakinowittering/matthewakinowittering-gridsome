<template>
  <div class="column is-flex">
    <div class="card">
      <div class="card-content is-flex-direction-row">
        <h3 class="title">{{ skill.node.title }}</h3>
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
