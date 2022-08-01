<template>
  <div class="m-posts">
    <div class="container">
      <div class="columns" v-for="(chuck, index) in chunks" :key="index">
        <div class="column is-flex" v-for="post in chuck" :key="post.node.id">
          <PostHeadline :post="post" v-if="index === 0" />
          <PostCard :post="post" v-else />
        </div>
      </div>
      <Pager :info="posts.pageInfo"/>
    </div>
  </div>
</template>


<script>
  import { Pager } from 'gridsome'
  import PostHeadline from '~/components/Blog/PostHeadline.vue'
  import PostCard from '~/components/Blog/PostCard.vue'
  export default {
    props: [
      'posts'
    ],
    components: {
      PostHeadline,
      PostCard,
      Pager
    },
    computed: {
      chunks: function() {
        return [
          ...[
            this.posts.edges.slice(
              0,
              1
            )
          ],
          ...this.chunkArray(
            this.posts.edges.slice(1),
            3
          )
        ]
      }
    },
    methods: {
      chunkArray(array, chunkSize) {
        let results = []

        for (let i = 0; i < array.length; i += chunkSize) {
          results.push(array.slice(i, i + chunkSize))
        }

        return results
      }
    }
  }
</script>


<style lang="scss" scoped>
  .m-posts {
    padding: 5rem 0;
  }
</style>
