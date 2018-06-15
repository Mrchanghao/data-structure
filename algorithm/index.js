// 로또 함수 구현 
function lotto(min, max, num) {
    var Arr = [];
    for(var i = 0; i < num; i++) {
        var random = Math.random() * (max - min) + min;
        while(Arr.indexOf(Math.round(random)) > -1 ) {
            random = Math.random() * (max - min) + min;
        }
        Arr[i] = Math.round(random);
    }
    return Arr.sort((a, b) => {
        return a - b
    });
}

console.log(lotto(1, 45, 6))