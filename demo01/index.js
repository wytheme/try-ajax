/* global window,XMLHttpRequest,ActiveXObject */

var httpRequest = false

function makeRequest (url) {
  httpRequest = false

  if (window.XMLHttpRequest) { // Mozilla, Safari
    httpRequest = new XMLHttpRequest()
  } else if (window.ActiveXObject) { // IE
    try {
      httpRequest = new ActiveXObject('Msxml2.XMLHTTP')
    } catch (e) {
      try {
        httpRequest = new ActiveXObject('Mscrosoft.XMLHTTP')
      } catch (e) {}
    }
  }

  if (!httpRequest) {
    console.log('cannot create XMLHTTP')
    return false
  }

  httpRequest.onreadystatechange = readyCall
  httpRequest.onload = onLoad
  httpRequest.open('GET', url, true)
  httpRequest.send(null)
}

function readyCall () {
  console.log(httpRequest)
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      console.log('text', httpRequest.responseText)
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
makeRequest('test.xml')
