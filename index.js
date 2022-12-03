// Making basic server

 const http=require('http'); 
//

const { text } = require('stream/consumers');

 // Http module kay karta hai:- Server ke request and response ko handle karta hai 

 http.createServer((req,resp)=>{
     resp.write("<h1>Hello Samrat</h1>");
     resp.end()
 }).listen(4500);  //It's takes function as a parameter 

