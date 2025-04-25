function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);
  let result = document.getElementById("answer");
  result.innerText = "";
  let hcf = 1;
  for (let i = 1; i <= inputNum1 * inputNum2; i++) {
    if (inputNum1 % i == 0 && inputNum2 % i == 0) {
      hcf = i;
    }
  }
  let lcm = (inputNum1 * inputNum2) / hcf;

  result.innerText = ` lcm of ${inputNum1} & ${inputNum2} is ${lcm}`;
}
