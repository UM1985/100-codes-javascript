function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let temp = inputNum;
  let result = document.getElementById("answer");
  result.innerText = "";

  let sqrt = Math.sqrt(temp);

  if (sqrt * sqrt === inputNum) {
    result.innerText += `${inputNum} is perfect Square!`;
  } else {
    result.innerText += `${inputNum} is not perfect Square!`;
  }
}
