#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', "Manage API keys -- https://coinmarketcap.com/api/")
    .command('check', "Check crypto coins details")
    .parse(process.argv)

