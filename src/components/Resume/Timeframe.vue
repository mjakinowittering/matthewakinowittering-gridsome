<template>
  <p class="timeframe"><i class="las la-calendar"></i> {{ dateFrom }} - {{ isPresent(dateTo) }}</p>
</template>


<script>
  export default {
    props: [
      "dateFrom",
      "dateTo"
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
