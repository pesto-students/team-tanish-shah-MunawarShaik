let count = 0;
const generateTransactionId = () => {
  count += 1;
  let string = "TRANSACTION_ID_";
  let transactionId = Symbol(string + count);
  return transactionId;
};

console.log(generateTransactionId());
//console.log(count)
console.log(generateTransactionId());
//console.log(count);
console.log(generateTransactionId());
//console.log(count);
