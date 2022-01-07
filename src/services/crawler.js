const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const _ = require("lodash")
const moment = require("moment")

class Crawler
{
    constructor()
    {
        this.axios = axios
        this.cheerio = cheerio
        this.pretty = pretty
    }

    async search(type, country)
    {
        try {
            const base = `https://top10.netflix.com`
            const response = await axios(base + `/${country}/${type}`)
            const $ = cheerio.load(response.data)
            const list = $('.list-table')
            if (list.length) {
                for (let item of list) {
                    let title = $(item).children('div').children('table').children('tbody').children('tr').text()
                    console.log(title + '\n')
                }
            }

        } catch (error) {
            console.log(error, error.message);
        }
    }

}
module.exports = new Crawler()