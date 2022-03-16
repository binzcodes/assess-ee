import axios from 'axios'

export const getRates = async () => {
  try {
  const response = await axios.get(
    "https://openexchangerates.org/api/latest.json", {
      params: {
        app_id: '45d025be40ca45508a67f47c92dcec61'
      }
    }
  );
    return response.data.rates;
  } catch (err) {
    console.error(err);
  }
}