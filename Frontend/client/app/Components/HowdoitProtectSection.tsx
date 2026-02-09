import { Video , FileSliders , Mic} from "lucide-react"
export function ProtectSection(){
    return(
        <>
        <div className="h-auto mt-6 py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            How It Protects Your Content
          </h1>
          <p className="md:text-xl text-[20px] overflow-x-hidden md:mt-1 mt-5  text-gray-600 max-w-2xl mx-auto">
            Advanced security features designed to trace and prevent unauthorized content sharing
          </p>
        </div>

       
        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="min-w-[320px] max-w-[400px] bg-white rounded-2xl p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_16px_32px_rgba(0,0,0,0.12)] hover:border-gray-200 relative overflow-hidden group">
           
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-[0_8px_16px_rgba(102,126,234,0.3)]">
              <Video className="h-[50px] w-[40px] text-white"></Video>
            </div>

           
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Dynamic Video Watermark
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Adds a <strong className="text-gray-900 font-semibold">moving User ID</strong> on the video so leaks can be traced easily. The watermark dynamically shifts position, making it impossible to crop out while maintaining full visibility.
            </p>
          </div>

          
          <div className="flex-1 min-w-[320px] max-w-[400px] bg-white rounded-2xl p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_16px_32px_rgba(0,0,0,0.12)] hover:border-gray-200 relative overflow-hidden group">
            
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
           
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-[0_8px_16px_rgba(102,126,234,0.3)]">
               <FileSliders className="h-[50px] w-[40px] text-white"></FileSliders>
            </div>

            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              User Tracking
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Each user's ID is embedded, making it easy to identify <strong className="text-gray-900 font-semibold">who leaked</strong> the content. Comprehensive logging ensures complete accountability and enables rapid response to security breaches.
            </p>
          </div>

         
          <div className="flex-1 min-w-[320px] max-w-[400px] bg-white rounded-2xl p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_16px_32px_rgba(0,0,0,0.12)] hover:border-gray-200 relative overflow-hidden group">
            
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
           
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-pink-400 to-rose-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Coming Soon
            </span>

           
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center mb-6 shadow-[0_8px_16px_rgba(245,87,108,0.3)]">
              <Mic className="h-[50px] w-[40px] text-white"></Mic>
            </div>

        
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Audio Fingerprinting
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Embed User ID in audio to make leaks nearly impossible to remove without affecting quality. Invisible to listeners but detectable by our advanced tracking system for complete protection.
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}