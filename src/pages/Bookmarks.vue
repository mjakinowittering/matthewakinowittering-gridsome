<template>
  <Layout>
    <h1>Bookmarks</h1>
    <div class="published" v-for="published in $page.allPublished.edges" :key="published.node.id">
      <h3>{{ published.node.published_at }}</h3>
      <div class="bookmarks" v-for="bookmark in published.node.bookmarks.edges" :key="bookmark.node.id">
        <p>
          <a :href="bookmark.node.url" target="_blank">{{ bookmark.node.title }}</a>
        </p>
      </div>
    </div>
    <Pager :info="$page.allPublished.pageInfo"/>
  </Layout>
</template>


<page-query>
  query($page: Int) {
    allPublished(sortBy: "id", order: DESC, perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          published_at(format: "MMMM YYYY")
          bookmarks: belongsTo(sortBy: "createdAt", order: DESC) {
            edges {
              node {
                ... on Bookmark {
                  title
                  url
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
    name: 'Bookmarks',
    metaInfo() {
      return {
        title: 'Bookmarks',
      }
    },
    components: {
      Pager
    }
  }
</script>
