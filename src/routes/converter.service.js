export const convertCurrency = (value, sourceRate, targetRate) =>
  (value * 100000) / ((sourceRate * 100000) / (targetRate * 100000)) / 100000;

export const round = (value) => Math.round(value * 100) / 100;

export const getRate = (currency, rates) => rates[currency.toUpperCase()];

export const convertCurrencies = (sourceCurrencyData, targetCurrency, rateData) => {
  const result = sourceCurrencyData.reduce((acc, [sourceCurrency, value]) => {
    return (
      acc +
      convertCurrency(value, getRate(sourceCurrency, rateData), getRate(targetCurrency, rateData))
    );
  }, 0);
  return round(result);
}