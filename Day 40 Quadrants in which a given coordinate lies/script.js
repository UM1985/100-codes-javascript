function checkData() {
  let inputNum1 =parseInt(document.getElementById("input-num1").value);
  let inputNum2 =parseInt(document.getElementById("input-num2").value);
  let result = document.getElementById("answer");
  result.innerText = "";
let op;
  if (inputNum1 > 0 && inputNum2 > 0)
    {
        op = `First`;
    }
    else if (inputNum1 < 0 && inputNum2 > 0)
    {
       op = `Second`;
    }
    else if (inputNum1 < 0 && inputNum2 < 0)
    {
      op = `Third`;
    }
    else if (inputNum1 > 0 && inputNum2 < 0)
    {
       op = `Fourth`;
    }

  result.innerText = ` { ${inputNum1} , ${inputNum2} } lies in ${op} Quadrant.`;
}
