import { Builtins, Cli } from "clipanion";
import { TestCommand } from "./commands";

const cli = new Cli({
  binaryLabel: "Apollo Operation Collection Tester",
  binaryName: "npx github:@apollosolutions/operation-collection-tester",
  binaryVersion: "0.0.1",
});

/* eslint-disable no-unused-vars */
const [_, __, ...args] = process.argv;

cli.register(TestCommand);
cli.register(Builtins.HelpCommand);
cli.runExit(args);
