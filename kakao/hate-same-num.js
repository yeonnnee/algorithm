/**
 * 같은 숫자는 싫어
 */

function solution(arr) {
  const filteredArr= [];
   
  arr.forEach((a,i) => {
    if(i === 0 || filteredArr[filteredArr.length -1] !== a) filteredArr.push(a);
  });
  
  return filteredArr;
}



//  더 나은 방법으로 보이는 답안 발견

function solution(arr) {
  return arr.filter((val,index) => val != arr[index+1]);
}