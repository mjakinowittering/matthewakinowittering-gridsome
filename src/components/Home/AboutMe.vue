<template>
  <div class="m-about-me">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds-desktop">
          <h2>{{ $static.introduction.title }}</h2>
          <div class="content" v-html="$static.introduction.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
    introduction: block(id: "about-me") {
      title
      content
    }
  }
</static-query>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.m-about-me {
  background: #f2fbfa;
  padding: 2.5rem 1rem;

  h2 {
    color: #1e2425;
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    margin: 0 0 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .m-about-me {
    padding: 5rem 0;
  }
}
</style>
