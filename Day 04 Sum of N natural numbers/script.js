
let result = document.getElementById("answer");
function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  let sum = 0;
  for (let i = 1; i <= inputNum; i++) {
    sum += i;
  }

  result.innerText =`Sum of first  ${inputNum}  Natural number is ${sum}`;
}
