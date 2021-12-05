// keyof & type lookup system (타이핑이 안전해진다.)
interface IPerson {
  name: string;
  age: number;
};

const person: IPerson = {
  name: 'seyoung',
  age: 27,
};

// keyof : 타입 앞에 붙여서 새로운 타입을 만들어 낸다. 
// 어떤 개체에 keyof를 붙이면 그 결과물이 타입으로 나오는데 그 타입은 키의 이름으로 된 문자열의 유니온 타입으로 만들어진다.

// type Keys = keyof IPerson;
// const keys: Keys = 'name';


// IPerson[keyof IPerson] 
// => IPerson['name' | 'age'] 
// => IPerson['name'] | IPerson['age']
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, 'name'); 
// function getProp<IPerson, "name">(obj: IPerson, key: "name"): string
getProp(person, 'age'); 
// function getProp<IPerson, "age">(obj: IPerson, key: "age"): number


function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person,'name','Anna'); 
// function setProp<IPerson, "name">(obj: IPerson, key: "name", value: string): void
