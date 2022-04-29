<template>
  <ul>
    <li>
      <g-link to="/">Home</g-link>
    </li>
    <li>
      <g-link to="/blog">Blog</g-link>
    </li>
    <li>
      <g-link to="/bookmarks">Bookmarks</g-link>
    </li>
    <li>
      <g-link to="/resume">Resume</g-link>
    </li>
    <li v-for="externalLink in $static.allExternalLink.edges" :key="externalLink.node.id">
      <a :href="externalLink.node.url" target="_blank">{{ externalLink.node.title }} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </li>
  </ul>
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
    name: 'Navbar'
  }
</script>
