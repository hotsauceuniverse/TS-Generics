// Generics Class
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name
    this._age = age
  }
}

new Person('seyoung',27);
// new Person<string>(27);
// new Person<string, number>('seyoung', 'age');
