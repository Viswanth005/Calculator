const display = document.getElementById("display");

function appendtoDisplay(val){
    display.value += val;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Syntax Error";
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

//Clear Syntax Error
function appendtoDisplay(val) {
    if (display.value === "Syntax Error") {
        display.value = "";
    }

    display.value += val;
}