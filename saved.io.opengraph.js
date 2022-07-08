// ----------------------------------------------------------------------------
// 3rd Party Modules.
const fs = require('fs')
const yaml = require('js-yaml');


// ----------------------------------------------------------------------------
// Useful functions.
function crawlFileSystem() {
  const directories = getDirectories()

  for (const dirIndex in directories ) {
    const filesInDirectory = getFilesInDirectory(directories[dirIndex])

    for (const fileIndex in filesInDirectory) {
      console.log(`Reading: ${pathBase}/content/bookmarks/${directories[dirIndex]}/${filesInDirectory[fileIndex]}`)
      let bookmarkObj = yaml.load(
        fs.readFileSync(
          `${pathBase}/content/bookmarks/${directories[dirIndex]}/${filesInDirectory[fileIndex]}`,
          'utf8'
        )
      )

      if (bookmarkObj.openGraph !== undefined) {
        console.log(bookmarkObj)
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
  .reverse()
}


// ----------------------------------------------------------------------------
// Variables required for writing to file system.
const pathBase = process.cwd()


// ----------------------------------------------------------------------------
// Run OpenGraph crawler for Bookmarks.
console.log(`Working in: ${pathBase}`)

crawlFileSystem()
