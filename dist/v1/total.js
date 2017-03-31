"use strict";

var request = require("request");
var fs = require("fs");

// 一次查询数量最多为100，默认根据 score 排序。截止2015-12-04，有关 V2EX 的 repo 共有200+，故查询三次。

var baseUrl = "https://api.github.com/search/repositories?q=v2ex&per_page=100";

var result = "\n# v2ex-around\n\n收集 GitHub 上 V2EX 周边应用。排名不分先后。\n\n## 简介\n\n根据编程语言简单分为 Web（HTML、CSS、JavaScript）、iOS（Objective-C、Swift）、Android（Java）、Python、PHP、其他。\n\nGitHub API 说明 <https://developer.github.com/v3/search/>";
var s_web = "\n## Web\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n";
var s_ios = "\n## iOS\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n";
var s_android = "\n## Android\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n";
var s_python = "\n## Python\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n";
var s_php = "\n## PHP\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n";
var s_other = "\n## Other\n\n| Author/RepoName | Description | Star | Fork |\n| :---: | :---: | :---: | :---: |\n";

var url1 = baseUrl + "&page=1";
var url2 = baseUrl + "&page=2";
var url3 = baseUrl + "&page=3";

console.log("准备分析前100个");
request({
  url: url1,
  json: true,
  headers: {
    "User-Agent": "request"
  }
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    if (body !== undefined) {
      var items = body.items;
      for (var i = 0; i < items.length; i++) {
        if (items[i].language == "Java") {
          s_android += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
        } else if (items[i].language == "Objective-C" || items[i].language == "Swift") {
          s_ios += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
        } else if (items[i].language == "Python") {
          s_python += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
        } else if (items[i].language == "PHP") {
          s_php += "| [" + items[i].full_name + "]( " + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
        } else if (items[i].language == "HTML" || items[i].language == "CSS" || items[i].language == "JavaScript") {
          s_web += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
        } else {
          s_other += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
        }
      }
      console.log("准备分析100——200个");
      request({
        url: url2,
        json: true,
        headers: {
          "User-Agent": "request"
        }
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          if (body !== undefined) {
            var items = body.items;
            for (var i = 0; i < items.length; i++) {
              if (items[i].language == "Java") {
                s_android += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
              } else if (items[i].language == "Objective-C" || items[i].language == "Swift") {
                s_ios += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
              } else if (items[i].language == "Python") {
                s_python += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
              } else if (items[i].language == "PHP") {
                s_php += "| [" + items[i].full_name + "]( " + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
              } else if (items[i].language == "HTML" || items[i].language == "CSS" || items[i].language == "JavaScript") {
                s_web += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
              } else {
                s_other += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
              }
            }
            console.log("准备分析200+");
            request({
              url: url3,
              json: true,
              headers: {
                "User-Agent": "request"
              }
            }, function (error, response, body) {
              if (!error && response.statusCode == 200) {
                if (body !== undefined) {
                  var items = body.items;
                  for (var i = 0; i < items.length; i++) {
                    if (items[i].language == "Java") {
                      s_android += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
                    } else if (items[i].language == "Objective-C" || items[i].language == "Swift") {
                      s_ios += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
                    } else if (items[i].language == "Python") {
                      s_python += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
                    } else if (items[i].language == "PHP") {
                      s_php += "| [" + items[i].full_name + "]( " + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
                    } else if (items[i].language == "HTML" || items[i].language == "CSS" || items[i].language == "JavaScript") {
                      s_web += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
                    } else {
                      s_other += "| [" + items[i].full_name + "](" + items[i].html_url + ") | " + items[i].description + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n";
                    }
                  }
                  result += s_web + s_ios + s_android + s_python + s_php + s_other;
                  console.log("数据写入中...");
                  fs.writeFile("../README.md", result, function (err) {
                    if (err) {
                      console.error("数据写入失败");
                      console.error(err);
                      return;
                    }
                    console.log("数据写入成功！");
                    console.log("详见 README.md");
                  });
                }
              } else {
                console.log("something wrong in the third require");
              }
            });
          }
        } else {
          console.log("something wrong in the second require");
        }
      });
    } else {
      console.log("something wrong in the first require");
    }
  } else {
    console.log("something wrong...");
  }
});