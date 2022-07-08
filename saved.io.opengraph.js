// ----------------------------------------------------------------------------
// 3rd Party Modules.
const fs = require('fs')
const ogs = require('open-graph-scraper')
const yaml = require('js-yaml')


// ----------------------------------------------------------------------------
// Useful functions.
function crawlFileSystem() {
  const directories = getDirectories()

  for (const dirIndex in directories ) {
    const filesInDirectory = getFilesInDirectory(directories[dirIndex])

    for (const fileIndex in filesInDirectory) {
      let bookmarkPath = `${pathBase}/content/bookmarks/${directories[dirIndex]}/${filesInDirectory[fileIndex]}`

      // console.log(`Reading: ${bookmarkPath}`)

      let bookmarkObj = yaml.load(
        fs.readFileSync(
          bookmarkPath,
          'utf8'
        )
      )

      if (bookmarkObj.openGraph === undefined) {
        let ogsPayload = {
          onlyGetOpenGraphInfo: true,
          url: bookmarkObj.url
        }

        bookmarkObj.openGraph = ogs(ogsPayload)

        ogs(ogsPayload).then((data) => {
          const { result } = data;

          bookmarkObj.openGraph = Object.fromEntries(
            Object.entries(result).filter(([key]) => key.startsWith('og'))
          )

          fs.writeFileSync(
            bookmarkPath,
            yaml.dump(bookmarkObj),
            'utf8'
          )

          console.log(`Updated: ${bookmarkPath}`)
        })
      }
    }
  }
}


function getDirectories() {
  return fs.readdirSync(
    `${pathBase}/content/bookmarks`, { withFileTypes: true }
  )
  .filter(
    el => el.isDirectory()
  )
  .map(
    el => {
      return el.name
    }
  )
  .sort()
  .reverse()
}


function getFilesInDirectory(directoryName) {
  return fs.readdirSync(
    `${pathBase}/content/bookmarks/${directoryName}`, { withFileTypes: true }
  )
  .filter(
    el => el.isFile()
  )
  .map(
    el => {
      return el.name
    }
  )
  .sort()
}


// ----------------------------------------------------------------------------
// Variables required for writing to file system.
const pathBase = process.cwd()


// ----------------------------------------------------------------------------
// Run OpenGraph crawler for Bookmarks.
console.log(`Working in: ${pathBase}`)

crawlFileSystem()
