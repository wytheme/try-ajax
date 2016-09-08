## AJAX

> AJAX (Asynchronous JavaScript and XML)代表异步Javascript & XML

关键字 异步

## Index

-

## 1. new - Demo01




- method
  - GET/POST/HEAD等必须大写
- url
  - 同源策略，不能跨域名(域名或端口有差异)访问，
- async
  - 使用异步模式，不要使用false，false会阻塞页面渲染影响用户体验
- send
  - 内容必须是字符串

```js
// client . open(method, url [, async = true [, username = null [, password = null]]])
// url with name and password `http://a:1@localhost/github/try-ajax/demo01/index.html`

http_request.open('GET', 'http://www.example.org/some.file', true);

// POST:name=value&anothername=othervalue&so=on
http_request.send(null)
```

- readyState
  - 0 (未初始化)
  - 1 (正在装载)
  - 2 (装载完毕)
  - 3 (交互中)
  - 4 (完成)
- status


## 参考

[MDN - AJAX](https://developer.mozilla.org/zh-CN/docs/AJAX)
