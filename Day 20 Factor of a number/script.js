
function checkData() {
  let inputNum = parseInt(document.getElementById("input-num").value);
  let temp = inputNum;
  let result = document.getElementById("answer");
  result.innerText = "";
  
 
 for(let i = 1; i<= inputNum;i++){
   if(temp%i == 0){
    result.innerText += `${i} , `
   }
 }

}
