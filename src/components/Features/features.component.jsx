import React from 'react';

import FeatureCard from './feature-card.component';

import './features.styles.scss';

const Features = ({ features, title, description }) => {
    return (
        <section className="section-features">
            <div className="features-header">
                <h1>{title}</h1>
                <p>{description}</p>
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