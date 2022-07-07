/**
 * 가운데 글자 가져오기
 */


function solution(s) {
  return s.length % 2 === 0 ? s[s.length/2 - 1] + s[s.length/2] : s[Math.round(s.length/2) -1];
}