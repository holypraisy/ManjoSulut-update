import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FadeUp } from '../Hero';
import { motion } from "framer-motion";
import layananImage from '../../assets/layananImage.webp';

const Layanan = () => {
  return (
    <section id="layanan-home">
      <div className="m-6 md:m-12 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={layananImage}
            alt=""
            className="w-4/5 lg:w-3/4 object-cover drop-shadow"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-2">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl lg:text-3xl text-dark font-bold border-b-2 border-primary border-opacity-25 md:py-2"
            >
              Layanan 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm lg:text-lg text-dark2 font-normal"
            >
              Kami hadir untuk memberikan Pelayanan dan Informasi secara Transparan 
              dan Akuntabel dan pastinya Tanpa di Pungut Biaya. 
            </motion.p>
              
            <div className="flex flex-col gap-8">
            <motion.a
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className=" cursor-pointer flex items-center gap-6 p-6 mt-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl group"
              href="/layanan-informasi"
            > 
              <p className="text-base md:text-lg">Layanan & Informasi</p>
              <FaArrowCircleRight className="text-xl lg:text-2xl text-primary group-hover:translate-x-2 duration-300" />
            </motion.a>

              <motion.a
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="cursor-pointer flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl group"
                href="/layanan-pengaduan"
              >
                <p className="text-base md:text-lg">Layanan Pengaduan</p>
                <FaArrowCircleRight className="text-xl lg:text-2xl text-primary group-hover:translate-x-2 duration-300" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
