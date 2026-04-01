"use client";
import Header from "../../components/header";
import FooterSection from "../../components/footer";
import Image from "next/image";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const experiences = [
  {
    company: "Fiverr",
    role: "Full Stack Developer",
    duration: "03/2024 - 11/2024",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "TypeScript"],
    responsibilities: [
      "Developed modern and responsive web applications using Next.js",
      "Built multiple portfolio and business websites for practice and clients",
      "Focused on performance optimization and clean UI/UX design",
      "Implemented reusable components and scalable project structure",
    ],
    image: "/image/Fiverr.png",
  },
  {
    company: "Foster Public School",
    role: "Subject Teacher",
    duration: "11/2024 - 06/2025",
    tech: ["Math", "English", "Physics", "Computer Science"],
    responsibilities: [
      "Taught core math concepts including algebra, geometry, and basic calculus",
      "Explained fundamental physics concepts like motion, force, and energy",
      "Improved students’ reading, writing, and speaking skills",
      "Taught basic to intermediate computer skills and programming",
    ],
    image: "/image/Foster-School.jpeg",
  },
   {
  company: "Xpace Global",
  role: "Sales Agent",
  duration: "11/2024 - 06/2025",
  tech: ["Chat Support", "Sales Targets", "Customer Handling", "CRM"],
  responsibilities: [
    "Handled customer queries through chat support and provided effective solutions",
    "Achieved and exceeded monthly sales targets through strong communication skills",
    "Assisted customers in product selection and guided them through the buying process",
    "Maintained customer satisfaction and built long-term client relationships",
  ],
  image: "/image/Xpace-Global.jpeg",
},
  {
  company: "Kh-Solutionz",
  role: "Sales Agent",
  duration: "11/2024 - 06/2025",
  tech: ["CRM", "Customer Support", "Lead Generation", "Sales Targets"],
  responsibilities: [
    "Reached out to potential clients and promoted company products",
    "Achieved monthly sales targets consistently",
    "Managed customer inquiries and provided solutions",
    "Maintained accurate records of sales and customer interactions",
  ],
  image: "/image/Kh-Solutionz.jpeg",
},
];

export default function ExperienceSection() {
  return (
    <div className="bg-[#EBF4F6]">
      <Header />

      <section className="py-16 md:py-20 px-4 sm:px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl text-[#002455] flex pt-5 font-bold items-center justify-center gap-2 text-center mb-12"
        >
          <MdWork />
          My <span className="text-[#ffae00]">Experience</span>
        </motion.h1>

        {/* Experience List */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl mb-16"
          >
            {/* Top Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002455]">
                {exp.role}
              </h2>

              <span className="text-sm text-gray-600 font-medium mt-2 sm:mt-0">
                {exp.company} • {exp.duration}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-[#002455]/10 text-[#002455] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* LEFT */}
              <div className="space-y-4">
                <ul className="list-disc pl-5 text-sm sm:text-base text-gray-800 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-[220px] sm:w-[260px] md:w-[300px] h-[140px] sm:h-[170px] md:h-[200px] rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src={exp.image}
                    alt={exp.role}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        ))}

        {/* Back Button */}
        <div className="pt-10 flex justify-center">
          <Link
            href="/"
            className="text-lg text-[#002455] font-bold hover:text-[#ffae00] duration-300 flex items-center gap-2"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}