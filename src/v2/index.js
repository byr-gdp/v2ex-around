import fetch from 'node-fetch';
import fs from 'fs';
import * as config from './config';

let tpl_ret = config.tpl_ret;
let tpl_web = config.tpl_web;
let tpl_ios = config.tpl_ios;
let tpl_android = config.tpl_android;
let tpl_python = config.tpl_python;
let tpl_php = config.tpl_php;
let tpl_others = config.tpl_others;
let tpl_end = config.tpl_end;

const perPage = 100;
const client_id = '7d3832362cf67333a996';
const client_secret = '7bfdb983552ccb748e30a47aeb0e9d761c80d1cc';

let get = (page) => {
  return new Promise((resolve, reject) => {
    let url = `https://api.github.com/search/repositories?q=v2ex&per_page=${perPage}&page=${page}&client_id=${client_id}&client_secret=${client_secret}`
    console.log(`正在抓取第${page}页数据......`);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(`当前获取到${json.items.length}项结果\n`);
        if(json.items.length > 0){
          var items = json.items;
          for(var i = 0; i < items.length; i++) {
            if(items[i].language == "Java") {
              tpl_android += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
            } else if(items[i].language == 'Objective-C' || items[i].language == 'Swift') {
              tpl_ios += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
            } else if(items[i].language == 'Python') {
              tpl_python += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
            } else if(items[i].language == 'PHP') {
              tpl_php += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
            } else if(items[i].language == 'HTML' || items[i].language == 'CSS' || items[i].language == 'JavaScript') {
              tpl_web += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
            } else {
              tpl_others += `| [${items[i].full_name}](${items[i].html_url}) | ${items[i].description} | ${items[i].stargazers_count} | ${items[i].forks_count} |\n`;
            }
          }
          get(++page);
        }else{
          console.log('抓取数据完毕');
          // 添加更新时间
          tpl_ret += `${new Date().toLocaleString()}\n`;
          // 添加项目数据
          tpl_ret += tpl_web + tpl_ios + tpl_android + tpl_python + tpl_php + tpl_others + tpl_end;
          fs.writeFile("../README.md", tpl_ret, (err) => {
            if(err) {
              console.error(`数据写入失败：${err}`);
            }else{
              console.log(`数据写入成功，详见 README.md`);
            }
          });
        }
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

get(1);
