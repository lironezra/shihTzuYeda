import React from 'react';

import FeatureCard from './feature-card.component';

import SalonIcon from '../../assets/icons/salon.png';
import FoodIcon from '../../assets/icons/canned-food.png';
import BalanceIcon from '../../assets/icons/balance.png';

import './features.styles.scss';

const Features = () => {
    const features = [ 
        {
            icon: SalonIcon, 
            headerText: "טיפוח שיצו",
            descText: "כולנו יודעים כמה חשוב לטפח אותם"
        },
        {
            icon: FoodIcon, 
            headerText: "מזון שיצו",
            descText: "כי הם לא רק מפונקים הם גם בררניים"
        },
        {
            icon: BalanceIcon, 
            headerText: "השוואת ביטוחים",
            descText: "כדי שנשים לב לאותיות הקטנות"
        }
    ];

    return (
        <section className="section-features">
            <div className="features-header">
                <h1>יש לנו את כל מה שהשיצו שלכם צריך</h1>
                <p>מגוון רחב של קטגוריות והמלצות למתוקים שלנו</p>
            </div>
            <div className="features-content">
                {
                    features.map((f, i) => {
                        return <FeatureCard key={i} {...f} />
                    })
                }
            </div>
        </section>
    );
};

export default Features;