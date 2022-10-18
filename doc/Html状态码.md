# Html 状态码
1xx: 信息相应
100: Continue, 客户端继续请求
101: Switching Protocal，切换协议，响应客户端的请求头
102: Processing，服务器收到正在处理，没有响应可用
103: Early Hints, 主要用于与 Link 链接头一起使用，以允许用户代理在服务器准备响应阶段时开始预加载 preloading 资源。

 

2xx: 成功响应
200: OK, 相应成功
201: Created，请求成功，因此创建一个新资源
202: Accepted，请求收到，但未响应
203: Non-Authoritative Information, 服务器已处理请求，但是返回的不是原始服务器的确定集合，而是来自本地或第三方的拷贝
204：No Content, 对于该请求没有的内容可发送，但头部字段可能有用。用户代理可能会用此时请求头部信息来更新原来资源的头部缓存字段。
205：Reset Content, 告诉用户代理重置发送此请求的文档。
206: Partial Content, 客户端部分请求资源被响应。
207：Multi-Status, 对于多个状态代码都可能合适的情况，传输有关多个资源的信息。
208：Already Reported, 在 DAV 里面使用 dav:propstat 响应元素以避免重复枚举多个绑定的内部成员到同一个集合。
226: IM Used, 服务器已经完成了对资源的GET请求，并且响应是对当前实例应用的一个或多个实例操作结果的表示。
 

3xx: 重定向
300：Multiple Choice, 多个可能的响应。
301：Moved Permanently，永久重定向。
302：Found，临时重定向。
303：See Other，从其他URL进行进一步改变。
304: Not Modified, 未更改，可用缓存。
305：Use Proxy，使用代理。
306：unused，没用了。
307：Temporary Redirect, 临时重定向，等同于302。
308：Permanent Redirect, 永久重定向，等同于301。
 

4xx: 客户端错误
400: Bad request, 请求错误
401: Unauthorized, 未进行身份验证。
402: Payment Required，将代码保留并留到未来使用。
403: Forbidden, 无权限访问。
404：Not Found, 找不到请求资源。
405: Method not allowed，目标资源不支持该方法。
406：Not Acceptable, 当 web 服务器在执行服务端驱动型内容协商机制后，没有发现任何符合用户代理给定标准的内容时，就会发送此响应。
407：Proxy Authentication Required, 代理未进行身份认证。
408: Request Timeout，请求超时。
409: Conflict, 请求冲突。
410：Gone，当请求的内容已从服务器中永久删除且没有转发地址时，将发送此响应。
411：Length Required，请求头部的Content-Length未定义。
412：Precondition Failed, 客户端在头部指出了服务器不满足的先决条件。
413:Payload Too Large, 请求实体大于服务器定义的限制。
414：URL Too Long, URL超过服务器规定。
415: Unsupported Media Type, 服务器不支持的媒体格式。
416: Range not Satisfiable, 请求头部的Range字段不满足。
417: Exceptation Failed, 无法满足Except请求标头字段所指示的期望。
418: I am a teapot, 拒绝用茶壶煮咖啡？
421: Misdirected Request, 请求被定向到无法相应的服务器。
422: Unprocessable Entity, 请求格式正确，但语义错误。
423: Locked, 访问资源被锁。
424: Failed Dependency, 因为前一个请求失败而请求失败。
425: Too early, 服务器不愿冒险处理可能被重播的请求。
426: Upgrade Required, 拒绝使用当前协议执行请求。
428: Precondition Required, 源服务器要求请求是有条件的。此响应旨在防止'丢失更新'问题，即当第三方修改服务器上的状态时，客户端 GET 获取资源的状态，对其进行修改并将其 PUT 放回服务器，从而导致冲突。
429: Too many requires, 请求过多。
431: Request Header Fields Too Large, 请求字段太大，减小之后可以重新提交请求。
451: Unavailable For Legal Reason, 用户代理请求了无法合法提供的资源。
499：Client Closed Request, 客户端主动断开连接。
 

5xx: 服务端错误响应
500: Internal Server Error，服务器内部问题。
501: Not Implemented，服务器不支持请求方法。
502: Bad Gateway, 服务器作为网关得到错误响应。
503: Service Unavailable, 服务不可用。
504: Gateway Timeout, 服务器充当网关未获取响应。
505: HTTP Version Not Supported, HTTP版本不对。
506: Variant Also Negotiates, 服务器存在内部配置错误。
507: Insufficient Storage, 无法在资源上执行该方法。
508: Loop Detected，服务器处理请求时循环了。
510: Not extended, 服务器需要对请求进行扩展才能完成请求。
511: Network Authentication Required, 客户端需要进行身份验证才可以访问网络资源。