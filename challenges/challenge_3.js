'use strict'


/**
 * Search all values and returns the max profit that you can obtain, or not.
 * @param {number[]} prices 
 */
const GetMaxProfit = (prices) => {

    let max = 0;

    prices.forEach((price, day) => {
        prices.forEach((price2, day2) => {
            if (day != day2 && day2 > day) {
                if (price2 - price > max) {
                    max = price2 - price;
                }
            }
        })
    })

    if (max > 0)
        console.log(`Max Profit: ${max}`)
    else 
        console.log(`Doesn't have any profit`)
}

const GetValueFromCmd = () => {
    const { argv } = process;
    const { 0: PRICES_RAW } = argv.slice(2, argv.length);
    const PRICES = PRICES_RAW.split(',').map(i => +i)

    return { PRICES }
}

let { PRICES } = GetValueFromCmd();
GetMaxProfit(PRICES);

module.exports = {
   GetMaxProfit,
   GetValueFromCmd
}