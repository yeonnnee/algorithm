/**
 *  x만큼 간격이 있는 n개의 숫자
 */


function solution(x, n) {
  const answer = [];
  for(let i = 0; i<n; i++) {
    const lastNum = answer.length > 0 ? answer[answer.length-1] : 0;
    answer.push(lastNum + x);
  }

  return answer;
}