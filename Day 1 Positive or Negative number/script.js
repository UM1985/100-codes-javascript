let result = document.getElementById("answer");

function checkData() {
    let inputNum = parseInt(document.getElementById("input-num").value);

    result.innerText = isNaN(inputNum) ? "Invalid input! Please enter a valid number."
               : (inputNum > 0) ? "The number is positive."
               : (inputNum < 0) ? "The number is negative."
               : "The number is zero.";
}
