var request = require("request");

var baseUrl = "https://api.github.com/search/repositories?q=v2ex"

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
      console.log("length:" + items.length);
      var result = [];
      // 需要的信息
      // 1. author/repoName
      // 2. description
      // 3. url
      // 4. star
      // 5. fork
      for(var i=0; i<items.length; i++) {
        result.push({
          full_name: items[i].full_name,
          description: items[i].description,
          url: items[i].html_url,
          stargazers_count: items[i].stargazers_count,
          forks_count: items[i].forks_count
        })
      }
      console.log(result);      
    } else {
      console.log("something wrong...");
    }
  } else {
    console.log("wrong");
    console.log(response.statusCode);
    console.log(body);
    console.log(error);
  }
})