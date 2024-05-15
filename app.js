const express = require('express');
const cors = require('cors');
const webSocket = require('ws');
const bodyParser = require('body-parser');

 ws = new webSocket(process.env.WS_URL);



const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// app.post('/login',(req,res,next)=>{
//      req.json({token: '123456'});
// });

// app.post('/register',(req,res,next)=>{
//     req.sendStatus(201);
// });

// app.get('/',(req,res,next)=>{
    
//     res.send({online: true});
// });

app.post('/send',(req,res,next)=>{
    const {to,message} = req.body;
   // console.log(name);
   
    ws.send(JSON.stringify({to,message}));
   
    return res.status(201).json({to});

    
});


module.exports = app;