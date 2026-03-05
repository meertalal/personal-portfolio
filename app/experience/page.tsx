"use client";
import Image from "next/image";
import Header from "@/components/header";
import FooterSection from "@/components/footer";
import { FaCode, FaEye } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Page() {
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
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="bg-[#EBF4F6]">
      <Header />
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl text-[#002455] flex font-bold items-center justify-center gap-2 text-center mb-12"
        >
          <FaCode /> Skills & <span className="text-[#ffae00]">Abilities</span>
        </motion.h1>

        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            variants={containerVariants}
            className="mx-auto max-w-5xl space-y-8 md:space-y-16 mb-16"
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium text-black">
              {project.emoji} {project.title}:
            </h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-sm sm:text-base text-black font-semibold">
                  {project.description.split(" ").map((word, i) =>
                    word.includes("high performance") ||
                    word.includes("a modern layout") ||
                    word.includes("a premium") ||
                    word.includes("A modern Resume") ||
                    word.includes("delicious recipes") ? (
                      <span
                        key={i}
                        className="text-accent-foreground font-bold"
                      >
                        {word}{" "}
                      </span>
                    ) : (
                      word + " "
                    )
                  )}
                </p>

                <div className="flex flex-wrap gap-3 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base hover:bg-black hover:text-[#ffae00] duration-300"
                  >
                    <Link
                      href={project.viewLink}
                      className="flex items-center gap-2"
                    >
                      <FaEye /> View
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-xl px-5 text-base hover:text-black"
                  >
                    <Link
                      href={project.codeLink}
                      className="flex items-center gap-2 text-[#ffae00] duration-300"
                    >
                      <IoCodeSlashSharp /> Code
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mt-6 sm:mt-0 flex justify-center md:justify-end"
              >
                <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl overflow-hidden p-px dark:from-zinc-700 w-full max-w-[600px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={1206}
                    height={612}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}

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
      </section>
      <FooterSection />
    </div>
  );
}
