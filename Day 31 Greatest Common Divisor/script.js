function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);
  let result = document.getElementById("answer");
  result.innerText = "";
  let temp1 = inputNum1;
  let temp2 = inputNum2;
  while (temp1 != temp2)
    {
        if (temp1 > temp2)
        {
          temp1 -= temp2;
        }
        else
        {
          temp2 -= temp1;
        }
    }

  result.innerText = ` Greatest Common Divisor of ${inputNum1} & ${inputNum2} is ${temp1}`;
}
