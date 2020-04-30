import React from 'react';

import SlideShowBanner from '../../components/SlideShowBanner/slide-show-banner.component';
import Features from '../../components/Features/features.component';
import PhotoGallery from '../../components/PhotoGallery/photo-gallery.component';

const HomePage = () => {
    return (
        <>
            <SlideShowBanner />
            <Features />
            <PhotoGallery />
        </>
    );
};

export default HomePage;