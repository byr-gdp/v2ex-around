'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tplConfig = require('./../config/tplConfig');

var config = _interopRequireWildcard(_tplConfig);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * saveMd.js: 将获取到的 repo 信息拼 Markdown 格式字符串并写入文件
 */

var tplHeader = config.tplHeader;
var tplWeb = config.tplWeb;
var tplIOS = config.tplIOS;
var tplAndroid = config.tplAndroid;
var tplPython = config.tplPython;
var tplPhp = config.tplPhp;
var tplOthers = config.tplOthers;
var tplFooter = config.tplFooter;

var saveMd = function saveMd(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].language == "Java") {
      tplAndroid += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
    } else if (items[i].language == 'Objective-C' || items[i].language == 'Swift') {
      tplIOS += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
    } else if (items[i].language == 'Python') {
      tplPython += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
    } else if (items[i].language == 'PHP') {
      tplPhp += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
    } else if (items[i].language == 'HTML' || items[i].language == 'CSS' || items[i].language == 'JavaScript') {
      tplWeb += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
    } else {
      tplOthers += '| [' + items[i].full_name + '](' + items[i].html_url + ') | ' + items[i].description + ' | ' + items[i].stargazers_count + ' | ' + items[i].forks_count + ' |\n';
    }
  }

  // 添加更新时间
  tplHeader += new Date().toLocaleString() + '\n';

  // 添加项目数据
  tplHeader += tplWeb + tplIOS + tplAndroid + tplPython + tplPhp + tplOthers + tplFooter;
  _fs2.default.writeFile("./../../README.md", tplHeader, function (err) {
    if (err) {
      console.error('数据写入失败：' + err);
    } else {
      console.log('数据写入成功，详见 README.md');
    }
  });
};

exports.default = saveMd;