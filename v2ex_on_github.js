var request = require("request");
var fs = require("fs");

// var baseUrl = "https://api.github.com/search/repositories?q=v2ex"

// 查询前100个，默认根据 score 排序。修改 count 的值可以自定义查询数量
var count = 100; 
var baseUrl = "https://api.github.com/search/repositories?q=v2ex&per_page=" + count;

request({
  url: baseUrl,
  json: true,
  headers: {
    'User-Agent': 'request'
  }
}, function(error, response, body) {
  if(!error && response.statusCode == 200) {
    if(body !== undefined) {
      var items = body.items;
      var ios = [];
      var android = [];
      var python = [];
      var php = [];
      var web = [];
      var other = []
      
      // 构造符合 markdown 表格格式的字符串
      var result = "\n# v2ex-plugin\n\n收集 GitHub 上 V2EX 周边应用。排名不分先后。\n\n## 简介\n\n根据编程语言简单分为 Web（HTML、CSS、JavaScript）、iOS（Objective-C、Swift）、Android（Java）、Python、PHP、其他。\n\n默认收集前 100 个（一次请求的最大值），若需自定义，请修该 **count** 并参考 GitHub API 说明 <https://developer.github.com/v3/search/>"
      
      var s_web = "\n## Web\n\n | Author/RepoName | Description | Link | Star | Fork |\n | :---: | :---: | :---: | :---: | :---: |\n";
      var s_ios = "\n## iOS\n\n | Author/RepoName | Description | Link | Star | Fork |\n | :---: | :---: | :---: | :---: | :---: |\n" 
      var s_android = "\n## Android\n\n | Author/RepoName | Description | Link | Star | Fork |\n | :---: | :---: | :---: | :---: | :---: |\n" 
      var s_python = "\n## Python\n\n | Author/RepoName | Description | Link | Star | Fork |\n | :---: | :---: | :---: | :---: | :---: |\n" 
      var s_php = "\n## PHP\n\n | Author/RepoName | Description | Link | Star | Fork |\n | :---: | :---: | :---: | :---: | :---: |\n" 
      var s_other = "\n## Other\n\n | Author/RepoName | Description | Link | Star | Fork |\n | :---: | :---: | :---: | :---: | :---: |\n" 
      
      // 需要的信息
      // 1. author/repoName
      // 2. description
      // 3. url
      // 4. star
      // 5. fork
      for(var i=0; i<items.length; i++) {
        if(items[i].language == "Java") {
          s_android += "| " + items[i].full_name + " | " + items[i].description + " | " + items[i].html_url + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n"
        } else if(items[i].language == "Objective-C" || items[i].language == "Swift") {
          s_ios += "| " + items[i].full_name + " | " + items[i].description + " | " + items[i].html_url + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n"
        } else if(items[i].language == "Python") {
          s_python += "| " + items[i].full_name + " | " + items[i].description + " | " + items[i].html_url + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n"
        } else if(items[i].language == "PHP") {
          s_php += "| " + items[i].full_name + " | " + items[i].description + " | " + items[i].html_url + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n"
        } else if(items[i].language == "HTML" || items[i].language == "CSS" || items[i].language == "JavaScript") {
          s_web += "| " + items[i].full_name + " | " + items[i].description + " | " + items[i].html_url + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n"
        } else {
          s_other += "| " + items[i].full_name + " | " + items[i].description + " | " + items[i].html_url + " | " + items[i].stargazers_count + " | " + items[i].forks_count + " |\n"
        }
      }   
      result += s_web + s_ios + s_android + s_python + s_php + s_other;
      fs.writeFile("README.md", result, function(err) {
        if(err) {
          return console.eror(err);
        }
        console.log("数据写入成功！")
        console.log("详见README.md");
      })
    } else {
      console.log("something wrong...");
    }
  } else {
    console.log("something wrong...");
    console.log(response.statusCode);
  }
})