import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormError from '../Shared/Errors/FormError/form-error.component';

import './login.styles.scss';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmedPassword: ''
};

const onSubmit = (formData) => {
  console.log(formData);
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('שדה חובה!'),
  email: Yup.string().email('כתובת אימייל אינה חוקית').required('שדה חובה!'),
  password: Yup.string()
    .min(6, 'הזן סיסמה עם 6 תווים לפחות')
    .required('שדה חובה!'),
  confirmedPassword: Yup.string()
    .min(6, 'הזן סיסמה עם 6 תווים לפחות')
    .required('שדה חובה!')
});

const Register = () => {
  return (
    <div className='loagin-page-wrapper'>
      <Link to='/shihTzuYeda' className='dialog-back-home-wrapper' />

      <div className='register-form-container'>
        <div className='form-header'>
          <h2>ברוכים הבאים!</h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className='form-group'>
              <label htmlFor='name'>שם</label>
              <Field type='text' id='name' name='name' placeholder='שם' />
              <ErrorMessage
                name='name'
                render={(msg) => <FormError text={msg} />}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>אימייל</label>
              <Field
                type='text'
                id='email'
                name='email'
                placeholder='כתובת אימייל'
              />
              <ErrorMessage
                name='email'
                render={(msg) => <FormError text={msg} />}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>סיסמה</label>
              <Field
                type='password'
                id='password'
                name='password'
                placeholder='סיסמה'
              />
              <ErrorMessage
                name='password'
                render={(msg) => <FormError text={msg} />}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='confirmedPassword'>אימות סיסמה</label>
              <Field
                type='password'
                id='confirmedPassword'
                name='confirmedPassword'
                placeholder='אימות סיסמה'
              />
              <ErrorMessage
                name='confirmedPassword'
                render={(msg) => <FormError text={msg} />}
              />
            </div>

            <button type='submit'>התחבר</button>
          </Form>
        </Formik>
        <p>
          <Link to='/signin'>משתמש קיים? התחבר</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
