// ----------------------------------------------------------------------------
// 3rd Party Modules.
const axios = require('axios')
const dotenv = require('dotenv')
const fs = require('fs')
const yaml = require('js-yaml');


// ----------------------------------------------------------------------------
// Useful functions.
async function crawlSavedio(page, limit, totalCount, numOfResults) {
  try {
    do {
      let axiosResponse = await axios.get(
        'http://devapi.saved.io/bookmarks',
        {
          params: {
            key: process.env.SAVEDDOTIO_KEY,
            devkey: process.env.SAVEDDOTIO_DEVKEY,
            page: page,
            limit: limit
          }
        }
      )

      totalCount = parseInt(axiosResponse.headers['x-total-count'])
      numOfResults += axiosResponse.data.length

      console.log(`Retrieved page ${page} of ${Math.ceil(totalCount / limit)}`)

      for (let rawBookmarkObj of axiosResponse.data) {
        let bookmarkPublishedDateObj = new Date(rawBookmarkObj.bk_date)
        let bookmarkPublishedId = getFirstDayOfMonthUnixtime(bookmarkPublishedDateObj)
        let bookmarkSubDirectory = `${pathBase}/content/bookmarks/${bookmarkPublishedDateObj.getFullYear()}-${padString(bookmarkPublishedDateObj.getMonth())}`
        let bookmarkPath = `${bookmarkSubDirectory}/${rawBookmarkObj.bk_id}.yml`

        if (pathExists(bookmarkSubDirectory) === false) {
          fs.mkdirSync(bookmarkSubDirectory)

          console.log(`Created: ${bookmarkSubDirectory}`)
        }

        bookmarkObj = {
          id: rawBookmarkObj.bk_id,
          url: rawBookmarkObj.bk_url,
          title: rawBookmarkObj.bk_title,
          note: rawBookmarkObj.bk_note,
          createdAt: bookmarkPublishedDateObj.toISOString(),
          publishedMonth: bookmarkPublishedId
        }

        if (pathExists(bookmarkPath) === false) {
          fs.writeFileSync(
            bookmarkPath,
            yaml.dump(bookmarkObj),
            'utf8'
          )

          console.log(`Created: ${bookmarkPath}`)
        }
      }

      page++
    } while (numOfResults !== totalCount)
  } catch (err) {
    console.error(err)
  }
}


function getFirstDayOfMonthUnixtime(dateObj) {
  let firstDayCurrentMonth = new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    1
  )
  return unixtime = firstDayCurrentMonth.getTime() / 1000
}


function padString(num) {
  return String("00" + num).slice(-2);
}


function pathExists(pathStr) {
  if (fs.existsSync(pathStr)) {
    return true
  } else {
    return false
  }
}


// ----------------------------------------------------------------------------
// Variables required for writing to file system.
dotenv.config()
const pathBase = process.cwd()


// ----------------------------------------------------------------------------
// Variables required for Saved.io.
let page = 1
let limit = 10
let totalCount = 0
let numOfResults = 0


// ----------------------------------------------------------------------------
// Run crawler for Bookmarks stored in Saved.io.
console.log(`Working in: ${pathBase}`)

crawlSavedio(page, limit, totalCount, numOfResults)
