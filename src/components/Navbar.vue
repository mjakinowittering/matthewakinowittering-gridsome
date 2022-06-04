<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        Matthew Akino-Wittering
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarLinks">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-end">
        <g-link class="navbar-item" to="/" active-class="is-active">Home</g-link>
        <g-link class="navbar-item" to="/blog/" active-class="is-active">Blog</g-link>
        <g-link class="navbar-item" to="/bookmarks/" active-class="is-active">Bookmarks</g-link>
        <g-link class="navbar-item" to="/resume/" active-class="is-active">Resume</g-link>
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
