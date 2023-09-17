<template>
  <Layout>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-two-thirds-desktop">
          <div class="error block">
            <g-image class="error__icon" src="~/assets/img/icons/alien.svg" alt="Alien" />
            <h2>Page Not Found!</h2>
            <p>Oops! This is embarrassing. You weren't supposed to see me...</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Error 404'
  }
}
</script>

<style lang="scss" scoped>
.error {
  text-align: center;

  &__icon {
    margin: 50px 0 0;
    max-width: 256px;
    min-width: 256px;
  }

  h2 {
    color: #2a898f;
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    margin: 2rem 0 1rem;
  }

  p {
    color: #1e2425;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    margin: 0 0 1rem;
  }
}
</style>
