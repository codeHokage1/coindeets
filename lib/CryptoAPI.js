const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/'
    }

    async getCrptoData(coin, curr) {
        try {
            const allCoins = []
            if (coin) {
                allCoins = coin.split(',');
            }

            const currFormater = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: curr,
            })

            const response = await axios.get(this.baseURL + `listings/latest?convert=${curr}`, {
                headers: {
                    'X-CMC_PRO_API_KEY': this.apiKey
                }
            })
            let coinDataRefined = [];
            if (coin) {
                coinDataRefined = response.data.data.filter(coinData => allCoins.includes(coinData.symbol));
            } else {
                coinDataRefined = response.data.data.slice(0, 10);
            }

            let output = ""
            coinDataRefined.forEach(item => {
                output += `${'Coin'.green}: ${item.symbol.yellow} (${item.name}) | ${'Price'.green}: ${currFormater.format(item.quote[curr].price)} | ${'Rank'.blue}: ${item.cmc_rank}\n`
            })

            return output;
        } catch (error) {
            if (error.response.status === 401) {
                console.log('Your API key is not working. Check it again or get a new one: https://coinmarketcap.com/api/'.red)
            } else {
                console.error(error.message);
            }
        }
        
    }
}

module.exports = CryptoAPI;