const program = require('commander');
const keyCommands = require('../commands/key')

program
    .command('set')
    .description('Set API key -- Get the key at www.nomics.com')
    .action(keyCommands.set)

program
    .command('show')
    .description('Getting API Key')
    .action(keyCommands.show)

program
    .command('remove')
    .description('Delete API Key')
    .action(keyCommands.remove)


program.parse(process.argv)