import React from "react";
import { Route } from "react-router-dom";

import Features from "../../components/Features/features.component";
import ImageBanner from "../../components/Shared/ImageBanner/image-banner.component";
import GrommingImg from "../../assets/images/grooming1.jpg";
import CutIcon from "../../assets/icons/cut.png";
import ShowerIcon from "../../assets/icons/shower.png";
import EyeDropIcon from "../../assets/icons/eye-drop.png";
import PetCombIcom from "../../assets/icons/pet-comb.png";
import PetShampooIcon from "../../assets/icons/pet-shampoo.png";
import BarberShopIcon from "../../assets/icons/barber-shop.png";

import "./grooming.styles.scss";

const features = [
  {
    icon: CutIcon,
    headerText: "גזירת שיער מהפנים",
    descText: "לגזור או לא לגזור?",
    route: "",
  },
  {
    icon: ShowerIcon,
    headerText: "מקלחת",
    descText: "איך עושים זאת נכון ובטוח.",
    route: "",
  },
  {
    icon: EyeDropIcon,
    headerText: "הפרשות מהעיניים",
    descText: "מהם הגורמים ואיך מנקים.",
    route: "",
  },
  {
    icon: PetCombIcom,
    headerText: "סירוק",
    descText: "איך מסרקים? ואיך מרגילים לסירוק באופן קבוע?",
    route: "",
  },
  {
    icon: PetShampooIcon,
    headerText: "המלצות לחומרי טיפוח",
    descText: "המלצות מחברי הקבוצה על מוצרים איכותיים.",
    route: "",
  },
  {
    icon: BarberShopIcon,
    headerText: "מספרות מומלצות",
    descText: "המלצות מחברי הקבוצה על מספרות בכל הארץ.",
    route: "",
  },
];

const GroomingPage = () => {
  return (
    <>
      {/* <Switch> */}
      <Route
        exact
        path="/grooming"
        render={() => (
          <>
            <ImageBanner image={GrommingImg} />
            <Features
              features={features}
              title="כי אנחנו אוהבים את מה שאנחנו עושים"
              description="טיפוח השיצו חשוב מאוד לבריאות הכלב, ריכזנו עבורכם מידע הנחוץ לטיפוח נכון, טיפול בהפרשות מהעיניים וחומרים מומלצים שאפשר להשתמש בהם"
            />
          </>
        )}
      />
      {/* </Switch> */}
    </>
  );
};

export default GroomingPage;
