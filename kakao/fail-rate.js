/**
 * 실패율
 */


function solution(N, stages) {  
  const arr = Array.from({length: N}, (x,i)=> i+1);
  const result = arr.map(a => {
    const notClearYet = stages.filter(stage => stage === a).length;
    const clearUser = stages.filter(stage => stage > a).length;
    
    return {
      stage: a,
      rate: notClearYet / clearUser
    }
  }).sort((a,b) => b.rate - a.rate).map(a => a.stage);
  
  
  return result;
}