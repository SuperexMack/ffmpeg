import { Building, Github, Award , BadgeQuestionMark  } from "lucide-react";

export function BottomText(){
    return(
        <>
        <div className="w-[90%] mt-[100px] h-auto">
        <div className="max-w-7xl mt-[50px] p-5 mx-auto h-[300px]  flex flex-col space-y-3.5 justify-center items-center text-center ">
                <h1 className="text-[50px] font-bold">Start protecting your videos today</h1>
                <p className="text-[20px]">Open source. Free forever. Deploy in minutes.</p>
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