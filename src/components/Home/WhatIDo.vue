<template>
  <div class="m-what-i-do">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds-desktop">
          <h2>{{ $static.introduction.title }}</h2>
          <div class="content" v-html="$static.introduction.content"></div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-flex" v-for="skill in $static.skills.edges" :key="skill.node.id">
          <div class="m-what-i-do__skill">
            <img class="m-what-i-do__skill__icon" :src="skill.node.images.card.img.src" :height="skills.skill.img.height" :width="skills.skill.img.width" />
            <h3>{{ skill.node.title }}</h3>
            <div class="is-flex-direction-row">
              <div class="content is-flex-grow-1" v-html="skill.node.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<static-query>
  query {
    introduction: block(id: "what-i-do") {
      title
      content
    }
    skills: allSkill(sortBy: "index", order: ASC) {
      edges {
        node {
          id
          title
          content
          images {
            card {
              img
            }
          }
        }
      }
    }
  }
</static-query>


<script>
  export default {
    data() {
      return {
        skills: {
          skill: {
            img: {
              height: "100px",
              width: "100px",
            }
          }
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-what-i-do {
    margin: 0 1rem;
    padding: 2.5rem 0;

    h2 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 0 0 1.5rem;
    }

    &__skill {
      background: #f2fbfa;
      display: inline-block;
      position: relative;
      margin-right: 1rem;
      margin-bottom: 1rem;
      padding-top: 4.25rem;
      padding-left: 3.25rem;
      padding-bottom: 2rem;
      padding-right: 2rem;

      &__icon {
        margin: 0 0 2rem;
      }

      h3 {
        color: #1e2425;
        font-family: 'Poppins', sans-serif;
        font-size: 28px;
        font-weight: 500;
        line-height: 28px;
        margin: 0 0 1.5rem;
      }
    }

    &__skill::before {
      border: 0.25rem solid #2a898f;
      position: absolute;
      top: 1rem;
      left: 1rem;
      height: 100%;
      width: 100%;
      content: '';
    }
  }

  @media screen and (min-width: 1024px) {
    .m-what-i-do {
      margin: 0;
      padding: 5rem 0;
    }
  }
</style>
