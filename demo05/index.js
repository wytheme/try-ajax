/* global window,XMLHttpRequest */

function fetch(method, url, data) {
  var xhr = new XMLHttpRequest()
  // e.lengthComputable = false 此时总字节数位置
  xhr.addEventListener('loadstart', loadStart)
  xhr.addEventListener('progress', loadProgress)
  xhr.upload.addEventListener('progress', loadProgress)
  xhr.addEventListener('error', loadError)
  xhr.addEventListener('abort', loadAbort)
  xhr.addEventListener('load', loaded)
  // abort、load、error 皆会触发 loadend
  xhr.addEventListener('loadend', loadEnd)
  // xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  xhr.open(method, url)

  // 简写
  xhr.onload = function (processEvent) {
    console.log('onload')
  }
  xhr.send(data || null);
}

function loadStart(e) {
  console.log('loadStart', e)
}

function loadProgress(e) {
  console.log('loadProcess', e)
  if (e.lengthComputable) {
    var percentComplete = e.loaded / e.total
    console.log('percentComplete', percentComplete)
  }
}

function loadError(e) {
  console.log('loadError', e)
}

function loadAbort(e) {
  console.log('loadAbort', e)
}

function loaded(e) {
  console.log('load', e)
}

function loadEnd(e) {
  console.log('loadEnd', e)
}


// #1
// fetch('GET','avatar.jpg');

// #2
// XMLHttpRequest cannot load file://avatar.jpg/. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
// fetch('GET','file://avatar.jpg');

// #3
var fileUpload = document.getElementById('fileUpload');
var imgUpload = document.getElementById('imgUpload');
fileUpload.onchange = function() {
  console.log(this.files)
  var theFile = this.files[0]

  // 预览： createObjectURL（blob object or file object)
  var theFileUrl = window.URL.createObjectURL(theFile)
  imgUpload.src = theFileUrl;

  // 上传：原始格式上传
  var reader = new FileReader();
  reader.readAsBinaryString(theFile);
  reader.onload = function(e) {
    // console.log(this.result);
    fetch('POST', 'raw-upload.php', btoa(e.target.result))
    window.URL.revokeObjectURL(theFileUrl)
  }

}
