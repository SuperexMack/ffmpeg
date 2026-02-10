"use client"

import { CloudUpload } from 'lucide-react';
import { useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';


export default function AddWaterMark() {

  
  let insertFileRef = useRef<HTMLInputElement>(null)
  const [gotFile,setGotFile] = useState<string>("")

  const [loading,setLoading] = useState(false)

  const [Videoloading,setVideoLoading] = useState(false)

  const SendFile = ()=>{
     insertFileRef.current?.click()
  }

  const sendThefile = async(file:File)=>{
    setLoading(true)
    const formData = new FormData()
    formData.append("file",file)

    let res = await fetch("http://localhost:9000/getvideo/sendVideo",{
        method:"POST",
        body:formData
    })

    if(res.status === 429){
      const data = await res.json()
      toast.error(data.msg)
      return;
    }

    const blob = await res.blob()
    const VideoURL = URL.createObjectURL(blob)
    setLoading(false)
    setVideoLoading(true)
    toast.success("Video Req sent!!")
    setGotFile(VideoURL)
  }


  const caller = (e:any)=>{
    const file = e.target.files[0]
    if(file) sendThefile(file)
  }


  
  return (
    <div className="h-auto mt-[50px] p-3">

      <Navbar></Navbar>
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Add Dynamic Watermark
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Using the current version of application is quite simple. Just click the button below and you will be able to submit the video.
          </p>
        </div>

       
        <div className="h-auto border border-gray-200 rounded-2xl shadow-sm p-12 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center">
            
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
             <CloudUpload className='text-blue-500 w-[50px] h-[50px]'></CloudUpload>
            </div>

           
            <button onClick={SendFile} className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Add Video
            </button>

            <input onChange={caller} className='hidden' ref={insertFileRef} type='file'></input>

          </div>

          <div className='w-full mt-[50px] h-auto flex flex-col items-center'>

            {loading?(

           <div className='w-[50px] h-[50px] rounded-full border-2 border-black animate-spin border-t-white'>

          </div>

            ):(
                <>
                </>
            )}


          {Videoloading?(
             <div className="w-[90%]  h-[400px]">
                <video controls className="w-full rounded-lg h-full object-contain rounded-lg" src={gotFile} autoPlay={true}></video>
          </div>

          ):(
            <>
            </>
          )}

          </div>

       

        </div>

       
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}