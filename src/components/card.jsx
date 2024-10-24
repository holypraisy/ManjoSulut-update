import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const Card = ({ logo, nama, deskripsi, urlLayanan }) => {
  const handleClick = () => {
    window.open(urlLayanan, '_blank');
  };

  return (
    <motion.a
      href={urlLayanan}
      target='_blank'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="cursor-pointer bg-lightBlue shadow-lg rounded-lg border border-gray-200 p-4 flex flex-row sm:flex-col md:p-6 lg:p-8" 
      whileHover={{ y: -3, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", background: "#ffff" }}
    >
      <div className='flex justify-start items-center  px-2'>
        <img 
          className="p-1 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-light object-cover mb-4" 
          src={logo} 
          alt="Card Image" 
        />
      </div>

      <div className="text-left flex-1 p-2"> 
        <div className="font-bold text-dark text-sm sm:text-base md:text-lg lg:text-xl mb-2">{nama}</div> 
        <p className="text-dark2 text-xs md:text-sm">{deskripsi}</p> 
      </div>
      
      <div className="hidden sm:flex items-center justify-end">
        <motion.div
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }} 
          className="text-2xl text-dark border-2 border-primary rounded-full p-2 cursor-pointer"
          onClick={handleClick} 
        >
          <IoIosArrowRoundForward />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default Card;
