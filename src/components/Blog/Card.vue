<template>
  <div class="column is-half-desktop is-flex">
    <div class="card is-flex is-flex-direction-column">
      <div class="card-image">
        <figure v-if="post.node.subtype === 'post'">
          <img class="responsive" :alt="post.node.figure.img.alt" :src="post.node.figure.img.src" />
          <figcaption>
            <a :href="post.node.figure.url" target="_blank">{{ post.node.figure.caption }}</a>
          </figcaption>
        </figure>
      </div>
      <div class="card-content is-flex is-flex-direction-column is-flex-grow-1">
        <h3 class="title is-flex-grow-1">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </h3>
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="fa-solid fa-calendar-day"></i>
                  </span>
                  <time :datetime="post.node.publishedAt">{{ post.node.publishedAt }}</time>
                </span>
              </p>
            </div>
            <div class="level-item" v-for="author in post.node.authors" :key="author.id">
              <p>
                <span class="icon-text">
                  <span class="icon">
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <span>{{ author }}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <p v-html="post.node.excerpt"></p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props: [
      "post"
    ]
  }
</script>


<style lang="scss"></style>
