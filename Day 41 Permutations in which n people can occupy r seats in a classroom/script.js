function factorial(num)
{
    let fact = 1;

    for (let i = num; i > 1; i--)
    {
        fact *= i;
    }
    return fact;
}


function checkData() {
  let inputNum1 =parseInt(document.getElementById("input-num1").value);
  let inputNum2 =parseInt(document.getElementById("input-num2").value);
  let result = document.getElementById("answer");
  result.innerText = "";

let answer = factorial(inputNum1) / factorial(inputNum1 - inputNum2);

  result.innerText = `  possible arrangeents are ${answer} .`;
}
