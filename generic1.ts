// Generics, Any와 다른 점
function helloString(message: string) {
  return message;
}

function helloNumber(message: number) {
  return message;
}

// 더 많은 반복된 함수들...

function hello(message: any) : any {
  return message;
}

console.log(hello('seyoung').length);
console.log(hello(27));

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('seyoung').length);
console.log(helloGeneric(29));
console.log(helloGeneric(true));

// any : 들어온 input에 대해서 달라지는 타이핑을 할 수 없다.
// generic : T를 이용하면 타입으로 된 연산이 그 함수 내에서 가능하게 된다.