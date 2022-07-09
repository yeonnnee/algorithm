/**
 * 자연수 뒤집어 배열로 만들기
 */


// 답안 1)
function solution(n) {
  return [...n.toString()].reverse().map(x => +x);
}


//답안 2) 
function solution(n) {
  const numArr = n.toString().split('');
  return numArr.map((x, i) => +numArr[numArr.length - 1 - i]);
}