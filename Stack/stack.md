# stack 

## 스택의 정의 
* 스택은 가장 윗부분에서만 자료의 축와 삭제가 일어나므로 실행 속도가 빠르고 구현이 쉬운 자료구조이다. 

### 스택 동작 방식
스택은 요소 리스트로 구성되며 탑이라 불리는 리스트의 한쪽 끝으로만 요소에 접근 할 수 있다 

스택의 특징은 바로 후입선출(LIFO) 자료 구조이다 
밑바닥에 있는 요소에 접근 하려면 모든 요소를 제거 하는 수밖에 없다 .

스택에서는 push method(요소 추가), pop method(요소 제거) 로 작동 한다. 

### 스택구현 
```javascript
// stack class 생성자 함수 정의
function Stack() {
    this.dataStore = []; // 요소 저장하는 배열
    this.top = 0; // 스택의 탑 정보
    this.push = push; // 
    this.pop = pop;
    this.peek = peek; // 요소 확인
}
// push 함수 정의 
function push(elem) {
    this.dataStore[this.top++] = elem
}
// pop 함수 정의 
function pop() {
   return this.dataStore[--this.top];
}
//peek 함수 정의 
function peek(){
    return this.dataStore[this.top-1]
}
// length 함수 
function length() {
    return this.top;
    // top값으로 데이터 저장소 사이즈 측정
}
function clear() {
    return this.top = 0;
}
```
