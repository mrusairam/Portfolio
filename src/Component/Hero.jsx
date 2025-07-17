"use client";
import Image from "next/image";
import hero from "@/assets/hero.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[80vh] px-4 sm:px-8 pt-10 pb-5 gap-10">
      {/* Left: Text Content */}
      <div className="w-full lg:ml-24 lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Hi There! I am <br className="hidden lg:inline" />
          <span className="text-blue-600">Muhammad Usairam</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
          I&apos;m a motivated and detail-focused Frontend Developer with practical
          experience in creating responsive and modern websites using React.js,
          Next.js, Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {/* LinkedIn external link */}
          <Link
            href="https://www.linkedin.com/in/muhammad-usairam-59b763369/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition duration-300 shadow hover:shadow-md"
          >
            LinkedIn
          </Link>

          {/* Internal scroll link to #projects */}
          <Link
            href="/my-projects"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition duration-300 shadow hover:shadow-md"
          >
            View Projects
          </Link>
        </div>
      </div>
      {/* Right: Image (Animated on all screens) */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px]">
          <Image
            src={hero}
            alt="Hero Image"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-lg animate-spin"
            style={{ animationDuration: "4s" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
