#!/usr/bin/env node

import {program} from 'commander';
import * as packageJson from '../package.json';
import generateJournal from "./commands/generateJournal";
import {createSkillMatrix} from "./commands/generateSkillmatrix";

program.version(packageJson.version);

const generateCommand = program.command('generate')
    .alias('g')
    .description('Generate different types of entries');

generateCommand.command('journal')
    .description('Generate a journal entry for the current calendar week')
    .action(generateJournal);

generateCommand.command('skillmatrix')
    .description('Generate a skill matrix in an MDX file with a Mermaid diagram')
    .action(createSkillMatrix);

program.parse(process.argv);
