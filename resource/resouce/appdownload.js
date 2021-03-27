var http = require('http');
var fs = require('fs');
const path = require('path');
var httpPort = 3000;
var isH5 = false;
const fileName = 'Kenny_signed.mobileconfig';
const mobileprovision = 'embedded.mobileprovision';
http.createServer((req, res) => {
  var deviceAgent = req.headers["user-agent"].toLowerCase();
  isH5=(deviceAgent.match(/(iphone|ipod|ipad|android)/)||deviceAgent.match(/(iphone|ipod|ipad|android)/)>0)?true:false
  var arryMid=[]
  if(req.url.lastIndexOf(".")>-1){
    arryMid=req.url.split(".")
  }
  var type = arryMid[arryMid.length-1]
  if(!isH5){
      // 此处是处理PC端
      console.log(req.url);
      if(req.url.lastIndexOf("/static")>-1||req.url.lastIndexOf("/image")>-1){
        fs.readFile(req.url.substring(1,), getMime(type)[0], (err, content) => {
            res.writeHead(200, {
              'Content-Type': getMime(type)[1],
              'Access-Control-Allow-Credentials':true,
              'Access-Control-Allow-Origin':'http://api.xmanv.com'
            })
            if(getMime(type)[0]=='binary'){
              res.write(content, 'binary');
              res.end()
            }else{
              res.end(content)
            }
        })
      }else {
        fs.readFile("www-pc/index.html", 'utf-8', (err, content) => {
            res.writeHead(200, {
              'Content-Type': 'text/html; charset=utf-8',
              'Access-Control-Allow-Credentials':true,
              'Access-Control-Allow-Origin':'http://api.xmanv.com'
            })
            res.end(content)
        })
      }
  }else {
    // 此处是处理移动端
    
    if(req.url.lastIndexOf("/resource")>-1||req.url.lastIndexOf("/image")>-1){
        fs.readFile(req.url.substring(1,), getMime(type)[0], (err, content) => {
            res.writeHead(200, {
              'Content-Type': getMime(type)[1],
              'Access-Control-Allow-Credentials':true,
              'Access-Control-Allow-Origin':'http://api.xmanv.com'
            })
            if(getMime(type)[0]=='binary'){
              res.write(content, 'binary');
              res.end()
            }else{
              res.end(content)
            }
        })
    }else if(req.url.lastIndexOf("/download")>-1 ) {
      console.log('=====================/download')
      res.setHeader('Content-Disposition', 'attachment;filename=' + fileName);
      const filePath = path.resolve(__dirname, fileName);
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      res.end()
    } else if(req.url.lastIndexOf("/MobileProvision")>-1) {
      console.log('=====================/MobileProvision')
      res.setHeader('Content-Disposition', 'attachment;filename=' + mobileprovision);
      res.setHeader('content-type', 'application/octet-stream');
      const filePath = path.resolve(__dirname, mobileprovision);
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
      res.end()
    }
    else {
      fs.readFile("index.html", 'utf-8', (err, content) => {
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Access-Control-Allow-Credentials':true,
          })
          res.end(content)
      })
    }
  }
 
}).listen(httpPort)

console.log('执行结束')


function getMime(extname){
    if(extname=="html"){
      return ["utf-8","text/html"];
    }else if(extname=="css"){
      return ["utf-8","text/css"];
    }
    else if(extname=="jpg"){
      return ["binary","image/jpeg"];
    }
    else if(extname=="svg"){
      return ["binary","image/svg+xml"];
    }
    else if(extname=="png"){
      return ["binary","image/png"];
    }
    else if(extname=="ico"){
      return ["binary","image/x-icon"];
    }else if(extname=="woff"){
      return ["binary","application/font-woff"];
    }else if(extname=="woff2"){
      return ["binary","application/font-woff2"];
    }else {
      return ["utf-8","text/html"];
    }
    
 }