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
var resultDisplayed = false;

num0Controller.addEventListener("click", function(){
    console.log(typeof(inpAreaController.innerText.length));
    if(resultDisplayed)
    {inpAreaController.innerText="0"; resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "0";
})
num1Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="1";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "1";
})
num2Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="2";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "2";
})
num3Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="3";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "3";
})
num4Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="4";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "4";
})
num5Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="5";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "5";
})
num6Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="6";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "6";
})
num7Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="7";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "7";
})
num8Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="8";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "8";
})
num9Controller.addEventListener("click", function(){
    if(resultDisplayed)
    {inpAreaController.innerText="9";resultDisplayed=false;}
    else if(inpAreaController.innerText.length<=16)
    inpAreaController.innerText = inpAreaController.innerText + "9";
})

additionController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {resultDisplayed=false; inpAreaController.innerText = inpAreaController.innerText + "+";}
})

subtractionController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {resultDisplayed=false; inpAreaController.innerText = inpAreaController.innerText + "-";}
})

multiplicationController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {resultDisplayed=false; inpAreaController.innerText = inpAreaController.innerText + "x";}
})

divisionController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {resultDisplayed=false; inpAreaController.innerText = inpAreaController.innerText + "/";}
})

decimalController.addEventListener("click", function(){
    let len = inpAreaController.innerText.length;
    const operators = ["+","-","x","/","."];
    let lastChar = inpAreaController.innerText[len-1];
    console.log(typeof(lastChar));
    console.log(operators.includes(lastChar));
    if(len<=16 && !operators.includes(lastChar))
    {resultDisplayed=false;inpAreaController.innerText = inpAreaController.innerText + ".";}
})

clearInputAreaController.addEventListener("click", function(){
    inpAreaController.innerText="";
});

equalController.addEventListener("click", function() {

    // this is the string that we will be processing eg. -10+26+33-56*34/23
    var inputString = inpAreaController.innerText;
  
    // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
    var numbers = inputString.split(/\+|\-|\x|\//g);
  
    // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
    // first we replace all the numbers and dot with empty string and then split
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
  
    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");
  
    // now we are looping through the array and doing one operation at a time.
    // first divide, then multiply, then subtraction and then addition
    // as we move we are alterning the original numbers and operators array
    // the final element remaining in the array will be the output
  
    var divide = operators.indexOf("/");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
  
    var multiply = operators.indexOf("x");
    while (multiply != -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("x");
    }
  
    var subtract = operators.indexOf("-");
    while (subtract != -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }
  
    var add = operators.indexOf("+");
    while (add != -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
  
    inpAreaController.innerText = numbers[0]; // displaying the output
    resultDisplayed = true; // turning flag if result is displayed
  });
  


}