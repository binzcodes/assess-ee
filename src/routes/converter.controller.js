import { exchangeRates } from "../data/data.js";
import { convertCurrencies } from "./converter.service.js";

const validateCurrency = (currency) => !!exchangeRates[currency.toUpperCase()]

export const currencyConverter = (req, res) => {
  const { params, body } = req;
  const currency = params.currency.toUpperCase();
  const sources = Object.entries(body);
  
  if (sources.length === 0) {
    console.warn("No data in request");
    return res.status(402).send({ message: 'No data in request'});
  }
  
  if (!validateCurrency(currency)) {
    console.warn(`Currency ${currency} not found`);
    return res.status(400).send({ message: `Currency ${currency} not found` });
  }

  const invalidCurrencies = sources.find(
    ([currency]) => !validateCurrency(currency)
  );
  if (invalidCurrencies) {
    console.warn(`Currency ${invalidCurrencies[0]} not found`);
    return res
      .status(400)
      .send({ message: `Currency ${invalidCurrencies[0]} not found` });
  }
  const result = convertCurrencies(sources, currency)
  res.json({ [currency]: result });
};