import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Image from "./Image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    initial: { scaleY: 0, opacity: 0, transformOrigin: "top", y: -20 },
    animate: {
      scaleY: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 },
    },
  };

  const menuItemVariants = {
    initial: { y: 10, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.45 * index, duration: 0.3 },
    }),
    exit: (index) => ({
      y: 10,
      opacity: 0,
      transition: { delay: 0.05 * index, duration: 0.3 },
    }),
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={"celunox.svg"}
            alt="logo"
            className="w-9 h-9 rounded-full object-contain"
          />
          <p className="text-white text-[20px] font-bold cursor-pointer flex ">
            Celunox
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {location.pathname === "/halal-business" ? (
                <Link to={`/#${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              ) : nav.title === `Halal Business` ? (
                <Link to={`/halal-business`} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              ) : (
                <Link to={`/#${nav.id}`}>{nav.title}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden uppercase flex flex-1 justify-end items-center">
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={handleToggle}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit={{
                  ...menuVariants.exit,
                  transition: { ...menuVariants.exit.transition, delay: 0.2 },
                }}
                className="fixed top-[4.5rem] right-0 w-full sm:w-[300px] h-screen justify-start backdrop-blur-md bg-primary/90 p-6"
                onAnimationComplete={() => {
                  if (!toggle) {
                    setToggle(false);
                  }
                }}
              >
                <motion.ul className="list-none flex flex-col gap-6 items-center justify-center pt-10">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      variants={menuItemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={index}
                      className={`font-medium cursor-pointer text-[20px] ${
                        active === nav.title
                          ? "text-white"
                          : "text-secondary/80"
                      } hover:text-white transition-colors`}
                      onClick={() => {
                        setActive(nav.title);
                        setToggle(false);
                      }}
                    >
                      <Link
                        to={
                          location.pathname === "/halal-business" ||
                          nav.title === `Halal Business`
                            ? `/halal-business`
                            : `/#${nav.id}`
                        }
                        onClick={() => setToggle(false)}
                      >
                        {nav.title}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
