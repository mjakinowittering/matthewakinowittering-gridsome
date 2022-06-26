<template>
  <div class="m-posts">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds-desktop">
          <Pager :info="posts.pageInfo"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { Pager } from 'gridsome'
  export default {
    props: [
      'posts'
    ],
    components: {
      Pager
    }
  }
</script>


<style lang="scss" scoped>
  .m-posts {
    padding: 5rem 0;
  }
</style>
