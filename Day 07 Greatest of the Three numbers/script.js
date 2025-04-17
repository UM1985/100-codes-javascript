let result = document.getElementById("answer");
function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);
  let inputNum3 = parseInt(document.getElementById("input-num3").value);

  result.innerText =
    inputNum1 > inputNum2 && inputNum1 > inputNum3
      ? `${inputNum1}  is Greatest!`
      : inputNum2 > inputNum1 && inputNum2 > inputNum3
      ? ` ${inputNum2} is Greatest!`
      : `${inputNum3} is Greatest!`;
}
