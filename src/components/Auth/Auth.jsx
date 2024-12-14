import * as yup from 'yup';

import React, { useCallback, useState } from 'react';
import { signIn, signUp } from '../../Actions/auth';
import { loginFields, signUpFields } from '../../Data/Data';

import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notifyCreate } from '../../Actions/toastNotifications';
import { Login } from './Login';
import { SignUp } from './Signup';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = useCallback(async (data) => {
    if (isLoggedIn) {
      const result = await dispatch(signIn(data, navigate));
      if (result?.response) {
        dispatch(
          notifyCreate({
            message: result.response.data,
            color: 'error',
          })
        );
      }
    } else {
      await dispatch(signUp(data, navigate));
    }
  }, [isLoggedIn, dispatch, navigate]);

  const loginSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required').min(5, 'Password must be at least 5 characters'),
  }).required();

  const signUpSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    age: yup.number().positive().integer().max(200, 'Age must be less than 200').required('Age is required'),
    gender: yup.string().required('Gender is required'),
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required').min(5, 'Password must be at least 5 characters'),
  }).required();

  return (
    <>
      {isLoggedIn ? (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          yup={yup}
          yupResolver={yupResolver}
          submitForm={submitForm}
          schema={loginSchema}
          fields={loginFields}
        />
      ) : (
        <SignUp
          setIsLoggedIn={setIsLoggedIn}
          yup={yup}
          yupResolver={yupResolver}
          submitForm={submitForm}
          schema={signUpSchema}
          fields={signUpFields}
        />
      )}
    </>
  );
};

export default Auth;
