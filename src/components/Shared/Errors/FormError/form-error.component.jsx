import React from 'react';

import './form-error.styles.scss';

const FormError = ({ text }) => {
  return <div className='form-error'>{text}</div>;
};

export default FormError;
