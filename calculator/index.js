let num1=8;
let num2=2;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
let resultel=document.getElementById("sum-el")


// create four functions: add(),subtract(),divide(),multiply()
// call the correct function when the user clicks on one of the buttons
// performs the given calcuation using num1 and num2
// render the result of the calculation in the paragraph with id="sum-el"


function add(){
    resultel.textContent="result: "+ (num1+num2);
}
function subtract(){
    resultel.textContent="result: "+ (num1-num2);
}
function divide(){
    resultel.textContent="result: " + (num1/num2);
}
function multiply(){
    resultel.textContent="result: " + (num1*num2);
}

