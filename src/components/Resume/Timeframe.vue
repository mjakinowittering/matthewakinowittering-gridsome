<template>
  <p class="m-timeframe"><i class="las la-calendar"></i> {{ dateFrom }} - {{ isPresent(dateTo) }} • ELAPSED TIME</p>
</template>


<script>
  export default {
    props: [
      'dateFrom',
      'dateTo'
    ],
    methods: {
      isPresent(dateTo) {
        if (dateTo !== null) {
          return dateTo
        } else {
          return 'Present'
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

  .m-timeframe {
    color: #1e2425;
    color: #464d4d;
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
  }
</style>

