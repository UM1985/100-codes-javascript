let result = document.getElementById("answer");

function checkData() {
  let inputStart = parseInt(document.getElementById("input-num1").value);
  let inputEnd = parseInt(document.getElementById("input-num2").value);

  let primeNumbers = [];

  for (let i = inputStart; i <= inputEnd; i++) {
    let isPrime = true;

    if (i < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  if (primeNumbers.length > 0) {
    result.innerText = `Prime Numbers between ${inputStart} & ${inputEnd} are: ${primeNumbers.join(", ")}`;
  } else {
    result.innerText = `No prime numbers found between ${inputStart} & ${inputEnd}.`;
  }
}
