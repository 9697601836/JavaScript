// JS. HW_1
//  1. Создать переменную “item_1”
var item_1
//  2. Присвоить переменной item_1 цифру 5.
item_1 = 5
//  3. Вывести в консоль item_1.
console.log(item_1)
//  4. Создать переменную “item_2”
var item_2
//  5. Присвоить переменной item_2 цифру 3.
item_2 = 3
//  6. Вывести в консоль item_2.
console.log(item_2)
//  7. Создать переменную “item_3”
var item_3
//  8. Присвоить переменной item_3 сложение item_1 и item_2.
item_3 = item_1 + item_2
//  9. Вывести в консоль item_3.
console.log(item_3)
//  10. Создать переменную “item_4”
var item_4
//  11. Присвоить переменной item_4 строку “Yolochka”
item_4 = "Yolochka"
//  12. Вывести в консоль item_4.
console.log(item_4)
//  13. Вывести в консоль сложение item_3 и item_4.
console.log(item_3 + item_4)
//  14. Вывести в консоль умножение item_3 и item_4.
console.log(item_3 * item_4)
//  15. Создать переменную “item_5”
var item_5
//  16. Присвоить переменной item_5 переменную item_3
item_5 = item_3
//  17. Создать переменную item_6.
var item_6
//  18. Создать переменную item_6_type
var item_6_type
//  19. Присвоить переменной item_6 значение 15
item_6 = 15
//  20. Присвоить переменной item_6_type тип переменной item_6
var item_6_type = typeof(item_6)
//  21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type ——  
console.log('item_6 == ' , typeof(item_6), 'item_6_type == ' , typeof(item_6_type))
//  22. Создать переменную item_7 и в ней преобразовать item_6 в String.
var item_7 = String(item_6)
//  23. Создать переменную item_7_type
var item_7_type
//  24. Присвоить переменной item_7_type тип переменной item_7
var item_7_type = typeof(item_7)
//  25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type ——  
console.log('item_7 == ' , typeof(item_7) , 'item_7_type == ' , typeof(item_7_type))
//  26. Создать переменную “age_1” и присвоить ей значение 10
var age_1 = 10
//  27. Создать переменную “age_2” и присвоить ей значение 18
var age_2 = 18
//  28. Создать переменную “age_3” и присвоить ей значение 60
var age_3 = 60
//  29. Создать if в котором будите проверять значение переменной age_1
if (age_1 === 10) {
    console.log(age_1);
} else {
console.log("Invalid parameters entered");
}
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
if (age_1 < age_2) {
    console.log('You don’t have access cause your age is " + age_1 + " It’s less then ') }
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !");
} else {
    console.log("Technical work");
}
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log("Technical work");
}
//  33. Иначе выводите “Technical work”.

// *  Задания с разным количеством звездочек:)
// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = function(age_1, age_2, age_3) {
    if (age_1 < 0) {
        console.log('Invalid parameters entered')
    } else if (age_1 < age_2) {
        console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then ' + age_2)
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome !')
    } else if (age_1 > age_3) {
        console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    }};
    
    checkAge(17,18,61);

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge2 = function(age_1, age_2, age_3) {
    if (typeof (age_1) == 'number' && typeof (age_2) =='number' && typeof (age_3) == 'number'){   
      if (age_1 < 0) {
        console.log('Invalid parameters entered')
        } else if (age_1 < age_2) {
        console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then ' + age_2)
        } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome !')
        } else if (age_1 > age_3) {
        console.log('Keep calm and look Culture channel')
    } else {
    console.log('Technical work”')}}
else {console.log('ERROR')}
}

checkAge2('18','17', 61)

// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалась, преобразовываясь в number.

const checkAge3 = function(age) {
    let age_min = 18;
    let age_max = 61;
    let age_n = Number(age);
    // isNaN преобразует тестируемое значение в число и возвращает false, если оно не NaN;
    // ! преобразует false в true и наоборот.
if (!isNaN(age_n)) {
    if (age_n < 0) {
        console.log('Invalid parameters entered')
    } else if (age_n < age_min) {
    console.log('You don’t have access cause your age is ' + age_n + ' It’s less then ' + age_min);
    } else if (age_n >= age_min && age_n <= age_max) {
    console.log('Welcome !');
    } else if (age_n > age_max) {
    console.log('Keep calm and look Culture channel');
    } else {
    console.log('Technical work');
    }
} else {
console.log('ERROR') }
}

// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке.

const checkAge4 = function(age) {
    let age_min = 18;
    let age_max = 61;
    let age_n = Number(age);
// alert выводит информацию уже на экран, а не в консоль!
if (!isNaN(age_n)) {
    if (age_n < 0) {
        alert('Invalid parameters entered')
    } else if (age_n < age_min) {
    alert('You don’t have access cause your age is ' + age_n + ' It’s less then ' + age_min)
    } else if (age_n >= age_min && age_n <= age_max) {
    alert('Welcome !')
    } else if (age_n > age_max) {
    alert('Keep calm and look Culture channel')
    } else {
    alert('Technical work')
    }
} else {
alert('ERROR') }
}
checkAge4(age = prompt("How old are you?"))
// Cохраняем из задания 4*** отдельно "файл_с_этим_скриптом.js"
// Создаем html файл и вводим в нём «!», нажимаем tab
// После «<title>Document</title>» прописываем «<script src="файл_с_этим_скриптом.js"></script>»
// В адресной строке браузера вводим: file:///путь к файлу/этот_html_файл.html