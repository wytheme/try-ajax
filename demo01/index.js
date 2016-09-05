/* global window,XMLHttpRequest,ActiveXObject */

var http_request = false

function makeRequest (url) {
  http_request = false

  if (window.XMLHttpRequest) {  // Mozilla, Safari
    http_request = new XMLHttpRequest()
  } else if (window.ActiveXObject) { // IE
    try {
      http_request = new ActiveXObject('Msxml2.XMLHTTP')
    } catch (e) {
      try {
        http_request = new ActiveXObject('Mscrosoft.XMLHTTP')
      } catch (e) { }
    }
  }

  if (!http_request) {
    console.log('cannot create XMLHTTP')
    return false
  }

  http_request.onreadystatechange = readyCall
  http_request.onload = onLoad
  http_request.open('GET', url, true)
  http_request.send(null)
}

function readyCall () {
  console.log(http_request)
  if (http_request.readyState === 4) {
    if (http_request.status === 200) {
      console.log('text', http_request.responseText)
      console.log('xml', http_request.responseXML, http_request.responseXML.getElementsByTagName('a'))
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
