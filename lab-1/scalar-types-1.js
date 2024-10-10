let a = 5;
const b = inc(typeof a === 'number' ? undefined : a);

function inc(n = a) { 
    return 2 * n - 1; 
}

console.dir({ a, b });
