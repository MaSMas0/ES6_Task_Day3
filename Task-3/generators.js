


var result = [0]
function* fibonacci(n) {

  var F = [0, 1];
  for (var i = 2; i <= n; i++) {
      F[i] = F[i - 1] + F[i - 2];
      yield F[i];
      result.push(F[i])
  } 
}

var fibResult = fibonacci(10);
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());
console.log(fibResult.next());

console.log(`the result of fibonacci = ${result}`)