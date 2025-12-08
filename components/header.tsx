"use client";
import Link from "next/link";
import { SiCodersrank } from "react-icons/si";
import { Menu, X } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
];

export default function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-20 w-full backdrop-blur-xl bg-[#F1F3E0] border-b border-[#e9ecd9] shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300">
          <div className="flex items-center justify-between py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center gap-2 px-1"
              >
                <h1 className="text-xl sm:text-2xl text-[#060771] font-bold flex items-center gap-1 hover:text-[#fc8c05] duration-300">
                  <SiCodersrank className="text-xl sm:text-2xl" />
                  Talal Rahim
                </h1>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-30 block p-3 lg:hidden"
              >
                <Menu
                  className={`size-6 transition-all duration-300 ${
                    menuState ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <X
                  className={`size-6 absolute inset-0 m-auto transition-all duration-300 ${
                    menuState
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-0 -rotate-180"
                  }`}
                />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-lg ml-6">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-[#234C6A] font-semibold hover:text-[#02094b] hover:underline duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuState && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="lg:hidden overflow-hidden"
              >
                <div className="bg-[#F8F9EB] rounded-2xl p-6 mt-2 shadow-lg border border-[#e6e8d4]">
                  <ul className="space-y-4 text-base">
                    {menuItems.map((item, index) => (
                      <motion.li key={index} variants={itemVariants}>
                        <Link
                          href={item.href}
                          className="block font-medium text-[#234C6A] hover:text-[#9CC6DB] duration-150"
                          onClick={() => setMenuState(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
