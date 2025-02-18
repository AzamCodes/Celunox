import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Animations = () => {
  const constraintsRef = useRef(null);
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Framer Motion.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following are three of our all time favourite animations of
          framer-motion. We loved to incorporate these animations in our web
          application as they make websites look more dynamic & interactive
          instead of static websites.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {/* -------------------------------- Path ANIMATION ----------------------------------- */}
        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 12,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px] boom">
              <div className="pathcontainer">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="pathitem"
                >
                  <motion.path
                    d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      default: { duration: 4, delay: 0.5, ease: "easeInOut" },
                      fill: { duration: 4, ease: [1, 0, 0.8, 1] },
                    }}
                  />
                </motion.svg>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-white text-center font-bold text-[24px]">
                {" "}
                On Load Path Animation
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2"></div>
          </Tilt>
        </motion.div>

        {/*---------------------------------  Gesture Animation------------------------------------- */}

        <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 12,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px] boom">
              <motion.div
                className="gestures"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-white text-center font-bold text-[24px]">
                On Hover Animation
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2"></div>
          </Tilt>
        </motion.div>

        {/* --------------------------- Drag Animation -----------------------------------*/}
        <motion.div
          variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}
          ref={constraintsRef}
        >
          <Tilt
            options={{
              max: 12,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          >
            <div className="relative w-full h-[230px] boom">
              <motion.div className="container">
                <motion.div
                  className="item"
                  drag
                  dragConstraints={constraintsRef}
                />
              </motion.div>
            </div>

            <div className="mt-5">
              <h3 className="text-white text-center font-bold text-[24px]">
                Drag Animation
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2"></div>
          </Tilt>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Animations, "animation");
