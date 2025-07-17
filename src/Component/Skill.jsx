import Image from "next/image";

// Import images from assets folder
import js from "@/assets/js.png";
import Bootstrap from "@/assets/Bootstrap.png";
import Tailwind from "@/assets/Tailwind.png";
import react from "@/assets/react.png";
import next from "@/assets/next.png";
import git from "@/assets/git.png";

export default function Skill() {
  return (
    <div className="w-full min-h-[60vh] bg-white px-6 py-10">
      <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 leading-tight mb-10">
        Frameworks & Libraries
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <Image src={js} alt="js" width={250} height={250} className="mr-16"/>
        <Image src={Bootstrap} alt="bootstrap" width={250} height={250} className="mr-16" />
        <Image src={Tailwind} alt="tailwind" width={250} height={250} className="mr-16" />
        <Image src={react} alt="React" width={250} height={250} className="mr-16" />
        <Image src={next} alt="next" width={250} height={250} className="mr-16" />
        <Image src={git} alt="git" width={250} height={250} className="mr-16" />
      </div>
    </div>
  );
}
