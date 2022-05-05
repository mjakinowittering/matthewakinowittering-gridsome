<template>
  <header>
    <hgroup>
      <h1>
        <g-link to="/">
          Matthew Akino-Wittering
        </g-link>
      </h1>
    </hgroup>
    <input id="menu-toggle" type="checkbox">
    <label id="hamburger" for="menu-toggle">
      <i class="las la-hamburger"></i>
      <i class="las la-window-close"></i>
    </label>
    <section>
      <label id="dismiss-menu" for="menu-toggle"></label>
      <nav>
        <header>
          <h2>Menu</h2>
        </header>
        <ul>
          <li>
            <g-link to="/">Home</g-link>
          </li>
          <li>
            <g-link to="/blog/">Blog</g-link>
          </li>
          <li>
            <g-link to="/bookmarks/">Bookmarks</g-link>
          </li>
          <li>
            <g-link to="/resume/">Resume</g-link>
          </li>
          <li class="external-link" v-for="externalLink in $static.allExternalLink.edges" :key="externalLink.node.id">
            <a :href="externalLink.node.url" target="_blank">{{ externalLink.node.title }}</a>
          </li>
        </ul>
      </nav>
    </section>
  </header>
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
