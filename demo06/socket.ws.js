var ws = require('nodejs-websocket')
var fs = require('fs')

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
  console.log('New connection', Date.now())

  // setInterval(function() {
  //   console.log('1')
  //   conn.sendText('1')
  // }, 5000)
  conn.on('binary', function (inStream) {
    var data = new Buffer(0)
    console.log(data)

    inStream.on('readable', function() {

      // way 1
      const writable = fs.createWriteStream('image-uploaded-stream.jpg');
      inStream.pipe(writable)

      // way 2
      var newData = inStream.read();
      if(newData) {
        data = Buffer.concat([data, newData], data.length+newData.length)
        console.log(data)
      }
    })
    inStream.on('end', function() {
      console.log('InStream end: ', Date.now(), data)

      // way 2
      fs.appendFile('image-uploaded.jpg', data, (err) => {
        if (err) throw err;
        console.log('The data was appended to file!');
      });

    })
  })

  conn.on('text', function (str) {
    console.log('Received ' + str)
    // conn.sendText('Received: ' + str.toUpperCase())
    broadcast('Received: ' + str.toUpperCase())
  })
  conn.on('close', function (code, reason) {
    console.log('Connection closed')
  })
}).listen(8099)

function broadcast (msg) {
  server.connections.forEach(function (conn) {
    conn.sendText(msg)
  })
}
