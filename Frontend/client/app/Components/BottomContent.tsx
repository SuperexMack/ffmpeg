import { Building, Github, Award , BadgeQuestionMark  } from "lucide-react";
import Link from "next/link";

export function BottomText(){
    return(
        <>
        <div className="w-[90%] mt-[100px] h-auto">
        <div className="max-w-7xl mt-[50px] p-5 mx-auto h-[300px]  flex flex-col space-y-3.5 justify-center items-center text-center ">
                <h1 className="text-[50px] mainhead font-bold">Start protecting your videos today</h1>
                <p className="text-[20px]">Open source. Free forever. Deploy in minutes.</p>
                 <div className="flex w-full space-x-9 justify-center mt-[30px]">


                   <div className="w-auto h-auto p-2 flex space-x-4 rounded-lg bg-blue-600">
                    <Github className="text-white"></Github>
                    <Link href={"https://github.com/SuperexMack/ffmpeg"} className="text-white font-bold">View on Github</Link>
                    </div>

                     <div className="w-auto h-auto p-2 flex space-x-4 border border-slate-200 rounded-lg hover:border-slate-700">
                    
                    <Link href={"/Doc"} className="font-bold text-black">Read ocumentation</Link>
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