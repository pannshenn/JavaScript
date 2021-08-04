// The Remaining Day, Hr, Min, Sec from Now to a Certain Date

function countDown(time) {
    const nowTime = +new Date();
    const inputTime = +new Date(time) // end time
    const dTime = (inputTime - nowTime)/1000; // remaining second
    let d = parseInt(dTime / 60 / 60 / 24);
    let h = parseInt(dTime / 60 / 60 % 24);
    let m = parseInt(dTime / 60 % 60); // if total 4000 sec，then we have 4000 / 60 = 66.66 min，which is 1 h 6 min，so for min we do 66.66 % 60 = 6
    let s = parseInt(dTime % 60);
    d = d < 10? '0' + d : d;
    h = h < 10? '0' + h : h; 
    m = m < 10? '0' + m : m;
    s = s < 10? '0' + s : s;
    return `${d} Day ${h} Hour ${m} Minute ${s} Second`;
}

console.log(countDown('2021-7-8 08:00:00'));