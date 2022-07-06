// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const moment = require('moment-timezone')


const domainResolver = {
  type: 'String',
  resolve(obj) {
    const urlObj = new URL(obj.url)

    return urlObj.hostname.replace('www.', '')
  }
}


const publishedAtResolver = {
  type: 'Date',
  args: {
    format: 'String'
  },
  resolve(obj, args) {
    // https://gridsome.org/docs/schema-api/#add-custom-field-resolvers
    // https://stackoverflow.com/questions/23483787/convert-unix-timestamp-with-a-timezone-to-javascript-date
    const tzFormat = 'Europe/London'
    const dateFormat = 'YYYY-MM-DDTHH:mm:ssZ'

    if (args.format) {
      return moment.unix(obj.id).tz(tzFormat).format(args.format)
    } else {
      return moment.unix(obj.id).tz(tzFormat).format(dateFormat)
    }
  }
}


module.exports = function (api) {
  api.loadSource(async actions => {
    actions.addSchemaResolvers({
      PostPublished: {
        publishedAt: publishedAtResolver
      }
    })


    actions.addSchemaResolvers({
      BookmarkPublished: {
        publishedAt: publishedAtResolver
      }
    })


    actions.addSchemaResolvers({
      Bookmark: {
        domain: domainResolver
      }
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
