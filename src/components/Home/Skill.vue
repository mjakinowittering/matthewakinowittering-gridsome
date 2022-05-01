<template>
  <div>
    <img :src="skill.node.img.src">
    <h3>{{ skill.node.title }}</h3>
    <p v-html="skill.node.content"></p>
  </div>
</template>


<script>
  export default {
    props: [
      "skill"
    ]
  }
</script>

