// let x = parseInt(prompt("Enter the number: "));

// let result = (x%2 == 0) ? "Entered number is Even!": "Enter number is odd!";

let result = document.getElementById("answer");
function checkData() {
    let inputNum = parseInt(document.getElementById("input-num").value);

    result.innerText  = (inputNum%2 == 0) ? "Entered number is Even!": "Enter number is odd!";

}