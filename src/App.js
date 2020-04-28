import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';

import Header from './components/Header/header.component';
import SlideShowBanner from './components/SlideShowBanner/slide-show-banner.component';
import Features from './components/Features/features.component';
import PhotoGallery from './components/PhotoGallery/photo-gallery.component';
import Footer from './components/Footer/footer.component';
import Spinner from './components/Shared/Spinner/spinner.component';


import './App.css';

function App() {
  return (
    <Preloader>
      <div className="App">
        <Header />
        <SlideShowBanner />
        <Features />
        <PhotoGallery />
        <Footer />
      </div>

      <Placeholder>
        <Spinner />
      </Placeholder>
    </Preloader>
  );
}

export default App;
