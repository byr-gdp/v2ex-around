'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _saveMd = require('./utils/saveMd');

var _saveMd2 = _interopRequireDefault(_saveMd);

var _clientConfig = require('./config/clientConfig');

var _clientConfig2 = _interopRequireDefault(_clientConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 存储接口返回数据，用于最后生成 Markdown
var items = [];

var perPage = 100;
var clientId = _clientConfig2.default.clientId;
var clientSecret = _clientConfig2.default.clientSecret;

var fetchData = function fetchData(pageNo) {
  return new Promise(function (resolve, reject) {
    var url = 'https://api.github.com/search/repositories?q=v2ex&per_page=' + perPage + '&page=' + pageNo + '&client_id=' + clientId + '&client_secret=' + clientSecret;
    (0, _nodeFetch2.default)(url).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log('第' + pageNo + '页：当前获取到' + json.items.length + '项结果');
      if (json.items.length > 0) {
        items = items.concat(json.items);
      } else {
        console.log('抓取数据完毕');
      }
      resolve(json.items);
    }).catch(function (err) {
      reject(err);
    });
  });
};

// 使用 Promise.all
var promises = [];
var promiseNum = 6;

for (var i = 1; i <= promiseNum; i++) {
  promises.push(fetchData(i));
}

Promise.all(promises).then(function (items) {
  var result = items.reduce(function (prev, cur) {
    return prev.cocnat(cur);
  }, []);
  (0, _saveMd2.default)(result);
});