import { Github , Building , Heart , Hammer} from "lucide-react"
import Link from "next/link"

export default function(){
    return(
        <>
        <div className="md:w-[80%] w-full md:p-32 p-2 mt-11 flex h-auto flex-col space-y-3 items-center">


              <div className="flex space-x-4">
                  <h1 className="text-blue-500 text-[15px] font-bold">Open Source</h1>
                  <h1 className="text-blue-500 text-[15px] font-bold">Now in Beta</h1>
              </div>

             <div className="md:w-[50%] md:mt-5 mt-[60px] w-full flex flex-col items-center md:space-y-1 space-y-10">
                <h1 className="md:text-[70px] text-[50px] font-bold text-center">Stop video leaks.</h1>
                <h1 className="md;text-[50px] text-[30px] font-bold bg-gradient-to-r from-sky-800 to-sky-400 text-transparent bg-clip-text">Track every copy.</h1>
                <p className="text-[20px] font-light text-center">
                    Watermark embeds invisible, unique identifiers into your 
                    videos. When content leaks, you'll know exactly who shared it.
                </p>

               <div className="md:flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-center  w-full p-2 space-x-6 mt-[30px]">


                   <div className="md:w-auto w-full h-auto p-2 flex justify-center space-x-4 rounded-lg bg-blue-600">
                    <Github className="text-white"></Github>
                    <Link href={"https://github.com/SuperexMack/ffmpeg"} className="text-white font-bold text-center">View on Github</Link>
                    </div>

                     <div className="md:w-auto w-full h-auto p-2 justify-center flex border border-slate-200 rounded-lg hover:border-slate-700">
                    
                    <Link href={"/Applywatermark"} className="font-bold text-black text-center">Use Application</Link>
                    </div>


                </div>

                <div className="flex w-full space-x-3 md:space-x-9 justify-center mt-[40px]">


                  <div className="flex space-x-3">
                    <Building className="text-slate-500 hover:cursor-pointer hover:text-black"></Building>
                    <h1 className="text-[15px] text-slate-500 hover:cursor-pointer hover:text-black">Build using FFmpeg</h1>
                  </div>

                  <div className="flex space-x-3">
                    <Heart className="text-slate-500 hover:cursor-pointer hover:text-black"></Heart>
                    <h1 className="text-[15px] text-slate-500 hover:cursor-pointer hover:text-black">Free Forever</h1>
                  </div>

                   <div className="flex space-x-3">
                    <Hammer className="text-slate-500 hover:cursor-pointer hover:text-black"></Hammer>
                    <h1 className="text-[15px] text-slate-500 hover:cursor-pointer hover:text-black">Open Sourced</h1>
                  </div>


                </div>

             

             </div>

                <div className="md:w-[80%] w-[95%] h-[500px] mt-[50px]">
                   <video muted loop className="w-full h-full object-contain rounded-lg" src={"/landingVid.mp4"} autoPlay={true}></video>
                </div>

      
        </div>

        

        </>
    )
}