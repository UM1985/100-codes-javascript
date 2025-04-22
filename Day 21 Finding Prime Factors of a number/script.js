function isprime(num) {

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
   
      return false;
    }
  }
return true;
}
function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let temp = inputNum;
  let result = document.getElementById("answer");
  result.innerText = "";

  for (let i = 1; i <= inputNum; i++) {
    if (temp % i == 0) {
      if (isprime(i)) {
        result.innerText += `${i} , `;
      }
    }
  }
}
