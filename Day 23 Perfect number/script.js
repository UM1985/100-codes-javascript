
function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let temp = inputNum;
  let result = document.getElementById("answer");
  result.innerText = "";
  
  let sum = 0;
 for(let i = 1; i< inputNum;i++){
   if(temp%i == 0){
   sum +=i;
   }
 }

 if(sum == inputNum){
 result.innerText += `${inputNum} is perfect Number!` ;
 }else{
  result.innerText += `${inputNum} is not perfect Number!` ;
 }
}
