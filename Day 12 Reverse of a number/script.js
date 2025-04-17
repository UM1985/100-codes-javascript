let result = document.getElementById("answer");

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let rev =0;

let temp = inputNum;
while(temp>0){
  rev = (rev*10)+(temp%10);
  temp=parseInt(temp/10);
}

result.innerText = `Sum of digits of a ${inputNum}  is ${rev}`;
sum =0;
}
