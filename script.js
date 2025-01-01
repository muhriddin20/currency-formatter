const currencyInput = document.querySelector(".currency__form input");
const currencyBtn = document.querySelector(".currency__form button");
const ruble = document.querySelector("#ruble");
const dollar = document.querySelector("#dollar");
const lira = document.querySelector("#lira");

// format ruble
function formatRuble(number) {
  return (number / 110).toFixed(2);
}

// format dollar
function formarDollar(number) {
  return (number / 12920).toFixed(2);
}

// format lira
function formatLira(number) {
  return (number / 365.42).toFixed(2);
}

currencyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ruble.textContent = `₽${formatRuble(currencyInput.value)}`;
  dollar.textContent = `$${formarDollar(currencyInput.value)}`;
  lira.textContent = `₺${formatLira(currencyInput.value)}`;
});
