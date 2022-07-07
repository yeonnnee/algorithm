/**
 * 
 * 내적
 * 
 */

function solution(a, b) {    
  const mutifly = a.map((num, i) => num*b[i]);
  return mutifly.reduce((acc, curr)=> acc + curr, 0);
}