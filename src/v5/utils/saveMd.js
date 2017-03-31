/**
 * saveMd.js: 将获取到的 repo 信息拼 Markdown 格式字符串并写入文件
 */
import * as config from './../config/tplConfig';
import fs from 'fs';

let tplHeader = config.tplHeader;
let tplWeb = config.tplWeb;
let tplIOS = config.tplIOS;
let tplAndroid = config.tplAndroid;
let tplPython = config.tplPython;
let tplPhp = config.tplPhp;
let tplOthers = config.tplOthers;
let tplFooter = config.tplFooter;

const saveMd = (items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].language == "Java") {
      tplAndroid += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
    } else if(items[i].language == 'Objective-C' || items[i].language == 'Swift') {
      tplIOS += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
    } else if(items[i].language == 'Python') {
      tplPython += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
    } else if(items[i].language == 'PHP') {
      tplPhp += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
    } else if(items[i].language == 'HTML' || items[i].language == 'CSS' || items[i].language == 'JavaScript') {
      tplWeb += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
    } else {
      tplOthers += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
    }
  }

  // 添加更新时间
  tplHeader += `${new Date().toLocaleString()}\n`;

  // 添加项目数据
  tplHeader += tplWeb + tplIOS + tplAndroid + tplPython + tplPhp + tplOthers + tplFooter;
  fs.writeFile("./../../README.md", tplHeader, (err) => {
    if (err) {
     console.error(`数据写入失败：${err}`);
    } else {
     console.log(`数据写入成功，详见 README.md`);
    }
  });
}

export default saveMd;
