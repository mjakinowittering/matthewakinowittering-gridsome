<template>
  <div class="m-topic">
    <h2>{{ title }}</h2>
    <div class="m-topic__organisation" v-for="(organisation, index) in organisations" :key="organisation.node.id">
      <h3>
        <g-link :to="organisation.node.address">{{ organisation.node.name }}</g-link>
      </h3>
      <Timeframe :dateFrom="organisation.node.dateFrom" :dateTo="organisation.node.dateTo" v-if="organisation.node.events.edges.length > 1" />
      <Timeline :events="organisation.node.events.edges" />
      <hr v-if="index != organisations.length - 1">
    </div>
  </div>
</template>


<script>
  import Timeframe from '~/components/Resume/Timeframe.vue'
  import Timeline from '~/components/Resume/Timeline.vue'
  export default {
    props: [
      'title',
      'organisations'
    ],
    components: {
      Timeframe,
      Timeline
    }
  }
</script>


<style lang="scss">
  .m-topic {
    margin: 1.5rem 0 0;

    h2 {
      color: #1e2425;
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 500;
      line-height: 32px;
      margin: 3rem 0 0;
    }

    &__organisation {
      h3 {
        color: #2a898f;
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
        margin: 1rem 0 0;
      }

      hr {
        background: none;
        border-top: 0.15rem solid #2a898f;
        margin: 3rem auto;
        opacity: 0.2;
        width: 33%;
      }
    }
  }
</style>
