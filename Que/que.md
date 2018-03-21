# 큐 
* 큐는 리스트의 일종으로 끝부분으로 데이터가 삽입되고 앞부분에서 데이터가 삭제되는 자료구조다 

### 큐 vs 스택
* 스택은 가장 나중에 들어간 데이터가 가장 먼저 처리, 큐는 가장 나중에 들어간 데이터가 가장 늦게 처리 됨
> 은행에서 대기표받아 대기하는 고객을 큐에 비유할 수 있음 

  큐는 선입 선출(FIFO)의 자료구조이다 운영 체제의 프로세스 처리순서, 은행 고객등의 시뮬레이션 어플리케이션에서 큐를 사용한다 

## 큐 동작 
* 인큐(enqueue) - 큐에 요소를 삽입하는 동작 
* 데큐(dequeue) - 큐에 요소를 삭제하는 동작

인큐는 큐에 끝부분에 요소를 추가하며 데큐는 큐의 앞부분에서 요소를 삭제한다. 

## 배열 기반의 큐클래스 
```javascript
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
// enqueue()
function enqueue(elem) {
    this.dataStore.push(elem);
}
// dequeue()
function dequeue(){
    this.dataStore.shift();
}
// front() --> 큐의 앞부분 요소 확인
function front() {
    return this.dataStore[0];
}
// back() --> 큐의 끝부분 저장 요소 확인
function back() {
    return this.dataStore[this.dataStore.length-1];
}
// 큐의 모든 요소 출력 
function toString() {
    var str = '';
    for(var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i]
    }
    return str;
}
// 큐가 비었는지 확인
function empty() {
    if(this.dataStore.length === 0) {
        return true
    } else {
        return false
    }
}
```