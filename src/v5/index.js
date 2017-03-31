import fetch from 'node-fetch';
import saveMd from './utils/saveMd';
import clientConfig from './config/clientConfig';

// 存储接口返回数据，用于最后生成 Markdown
let items = [];

const perPage = 100;
const clientId = clientConfig.clientId;
const clientSecret = clientConfig.clientSecret;

const fetchData = (pageNo) => {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/search/repositories?q=v2ex&per_page=${perPage}&page=${pageNo}&client_id=${clientId}&client_secret=${clientSecret}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(`第${pageNo}页：当前获取到${json.items.length}项结果`);
        if (json.items.length > 0) {
          items = items.concat(json.items);
        } else {
          console.log('抓取数据完毕');
        }
        resolve(json.items);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// 使用 Promise.all
let promises = [];
let promiseNum = 6;

for (let i = 1; i <= promiseNum; i++) {
  promises.push(fetchData(i));
}

Promise.all(promises).then((items) => {
  const result = items.reduce((prev, cur) => {
    return prev.cocnat(cur);
  }, []);
  saveMd(result);
});
