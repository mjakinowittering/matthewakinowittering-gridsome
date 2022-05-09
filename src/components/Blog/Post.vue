<template>
  <div class="column is-flex">
    <div class="card">
      <div class="card-content is-flex-direction-row">
        <h3 class="title">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </h3>
        <div class="is-flex-grow-1" v-html="post.node.content"></div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: [
      "post"
    ]
  }
</script>
