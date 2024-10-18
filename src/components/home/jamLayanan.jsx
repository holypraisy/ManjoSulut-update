import React from "react";
import { LuClock3 } from "react-icons/lu";
import { LuClock5 } from "react-icons/lu";
import { FadeUp } from '../Hero';
import { motion } from "framer-motion";

const JamLayanan = () => {
  return (
    <section id="jam-layanan">
      <div className="px-4 md:px-16 py-4">        
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-start text-lg lg:text-3xl text-dark font-bold border-b-2 border-primary border-opacity-25 md:py-2 md:w-1/2"
            >
              Jam Layanan
            </motion.h1>

              
            <div className="grid grid-cols-1 md:grid-cols-2 py-6 justify-center items-center gap-8 w-full">
              <motion.a
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=" cursor-pointer flex flex-col items-center gap-2 p-12 mt-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl group"
              href="/layanan-informasi"
              > 
              <div className="flex flex-row items-center gap-4">
                  <LuClock3 className="text-lg lg:text-xl text-primary group-hover:translate-x-2 duration-300" />
                  <p className="text-base md:text-xl">Dengan Sistem Antrean</p>
              </div>
              <div>
                <h1 className="text-xl lg:text-4xl font-bold ">08.00 s.d 15.00 WITA</h1>
              </div>

            </motion.a>

              
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="cursor-pointer flex flex-col items-center gap-4 p-12 mt-4 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl group"
                href="/layanan-pengaduan"
              >
                <div className="flex flex-row items-center gap-4">
                  <LuClock5 className="text-xl lg:text-2xl text-primary group-hover:translate-x-2 duration-300" />
                  <p className="text-base md:text-xl">Tanpa Sistem Antrean</p>
                </div>

                <div>
                  <h1 className="text-xl lg:text-4xl font-bold "> 08.00 s.d 17.00 WITA</h1>
              </div>


              </motion.a>
            </div>
          </div>

    </section>
  );
};

export default JamLayanan;
