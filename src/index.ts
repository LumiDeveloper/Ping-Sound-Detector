import * as ping from "ping";
const player = require("node-wav-player");

let flag = false;

async function pingCheck() {
    const res = await ping.promise.probe("google.com", {timeout: 2})

    if (res.alive){
        if(!flag){
            console.log("Ping OK - WAV")
            flag = true;
            player.play({path: "./sound.wav"}).catch((err: Error) => console.error("Error audio: ", err));
        }
        else {
            console.log("PING is reversive OK (flag = true)")
        }
        }

    else {
        console.log("Ping to FAIL");
        flag = false
    }
}

setInterval(pingCheck, 3000);

console.log("Let's go!")