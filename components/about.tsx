import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function HeroSection() {
  return (
    <main className="overflow-x-hidden bg-[#D2DCB6]">
      <section id="about" className="py-16">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl text-black flex font-bold items-center justify-center gap-2 text-center pb-3"
        >
          <FaUser /> About <span className="text-[#310ae0f5]">Me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center font-semibold -mt-1 px-3"
        >
          My Introduction
        </motion.p>

        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6 mt-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/image/profile1.jpeg"
              width={350}
              height={350}
              alt="aboutimage"
              className="w-48 sm:w-56 md:w-72 rounded-xl shadow-lg"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <p className="text-center md:text-left mb-6 font-bold text-[15px] sm:text-[16px] leading-relaxed px-2 md:px-0">
              I'm a tech-driven student from Karachi diving deep into Cloud
              Computing, AI, and full-stack web development. With JavaScript and
              TypeScript as my go-to tools 🚀, I love building real, impactful
              projects. I'm a self-motivated learner—always experimenting,
              creating, and leveling up. Blending creativity with technology,
              I'm focused on crafting solutions that matter and making a
              meaningful impact 🌟.
            </p>

            <div className="space-y-2 mb-5">
              <h1 className="text-[15px] sm:text-[16px] text-[#310ae0f5] font-bold flex gap-2">
                Email:
                <span className="text-black">meertalal85@gmail.com</span>
              </h1>

              <h1 className="text-[15px] sm:text-[16px] text-[#310ae0f5] font-bold flex gap-2">
                Place:
                <span className="text-black">Karachi, Pakistan - 75660</span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <Link
                href="https://drive.google.com/file/d/1J6Y-8av2Fpe4POVRszWz1iMgUrlVLmV0/view?usp=sharing"
                download
                className="flex items-center gap-2 font-semibold bg-[#310ae0f5] text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Download CV
                <IoMdDownload className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
