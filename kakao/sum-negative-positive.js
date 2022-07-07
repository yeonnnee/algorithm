/**
 * 음양 더하기
 */


function solution(absolutes, signs) {
  const num = absolutes.map((a,i) => signs[i] ? a : -a);
  let sum = 0;
  
  for(let i = 0; i<num.length; i++) {
    sum = sum + num[i];
  }
  
  return sum;
}