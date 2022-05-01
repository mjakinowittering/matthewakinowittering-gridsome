<template>
  <div>
    <div class="container">
      Matthew Akino-Wittering
      <Navbar />
    </div>
    <article>
      <slot />
    </article>
  </div>
</template>


<script>
  import Navbar from "~/components/Global/Navbar.vue"
  export default {
    components: {
      Navbar
    }
  }
</script>
