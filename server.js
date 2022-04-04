var http=require("http");
// http.createServer(function(requst,response){
//     response.writeHead(404,{'Content-Type':'text/plain'});
//     response.end('hello world\n');
//     }).listen(8081);
// console.log('server running at http://localhost:8081/');

const hostname="127.0.0.1";
var port=3000;
var server=http.createServer((res,req)=>{
    res.end("welcome ");
})
server.listen(port,hostname,()=>{
    console.log("server start");
})