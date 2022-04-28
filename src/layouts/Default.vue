<template>
  <div>
    <Navbar />
    <main class="container">
      <slot />
    </main>
  </div>
</template>


<script>
  import Navbar from '~/components/Global/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>
