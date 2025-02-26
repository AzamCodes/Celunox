import React from "react";
import { motion } from "framer-motion";
import Image from "./Image";
import { styles } from "../styles";

const TipCard = ({ index, title, description, image, isReversed }) => {
  const tipLabel = index === 3 ? "Bonus Tip" : `Tip ${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 w-full min-h-[400px] ${
        index % 2 === 0 ? "bg-tertiary" : "bg-black-200"
      } rounded-2xl sm:p-8 p-5`}
    >
      {/* Image Section */}
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          w={600}
          h={400}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-[#915EFF] font-medium text-[16px] mb-1">
          {tipLabel}
        </span>
        <h3 className="text-white font-bold text-[24px] leading-[30px]">
          {title}
        </h3>
        <p className="mt-4 text-secondary text-[17px] leading-[28px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const HalalBusiness = () => {
  const tips = [
    {
      title: "Your Brand Must Stand Out",
      description:
        "Make your brand clear, professional, and recognizable. In today's competitive market, your brand needs to be memorable and instantly recognizable. Think of it as your business's personality - it should reflect your values and appeal to your target audience.",
      image: "brand.jpg", // Add your image
    },
    {
      title: "Your Website is Your Salesperson",
      description:
        "A fast, user-friendly website is crucial for success. It needs to load quickly, look professional, and guide visitors toward making a purchase. Remember, your website works 24/7 to represent your business - make sure it represents you well!",
      image: "website.jpg", // Add your image
    },
    {
      title: "Content = FREE Customers",
      description:
        "Leverage social media for free marketing! Create engaging content, share valuable insights, and build a community around your brand. Regular posting and interaction with your audience can lead to organic growth and loyal customers.",
      image: "content.jpg", // Add your image
    },
    {
      title: "BONUS: The Secret Strategy",
      description:
        "The key to taking your halal business to six figures lies in building trust and authenticity. Combine excellent products/services with outstanding customer service, and always stay true to Islamic principles in your business practices.",
      image: "bonus.jpg", // Add your image
    },
  ];

  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12`}>
      <div>
        <p className={styles.sectionSubText}>Guide to Success</p>
        <h2 className={styles.sectionHeadText}>
          How to Build a Successful Halal Business
        </h2>
      </div>

      <div className="sm:mt-20 mt-12 flex flex-col gap-12">
        {tips.map((tip, index) => (
          <TipCard
            key={`tip-${index}`}
            index={index}
            {...tip}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HalalBusiness;
