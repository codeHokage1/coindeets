const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const isRequired = require('../utils/validate')

const Key = {
    async set() {
        const newKey = new KeyManager();
        const input = await inquirer.prompt([
            {
               type: 'input',
               name: 'key',
               message: "Enter API key ".blue + "(Get from https://coinmarketcap.com/api/): ",
               validate: isRequired.isRequired
            }
        ])
        const key = newKey.setKey(input.key);
        
        if (key) {
            console.log("API Key Set!".green)
        }
    },
    show() {
        try {
            const newKey = new KeyManager();
            const key = newKey.getKey();
            console.log("Current API Key:".yellow, key.green);
            
            return key;
        } catch (error) {
            console.log(error.message.red)
        }
    },
    remove() {
        try {
            const newKey = new KeyManager();
            newKey.deleteKey();

            console.log("Key removed!".green);
            
            return;
        } catch (error) {
            console.log(error.message.red)
        }
    }
}

module.exports = Key;