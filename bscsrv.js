const server=require("http");
const { Http2ServerRequest } = require("http2");

server.createServer((req,resp)=>{
    resp.write("Samrat Sing");
    resp.end();

}).listen(4500);