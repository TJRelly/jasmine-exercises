window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = (document.getElementById("loan-amount").value = "10000");
  const loanYears = (document.getElementById("loan-years").value = "5");
  const loanRate = (document.getElementById("loan-rate").value = ".02");
  calculateMonthlyPayment([loanAmount, loanYears, loanRate]);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const currentMonthly = calculateMonthlyPayment([
    currentValues.amount,
    currentValues.years,
    currentValues.rate,
  ]);
  updateMonthly(currentMonthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values[0]; // initial loan amount
  const n = values[1] * 12; // total payments (years*12)
  const i = values[2] / 12; // periodic interst rate(rate/12)
  if (p === 0 && n === 0 && i === 0) return "0";
  else if (i === 0) monthlyPayment = p / n;
  else monthlyPayment = (p * i) / (1 - (1 + i) ** -n);
  monthlyPayment = monthlyPayment.toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector("#monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}
