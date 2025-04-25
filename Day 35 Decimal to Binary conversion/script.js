function checkData() {
  let inputNum =parseInt( document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  const binary = inputNum.toString(2);

  result.innerText = ` Decimal of ${inputNum} is ${binary}`;
}
