<template>
  <div class="is-flex is-flex-direction-column">
    <figure class="image">
      <img :alt="artwork.img.alt" :src="artwork.img.src" />
      <figcaption>{{ artwork.caption }}</figcaption>
    </figure>
    <div class="is-flex is-flex-direction-column is-flex-grow-1">
      <h3 class="title">
        <g-link :to="path">
          {{ title }}
        </g-link>
      </h3>
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
</template>


<script>
  export default {
    props: [
      "path",
      "artwork",
      "title",
      "publishedAt"
    ]
  }
</script>


<style lang="scss" scoped>
  .m-post-header {
    background: tomato;
  }
</style>
