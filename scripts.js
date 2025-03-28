const convertButton = document.querySelector(".convert-button");
const currentSelect = document.querySelector(".currency-select");
const currentSelectToConvert = document.querySelector(".currency-select-to-convert"); // Correção

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueToConverted = document.querySelector(".currency-value");

  const dolarToday = 5.76;
  const euroToday = 6.24;
  const libraToday = 7.47;

  if (currentSelect.value == "real" && currentSelectToConvert.value == "real") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }
  if (currentSelect.value == "dolar" && currentSelectToConvert.value == "real") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currentSelect.value == "euro" && currentSelectToConvert.value == "real") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currentSelect.value == "libra" && currentSelectToConvert.value == "real") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currentSelect.value == "real" && currentSelectToConvert.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday);
  }
  if (currentSelect.value == "dolar" && currentSelectToConvert.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }
  if (currentSelect.value == "euro" && currentSelectToConvert.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * (dolarToday / euroToday));
  }
  if (currentSelect.value == "libra" && currentSelectToConvert.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * (dolarToday / libraToday));
  }
  if (currentSelect.value == "real" && currentSelectToConvert.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * euroToday);
  }
  if (currentSelect.value == "dolar" && currentSelectToConvert.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * (euroToday / dolarToday));
  }
  if (currentSelect.value == "euro" && currentSelectToConvert.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  }
  if (currentSelect.value == "libra" && currentSelectToConvert.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * (euroToday / libraToday));
  }
  if (currentSelect.value == "real" && currentSelectToConvert.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * libraToday);
  }
  if (currentSelect.value == "dolar" && currentSelectToConvert.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * (libraToday / dolarToday));
  }
  if (currentSelect.value == "euro" && currentSelectToConvert.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * (libraToday / euroToday));
  }
  if (currentSelect.value == "libra" && currentSelectToConvert.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  }
}

function changeCurrency() {
  const currencyDolar = document.querySelector(".currency-dolar");
  const currencyImg = document.querySelector(".currency-img");
  const currencyReal = document.querySelector(".currency-real"); // Correção
  const currencyImgToConvert = document.querySelector(".currency-img-to-convert"); // Correção

  if (currentSelect.value == "real") {
    currencyDolar.innerHTML = "Real";
    currencyImg.src = "./assets/real.png";
  }
  if (currentSelect.value == "dolar") {
    currencyDolar.innerHTML = "Dólar";
    currencyImg.src = "./assets/dolar.png";
  }
  if (currentSelect.value == "euro") {
    currencyDolar.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }
  if (currentSelect.value == "libra") {
    currencyDolar.innerHTML = "Libra";
    currencyImg.src = "./assets/libra.png";
  }
  if (currentSelectToConvert.value == "real") {
    currencyReal.innerHTML = "Real";
    currencyImgToConvert.src = "./assets/real.png";
  }
  if (currentSelectToConvert.value == "dolar") {
    currencyReal.innerHTML = "Dólar";
    currencyImgToConvert.src = "./assets/dolar.png";
  }
  if (currentSelectToConvert.value == "euro") {
    currencyReal.innerHTML = "Euro";
    currencyImgToConvert.src = "./assets/euro.png";
  }
  if (currentSelectToConvert.value == "libra") {
    currencyReal.innerHTML = "Libras";
    currencyImgToConvert.src = "./assets/libra.png";
  }

  convertValues();
}

currentSelect.addEventListener("change", changeCurrency);
currentSelectToConvert.addEventListener("change", changeCurrency); // Correção
convertButton.addEventListener("click", convertValues);