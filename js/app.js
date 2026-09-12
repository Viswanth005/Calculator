const display = document.getElementById("display");

let justCalculated = false;

function appendtoDisplay(val) {
    if (justCalculated && !"+-*/".includes(val)) {
        display.value = "";
    }

    display.value += val;
    justCalculated = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        justCalculated = true;
    }
    catch(error) {
        display.value = "Syntax Error";
    }
}

function clearScreen(){
    display.value="";
}


//Adding keyboard Input
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if ("0123456789".includes(key)) {
        appendtoDisplay(key);
    }
    else if ("+-*/".includes(key)) {
        appendtoDisplay(key);
    }
    else if (key === ".") {
        appendtoDisplay(".");
    }
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    }
    else if (key === "Escape") {
        clearScreen();
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
});
