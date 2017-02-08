// Calculator Function //

var oldNumber = 0;
var number = 0;
var sum = 0;

// Numbers //

function input0() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var zero = document.getElementById("button0").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + zero;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input1() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var one = document.getElementById("button1").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + one;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input2() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var two = document.getElementById("button2").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + two;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input3() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var three = document.getElementById("button3").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + three;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input4() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var four = document.getElementById("button4").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + four;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input5() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var five = document.getElementById("button5").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + five;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input6() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var six = document.getElementById("button6").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + six;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input7() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var seven = document.getElementById("button7").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + seven;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}

function input8() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var eight = document.getElementById("button8").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + eight;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");

}

function input9() {
    if (document.getElementById("placeholder").innerHTML === "0") {
        document.getElementById("placeholder").innerHTML = "";
    }
    var nine = document.getElementById("button9").value;
    var number = document.getElementById("placeholder").innerHTML;
    var number = number + nine;
    document.getElementById("placeholder").innerHTML = parseInt(number);
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("****************");
}


// Functions //

function inputAC() {
    var number = 0;
    console.log(parseInt(number));
    document.getElementById("placeholder").innerHTML = number;
}

function inputPlus() {
    var oldNumber = number;
    var sum = parseInt(oldNumber) + parseInt(number);
    document.getElementById("placeholder").innerHTML = sum;
    console.log("Old Number" + " = ");
    console.log(parseInt(oldNumber));
    console.log("Current Number" + " = ");
    console.log(parseInt(number));
    console.log("Sum" + " = ");
    console.log(parseInt(sum));
    console.log("****************");
    document.getElementById("placeholder").innerHTML = 0;
}

function inputEquals() {
    document.getElementById("placeholder").innerHTML = sum;
    console.log("Old Number" + " = " + oldNumber);
    console.log("Current Number" + " = " + number);
    console.log("Sum" + " = " + sum);
    console.log("****************");
}


// Functions //

//var zero = document.getElementById("button0").value;
//var one = document.getElementById("button1").value;
//var two = document.getElementById("button2").value;
//var three = document.getElementById("button3").value;
//var four = document.getElementById("button4").value;
//var five = document.getElementById("button5").value;
//var six = document.getElementById("button6").value;
//var seven = document.getElementById("button7").value;
//var eight = document.getElementById("button8").value;
//var nine = document.getElementById("button9").value;

//console.log(x);









