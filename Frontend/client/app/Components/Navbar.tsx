import Link from  "next/link"
import { Github } from 'lucide-react';
import { Pentagon } from 'lucide-react';
export default function Navbar(){
   return(
     <>
     <div className="w-full h-[80px] border-b border-b-slate-200 flex items-center justify-center">
        <div className="absolute left-[10%] flex items-center justify-center space-x-2">
            <Pentagon className="h-[50px] w-[50px] text-blue-600"></Pentagon>
            <h1 className="text-[40px] font-bold text-black" >Savebiss</h1>
	      </div>

	<div className="flex justify-center items-center space-x-5">
	   <Link href={"/"}>Features</Link>
	   <Link href={"/"}>How it works</Link>
      <Link href={"/"}>Pricing</Link>
	   <Link href={"/"}><Github></Github></Link>
	</div>

     </div>
     </>
   )
}
