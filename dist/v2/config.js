'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tpl_ret = '\n# v2ex-around\n\n收集 GitHub 上 V2EX 周边应用。排名不分先后。\n\n## 简介\n\n根据编程语言简单分为 Web（HTML、CSS、JavaScript）、iOS（Objective-C、Swift）、Android（Java）、Python、PHP、其他。\n\nGitHub API 说明 <https://developer.github.com/v3/search/>\n\n更新时间：';
var tpl_web = '\n## Web\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tpl_ios = '\n## iOS\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tpl_android = '\n## Android\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tpl_python = '\n## Python\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tpl_php = '\n## PHP\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tpl_others = '\n## Other\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
var tpl_end = '\nEnjoy it! :)';

var generate_final_tpl = function generate_final_tpl() {
  return tpl_ret + tpl_web + tpl_ios + tpl_android + tpl_python + tpl_php + tpl_others;
};

exports.tpl_ret = tpl_ret;
exports.tpl_web = tpl_web;
exports.tpl_ios = tpl_ios;
exports.tpl_android = tpl_android;
exports.tpl_python = tpl_python;
exports.tpl_php = tpl_php;
exports.tpl_others = tpl_others;
exports.tpl_end = tpl_end;
exports.generate_final_tpl = generate_final_tpl;