const convertButton = document.querySelector(".convert-button");
const currentSelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueToConverted = document.querySelector(".currency-value");

  const dolarToday = 5.76;
  const euroToday = 6.24;
  const libraToday = 7.47;

  if (currentSelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currentSelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-de", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currentSelect.value == "libra") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
function changeCurrency(){
  const currencyDolar = document.querySelector(".currency-dolar")
  const currencyImg = document.querySelector(".currency-img")

  if(currentSelect.value == "dolar"){
    currencyDolar.innerHTML = "Dólar"
    currencyImg.src = "./assets/dolar.png"
  }
  if(currentSelect.value == "euro"){
    currencyDolar.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
  }
  if(currentSelect.value == "libra"){
    currencyDolar.innerHTML = "Libra"
    currencyImg.src = "./assets/libra.png"
  }

  convertValues()
}

currentSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
