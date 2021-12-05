// Generics with extends
class PersonExtends<T extends string | number> { // T는 string과 number만 가능
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('seyoung');
new PersonExtends(27);
new PersonExtends(true); // boolean형식의 인수는 string | number 형식의 매개 변수에 할당될 수 없습니다.

// type은 항상 작은 범위로 제한을 해주는 것이 좋다.

