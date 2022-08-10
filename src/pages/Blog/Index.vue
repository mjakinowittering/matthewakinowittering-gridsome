<template>
  <Layout>
    <div class="m-blog">
      <Posts :posts="$page.posts" />
    </div>
  </Layout>
</template>


<page-query>
  query($page: Int) {
    posts: allPost(filter: {}, sortBy: "publishedAt", order: DESC, perPage: 10, page: $page) @paginate {
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
            caption
            img
            alt
            url
          }
          publishedAt(format: "YYYY-MM-DD")
          excerpt
          content
        }
      }
    }
  }
</page-query>


<script>
  import Posts from '~/components/Blog/Posts.vue'
  export default {
    metaInfo() {
      return {
        title: 'Blog',
      }
    },
    components: {
      Posts
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


<style lang="scss" scoped>
  .m-blog {
    margin: 0 1rem;
    padding: 2.5rem 0;
  }

  @media screen and (min-width: 1024px) {
    .m-blog {
      margin: 0;
      padding: 5rem 0;
    }
  }
</style>
