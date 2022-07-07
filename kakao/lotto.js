/**
 * 로또의 최고 순위와 최저 순위
 */

function solution(lottos, win_nums) {
  const known = lottos.filter(a => a !== 0);
  const unknown = lottos.filter(a => a == 0);
  const matched = known.filter(num => win_nums.includes(num));
  const max = matched.length + unknown.length;
  const min = matched.length;

  function getRank(num) {
    switch(num) {
      case 6 : return 1;
      case 5 : return 2;
      case 4 : return 3;
      case 3 : return 4;
      case 2 : return 5;
      default: return 6;
    }
  }
      
  return [getRank(max), getRank(min)];
}