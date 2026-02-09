import { BottomText } from "./BottomContent";
import { ProtectSection } from "./HowdoitProtectSection";
import { HowWorksVideo } from "./HowtouseVideo";
import Mainbody from "./Mainbody";

export default function LandingPage(){
	return(
           <>
	   <div className="flex flex-col items-center w-full h-auto">
		<Mainbody></Mainbody>
		<ProtectSection></ProtectSection>
		<HowWorksVideo></HowWorksVideo>
		<BottomText></BottomText>
	   </div>
	   </>
	)

}
