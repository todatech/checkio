const log = console.log;

function comp(array1, array2) {

    if (!array1 || !array2) return false;

    const arr1 = array1.slice();
    const arr2 = array2.slice()

    for (let i = 0; i < arr2.length; i++) {
        let element = Math.sqrt(arr2[i]);
        let idx = arr1.findIndex(v => v === element);
        if (~idx) {
            arr2.splice(i, 1);
            arr1.splice(idx, 1);
            i--;
        } else {
            return false;
        }
    }

    return (arr1.length === 0 && arr2.length === 0) 
}


let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
log(comp(a1, a2), true);