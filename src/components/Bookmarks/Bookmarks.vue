<template>
  <div class="m-bookmarks">
    <div class="container">
      <div v-for="(month, index) in bookmarksByMonth" :key="index">
        <h2>{{ month.publishedAt }}</h2>
        <article class="media" v-for="bookmark in month.bookmarks" :key="bookmark.node.id">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <h3>
              <a :href="bookmark.node.url" target="_blank">{{ bookmark.node.openGraph.ogTitle }}</a>
            </h3>
            <div class="content">
              <p>{{ bookmark.node.openGraph.ogDescription }}</p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" :href="bookmark.node.url" target="_blank">{{ bookmark.node.domain }}</a>
              </div>
            </nav>
          </div>
        </article>
      </div>
      <Pager :info="bookmarks.pageInfo"/>
    </div>
  </div>
</template>


<script>
  import { Pager } from 'gridsome'
  export default {
    props: [
      'bookmarks'
    ],
    components: {
      Pager
    },
    computed: {
      bookmarksByMonth() {
        const bookmarkMonths = [...new Set(this.bookmarks.edges.map(bookmark => bookmark.node.publishedMonth.publishedAt))]
        let results = []

        for (const bookmarkMonth of bookmarkMonths) {
          results.push({
            publishedAt: bookmarkMonth,
            bookmarks: this.$page.bookmarks.edges.filter(bookmark => bookmark.node.publishedMonth.publishedAt === bookmarkMonth)
          })
        }

        return results
      }
    }
  }
</script>


<style lang="scss" scoped>
  .m-bookmarks {
    padding: 5rem 0;
  }
</style>
