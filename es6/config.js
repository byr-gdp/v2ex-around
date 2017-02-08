'use strict';

const tpl_ret = '\n# v2ex-around\n\n收集 GitHub 上 V2EX 周边应用。排名不分先后。\n\n## 简介\n\n根据编程语言简单分为 Web（HTML、CSS、JavaScript）、iOS（Objective-C、Swift）、Android（Java）、Python、PHP、其他。\n\nGitHub API 说明 <https://developer.github.com/v3/search/>\n\n更新时间：';
const tpl_web = '\n## Web\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tpl_ios = '\n## iOS\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tpl_android = '\n## Android\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tpl_python = '\n## Python\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tpl_php = '\n## PHP\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tpl_others = '\n## Other\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n';
const tpl_end = '\nEnjoy it! :)';

export {
  tpl_ret, tpl_web, tpl_ios, tpl_android, tpl_python, tpl_php, tpl_others, tpl_end
}
