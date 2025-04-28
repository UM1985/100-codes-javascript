function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

  let answer = (inputNum * (inputNum - 1)) / 2;

  result.innerText = `  for ${inputNum} people there will be ${answer}  handshakes.`;
}
