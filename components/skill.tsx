import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { FaCode, FaCss3Alt, FaGitAlt, FaHtml5 } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      {/* Skills Section start's here */}
      <section id="skills"  className="pb-16 md:pb-32 w-full bg-[#002455] py-10 md:py-16">
        <div className="group relative m-auto max-w-6xl px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl text-white flex font-bold items-center justify-center gap-2 text-center pb-10"
          >
            <FaCode className="text-3xl sm:text-4xl" />
            Skills & <span className="text-[#ffae00]">Abilities</span>
          </motion.h1>

          <div className="relative md:w-[calc(100%-16px)] pb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <InfiniteSlider
                speedOnHover={40}
                speed={30}
                gap={80}
                className="flex items-center"
              >
                {[
                  {
                    icon: (
                      <FaHtml5 className="text-[#E34C26] h-20 w-20 bg-white p-3 rounded-xl" />
                    ),
                    label: "HTML5",
                  },
                  {
                    icon: (
                      <FaCss3Alt className="text-[#0179D7] h-20 w-20 bg-white p-3 rounded-xl" />
                    ),
                    label: "CSS3",
                  },
                  { img: "/image/javascript.png", label: "JavaScript" },
                  { img: "/image/typescript.png", label: "TypeScript" },
                  { img: "/image/react.png", label: "React.Js" },
                  { img: "/image/nextjs.png", label: "Next.Js" },
                  { img: "/image/tailwindcss.png", label: "Tailwind CSS" },
                  { img: "/image/python.png", label: "Python" },
                  { img: "/image/nodejs.png", label: "Node.Js" },
                  { img: "/image/json.png", label: "JSON" },
                  { img: "/image/github.png", label: "Github" },
                  {
                    icon: <FaGitAlt className="text-[#F1502F] h-20 w-20" />,
                    label: "Git",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    {skill.icon ? (
                      skill.icon
                    ) : (
                      <Image
                        className="mx-auto pb-2"
                        src={skill.img}
                        width={70}
                        height={70}
                        alt={skill.label}
                      />
                    )}
                    <h1 className="text-lg sm:text-xl font-semibold text-white text-center">
                      {skill.label}
                    </h1>
                  </motion.div>
                ))}
              </InfiniteSlider>
            </motion.div>

            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-linear-to-r from-[#02094b]"></div>
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-linear-to-l from-[#02094b]"></div>

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </section>
      {/* Skills Section end's here */}
    </>
  );
}
