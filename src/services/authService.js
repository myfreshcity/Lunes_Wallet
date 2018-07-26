import axios from "axios";
import { BASE_URL, API_HEADER } from "../constants/apiBaseUrl";

class AuthService {
  async authenticate(email, password) {
    try {
      let response = await axios.post(
        BASE_URL + "/login",
        {
          login: email,
          password
        },
        API_HEADER
      );
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async hasTwoFactorAuth(token) {
    try {
      API_HEADER.headers.Authorization = token;
      let response = await axios.get(BASE_URL + "/user/2fa", API_HEADER);

      return response;
    } catch (error) {
      return error.response;
    }
  }

  async createTwoFactorAuth() {
    try {
      let response = await axios.post(BASE_URL + "/user/2fa", {}, API_HEADER);

      return response;
    } catch (error) {
      return error.response;
    }
  }

  async verifyTwoFactoryAuth(token) {
    try {
      let response = await axios.post(
        BASE_URL + "/user/2fa/verify",
        {
          token
        },
        API_HEADER
      );
      return response;
    } catch (error) {
      return error.response;
    }
  }
}

export default AuthService;
