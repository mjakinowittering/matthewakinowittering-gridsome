<template>
  <div class="m-post-card is-flex is-flex-direction-column">
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
    <div class="is-flex is-flex-direction-column is-flex-grow-1">
      <h3 class="title is-5">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.m-post-card {
  background: #f2fbfa;
  width: 100%;

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

  h3 {
    color: #1e2425;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 24px;
    margin: 1rem;
  }
}
</style>
