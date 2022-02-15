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