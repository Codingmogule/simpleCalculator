let result = document.getElementById("result");
let equation = "";

function enterNumber(num) {
    equation += num;
    result.value = equation;
}

function enterOperator(operator) {
    equation += operator;
    result.value = equation;
}

function calculate() {
    try {
        result.value = eval(equation);
    } catch (error) {
        result.value = "Error";
    }
}

function clearResult() {
    equation = "";
    result.value = "";
}
