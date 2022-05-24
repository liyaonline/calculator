/*const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result;   
if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') {
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2;
}   
window.alert(" Result is " + result);  */
function insrt(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}
function eql() {
    $('.calc-display').val(eval($('.calc-display').val()));
}
function c() {
    $('.calc-display').val('');
}
function del() {
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length -1));

}