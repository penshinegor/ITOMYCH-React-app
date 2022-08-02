import React from "react";
import mops from "../../../Images/logo.svg";
import { Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const LoginForm = ({errors, touched, isValid, dirty}) => {

    const navigate = useNavigate();

    const goDashboard = () => navigate("/dashboard");
        
    return(
        <Form noValidate>
            <img className="mb-4" src={mops} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>

            <div className="form-floating">
                <Field type="email" className={touched.email ? `form-control ${errors.email ? "is-invalid" : "is-valid"}` : "form-control"} id="email" name="email" placeholder="Email address"/>
                <label htmlFor="email">Email address: </label>
                {touched.email && errors.email &&<small className="text-danger">{errors.email}</small>}
            </div>

            <div className="form-floating">
                <Field type="password" className={touched.password ? `form-control ${errors.password ? "is-invalid" : "is-valid"}` : "form-control"} id="password" name="password" placeholder="Password"/>
                <label htmlFor="password">Password: </label>
                {touched.password && errors.password && <small className="text-danger">{errors.password}</small>}
            </div>

            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" /> Remember me
                </label>
            </div>
                        
            <button onClick={goDashboard} className="w-100 btn btn-lg btn-primary" type="submit" disabled={!isValid || !dirty}>Login</button>  

            <p className="mt-5 mb-3 text-muted">&copy; React App</p>
        </Form>
    );
}

export default LoginForm;