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