// MAIN FILE

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function deleteLast(){
    const currentValue = display.value;
    if (currentValue.length > 0) {
    const newValue = currentValue.slice(0, -1);
    display.value = newValue
    }

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if (display.value.includes("/0")) {
        display.value = "Error 2. DIV BY 0"
    } else {
        try {
            display.value = eval(display.value);
        } catch(Error) {
            display.value = "Error"
        }
    }
}

function calculateSqrt(){
    const currentValue = parseFloat(display.value);
    if (currentValue >= 0) {
        display.value = Math.sqrt(currentValue)
    } else {
        display.value = "Error 3";
    }
}

function showPi(){
    display.value += Math.PI
}

function addOpeningBracket(){
    display.value += "(";
}

function addClosingBracket(){
    display.value += ")";
}