import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion'; // Mengimpor Framer Motion

const Card = ({ logo, nama, deskripsi, urlLayanan }) => {
  return (
    <motion.a
      href={urlLayanan}
      target='_blank'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="cursor-pointer bg-lightBlue shadow-lg rounded-lg border border-gray-200 p-4 flex flex-row sm:flex-col md:p-6 lg:p-8" // Flex row di mobile dan column di layar lebih besar
      whileHover={{ y: -3, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", background: "#ffff" }}
    >
      <div className='flex justify-start items-center  px-2'>
        <img 
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover mb-4" // Responsif ukuran gambar dan jarak
          src={logo} 
          alt="Card Image" 
        />
      </div>

      {/* Bagian Teks */}
      <div className="text-left flex-1 p-2"> {/* Tambahkan flex-1 dan padding horizontal */}
        <div className="font-bold text-dark text-sm sm:text-base md:text-lg lg:text-xl mb-2">{nama}</div> {/* Mengurangi ukuran teks di layar kecil */}
        <p className="text-dark2 text-xs md:text-sm">{deskripsi}</p> {/* Mengurangi ukuran deskripsi di layar kecil */}
      </div>

      {/* Hanya tampilkan anak panah di layar yang lebih besar (sm ke atas) */}
      <div className="hidden sm:flex items-center justify-end"> 
        <motion.a
          whileHover={{ x: 10 }} // Gerakan ke kanan saat di-hover
          transition={{ type: "spring", stiffness: 300 }} // Transisi animasi yang halus
          className="text-2xl text-dark border-2 border-primary rounded-full p-2 cursor-pointer"
          href={urlLayanan}
          target='_blank'
        >
          <IoIosArrowRoundForward />
        </motion.a>
      </div>
    </motion.a>
  );
};

export default Card;
