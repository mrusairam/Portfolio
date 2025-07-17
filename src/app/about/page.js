"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Paragraphs Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            `Hello! I’m Muhammad Usairam, a passionate and dedicated Frontend Developer currently pursuing my degree at Government College University Faisalabad (GCUF). With a keen eye for clean UI design and a deep interest in modern web technologies, I specialize in creating intuitive, responsive, and user-focused web interfaces.`,
            `I work mainly with React.js, Next.js, Tailwind CSS, and TypeScript, and I'm always exploring new technologies that enhance performance and scalability. Whether it's building e-commerce components, interactive UI sections, or responsive layouts, I focus on writing clean, maintainable code that performs well.`,
            `What sets me apart is my hunger to learn. Despite being early in my career, I’ve already worked on several meaningful projects and have developed a solid understanding of frontend architecture, design systems, and API integration. I enjoy solving real-world problems and turning ideas into visually engaging products.`,
            `I’m currently open to opportunities where I can contribute, learn, and grow as a frontend engineer. My goal is to work with innovative teams to craft impactful digital experiences — with clean UI, great UX, and solid performance. Whether you’re a startup, business, or fellow developer, I’d love to collaborate and build something amazing.`,
            `Thanks for visiting my portfolio — let’s build the web beautifully, together!`,
          ].map((para, index) => (
            <motion.p
              key={index}
              className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
