<template>
  <header>
    <div>
      Matthew Akino-Wittering
      <nav>
        <div class="grid">
          <div>
            <ul class="la-ul">
              <li>
                <span class="la-li">
                  <i class="las la-home"></i>
                </span>
                <g-link to="/">Home</g-link>
              </li>
              <li>
                <span class="la-li">
                  <i class="las la-bullhorn"></i>
                </span>
                <g-link to="/blog/">Blog</g-link>
              </li>
              <li>
                <span class="la-li">
                  <i class="las la-paperclip"></i>
                </span>
                <g-link to="/bookmarks/">Bookmarks</g-link>
              </li>
              <li>
                <span class="la-li">
                  <i class="las la-history"></i>
                </span>
                <g-link to="/resume/">Resume</g-link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="la-ul">
              <li class="external-link" v-for="externalLink in $static.allExternalLink.edges" :key="externalLink.node.id">
                <span class="la-li">
                  <i class="las la-external-link-square-alt"></i>
                </span>
                <a :href="externalLink.node.url" target="_blank">{{ externalLink.node.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
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
