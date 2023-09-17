<template>
  <div class="m-post-headline columns is-gapless">
    <div class="column is-two-thirds-desktop">
      <figure>
        <div class="image is-16by9">
          <g-link :to="post.node.path">
            <img :alt="post.node.figure.img.alt" :src="post.node.figure.img.src" />
          </g-link>
        </div>
        <figcaption>
          <a :href="post.node.figure.url" target="_blank">
            {{ post.node.figure.caption }}
          </a>
        </figcaption>
      </figure>
    </div>
    <div class="column is-one-third-desktop">
      <h3 class="title is-3">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </h3>
      <div class="content">
        <p>
          <span v-html="getSnippet(post)"></span>
          <g-link class="continue-reading" :to="post.node.path" v-if="hasMoreContent(post) === true"
            >continue reading</g-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    getPlainText(htmlString) {
      return htmlString.replace(/<\/?[^>]+(>|$)/gi, '').trim()
    },
    getSnippet(post) {
      if (
        this.hasMoreContent(post) === true &&
        !!post.node.excerpt.trim().match(/[.,:!?]$/) === false
      ) {
        return `${post.node.excerpt.trim()} ...`
      } else {
        return post.node.excerpt.trim()
      }
    },
    hasMoreContent(post) {
      if (
        this.getPlainText(post.node.content).length > this.getPlainText(post.node.excerpt).length
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Rubik:wght@400;500&display=swap');

.m-post-headline {
  background: #f2fbfa;

  .column {
    figure {
      position: relative;

      figcaption {
        background: #2a898f;
        bottom: 0;
        padding: 0.25rem 0.5rem;
        position: absolute;
        width: auto;

        a {
          color: #ffffff;
        }
      }
    }
  }

  .column:nth-child(2) {
    h3 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 1.5rem;
    }

    .content {
      margin: 1.5rem;

      .continue-reading {
        margin: 0 0 0 0.33rem;
        text-decoration: underline;
      }
    }
  }
}
</style>
