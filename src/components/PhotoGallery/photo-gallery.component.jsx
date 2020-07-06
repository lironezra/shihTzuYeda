import React from "react";
import Gallery from "react-photo-gallery";

import "./photo-gallery.styles.scss";

const photos = [
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-1_yfsc14.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-3_oiw5bu.jpg",
    width: 1.5,
    height: 1,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-7_e07z7g.jpg",
    width: 2,
    height: 3,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-6_iszi3b.jpg",
    width: 7,
    height: 4,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-8_fuxemy.jpg",
    width: 4,
    height: 4,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-4_ksh48p.jpg",
    width: 3,
    height: 3,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-10_pnp5lb.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975067/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-11_ux5jji.jpg",
    width: 6,
    height: 4,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589975068/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-12_kiere9.jpg",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://res.cloudinary.com/dwylnsnmk/image/upload/v1589975035/shih-tzu-yeda/Shihtzu-Gallery/shih-tzu-2_jbdd2q.jpg",
    width: 2000,
    height: 1000,
  },
];

const PhotoGallery = () => {
  return <Gallery photos={photos} />;
};

export default PhotoGallery;
