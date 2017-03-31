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

var beginFetchData = function beginFetchData(initPage) {
  var page = initPage;
  var items = [];

  return new Promise(function (resolve, reject) {
    var fetchPageData = function fetchPageData(pageNo) {
      var url = 'https://api.github.com/search/repositories?q=v2ex&per_page=' + perPage + '&page=' + pageNo + '&client_id=' + clientId + '&client_secret=' + clientSecret;
      console.log('正在抓取第' + pageNo + '页数据......');

      (0, _nodeFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (json) {
        console.log('当前获取到' + json.items.length + '项结果\n');
        if (json.items.length > 0) {
          items = items.concat(json.items);
          fetchPageData(++page);
        } else {
          console.log('抓取数据完毕');
          resolve(items);
        }
      }).catch(function (err) {
        reject(err);
      });
    };
    fetchPageData(page);
  });
};

beginFetchData(1).then(function (items) {
  (0, _saveMd2.default)(items);
}).catch(function (err) {
  console.log(err);
});