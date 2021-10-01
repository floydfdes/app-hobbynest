import React, { useState } from "react";
import { Login, SignUp } from "simple-authentication-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginFields, signUpFields } from "../../Data/Data";

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
      firstName: yup.string().required("First name is required field"),
      lastName: yup.string().required("Last name is required field"),
      age: yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .positive()
        .integer()
        .max(200, "Age nust be less then 200")
        .required("Age is required field"),
      gender: yup.string().required("Gender is required field"),
      email: yup
        .string()
        .required("Email is required field")
        .email("Email is not valid"),
      password: yup
        .string()
        .required("Passowrd is required field")
        .min(5, "Password must be atleast 5 characters"),
    })
    .required();

  const loginSchema = yup
    .object({
      email: yup
        .string()
        .required("Email is required field")
        .email("Email is not valid"),
      password: yup
        .string()
        .required("Passowrd is required field")
        .min(5, "Password must be atleast 5 characters"),
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
