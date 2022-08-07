import { Formik } from "formik";
import React, { useContext } from "react";
import "../styles.scss";
import * as yup from "yup";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import EmailContext from "../../../Context";

const regularEmail =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const reqularPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const Form = () => {
  const validate = yup.object().shape({
    email: yup
      .string()
      .matches(regularEmail, "Email is invalid")
      .required("Email is required"),
    password: yup
      .string()
      .matches(reqularPassword, "Password is invalid")
      .required("Password is required"),
  });

  const [emailInfo, setEmailInfo] = useContext(EmailContext);
  const navigate = useNavigate();
  const goDashboard = (values) => {
    setEmailInfo(values.email);
    navigate("/dashboard");
  };

  return (
    <div className="formWrapper text-center">
      <div className="form-signin w-100 m-auto">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            goDashboard(values);
          }}
          validationSchema={validate}
          component={LoginForm}
        />
      </div>
    </div>
  );
};

export default Form;
