import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets"; // Update path as per your project structure
import Image from "./Image";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={image}
            alt={name}
            w={1080}
            h={720}
            className="w-full h-full object-contain rounded-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                width={20}
                height={20}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[22px] leading-tight overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-4 webkit-box-orient-vertical">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-4 webkit-box-orient-vertical">
            {description}
          </p>
        </div>


        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p
              key={`${name}-${tag.name}-${i}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-60%"]);

  // Example data for demonstration
  const projects = [
    {
      name: "WebfolioX - Interactive Portfolio Website",
      description: "WebfolioX is an interactive portfolio website crafted with Next.js 13 and Framer Motion. It features a modern design, smooth animations, and showcases professional projects, case studies, and testimonials. The platform emphasizes responsive design, clean layouts, and seamless navigation, making it ideal for creative professionals to display their work and connect with clients.",
      tags: [{ name: "React", color: "text-blue-500" }],
      image: "webfoliox.png", // Just the image name, no need for full path
      source_code_link: "https://github.com/azamcodes/webfoliox",
    },
    {
      name: "PrimeAttire - Modern SaaS E-Commerce Platform",
      description: "PrimeAttire is a scalable SaaS-based e-commerce platform featuring a dynamic customer-facing storefront and a feature-rich admin dashboard (AdminDesk). Designed for user-friendliness, business scalability, and seamless management, PrimeAttire empowers businesses to create multiple stores and manage products, categories, and promotional billboards. Customers enjoy a hassle-free shopping experience, while store owners benefit from intuitive management tools. Built with modern technologies, PrimeAttire delivers responsive design, real-time synchronization, and efficient state handling for a next-gen e-commerce experience.",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "primeattire.png", // Update with your ImageKit path
      source_code_link: "https://github.com/",
    },
    {
      name: "DevBlog - Next.js Blogging Platform",
      description: "DevBlog is a modern blogging platform built with Next.js, Tailwind CSS, and ShadCN UI. It allows users to create, manage, and share their blogs with ease. With a focus on performance and user experience, DevBlog offers an intuitive interface, responsive design, and various advanced features for both users and admins, including user authentication and SEO optimization.",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "devbloghub.png", // Update with your ImageKit path
      source_code_link: "https://github.com/azamcodes/devbloghub",
    },
    {
      name: "Portfolio",
      description: "Porfolio website for Azam Shaikh made with Next Js,Acternity UI,Tailwind CSS,Framer Motion.",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "portfolio.png", // Update with your ImageKit path
      source_code_link: "https://github.com/AzamCodes/Portfolio",
    },
  ];

  return (
    <>
      {/* Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block">
        <div className="carousel" ref={targetRef}>
          <div className="contentContainer">
            <motion.div className="images flex gap-5" style={{ x }}>
              {projects.map((project, index) => (
                <ProjectCard key={index} index={index} {...project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Visible on mobile only, regular vertical layout */}
      <div className="sm:hidden px-4 py-8 flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default HorizontalScroll;
