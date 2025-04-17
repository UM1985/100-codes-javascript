let result = document.getElementById("answer");
function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);

  result.innerText = (inputNum1>inputNum2)? `${inputNum1} is greater!`:`${inputNum2} is greater!`;

}
