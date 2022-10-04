// Cохраняем отдельно "этот_скрипт.js"
// Создаем prompt.html и вводим в нём «!», нажимаем tab
// После «<title>Document</title>» прописываем «<script src="этот_скрипт.js"></script>»
// В адресной строке браузера вводим: file:///путь к файлу/prompt.html
const valstring = function(stroka) {
    let symbols = '!#$%^&*()<>?/\|}{~:`;"][№+='
    let space = ' '
    let validstr = true
    // split разбивает string на массив
    // includes проверяет наличие определенного элемента и возвращает true или false соответственно
    // isNaN преобразует тестируемое значение в число и возвращает false, если оно не NaN
    // ! преобразует false в true и наоборот
    for (probel in symbols.split("")) {
        if (stroka.includes(symbols[probel])) {
        space = `${space}"${symbols[probel]}" `
        validstr = false
        }}
        if (typeof(stroka) !== 'string') {
            alert(`${stroka} не явялется строкой, введите строку!`)
        } else if (stroka.length < 5 || stroka.length > 64){
            alert(`${stroka} имеет длину ${stroka.length}, введите от 5 до 64 символов`)
        } else if (!isNaN(stroka)) {
    // toLowerCase позволяет преобразовать строку в нижний регистр, не изменяя значения строки
    // search выполняет поиск первого соответствия, в противном случае (если соответствие не найдено) метод вернёт значение –1
            alert(`${stroka} должна содержать хотя бы одну букву`)
        } else if (stroka.toLowerCase() == stroka) {
            alert(`${stroka} должна содержать хотя бы одну ЗАГЛАВНУЮ букву`)
        } else if (stroka.search(/\d/) == -1) {
            alert(`${stroka} должна содержать хотя бы одну цифру`)
        } else if (!stroka.includes('@')) {
            alert(`В ${stroka} необходимо использовать '@' `)
        } else if (stroka.includes(' ')) {
            alert(`"${stroka}" содержит пробелы, уберите их`)
        } else if (!validstr) {
            alert(`В следующий раз избегайте подобные символы:${space},
            Ваша строка:${stroka} всё равно введена правильно, т.к. в наших требованиях не были перечислены запрещённые символы`)
        } else {
            alert(`Ваша строка:${stroka} введена правильно`)
        }
}
valstring(stroka = prompt("Введите от 5 до 64 символов, у вас должна быть хотя бы одна заглавная буква, хотя бы одна цифра и хотя бы одна @"))

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// Math.pow 
for (i=1;i<=10;i++){
    console.log(Math.pow(2,i))
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function exponentiation(i){
    console.log(Math.pow(2,i))
}
exponentiation(2)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
smile = [];
for (i=0, k = ':)';i<=5;i++, smile.push(k)){
    console.log(smile.join(''))
}
// push добавляет один или более элементов в конец массива и возвращает новую длину массива
// join объединяет все элементы массива (или массивоподобного объекта) в строку

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
function printSmile(stroka, numberOfRows) {
    sumStrok = [];
    if (typeof(stroka) !== 'string'){
        console.log('На вход принимается только строка')
    } else if (typeof(stroka == 'string')){
    for (i=0; i<=numberOfRows;i++, sumStrok.push(stroka)){
        console.log(sumStrok.join(''))
    }
}}
printSmile(':)',4)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'
function getWordStructure(word) {
    var countV = 0; countC = 0;
    var countVowels = 'AaEeIiOoUuYy'
    var countСonsonants = 'BbcCdDfFgGhHjJkKlLmMnNpPqQrRsStTvVwWxXyYzZ'
    for (i=0;i<=word.length;i++){
        if(countСonsonants.includes(word[i])){
            countV += 1
        } else if (countVowels.includes(word[i])){
            countC += 1
        }
    }
    console.log('Слово :', word, "Состоит из", countV, 'согласных'+ " "+ 'и' + " " + 'из', countC, 'гласных')
}
getWordStructure('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'
function isPalindrom(word){
    if (word.toLowerCase() == word.toLowerCase().split('').reverse().join('')){
        console.log('Слово является палиндромом')
    }else {
        console.log('Слово не является палиндромом')
    }
}
isPalindrom('Abba')
// reverse меняет порядок следования элементов в массиве на обратный и возвращает переупорядоченный массив
