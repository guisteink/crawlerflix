const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const _ = require("lodash")
const moment = require("moment");
const { forEach } = require("lodash");

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
            let array = []

            let arrayPositions = []
            let arrayTitles = []
            let arrayWeeks = []

            const base = `https://top10.netflix.com`
            const response = await this.axios(base + `/${country}/${type}`)
            const $ = this.cheerio.load(response.data)
            const list = $('.list-table')
            let week = $('.tracking-wider')

            _.forEach(week, (item, index) =>
            {
                if (index === 1) {
                    week = $(item).text()
                    return false;
                }
            })

            if (list.length) {
                for (let item of list) {
                    let positions = $(item).children('div').children('table').children('tbody').children('tr').children('.opacity-60')
                    let titles = $(item).children('div').children('table').children('tbody').children('tr').children('.font-600')
                    let weeksOnTop = $(item).children('div').children('table').children('tbody').children('tr').children('.overflow-hidden').children('div').children('div').children("span")

                    for (let pos of positions) {
                        let aux = $(pos).text()
                        arrayPositions.push(aux)
                    }

                    for (let title of titles) {
                        let aux = $(title).text()
                        arrayTitles.push(aux)
                    }

                    for (let week of weeksOnTop) {
                        let aux = $(week).text()
                        arrayWeeks.push(aux)
                    }

                    for (let i = 0; i < arrayWeeks.length; i++) {
                        array.push({
                            position: arrayPositions[i],
                            title: arrayTitles[i],
                            weeksOnTop: arrayWeeks[i]
                        })
                    }
                }
            }

            return { array, week }
        } catch (error) {
            console.log(error, error.message);
        }
    }

}
module.exports = new Crawler()