/**
 * 오픈채팅방
*/



function solution(record) {
  let recordMessages = [];
  const statusArr = [];
  const uidArr = [];

  record.forEach((x,i)=> {
    const status = x.split(' ')[0];
    const uid = x.split(' ')[1];
    const name = x.split(' ')[2];
  
    if(recordMessages.length === 0) {
      recordMessages.push(x);
    } else {
      const idx = uidArr.indexOf(uid);
      
      if(idx >= 0) {
        if(status.startsWith('C')) {
          recordMessages[idx] = `${statusArr[idx]} ${uid} ${name}`;
        } else {
          recordMessages.push(x);
          recordMessages.forEach((x, i) => {
            if(x.split(' ')[1] === uid) {
              recordMessages[i] = `${x.split(' ')[0]} ${uid} ${name}`
            }
          })
        }
      } else {
        recordMessages.push(x);
      }
    }

    statusArr.push(status);
    uidArr.push(uid);
  });


  return  recordMessages.map(x => {
    const str = x.replace('Enter','들어왔습니다.').replace('Leave', '나갔습니다.').split(' ');
    return `${str[2]}님이 ${str[0]}`;
  });
}