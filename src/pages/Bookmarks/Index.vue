<template>
  <Layout>
    <Bookmarks :bookmarks="$page.bookmarks" />
  </Layout>
</template>


<page-query>
  query($page: Int) {
    bookmarks: allBookmark(filter: {}, sortBy: "createdAt", order: DESC, perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          domain
          url
          publishedMonth {
            publishedAt(format: "MMMM YYYY")
          }
          openGraph {
            ogTitle
            ogType
            ogDescription
          }
        }
      }
    }
  }
</page-query>


<script>
  import Bookmarks from '~/components/Bookmarks/Bookmarks.vue'
  export default {
    metaInfo() {
      return {
        title: 'Bookmarks',
      }
    },
    components: {
      Bookmarks
    }
  }
</script>
