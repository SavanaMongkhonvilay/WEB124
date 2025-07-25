// Savana Mongkhonvilay 7/25/25

function calcAdd(num) {
  let answer = '';
  for (let i = 1; i <= 10; i++) {
    answer += `${num} + ${i} = ${num + i}<br>`;
  }
  document.getElementById("addition").innerHTML = answer;
}

function calcSub(num) {
  let answer = '';
  let i = 1;
  while (i <= 10) {
    answer += `${num} - ${i} = ${num - i}<br>`;
    i++;
  }
  document.getElementById("subtraction").innerHTML = answer;
}

function calcMult(num) {
  let answer = '';
  let i = 1;
  do {
    answer += `${num} * ${i} = ${num * i}<br>`;
    i++;
  } while (i <= 10);
  document.getElementById("multiplication").innerHTML = answer;
}

function calcDiv(num) {
  let answer = '';
  for (let i = 1; i <= 10; i++) {
    let quotient = (num / i).toFixed(2);
    answer += `${num} / ${i} = ${quotient}<br>`;
  }
  document.getElementById("division").innerHTML = answer;
}

function runAll() {
  const numInput = document.getElementById("num");
  const num = parseFloat(numInput.value);

  if (isNaN(num)) {
    alert("Please enter a valid number.");
    return;
  }

  calcAdd(num);
  calcSub(num);
  calcMult(num);
  calcDiv(num);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn").addEventListener("click", runAll);
});
