let result = document.getElementById("answer");
result.innerText = "";

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  let sum = 0;
  let temp = inputNum;
  while (temp > 0) {
    let strong = 1;
    let lastd = temp % 10;
    for (let i = lastd; i > 0; i--) {
      strong *= i;
    }
    sum += strong;
    temp = parseInt(temp / 10);
  }
  if (sum == inputNum) {
    result.innerText = `${inputNum} is Strong number!`;
  } else {
    result.innerText = `${inputNum} is not Strong number!`;
  }
}
