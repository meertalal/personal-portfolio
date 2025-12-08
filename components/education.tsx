"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RiGraduationCapFill } from "react-icons/ri";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  const educationData = [
    {
      title: "Intermediate in Computer Science",
      subtitle: "Govt Degree Science & Commerce College",
      date: "2024 | Present",
      img: "/image/collage.png",
    },
    {
      title: "Student of Cloud Computing & AI Stack",
      subtitle: "Governor House \n Karachi",
      date: "2023 | Present",
      img: "/image/governor-house.jpg",
    },
    {
      title: "Rose Educational Society",
      subtitle: "Secondary Education System",
      date: "2022 – 2024 | Completed",
      img: "/image/school.jpg",
    },
  ];

  return (
    <section id="education" className="bg-[#D2DCB6] py-12 md:py-16 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl text-black flex font-bold items-center justify-center gap-2 text-center pb-6"
        >
          <RiGraduationCapFill className="text-3xl sm:text-4xl" />
          My <span className="text-[#310ae0f5]">Education</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center font-semibold -mt-3 px-2"
        >
          Education is not the learning of facts, but the training of the mind to think.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16 mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="group shadow-zinc-950/5 hover:scale-[1.03] transition-transform duration-300">
                <CardHeader className="border-b-2 border-gray-200 pb-3">
                  <div className="w-full flex justify-center">
                    <Image
                      src={edu.img}
                      width={500}
                      height={500}
                      alt="Education Image"
                      className="h-56 w-64 object-cover mx-auto"
                    />
                  </div>

                  <h3 className="font-bold text-xl pt-2 text-center">
                    {edu.title}
                  </h3>
                </CardHeader>

                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold text-[#012970]">
                    {edu.subtitle}
                  </h3>
                  <h3 className="font-medium text-xl text-[#226d00]">
                    {edu.date}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
