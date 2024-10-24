import React from "react";
import { FaMapMarkerAlt, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const KppnCard = ({ title, profilVideo, websiteLink, youtubeChannel, instagramAccount,facebookAccount,address, addressLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex flex-col"
    >
      <h1 className="text-primary text-lg md:text-2xl font-extrabold pb-2">{title}</h1>

      <div className="flex flex-col md:flex-row gap-2 md:gap-12">
        <iframe
          className="w-auto h-auto rounded-md"
          src={profilVideo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="flex flex-col gap-2 md:gap-4">
          <div>
            <h1 className="text-base md:text-xl font-semibold">Alamat</h1>
            <p className="flex flex-row items-start text-sm md:text-base">
              <span className="text-sm md:text-lg"><FaMapMarkerAlt /></span>
              <a 
                href={addressLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm md:text-base hover:underline cursor-pointer"
              >
                {address}
              </a>
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base md:text-xl font-semibold">Media Sosial</h1>
            <div className="flex flex-row gap-4 text-xl md:text-4xl">
              {websiteLink && (
                <motion.a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TbWorldWww className="text-primary" />
                </motion.a>
              )}
              {youtubeChannel && (
                <motion.a
                  href={youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaYoutube className="text-red-600" />
                </motion.a>
              )}
              {instagramAccount && (
                <motion.a
                  href={instagramAccount}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="text-purple-900" />
                </motion.a>
              )}
              {facebookAccount && (
                <motion.a
                  href={facebookAccount}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebook className="text-primary" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KppnCard;
