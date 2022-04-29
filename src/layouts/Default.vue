<template>
  <div class="page">
    <Header />
    <div id="nav-container">
      <div class="bg"></div>
      <div class="button" tabindex="0">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
      <nav id="nav-content" tabindex="0">
        <Navbar />
      </nav>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>


<script>
  import Header from "~/components/Global/Header.vue"
  import Navbar from "~/components/Global/Navbar.vue"
  export default {
    components: {
      Header,
      Navbar
    }
  }
</script>
