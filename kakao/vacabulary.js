/**
 * 숫자 문자열과 영단어
 */

function solution(s) {
  const result = s.replace(/one/gi, '1')
                  .replace(/two/gi, '2')
                  .replace(/three/gi, '3')
                  .replace(/four/gi, '4')
                  .replace(/five/gi, '5')
                  .replace(/six/gi, '6')
                  .replace(/seven/gi, '7')
                  .replace(/eight/gi, '8')
                  .replace(/nine/gi, '9')
                  .replace(/zero/gi, '0');
  return +result;
}