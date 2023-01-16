const http= require('http');    
const PORT=3000; 
//http module contains a function called as create server
//this create server function takes callback as input
//inside the callback we et two arguments 
//-request--contains all the details about the incoming request
//-response--this argument contains fucntions using which we can prepare the responses
//create server function returns a server object
const server=http.createServer(function exec(request,response){
    console.log(request);
    response.end("Hello World");

});
server.listen(PORT,function process(){
    //once the server has started then this callback will be executed
    console.log("Server started on port",PORT);
});