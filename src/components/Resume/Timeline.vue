<template>
  <div class="m-timeline">
    <Event :event="event" v-for="event in events" :key="event.node.id" />
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
