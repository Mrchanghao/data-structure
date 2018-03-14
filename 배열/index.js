function print(val) {
    console.log(val)
}

// 배열 만들기 
/*var arr = [];
print(arr);

var num = [1, 2, 4];
print(num.length);

//  Array생성자 
var numbers = new Array(1, 2, 4, 5);
print(numbers.length);  // 4;
// 더글라스 크록포드는 생성자보다 []를 이용한 배열 생성을 추천 !!!
*/
// 배열 요소 접근하고 update
var updateBefore = [];
for(var i = 0; i < 44; i++) {
    updateBefore[i] = i + 1;
}

var numbers = [1, 2, 3, 4, 5];
var sum = 0
for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
};
print(sum);

//문자열로 배열 만들기 
// split method 이용
var sentence1 = 'hello world';
var words1 = sentence1.split(' '); // -->공백문자 
print(words1);

for(var i = 0; i < words1.length; i++) {
    print('word' + i + ':  ' + words1[i] );
}
// word0: hello 
// word1: world

// 얕은 복사 깊은 복사 
/*
var beforeCopy = [];
for(var i = 0; i <  100; i++) {
    beforeCopy[i] = i + 1;
};
var afterCopy = beforeCopy;
if(beforeCopy === afterCopy) {
    console.log('same')
} else {
    console.log('not same')
};
beforeCopy[0] = 400;
console.log(afterCopy[0]); //-->내 예상은 1 하지만 400이 나옴
*/
// 새로 할당된 배열은 단순히 원래 배열의 요소를 가리킬 뿐이므로 원래 배열의 요소가 변하면 
// 변한 요소를 그대로 가리킨다 -->
// 즉, 정리하면 다른 배열로 할당 할땐 실제로는 할당된 배열의 레퍼런스를 할당한다 따라서 
// 원래 배열을 바꾸면 할당된 배열도 바뀌게 된다 

// 깊은 복사 함수 
function copy(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
    }
};

var beforeCopy = [];
for(var i = 0; i <  100; i++) {
    beforeCopy[i] = i + 1;
};
var afterCopy = [];
copy(beforeCopy, afterCopy);
beforeCopy[0] = 400;
print(afterCopy[0]); // --> 깊은 복사가 일어나서 원래 값 1로 출력됨


// 접근자 함수 
// 1. indexOf() --> 파라미터가 배열에 존재하는지 확인하는 함수 
// 존재하면 인덱스 위치를 리턴하고 없으면 -1을 리턴

var names = ['이창호', '유희열', '김시민', '문재인', '김시민'];
var position = names.indexOf('김시민');
var position2 = names.indexOf('노무현')
print(position); // 2; 
print(position2); // -1;

//배열을 문자열으로 표현하기 
/*
var namesStr = names.join();
console.log(namesStr);
var namesString = namesStr.toString();
print(namesString);
*/

// 기존 배열 이용해 새 배열 만들기 
var gamer = ['one', 'two', 'three', 'four'];
var gamer2 = ['five', 'six', 'seven'];
var sumGamer = gamer.concat(gamer2);
console.log(sumGamer); //[ 'one', 'two', 'three', 'four', 'five', 'six', 'seven' ]
var dmp = sumGamer.splice(3, 3); // 3 + 1번째 요소부터 3개 요소로 새 배열을 만든다; 
console.log(dmp); // [ 'four', 'five', 'six' ]

// sort method --> 문자열은 정리해 주지만 숫자는 그냥 1로 시작하는 것 부터 정리 
// --> help함수를 이용하여 정렬
function compare(num1, num2) {
    return num1 - num2;
}

var nums = [1, 34, 2, 200, 100, 45, 1000];

console.log(nums.sort(compare)); // [ 1, 2, 34, 45, 100, 200, 1000 ]
// 이 부분은 잘 이해가 안간다....ㅠㅠ 

// forEach ...

nums.forEach(function(num){
    console.log(num, ':' , num * num);
})
/*
1 ':' 1
2 ':' 4
34 ':' 1156
45 ':' 2025
100 ':' 10000
200 ':' 40000
1000 ':' 1000000
*/

// every --> 배열의 모든 요소가 참이면 true를 return 
// 콜백 정의 
function isOdd(num) {
    return num % 2 == !0;
}

var odd = nums.every(isOdd);
console.log(odd); // --> false;
// some --> 한 요소라도 참이면 true 를 return 

// reduce 
var sumArr = [1, 2, 3, 4, 5];
var sumTotal = sumArr.reduce(function(accumulator, currentValue){
    return accumulator += currentValue;
})
console.log(sumTotal);  // 15
// 함수 진행 순서 --> 초기값 : 1 과 다음 인자 : 2 => 3;
// -> 3 + 다음인자: 3 => 6;
// 6 + 다음인자: 4 => 10;
// 10 + 다음인자: 5 => 15;  ---> 15를 리턴