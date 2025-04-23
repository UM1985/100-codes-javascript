function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let result = document.getElementById("answer");
  result.innerText = "";

let temp = inputNum;
let sum = 0;
while(temp>0){
sum += (temp%10);
temp = parseInt(temp/10);
}
if(inputNum%sum == 0){
  result.innerText = `${inputNum}  is  Harshad Number!`;
}else{
  result.innerText = `${inputNum}  is not Harshad Number!`;

}
}
