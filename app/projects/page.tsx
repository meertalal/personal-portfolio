"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link"; 
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
      title: "Blog Website",
      emoji: "💻",
      description: `A fast, modern blog website built with Next.js and Tailwind CSS ⚡ Optimized for high performance, smooth navigation, and responsiveness 📱 Perfect for sharing articles with a clean and engaging reading experience ✨`,
      image: "/image/blog-web.png",
      viewLink:
        "https://blog-dynamic-jumfwm4k1-muhammad-talals-projects-e672bc8a.vercel.app/",
      codeLink: "https://github.com/MuhammadTa1al/Blog-Dynamic",
    },
    {
      title: "Portfolio Website",
      emoji: "🚀",
      description: `A simple and clean personal portfolio showcasing my projects, skills, and work experience 🧩 Designed with a modern layout for smooth navigation and quick access ⚡ Perfect for highlighting my professional journey with clarity and style ✨`,
      image: "/image/portfolio.png",
      viewLink: "https://portfolio-tailwind-css-eight-tan.vercel.app/",
      codeLink: "https://github.com/MuhammadTa1al/Portfolio-TailwindCss",
    },
    {
      title: "Nike Shoes Website",
      emoji: "👟",
      description: `A modern frontend Nike shoes website delivering sleek UI, fast performance, and seamless shopping 👟⚡
Features responsive design, smooth animations, and eye-catching product displays 🎨✨
Created to offer users an engaging and effortless sneaker shopping experience 🛒🔥`,
      image: "/image/nike-shoes1.png",
      viewLink: "https://sanity-figma-template-3.vercel.app/",
      codeLink: "https://github.com/MuhammadTa1al/Sanity-figma-Template-3",
    },
    {
      title: "Resume Builder Website",
      emoji: "💼",
      description: `A modern Resume Builder website designed to create professional CVs effortlessly 📝✨ Features customizable templates, real-time previews, and export options 📄💻 Perfect for job seekers to showcase skills and experience in a polished format 🚀`,
      image: "/image/resume-builder.png",
      viewLink: "https://milestone-3-tau-wine.vercel.app/",
      codeLink:
        "https://github.com/MuhammadTa1al/-Hackathon-Milestone/tree/main/Milestone%203",
    },
    {
      title: "Simple Food Website",
      emoji: "🍔",
      description: `A simple and clean food website serving delicious recipes and meal ideas 🍲✨ Features easy navigation, vibrant visuals, and organized categories 📂📸 Perfect for food lovers to explore, cook, and enjoy tasty dishes at home 🍴💛`,
      image: "/image/simple-web.png",
      viewLink: "https://simlpe-website.vercel.app/",
      codeLink: "https://github.com/MuhammadTa1al/Simlpe-Website",
    },
    {
      title: "Second Nike Shoes Website",
      emoji: "👟",
      description: `A modern full-stack Nike shoes website delivering sleek UI, fast performance, and seamless shopping 👟⚡
Built with responsive design, smooth animations, and clean product displays 🎨
Crafted to offer a premium, user-friendly sneaker shopping experience 🛒✨`,
      image: "/image/nike-shoes2.png",
      viewLink: "https://hackathon-figma-3-three.vercel.app/",
      codeLink: "https://github.com/MuhammadTa1al/-Hackathon-Figma-3",
    },
    {
      title: "Shareable Resume Builder Website",
      emoji: "🔄",
      description: `A sleek Shareable Resume Builder website for designing standout resumes ⚡🖋️
Includes multiple templates, live preview, and easy PDF or link sharing 📑🌐
Helps users present their professional journey clearly and impressively 👔🌟`,
      image: "/image/resume-builder2.png",
      viewLink: "https://hackathon-milestone-5-kappa-eight.vercel.app/",
      codeLink:
        "https://github.com/MuhammadTa1al/-Hackathon-Milestone-5/tree/main/Milestone%205",
    },
     {
      title: "Robotic AI Book Website",
      emoji: "🤖",
      description: `This project uses AI 🤖 and Python 🐍 to create a smart and efficient solution.
It analyzes data and automates tasks to deliver fast and accurate results ⚡💻.
The system has a simple, user-friendly interface 😊 so anyone can use it easily.`,
      image: "/image/robotic-book.PNG",
      viewLink: "https://hackathon-robotic-book-eta.vercel.app/",
      codeLink:
        "https://github.com/MuhammadTa1al/Hackathon-RoboticBook",
    },
];

export default function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <Header />

      <section className="bg-gradient-to-b from-[#002455] to-[#002455] py-10 px-4 sm:px-6">
        
     
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="py-10 text-2xl sm:text-3xl md:text-4xl text-white flex font-bold items-center justify-center gap-2 text-center"
        >
          <MdComputer />
          Projects <span className="text-[#ffae00]">Made</span>
        </motion.h1>

        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                onClick={() =>
                  setActiveIndex(isActive ? null : index)
                }
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                
                <motion.div
                  initial={{ top: "70%" }}
                  animate={{
                    top: isActive ? 0 : "70%",
                  }}
                  whileHover={{ top: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 w-full h-full bg-white/95 flex flex-col"
                >
                  
                  <div className="bg-yellow-400 px-4 py-2">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {project.emoji} {project.title}
                    </h3>
                  </div>

                  
                  <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
                    <p className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-4">
                      {project.description}
                    </p>

                   
                    <div className="flex gap-2 mt-3">
                      <a
                        href={project.viewLink}
                        target="_blank"
                        className="flex-1 text-center px-3 py-2 bg-yellow-400 text-black rounded-md text-xs sm:text-sm font-semibold hover:bg-yellow-300 transition"
                      >
                        👁 View
                      </a>

                      <a
                        href={project.codeLink}
                        target="_blank"
                        className="flex-1 text-center px-3 py-2 bg-zinc-700 text-white rounded-md text-xs sm:text-sm hover:bg-black transition"
                      >
                        💻 Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        
        <div className="pt-10 flex justify-center">
          <Link
            href="/"
            className="text-base sm:text-lg text-white font-bold hover:text-[#ffae00] duration-300 flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}