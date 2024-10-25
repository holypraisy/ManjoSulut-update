import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import tentangImage from "../assets/tentangImage.webp";
import harapanImage from "../assets/harapanImage.webp";
import InstallButton from "../components/installButton";

const TentangPage = () => {
  return (
    <section className="relative bg-light overflow-hidden bg-cover bg-center">
      <div className="fixed top-0 left-0 w-full z-50 bg-light">
        <Navbar />
      </div>

      <div className="pt-20">
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-2 md:gap-12">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            src={tentangImage}
            alt="Tentang Manjo Sulut"
            className="w-1/2 md:w-1/3 object-cover drop-shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col text-center md:text-left text-dark font-bold py-2"
          >
            <motion.h1 className="text-2xl lg:text-5xl text-primary font-bold">
              <span className="text-base lg:text-xl text-dark font-normal">Tentang </span>
              Manjo Sulut
            </motion.h1>
            <motion.h1
              className="text-xl lg:text-3xl text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              PSW-DJPb Sulut
            </motion.h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="p-8 md:px-16 space-y-8"
        >
          <div>
            <motion.h1
              className="text-lg lg:text-2xl font-bold text-primary border-b border-primary w-full md:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Manjo Sulut
            </motion.h1>
            <motion.p
              className="text-sm lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Manjo Sulut atau Monitoring Aplikasi Terintegrasi Jaringan Online Sulawesi Utara,
              suatu aplikasi terintegrasi yang digunakan untuk melakukan monitoring atas kegiatan
              Kanwil DJPb Sulawesi Utara secara online.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" text-center bg-lightBlue rounded-lg p-4"
            >
              <h1 className="text-primary text-lg lg:text-xl font-bold">Makna "Manjo"</h1>
              <p className="text-sm lg:text-base">
                Nama Manjo berasal dari Bahasa Manado yang berarti "Ayo Mari." Istilah ini mencerminkan semangat kerja sama di antara insan Perbendaharaan untuk menyelesaikan setiap misi organisasi dengan tepat, benar, dan baik.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" text-center bg-lightBlue rounded-lg p-4"
            >
              <h1 className="text-primary text-lg lg:text-xl font-bold">Tujuan</h1>
              <p className="text-sm lg:text-base">
                Aplikasi ini bertujuan untuk mendukung transparansi, akuntabilitas, dan kepercayaan dalam pengawalan APBN di wilayah Sulawesi Utara.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="p-8 md:px-16 space-y-8"
        >
          <div>
            <h1 className="text-lg lg:text-2xl font-bold text-secondary border-b border-secondary w-full md:w-1/2">
              PSW-DJPb Sulut
            </h1>
            <p className="text-sm lg:text-lg">
              Manjo Sulut mengusung konsep layanan Perbendaharaan Single Window (PSW), yang mengintegrasikan sistem, informasi, dan layanan terkait perbendaharaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {[
              { title: "P", label: "rofesional", text: "Layanan berbasis teknologi yang dijalankan secara profesional." },
              { title: "S", label: "inergi", text: "Mendukung sinergisitas antara Kanwil DJPb Sulut bersama stakeholder." },
              { title: "W", label: "aktu", text: "Layanan tepat sesuai janji, berlaku dari pukul 08.00 hingga 17.00 WITA." },
            ].map(({ title, label, text }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="bg-lightYellow rounded-lg p-4"
              >
                <h1 className="text-secondary text-center text-xl lg:text-2xl font-bold">
                  {title}<span className="text-dark text-base font-semibold">{label}</span>
                </h1>
                <p className="text-dark text-sm lg:text-base">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="p-8 md:px-16"
        >
          <h1 className="text-lg lg:text-2xl text-primary font-bold border-b border-primary w-full md:w-1/2">
            Harapan Kami
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center py-2 md:gap-12">
            <motion.img
              className="w-1/2 md:w-1/3"
              src={harapanImage}
              alt="Harapan Kami"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <motion.p
              className="text-left text-sm lg:text-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              "Kami berharap layanan dan inovasi ini dapat mempermudah pemangku kepentingan dalam memperoleh informasi yang diperlukan dari Kanwil DJPb Sulawesi Utara. Kami juga terbuka terhadap masukan untuk terus meningkatkan manfaat Manjo Sulut."
            </motion.p>
          </div>
        </motion.div>
      </div>
      <InstallButton/>
      <Footer />
    </section>
  );
};

export default TentangPage;
