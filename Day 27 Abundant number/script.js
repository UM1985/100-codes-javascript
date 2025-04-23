function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  let temp = inputNum;
  let sum = 0;

  for (let i = 1; i < temp; i++) {
    if (inputNum % i == 0) {
      sum += i;
    }
  }
  console.log(sum);
  if (sum > inputNum) {
    result.innerText = ` The sum of these factors is ${sum}  it is greater than ${inputNum}  
So it is an Abundant number`;
  } else {
    result.innerText = ` The sum of these factors is ${sum}  it is smaller than ${inputNum}  
So it is not an Abundant number`;
  }
}
