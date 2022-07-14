'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const clipanion_1 = require('clipanion');
const commands_1 = require('./commands');
const cli = new clipanion_1.Cli({
  binaryLabel: 'Apollo Operation Collection Tester',
  binaryName: 'npx github:@apollosolutions/operation-collection-tester',
  binaryVersion: '0.0.1',
});
/* eslint-disable no-unused-vars */
const [_, __, ...args] = process.argv;
cli.register(commands_1.TestCommand);
cli.register(clipanion_1.Builtins.HelpCommand);
cli.runExit(args);
