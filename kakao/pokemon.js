/**
 * 포켓몬
 */

function solution(nums) {
  const max = nums.length / 2;
  const removeDup = Array.from(new Set(nums)).length;
  
  return max >= removeDup ? removeDup : max;
}