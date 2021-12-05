// Generics Basic
function helloBasic<T, U>(message: T, comment: U): T | U {
  return message;
}

helloBasic<string, number>('seyoung', 27); // T를 내가 지정한것
helloBasic(27, 39); // T가 들어간 값에 의해 추론이 되는것
