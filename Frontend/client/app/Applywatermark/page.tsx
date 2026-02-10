"use client";

import { CloudUpload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddWaterMark() {
  const insertFileRef = useRef<HTMLInputElement>(null);

  const [gotFile, setGotFile] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const SendFile = () => {
    insertFileRef.current?.click();
  };

  const sendTheFile = async (file: File) => {
    try {
      setLoading(true);
      setVideoLoading(false);
      setGotFile("");

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        "https://ffmpeg-production-1b52.up.railway.app/getvideo/sendVideo",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        toast.error("Upload failed");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setUserId(data.userid);
      toast.success(data.msg);
    } catch (err) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  const caller = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) sendTheFile(file);
  };

  useEffect(() => {
    if (!userId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `https://ffmpeg-production-1b52.up.railway.app/pooling/${userId}`
        );

        if (res.status === 202) {
          console.log("processing...");
          return;
        }

        if (!res.ok) {
          toast.error("Processing failed");
          clearInterval(interval);
          setLoading(false);
          return;
        }

        const blob = await res.blob();
        const videoURL = URL.createObjectURL(blob);

        setGotFile(videoURL);
        setLoading(false);
        setVideoLoading(true);
        toast.success("Video ready!");

        clearInterval(interval);
      } catch (err) {
        console.log("Polling error", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div className="h-auto mt-[50px] p-3">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Add Dynamic Watermark
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a video and wait while we process it.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl shadow-sm p-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <CloudUpload className="text-blue-500 w-[40px] h-[40px]" />
            </div>

            <button
              onClick={SendFile}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Video
            </button>

            <input
              ref={insertFileRef}
              onChange={caller}
              type="file"
              accept="video/*"
              className="hidden"
            />
          </div>

          <div className="mt-10 flex flex-col items-center">
            {loading && (
              <div className="w-[50px] h-[50px] border-4 border-black border-t-transparent rounded-full animate-spin" />
            )}

            {videoLoading && (
              <div className="w-full h-[400px] mt-6">
                <video
                  src={gotFile}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
