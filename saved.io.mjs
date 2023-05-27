// ----------------------------------------------------------------------------
// 3rd Party Modules.
import { load } from 'cheerio'
import dotenv from 'dotenv'
import fs from 'fs'
import puppeteer from 'puppeteer'
import yaml from 'js-yaml'


// ----------------------------------------------------------------------------
// Useful functions.
async function savedDotIoScraper () {
    let savedDotIoResults = []
    let hasNextPage = true

    const browser = await puppeteer.launch({
        headless: false,
        args: [
            `--window-size=${ process.env.SAVEDDOTIO_WINDOWWIDTH },${ process.env.SAVEDDOTIO_WINDOWHEIGHT }`
        ],
        defaultViewport: {
            width: parseInt(process.env.SAVEDDOTIO_VIEWPORTWIDTH),
            height: parseInt(process.env.SAVEDDOTIO_VIEWPORTHEIGHT)
        }
    })

    const page = await browser.newPage()

    await page.goto('https://saved.io/login')
    console.log(`Get: ${page.url()}`)

    await page.waitForSelector('#email')
    await page.type('#email', process.env.SAVEDDOTIO_EMAIL, { delay: 50 })

    await page.waitForSelector('#password')
    await page.type('#password', process.env.SAVEDDOTIO_PASSWORD, { delay: 50 })

    await Promise.all([
        page.click('form.login input[type=submit]'),
        page.waitForNavigation()
    ])

    while(hasNextPage !== false) {
        try {
            console.log(`Get: ${page.url()}`)

            let pageData = await page.evaluate(() => {
                return document.documentElement.innerHTML
            })

            let $ = load(pageData)

            $('div.bookmarks').each((idx, el) => {
                if ($(el).find('input[type=checkbox]').attr('id') !== undefined) {
                    savedDotIoResults.push({
                        page: page.url(),
                        bk_id: $(el).find('input[type=checkbox]').attr('id'),
                        bk_url: $(el).find('h3 a').attr('href'),
                        bk_title: $(el).find('h3 a').text(),
                        bk_date: $(el).find('time').attr('datetime')
                    })
                }
            })

            await Promise.all([
                page.waitForSelector('h3.text-right a', {timeout: 2500}),
                page.click('div.bookmarks:last-child h3.text-right a'),
                page.waitForNavigation()
            ])

        } catch (error) {
            console.log(`Completed`)
            hasNextPage = false
        }
    }

    await browser.close()

    return savedDotIoResults
}


async function savedDotIoParser (scaperResults) {
    for (let rawBookmarkObj of scaperResults) {
        let bookmarkPublishedDateObj = getDatetimeInTimezone(rawBookmarkObj.bk_date, 'Europe/London')
        let bookmarkPublishedId = getFirstDayOfMonthUnixtime(bookmarkPublishedDateObj, 'Europe/London')
        let bookmarkSubDirectory = `${pathBase}/content/bookmarks/${bookmarkPublishedDateObj.getFullYear()}-${padString(bookmarkPublishedDateObj.getMonth() + 1)}`
        let bookmarkPath = `${bookmarkSubDirectory}/${rawBookmarkObj.bk_id}.yml`

        if (pathExists(bookmarkSubDirectory) === false) {
            fs.mkdirSync(bookmarkSubDirectory)
            console.log(`Created: ${bookmarkSubDirectory}`)
        }

        let bookmarkObj = {
            id: rawBookmarkObj.bk_id,
            url: rawBookmarkObj.bk_url,
            title: rawBookmarkObj.bk_title,
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
}


function getDatetimeInTimezone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('en-US', {
            timeZone,
            }),
        )
    }

    return new Date(
        date.toLocaleString('en-US', {
            timeZone,
        }),
    )
}


function getFirstDayOfMonthUnixtime(dateObj, timeZone) {
    let firstDayCurrentMonth = new Date(
        dateObj.getFullYear(),
        dateObj.getMonth(),
        1
    )

    let firstDayCurrentMonthInTimezone = new Date(
        firstDayCurrentMonth.toLocaleString('en-US', {
            timeZone,
        }),
    )

    return firstDayCurrentMonthInTimezone.getTime() / 1000
}


function padString(num) {
    return String("00" + num).slice(-2)
}


function pathExists(pathStr) {
    if (fs.existsSync(pathStr)) {
        return true
    } else {
        return false
    }
}
// ----------------------------------------------------------------------------
// Load environment variables.
dotenv.config()

// Variables required for writing to file system.
const pathBase = process.cwd()


// ----------------------------------------------------------------------------
// Run crawler for Bookmarks stored in Saved.io.
savedDotIoParser(
    await savedDotIoScraper()
)
