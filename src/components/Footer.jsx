import React from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "./Image";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="pb-12 py-6 md:pb-0 bg-transparent text-white rounded-lg shadow-lg">
      {" "}
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between px-6 h-fit">
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
          <p className="text-white tracking-wide text-[20px] font-semibold uppercase cursor-pointer flex ">
            Celunox
          </p>
        </Link>
        <div className="flex items-center justify-center flex-col md:flex-row font-semibold uppercase text-sm md:text-base text-gray-300 gap-4 md:gap-8">
          <Link
            to={location.pathname === "/halal-business" ? "/#about" : "/#about"}
            className="hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to={location.pathname === "/halal-business" ? "/#works" : "/#works"}
            className="hover:text-gray-400"
          >
            Works
          </Link>
          <Link
            to={
              location.pathname === "/halal-business"
                ? "/#contact"
                : "/#contact"
            }
            className="hover:text-gray-400"
          >
            Contact
          </Link>
          <Link to="/halal-business" className="hover:text-gray-400">
            Halal Business
          </Link>
        </div>
      </div>
      <div className="py-6 md:pb-6 uppercase">
        <span className="flex items-center justify-center">
          {" "}
          <p className="text-center text-[14px] font-light text-gray-300 md:text-left">
            © {new Date().getFullYear()} Celunox. All Rights Reserved.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
