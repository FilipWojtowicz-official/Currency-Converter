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
        currencyParagraph.innerHTML = `${(
          Number(currencyValue.value) * data.rates[0].mid
        ).toFixed(2)}PLN`;
      } else {
        alert("something goes wrong :( Come back later pliz");
      }
    })
    .catch(() => {
      alert("something goes wrong :( Come back later pliz");
    });
}

converterForm.addEventListener("submit", getCurrency);
