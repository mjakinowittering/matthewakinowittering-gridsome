<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <g-link class="navbar-item" to="/">Matthew Akino-Wittering</g-link>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarLinks"
        @click="toggleMenu()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarLinks" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
      <div class="navbar-end">
        <g-link class="navbar-item" to="/" exact-active-class="is-exact">Home</g-link>
        <g-link
          class="navbar-item"
          to="/blog/"
          active-class="is-active"
          exact-active-class="is-exact"
          >Blog</g-link
        >
        <g-link
          class="navbar-item"
          to="/bookmarks/"
          active-class="is-active"
          exact-active-class="is-exact"
          >Bookmarks</g-link
        >
        <g-link class="navbar-item" to="/resume/" exact-active-class="is-exact">Resume</g-link>
      </div>
    </div>
  </nav>
</template>

<static-query>
  query {
    allExternalLink(sort: [{by: "pinned", order: DESC}, {by: "title", order: ASC}]) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
</static-query>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

nav {
  .navbar-brand {
    .navbar-item {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 18px;
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }
}

.navbar-menu {
  .navbar-item {
    color: #1e2425;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    margin: 0 1rem;
    padding: 0.5rem 0;
  }

  .navbar-item.is-active {
    color: #2a898f;
  }

  .navbar-item.is-exact {
    color: #2a898f;
  }

  .navbar-item:hover {
    background: none;
    color: #2a898f;
  }
}

@media screen and (min-width: 1024px) {
  nav {
    .navbar-brand {
      .navbar-item {
        border-bottom: 0.125rem solid #ffffff;
      }
    }

    .navbar-menu {
      .navbar-item {
        border-bottom: 0.125rem solid #ffffff;
      }

      .navbar-item.is-active {
        border-bottom: 0.125rem solid #2a898f;
      }

      .navbar-item.is-exact {
        border-bottom: 0.125rem solid #2a898f;
      }

      .navbar-item:hover {
        border-bottom: 0.125rem solid #2a898f;
      }
    }
  }
}
</style>
