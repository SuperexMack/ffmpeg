import { exec } from "child_process";
import path from "path";
import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";
const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json({ limit: "100mb" }));

console.log("mai aaya")


let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./");
  },
  filename: (req, file, callback) => {
    callback(null,"input.mp4");
  },
});

console.log("mai maiaaya")

var upload = multer({ storage: storage });

app.post("/getvideo/sendVideo", upload.single("file"), (req, res) => {
  
  const filee = req.file.path;

  console.log("aandar")

  const command = `
    ffmpeg -i ${filee} \
-vf \
"drawtext=fontfile=font.ttf:fontsize=80:fontcolor=red@0.5:text=userid1345: \
 x=if(eq(mod(t\\,2)\\,0)\\,rand(0\\,(W-tw))\\,x): \
 y=if(eq(mod(t\\,3)\\,0)\\,rand(0\\,(H-th))\\,y)" \
-c:v libx264 -crf 1 -c:a copy addingwatermarkoutput.mp4
`;

console.log("aur aandar")

  exec(command, (error, stderr) => {
    if (error) {
      console.error("FFmpeg ERROR");
      console.error(stderr);
      return res.json({
        msg: "Something went wrong while adding the watermark",
      });
    }
    console.log("Dynamic watermark added");
    console.log("aur aur aandar")
    res.sendFile(path.resolve("./addingwatermarkoutput.mp4"));

    setTimeout(()=>{
       fs.unlink("./input.mp4", () => {});
       fs.unlink("./addingwatermarkoutput.mp4", () => {});
    },3000)
  });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on the PORT number ${PORT}`);
});
