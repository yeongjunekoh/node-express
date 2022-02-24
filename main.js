var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    // 이 코드는 console에 나오는 것이다. 사용자가 요청할 때마다 위의 요청에 따라
    // 우리가 읽어들이는 파일을 만들수 있게 된다.
    response.end(fs.readFileSync(__dirname + url));


    // console.log(fs.readFileSync(__dirname + url));
    /* 
        해당 콘솔은 파일을 읽음 -> 16진수로 표현되는데
    */
    
    // response.end("robert june" + url);
    /* 
        "robert june" + url 스트링을 반환하게 된다.
        response.end() 메서드 내부에 어떤 값을 넣느냐에 따라서 사용자에게 전송하는 데이터가 바뀐다.
        node.js, phython, jango, PHP 등이 할 수 있는것
        --> 프로그래밍적으로 사용자에게 전송할 데이터를 생성한다는 것이 힘이다.
    */
 
});

app.listen(3000);

// 이걸 자유자재로 다루는 것이 이 수업의 목표