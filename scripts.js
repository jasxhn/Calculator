const display = document.getElementById('display');

function enterInDisplay(number) {
    display.value = display.value + number;
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
    display.value = "";
}

let calculateResult = () => {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.textContent = "Error";
    }
}