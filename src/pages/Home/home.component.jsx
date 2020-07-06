import React from "react";

import SlideShowBanner from "../../components/SlideShowBanner/slide-show-banner.component";
import Features from "../../components/Features/features.component";
import PhotoGallery from "../../components/PhotoGallery/photo-gallery.component";

import SalonIcon from "../../assets/icons/salon.png";
import FoodIcon from "../../assets/icons/canned-food.png";
import BalanceIcon from "../../assets/icons/balance.png";

const features = [
  {
    icon: SalonIcon,
    headerText: "טיפוח שיצו",
    descText: "כולנו יודעים כמה חשוב לטפח אותם",
    route: "grooming",
  },
  {
    icon: FoodIcon,
    headerText: "מזון שיצו",
    descText: "כי הם לא רק מפונקים הם גם בררניים",
    route: "food",
  },
  {
    icon: BalanceIcon,
    headerText: "השוואת ביטוחים",
    descText: "כדי שנשים לב לאותיות הקטנות",
  },
];

const HomePage = () => {
  return (
    <>
      <SlideShowBanner />
      <Features
        features={features}
        title="יש לנו את כל מה שהשיצו שלכם צריך"
        description="מגוון רחב של קטגוריות והמלצות למתוקים שלנו"
      />
      <PhotoGallery />
    </>
  );
};

export default HomePage;
