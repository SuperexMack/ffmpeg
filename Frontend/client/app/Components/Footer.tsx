import { Linkedin, Github, Twitter, Pentagon } from "lucide-react";
import Link from "next/link";

export default function Footer({ myref }: any) {
  return (
    <>
      <div
        ref={myref}
        className="w-full mt-[100px] hover:cursor-pointer h-auto p-3 z-40 flex flex-col items-center"
      >
        <div className="md:w-[90%] w-full h-[90%] mt-6 flex justify-around md:flex flex-wrap">
          <div className="w-[500px]  h-full p-7  flex flex-col space-y-5">
            <div className=" flex  space-x-2">
              <Pentagon className="h-[50px] w-[50px] text-blue-600"></Pentagon>
              <h1 className="text-[40px] font-bold">Savebiss</h1>
            </div>

            <div className="md:w-[70%] w-full">
              <p>
                Open-source video protection through dynamic watermarking and
                audio fingerprinting. Built for creators who need to track
                leaks.
              </p>
            </div>

            <div className="md:w-[70%] w-full flex space-x-8">
              <Link href={"https://www.linkedin.com/in/mohitsatilinks/"}>
                <Linkedin></Linkedin>
              </Link>
              <Link href={"https://github.com/SuperexMack"}>
                <Github></Github>
              </Link>
              <Link href={"https://x.com/mohitsatitwt"}>
                <Twitter></Twitter>
              </Link>
            </div>

            <div>
              <p className="">
                &copy; {new Date().getFullYear()}Savebiss. all rights reserved
              </p>
            </div>
          </div>

          <div className="w-[500px] h-full flex space-x-5">
            <div className="h-full w-[48%] p-7 flex flex-col space-y-3">
              <h1 className="font-bold ">Legal</h1>
              <h2>Private-policy</h2>
              <h2>Terms of service</h2>
              <h2>Copyright</h2>
            </div>

            <div className="h-full w-[48%] p-7 flex flex-col space-y-3">
              <h1 className="font-bold">pages</h1>
              <h2>Contact-Page</h2>
              <h2>About</h2>
              <h2>Follow</h2>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-7 overflow-hidden flex items-center justify-center">
          <h1 className="font-bold md:text-[120px] sm:text-[100px] text-[50px] text-center mt-10 md:mt-24 bg-gradient-to-b from-neutral-950 to-yellow-200 bg-clip-text text-transparent">
            Savebiss
          </h1>
        </div>
      </div>
    </>
  );
}
