import React from 'react';
import Hero from '../components/Hero';
import Layanan from '../components/home/layanan';
import KPPNSULUT from '../components/home/kppn';
import Publikasi from '../components/home/publikasi';
import Footer from '../components/Footer';
import JamLayanan from '../components/home/jamLayanan';
import InstallButton from '../components/installButton';


function HomePage() {
  return (
    <main>
      <Hero />
      <Layanan />
      <JamLayanan />
      <KPPNSULUT />
      <Publikasi />
      <InstallButton/>
      <Footer />

    </main>
  );
}

export default HomePage;
