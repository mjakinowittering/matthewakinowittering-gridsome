<template>
  <layout>
    <div class="m-headline">
      <div class="container">
        <div class="columns">
          <div class="column is-flex is-justify-content-center is-flex-direction-column">
            <h1 class="title">Hello, I am a Matthew!</h1>
            <p class="subtitle">I am a Product Manager with over <time v-bind:title="timeSinceBecomingProductManagerTitle()" v-bind:datetime="productManager.dateSince">{{ timeSinceBecomingProductManager() }}</time> of experience.</p>
          </div>
          <div class="column is-flex is-justify-content-right is-hidden-mobile">
            <g-image src="~/assets/img/photos/MatthewAkinoWittering-BW-Alpha.png" alt="Photo of Matthew Akino-Wittering" />
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>


<script>
  import moment from 'moment';
  export default {
    data() {
      return {
        productManager: {
          dateSince: new Date('2010-06-01T00:00:00+0000')
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
        return `Product Manager since ${this.monthBecameProductManager()} ${this.yearBecameProductManager()}`
      }
    }
  }
</script>


<style lang="scss" scoped>
  div.m-headline {
    background: orange;
  }
</style>
