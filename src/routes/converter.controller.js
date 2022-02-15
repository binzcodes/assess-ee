import { convertCurrencies } from "./converter.service";

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
  // todo: sanitise inputs
  const result = convertCurrencies(sources, currency)
  res.json({ [currency]: result });
};
