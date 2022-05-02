<template>
  <Layout>
    <section class="post">
      <div class="container">
        <figure class="is-16-by-9" v-if="$page.post.subtype === 'post'">
          <img :alt="$page.post.figure.img.alt" :src="$page.post.figure.img.src">
          <figcaption>
            <a :href="$page.post.figure.url" target="_blank">{{ $page.post.figure.caption }}</a>
          </figcaption>
        </figure>
        <main>
          <h1>{{ $page.post.title }}</h1>
          <div v-html="$page.post.content"></div>
        </main>
      </div>
    </section>
  </Layout>
</template>


<page-query>
  query($id: ID!) {
    post(id: $id) {
      title
      subtype
      content
      figure {
        caption
        img {
          src
          alt
        }
        url
      }
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
        script: [
          { src: "https://platform.twitter.com/widgets.js", async: true }
        ]
      }
    }
  }
</script>
