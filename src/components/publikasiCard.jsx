import React from "react";
import { motion } from "framer-motion";

const PublikasiCard = ({ titleSocmed, titleAccount, socmedVideo, socmedLink, buttonTitle}) => {
  return (

      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex flex-col md:flex-row gap-4  md:gap-16">
        <iframe
            className="rounded-md"
            src={socmedVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>


        <div className="flex flex-col  gap-2 md:gap-4">
          <div>
              <h2 className="text-xs md:text-lg font-normal">{titleSocmed}</h2>
              <h1 className="text-lg md:text-2xl font-semibold">{titleAccount}</h1>
          </div>

          <div>
                {socmedLink && (
                        <a href={socmedLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-bgBlue rounded-full px-4 py-2 text-sm md:text-base">{buttonTitle}</button>
                        </a>
                    )}
          </div>
        </div>
      </motion.div>

  );
};

export default PublikasiCard;
