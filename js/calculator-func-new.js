// Calculator Function //


// Variables //

var input = [];
var sum = [];
var display = 0;
var total = 0;


// Numbers //

function input0() {
    input.push(0);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input1() {
	input.push(1);
	display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input2() {
    input.push(2);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input3() {
    input.push(3);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input4() {
    input.push(4);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input5() {
    input.push(5);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input6() {
    input.push(6);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input7() {
    input.push(7);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input8() {
    input.push(8);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function input9() {
    input.push(9);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
}

function inputDecimal() {
    input.push(".");
    document.getElementById("placeholder").innerHTML = display;
}


// Functions //

function inputAC() {
    input = [];
	oldNumber = 0;
	sum = [];
	display = 0;
    previousNumber = 0;
    document.getElementById("placeholder").innerHTML = display;
}

function inputPlus() {
    input.join("")
    input = [];
    sum.push(display);
    sum.push("+");
    display = 0;
}

function inputMinus() {
    input = [];
    sum.push(display);
    sum.push("-");
    display = 0;
}

function inputMultiply() {
    input = [];
    sum.push(display);
    sum.push("*");
    display = 0;
}

function inputDivide() {
    input = [];
    sum.push(display);
    sum.push("/");
    display = 0;
}

function inputEquals() {
    sum.push(display);
    total = sum.join("");
    input = [];
    previousNumber = 0;
    document.getElementById("placeholder").innerHTML = eval(total);
}


