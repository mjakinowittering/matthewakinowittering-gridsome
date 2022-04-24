<template>
  <div class="layout">
    <Navbar />
    <slot />
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
