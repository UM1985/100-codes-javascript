let result = document.getElementById("answer");

function checkData() {
    let inputYear = parseInt(document.getElementById("input-num").value);

let leapyear;
if(inputYear %400 ==0){
  leapyear = `${inputYear} is Leap Year!`
}else if(inputYear % 4 == 0 && inputYear % 100 != 0){
  leapyear = `${inputYear} is Leap Year!`
}else{
  leapyear = `${inputYear} is not a Leap Year!`
}

    result.innerText = leapyear;
}
