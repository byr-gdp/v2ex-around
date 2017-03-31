import fetch from 'node-fetch';
import saveMd from './utils/saveMd';
import clientConfig from './config/clientConfig';

// 存储接口返回数据，用于最后生成 Markdown
let items = [];

const perPage = 100;
const clientId = clientConfig.clientId;
const clientSecret = clientConfig.clientSecret;

const beginFetchData = (initPage) => {
  let page = initPage;
  let items = [];

  return new Promise((resolve, reject) => {
    const fetchPageData = (pageNo) => {
      const url = `https://api.github.com/search/repositories?q=v2ex&per_page=${perPage}&page=${pageNo}&client_id=${clientId}&client_secret=${clientSecret}`;
      console.log(`正在抓取第${pageNo}页数据......`);

      fetch(url)
        .then(res => res.json())
        .then(json => {
          console.log(`当前获取到${json.items.length}项结果\n`);
          if (json.items.length > 0) {
            items = items.concat(json.items);
            fetchPageData(++page);
          } else {
            console.log('抓取数据完毕');
            resolve(items);
          }
        })
        .catch(err => {
          reject(err);
        });
    }
    fetchPageData(page);
  });
}

beginFetchData(1).then((items) => {
  saveMd(items);
}).catch((err) => {
  console.log(err);
});
