var input1 = document.querySelector("#number-1");
var input2 = document.querySelector("#number-2");
var button = document.querySelector("#result");
var button2 = document.querySelector("#result2");
var button3 = document.querySelector("#result3");
var button4 = document.querySelector("#result4");



button.addEventListener("click", calculator);
button2.addEventListener("click", subtract);
button3.addEventListener("click", multiply);
button4.addEventListener("click", divide);


function calculator () {
var sum = parseFloat(input1.value) + parseFloat(input2.value);
document.querySelector("#total").innerHTML = sum;

}

function subtract() {
  var sub = parseFloat(input1.value) - parseFloat(input2.value);
  document.querySelector("#total").innerHTML = sub;

}
 function multiply() {
   var mul = parseFloat(input1.value) * parseFloat(input2.value);
     document.querySelector("#total").innerHTML = mul;

 }
 function divide() {
   var di = parseFloat(input1.value) / parseFloat(input2.value);
      document.querySelector("#total").innerHTML = di;

 }
