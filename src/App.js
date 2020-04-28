import React from 'react';

import Header from './components/Header/header.component';
import SlideShowBanner from './components/SlideShowBanner/slide-show-banner.component';
import Features from './components/Features/features.component';
import PhotoGallery from './components/PhotoGallery/photo-gallery.component';
import Footer from './components/Footer/footer.component';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SlideShowBanner />
      <Features />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;
