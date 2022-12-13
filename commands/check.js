const KeyManager = require('../lib/KeyManager')
const CryptoAPI =  require('../lib/CryptoAPI')

const check = {
    async price(options) {
        try {
            const key = new KeyManager();
            const currentAPIKey = key.getKey();

            const newAPICall = new CryptoAPI(currentAPIKey);
            const cryptoDetails = await newAPICall.getCrptoData(options.coin, options.curr)

            console.log(cryptoDetails);

        } catch (error) {
            console.error(error.message)
        }
    }
}

module.exports = check;