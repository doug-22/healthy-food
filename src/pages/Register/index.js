import React from "react";
import { Formik, ErrorMessage, Form as FormFormik, Field } from "formik";
import schema from "./schema";

import DatePicker from "react-datepicker";

import "./styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import Image from "../../assets/Illustration.svg";

export default function Register() {

  const handleSubmit = async (values) => {
    console.log(values);
  }

  const initialValues = {
    name: "",
    birthDate: "",
    cpf: "",
    cep: "",
    city: "",
    state: "",
    address: "",
    number: "",
    district: ""
  };

  return (
    <section className="container-register">
      <img className="image-register" src={Image} alt=""/>
      <div className="content-form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
            <FormFormik>
              <div className="container-form">
                <h1>Register</h1>
                <div className="container-input">
                  <div className="content-input-form">
                    <label>Name: </label>
                    <Field name="name" placeholder="Name" type="text"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="name"/>
                  <div className="content-input-form">
                    <label>Birth date: </label>
                    <Field name="birthDate">
                      {({form, field}) => {
                        const {setFieldValue} = form
                        const { value } = field
                        return (
                          <DatePicker
                            id="birthDate"
                            selected={value}
                            onChange={date => setFieldValue("birthDate", date)}
                            placeholderText="Selecione a data"
                            dateFormat="dd/MM/yyyy"
                            />
                        );
                      }}
                    </Field>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="birthDate" />
                  <div className="content-input-form">
                    <label>CPF: </label>
                    <Field name="cpf" placeholder="CPF" type="text"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="cpf" />
                  <div className="content-input-form">
                    <label>CEP: </label>
                    <Field name="cep" placeholder="CEP" type="number" />
                  </div>
                  <ErrorMessage className="message-error" component="span" name="cep" />
                  <div className="content-input-form">
                    <label>City: </label>
                    <Field name="city" placeholder="City" type="text" />
                  </div>
                  <ErrorMessage className="message-error" component="span" name="city" />
                  <div className="content-input-form">
                    <label>State: </label>
                    <Field name="state" placeholder="State" type="text" />
                  </div>
                  <ErrorMessage className="message-error" component="span" name="state" />
                  <div className="content-input-form">
                    <label>Address: </label>
                    <Field name="address" placeholder="Address" type="text" />
                  </div>
                  <ErrorMessage className="message-error" component="span" name="address" />
                  <div className="content-input-form">
                    <label>Number: </label>
                    <Field name="number" placeholder="Number" type="text" />
                  </div>
                  <ErrorMessage className="message-error" component="span" name="number" />
                  <div className="content-input-form">
                    <label>District: </label>
                    <Field name="district" placeholder="District" type="text" />
                  </div>
                  <ErrorMessage className="message-error" component="span" name="district" />
                </div>
                <button className="button" type="submit">Register</button>
              </div>
            </FormFormik>
        </Formik>
      </div>
    </section>
  );
}