// Написать функцию, которая поменяет переменные местами, не создавая дополнительную переменную

let num1 = 5;
let num2 = 7;
//Вариант 1
function changeVariables(): void {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
}
changeVariables();
console.log(num1, num2);

//Вариант 2
/*function changeVariables() {
  [num1, num2] = [num2, num1];
}
changeVariables();
console.log(num1, num2);*/
