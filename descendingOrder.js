// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

let num = 12345678;

function descendingOrder(n) {
  return (
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('') * 1
  );
}

console.log(descendingOrder(num));

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }

// function descendingOrder(n){
//   return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
// }

// function descendingOrder(n){
//   return parseInt(n.toString().split('').sort().reverse().join(''), 10);
// }
