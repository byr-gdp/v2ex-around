'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tplHeader = '\n# v2ex-around\n\n收集 GitHub 上 V2EX 周边应用。排名不分先后。\n\n## 简介\n\n根据编程语言简单分为 Web（HTML、CSS、JavaScript）、iOS（Objective-C、Swift）、Android（Java）、Python、PHP、其他。\n\nGitHub API 说明 <https://developer.github.com/v3/search/>\n\n更新时间：';
var tplWeb = '\n## Web\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tplIOS = '\n## iOS\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tplAndroid = '\n## Android\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tplPython = '\n## Python\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tplPhp = '\n## PHP\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tplOthers = '\n## Other\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tplFooter = '\nEnjoy it! :)';

var generateFinalTpl = function generateFinalTpl() {
  return tplHeader + tplWeb + tplIOS + tplAndroid + tplPython + tplPhp + tplOthers;
};

exports.tplHeader = tplHeader;
exports.tplWeb = tplWeb;
exports.tplIOS = tplIOS;
exports.tplAndroid = tplAndroid;
exports.tplPython = tplPython;
exports.tplPhp = tplPhp;
exports.tplOthers = tplOthers;
exports.tplFooter = tplFooter;
exports.generateFinalTpl = generateFinalTpl;