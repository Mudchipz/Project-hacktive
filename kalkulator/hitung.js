// ambil input dari element

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value ="";
}
function calculate(){
    display.value = eval(display.value);
}
let inputIsNumber = false;

function appendToDisplay(input) {
    if (inputIsNumber) {
        display.value += input;
        inputIsNumber = false;
    } else {
        if (/^\d*$/.test(input)) { // This regular expression checks if the input is a number
            display.value += input;
            inputIsNumber = true;
        }
    }
}