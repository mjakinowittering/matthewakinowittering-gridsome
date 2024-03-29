<template>
  <div class="m-bookmarks">
    <div class="container">
      <div class="columns is-multiline">
        <div
          class="column is-two-thirds-desktop"
          v-for="(month, index) in bookmarksByMonth"
          :key="index"
        >
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <h2 class="title is-4 mt-5 mb-2">{{ month.publishedAt }}</h2>
              </div>
            </div>
          </div>
          <article class="media" v-for="bookmark in month.bookmarks" :key="bookmark.node.id">
            <figure class="media-left is-hidden-touch">
              <p class="image is-32x32">
                <g-image
                  src="~/assets/img/icons/bookmark-video.svg"
                  v-if="bookmark.node.openGraph.ogType == 'video.other'"
                />
                <g-image src="~/assets/img/icons/bookmark-article.svg" v-else />
              </p>
            </figure>
            <div class="media-content">
              <h3 class="title is-4 mb-2">
                <a :href="bookmark.node.url" target="_blank">{{
                  bookmark.node.openGraph.ogTitle
                }}</a>
              </h3>
              <div class="content mb-0">
                <p>{{ bookmark.node.openGraph.ogDescription }}</p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" :href="bookmark.node.url" target="_blank">{{
                    bookmark.node.domain
                  }}</a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
      <Pager class="m-pagination" :info="bookmarks.pageInfo" />
    </div>
  </div>
</template>

<script>
import { Pager } from 'gridsome'
export default {
  props: ['bookmarks'],
  components: {
    Pager
  },
  computed: {
    bookmarksByMonth() {
      const bookmarkMonths = [
        ...new Set(this.bookmarks.edges.map(bookmark => bookmark.node.publishedMonth.publishedAt))
      ]
      let results = []

      for (const bookmarkMonth of bookmarkMonths) {
        results.push({
          publishedAt: bookmarkMonth,
          bookmarks: this.$page.bookmarks.edges.filter(
            bookmark => bookmark.node.publishedMonth.publishedAt === bookmarkMonth
          )
        })
      }

      return results
    }
  }
}
</script>

<style lang="scss" scoped>
.m-bookmarks {
  margin: 0 1rem;
  padding: 2.5rem 0;
}

.m-pagination {
  display: inline-flex;
  margin: 2rem 0 0;
  padding: 0;

  a {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    padding: 0.75rem;
  }

  a.active--exact {
    color: black;
  }

  a:hover {
    color: black;
  }
}

@media screen and (min-width: 1024px) {
  .m-bookmarks {
    margin: 0;
    padding: 5rem 0;
  }
}
</style>
