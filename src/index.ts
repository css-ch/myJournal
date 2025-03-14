#!/usr/bin/env node

import { program } from 'commander';

import createCommand from './commands/create';

program
    .command('create <name>')
    .description('Create a new journal file')
    .action(createCommand);

program.parse(process.argv);
