"use client";
import { FaArrowRight, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    title: "Web Developer",
    company: "Fiverr, Upwork, Facebook",
    period: "03/2024 - 11/2024",
    location: "Remote",
    description: "Developed responsive web applications and custom UI components for global clients.",
    skills: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Subject Teacher",
    company: "Foster Public School",
    period: "11/2024 - 06/2025",
    location: "On-site",
    description: "Educated students in specialized subjects, focusing on interactive learning and digital literacy.",
    skills: ["Pedagogy", "Public Speaking", "Mentoring"]
  },
  {
    title: "Sale Executive",
    company: "XpaceGlobal",
    period: "06/2025 - 11/2025",
    location: "Hybrid",
    description: "Managed client relationships and drove revenue growth through strategic digital marketing solutions.",
    skills: ["Sales Strategy", "CRM", "Negotiation"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0c] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-3 rounded-full bg-indigo-500/10 mb-4"
          >
            <FaBriefcase className="text-indigo-400 text-2xl" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Work <span className="text-indigo-500">History</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-xl mx-auto italic"
          >
            "Every experience in your life is being orchestrated to teach you something you need to know to move forward."
          </motion.p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot on Timeline */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-indigo-500 z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                {/* Content Card */}
                <div className="w-[calc(100%-30px)] md:w-[45%] ml-auto md:ml-0 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-xl">
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h3 className="text-xl font-bold text-indigo-400">{exp.title}</h3>
                    <span className="flex items-center gap-1 text-xs font-mono text-gray-400 bg-gray-800 px-2 py-1 rounded">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs"><FaMapMarkerAlt /> {exp.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-md border border-indigo-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/experience"
            className="group relative px-8 py-3 font-bold text-white transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full rounded-full bg-indigo-600 opacity-20 group-hover:opacity-40 transition-opacity"></span>
            <span className="absolute inset-0 w-full h-full rounded-full border border-indigo-500/50 group-hover:scale-105 transition-transform"></span>
            <span className="relative flex items-center gap-2">
              View Full History <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}