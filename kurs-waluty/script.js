let from = "USD";
let to = "PLN";

updateFrom(document.getElementById("from"));
updateTo(document.getElementById("to"));

refreshValue();

function updateFrom(select) {
  from = select.value;
  refreshValue();
}

function updateTo(select) {
  to = select.value;
  refreshValue();
}

function refreshValue() {
 fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
 .then(res => res.json())
 .then(res => {
   let rate = res.rates[to];
   document.getElementById("value").innerHTML = rate;
   document.getElementById("value").innerHTML = document.getElementById("value").innerHTML.replace(".", ",");
 })
}