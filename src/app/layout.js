import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Header";
import Footer from "@/Component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mr. Usairam",
  description: "I’m a motivated and detail-focused Frontend Developer with practical experience in creating responsive and modern websites using React.js, Next.js, Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
