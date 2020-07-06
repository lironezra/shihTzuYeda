import React from "react";

import CustomTabs from "../../components/CustomTabs/custom-tabs.component";

import "./allowed-prohibited-foods.styles.scss";

const TABS_DATA = {
  tabsName: ["מותרים", "מותרים עם מינון", "אסורים "],
  // Each TabPanel is set of food images
  tabPanels: [
    [
      {
        name: "מנגו",
        img:
          "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589973598/shih-tzu-yeda/Food/mango_lwjdso.jpg",
      },
      {
        name: "בקר,עוף, הודו, כבש, דגים",
        img:
          "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589973598/shih-tzu-yeda/Food/meat_lwys2e.jpg",
      },
    ],
    [
      {
        name: "פסטה",
        img:
          "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589973671/shih-tzu-yeda/Food/pasta_hxbxrz.jpg",
      },
    ],
    [
      {
        name: "בצל",
        img:
          "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589973671/shih-tzu-yeda/Food/onions_sxqr1j.jpg",
      },
      {
        name: "שום",
        img:
          "https://res.cloudinary.com/dwylnsnmk/image/upload/q_auto/v1589973672/shih-tzu-yeda/Food/garlic_inz5fu.jpg",
      },
    ],
  ],
};

const AllowedProhibitedFoodsPage = () => {
  return (
    <div className="allowed-prohibited-foods-page-container">
      <CustomTabs
        tabsName={TABS_DATA.tabsName}
        tabPanels={TABS_DATA.tabPanels}
      />
    </div>
  );
};

export default AllowedProhibitedFoodsPage;
