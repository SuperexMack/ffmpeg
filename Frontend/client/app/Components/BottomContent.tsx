import { Building, Github, Award , BadgeQuestionMark  } from "lucide-react";
import Link from "next/link";

export function BottomText(){
    return(
        <>
        <div className="md:w-[90%] w-full mt-[100px] h-auto">
        <div className="max-w-7xl mt-[50px] p-5 mx-auto h-[300px]  flex flex-col space-y-3.5 justify-center items-center text-center ">
                <h1 className="md:text-[50px] text-[30px] text-center mainhead font-bold">Start protecting your videos today</h1>
                <p className="text-[20px]">Open source. Free forever. Deploy in minutes.</p>
                 <div className="md:flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-center  w-full p-2 space-x-6 mt-[30px]">


                   <div className="md:w-auto w-full h-auto p-2 flex justify-center space-x-4 rounded-lg bg-blue-600">
                    <Github className="text-white"></Github>
                    <Link href={"https://github.com/SuperexMack/ffmpeg"} className="text-white font-bold text-center">View on Github</Link>
                    </div>

                     <div className="md:w-auto w-full h-auto p-2 justify-center flex border border-slate-200 rounded-lg hover:border-slate-700">
                    
                    <Link href={"/Applywatermark"} className="font-bold text-black text-center">Use Application</Link>
                    </div>


                </div>

                <div className="flex w-full space-x-9 justify-center mt-[40px]">


                  <div className="flex space-x-3">
                    <Award className="text-slate-500 hover:cursor-pointer hover:text-black"></Award>
                    <h1 className="text-[15px] text-slate-500 hover:cursor-pointer hover:text-black">No credit card required</h1>
                  </div>

                  

                   <div className="flex space-x-3">
                    <BadgeQuestionMark className="text-slate-500 hover:cursor-pointer hover:text-black"></BadgeQuestionMark>
                    <h1 className="text-[15px] text-slate-500 hover:cursor-pointer hover:text-black">100% free</h1>
                  </div>


                </div>
        </div>
        </div> 
        </>
    )
}