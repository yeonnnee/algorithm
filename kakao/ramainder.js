/**
 * 나머지가 1이 되는 수 찾기
 */

function solution(n) {
  const num = [];
  for(let i = 2; i < n; i++ ) {
    if(n % i === 1) {
      num.push(i);
    }
  }
  return num[0];
}