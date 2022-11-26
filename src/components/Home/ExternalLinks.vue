<template>
  <div class="m-external-links">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds-desktop">
          <h2>External Links</h2>
          <ol>
            <li v-for="externalLink in $static.externalLinks.edges" :key="externalLink.node.id">
              <span class="icon-text">
                <span class="icon">
                  <i :class="externalLink.node.icon"></i>
                </span>
                <span><a :href="externalLink.node.url" target="_blank">{{ externalLink.node.title }}</a></span>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>


<static-query>
  query {
    externalLinks: allExternalLink(sortBy: "title", order: ASC) {
      edges {
        node {
          title
          url
          icon
        }
      }
    }
  }
</static-query>


<script>
  export default {
  }
</script>



<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-external-links {
    background: #f2fbfa;
    padding: 2.5rem 1rem;

    h2 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 0 0 1.5rem;
    }

    ol {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        color: #1e2425;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        margin: 2rem 0 0;

        span.icon-text {
          span.icon {
            margin: 0 0.5rem 0 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .m-about-me {
      padding: 5rem 0;
    }
  }
</style>
