// Calculator Function //


// Variables //

var newNumber = 0;
var oldNumber = 0;
var sum = 0;


// Numbers //

function input0() {
    var zero = parseInt(document.getElementById("button0").value);
    console.log(zero);
    console.log(newNumber);
}

function input1() {
    var one = parseInt(document.getElementById("button1").value);
    console.log(one);
    console.log(newNumber);
}

function input2() {
    var two = parseInt(document.getElementById("button2").value);
    console.log(two);
    console.log(newNumber);
}

function input3() {
    var three = parseInt(document.getElementById("button3").value);
    console.log(three);
    console.log(newNumber);
}

function input4() {
    var four = parseInt(document.getElementById("button4").value);
    console.log(four);
    console.log(newNumber);
}

function input5() {
    var five = parseInt(document.getElementById("button5").value);
    console.log(five);
    console.log(newNumber);
}

function input6() {
    var six = parseInt(document.getElementById("button6").value);
    console.log(six);
    console.log(newNumber);
}

function input7() {
    var seven = parseInt(document.getElementById("button7").value);
    console.log(seven);
    console.log(newNumber);
}

function input8() {
    var eight = parseInt(document.getElementById("button8").value);
    console.log(eight);
    console.log(newNumber);
}

function input9() {
    var nine = parseInt(document.getElementById("button9").value);
    console.log(nine);
    console.log(newNumber);
}


// Functions //

function inputAC() {
    document.getElementById("placeholder").innerHTML = 0;
}

function inputPlus() {
    document.getElementById("placeholder").innerHTML = 0;
    var z = document.getElementById("placeholder").innerHTML;
    var x = document.getElementById("button9").value;
    document.getElementById("placeholder").innerHTML = parseInt(z + x);
    var newNumber = parseInt(z + x);
}