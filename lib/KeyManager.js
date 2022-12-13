const pkg = require('../package.json')
const Configstore = require('configstore');


class KeyManager {
    constructor() {
        this.configs = new Configstore(pkg.name);
    }

    setKey(key) {
        this.configs.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.configs.get('apiKey');
        if (!key) {
            throw new Error('No API Key Found - Get at https://coinmarketcap.com/api/'.red)
        }
        return key;
    }

    deleteKey() {
        const key = this.configs.get('apiKey');
        if (!key) {
            throw new Error('No API Key Found - Get at https://coinmarketcap.com/api/')
        }
        this.configs.delete('apiKey');
        return;
    }


}

module.exports = KeyManager;