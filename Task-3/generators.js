


var result = [0]
function* fibonacci_1(n) {

  var F = [0, 1];
  for (var i = 2; i <= n; i++) {
      F[i] = F[i - 1] + F[i - 2];
      yield F[i];
      result.push(F[i])
  } 
}

var fibResult = fibonacci_1(10);
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


function* fibonacci_2(n) {

  var F = [0, 1];
  var i =2
  do {
      F[i] = F[i - 1] + F[i - 2];
      yield F[i];
      i++
      // console.log(F[i]);
      // result.push(F[i])
  } while (F[i-1]<n)
}

var fibResult2 = fibonacci_2(55);
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());
console.log(fibResult2.next());