"use client";

import { AiOutlineDownload } from "react-icons/ai";
import Particle from "@/Component/Particle";

export default function Resume() {
  const fileId = "1R0zr91rIY32g5CPpE08F7bFtXKgHcgw3";
  const viewerURL = `https://drive.google.com/file/d/${fileId}/preview`;
  const directDownload = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleDownload = () => {
    window.open(directDownload, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Particle />
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2"
        >
          <AiOutlineDownload size={20} />
          Download Resume
        </button>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-4xl">
          <iframe
            src={viewerURL}
            width="100%"
            height="700px"
            className="rounded"
            title="Resume Preview"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
