<template>
  <Layout>
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <figure class="is-16-by-9">
              <div>
                {{ $page.post.subtype }}
              </div>
            </figure>
            <h1>{{ $page.post.title }}</h1>
            <div v-html="$page.post.content"></div>
          </div>
        </div>
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
    }
  }
</page-query>


<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title,
      }
    }
  }
</script>
