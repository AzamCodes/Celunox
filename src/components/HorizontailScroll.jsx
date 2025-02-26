import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets"; // Update path as per your project structure
import Image from "./Image";
import { projects } from "../constants"; // Import projects from constants

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
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
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
          </div> */}
        </div>
        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[22px] leading-tight overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed overflow-hidden text-ellipsis display-webkit-box webkit-line-clamp-2 webkit-box-orient-vertical">
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
      <div className="sm:hidden px-14 py-8 flex flex-col gap-8 md:gap-6 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default HorizontalScroll;
