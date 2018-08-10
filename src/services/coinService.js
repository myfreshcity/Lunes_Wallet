import axios from "axios";
import { BASE_URL, API_HEADER, HEADER_RESPONSE } from "../constants/apiBaseUrl";
import { internalServerError } from "../containers/errors/statusCodeMessage";

class CoinService {
  async getAvaliableCoins(token) {
    try {
      API_HEADER.headers.Authorization = token;
      let response = await axios.get(BASE_URL + "/coin", API_HEADER);
      return response;
    } catch (error) {
      internalServerError();
      return;
    }
  }

  async getGeneralInfo(token, seed) {
    try {
      API_HEADER.headers.Authorization = token;
      let responseAvaliableCoins = await axios.get(
        BASE_URL + "/coin",
        API_HEADER
      );

      let avaliableCoins = responseAvaliableCoins.data.data.coins;

      avaliableCoins.map(async (coin, index) => {
        if (coin.status === "active") {
          let responseCreateAddress = await axios.post(
            BASE_URL + "/coin/" + coin.abbreviation + "/address",
            { seed },
            API_HEADER
          );

          avaliableCoins[index].address =
            responseCreateAddress.data.data.address;

          let responseBalance = await axios.get(
            BASE_URL +
              "/coin/" +
              coin.abbreviation +
              "/balance/" +
              coin.address,
            API_HEADER
          );

          avaliableCoins.token = responseBalance.headers[HEADER_RESPONSE];
          avaliableCoins[index].balance = responseBalance.data.data;
        } else {
          avaliableCoins[index].address = undefined;
          avaliableCoins[index].balance = undefined;
        }
      });

      return avaliableCoins;
    } catch (error) {
      internalServerError();
      return;
    }
  }

  async createAddressCoin(coinType, seed, token) {
    try {
      API_HEADER.headers.Authorization = token;
      let response = await axios.post(
        BASE_URL + "/coin/" + coinType + "/address",
        { seed },
        API_HEADER
      );

      return response;
    } catch (error) {
      internalServerError();
      return;
    }
  }
}

export default CoinService;
