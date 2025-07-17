"use client";

import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import ecommerce from "@/assets/Projects/ecommerce.png";
import dashboard from "@/assets/Projects/dashboard.png";
import recipeApp from "@/assets/Projects/recipeApp.jpeg";
import blog from "@/assets/Projects/blog.png";
import portfolio from "@/assets/Projects/portfolio.png";

const projects = [
  {
    title: "E-commerce Store",
    description:
      "An online store built using Next.js and Tailwind CSS with dynamic product pages, cart functionality, and smooth UX.",
    imgPath: ecommerce,
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio site designed using React and Bootstrap. Highlights my skills, projects, and contact information.",
    imgPath: portfolio,
  },
  {
    title: "Admin Dashboard",
    description:
      "A responsive admin dashboard UI with charts, tables, and theme support built in React and Chart.js.",
    imgPath: dashboard,
  },
  {
    title: "Blog System",
    description:
      "A markdown-based blog application using Next.js, perfect for publishing content with dark mode and SEO features.",
    imgPath: blog,
  },
  {
    title: "Recipe Finder",
    description:
      "Food recipe search app built with React and Edamam API, helping users explore dishes by ingredients and cuisine.",
    imgPath: recipeApp,
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-white py-20 px-4 relative">
      {/* Optional background particles */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Particle />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          My Recent{" "}
          <span className="text-blue-600 underline underline-offset-4">Projects</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some sample projects showcasing my frontend development skills.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              imgPath={proj.imgPath}
              title={proj.title}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
