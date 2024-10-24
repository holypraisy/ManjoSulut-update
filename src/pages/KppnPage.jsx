import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import kppnLogo from "../assets/kppnLogo.png";
import { motion } from "framer-motion";
import KppnCard from "../components/kppnCard";
import InstallButton from '../components/installButton';

const KppnPage = () => {
  const [kppnData, setKppnData] = useState([]); // Inisialisasi dengan array kosong
  const [loading, setLoading] = useState(true); // State untuk loading

  // Fetch data dari API saat komponen di-render
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwiMjQbNy9gaDqVy61-iA9gyCoxzjRrztUsNJRNECztwExPfOIjAjP8z26sfaKAI3izCg/exec')
      .then((response) => response.json())
      .then((data) => {
        setKppnData(data.kppn || []); // Pastikan jika data.kppn undefined, tetap set sebagai array kosong
        setLoading(false); // Set loading false setelah data diambil
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading false jika terjadi error
      });
  }, []); // useEffect kosong berarti hanya akan dijalankan sekali saat komponen pertama kali di-render

  return (
    <section id="kppn" className="relative bg-light overflow-hidden bg-cover bg-center">
      <div className="fixed top-0 left-0 w-full z-50 bg-light">
        <Navbar />
      </div>

      <div className="pt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center md:py-6 gap-2 md:gap-12">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={kppnLogo}
            alt="Logo KPPN"
            className="w-3/4 md:w-2/5 object-cover drop-shadow-xl mt-6"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col text-center md:text-left text-dark font-bold py-2"
          >
            <h1 className="text-lg lg:text-3xl">
              <span className="text-primary text-2xl lg:text-5xl">K</span>antor
              <span className="text-primary text-2xl lg:text-5xl"> P</span>elayanan &
            </h1>
            <h1 className="text-lg lg:text-3xl">
              <span className="text-primary text-2xl lg:text-5xl">P</span>erbendaharaan
              <span className="text-primary text-2xl lg:text-5xl"> N</span>egara
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:ml-12 md:mr-12 mt-4 text-left ml-6 mr-6 md:text-center text-lg md:text-2xl font-bold border-b border-primary"
        >
          <h1 className="pb-2">KPPN di Sulawesi Utara</h1>
        </motion.div>

        {loading ? ( // Cek jika loading true
          <div className="flex justify-center items-center h-44">
            <span className="text-primary font-bold text-xl md:text-2xl">Loading...</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col p-6 md:p-8 md:px-16 gap-10 md:gap-16"
          >
            {kppnData.length > 0 ? (
              kppnData.map((kppn, index) => (
                <KppnCard
                  key={index}
                  title={kppn.title}
                  profilVideo={kppn.profilVideo} // URL video profil
                  websiteLink={kppn.websiteLink} // URL website
                  youtubeChannel={kppn.youtubeChannel} // URL channel YouTube
                  instagramAccount={kppn.instagramAccount} // URL akun Instagram
                  facebookAccount={kppn.facebookAccount}
                  address={kppn.address} // Alamat KPPN
                  addressLink={kppn.addressLink} // URL Google Maps alamat
                />
              ))
            ) : (
              <p className="text-center text-lg">Tidak ada data KPPN yang tersedia.</p>
            )}
          </motion.div>
        )}
        
        <InstallButton/>
        <Footer />
      </div>
    </section>
  );
};

export default KppnPage;
