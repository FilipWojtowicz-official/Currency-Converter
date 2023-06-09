const converterForm = document.getElementById("converter-form");
const currencyValue = document.getElementById("currency-value");
const currencySelect = document.getElementById("currency-select");
const currencyButton = document.getElementById("submit-button");
const currencyParagraph = document.getElementById("result-paragraph");

function getCurrency(event) {
  event.preventDefault();
  fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencySelect.value}/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.rates?.[0]?.mid) {
        currencyParagraph.innerHTML = `${calculateCurrency(
          currencyValue.value,
          data.rates[0].mid
        )}PLN`;
      } else {
        alert("something goes wrong :( Come back later pliz");
      }
    })
    .catch(() => {
      alert("something goes wrong :( Come back later pliz");
    });
}

function calculateCurrency(value, rate) {
  return (Number(value) * Number(rate)).toFixed(2);
}

converterForm.addEventListener("submit", getCurrency);
