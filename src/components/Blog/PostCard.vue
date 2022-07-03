<template>
  <div class="m-post-card is-flex is-flex-direction-column">
    <figure class="image">
      <g-link :to="path">
        <img :alt="artwork.img.alt" :src="artwork.img.src" />
      </g-link>
      <figcaption>{{ artwork.caption }}</figcaption>
    </figure>
    <div class="is-flex is-flex-direction-column is-flex-grow-1">
      <h3 class="title is-5">
        <g-link :to="path">
          {{ title }}
        </g-link>
      </h3>
    </div>
  </div>
</template>


<script>
  export default {
    props: [
      "path",
      "artwork",
      "title"
    ]
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-post-card {
    background: #f2fbfa;

    h3 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 24px;
      margin: 1rem;
    }
  }
</style>
