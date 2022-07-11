/**
 * 오픈채팅방
*/



function solution(record) {
  const changeUId = new Map();
  const result = [];
  
  record.forEach((x,i)=> {
    const status = x.split(' ')[0];
    const uid = x.split(' ')[1];
    const name = x.split(' ')[2];

    // 다른 답안을 보니 위의 코드는 다음과 같이 보완할 수  있다.
    // const [status, uid, name] = x.split(' ');

    if(!status.startsWith('L')) {
      changeUId.set(uid, name);
    }
  });

  record.forEach((x, i) =>{
    if(!x.startsWith('C')) {
      const status = x.replace('Enter','들어왔습니다.').replace('Leave', '나갔습니다.').split(' ')[0];
      const uid = x.split(' ')[1];
      result.push(`${changeUId.get(uid)}님이 ${status}`);
    }
  });

  return result;

}



