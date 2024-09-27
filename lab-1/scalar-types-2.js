const obj = { n: 5 };

function inc(object) {
    for (const key in object) {
        object[key] = Math.floor(Math. sqrt((5 * object[key] * object[key]) - 10 * (object[key] - 2) - 1));
    }
}

inc(obj);
console.dir(obj);
