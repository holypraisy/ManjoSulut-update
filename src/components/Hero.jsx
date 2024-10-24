import React, { useState, useEffect } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import gknSamping from "../assets/gknSamping.jpg";
import kantorDjpb from "../assets/kantorDjpb.jpg";
import { motion, AnimatePresence } from "framer-motion";
import NavbarHome from "./home/NavbarHome";


const images = [gknSamping, kantorDjpb];

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  const handleScrollToLayanan = () => {
    const layananSection = document.getElementById("layanan-home");
    if (layananSection) {
      layananSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-light overflow-hidden bg-cover bg-center max-h-[500px] lg:max-h-[600px] h-screen">

      <div className="absolute top-0 left-0 right-0 z-20">
        <NavbarHome />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center m-8 h-full">
        
        <div className="text-center flex flex-col justify-center items-center lg:mt-12">
          <motion.h1
            variants={FadeUp(0.75)}
            initial="initial"
            animate="animate"
            className=" text-2xl md:text-5xl font-bold !leading-snug text-white"
            style={{
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            Halo, Selamat Datang!
          </motion.h1>

          <motion.h1
            variants={FadeUp(0.75)}
            initial="initial"
            animate="animate"
            className="text-base md:text-xl font-light text-white"
            style={{
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            "Satu Pintu, Layanan Terintegrasi untuk Anda"
          </motion.h1>


          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <motion.div
              className="mt-12 cursor-pointer"
              animate={{
                y: [0, 10, 0], 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={handleScrollToLayanan} 
            >
              <FaChevronCircleDown className="text-secondary text-5xl hover:text-light" />
            </motion.div>
          </motion.div>
        </div>
      </div>


      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        />
      </AnimatePresence>


      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent opacity-75"></div>
    </section>
  );
};

export default Hero;
