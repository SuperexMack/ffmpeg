"use client"

import { CloudUpload } from 'lucide-react';
import { useRef } from 'react';


export default function AddWaterMark() {

  
  let insertFileRef = useRef(null)

  const caller = ()=>{
    if(!insertFileRef.current) return
  }

  return (
    <div className="h-auto">
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Add Dynamic Watermark
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Using the current version of application is quite simple. Just click the button below and you will be able to submit the video.
          </p>
        </div>

       
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-12 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center">
            
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
             <CloudUpload className='text-blue-500 w-[50px] h-[50px]'></CloudUpload>
            </div>

           
            <button onClick={caller} className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Add Video
            </button>

            <input className='hidden' ref={insertFileRef} type='file'></input>

          </div>

          <div className='w-full mt-[50px] hidden h-[500px] flex items-center justify-center'>

           <div className='w-[50px] mt-[30px] h-[50px] rounded-full border-2 border-black animate-spin border-t-white'>

          </div>

          </div>

       

        </div>

       
      </div>
    </div>
  );
}