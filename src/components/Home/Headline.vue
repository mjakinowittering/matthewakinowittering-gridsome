<template>
  <div class="m-headline">
    <div class="container">
      <div class="columns">
        <div
          class="column is-two-thirds-desktop is-flex is-justify-content-center is-flex-direction-column"
        >
          <h1>Hello, I am a Matthew!</h1>
          <div class="content">
            <p>
              I am a Lead Product Manager with over
              <time
                v-bind:title="timeSinceBecomingProductManagerTitle()"
                v-bind:datetime="productManager.dateSince"
                >{{ timeSinceBecomingProductManager() }}</time
              >
              of experience. I build data-driven products that support businesses by integrating
              Advertising and eCommerce technologies in innovative ways to create competitive
              advantages within the MarTech space.
            </p>
          </div>
          <div class="buttons">
            <a
              class="button m-headline__is-primary"
              href="https://www.linkedin.com/in/matthewwittering/"
              target="_blank"
              >Get in Touch</a
            >
            <g-link to="/resume/" class="button m-headline__is-link">My Resume</g-link>
          </div>
        </div>
        <div class="column is-one-third-desktop is-flex is-justify-content-center is-hidden">
          <g-image
            class="m-headline__avatar"
            src="~/assets/img/icons/typist.svg"
            alt="Photo of Matthew Akino-Wittering"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      productManager: {
        dateSince: new Date('2010-01-01T00:00:00+0000')
      }
    }
  },
  methods: {
    timeSinceBecomingProductManager() {
      return moment(this.productManager.dateSince).fromNow('y')
    },
    monthBecameProductManager() {
      return this.productManager.dateSince.toLocaleString('default', { month: 'long' })
    },
    yearBecameProductManager() {
      return this.productManager.dateSince.toLocaleString('default', { year: 'numeric' })
    },
    timeSinceBecomingProductManagerTitle() {
      return `I've worked in Product Management roles since ${this.monthBecameProductManager()} ${this.yearBecameProductManager()}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.m-headline {
  margin: 0 1rem;
  padding: 2.5rem 0;

  h1 {
    color: #1e2425;
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 36px;
    margin: 0 0 1.5rem;
  }

  &__is-primary {
    background: #2a898f;
    border: 0.25rem solid #2a898f;
    border-radius: 0;
    color: #ffffff;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
    padding: 1.25rem 1.25rem !important;
    text-transform: uppercase;
  }

  &__is-link {
    background: #f2fbfa;
    border: 0.25rem solid #2a898f;
    border-radius: 0;
    color: #2a898f;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
    padding: 1.25rem 1.25rem !important;
    text-transform: uppercase;
  }

  .buttons {
    margin: 0;
  }

  &__avatar {
    fill: #94d31b;
  }
}

@media screen and (min-width: 1024px) {
  .m-headline {
    margin: 0;
    padding: 5rem 0;
  }
}
</style>
