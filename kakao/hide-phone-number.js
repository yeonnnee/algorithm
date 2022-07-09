/**
 * 핸드폰 번호 가리기
 */


function solution(phone_number) {
  return phone_number.substring(phone_number.length -4, phone_number.length).padStart(phone_number.length, '*');
}



// 다른 사람의 풀이
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}


function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + s.slice(-4);
}