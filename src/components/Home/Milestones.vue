<template>
  <div class="m-milestones">
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds-desktop">
          <h2>Milestones</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column is-flex" v-for="event in $static.milestones.edges" :key="event.node.id">
          <div class="m-event">
            <span class="m-event__header">
              <div class="m-event__header__year">
                {{ event.node.eventDate }}
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-flex" v-for="milestone in $static.milestones.edges" :key="milestone.node.id">
          <div class="m-milestone">
            <h3>{{ milestone.node.title }}</h3>
            <div class="is-flex-direction-row">
              <div class="content is-flex-grow-1" v-html="milestone.node.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<static-query>
  query {
    milestones: allMilestone(sortBy: "eventDate", order: DESC) {
      edges {
        node {
          eventDate(format: "YYYY")
          title
          content
        }
      }
    }
  }
</static-query>


<script>
  export default {
    mounted() {
      this.$static.milestones.edges.reverse()
    }
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-event {
    display: flex;
    align-items: center;
    font-family: sans-serif;
    width: 100%;
    margin: 15px auto;
    color: #444;

    &__header {
      padding-right: 1rem;

      &:not(:first-child) {
        display: none;
      }

      &__year {
        border: 4px solid #fed085;
        border-radius: 100%;
        color: #1e2425;
        display: block;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 500;
        height: 76px;
        line-height: 68px;
        text-align: center;
        width: 76px;
      }
    }



    &::after {
      flex: 1;
      background: #fed085;
      content: "";
      height: 4px;
    }
  }

  .m-milestones {
    padding: 5rem 0;

    h2 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 0 0 1rem;
    }

    .m-milestone {
      background: #fffcf7;
      display: inline-block;
      position: relative;
      margin-right: 1rem;
      margin-bottom: 1rem;
      padding-top: 4.25rem;
      padding-left: 3.25rem;
      padding-bottom: 2rem;
      padding-right: 2rem;

      h3 {
        color: #1e2425;
        font-family: 'Poppins', sans-serif;
        font-size: 28px;
        font-weight: 500;
        line-height: 28px;
        margin: 0 0 1.5rem;
      }
    }

    .m-milestone::before {
      border: 0.25rem solid #fed085;
      position: absolute;
      top: 1rem;
      left: 1rem;
      height: 100%;
      width: 100%;
      content: '';
    }
  }
</style>
