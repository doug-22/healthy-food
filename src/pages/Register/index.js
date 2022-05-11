import React from "react";
import { Formik, ErrorMessage, Form as FormFormik, Field } from "formik";
import InputMask from "react-input-mask";
import api from "../../services/api";
import schema from "./schema";

import DatePicker from "react-datepicker";

import "./styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import Image from "../../assets/Illustration.svg";

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

export default function Register() {

  const handleSubmit = async (values) => {
    values.cpf = onlyNumbers(values.cpf);
    values.cep = onlyNumbers(values.cep);
    localStorage.setItem("DATA_REGISTER", JSON.stringify(values));
  }

  const handleInfos = async (ev, setFieldValue) => {
    let newCep = onlyNumbers(ev.target.value);
    if (newCep.length === 8){
      let res = await api.getInfos(newCep);
      setFieldValue("city", res.data.localidade);
      setFieldValue("state", res.data.uf);
      setFieldValue("district", res.data.bairro);
      setFieldValue("address", res.data.logradouro);
    }
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
    district: "",
    complement: ""
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
                    <Field name="name" placeholder="Name" type="text" className="input"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="name"/>
                  <div className="content-input-form">
                    <label>Birth date: </label>
                    <Field name="birthDate" className="input">
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
                    <Field name="cpf" className="input">
                      {({field}) => {
                        return (
                          <InputMask 
                            {...field}
                            id="cpf"
                            placeholder="CPF"
                            mask="999.999.999-99"
                          />
                        );
                      }}
                    </Field>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="cpf" />
                  <div className="content-input-form">
                    <label>CEP: </label>
                    <Field name="cep" className="input">
                      {({field, form}) => {
                        const {setFieldValue} = form
                          return (
                            <InputMask 
                              {...field}
                              id="cep"
                              placeholder="CEP"
                              mask="99999-999"
                              onBlur={(ev) => handleInfos(ev, setFieldValue)}
                            />
                          );
                        }}
                    </Field>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="cep" />
                  <div className="content-input-form">
                    <label>City: </label>
                    <Field name="city" placeholder="City" type="text" className="input"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="city" />
                  <div className="content-input-form">
                    <label>State: </label>
                    <Field name="state" component="select" className="input">
                      <option value={null}>Select the state</option>
                      <option value={"AC"}>Acre</option>
                      <option value={"AL"}>Alagoas</option>
                      <option value={"AP"}>Amapá</option>
                      <option value={"AM"}>Amazonas</option>
                      <option value={"BA"}>Bahia</option>
                      <option value={"CE"}>Ceará</option>
                      <option value={"ES"}>Espírito Santo</option>
                      <option value={"GO"}>Goiás</option>
                      <option value={"MA"}>Maranhão</option>
                      <option value={"MT"}>Mato Grosso</option>
                      <option value={"MS"}>Mato Grosso do Sul</option>
                      <option value={"MG"}>Minas Gerais</option>
                      <option value={"PA"}>Pará</option>
                      <option value={"PB"}>Paraíba</option>
                      <option value={"PR"}>Paraná</option>
                      <option value={"PE"}>Pernambuco</option>
                      <option value={"PI"}>Piauí</option>
                      <option value={"RJ"}>Rio de Janeiro</option>
                      <option value={"RN"}>Rio Grande do Norte</option>
                      <option value={"RS"}>Rio Grande do Sul</option>
                      <option value={"RO"}>Rondônia</option>
                      <option value={"RR"}>Roraima</option>
                      <option value={"SC"}>Santa Catarina</option>
                      <option value={"SP"}>São Paulo</option>
                      <option value={"SE"}>Sergipe</option>
                      <option value={"TO"}>Tocantins</option>
                      <option value={"DF"}>Distrito Federal</option>
                    </Field>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="state" />
                  <div className="content-input-form">
                    <label>Address: </label>
                    <Field name="address" placeholder="Address" type="text" className="input"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="address" />
                  <div className="content-input-form">
                    <label>District: </label>
                    <Field name="district" placeholder="District" type="text" className="input"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="district" />
                  <div className="content-input-form">
                    <label>Number: </label>
                    <Field name="number" placeholder="Number" type="text" className="input"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="number" />
                  <div className="content-input-form">
                    <label>Complement: </label>
                    <Field name="complement" placeholder="Complement" type="text" className="input"/>
                  </div>
                  <ErrorMessage className="message-error" component="span" name="complement" />
                </div>
                <button className="button" type="submit">Register</button>
              </div>
            </FormFormik>

        </Formik>
      </div>
    </section>
  );
}