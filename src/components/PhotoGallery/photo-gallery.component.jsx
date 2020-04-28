import React from 'react';
import Gallery from "react-photo-gallery";

import ShihTzu1 from "../../assets/images/shih-tzu-1.jpg";
import ShihTzu2 from "../../assets/images/shih-tzu-2.jpg";
import ShihTzu3 from "../../assets/images/shih-tzu-3.jpg";
import ShihTzu6 from "../../assets/images/shih-tzu-6.jpg";
import ShihTzu7 from "../../assets/images/shih-tzu-7.jpg";
import ShihTzu8 from "../../assets/images/shih-tzu-8.jpg";
import ShihTzu9 from "../../assets/images/shih-tzu-9.jpg";
import ShihTzu10 from "../../assets/images/shih-tzu-10.jpg";
import ShihTzu11 from "../../assets/images/shih-tzu-11.jpg";
import ShihTzu12 from "../../assets/images/shih-tzu-12.jpg";


import './photo-gallery.styles.scss';

const photos = [
    {
      src: ShihTzu1,
      width: 4,
      height: 3
    },
    {
      src: ShihTzu3,
      width: 1.5,
      height: 1
    },
    {
      src: ShihTzu7,
      width: 2,
      height: 3
    },
    {
      src: ShihTzu6,
      width: 7,
      height: 4
    },
    {
      src: ShihTzu8,
      width: 4,
      height: 4
    },
    {
      src: ShihTzu9,
      width: 3,
      height: 3
    },
    {
      src: ShihTzu10,
      width: 4,
      height: 3
    },
    {
      src: ShihTzu11,
      width: 6,
      height: 4
    },
    {
      src: ShihTzu12,
      width: 4,
      height: 3
    },
    {
      src: ShihTzu2,
      width: 2000,
      height: 1000
    }
  ];
  

const PhotoGallery = () => {
    return (
        <Gallery photos={photos} />
    );
};

export default PhotoGallery;