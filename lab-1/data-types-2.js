let arr = [true, 'hello', 5, 12, -200, false, false, 'word', 7, 9, false,'true', false, true, -11, 'string', 'text', 'word', 17, true,'seven'];
let obj = {};

function inc() {
    for (let value of arr) {
        if (typeof value === 'number') {
            if (!obj['number']) {
                obj['number'] = 0;
            }
            obj['number'] += 1;
        }
        if (typeof value === 'string') {
            if (!obj['string']){
            obj['string'] = 0;
        }
            obj['string'] += 1;
        }
        if (typeof value === 'boolean') {
            if (!obj['boolean']){
            obj['boolean'] = 0;
        }
            obj['boolean'] += 1;
        }
    }
}
inc();
console.log(obj);
