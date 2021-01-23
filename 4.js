
num1 = input("enter number from 1 to 999")
parseInt(num1, 10)
var num1 = {
    ones: "Audi",
    tens: "A5",
    hundreds: 2015,
    engineIsStarted: false,
    startEngine: function () {
        this.engineIsStarted = true;
        if (ones & tens & hundreds === 9) {
            console.log("нужно ввести целое число от 1 до 999, не более и не менее")

        }
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert("Сначала запустите двигатель!");
        }
    }
};


function NumToObj(num) {
    var arrNumber = num.split('');
    while (arrNumber.length < 3) {
        arrNumber.unshift(0);
    }
    var objNumber = {};
    if (arrNumber.length > 3) {
        return null;
    }
    else {
        objNumber['сотни'] = +arrNumber[0];
        objNumber['десятки'] = +arrNumber[1];
        objNumber['единицы'] = +arrNumber[2];
        return objNumber;
    }
}
var number = prompt("Input number");
var obj = NumToObj(number);
if (obj == null) {
    console.log("Object is null");
}
else {
    //Здесь выводим нужное
}


var arrNumber = inputNumber.split(''); // разбиваем строку на массив
var objNumber = {}; // создаем объект, куда будем все складывать
objNumber['сотни'] = +arrNumber[0]; // задаем ключам ->
objNumber['десятки'] = +arrNumber[1]; // -> свойства из ->
objNumber['единицы'] = +arrNumber[2]; // -> массива
debugger;
if (arrNumber.length == 3) { // если ввели 3 цифры, идем в конец
    return objNumber;
}
else if (arrNumber.length > 3) {
    delete objNumber.сотни;
    delete objNumber.десятки;
    delete objNumber.единицы;
    console.log("Ошибка! Вы ввели недопустимое кол-во символов"); // если ввели больше 3 цифр, то уведомление об ошибке
    return objNumber;
}
else (arrNumber.length < 3)  // если длина массива меньше 3, то -> 
for (var i = 0; i < arrNumber.length; i++) { // -> запускаем цикл на добавление 0 в массив
    arrNumber.unshift(0); // добавляем 0 в начало массива
    if (arrNumber.length == 3) { // если длина равна 3 - выходим из цикла
        break;
    }
}
return objNumber; // 1
// return arrNumber; // 2

console.log(objNumber);
}
numToObj();