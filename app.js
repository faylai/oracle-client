var port=1522;

/*var config = {
    user: 'bsp',
    password: '123456',
    host: '10.23.22.42',
    database: 'YTBSP'
};*/

var client=require('oracle-client');
client.serve(port);
//client.connect(config);
console.log("oracledb socket.io start on port:"+port);


