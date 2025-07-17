'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Lucide icons for hamburger menu

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1350px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">O</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Usairam</span>
        </Link>

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-md font-bold text-gray-700">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/my-projects" className="hover:text-black">Projects</Link>
          <Link href="/resume" className="hover:text-black">Resume</Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-usairam-59b763369/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
          >
            LinkedIn
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-md font-bold text-gray-700 shadow-md">
          <Link href="#" className="block hover:text-black">Home</Link>
          <Link href="#" className="block hover:text-black">About</Link>
          <Link href="#" className="block hover:text-black">Projects</Link>
          <Link
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
          >
            LinkedIn
          </Link>
        </div>
      )}
    </header>
  );
}
