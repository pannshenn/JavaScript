// Removing Duplicate Elements from Arrays

function unique(arr) {
    let newArr = [];
    for (let i = 0; arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const ans = unique(['a', 'b', 'c' ,'a']);
console.log(ans);