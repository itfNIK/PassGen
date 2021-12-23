let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// В алфавитах нет буквы О и буквы L
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

document.getElementById('length').oninput = function () {
    // функция длины ползунка (длина массива пароля)
    document.getElementById('pass-length').innerHTML = this.value;
}

document.getElementById('generator').onclick = generator;

function generator(event) {
    let result = [];
    let passlength = document.getElementById('length').value; //длина пароля

    if (document.getElementById('digits').checked) {     //включение/выключение чисел
        result = result.concat(digits);
    }
    if (document.getElementById('lowercase').checked) { //включение/выключение строчных букв
        result = result.concat(lowercase);
    }
    if (document.getElementById('uppercase').checked) { //включение/выключение заглавных букв
        result = result.concat(uppercase);
    }
    if (document.getElementById('symbols').checked) { //включение/выключение символов
        result = result.concat(symbols);
    }

    result.sort(compareRandom);
    // console.log(result);
    document.getElementById('out').innerHTML = '';
    for (let k = 0; k < 6; k++){
        let out = ''; //сюда будет выводится сгенерированный пароль
        for (let i = 0; i < passlength; i++){ //цикл по длине пароля
            out += result[randomInteger(0, result.length - 1)];
        }
        document.getElementById('out').innerHTML += '<p>' + out + '</p>';
    }
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}