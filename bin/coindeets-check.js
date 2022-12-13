const program = require('commander')
const checkCommands = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option('--coin  <type>', 'Indicate specific coin type(s)')
    .option('--curr <currency>', "Indicate currency", 'USD')
    .action((options) => checkCommands.price(options))

program.parse(process.argv);