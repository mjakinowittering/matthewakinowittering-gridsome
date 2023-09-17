// ----------------------------------------------------------------------------
// 3rd Party Modules.
import dotenv from 'dotenv'
import fs from 'fs'
import ogs from 'open-graph-scraper'
import yaml from 'js-yaml'

// ----------------------------------------------------------------------------
// Useful functions.
function crawlFileSystem() {
  const directories = getDirectories()

  for (const dirIndex in directories) {
    const filesInDirectory = getFilesInDirectory(directories[dirIndex])

    for (const fileIndex in filesInDirectory) {
      let bookmarkPath = `${pathBase}/content/bookmarks/${directories[dirIndex]}/${
        filesInDirectory[fileIndex]
      }`
      let bookmarkObj = yaml.load(fs.readFileSync(bookmarkPath, 'utf8'))

      if (bookmarkObj.openGraph === undefined) {
        let ogsPayload = {
          onlyGetOpenGraphInfo: true,
          url: bookmarkObj.url,
          headers: {
            'user-agent': process.env.OPENGRAPHSCRAPER_USERAGENT
          },
          downloadLimit: parseInt(process.env.OPENGRAPHSCRAPER_DOWNLOADLIMIT)
        }

        ogs(ogsPayload)
          .then(data => {
            const { error, result } = data

            if (error === false) {
              bookmarkObj.openGraph = Object.fromEntries(
                Object.entries(result).filter(([key]) => key.startsWith('og'))
              )

              fs.writeFileSync(bookmarkPath, yaml.dump(bookmarkObj), 'utf8')

              console.log(`Updated: ${bookmarkPath}`)
            }
          })
          .catch(error => {
            console.error({
              file: bookmarkPath,
              error: error
            })
          })
      } else {
        console.log(`Skipping: ${bookmarkPath}`)
      }
    }
  }
}

function getDirectories() {
  return fs
    .readdirSync(`${pathBase}/content/bookmarks`, { withFileTypes: true })
    .filter(el => el.isDirectory())
    .map(el => {
      return el.name
    })
    .sort()
    .reverse()
}

function getFilesInDirectory(directoryName) {
  return fs
    .readdirSync(`${pathBase}/content/bookmarks/${directoryName}`, {
      withFileTypes: true
    })
    .filter(el => el.isFile())
    .map(el => {
      return el.name
    })
    .sort()
}

// ----------------------------------------------------------------------------
// Load environment variables.
dotenv.config()

// Variables required for writing to file system.
const pathBase = process.cwd()

// ----------------------------------------------------------------------------
// Run OpenGraph crawler for Bookmarks.
console.log(`Working in: ${pathBase}`)

crawlFileSystem()
