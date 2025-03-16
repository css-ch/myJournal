#!/usr/bin/env node

import { program } from 'commander';
import * as packageJson from '../package.json';
import generateJournal from "./commands/generateJournal";

program.version(packageJson.version);

const generateCommand = program.command('generate')
    .alias('g')
    .description('Generate different types of entries');

generateCommand.command('journal')
    .description('Generate a journal entry for the current calendar week')
    .action(generateJournal);

program.parse(process.argv);
