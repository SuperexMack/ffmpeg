"use client";
import { useRef } from "react";
import { BottomText } from "./BottomContent";
import { ProtectSection } from "./HowdoitProtectSection";
import { HowWorksVideo } from "./HowtouseVideo";
import Mainbody from "./Mainbody";
import Navbar from "./Navbar";

export default function LandingPage(){

	const featureRef = useRef<null | HTMLDivElement>(null)
	const worksRef = useRef<null | HTMLDivElement>(null)
	const pricingRef = useRef<null | HTMLDivElement>(null)

	

	return(
        <>
		<Navbar feature={featureRef} works={worksRef} pricing={pricingRef}></Navbar>
	   <div className="flex flex-col items-center w-full h-auto">
		<Mainbody></Mainbody>
		<div ref={featureRef}><ProtectSection></ProtectSection></div>
		<div ref={worksRef}><HowWorksVideo></HowWorksVideo></div>
		<div ref={pricingRef}><BottomText></BottomText></div>
	   </div>
	   </>
	)

}
