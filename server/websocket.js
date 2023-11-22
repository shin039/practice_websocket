const express   = require('express');
const expressWs = require('express-ws')
const router    = express.Router()
expressWs(router);


const CLIENTS = [];

// test connection open
router.ws('/test', (ws, req) => {

  ws.send('接続成功')
  console.log('接続成功');

  // clients登録
  CLIENTS.push(ws);

  // メッセージ送信処理処理
  ws.on('message', msg => { 
    CLIENTS.forEach(ws => ws.send(msg));
    console.log(msg);
  });

})

module.exports = router

