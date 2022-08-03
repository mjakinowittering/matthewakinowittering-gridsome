<template>
  <p class="m-timeframe"><i class="las la-calendar"></i> {{ dateFrom }} - {{ isPresent(dateTo) }} • {{ calcLengthOfService(dateFrom, dateTo) }}</p>
</template>


<script>
  import moment from "moment"

  export default {
    props: [
      'dateFrom',
      'dateTo'
    ],
    methods: {
      calcLengthOfService(dateFrom, dateTo) {
        const lengthOfServiceInMonths = this.calcLengthOfServiceInMonths(
          moment(dateFrom),
          dateTo !== null ? moment(dateTo) : moment()
        )

        if (lengthOfServiceInMonths < 12) {
          return this. lengthOfServiceLessThanOneYear(lengthOfServiceInMonths)
        } else if (lengthOfServiceInMonths < 13) {
          return this. lengthOfServiceOneYear(lengthOfServiceInMonths)
        } else {
          return this. lengthOfServiceGreaterThanOneYear(lengthOfServiceInMonths)
        }
      },
      calcLengthOfServiceInMonths(dateFrom, dateTo) {
        // Calculate the difference in Months as a decimal.
        // Then truncate to two decimal placed.
        // Then round up to nearest whole integer.
        return Math.ceil(dateTo.diff(dateFrom, 'months', true).toFixed(2))
      },
      isPresent(dateTo) {
        if (dateTo !== null) {
          return dateTo
        } else {
          return 'Present'
        }
      },
      lengthOfServiceLessThanOneYear(lengthOfServiceInMonths) {
        // Calculate difference in Months.
        const diffInMonths = lengthOfServiceInMonths
        // Cast suffix for Month unit.
        const monthSuffix  = (diffInMonths > 1) ? 'mths' : 'mth'
        // Return length of service.
        return `${diffInMonths} ${monthSuffix}`
      },
      lengthOfServiceOneYear(lengthOfServiceInMonths) {
        // Return length of service.
        return `${lengthOfServiceInMonths} yr`
      },
      lengthOfServiceGreaterThanOneYear(lengthOfServiceInMonths) {
        // Calculate difference in Years.
        const diffInYears  = Math.floor(lengthOfServiceInMonths / 12)
        // Calculate difference in Months.
        const diffInMonths = lengthOfServiceInMonths - (diffInYears * 12)
        // Cast suffix for Month unit.
        const monthSuffix  = (diffInMonths > 1) ? 'mths' : 'mth'
        // Cast suffix for Year unit.
        const yearSuffix   = (diffInYears > 1) ? 'yrs' : 'yr'
        // Return length of service.
        if (diffInMonths !== 0) {
          return `${diffInYears} ${yearSuffix} ${diffInMonths} ${monthSuffix}`
        } else {
          return `${diffInYears} ${yearSuffix}`
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

