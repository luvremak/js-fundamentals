let a = 5; 
const b = inc(a);

function inc(number) {
    number = (2 * number * number) - 10 * number + 1;
    return number;
}

console.dir({a, b});
