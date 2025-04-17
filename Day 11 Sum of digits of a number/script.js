let result = document.getElementById("answer");

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let sum =0;

let temp = inputNum;
while(temp>0){
  sum += temp%10;
  temp=parseInt(temp/10);
}

result.innerText = `Sum of digits of a ${inputNum}  is ${sum}`;
sum =0;
}
