import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "./Image";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

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
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      // className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] h-[400px] flex flex-col"
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
          <h3 className="text-white font-bold text-[1.5rem] leading-tight overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[1rem] leading-relaxed overflow-hidden text-ellipsis whitespace-nowrap">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p
              key={`${name}-${tag.name}-${i}`}
              className={`text-[0.875rem] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div>
      <motion.div className="px-14 py-8 " variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex px-14 py-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase our skills and experience through
          real-world examples of our work. Each project is briefly described
          with links to code repositories and live demos in it. It reflects our
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="px-14 py-8 grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
