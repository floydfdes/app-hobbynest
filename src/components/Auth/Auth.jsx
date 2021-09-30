import React, { useState } from "react";
import { Login, SignUp } from "simple-authentication-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Auth = () => {
  let initialState = {};
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn) {
    initialState = {
      email: "",
      password: "",
    };
  } else {
    initialState = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      email: "",
      password: "",
    };
  }

  const [formData, setFormData] = useState(initialState);
  const submitForm = (data) => {
    for (const entry in data) {
      setFormData({ ...formData, [entry]: data[entry] });
      formData[entry] = data[entry];
    }
    if (isLoggedIn) {
      console.log("signIn");
      //const result = await signIn(formData);
    } else {
      console.log("signUp");
      //const result = await SignUp(formData);
    }
  };

  const signUpSchema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      age: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .positive()
        .integer()
        .max(200)
        .required(),
      gender: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(5),
    })
    .required();

  const loginSchema = yup
    .object({
      email: yup.string().required().email(),
      password: yup.string().required().min(5),
    })
    .required();

  return (
    <>
      {isLoggedIn ? (
        <Login
          setIsLoggedIn={setIsLoggedIn}
          yup={yup}
          yupResolver={yupResolver}
          submitForm={submitForm}
          schema={loginSchema}
        />
      ) : (
        <SignUp
          setIsLoggedIn={setIsLoggedIn}
          yup={yup}
          yupResolver={yupResolver}
          submitForm={submitForm}
          schema={signUpSchema}
        />
      )}
    </>
  );
};

export default Auth;
