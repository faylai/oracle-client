var port=1522;
var client=require('oracle-client');
client.serve(port);
console.log("oracledb socket.io start on port:"+port);


