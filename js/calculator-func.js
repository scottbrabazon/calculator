// Calculator Function //


// Variables //

let input = [];
let sum = [];
let display = 0;
let total = 0;


// Numbers //

const input0 = () => {
    input.push(0);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input1 = () => {
	input.push(1);
	display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input2 = () => {
    input.push(2);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input3 = () => {
    input.push(3);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input4 = () => {
    input.push(4);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input5 = () => {
    input.push(5);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input6 = () => {
    input.push(6);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input7 = () => {
    input.push(7);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input8 = () => {
    input.push(8);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const input9 = () => {
    input.push(9);
    display = input.join("");
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputDecimal = () => {
    if (input.includes('.'))
    {
        input.push("");
    }
    else
    {
        input.push(".");
    }
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}


// Functions //

const inputAC = () => {
    input = [];
    oldNumber = 0;
    sum = [];
    display = 0;
    previousNumber = 0;
    total = 0;
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputNegative = () => {
    input.push("-");
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputPercent = () => {
    sum.push(display);
    total = eval(sum.join(""));
    sum = [];
    sum.push(total);
    sum.push("/100");
    total = eval(sum.join(""));
    display = total;
    input = [];
    document.getElementById("placeholder").innerHTML = display;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputPlus = () => {
    input.join("")
    input = [];
    sum.push(display);
    sum.push("+");
    display = 0;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputMinus = () => {
    input = [];
    sum.push(display);
    sum.push("-");
    display = 0;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputMultiply = () => {
    input = [];
    sum.push(display);
    sum.push("*");
    display = 0;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputDivide = () => {
    input = [];
    sum.push(display);
    sum.push("/");
    display = 0;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
}

const inputEquals = () => {
    sum.push(display);
    total = eval(sum.join(""));
    display = eval(sum.join(""));
    sum = [];
    input = [];
    previousNumber = 0;
    document.getElementById("placeholder").innerHTML = total;
    // console.log("input = " + input);
    // console.log("display = " + display);
    // console.log("sum = " + sum);
    // console.log("total = " + total);
    // console.log("********************");
    total = 0;
}


