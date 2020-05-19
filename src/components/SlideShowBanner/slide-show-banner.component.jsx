import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

// import photo from "../../assets/images/shihtzh-transparant2.png";
// import photo1 from "../../assets/images/shihtzh-transparant3.png";
// import photo2 from "../../assets/images/shihtzu-trans5.png";

import "./slide-show-banner.styles.scss";

const items = [
  {
    original: "0",
    renderItem: () => (
      <div className="banner-wrapper" style={{ background: "#7fc6de" }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shihtzh-transparant2.png?alt=media&token=a917af7e-da97-470a-8df2-a71583227593"
          alt="ppp"
        />
        <div className="center">
          <h1>
            דואגים לחברים
            <br />
            הפרוותיים שלנו
          </h1>
        </div>
      </div>
    ),
  },
  {
    original: "1",
    renderItem: () => (
      <div className="banner-wrapper" style={{ background: "#99d5b1" }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shihtzh-transparant3.png?alt=media&token=bac0fb8f-b0f5-4cac-ac1a-547e2b0dc7d9"
          alt="ppp"
        />
        <div className="center">
          <h1>
            דואגים לחברים
            <br />
            הפרוותיים שלנו
          </h1>
        </div>
      </div>
    ),
  },
  {
    original: "2",
    renderItem: () => (
      <div className="banner-wrapper" style={{ background: "#f3b7b7" }}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shihtzu-trans5.png?alt=media&token=21addb14-660d-4175-b47d-f8197ce1adb5"
          alt="ppp"
        />
        <div className="center">
          <h1>
            דואגים לחברים
            <br />
            הפרוותיים שלנו
          </h1>
        </div>
      </div>
    ),
  },
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
