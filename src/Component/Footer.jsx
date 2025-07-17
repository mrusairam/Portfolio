import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Intro */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Muhammad Usairam</h3>
          <p className="text-sm leading-relaxed">
            Frontend Developer based in Lahore, Pakistan. I design and build beautiful, user-focused websites with React, Next.js, and Tailwind CSS.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>mrusairam@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+92 307 5707878</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>Lahore, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect with Me</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Linkedin size={16} />
              <Link
                href="https://www.linkedin.com/in/muhammad-usairam-59b763369/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition"
              >
                LinkedIn
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Github size={16} />
              <Link
                href="https://github.com/mrusairam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition"
              >
                GitHub
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} />
              <Link
                href="https://x.com/usairam_ch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Muhammad Usairam. All rights reserved.
      </div>
    </footer>
  );
}
