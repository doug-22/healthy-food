import Axios from "axios";

const api = Axios.create ({
  baseURL: "https://viacep.com.br/"
});

// eslint-disable-next-line
export default {
  getInfos: async (cep) => {
    let response = await api.get(`ws/${cep}/json`);
    return response;
  }
}