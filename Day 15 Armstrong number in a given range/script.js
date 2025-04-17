let result = document.getElementById("answer");

function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);
  let outputText = "";

  for (let i = inputNum1; i <= inputNum2; i++) {
    let temp = i;
    let count = 0;
    let sum = 0;

    // Count number of digits
    while (temp > 0) {
      count++;
      temp = parseInt(temp / 10);
    }

    temp = i;
    // Calculate sum of digits raised to power of count
    while (temp > 0) {
      let rem = temp % 10;
      sum += Math.pow(rem, count);
      temp = parseInt(temp / 10);
    }

    if (sum == i) {
      outputText += `${i} is Armstrong!\n`;
    }
  }

  result.innerText = outputText;
}
