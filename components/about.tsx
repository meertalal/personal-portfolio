"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0c] text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
          >
            <FaUser className="text-xs" />
            <span>Get To Know Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            About <span className="text-indigo-500">Me</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Image Border/Glow effect */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#16161a]">
                <Image
                  src="/image/profile1.jpeg"
                  width={400}
                  height={400}
                  alt="Profile"
                  className="w-64 sm:w-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Decorative Stats/Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-[#1f1f23] border border-white/10 p-4 rounded-xl shadow-2xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500 rounded-lg">
                    <FaCode className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Specializing in</p>
                    <p className="text-sm font-bold">Cloud & AI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-400">Building Digital Solutions with Purpose</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                I&apos;m a tech-driven student from Karachi diving deep into <span className="text-white font-medium">Cloud Computing, AI, and Full-Stack Development</span>. 
                With JavaScript and TypeScript as my go-to tools 🚀, I love building real, impactful projects.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m a self-motivated learner—always experimenting, creating, and leveling up. 
                Blending creativity with technology, I&apos;m focused on crafting solutions that matter 
                and making a meaningful impact in the tech ecosystem 🌟.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="text-indigo-500 bg-indigo-500/10 p-3 rounded-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</p>
                  <p className="text-sm text-gray-200">meertalal85@gmail.com</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="text-indigo-500 bg-indigo-500/10 p-3 rounded-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-sm text-gray-200">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center md:justify-start"
            >
              <Link
                href="https://drive.google.com/file/d/17c6-EK6lKEzYtAGmBNH8Ceev-YDNaade/view?usp=sharing"
                className="group relative inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]"
              >
                Download CV
                <IoMdDownload className="text-xl group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}