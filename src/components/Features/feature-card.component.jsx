import React from 'react';
import { withRouter } from 'react-router-dom';

import './feature-card.styles.scss';

const FeatureCard = (props) => {
  const { icon, headerText, descText, route, history, match } = props;

  const handleClick = () => {
    if (match.path === '/shihTzuYeda') {
      history.push(`/${route}`);
    } else {
      history.push(`${match.path}/${route}`);
    }
  };

  return (
    <div className='feature-card'>
      <div className='card-icon'>
        <img src={icon} alt='salon' />
      </div>
      <div className='card-content'>
        <h2>{headerText}</h2>
        <p>{descText}</p>
      </div>
      <div className='go-to-content'>
        <button onClick={handleClick}>קרא עוד {'>>'}</button>
      </div>
    </div>
  );
};

export default withRouter(FeatureCard);
