// 로또 함수 구현 
function lotto(min, max, num) {
    var Arr = [];
    for(var i = 0; i < num; i++) {
        var randnum = Math.random() * (max - min) + min;
        while(Arr.indexOf(Math.round(randnum)) > -1 ) {
            randnum = Math.random() * (max - min) + min;
        }
        Arr[i] = Math.round(randnum);
    }
    return Arr;
}