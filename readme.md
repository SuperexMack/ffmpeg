# SaveBiss 🔐

SaveBiss is a tool built to help **content creators and course sellers** protect their video content from piracy by adding a **dynamic watermark**.

The watermark moves randomly across the video and contains a **User ID**, making it easier to trace who leaked the content. The project is powered by **FFmpeg** and includes both a backend and a frontend demo.

---

## Features

- Dynamic moving watermark on videos  
- Watermark contains a User ID (currently random)  
- Hard to crop or predict due to random movement  
- Frontend demo to show how the system works  
- Open-source and contributor-friendly  

---

## Project Structure

After cloning the repository, you will get the following structure:

```text
ffmpeg/
├── Backend/
└── Frontend/
    └── client/

```

```
git clone https://github.com/SuperexMack/ffmpeg.git
````

```
cd ffmpeg/Backend
npm i 
node app
```

```
cd ffmpeg/Frontend/client
npm i 
npm run dev
```
- Now go to the localhost:3000 for using the Application
---

# ⚠️ Known Issues & Current Status
Current Status: 🚧 Work in Progress / Beta

This project is fully functional locally, but there are some known issues with deployment and polling that need attention.

1. Polling & Processing Errors
I implemented a polling mechanism to check for video processing status, but it currently shows bugs and according to be it is because of the free servers that we are using and is not functioning 100% correctly. TL;DR pooling is not working in free tier servers (which is obvious ig)

2. Deployment Limitations (Render & Railway)
Render: I attempted to deploy on Render, but their free tier does not support persistent file creation/storage, which is necessary for FFmpeg to write the output videos.

Railway: I also attempted deployment on Railway. While it generally supports this, I am currently facing issues where the application is not supported or crashing.

Because of these issues, it is highly recommended to run this project LOCALLY .

Dockerizing the product is my next target. If any of you want to help, feel free to make a PR.

---

- Visit  - https://savebiss.vercel.app to learn how to use this tool.