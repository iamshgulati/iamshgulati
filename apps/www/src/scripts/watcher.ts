import { watch } from "chokidar";
import { WebSocketServer } from "ws";

const dataDir = "./src/data";

const wss: WebSocketServer = new WebSocketServer({ port: 3001 });
const watchCallbacks: (() => void)[] = [];

watch(dataDir)
  .on("ready", () => {
    console.log(`🔎 Watcher ready. Looking for changes in "${dataDir}"`);
  })
  .on("all", (event) => {
    if (event === "change") {
      watchCallbacks.forEach((callback) => callback());
    }
  });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  watchCallbacks.push(onChange);
  ws.on("close", function close() {
    const index = watchCallbacks.findIndex(onChange);
    watchCallbacks.splice(index, 1);
  });

  function onChange() {
    ws.send("refresh");
  }
});
