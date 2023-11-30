import axios from "axios";

const BASE_URL = "https://api.currencyapi.com/v3/";
const API_KEY = '"cur_live_L3HLKmxdL7ZYoHJl1CnfIjoNcrWSwAmlGqIH3NYv";';
const BASE_CURRENCY = "UAH";

export const getLatestRate = async () => {
  try {
    const res = await axios.get(
      "https://api.currencyapi.com/v3/latest/base_currency=UAH?apikey=cur_live_L3HLKmxdL7ZYoHJl1CnfIjoNcrWSwAmlGqIH3NYv"
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching latest rates:", error);
    return null;
  }
};

// export const getRateConverted = async () => {
//   try {
//     const res = await axios.get(
//       "https://api.currencyapi.com/v3/convert/base_currency=UAH?apikey=cur_live_L3HLKmxdL7ZYoHJl1CnfIjoNcrWSwAmlGqIH3NYv"
//     );
//     return res.data;
//   } catch (error) {
//     console.log("Error:", error);
//     return null;
//   }
// };

export const getRateConverted = async (baseCurrency) => {
  try {
    const apiKey = "YOUR-API-KEY"; // Replace with your actual API key
    const apiUrl = `https://api.currencyapi.com/v3/convert`;

    const res = await axios.get(apiUrl, {
      params: {
        base_currency: baseCurrency,
        apikey: apiKey,
      },
    });

    return res.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};
