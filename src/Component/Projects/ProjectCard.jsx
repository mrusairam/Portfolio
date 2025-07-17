import Image from "next/image";

export default function ProjectCard({ imgPath, title, description }) {
  return (
    <div className="bg-white border border-blue-100 text-blue-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
      <div className="relative w-full h-56 overflow-hidden group rounded-t-2xl">
        <Image
          src={imgPath}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-extrabold mb-2 text-blue-700">{title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        <div className="mt-4">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}
