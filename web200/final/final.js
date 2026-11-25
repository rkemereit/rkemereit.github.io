const sizePrices = {
  Small: 10,
  Medium: 13,
  Large: 16
};

const toppingRates = {
  Small: 0.75,
  Medium: 1.15,
  Large: 1.5
};

let order = [];
let subtotal = 0;

const form = document.getElementById("orderForm");
const addBtn = document.getElementById("addPizzaBtn");
const sizeInputs = document.querySelectorAll('input[name="size"]');
const crustInputs = document.querySelectorAll('input[name="crust"]');
const toppingInputs = document.querySelectorAll('input[name="toppings"]');
const rateText = document.getElementById("toppingRate");
const countSpan = document.getElementById("pizzaCount");
const itemsList = document.getElementById("orderItems");
const subtotalSpan = document.getElementById("subtotal");
const msg = document.getElementById("statusMsg");

sizeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const chosen = document.querySelector('input[name="size"]:checked');
    if (chosen) {
      rateText.textContent = "($" + toppingRates[chosen.value].toFixed(2) + " each)";
    } else {
      rateText.textContent = "";
    }
  });
});

addBtn.addEventListener("click", () => {
  const sizeEl = document.querySelector('input[name="size"]:checked');
  const crustEl = document.querySelector('input[name="crust"]:checked');

  if (!sizeEl || !crustEl) {
    msg.textContent = "Choose a size and crust first.";
    return;
  }

  let toppings = [];
  for (let i = 0; i < toppingInputs.length; i++) {
    if (toppingInputs[i].checked) {
      toppings.push(toppingInputs[i].value);
    }
  }

  const size = sizeEl.value;
  const price = sizePrices[size] + toppings.length * toppingRates[size];

  order.push({
    size: size,
    crust: crustEl.value,
    toppings: toppings,
    price: price
  });

  clearInputs();
  msg.textContent = "";
  showOrder();
});

function clearInputs() {
  for (let i = 0; i < sizeInputs.length; i++) {
    sizeInputs[i].checked = false;
  }
  for (let i = 0; i < crustInputs.length; i++) {
    crustInputs[i].checked = false;
  }
  for (let i = 0; i < toppingInputs.length; i++) {
    toppingInputs[i].checked = false;
  }
  rateText.textContent = "";
}

function showOrder() {
  countSpan.textContent = order.length;
  itemsList.innerHTML = "";
  subtotal = 0;

  if (order.length === 0) {
    itemsList.innerHTML = '<li class="emptyOrder">No Items on your Order</li>';
    subtotalSpan.textContent = "$0.00";
    return;
  }

  for (let i = 0; i < order.length; i++) {
    const pizza = order[i];
    subtotal = subtotal + pizza.price;

    let toppingLabel = "no toppings";
    if (pizza.toppings.length > 0) {
      toppingLabel = pizza.toppings.join(", ");
    }

    const row = document.createElement("li");
    row.innerHTML =
      "<span>#" +
      (i + 1) +
      " " +
      pizza.size +
      " " +
      pizza.crust +
      " (" +
      toppingLabel +
      ")</span><strong>$" +
      pizza.price.toFixed(2) +
      "</strong>";
    itemsList.appendChild(row);
  }

  subtotalSpan.textContent = "$" + subtotal.toFixed(2);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (order.length === 0) {
    msg.textContent = "Add a pizza before checking out.";
    return;
  }

  const firstName = document.getElementById("fname").value;
  msg.textContent =
    "Thanks, " +
    firstName +
    "! " +
    order.length +
    " pizza(s) - Subtotal: $" +
    subtotal.toFixed(2);
});
