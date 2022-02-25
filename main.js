var http = require('http');
var fs = require('fs');
var url = require('url');
//url 모듈을 사용

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
        title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    
    response.writeHead(200);

    var template = `
        <!doctype html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ul>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ul>
                    <h2>${title}</h2>
                    <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                    <img src="coding.jpg" width="100%">
                    </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
                    </p>
                </body>
            </html>
    `;

    response.end(template);

});

app.listen(3000);

// 이걸 자유자재로 다루는 것이 이 수업의 목표


    // console.log(_url, queryData.id);
    /* queryString으로 값을 변경할 수 있음 */

    // console.log(__dirname + _url);
    /* 
        이 코드는 console에 나오는 것이다. 사용자가 요청할 때마다 위의 요청에 따라
        우리가 읽어들이는 파일을 만들수 있게 된다.
        response.end(fs.readFileSync(__dirname + _url));
     */

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