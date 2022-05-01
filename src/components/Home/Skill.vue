<template>
  <div class="skill col col-md-4">
    <div class="card">
      <img :src="skill.node.img.src">
      <h3 class="card-title">{{ skill.node.title }}</h3>
      <div class="card-body" v-html="skill.node.content"></div>
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
