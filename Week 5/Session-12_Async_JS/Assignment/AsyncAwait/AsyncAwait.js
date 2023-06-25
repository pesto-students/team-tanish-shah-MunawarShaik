const getExchangeRate = async (currencyCode) => {
  const url = "https://api.exchangerate.host/latest";
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const rate = data.rates[currencyCode];
    if (!rate) {
      console.log(null);
    } else {
      const roundedRate = parseFloat(rate.toFixed(4));
      console.log(roundedRate);
    }
  } catch (error) {
    console.log(error);
  }
};

// testing
getExchangeRate("USD"); // returns  1.0918

getExchangeRate("XYZ"); // returns  null
