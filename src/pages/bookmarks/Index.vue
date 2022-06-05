<template>
  <Layout>
    <div v-for="(published, index) in $page.allBookmarkPublished.edges" :key="published.node.id" :id="index">
      <section class="hero">
        <div class="hero-body">
          <p class="title">
            {{ published.node.publishedAt }}
          </p>
          <p class="subtitle">
            Hero subtitle
          </p>
        </div>
      </section>
      <div class="container">
        <MediaObject :bookmark="bookmark" v-for="bookmark in published.node.bookmarks.edges" :key="bookmark.node.id" />
      </div>
    </div>
    <Pager :info="$page.allBookmarkPublished.pageInfo"/>
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
                  createdAt(format: "YYYY-MM-DD")
                  url
                  og {
                    ogTitle
                    ogDescription
                    favicon
                  }
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
  import MediaObject from '~/components/Bookmarks/MediaObject.vue'
  export default {
    metaInfo() {
      return {
        title: 'Bookmarks',
      }
    },
    components: {
      Pager,
      MediaObject
    }
  }
</script>
