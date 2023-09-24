
var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var op1 = 0;
var op2 = 0;
var operator = null;
console.log("button", button);

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {

        var value = this.getAttribute("data-value");
        if (value == "+") {
            op1 = parseFloat(display.innerText);
            operator = "+"
            display.innerText = " ";

        }
        else if (value == "/") {
            op1 = parseFloat(display.innerText);
            operator = "/";
            display.innerText = " ";


        }
        else if (value == "-") {
            op1 = parseFloat(display.innerText);
            operator = "-";
            display.innerText = " ";

        }
        else if (value == "*") {
            op1 = parseFloat(display.innerText);
            operator = "*";
            display.innerText = " ";


        }
        else if (value == "%") {
            op1 = parseFloat(display.innerText);
            operator = "%";
            display.innerText = " ";

        }
        else if (value == "+/-") {

            op1 = parseFloat(display.innerText);

            display.innerText = (-op1).toString();
        }
        else if (value == "AC") {
            op1 = 0; // op1 has value saved so we have to make op1 = 0
            op2 = 0; // op2 has value saved so we have to make op1 = 0
            operator = null;// the operator has value saved so we have to make operator = null
            display.innerText = 0;


        }
        else if (value == "=") {
            if (operator == null) {
                op1 = parseFloat(display.innerText);
                display.innerText = op1;
                console.log(op1);
            }
            else {
                op2 = parseFloat(display.innerText);

                var output = eval(op1 + " " + operator + " " + op2);
                display.innerText = output
                console.log(output);
            }

        }
        else if (value == ".") {


            if (!display.innerText.includes(".")) {
                display.innerText += ".";
            }

        }

        else {

            if (display.innerText === "0" || display.innerText === "Error") {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }


    })
}
