import { HeroVideoDialogDemo } from "./MagicVideo";

export function HowWorksVideo(){
    return(
        <>
        <div className="max-w-7xl mx-auto h-auto mt-[50px]">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-[60px] font-bold">How it works Demo.</h1>
                <HeroVideoDialogDemo></HeroVideoDialogDemo>
            </div>
        </div> 
        </>
    )
}