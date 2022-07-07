/**
 * 완주하지 못한 선수
 */

function solution(participant, completion) {
  const sortedP = participant.sort();
  const sortedC = completion.sort();

  return sortedP.filter((p,i) => sortedP[i] !== sortedC[i])[0]; 
}