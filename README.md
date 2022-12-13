# Coindeets - Crypto Details Tool
Coindeets is an easy-to-use CLI tool that is used to get simple details about crypto-currencies and digital assets. 
The tool can be downloaded here :link: : [Coindeets](https://www.npmjs.com/package/coindeets)

The tool works with an endpoint from the [CoinMarket](https://coinmarketcap.com) API :link: : https://coinmarketcap.com/api/

This means that each user would have to get an API key in order to use Coindeets. It is very simple and direct. Kindly follow this link :link: : https://coinmarketcap.com/api

## Features:
1. Coindeets provide real time simple details about cryptocurrencies and digital assests: **Name, Symbol, Price, Rank**
2. The tool also provide information about one or more specific cryptocurrencies
3. Users can also convert the price of assests to their currency of choice. See [here](https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions) to confirm the currencies accepted and their respective codes.

- Sample Output:
```
Coin: BTC (Bitcoin) | Price: $17,188.73 | Rank: 1
```

## How to use:
1. Download the package
```
npm i -g coindeets
```
2. Run the tool directly or with the help option to see the full details of the application
```
coindeets -h
```
3. Follow the commands outlisted above, as required.


## Commands:
- **#Help & Full Commands**
```
coindeets -h
```
N.B: You can always add *-h or --help* to any command (including the ones below) to get more details
- **#API Key Management Commands**
```
coindeets key set
coindeets key show
coindeets key remove
```
- **#Crypto Details Commands**
```
coindeets check price [options]
```
The options are optional and can accept two key-value pairs: *--coin* and *--curr*. This allows to check details for one or more specific cryptocurrencies and to convert their fiat values to a specific currency, respectively.
For example,
```
coindeets check price --coin=BTC
coindeets check price --coin=BTC,USDT,BNB
coindeets check price --curr=NGN 
coindeets check price --coin=BTC --curr=EUR
```
Without the options, the application will return the first 10 crypto assests, sorted by the official CoinMarketCap rank as at the time and in USD.


## Technologies & Platforms used:
1. Javascript (Node JS)
2. Axios, Colors, Commander JS and Inquirer modules
3. CoinMarkertCap API


## Credits:
This project was inspired and done after a follow up study of the [Traversy Media's](https://https://traversymedia.com/) "Node.js CLI For Cryptocurrency Prices" project video on [Youtube](https://www.youtube.com/watch?v=-6OAHsde15E&list=PLOIqoeraV94gtjixvyve7Lywvhg9QB_XW&index=1)