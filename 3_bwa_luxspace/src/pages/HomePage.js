import React from 'react';

import Header from 'parts/Header';
import Hero from 'parts/HomePage/Hero';
import JustArrived from 'parts/HomePage/JustArrived';
import BrowseRoom from 'parts/HomePage/BrowseRoom';
import Clients from 'parts/Clients';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';
import Document from 'parts/Document';

export default function HomePage() {
  return (
    <Document>
      <Header theme="black" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Document>
  );
}
