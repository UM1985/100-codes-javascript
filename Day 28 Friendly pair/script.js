function factor(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
    console.log(sum);
  }
  return sum;
}

function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  let sum1 = factor(inputNum1);
  let sum2 = factor(inputNum2);
  console.log(sum1);
  console.log(sum2);

  if (sum1 / inputNum1 == sum2 / inputNum2) {
    result.innerText = `  ${inputNum1} & ${inputNum2} are friendly pair!`;
  } else {
    result.innerText = `  ${inputNum1} & ${inputNum2}  are not friendly pair!`;
  }
}
