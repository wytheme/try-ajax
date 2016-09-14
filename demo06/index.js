/* global window,XMLHttpRequest,ActiveXObject */

// var socket = io("http://localhost:8099");

// WebSocket connection to 'ws://localhost:8099/' failed: Connection closed before receiving a handshake response

// raw WebSocket
var ws = new WebSocket('ws://localhost:8099')
var $output = document.getElementById('output')

// setInterval(function() {
//   ws.send(Date.now())
// }, 2000)

ws.onopen = function() {
  console.log('onopen')
}

ws.onerror = function() {
  console.log('onerror')
}

ws.onclose = function() {
  console.log('onclose')
}

// ws.binaryType = 'arraybuffer';
// e.data.byteLength
ws.onmessage = function(msgEvent) {
  console.log('onmessage', msgEvent)
  writeMsg(msgEvent.data);
}

window.onload = function() {
  document.getElementById('msg').onchange = function(e) {
    ws.send(e.target.value)
  }
  document.getElementById('file').onchange = function(e) {
    var f = this.files[0]
    ws.send(f)
  }
}

function writeMsg(str) {
  var $p = document.createElement('li')
  $p.innerHTML = str;
  $output.appendChild($p)
}
