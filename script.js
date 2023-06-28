// Задача 1:
const number = +prompt("Введите число:");
const tenProcent = number * 0.1;
console.log(`10% от введеного числа: ${tenProcent}`);

// Задача 2:
const number1 = +prompt("Введите первое число:");
const number2 = +prompt("Введите второе число:");
const minNumber = Math.min(number1, number2);
console.log(`Найменьшее число: ${minNumber}`);

// Задача 3: Вивести одне з повідомлень
const number = +prompt("Введите число:");
if (number < 100) {
  console.log("Число меньше 100");
} else if (number > 100) {
  console.log("Число больше 100");
} else {
  console.log("Число равно 100");
}

// Задача 4:
const name = prompt("Введите Ваше имя:");
const age = +prompt("Введите Ваш возраст:");
if (age >= 18) {
  console.log(`Hello, ${name}`);
} else {
  console.log(`Hi, ${name}`);
}