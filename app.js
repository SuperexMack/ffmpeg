import express from "express"
import ffmeg from "ffmpeg"
const app = express()
const PORT = 9000

app.get("/",(req,res)=>{
	return res.json({msg:"This is the ffmeg"})

})

const checkVideo = ()=>{
  let process = new ffmeg('./fa.mp4');
  process
  .then((video)=>{
	  video.fnAddWatermark("./oneoo.jpg" , "./onePeice.mp4",{
		  position:"SE",
	  },(error,file)=>{
		  if(!error) console.log("Your file is " + file)
		  else console.log("Some error occured while giving the file")
	  })
  })
  .catch((error)=>{
    console.log("something went wrong while processing the data" + error)
  })
}


checkVideo()

app.listen(PORT , ()=>{
	console.log(`Server is running on the port number ${PORT}`)
})
