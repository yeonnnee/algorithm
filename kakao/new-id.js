/**
 * 신규 아이디 추천
 */
function solution(new_id) {
  var answer = '';
  const id = new_id ? new_id : 'a';

  const trimLetter =  id.toLowerCase()
                        .replace(/[^/0-9a-z-_.]/gi, '')
                        .replace(/[/.]+/gi, '.')
                        .replace(/^\./, '')
                        .substring(0, 15)
                        .replace(/\.$/, '');
                                     

  if(trimLetter.length < 3) {
    const lastLetter = trimLetter.charAt(trimLetter.length-1);
    answer = trimLetter.padEnd(3, lastLetter || 'a');
  } else {
    answer = trimLetter;
  }
  
  return answer;
}