'use strict';

const tplHeader = '\n# v2ex-around\n\n收集 GitHub 上 V2EX 周边应用。排名不分先后。\n\n## 简介\n\n根据编程语言简单分为 Web（HTML、CSS、JavaScript）、iOS（Objective-C、Swift）、Android（Java）、Python、PHP、其他。\n\nGitHub API 说明 <https://developer.github.com/v3/search/>\n\n更新时间：';
const tplWeb = '\n## Web\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tplIOS = '\n## iOS\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tplAndroid = '\n## Android\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tplPython = '\n## Python\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tplPhp = '\n## PHP\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tplOthers = '\n## Other\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tplFooter = '\nEnjoy it! :)';

let generateFinalTpl = () => {
  return tplHeader + tplWeb + tplIOS + tplAndroid + tplPython + tplPhp + tplOthers;
}

export {
  tplHeader, tplWeb, tplIOS, tplAndroid, tplPython, tplPhp, tplOthers, tplFooter, generateFinalTpl
}
