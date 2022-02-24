var http = require('http');
var fs = require('fs');
var url = require('url');
//url 모듈을 사용

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(_url, queryData.id);
    // queryString으로 값을 변경할 수 있음

    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    
    response.writeHead(200);
    console.log(__dirname + _url);
    // 이 코드는 console에 나오는 것이다. 사용자가 요청할 때마다 위의 요청에 따라
    // 우리가 읽어들이는 파일을 만들수 있게 된다.
    // response.end(fs.readFileSync(__dirname + _url));
    response.end(queryData.id);


    // console.log(fs.readFileSync(__dirname + _url));
    /* 
        해당 콘솔은 파일을 읽음 -> 16진수로 표현되는데
    */
    
    // response.end("robert june" + _url);
    /* 
        "robert june" + _url 스트링을 반환하게 된다.
        response.end() 메서드 내부에 어떤 값을 넣느냐에 따라서 사용자에게 전송하는 데이터가 바뀐다.
        node.js, phython, jango, PHP 등이 할 수 있는것
        --> 프로그래밍적으로 사용자에게 전송할 데이터를 생성한다는 것이 힘이다.
    */
 
});

app.listen(3000);

// 이걸 자유자재로 다루는 것이 이 수업의 목표

// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     var queryData = url.parse(_url, true).query;
//     console.log(queryData.id);
//     if(_url == '/'){
//       _url = '/index.html';
//     }
//     if(_url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     response.end(queryData.id);
 
// });
// app.listen(3000);