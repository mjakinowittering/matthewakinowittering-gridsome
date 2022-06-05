<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <h3>
          <a :href="bookmark.node.url" target="_blank">{{ bookmark.node.og.ogTitle }}</a>
        </h3>
        <p v-html="bookmark.node.og.ogDescription"></p>
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <p>
              <span class="icon-text">
                <span class="icon">
                  <i class="fa-solid fa-calendar-day"></i>
                </span>
                <time :datetime="bookmark.node.createdAt">{{ bookmark.node.createdAt }}</time>
              </span>
            </p>
          </div>
          <div class="level-item">
            <p>
              <span class="icon-text">
                <span class="icon">
                  <i class="fa-solid fa-link"></i>
                </span>
                <a :href="bookmark.node.url" target="_blank">{{ bookmark.node.domain }}</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>


<script>
  export default {
    props: [
      "bookmark"
    ]
  }
</script>
