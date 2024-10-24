import React from "react";
import publikasiImage from "../../assets/publikasiImage.png";
import { motion } from "framer-motion";
import { FaArrowCircleRight } from "react-icons/fa";

const Publikasi = () => {
  return (
    <section>
      <div className="m-8 md:m-16 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold border-b-2 border-primary border-opacity-25 !leading-snug">
              Publikasi
            </h1>
            <p className="text-sm lg:text-lg text-dark2 font-normal">
            Dapatkan update terkini melalui berbagai publikasi kami yang mencakup informasi penting 
            dan kegiatan terbaru dari Kanwil DJPb Sulawesi Utara.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="flex flex-row text-sm md:text-lg items-center gap-2 md:gap-4 primary-btn mt-4">
                <a href="/publikasi">
                  Selengkapnya
                </a>
                <FaArrowCircleRight className="text-xl md:text-2xl" />
              </button>
            </div>
          </div>
        </motion.div>
      
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={publikasiImage}
            alt="Publikasi"
            className="w-4/5 md:w-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Publikasi;
