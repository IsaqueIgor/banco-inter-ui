/* eslint-disable @typescript-eslint/explicit-function-return-type */
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    .format(value)
    .replace(/\u00A0/, ' ');
};

export default formatCurrency;
