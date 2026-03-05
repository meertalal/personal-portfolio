"use client";

import Link from "next/link";
import { FaCircleArrowRight, FaInstagram } from "react-icons/fa6";
import { MdMarkEmailUnread, MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaHeart,
  FaMapMarked,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#002455] py-10 font-sans"
    >
      <div
        className="m-auto w-full max-w-7xl flex flex-col items-center gap-10 px-6 text-center text-white md:flex-row md:items-start md:justify-between md:text-left"
      >
        {/* LEFT SECTION */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:max-w-xs"
        >
          <h3 className="text-2xl font-medium pb-3">Talal's Portfolio</h3>
          <p className="pt-4 font-light text-base">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
            <br /> <br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </motion.div>

        {/* MIDDLE QUICK LINKS */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:max-w-xs leading-7"
        >
          <h3 className="text-2xl font-bold mb-4">Quick links</h3>

          <div className="flex flex-col gap-3 font-bold">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Skills", link: "#skills" },
              { name: "Education", link: "#education" },
              { name: "Work", link: "#work" },
              { name: "Experience", link: "#experience" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <Link
                  href={item.link}
                  className="flex items-center gap-2 hover:text-[#ffae00] hover:underline transition-colors"
                >
                  <FaCircleArrowRight className="text-[#ffae00]" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SECTION CONTACT INFO */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full md:max-w-xs leading-8"
        >
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#ffae00]" /> +92 321-344-9642
          </p>

          <p className="flex items-center gap-2 break-all">
            <MdMarkEmailUnread className="text-[#ffae00]" />
            meertalal85@gmail.com
          </p>

          <p className="flex items-center gap-2">
            <FaMapMarked className="text-[#ffae00]" /> Karachi, Pakistan
          </p>

          {/* SOCIAL ICONS */}
         <div className="mt-5 flex justify-center md:justify-start gap-6 text-2xl">
            <Link href="https://www.linkedin.com/in/muhammadta1al/">
              <FaLinkedin className="hover:text-[#ffae00] transition-colors" />
            </Link>
            <Link href="https://github.com/MuhammadTa1al">
              <FaGithub className="hover:text-[#ffae00] transition-colors" />
            </Link>
            <Link href="mailto:meertalal85@gmail.com">
              <MdEmail className="hover:text-[#ffae00] transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/meertalal.b/">
              <FaInstagram className="hover:text-[#ffae00] transition-colors" />
            </Link>
            <Link href="https://www.facebook.com/share/1RHmaSYAAs/?mibextid=wwXIfr">
              <FaFacebook className="hover:text-[#ffae00] transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 pt-5 border-t border-white/20"
      >
        <p className="flex flex-wrap items-center justify-center gap-1 text-gray-300 text-sm px-4">
          Designed with <FaHeart className="text-red-700" /> by
          <Link
            href="https://www.linkedin.com/in/muhammadta1al/"
            className="hover:text-[#ffae00] transition-colors font-medium"
          >
            &nbsp;Talal Rahim
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
