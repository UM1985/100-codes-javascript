function checkData() {
  let inputNum =document.getElementById("input-num").value;
  let result = document.getElementById("answer");
  result.innerText = "";

  const decimal = parseInt(inputNum, 2); 
  const octal = decimal.toString(8);  
  result.innerText = ` octal of ${inputNum} is ${octal}`;
}
