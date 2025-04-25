function checkData() {
  let inputNum =parseInt( document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  const octal = inputNum.toString(8);

  result.innerText = ` octal of ${inputNum} is ${octal}`;
}
