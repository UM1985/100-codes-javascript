let result = document.getElementById("answer");
result.innerText = "";

function checkData() {
  let inputNum1 = parseInt(document.getElementById("input-num1").value);
  let inputNum2 = parseInt(document.getElementById("input-num2").value);
let power =1;
for(let i =1; i<=inputNum2;i++){
  power *= inputNum1
}

  result.innerText = `Answer of base ${inputNum1} and exponent ${inputNum2} is ${power}`;
}
