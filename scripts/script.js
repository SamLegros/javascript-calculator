var myInt = [];
var myOperation = [];
var teeHee = 0.7734;
var decimal = false;
var numFirst = false;
var mathClicked = false;

function clearAll() {
    myInt = [];
    myOperation = [];
    decimal = false;
    numFirst = false;
    $(".outputInt").html(0);
    $(".operation").html(0);
}

function numPress(num) {
    if (myInt.length < 15 && myOperation.length < 22) {
        myInt.push(num);
        myOperation.push(num);
        $(".outputInt").html(myInt);
        $(".operation").html(myOperation);
        numFirst = true;
        mathClicked = false;
    } else {
        myInt = [];
        myOperation = [];
        decimal = false;
        numFirst = false;
        $(".outputInt").html(0);
        $(".operation").html("Digital Limit Met");
    }
}

function pressOperation(operation) {
    if (numFirst == true && mathClicked == false) {
        myInt = [];
        myOperation.push(operation);
        $(".outputInt").html(operation);
        $(".operation").html(myOperation);
        decimal = false;
        numFirst = false;
        mathClicked = true;
    }
}


// OPERATION BUTTONS ----------
$("#divide").click(function() {
    pressOperation("/");
});

$("#multiply").click(function() {
    pressOperation("*");
});

$("#subtract").click(function() {
    pressOperation("-");
});

$("#sum").click(function() {
    pressOperation("+");
});

$("#equals").click(function() {
    pressOperation("=");
    myOperation.pop();
    myOperation = myOperation.join("");
    var a = eval(myOperation).toFixed(2).replace(/[.,]00$/, "");
    if (a.length < 15 && a.length < 22) {
        $(".outputInt").html(a);
    } else {
        $(".outputInt").html(0);
        $(".operation").html("Digital Limit Met");
    }
    var b = myOperation;
    var d = eval(b);
    if (d == teeHee) {
        $(".outputInt").html("HELLO THERE :)");
    }
});

$("#decimal").click(function() {
    if (myInt.length < 15) {
        if (decimal == false && numFirst == false) {
            myInt.push(0);
            myOperation.push(0);
            myInt.push(".");
            myOperation.push(".");
            $(".outputInt").html(myInt);
            $(".operation").html(myOperation);
            decimal = true;
            numFirst = true;
        } else if (decimal == false && numFirst == true) {
            myInt.push(".");
            myOperation.push(".");
            $(".outputInt").html(myInt);
            $(".operation").html(myOperation);
            decimal = true;
        }
    }
});


// NUMBER BUTTONS -----------
$("#nine").click(function() {
    numPress(9);
});

$("#eight").click(function() {
    numPress(8);
});

$("#seven").click(function() {
    numPress(7);
});

$("#six").click(function() {
    numPress(6);
});

$("#five").click(function() {
    numPress(5);
});

$("#four").click(function() {
    numPress(4);
});

$("#three").click(function() {
    numPress(3);
});

$("#two").click(function() {
    numPress(2);
});

$("#one").click(function() {
    numPress(1);
});

$("#zero").click(function() {
    if (myInt.length > 0) {
        numPress(0);
    }
});
