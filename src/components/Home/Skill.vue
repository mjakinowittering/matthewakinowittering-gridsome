<template>
  <div class="skill">
    <div class="card">
      <!-- <img :src="skill.node.img.src"> -->
      <h2>{{ skill.node.title }}</h2>
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
