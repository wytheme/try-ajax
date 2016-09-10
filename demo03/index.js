/* global window,XMLHttpRequest */

// var xhr = new XMLHttpRequest()
// console.log(xhr)
// var url = 'avatar.jpg'
// xhr.open('GET', url)
// xhr.responseType = 'arraybuffer'
// xhr.onload = function (processEvent) {
//   console.log('onload', xhr, processEvent, xhr.response)
//   var arrayBuffer = xhr.response;
//   if (arrayBuffer) {
//     var byteArray = new Uint8Array(arrayBuffer);
//     console.log(byteArray)
//   }
// }
// xhr.onreadystatechange = function(event) {
//   console.log('onreadystatechange', xhr, event)
// }
// xhr.send(null);


function fetch(url, type) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    if (type) {
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
    } else {
      xhr.responseType = type
    }
    xhr.onload = function (processEvent) {
      resolve(xhr)
    }
    xhr.send(null);
  })
}

// ArrayBuffer
fetch('avatar.jpg', 'arraybuffer').then(function(xhr) {
  console.log(xhr);
  var arrayBuffer = xhr.response
  var byteArray
  if (arrayBuffer) {
    byteArray = new Uint8Array(arrayBuffer)
    console.log(byteArray)
    byteArray = new Int8Array(arrayBuffer)
    console.log(byteArray)
    byteArray = new Uint16Array(arrayBuffer)
    console.log(byteArray)
    byteArray = new Int16Array(arrayBuffer)
    console.log(byteArray)
  }
})
