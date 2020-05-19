import React from "react";
import Gallery from "react-photo-gallery";

import "./photo-gallery.styles.scss";

const photos = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-1.jpg?alt=media&token=b3899224-b6b6-426b-8b1d-8526a10311c4",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-3.jpg?alt=media&token=b3df8ba5-48e6-4761-a4df-b2eb78024ea3",
    width: 1.5,
    height: 1,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-7.jpg?alt=media&token=34f39dbb-352b-4055-b9f1-d57e6d55a2a5",
    width: 2,
    height: 3,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-6.jpg?alt=media&token=ddcdd4f8-8e50-4fb8-b3c8-de6921bdba02",
    width: 7,
    height: 4,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-8.jpg?alt=media&token=8977e531-a423-462f-a0ea-e2cbae9e2445",
    width: 4,
    height: 4,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-4.jpg?alt=media&token=bc21f8fe-7fbe-4b94-bf48-1d510ba23a39",
    width: 3,
    height: 3,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-10.jpg?alt=media&token=bcf6a22f-2bed-4f6e-89a1-d6822163ac1e",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-11.jpg?alt=media&token=c589b95e-a856-4463-8860-b548c949261c",
    width: 6,
    height: 4,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-12.jpg?alt=media&token=1460fdaa-ad8e-49f9-9201-9081387f4bed",
    width: 4,
    height: 3,
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/shih-tzu-yeda.appspot.com/o/shih-tzu-2.jpg?alt=media&token=9c7dad87-4a96-472c-8f32-eea70d6e1d37",
    width: 2000,
    height: 1000,
  },
];

const PhotoGallery = () => {
  return <Gallery photos={photos} />;
};

export default PhotoGallery;
