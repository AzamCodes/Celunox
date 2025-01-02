import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets"; // Update path as per your project structure

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
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
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
      name: "Project 1",
      description: "A sample project description",
      tags: [{ name: "React", color: "text-blue-500" }],
      image: "https://via.placeholder.com/300",
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description: "Another sample project description",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "https://via.placeholder.com/300",
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description: "Another sample project description",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "https://via.placeholder.com/300",
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description: "Another sample project description",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "https://via.placeholder.com/300",
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description: "Another sample project description",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "https://via.placeholder.com/300",
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description: "Another sample project description",
      tags: [{ name: "JavaScript", color: "text-yellow-500" }],
      image: "https://via.placeholder.com/300",
      source_code_link: "https://github.com/",
    },
  ];

  return (
    <div className="carousel" ref={targetRef}>
      <div className="contentContainer">
        <motion.div className="images flex gap-5" style={{ x }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
