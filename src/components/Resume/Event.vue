<template>
  <div class="event">
    <h4>{{ event.node.title }}</h4>
    <Timeframe :dateFrom="event.node.dateFrom" :dateTo="event.node.dateTo" />
    <div v-html="event.node.content"></div>
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
