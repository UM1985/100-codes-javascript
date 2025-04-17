let result = document.getElementById("answer");

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  let primenumber;

  for (let i = 2; i < inputNum; i++) {
    if (inputNum % i == 0) {
      primenumber = `${inputNum} is not a prime number!`;
      result.innerText = primenumber;
      return;
    }
  }
  primenumber = `${inputNum}  a prime number!`;
  result.innerText = primenumber;
}
