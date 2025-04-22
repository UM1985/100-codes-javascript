function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let temp = inputNum;
  let result = document.getElementById("answer");
  result.innerText = "";

  let count = 0;
  let sqrt = Math.sqrt(temp);
  let square = inputNum * inputNum;

  let reverse = 0;
  let automorphic = 0;

  while (temp > 0) {
    count++;
    temp = parseInt(temp / 10);
  }

  temp = inputNum;

  for (let i = 1; i <= count; i++) {
    reverse = reverse * 10 + (square % 10);
    square = parseInt(square / 10);
  }

  while (reverse > 0) {
    automorphic = automorphic * 10 + (reverse % 10);
    reverse = parseInt(reverse / 10);
  }

  if (automorphic == inputNum) {
    result.innerText = `${inputNum} Entered number is Automorphic!`;
  } else {
    result.innerText = `${inputNum} Entered number is not Automorphic!`;
  }
}
