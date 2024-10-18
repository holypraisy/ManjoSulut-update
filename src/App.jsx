import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
import Pengaduan from "./pages/PengaduanPage";
import KppnPage from "./pages/KppnPage";
import PublikasiPage from "./pages/PublikasiPage";
import TentangPage from "./pages/TentangPage";

// Daftarkan Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful: ", registration);
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed: ", error);
      });
  });
}

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-light text-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="layanan-informasi" element={<LayananPage />} />
          <Route path="layanan-pengaduan" element={<Pengaduan />} />
          <Route path="kppn" element={<KppnPage />} />
          <Route path="publikasi" element={<PublikasiPage />} />
          <Route path="tentangkami" element={<TentangPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
