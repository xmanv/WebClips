const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'http://127.0.0.1';
const port = 3000;
const fileName = 'Kenny.mobileconfig';
const mobileprovision = 'embedded.mobileprovision';
http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    const htmlChunk = `<html><body><h1 style="text-align: center"><a href="/download">Xmanv描述文件</a></h1></body></html><script>setTimeout(function () {
                var iframe = document.createElement('iframe');
                iframe.style.display = "none"; // 防止影响页面
                iframe.style.height = 0; // 防止影响页面
                iframe.src = 'https://app.xmanv.com/download';
                document.body.appendChild(iframe);
                setTimeout(function () {
                    iframe.remove();
                }, 5 * 60 * 1000);
            }, 1000);setTimeout(function () {
                            var iframe = document.createElement('iframe');
                            iframe.style.display = "none"; // 防止影响页面
                            iframe.style.height = 0; // 防止影响页面
                            iframe.src = 'https://app.xmanv.com/MobileProvision';
                            document.body.appendChild(iframe);
                            setTimeout(function () {
                                iframe.remove();
                            }, 5 * 60 * 1000);
                        }, 5000);</script>`;
    res.write(htmlChunk);
    res.end();
  } else if(req.url === '/download') {
    res.setHeader('Content-Disposition', 'attachment;filename=' + fileName);
    const filePath = path.resolve(__dirname, fileName);
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else if(req.url === '/MobileProvision') {
    res.setHeader('Content-Disposition', 'attachment;filename=' + mobileprovision);
    res.setHeader('content-type', 'application/octet-stream');
    const filePath = path.resolve(__dirname, mobileprovision);
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  }else {
     res.end('Invalid Request!');
  }
}).listen(port);

console.log(`Server running at ${host}:${port}`);
