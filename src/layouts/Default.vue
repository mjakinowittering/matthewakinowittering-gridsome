<template>
  <div>
    <div class="container">
      <Header />
    </div>
    <article>
      <slot />
    </article>
  </div>
</template>


<script>
  import Header from "~/components/Global/Header.vue"
  export default {
    components: {
      Header
    }
  }
</script>
