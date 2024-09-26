let a = 5; 
const b = inc(a);

function inc(number) {
    number = Math.floor(Math. sqrt((2 * number * number) - 9 * (number + 1) + 20 * number - 1));
    return number;
}

console.dir({a, b});
