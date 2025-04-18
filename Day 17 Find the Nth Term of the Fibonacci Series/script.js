let result = document.getElementById("answer");
result.innerText = "";

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  let n1 = 0, n2 = 1;
  let Fibonacci;

  if (inputNum === 0) {
    result.innerText = `${n1}`;
    return;
  } else if (inputNum === 1) {
    result.innerText = `${n2}`;
    return;
  }

  for (let i = 2; i <inputNum; i++) {
    Fibonacci = n1 + n2;
    n1 = n2;
    n2 = Fibonacci;
  }

  result.innerText = `${Fibonacci}`;
}
