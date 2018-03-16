/*
리스트 관련 정리 
-> 저장할 데이터가 많지 않을 때 리스트를 유용하게 사용 
단, 복잡한 정렬을 원할 때는 리스트는 별로 도움이 되지 않는다 
*/ 

// 리스트 ADT(추상적 데이터형)
//  리스트는 순서가 있는 일련의 데이터 집합 이며 저장된 각 데이터 항목을 요소라 부른다 
// 리스트에 저장된 요소의 수를 리스트 length라고 하고 요소를 끝에 append(추가) 하거나 앞 부분에 
// insert 할수 있다 

// 리스트 객체
function List() {
    this.listSize = 0;
    this.pos = 0; // 프로퍼티의 현재위치 
    this.dataStore = []; // 리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
     this.front = front // 현재 위치를 리스트 첫번째 요소로 설정 
    this.end = end // 현재 위치를 리스트 마지막 요소로 설정 
    this.prev = prev // 현재 위치를 한 요소 뒤로 이동 
    this.next = next // 현재 위치를 한 요소 앞으로 이동
    this.currPos = currPos // 현재 위치를 return 
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length
    this.contains = contains;
}
// append 함수 구현
// 리스트 다음 가용 위치(=listSize 변수의 값)에 새 요소를 추가
function append(elem) {
    this.dataStore[this.listSize++] = elem;
}

// remove 함수 구현 
// 우선 find 헬퍼 함수 구현 
function find(elem) {
    for(var i = 0; i < this.dataStore.length; ++i) {
        if(this.dataStore[i] == elem) {
            return i
        } else {
            return -1;
        }
    }
}

// splice method  활용 
function remove(elem) {
    var found = this.find(elem);
    if(found > -1) {
        this.dataStore.splice(found, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// length 함수 
function length() {
    return this.listSize;
}

// toString: 리스트의  요소 확인 
function toString() {
    return this.dataStore;
}

// contains : 리스트에 특정값이 있는지 확인 
function contains(elem) {
    for(var i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == elem) {
            return true;
        }
    }
    return false;
}
// clear 함수
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

//insert 함수
function insert(ele, after) {
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, elem);
        ++this.listSize;
        return true
    }
    return false;
}

// list 탐색 
function front() {
    this.pos = 0; 
}

function end() {
    this.pos = this.listSize - 1
}

function prev() {
    if(this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if(this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos]
}

var names = new List();
names.append('a');
names.append('b');
names.append('c');
names.append('d');
names.append('e');
// console.log(names);
names.remove('c');
// console.log(names.toString());
// names.front() // a
names.next(); // b  --> 한칸 뒤로 이동
// console.log(names.getElement());
// names.next();
// names.prev();
// console.log(names.getElement());


// 리스트 반복
for(names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
    if(names.legnth > 100) {
        break;
    }
    
}
