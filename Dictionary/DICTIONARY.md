# 딕셔너리
* 데이터를 키와 값으로 저장하는 자료구조다. 
* 자바스크립트 Object 클래스는 딕셔너리 형식으로 동작하게 설계되었다. 
--- 
## 딕셔너리 클래스 
내부적으로 Object가 아니라 Array를 이용한다
```javascript
function Dic() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
// add 함수를 정의 
function add(key, value) {
    this.dataStore[key] = value;
}
// find 함수 정의
function find(key) {
    return this.dataStore[key];
}
// remove 함수 정의 
function remove(key) {
    delete this.dataStore[key];
}
// showAll 모든 키와 값을 보여주는 함수
function showAll() {
    for(var key in Obejct.keys(this.dataStore)) {
        console.log(key + '--> ' + this.dataStore[key])
    }
}
```
## 딕셔너리에 정렬 기능 추가
키를 이용해 값을 얻는 것이 딕셔너리의 핵심기능이라 할 수 있다. 저장된 항목의 순서는 중요하지 않지만 
딕셔너리의 항목을 정렬된 순서로 확인해야 할 때가 있으므로 정렬 기능을 사용 할 수 있어여야 한다

```javascript
// showAll 함수에 sort() 추가 
function showAll() {
    for(var key in Object.keys(this.dataStore).sort()){
        console.log(key + ' --> ' + this.dataStore[key])
    }
}
```