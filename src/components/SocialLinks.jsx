
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    href: "https://github.com/azamcodes",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/company/celunox",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    id: 3,
    href: "https://twitter.com/celunox",
    icon: <FaXTwitter />,
    label: "Twitter",
  },
  {
    id: 4,
    href: "mailto:celunoxco@gmail.com",
    icon: <FiMail />,
    label: "Email",
  },
];

const SocialLinks = () => {
  return (
    <>
      {/* For Desktop and Tablet */}
      <div className="hidden md:flex fixed left-4 top-1/3 z-50 flex-col items-center space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition duration-300 text-2xl"
            aria-label={link.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* For Mobile */}
      <div className="fixed bottom-4 left-1/2 z-50 transform -translate-x-1/2 flex md:hidden items-center justify-around w-11/12 bg-gray-800 rounded-lg py-2 shadow-lg">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition duration-300 text-xl"
            aria-label={link.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
