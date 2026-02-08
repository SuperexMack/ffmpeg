import { exec } from "child_process";
import path from "path";

// const output = path.resolve((`${new Date().toLocaleString().split(",")[1]}.mp4`))
const inputFile = path.resolve("./Content/addingwatermark.mp4")

function makeDynamicWatermark() {
  const command = `
    ffmpeg -i ${inputFile} \
-vf \
"drawtext=fontfile=font.ttf:fontsize=80:fontcolor=red@0.5:text=userid1345: \
 x=if(eq(mod(t\\,2)\\,0)\\,rand(0\\,(W-tw))\\,x): \
 y=if(eq(mod(t\\,3)\\,0)\\,rand(0\\,(H-th))\\,y)" \
-c:v libx264 -crf 1 -c:a copy addingwatermarkoutput.mp4
`;

  exec(command, (error, stderr) => {
    if (error) {
      console.error("FFmpeg ERROR");
      console.error(stderr);
      return;
    }
    console.log("Dynamic watermark added");
  });
}

makeDynamicWatermark();
