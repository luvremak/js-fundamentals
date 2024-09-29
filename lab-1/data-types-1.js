let arr = [true, 'hello', 5, 12, -200, false, false, 'word', 7, 9, false,'true', false, true, -11, 'string', 'text', 'word', 17, true,'seven'];
let obj = {
    number: 0,
    string: 0,
    boolean: 0,
}
function inc() {
    for (let value of arr) {
        if (typeof value === 'number') {
            obj['number']++;
        }
        if (typeof value === 'string') {
            obj['string']++;
        }
        if (typeof value === 'boolean') {
            obj['boolean']++;
        }
    }
}
inc();
console.log(obj);

