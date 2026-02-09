import { Github , Building , Heart , Hammer} from "lucide-react"

export default function(){
    return(
        <>
        <div className="w-[80%] mt-[60px]  flex h-auto flex-col space-y-7 items-center">


              <div className="flex space-x-4">
                  <h1 className="text-blue-500 text-[15px] font-bold">Open Source</h1>
                  <h1 className="text-blue-500 text-[15px] font-bold">Now in Beta</h1>
              </div>

             <div className="w-[50%] flex flex-col items-center space-y-1">
                <h1 className="text-[70px] font-bold">Stop video leaks.</h1>
                <h1 className="text-[50px] font-bold bg-gradient-to-r from-sky-800 to-sky-400 text-transparent bg-clip-text">Track every copy.</h1>
                <p className="text-[20px] font-light text-center">
                    Watermark embeds invisible, unique identifiers into your 
                    videos. When content leaks, you'll know exactly who shared it.
                </p>

                <div className="flex w-full space-x-9 justify-center mt-[30px]">


                   <div className="w-auto h-auto p-2 flex space-x-4 rounded-lg bg-blue-600">
                    <Github className="text-white"></Github>
                    <h1 className="text-white font-bold">View on Github</h1>
                    </div>

                     <div className="w-auto h-auto p-2 flex space-x-4 border border-slate-200 rounded-lg hover:border-slate-700">
                    
                    <h1 className="font-bold text-black">Read ocumentation</h1>
                    </div>


                </div>

                <div className="flex w-full space-x-9 justify-center mt-[40px]">


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
             

        </div>
        </>
    )
}