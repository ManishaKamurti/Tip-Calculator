const form = document.getElementById("calculator");

form.onsubmit = function (event) {
  event.preventDefault();

  const howMuch = document.getElementById("bill");
  const tipAmount = document.getElementById("percentage");
  const customerNum = document.getElementById("customer-num");

  const totalBill = document.getElementById("total-bill");
  const totalPercentage = document.getElementById("total-percentage");
  const totalPerCustomer = document.getElementById("total-per-customer");

  let cost = parseFloat(howMuch.value);
  let customers = parseInt(customerNum.value);

  let percentage = 0;
  if (tipAmount.value !== "") {
    percentage = parseInt(tipAmount.value);
  }

  let percentageAmount = calculatePercentageAmount(cost, percentage);
  totalPercentage.value = percentageAmount;

  let totalValue = calculateTotalValue(cost, percentage);
  totalBill.value = totalValue;

  let totalPerPerson = calculatePerCustomer(percentageAmount, customers);
  totalPerCustomer.value = totalPerPerson;

  return false;
};

function calculatePercentageAmount(cost, percentage) {
  return Math.round((cost / 100) * percentage);
}

function calculateTotalValue(cost, percentageAmount) {
  return Math.round(cost + percentageAmount);
}

function calculatePerCustomer(totalPerPerson, customers) {
  return totalPerPerson / customers;
}
