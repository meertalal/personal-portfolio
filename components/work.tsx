"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaEye } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

export default function Work() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="work"  className="bg-[#002455] w-full">
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

      <div className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:scale-[1.02] duration-300">
                  <div className="relative">
                    <div className="h-[130px] w-full flex items-center justify-center">
                      <Image
                        src={
                          index === 0
                            ? "/image/blog-web.png"
                            : index === 1
                            ? "/image/portfolio.png"
                            : "/image/nike-shoes1.png"
                        }
                        width={270}
                        height={220}
                        alt="Project Image"
                        className="object-contain"
                      />
                    </div>

                    <div className="space-y-2 py-6 text-white">
                      <h3 className="text-base font-medium">
                        {index === 0
                          ? "Blog Website"
                          : index === 1
                          ? "Portfolio Website"
                          : "Nike Shoes Website"}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
                        {index === 0
                          ? "A fast, modern blog website built with Next.js and Tailwind CSS ⚡"
                          : index === 1
                          ? "A clean portfolio showcasing projects, skills, and experience 🧩"
                          : "A modern frontend Nike shoes website with sleek UI and fast shopping 👟⚡"}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 border-t border-dashed pt-6">
                      <Button asChild size="lg" className="rounded-xl px-5 text-base">
                        <Link
                          href={
                            index === 0
                              ? "https://blog-dynamic-jumfwm4k1-muhammad-talals-projects-e672bc8a.vercel.app/"
                              : index === 1
                              ? "https://portfolio-tailwind-css-eight-tan.vercel.app/"
                              : "https://sanity-figma-template-3.vercel.app/"
                          }
                          className="flex items-center gap-1"
                        >
                          <FaEye /> View
                        </Link>
                      </Button>

                      <Button
                        asChild
                        size="lg"
                        variant="ghost"
                        className="rounded-xl px-5 text-base"
                      >
                        <Link
                          href={
                            index === 0
                              ? "https://github.com/MuhammadTa1al/Blog-Dynamic"
                              : index === 1
                              ? "https://github.com/MuhammadTa1al/Portfolio-TailwindCss"
                              : "https://github.com/MuhammadTa1al/Sanity-figma-Template-3"
                          }
                          className="flex items-center gap-1"
                        >
                          <IoCodeSlashSharp /> Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="pt-10 flex justify-center"
          >
            <Link
              href="/projects"
              className="text-[16px] text-white font-bold hover:text-[#ffae00] duration-300 flex items-center gap-1"
            >
              View All <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
