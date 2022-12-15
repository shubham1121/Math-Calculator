window.onload = function(){
var inpAreaController = document.querySelector("#inp-area");
var additionController = document.querySelector("#add");
var subtractionController = document.querySelector("#sub");
var clearInputAreaController = document.querySelector("#clear");
var multiplicationController = document.querySelector("#mul");
var divisionController = document.querySelector("#divi");
var num0Controller = document.querySelector("#num-0");
var num1Controller = document.querySelector("#num-1");
var num2Controller = document.querySelector("#num-2");
var num3Controller = document.querySelector("#num-3");
var num4Controller = document.querySelector("#num-4");
var num5Controller = document.querySelector("#num-5");
var num6Controller = document.querySelector("#num-6");
var num7Controller = document.querySelector("#num-7");
var num8Controller = document.querySelector("#num-8");
var num9Controller = document.querySelector("#num-9");
var equalController = document.querySelector("#equal");
var decimalController = document.querySelector("#deci");

num0Controller.addEventListener("click", function(){
    console.log(typeof(inpAreaController.innerText.length));
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "0";
})
num1Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "1";
})
num2Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "2";
})
num3Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "3";
})
num4Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "4";
})
num5Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "5";
})
num6Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "6";
})
num7Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "7";
})
num8Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "8";
})
num9Controller.addEventListener("click", function(){
    if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "9";
})

additionController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {inpAreaController.innerText = inpAreaController.innerText + "+";}
})

subtractionController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {inpAreaController.innerText = inpAreaController.innerText + "-";}
})

multiplicationController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {inpAreaController.innerText = inpAreaController.innerText + "x";}
})

divisionController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {inpAreaController.innerText = inpAreaController.innerText + "/";}
})

decimalController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {inpAreaController.innerText = inpAreaController.innerText + ".";}
})

clearInputAreaController.addEventListener("click", function(){
    inpAreaController.innerText="";
})


}