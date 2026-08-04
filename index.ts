#!/usr/bin/env bun

import { Command } from "commander";
import { wakeup } from "./tui/wakeup";

const program = new Command();

program.name("openClaw-build").description("Build your openClaw project").version("1.0.0");

program
    .command("wakeup")
    .description("show the banner and pick cli and telegram mode")
    .action(async () => {
        await wakeup();
    });

await program.parseAsync(process.argv);