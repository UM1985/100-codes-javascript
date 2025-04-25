function checkData() {
  let inputNum =parseInt( document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  const Hexadecimal = inputNum.toString(16);

  result.innerText = ` octal of ${inputNum} is ${Hexadecimal.toUpperCase()}`;
}
