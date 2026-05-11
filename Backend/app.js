import { exec } from "child_process";
import path from "path";
import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";
import { rateLimit } from "express-rate-limit";
const app = express();
const PORT = 9000;

// Already did that but commenting for now cuz pooling is not working in production

app.use(
  cors({
    origin: "https://savebiss.mohitsati.dev",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json({ limit: "500mb" }));

// This is the user's MiddleWare

const userMiddleware = (req, res, next) => {
  req.userid = Date.now().toString();
  next();
};

const limiter = rateLimit({
  windowMs: 40 * 60 * 1000,
  limit: 200,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  ipv6Subnet: 56,
  handler: (req, res) => {
    res.status(429).json({ msg: "Too many req , Try after 40 minutes" });
  },
});

app.use(limiter);

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./");
  },
  filename: (req, file, callback) => {
    callback(null, `input-${req.userid}.mp4`);
  },
});

var upload = multer({ storage: storage });

let userData = {};

app.get("/", (req, res) => {
  return res.json({ msg: "This is the testing v2 phase" });
});

app.post(
  "/getvideo/sendVideo",
  userMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      console.log("Life changing");
      let getUserId = req.userid;

      let userOutputFileName = `output-${getUserId}.mp4`;

      const filee = req.file.path;

      userData[getUserId] = { status: "Processing" };

      const fontPath = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf";

      const command = `
    ffmpeg -y -i "${filee}" \
-vf \
"drawtext=fontfile='${fontPath}':fontsize=80:fontcolor=red@0.5:text=userid1345: \
 x=if(eq(mod(t\\,2)\\,0)\\,rand(0\\,(W-tw))\\,x): \
 y=if(eq(mod(t\\,3)\\,0)\\,rand(0\\,(H-th))\\,y)" \
-c:v libx264 -crf 23 -c:a copy "${userOutputFileName}"
`;

      exec(command, (error) => {
        if (error) {
          userData[getUserId].status = "error";
          return;
        }

        userData[getUserId].status = "done";
        userData[getUserId].output = userOutputFileName;
      });

      let converter = JSON.stringify(userData[getUserId]);

      res.json({
        msg: `Video Recived Now wait for some Moments with userid ${getUserId} and ${converter}`,
        userid: getUserId,
      });
    } catch (error) {
      console.log(
        "There is some error while loading the file in the catch part",
      );
    }
  },
);

app.get("/pooling/:id", async (req, res) => {
  console.log("Inside of pooling");
  let poolingId = req.params.id;

  let job = userData[poolingId];

  if (!job) return res.status(404).json({ msg: "Invalid job id" });

  if (job.status === "processing") {
    res.status(404).json({ msg: "Got an error while converting the file" });
  } else if (job.status === "error") {
    res.status(202).json({ msg: "Video is processing" });
  } else {
    res.sendFile(path.resolve(job.output));

    setTimeout(() => {
      fs.unlink(`./input-${poolingId}.mp4`, () => {});
      fs.unlink(`./output-${poolingId}.mp4`, () => {});
      delete userData[poolingId];
    }, 3000);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on the PORT number ${PORT}`);
});
