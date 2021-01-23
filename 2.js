1.var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2 + ++a); alert(c);      // 5
d = (2 + b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

//Потому что префиксная и постфиксная форма записи выводят разные значения

2. var x = 5

3.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

var a = getRandomIntInclusive(1, 500);
var b = getRandomIntInclusive(-500, 1500);

if (a > 0 && b > 0)
    alert(a - b);
else if (a < 0 && b < 0) {
    alert(a * b);
}

