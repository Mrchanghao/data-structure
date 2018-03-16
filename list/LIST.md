# 리스트 관련 정리 
----

* 저장할 데이터가 많지 않을 때 리스트를 유용하게 사용 
단, 복잡한 정렬을 원할 때는 리스트는 별로 도움이 되지 않는다 

## 리스트 ADT(추상적 데이터형)
* 리스트는 순서가 있는 일련의 데이터 집합 이며 저장된 각 데이터 항목을 요소라 부른다 
리스트에 저장된 요소의 수를 리스트 length라고 하고 요소를 끝에 append(추가) 하거나 앞 부분에 insert 할수 있다. remove동작을 이용해 요소를 삭제할 수 있고 clear동작으로 리스트의 모든 요소를 삭제할 수도 있음

### 리스트 클래스 구현 
```javascript
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
    this.length = length;
    this.contains = contains;
}
```
