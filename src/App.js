import React from "react";
import { useFormik } from 'formik';

function App() {
  const emailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailVerifier = (email) => {
    return emailForm.test(email)
  }
  const formik = useFormik({
    initialValues: {
      emailField: '', //need to align with id/name attribute of input tag!
      pswField: ''
    },
    onSubmit: (values) => {
      alert('Login Successful')
      console.log(values)
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailField = 'Field required';
      if(!values.pswField) errors.pswField = 'Field required';
      if(!emailVerifier(values.emailField)) errors.emailFormat = 'Username should be an email';
      return errors;
    },
    
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="email" onChange={formik.handleChange}
        value={formik.values.emailField}></input>
        <div id="emailError" style={{color: 'red'}}>{formik.errors.emailField ? formik.errors.emailField : null || formik.errors.emailFormat ? formik.errors.emailFormat : null}</div>
        <div>Password</div>
        <input id="pswField" type="password" onChange={formik.handleChange}
        value={formik.values.pswField}></input>
        <div id="pswError" style={{color: 'red'}}>{formik.errors.pswField ? formik.errors.pswField : null}</div>
        <div></div>
        <div><button id="submitBtn" type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default App;
