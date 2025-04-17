let result = document.getElementById("answer");

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let sum =0;

let temp = inputNum;
let count = 0
while(temp>0){
  count++;
  temp = parseInt(temp/10);
}

temp = inputNum;
while(temp>0){
  let rem = temp%10;
  sum = sum+Math.pow(rem,count );
  temp=parseInt(temp/10);
}
if(sum == inputNum){
  result.innerText = `${inputNum} is Armstrong!` ;
}else{
  result.innerText = `${inputNum} is not Armstrong!` ;
}
sum =0;
count=0;
}
