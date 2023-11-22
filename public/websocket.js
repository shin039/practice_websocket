// -----------------------------------------------------------------------------
// HTML Components
// -----------------------------------------------------------------------------
const msgBox     = document.getElementById('msg-need-send')
const sendBtn    = document.getElementById('send-btn')
const exit       = document.getElementById('exit')
const receiveBox = document.getElementById('receive-box')

// -----------------------------------------------------------------------------
// Websocket Settings
// -----------------------------------------------------------------------------
const ws = new WebSocket('ws://127.0.0.1:3000/websocket/test')

ws.onopen = e => { console.log(`WebSocket接続 ${ws.readyState}`) }

ws.onmessage = data => {
  receiveBox.innerHTML += `<p>${data.data}</p>`
  receiveBox.scrollTo({
    top: receiveBox.scrollHeight,
    behavior: "smooth"
  })
}

ws.onclose = data => {
  console.log('WebSocket切断')
  console.log(data);
}

// -----------------------------------------------------------------------------
// Button Action
// -----------------------------------------------------------------------------
sendBtn.onclick = () => {
  ws.send(msgBox.value)
}

exit.onclick = () => {
  ws.close()
}
