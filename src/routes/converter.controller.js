export const currencyConverter = (req, res) => {
  console.log(req.params.currency)
  res.json(req.params.currency)
};
