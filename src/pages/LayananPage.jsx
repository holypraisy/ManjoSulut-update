import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayananImage2 from "../assets/LayananImage2.png";
import { motion } from "framer-motion";
import Card from '../components/card';
import InstallButton from '../components/installButton';

const LayananPage = () => {
  const [layananData, setLayananData] = useState({ layanan: [], pengaduan: [] });
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwiMjQbNy9gaDqVy61-iA9gyCoxzjRrztUsNJRNECztwExPfOIjAjP8z26sfaKAI3izCg/exec')
      .then((response) => response.json())
      .then((data) => {
        setLayananData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dotTransition = {
    duration: 1,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
    staggerChildren: 0.3,
  };

  return (
    <section id="layanan-informasi" className="relative bg-light overflow-hidden bg-cover bg-center ">
      <div className="fixed top-0 left-0 w-full z-50 bg-light">
        <Navbar />
      </div>

      <div className="pt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-12">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={LayananImage2}
            alt=""
            className="w-1/2 md:w-1/3 object-cover drop-shadow-xl mt-6"
          />

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col text-md text-center md:text-xl lg:text-3xl md:text-left text-dark font-bold py-2 drop-shadow-lg"
          >
            Layanan & Informasi Eksternal
            <span> Kanwil DJPB Provinsi Sulawesi Utara </span>
          </motion.h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-44">
            <div className="flex text-primary font-bold text-xl md:text-2xl">
              <span>Loading</span>
              <motion.div
                className="flex"
                initial="hidden"
                animate="visible"
                variants={dotVariants}
                transition={dotTransition}
              >
                <motion.span className="mx-1" variants={dotVariants}>.</motion.span>
                <motion.span className="mx-1" variants={dotVariants}>.</motion.span>
                <motion.span className="mx-1" variants={dotVariants}>.</motion.span>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="m-6 md:m-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 "
          >
            {layananData.layanan.map((layanan, index) => (
              <Card
                key={index}
                logo={layanan.logo} 
                nama={layanan.nama}
                deskripsi={layanan.deskripsi}
                urlLayanan={layanan.urlLayanan}
              />
            ))}
          </motion.div>
        )}
        <InstallButton/>
        <Footer />
      </div>
    </section>
  );
};

export default LayananPage;



