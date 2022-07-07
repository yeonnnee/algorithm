/**
 * 약수의 개수와 덧셈
 */

function solution(left, right) {
  const num = Array.from({length: right - left + 1}, (x,i)=> left + i);

  const divisorCount = num.map(a => {
    let result = [];
    for(let i = 1; i <= a; i++) {
      if (a % i === 0) {
        result.push(i);
      }
    }
    return result.length;
  });

  const result = num.reduce((acc, curr, index) => {
    let current = 0;
    if(divisorCount[index] % 2 === 0) {
      current = curr * 1;
    } else {
      current = curr * (-1)
    }
    return acc + current;
  }, 0);
   
  return result;
}