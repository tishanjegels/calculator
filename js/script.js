let equalpressed = 0;

let buttonInput = document.querySelectorAll(button);

let input = document.getElementById("calcDisplay");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");

window.onload = () => {
    input.value = "";
};

buttonInput.forEach((button) => {
    button.addEventListener("click", () => {
        if(equalpressed == 1) {
            input.value = "";
            equalpressed = 0;
        }
        input.value += buttonclass.value;

    });
});


equal.addEventListener("click", () => {
    equalpressed = 1;
});