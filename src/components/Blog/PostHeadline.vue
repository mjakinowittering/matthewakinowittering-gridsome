<template>
  <div class="m-post-headline columns is-gapless">
    <div class="column is-two-thirds-desktop">
      <figure class="image">
        <g-link :to="path">
          <img :alt="artwork.img.alt" :src="artwork.img.src" />
        </g-link>
        <figcaption>{{ artwork.caption }}</figcaption>
      </figure>
    </div>
    <div class="column is-one-third-desktop">
      <h3 class="title is-3">
        <g-link :to="path">
          {{ title }}
        </g-link>
      </h3>
      <div class="content">
        <p v-html="excerpt"></p>
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <span class="icon-text">
              <span class="icon">
                <i class="fa-solid fa-calendar-day"></i>
              </span>
              <time :datetime="publishedAt">{{ publishedAt }}</time>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: [
      "path",
      "artwork",
      "title",
      "excerpt",
      "publishedAt"
    ]
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Rubik:wght@400;500&display=swap');

  .m-post-headline {
    background: #f2fbfa;

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
      }

      .level {
        color: #1e2425;
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        margin: 1.5rem;
      }
    }
  }
</style>
