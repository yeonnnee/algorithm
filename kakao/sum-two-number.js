/**
 * 두개 뽑아서 더하기
 */

function solution(numbers) {
  const results = [];
  
  numbers.forEach(num => {
    numbers.forEach((a, i) => {
      const idx = numbers.indexOf(num);
      if(numbers.length - (i+1) === idx ) return;
      results.push([num, numbers[ numbers.length - (i+1) ]]);
    })
    return results; 
  });
  
  const sum = results.map(a => a[0] + a[1]);
  return [...new Set(sum)].sort((a,b) => a - b);
}