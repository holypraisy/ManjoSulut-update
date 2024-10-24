import React, { useState } from "react";
import { motion } from "framer-motion";
import logoDjpb from "../assets/logoDjpbSulut.png";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarMenu = [
  {
    id: 1,
    title: "Beranda",
    href: "/",
  },
  {
    id: 2,
    title: "Layanan",
    href: "#",
    submenu: [
      { id: 1, title: "Layanan Pengaduan", href: "/layanan-pengaduan" },
      { id: 2, title: "Layanan & Informasi", href: "/layanan-informasi" },
    ],
  },
  { id: 3, title: "KPPN", href: "/kppn" },
  { id: 4, title: "Publikasi", href: "/publikasi" },
  { id: 5, title: "Tentang", href: "/tentangkami" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-3 px-6 md:px-12 flex justify-between items-center border-b-2 border-[#d9d9d9] shadow-md"
      >
        {/* Logo section */}
        <div className="flex flex-row justify-start items-center gap-2">
          <img src={logoDjpb} alt="Logo DJPB Sulawesi Utara" className="w-10 md:w-14 h-auto" />
          <div className="flex flex-row md:flex-col">
            <h1 className="font-normal text-xl text-primary">Manjo</h1>
            <h1 className="font-bold text-xl text-dark">Sulut</h1>
          </div>
        </div>

        {/* Menu section for large screens */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <div>
                    <a
                      href={menu.href}
                      className="inline-block py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {menu.title}
                    </a>
                    {isDropdownOpen && (
                      <ul
                        className="absolute left-0 bg-light bg-opacity-50 shadow-lg rounded-lg p-2 w-48"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {menu.submenu.map((submenuItem) => (
                          <li key={submenuItem.id}>
                            <a
                              href={submenuItem.href}
                              className="block py-2 px-2 text-primary text-base font-medium hover:bg-bgBlue hover:text-dark duration-200 rounded-lg"
                            >
                              {submenuItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={menu.href}
                    className="inline-block py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                  >
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-3xl" /> 
            ) : (
              <FiMenu className="text-3xl" /> 
            )}
          </button>
        </div>
      </motion.div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-light w-full p-4 shadow-md"
        >
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <div className="space-y-2">
                    <a
                      href={menu.href}
                      className="py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {menu.title}
                    </a>
                    {isDropdownOpen && (
                      <ul className="bg-light border rounded-lg p-2 w-full">
                        {menu.submenu.map((submenuItem) => (
                          <li key={submenuItem.id}>
                            <a
                              href={submenuItem.href}
                              className="block py-2 px-2 text-primary text-base font-medium hover:bg-bgBlue hover:text-dark duration-200 rounded-lg"
                            >
                              {submenuItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={menu.href}
                    className="py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                  >
                    {menu.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
