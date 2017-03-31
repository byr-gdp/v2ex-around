'use strict';

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl_ret = config.tpl_ret;
var tpl_web = config.tpl_web;
var tpl_ios = config.tpl_ios;
var tpl_android = config.tpl_android;
var tpl_python = config.tpl_python;
var tpl_php = config.tpl_php;
var tpl_others = config.tpl_others;
var tpl_end = config.tpl_end;

var perPage = 100;
var client_id = '7d3832362cf67333a996';
var client_secret = '7bfdb983552ccb748e30a47aeb0e9d761c80d1cc';

var get = function get(page) {
  return new Promise(function (resolve, reject) {
    var url = 'https://api.github.com/search/repositories?q=v2ex&per_page=' + perPage + '&page=' + page + '&client_id=' + client_id + '&client_secret=' + client_secret;
    console.log('正在抓取第' + page + '页数据......');
    (0, _nodeFetch2.default)(url).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log('当前获取到' + json.items.length + '项结果\n');
      if (json.items.length > 0) {
        var items = json.items;
        for (var i = 0; i < items.length; i++) {
          if (items[i].language == "Java") {
            tpl_android += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
          } else if (items[i].language == 'Objective-C' || items[i].language == 'Swift') {
            tpl_ios += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
          } else if (items[i].language == 'Python') {
            tpl_python += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
          } else if (items[i].language == 'PHP') {
            tpl_php += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
          } else if (items[i].language == 'HTML' || items[i].language == 'CSS' || items[i].language == 'JavaScript') {
            tpl_web += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
          } else {
            tpl_others += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
          }
        }
        get(++page);
      } else {
        console.log('抓取数据完毕');
        // 添加更新时间
        tpl_ret += new Date().toLocaleString() + '\n';
        // 添加项目数据
        tpl_ret += tpl_web + tpl_ios + tpl_android + tpl_python + tpl_php + tpl_others + tpl_end;
        _fs2.default.writeFile("../README.md", tpl_ret, function (err) {
          if (err) {
            console.error('数据写入失败：' + err);
          } else {
            console.log('数据写入成功，详见 README.md');
          }
        });
      }
    }).catch(function (err) {
      console.error(err);
      reject(err);
    });
  });
};

get(1);