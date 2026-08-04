import chalk from "chalk";
import { isCancel, select } from "@clack/prompts";

export async function runcli(){
    while(true) {
        const mode = await select({
            message : "Chode CLI sub-mode",
            options: [
                { value: "agent", label: "Agent Mode" },
                { value: "plan", label: "Plan Mode" },
                { value: "ask", label: "Ask Mode" },
                { value: "back", label: "← Back to main menu" },
              ],
        });

        if (isCancel(mode) || mode === "back") return;
    }
}