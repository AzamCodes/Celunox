import React, { useRef } from "react";
import ImageContainer from "./ImageContainer";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-60%"]);

  return (
    <div className="carousel" ref={targetRef}>
      <div className="contentContainer">
        <motion.div className="images" style={{ x, minWidth: "200%" }}>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={
                "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              }
              description={"Dec 2024"}
            />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={
                "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              }
              description={"Dec 2024"}
            />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={
                "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              }
              description={"Dec 2024"}
            />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={
                "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              }
              description={"Dec 2024"}
            />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={
                "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              }
              description={"Dec 2024"}
            />
          </motion.div>
          <motion.div
            className="imageItem"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ImageContainer
              imageSource={
                "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              }
              description={"Dec 2024"}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
