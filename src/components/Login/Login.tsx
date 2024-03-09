/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 09/03/2024 19:36:37
*/
import React, { FC, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import Header from '../Header/Header';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // Your logic here
    };
    runLocalData();
  }, []);

  // Use Formik and Yup for form management and validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Field is required'),
      password: Yup.string().required('Field is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className="Login">
      <Header />
      <div className="page-content p-1">
      
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              {...formik.getFieldProps('email')}
              isInvalid={formik.touched.email && !!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              {...formik.getFieldProps('password')}
              isInvalid={formik.touched.password && !!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Button className='my-1 bg-primary' variant="" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
