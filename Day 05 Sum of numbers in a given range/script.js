let result = document.getElementById("answer");
function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);

  let sum = 0;
  for (let i = inputNum1; i <= inputNum2; i++) {
    sum += i;
  }

  result.innerText =`Sum of Number between  ${inputNum1}  and  ${inputNum2}  is ${sum}`;
}
