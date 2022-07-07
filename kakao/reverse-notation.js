/**
 * 
 * 3진법 뒤집기
 * 
 */

function solution(n) {
  const convertN = n.toString(3);
  const reverseN = [...convertN].reverse().join('');
  
  return parseInt(reverseN, 3);
}