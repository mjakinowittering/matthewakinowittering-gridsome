<template>
  <div class="m-event">
    <h4>{{ event.node.title }}</h4>
    <Timeframe :dateFrom="event.node.dateFrom" :dateTo="event.node.dateTo" />
    <div class="content" v-html="event.node.content"></div>
  </div>
</template>


<script>
  import Timeframe from '~/components/Resume/Timeframe.vue'
  export default {
    props: [
      "event"
    ],
    components: {
      Timeframe
    }
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

  .m-event {
    margin: 1.5rem 0;

    h4 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      margin: 0;
    }

    .content {
      margin: 1rem 0 0;
    }
  }
</style>
