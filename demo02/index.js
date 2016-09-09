/* global window,XMLHttpRequest,ActiveXObject */

var httpRequest = false

function makeRequest (url) {
  httpRequest = new XMLHttpRequest()

  // ff 下此代码有效，
  if (httpRequest.overrideMimeType) {
    httpRequest.overrideMimeType('text/xml')
  }

  httpRequest.onreadystatechange = readyCall
  httpRequest.onload = onLoad
  httpRequest.open('GET', url, true)
  // httpRequest.setRequestHeader('Content-Type',  'text/xml');
  httpRequest.responseType = "document"
  httpRequest.send(null)
}

function readyCall () {
  console.log(httpRequest)
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      // console.log('text', httpRequest.responseText)
      // var frag
      console.log('xml', httpRequest.responseXML)
    } else {
      console.log('error')
    }
  }
}

// ProgressEvent
function onLoad (e) {
  console.log('onload', e)
}
makeRequest('index.html')
