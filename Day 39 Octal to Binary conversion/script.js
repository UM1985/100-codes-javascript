function checkData() {
  let inputNum =parseInt(document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  const decimal = parseInt(inputNum, 8);
  const binary = decimal.toString(2); 
  result.innerText = ` binary of ${inputNum} is ${binary}`;
}
