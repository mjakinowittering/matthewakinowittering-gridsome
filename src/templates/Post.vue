<template>
  <Layout>
    <div class="m-post">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds-desktop">
            <figure class="image is-16by9" v-if="$page.post.subtype === 'youtube'">
              <iframe class="has-ratio" width="640" height="360" :src="$page.post.youtube.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
            <figure v-else>
              <div class="image is-16by9">
                <img class="responsive" :alt="$page.post.figure.img.alt" :src="$page.post.figure.img.src" />
              </div>
              <figcaption>
                <a :href="$page.post.figure.url" target="_blank">
                  {{ $page.post.figure.caption }}
                </a>
              </figcaption>
            </figure>
            <h1 class="title is-1">
              <g-link :to="$page.post.path">
                {{ $page.post.title }}
              </g-link>
            </h1>
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <span class="icon-text">
                    <span class="icon mr-1">
                      <i class="fa-solid fa-calendar-day"></i>
                    </span>
                    <time :datetime="$page.post.publishedAt">{{ $page.post.publishedAt }}</time>
                  </span>
                </div>
              </div>
            </div>
            <div class="content" v-html="$page.post.content"></div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    post(id: $id) {
      path
      title
      subtype
      figure {
        caption
        img
        alt
        url
      }
      youtube {
        src
      }
      publishedAt(format: "YYYY-MM-DD")
      content
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
        script: [
          { src: "https://platform.twitter.com/widgets.js", async: true }
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-post {
    margin: 0 1rem;
    padding: 2.5rem 0;

    h1 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 36px;
      font-weight: 500;
      line-height: 36px;
      margin: 1.5rem 0;
    }

    figure {
      position: relative;

      figcaption {
        background: #2a898f;
        bottom: 0;
        color: #ffffff;
        left: 0;
        padding: 0.25rem 0.5rem;
        position: absolute;
        width: auto;

        a {
          color: #ffffff;
        }
      }
    }

    .level {
      color: #1e2425;
      font-family: 'Rubik', sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      margin: 1.5rem 0;
    }
  }

  @media screen and (min-width: 1024px) {
    .m-post {
      margin: 0;
      padding: 5rem 0;
    }
  }
</style>
