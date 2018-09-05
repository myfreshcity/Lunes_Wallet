export const nomeDaFuncao = () => ({ // nome diferente do Saga pra testar
  type: "GET_TESTE",
  // outros campos necessarios pra atualizar via action
});

export const getCoinsEnabled =()=>({
  type: "GET_API_COINS"
});

export const setPayment = (pay) =>({
  type: "SET_PAYMENT", 
  pay
});

export const getFeePayment = (coin, amount) => ({
  type: "GET_FEE_PAYMENT", 
  coin, 
  amount
});

export const setFeePayment = (fee) => ({
  type: "SET_FEE_PAYMENT",
  fee
});

export const getInvoice = (number) => ({
  type: "GET_INVOICE", 
  number
});