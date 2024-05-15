require('dotenv').config();

const app = require('./app');
const websocket = require('./websocket');


const server = app.listen(process.env.PORT,()=>{
    console.log('WebServer is running at port '+ process.env.PORT);
})

websocket(server);