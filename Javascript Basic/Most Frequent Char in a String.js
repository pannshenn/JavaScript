// Find the Most Frequent Char and How Many Times It Appears

function mostFrequent(str) {
    let count = {};
    for(let i = 0; i < str.length; i++) {
        if(count[str.charAt(i)]){
            count[str.charAt(i)]++;
        } else {
            count[str.charAt(i)] = 1;
        }
    }
    let max = 0;
    let value;
    for(let key in count) {
        if(count[key] > max){
            max = count[key];
            value = key;
        }
    }
    return `${value} appears ${max} times`
}

const str = 'abcoefoxyozzopp';
const ans = mostFrequent(str);
console.log(ans);