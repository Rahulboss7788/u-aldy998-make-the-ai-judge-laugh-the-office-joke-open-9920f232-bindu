import { readFileSync, writeFileSync } from "node:fs";

const text = "Our printer only jams when the deadline is real — the rest of the week it works perfectly, just to prove it chooses violence.";

writeFileSync("/output/entry.txt", text, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) throw new Error("entry.txt does not match expected text");
if (back.length < 1 || back.length > 200) throw new Error("entry length outside 1-200 gate");
if (back.trim().length === 0) throw new Error("entry is only whitespace");
