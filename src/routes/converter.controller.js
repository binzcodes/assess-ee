// import { exchangeRates } from "../data/data.js";
import { getRates } from "../services/exchangeRates.js";

import { convertCurrencies } from "./converter.service.js";

const validateCurrency = (currency, rates) => !!rates[currency.toUpperCase()]

export const currencyConverter = async (req, res) => {
  const { params, body } = req;
  const currency = params.currency.toUpperCase();
  const sources = Object.entries(body);
  
  if (sources.length === 0) {
    console.warn("No data in request");
    return res.status(402).send({ message: 'No data in request'});
  }

  const rates = await getRates();
  
  if (!validateCurrency(currency, rates)) {
    console.warn(`Currency ${currency} not found`);
    return res.status(400).send({ message: `Currency ${currency} not found` });
  }

  const invalidCurrencies = sources.find(
    ([currency]) => !validateCurrency(currency, rates)
  );
  if (invalidCurrencies) {
    console.warn(`Currency ${invalidCurrencies[0]} not found`);
    return res
      .status(400)
      .send({ message: `Currency ${invalidCurrencies[0]} not found` });
  }

  const result = convertCurrencies(sources, currency, rates)
  res.json({ [currency]: result });
};