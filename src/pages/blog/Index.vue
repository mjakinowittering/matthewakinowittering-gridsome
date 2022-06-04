<template>
  <Layout>
    <div class="container">
      <div class="columns is-multiline">
        <Card :post="post" v-for="post in $page.posts.edges" :key="post.node.id" />
      </div>
      <Pager :info="$page.posts.pageInfo"/>
    </div>
  </Layout>
</template>


<page-query>
  query($page: Int) {
    posts: allPost(filter: {}, sortBy: "publishedAt", order: DESC, perPage: 8, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          path
          title
          subtype
          authors
          figure {
            img
          }
          publishedAt(format: "YYYY-MM-DD")
          excerpt
        }
      }
    }
  }
</page-query>


<script>
  import { Pager } from 'gridsome'
  import Card from '~/components/Blog/Card.vue'
  export default {
    metaInfo() {
      return {
        title: 'Blog',
      }
    },
    components: {
      Pager,
      Card
    },
    methods: {
      breadcrumbFactory() {
        if (this.$page.posts.pageInfo.currentPage > 1) {
          return [
            {
              to: '/',
              label: 'Home'
            },
            {
              to: '/blog/',
              label: 'Blog'
            },
            {
              to: `/blog/${this.$page.posts.pageInfo.currentPage}/`,
              label: `Page ${this.$page.posts.pageInfo.currentPage}`
            }
          ]
        } else {
          return [
            {
              to: '/',
              label: 'Home'
            },
            {
              to: '/blog/',
              label: 'Blog'
            }
          ]
        }
      }
    }
  }
</script>
