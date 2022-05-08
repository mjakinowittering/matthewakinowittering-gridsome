<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
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
