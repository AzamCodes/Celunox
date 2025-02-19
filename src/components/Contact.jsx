
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add form validation
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Celunox Team",
          from_email: form.email,
          to_email: "celunoxco@gmail.com",
          message: form.message,
          subject: "New Contact Form Submission",
          reply_to: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ 
          marginTop: window.innerWidth <= 768 ? "5rem" : "4rem",
          width: "240",
          maxWidth: "90%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 sm:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 sm:mt-12 flex flex-col gap-6 w-full max-w-3xl mx-auto'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 text-[15px]'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 md:py-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all focus:ring-2 focus:ring-white/50'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 text-[15px]'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-3 px-4 md:py-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all focus:ring-2 focus:ring-white/50'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 text-[15px]'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-3 px-4 md:py-4 md:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none transition-all focus:ring-2 focus:ring-white/50'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-tertiary/80 transition-colors mt-2'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
