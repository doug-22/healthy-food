import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("Required field"),
    birthDate: yup.date().required("Required field").nullable(),
    cpf: yup.string().required("Required field"),
    cep: yup.string().required("Required field"),
    city: yup.string().required("Required field"),
    state: yup.string().required("Required field"),
    address: yup.string().required("Required field"),
    district: yup.string().required("Required field"),
    number: yup.string().required("Required field"),
    complement: yup.string()
});