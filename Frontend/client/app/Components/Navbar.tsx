"use client"
import Link from  "next/link"
import { Github , List} from 'lucide-react';
import { Pentagon } from 'lucide-react';
import { useState } from "react";
export default function Navbar({feature,works,pricing}:any){

   const [touched,setTouched] = useState(false)

   const toogle = ()=>{
      setTouched(!touched)
   }

   const moveToFeature = ()=>{
      if(!feature.current) return
      feature.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }
   
   const moveToworks = ()=>{
      if(!works.current) return
      works.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }
   
   const moveToprice = ()=>{
      if(!pricing.current) return
      pricing.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }

   return(
     <>
     <div className="w-full z-50 fixed top-0 bg-white h-[80px] border-b border-b-slate-200 flex items-center justify-center">
        <div className="absolute left-[10%] flex items-center justify-center space-x-2">
            <Pentagon className="h-[50px] w-[50px] text-blue-600"></Pentagon>
            <Link href={"/"}><h1 className="text-[40px] font-bold text-black" >Savebiss</h1></Link>
	      </div>

	<div className="flex  max-[1000px]:hidden justify-center items-center space-x-5">
	   <Link onClick={moveToFeature} href={"/"}>Features</Link>
	   <Link onClick={moveToworks} href={"/"}>How it works</Link>
      <Link onClick={moveToprice} href={"/"}>Pricing</Link>
	   <Link href={"https://github.com/SuperexMack/ffmpeg"}><Github></Github></Link>
	</div>

   <div className="absolute min-[1000px]:hidden right-[10%]">
       <List onClick={toogle} className="text-black h-[30px] w-[30px]"></List>
   </div>

     </div>

     {touched?(
       <>
       <div className="flex z-50 fixed top-0 bg-white absolute top-20 p-4 flex-col  space-y-5 items-center w-full h-auto border-b border-slate-200 shadow-2xl shadow-slate-300">
      <Link onClick={moveToFeature} href={"/"}>Features</Link>
	   <Link onClick={moveToworks} href={"/"}>How it works</Link>
      <Link onClick={moveToprice} href={"/"}>Pricing</Link>
	   <Link href={"https://github.com/SuperexMack/ffmpeg"}><Github></Github></Link>
     </div>
       </>
     ):(
      <>
      </>
     )}


     </>
   )
}
