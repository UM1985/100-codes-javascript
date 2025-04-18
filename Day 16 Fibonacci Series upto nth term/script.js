let result = document.getElementById("answer");
result.innerText = "";

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);

  let n1 = 0, n2 = 1;

  result.innerText = `The Fibonacci series are: ${n1}, ${n2}`;
  let Fibonacci = 0;

  for (let i = 2; i <= inputNum; i++) {
    Fibonacci = n1 + n2;
    n1 = n2;
    n2 = Fibonacci;
    result.innerText += `, ${Fibonacci}`; // Use += to append
  }

  Fibonacci = 0;
}
