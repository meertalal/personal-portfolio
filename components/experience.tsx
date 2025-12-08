"use client";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-[#D2DCB6] overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl -mt-10 md:text-4xl text-black flex font-bold items-center justify-center gap-2 text-center pb-5"
      >
        <FaBriefcase /> My <span className="text-[#310ae0f5]">Experience</span>
      </motion.h1>
       <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center font-semibold -mt-1 px-2"
              >
               every experience in your life is being orchestrated to teach you something you need to know to move forward.
              </motion.p>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="absolute top-10 bottom-2 left-1/2 -translate-x-1/2 w-1 bg-[#020133] z-0" />

        <div className="flex flex-col gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:ml-auto relative"
          >
            <div className="hidden md:flex absolute ml-1.5 top-10 left-[-18px] w-[25px] h-[25px] rounded-full bg-white border-4 border-[#ff9f55]" />

            <div className="hidden md:block absolute -ml-6 top-10 left-[30px] border-10 border-transparent border-r-[#f68c09]" />

            <div className="bg-[#f68c09] m-6 mt-8 rounded-lg shadow-lg">
              <div className="pt-5 px-5 text-2xl font-semibold">Teacher</div>
              <div className="px-5 pb-4">
                <h3 className="text-xl font-semibold">Subject Teacher</h3>
                <p className="text-lg font-semibold">25-Oct-25 - 10-June-25</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="hidden md:flex mr-1.5 absolute top-3 right-[-18px] w-[25px] h-[25px] rounded-full bg-white border-4 border-[#ff9f55]" />

            <div className="hidden md:block absolute -mr-6 top-5 right-[30px] border-10 border-transparent border-l-[#f68c09]" />

            <div className="bg-[#f68c09] m-6 mt-2 rounded-lg shadow-lg">
              <div className="pt-5 px-5 text-2xl font-semibold">Sale Agent</div>
              <div className="px-5 pb-4">
                <h3 className="text-xl font-semibold">Xpaceglobal</h3>
                <p className="text-lg font-semibold">22-June-25 - Present</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:ml-auto relative"
          >
            <div className="hidden md:flex ml-1.5 absolute top-3 left-[-18px] w-[25px] h-[25px] rounded-full bg-white border-4 border-[#ff9f55]" />

            <div className="hidden md:block -ml-6 absolute top-5 left-[30px] border-10 border-transparent border-r-[#f68c09]" />

            <div className="bg-[#f68c09] m-6 mt-2 rounded-lg shadow-lg">
              <div className="pt-5 px-5 text-2xl font-semibold">Internship</div>
              <div className="px-5 pb-4">
                <h3 className="text-xl font-semibold">Remote</h3>
                <p className="text-lg font-semibold">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="pt-10 flex justify-center"
        >
          <Link
            href="/experience"
            className="px-10 py-4 rounded-md bg-[#2506ad] shadow-lg text-white font-semibold text-lg transition hover:bg-[#1a047e] flex items-center gap-2"
          >
            View All <i className="fas fa-arrow-right"></i>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
