"use client";
import {
  FaArrowCircleDown,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Header from "@/components/header";
import Skills from "@/components/skill";
import Features from "@/components/education";
import Work from "@/components/work";
import Experience from "@/components/experience";
import About from "@/components/about";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#002455] flex items-center justify-center px-4 md:px-6 py-16">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 pt-5 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Hi There,
                <br /> I'm <span className="text-[#ff7b00]">Muhammad Talal</span>
              </h2>

              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                I am a&nbsp;
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Agentic AI Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                    "Prompt Engineer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={60}
                  repeat={Infinity}
                  className="text-[#ff7b00] text-2xl md:text-3xl inline-block"
                />
              </h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-lg md:text-xl max-w-xl"
            >
              Highly energetic in UX, interfaces, and web development because
              imagination matters more than knowledge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-5 text-white text-3xl mt-4"
            >
              <Link
                href="https://www.linkedin.com/in/meertalal/"
                target="_blank"
                className="hover:text-[#ff7b00] transition"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="https://github.com/meertalal"
                target="_blank"
                className="hover:text-[#ff7b00] transition"
              >
                <FaGithub />
              </Link>

              <Link
                href="mailto:meertalal85@gmail.com"
                target="_blank"
                className="hover:text-[#ff7b00] transition"
              >
                <MdOutlineMail />
              </Link>

              <Link
                href="https://www.facebook.com/share/1RHmaSYAAs/?mibextid=wwXIfr"
                target="_blank"
                className="hover:text-[#ff7b00] transition"
              >
                <FaFacebook />
              </Link>

              <Link
                href="https://www.instagram.com/meertalal.b/"
                target="_blank"
                className="hover:text-[#ff7b00] transition"
              >
                <FaInstagram />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#ff7b00]">
              <img
                src="/image/profile2.png"
                alt="Meer Talal - full stack developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <About />
      <Skills />
      <Features />
      <Work />
      <Experience />
      <Footer />
    </>
  );
}
