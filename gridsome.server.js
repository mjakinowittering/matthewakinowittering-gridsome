// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios")
const moment = require("moment-timezone")


function getFirstDayOfMonthUnixtime(dateObj) {
  // https://bobbyhadz.com/blog/javascript-get-first-day-of-month
  let firstDayCurrentMonth = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    1
  )
  return unixtime = firstDayCurrentMonth.getTime() / 1000
}


module.exports = function (api) {
  api.loadSource(async actions => {
    const publishedAtResolver = {
      type: "Date",
      args: {
        format: "String"
      },
      resolve(obj, args) {
        // https://gridsome.org/docs/schema-api/#add-custom-field-resolvers
        // https://stackoverflow.com/questions/23483787/convert-unix-timestamp-with-a-timezone-to-javascript-date
        const tzFormat = "Europe/London"
        const dateFormat = "YYYY-MM-DDTHH:mm:ssZ"

        if (args.format) {
          return moment.unix(obj.id).tz(tzFormat).format(args.format);
        } else {
          return moment.unix(obj.id).tz(tzFormat).format(dateFormat);
        }
      }
    }

    actions.addSchemaResolvers({
      PostPublished: {
        publishedAt: publishedAtResolver
      }
    })

    const bookmarkPublishedCollection = actions.addCollection("BookmarkPublished")

    actions.addSchemaResolvers({
      BookmarkPublished: {
        publishedAt: publishedAtResolver
      }
    })

    const bookmarkCollection = actions.addCollection({
      typeName: "Bookmark"
    })

    let page = 1
    let limit = 10
    let num_of_results = 0

    do {

      const response = await axios.get(
        "http://devapi.saved.io/bookmarks",
        {
          params:{
            key: process.env.SAVEDDOTIO_KEY,
            devkey: process.env.SAVEDDOTIO_DEVKEY,
            page: page,
            limit: limit
          }
        }
      )

      num_of_results = response.data.length

      for (let bookmark of response.data) {
        let bookmarkPublishedDateObj = new Date(bookmark.bk_date)
        let bookmarkPublishedId = getFirstDayOfMonthUnixtime(bookmarkPublishedDateObj)

        if(bookmarkPublishedCollection.getNodeById(bookmarkPublishedId) == null) {
          bookmarkPublishedCollection.addNode({
            id: bookmarkPublishedId
          })
        }

        bookmarkCollection.addNode({
          id: bookmark.bk_id,
          url: bookmark.bk_url,
          title: bookmark.bk_title,
          note: bookmark.bk_note,
          createdAt: bookmarkPublishedDateObj.toISOString(),
          published: actions.createReference("BookmarkPublished", bookmarkPublishedId)
        })
      }

      page++

    } while (num_of_results === limit)

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
