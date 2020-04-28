import React from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss'

import photo from '../../assets/images/shihtzh-transparant2.png'
import photo1 from '../../assets/images/shihtzh-transparant3.png'
import photo2 from '../../assets/images/shihtzu-trans5.png'

import './slide-show-banner.styles.scss';

const items = [
      {
          original: "0",
          renderItem: () =>

          <div className="banner-wrapper" style={{ background: '#7fc6de' }}>
              <img src={photo1} alt="ppp" />
              <div className="center">
                  <h1>
                      דואגים לחברים
                      <br />
                      הפרוותיים שלנו
                  </h1>
              </div>
          </div>
      },
      {
        original: "1",
        renderItem: () =>

        <div className="banner-wrapper" style={{ background: '#99d5b1' }}>
            <img src={photo} alt="ppp" />
            <div className="center">
                <h1>
                    דואגים לחברים
                    <br />
                    הפרוותיים שלנו
                </h1>
            </div>
        </div>
    },
    {
        original: "2",
        renderItem: () =>
            <div className="banner-wrapper" style={{ background: '#f3b7b7' }}>
                <img src={photo2} alt="ppp" />
                <div className="center">
                    <h1>
                        דואגים לחברים
                        <br />
                        הפרוותיים שלנו
                    </h1>
                </div>
            </div>
    }
];


const SlideShowBanner = () => {
    return (
        <section className="section-slide-show">
            <ImageGallery 
                items={items} 
                autoPlay={true}
                infinite={true} 
                showBullets={true} 
                isRTL={true} 
                showThumbnails={false} 
                showNav={false} 
                showPlayButton={false}
                showFullscreenButton={false}
                slideDuration={1000}
                slideInterval={4000}
                />
        </section>
    );
};

export default SlideShowBanner;