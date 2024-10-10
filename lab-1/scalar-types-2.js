const obj = { n: 5 };

function inc(object) {
    obj.n = typeof obj.n === 'number' ? 2 * obj.n - 1 : NaN;
}

inc(obj);
console.dir(obj);
