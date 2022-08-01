<template>
  <div class="m-history">
    <div class="m-timeline">
      <Event :event="event" v-for="event in events" :key="event.node.id" />
    </div>
  </div>
</template>


<script>
  import Event from '~/components/Resume/Event.vue'
  export default {
    props: [
      'events'
    ],
    components: {
      Event
    }
  }
</script>


<style lang="scss" scoped>
  .m-history {
    .m-timeline {
      hr {
        background: #2a898f;
        margin: 3rem auto 3rem;
        opacity: 0.2;
        width: 33%;
      }
    }
  }
</style>
