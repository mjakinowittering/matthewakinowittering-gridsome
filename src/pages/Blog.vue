<template>
  <Layout>
    <h1>Blog</h1>
    <div class="company" v-for="post in $page.allBlog.edges" :key="post.node.id">
      <h3>{{ post.node.title }}</h3>
    </div>
    <Pager :info="$page.allBlog.pageInfo"/>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allBlog(sortBy: "published_at", order: DESC, perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title
          path
          published_at(format: "YYYY-MM-DD")
        }
      }
    }
  }
</page-query>

<script>
  import { Pager } from 'gridsome'
  export default {
    name: 'Blog',
    metaInfo() {
      return {
        title: 'Blog',
      }
    },
    components: {
      Pager
    }
  }
</script>
