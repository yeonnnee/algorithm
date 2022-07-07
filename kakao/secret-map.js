/**
 * 비밀지도
 */

function solution(n, arr1, arr2) {
  const combine = arr1.map((a,i)=> a|arr2[i]);
  return combine.map(a => a.toString(2).padStart(n, '0').replace(/1/gi, '#').replace(/0/gi, ' '));
}