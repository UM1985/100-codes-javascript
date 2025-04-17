let result = document.getElementById("answer");

function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let rev =0;

let temp = inputNum;
while(temp>0){
  rev = (rev*10)+(temp%10);
  temp=parseInt(temp/10);
}
if(rev == inputNum){
  result.innerText = `${inputNum} is Palindrome!` ;
}else{
  result.innerText = `${inputNum} is not Palindrome!` ;
}
sum =0;
}
