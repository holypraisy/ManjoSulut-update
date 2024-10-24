import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaFax } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import logoDjpbSulut from "../assets/logoDjpbSulut.png";

const Footer = () => {
  const [copied, setCopied] = useState(null);
  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <footer className="bg-lightBlue">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center items-center w-full">
            <img 
              className="w-2/6 md:w-2/5"
              src={logoDjpbSulut} 
              alt="Logo DJPB Sulawesi Utara" 
            />
            <p className="font-semibold text-sm lg:text-lg border-b border-primary">
              Kanwil DJPb Provinsi Sulawesi Utara
            </p>
          </div>

          <div className="flex flex-col gap-8 mt-6">
            <div className="space-y-1">
              <h1 className="text-xl md:text-2xl font-bold">Kontak Kami</h1>
              <div className="text-dark2 space-y-4">
                <div className="hover:text-secondary duration-200">
                  <h1 className="flex flex-row items-center gap-2"><FaMapMarkerAlt />Alamat</h1>
                  <a 
                    href="https://maps.app.goo.gl/SznLpkyFq5WCSyoB9"
                    alt = "Gedung Keuangan Negara Manado Lt. 3 Jl. Bethesda No.8 Manado 95114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base"
                  >
                    Gedung Keuangan Negara Manado Lt. 3 Jl. Bethesda No.8 Manado 95114
                  </a>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="hover:text-secondary duration-200 cursor-pointer" onClick={() => handleCopy('0431-848444')}>
                    <h1 className="flex flex-row items-center gap-2"><FaPhoneAlt />Telp</h1>
                    <p className="text-sm md:text-base">0431-848444</p>
                    {copied === '0431-848444' && <span className="text-green-500 text-xs">Number copied!</span>}
                  </div>
                  <div className="hover:text-secondary duration-200 cursor-pointer" onClick={() => handleCopy('0431-848444')}>
                    <h1 className="flex flex-row items-center gap-2"><FaFax />Fax</h1>
                    <p className="text-sm md:text-base">0431-848444</p>
                    {copied === '0431-848444' && <span className="text-green-500 text-xs">Number copied!</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-[300px]">
              <h1 className="text-xl md:text-2xl font-bold">Ikuti Kami</h1>
              <div className="flex justify-start space-x-4 md:space-x-6">
                <a
                  target="_blank"
                  href="https://www.instagram.com/djpbsulut?igsh=a2VrcGRlbHI4OTly"
                  aria-label="Akun Instagram Kanwil DJPB Sulut"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer text-3xl hover:text-primary hover:scale-105 duration-200" />
                </a>
                <a
                  target="_blank"
                  href="https://djpb.kemenkeu.go.id/kanwil/sulut/id/"
                  aria-label="Website Kanwil DJPB Sulut"
                  rel="noopener noreferrer"
                >
                  <TbWorldWww className="cursor-pointer text-3xl hover:text-primary hover:scale-105 duration-200" />
                </a>
                <a
                  target="_blank"
                  href="https://youtube.com/@kanwildjpbsulawesiutara?si=8uFaAt4awyf5eLJq"
                  aria-label="Akun Youtube Kanwil DJPB Sulut"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="cursor-pointer text-3xl hover:text-primary hover:scale-105 duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-xs md:text-md text-white bg-primary p-2"
      >
        <p>Copyright © 2024 Manjo Sulut. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
