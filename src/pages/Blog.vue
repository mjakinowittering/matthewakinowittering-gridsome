<template>
  <Layout>
    <section>
      <h1>Blog</h1>
      <div class="published" v-for="published in $page.allPostPublished.edges" :key="published.node.id">
        <h3>{{ published.node.publishedAt }}</h3>
        <ul v-for="post in published.node.posts.edges" :key="post.node.id">
          <li>
            <g-link :to="post.node.path">
              {{ post.node.title }}
            </g-link>
          </li>
        </ul>
      </div>
      <Pager :info="$page.allPostPublished.pageInfo"/>
    </section>
  </Layout>
</template>


<page-query>
  query($page: Int) {
    allPostPublished(filter: {}, sortBy: "id", order: DESC, perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          publishedAt(format: "MMMM YYYY")
          posts: belongsTo(sortBy: "createdAt", order: DESC) {
            edges {
              node {
                ... on Post {
                  publishedAt
                  title
                  path
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>


<script>
  import { Pager } from 'gridsome'
  export default {
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
