"use client";

import { RiGraduationCapFill } from "react-icons/ri";
import { FaCalendarAlt, FaUniversity } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Intermediate in Computer Science",
    subtitle: "Govt Degree Science & Commerce College",
    date: "2024 | Present",
    img: "/image/collage.png",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cloud Computing & AI Stack",
    subtitle: "Governor House Karachi",
    date: "2024 | Present",
    img: "/image/governor-house.jpg",
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Secondary Education System",
    subtitle: "Rose Educational Society",
    date: "2022 – 2024 | Completed",
    img: "/image/school.jpg",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-[#0f1115] py-20 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="p-3 bg-indigo-500/10 rounded-2xl">
              <RiGraduationCapFill className="text-4xl text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              My <span className="text-indigo-500">Education</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto italic"
          >
            "Education is not the learning of facts, but the training of the mind to think."
          </motion.p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Animated Background Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`} />
              
              <div className="relative bg-[#1a1d23] border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={edu.img}
                    fill
                    alt={edu.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d23] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white`}>
                      Academic
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {edu.title}
                  </h3>

                  <div className="space-y-3 mt-auto">
                    <div className="flex items-start gap-3 text-gray-400">
                      <FaUniversity className="mt-1 flex-shrink-0 text-indigo-400" />
                      <p className="text-sm font-medium leading-tight whitespace-pre-line">
                        {edu.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                      <FaCalendarAlt className="flex-shrink-0 text-indigo-400" />
                      <p className="text-sm font-semibold text-indigo-200/70">
                        {edu.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${edu.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}