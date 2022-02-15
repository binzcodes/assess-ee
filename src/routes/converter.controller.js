import { convertCurrencies, getRate } from "./converter.service";

const exchangeRates = {
  USD: 1,
  EUR: 0.87815,
  GBP: 0.78569,
  CAD: 1.31715,
  INR: 69.3492,
  MXN: 19.2316,
  AUD: 1.43534,
  CNY: 6.88191,
  MYR: 4.13785,
  COP: 3203.18,
};


export const currencyConverter = (req, res) => {
  const { params, body } = req;
  const currency = params.currency.toUpperCase();
  const sources = Object.entries(body);
  
  if (sources.length === 0) {
    console.warn("No data in request");
    return res.status(402).send({ message: 'No data in request'});
  }
  
  if (!exchangeRates[currency.toUpperCase()]) {
    console.warn(`Currency ${currency} not found`);
    return res.status(400).send({ message: `Currency ${currency} not found` });
  }

  const invalidCurrencies = sources.find(
    ([currency, _]) => !exchangeRates[currency.toUpperCase()]
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