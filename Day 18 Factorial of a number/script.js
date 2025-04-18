let result = document.getElementById("answer");
result.innerText = "";

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
let factorial = 1;
  for(let i =inputNum;i>0;i--){
    factorial *=i;
  }

  result.innerText = `Factorial of ${inputNum} is ${factorial}`;
}
