import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Features from '../../components/Features/features.component';
import AllowedProhibitedFoodsPage from '../AllowedProhibitedFoods/allowed-prohibited-foods.component';
import ImageBanner from '../../components/Shared/ImageBanner/image-banner.component';
import DogFoodIcon from '../../assets/icons/dog-food.png';
import VetrinaryIcon from '../../assets/icons/veterinary.png';

import './food.styles.scss';
import ShihtzuBannerPhoto from '../../assets/images/food1.jpg';

const features = [ 
    {
        icon: DogFoodIcon, 
        headerText: "אוכל יבש מומלץ",
        descText: "אוכל לגורים ובוגרים של חברות מומלצות",
        route: ""
    },
    {
        icon: VetrinaryIcon, 
        headerText: "מאכלים מותרים/אסורים",
        descText: "ושנדע גם לשמור על המינונים הנכונים",
        route: "allowed-prohibited-foods"
    }
];

const FoodPage = () => {
    return (
        <>
            <Switch>
                <Route exact path="/food" render={() => (
                    <>
                        <ImageBanner image={ShihtzuBannerPhoto} />
                        <Features
                            features={features} 
                            title="כי הבריאות לפני הכל!"
                            description="השיצואים מאוד רגישים ולכן חשוב להקפיד על בחירת מזון איכותי לשיצו שלנו,
                            כאן תוכלו למצוא סוגי מזון יבש מומלצים וגם קצת על מה מותר ומה אסור."/>    
                    </>
                )} />
                <Route path='/food/allowed-prohibited-foods' component={AllowedProhibitedFoodsPage}/>
            </Switch>
        </>
    );
};

export default FoodPage;