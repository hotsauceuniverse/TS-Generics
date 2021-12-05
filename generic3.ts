// Generics Array & Tuple
function helloArray<T>(message: T[]): T {
  return message[0]
}

helloArray(['hello', 'world']); // string
helloArray(['hello', 1]); // string | number

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(['hello', 'world']); // string
helloTuple(['hello', 1]); // string