import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "../index.css";
import Image from "./Image";

const Card = ({
  i,
  testimonial,
  name,
  designation,
  image,
  color,
  nameColor,
  designationColor,
  testimonialColor,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="h-[85vh] md:h-[120vh] flex items-center justify-center sticky top-0"
      ref={container}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center gap-3  md:gap-6 relative h-fit md:max-h-[800px] w-full md:max-w-[800px] rounded-[25px] p-[8px] md:p-[25px] transform-origin-top"
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {/* <div className="relative flex items-center justify-center md:justify-start w-full md:w-[60%] h-full md:h-[420px] rounded-xl overflow-hidden p-4 md:p-0">
          <Image
            src={image}
            alt="image"
            className="object-cover rounded-xl w-full h-full"
          />
        </div> */}

        <div className="w-full flex flex-col  justify-center items-center  relative top-[10%] mt-4 md:mt-[20px]">
          <div className="relative">
            <FaQuoteRight className="text-gray-100 text-lg md:text-3xl opacity-75 absolute -top-7 right-1 " />
            <h2
              style={{ color: testimonialColor }}
              className="text-center m-0 text-[18px] md:text-[22px] lg:text-[24px] "
            >
              "{testimonial}"
            </h2>
            {/* <FaQuoteRight className="text-gray-100 text-lg md:text-3xl absolute -bottom-12 opacity-40 left-1 transform scale-x-[-1]" /> */}
          </div>
          <div className="flex flex-col  items-center pt-1 lg:pt-[1.5em]">
            <p
              style={{ color: nameColor }}
              className="text-[22px] md:text-[26px] font-bold"
            >
              {name}
            </p>
            <p
              style={{ color: designationColor }}
              className="font-medium text-[16px] md:text-[18px]"
            >
              {designation}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
