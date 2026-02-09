import { HeroVideoDialog } from "../../components/ui/hero-video-dialog"

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/jJgqHIqfOBk?si=pmCRIi1-zI0YYBLD"
        thumbnailSrc="/mainigg.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/jJgqHIqfOBk?si=pmCRIi1-zI0YYBLD"
        thumbnailSrc="/mainigg.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
