<template>
  <Layout>
    <div>
      <h1>Bookmarks</h1>
      <div class="published" v-for="published in $page.allBookmarkPublished.edges" :key="published.node.id">
        <h3>{{ published.node.publishedAt }}</h3>
        <ul v-for="bookmark in published.node.bookmarks.edges" :key="bookmark.node.id">
          <li>
            <a :href="bookmark.node.url" target="_blank">{{ bookmark.node.title }}</a>
          </li>
        </ul>
      </div>
      <Pager :info="$page.allBookmarkPublished.pageInfo"/>
    </div>
  </Layout>
</template>


<page-query>
  query($page: Int) {
    allBookmarkPublished(filter: {}, sortBy: "id", order: DESC, perPage: 5, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          publishedAt(format: "MMMM YYYY")
          bookmarks: belongsTo(sortBy: "createdAt", order: DESC) {
            edges {
              node {
                ... on Bookmark {
                  createdAt
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
