let num1 = 8
let num2 = 2
document.getElementById("num1-el").taxtContent = num1
document.getElementById("num2-el").taxtContent = num2

let sum = document.getElementById("sum-el")

function add(){
    sum.textContent += num1 + num2;
}

function subtract(){
    sum.textContent += num1 - num2;
}

function divide(){
    sum.textContent += num1 / num2;
}

function mutiply(){
    sum.textContent += num1 * num2;
}
