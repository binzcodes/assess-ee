import { exchangeRates } from "../data/data.js";

export const convertCurrency = (value, sourceRate, targetRate) =>
  (value * 100000) / ((sourceRate * 100000) / (targetRate * 100000)) / 100000;

export const round = (value) => Math.round(value * 100) / 100;

export const getRate = (currency) => exchangeRates[currency.toUpperCase()];

export const convertCurrencies = (sourceData, targetCurrency) => {
  const result = sourceData.reduce((acc, [sourceCurrency, value]) => {
    return (
      acc +
      convertCurrency(value, getRate(sourceCurrency), getRate(targetCurrency))
    );
  }, 0);
  return round(result);
}