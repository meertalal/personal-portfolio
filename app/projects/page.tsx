"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

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
  return (
  <div>
  <Header/>
    <section
    
      className="bg-gradient-to-b from-[#002455] to-[#002455] py-12 px-4"
      id="work"
    >
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-10 sm:p-14 text-3xl sm:text-4xl text-white flex font-bold items-center justify-center gap-2 text-center"
      >
        <MdComputer className="text-3xl sm:text-4xl" />
        Projects <span className="text-[#ffae00]">Made</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition duration-500"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ top: "75%" }}
              whileHover={{ top: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 w-full h-full bg-white/95 flex flex-col"
            >
              {/* Title */}
              <div className="bg-yellow-400 px-4 py-3">
                <h3 className="text-lg font-semibold">
                  {project.emoji} {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-sm font-semibold text-gray-800 line-clamp-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href={project.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
                  >
                    👁 View
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-600 backdrop-blur text-white rounded-md text-sm hover:bg-black transition"
                  >
                    💻 Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 flex justify-center"
        >
          <Link
            href="/"
            className="text-[20px] text-[#002455] font-bold hover:text-[#ffae00] duration-300 flex items-center gap-1"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </motion.div>


       <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 pt-5 border-t font-bold border-white/20"
      >
      
      </motion.div>
    </section>
    <Footer />
    </div>
   
  );
}