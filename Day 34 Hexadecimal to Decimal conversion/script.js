function checkData() {
  let inputNum = document.getElementById("input-num").value;
  let result = document.getElementById("answer");
  result.innerText = "";

  const decimal = parseInt(inputNum, 16);


  result.innerText = ` Decimal of ${inputNum} is ${decimal}`;
}
