/**
 * 없는 숫자 더하기
 */

function solution(numbers) {
  const numArr= Array.from({length: 10}, (x,i)=> i).filter(num => !numbers.includes(num));
  const sum = numArr.reduce((acc, curr) => acc + curr, 0);

  return sum;
}