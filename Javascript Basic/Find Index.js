// Find Target's Index in an Array / String

// function findAllIndex(arr, target) {
//     let index = arr.indexOf(target);
//     let indexArr = [];
//     while(index !== -1) {
//         indexArr.push(index);
//         index = arr.indexOf(target, index + 1);
//     }
//     return indexArr; 
// }

// const ans = findAllIndex([1, 2, 3, 5, 3, 5, 3], 3);
// console.log(ans);

function findAllIndex(str, target) {
    let index = str.indexOf(target);
    let indexStr = [];
    while(index !== -1) {
        indexStr.push(index);
        // console.log(index);
        index = str.indexOf(target, index + 1);
    }
    return indexStr; 
}

const ans = findAllIndex('abcabcabc', 'a');
console.log(ans);