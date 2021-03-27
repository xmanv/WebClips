<template>
  <div id="app">
    <div class="PC" style="display: none" id="PC">
      <div class="container" style="display: block">
        <strong>手机用户请扫描二维码下载</strong>
        <div><img class="pc-logo" src="./resource/Icon.png" /></div>
        <p>Xmanv漫威</p>
        <div class="qrcode" id="qrcode"></div>
      </div>
    </div>
    <section class="mailFn" id="ANDROID" style="display: none">
      <span><img src="./resource/appback.jpg" /></span>
      <a id="callIosBtn2" :href="androidDownload" class="callAppBtn">立即下载</a>
      <a href="https://www.xmanv.com/"  class="jianchi" id="closeCover">访问网页版</a >
    </section>
    <div class="mobile" id="IOS"  >
      <div class="second">
        <img alt="Xmanv漫威" class="img" src="./resource/Icon.png" />
        <div class="text">
          <p>Xmanv漫威</p>
          <p></p>
          <button class="btn" @click="getios">
            {{ mark ? "获取" : "获取中..." }}
          </button>
          <div id="myProgress" style="display: none">
            <div id="myBar">0%</div>
          </div>
        </div>
      </div>
      <div class="third">
        <div class="thirdOne">
          <div class="thirdOneDiv">
            <span class="starNum">5</span>
            <div class="starImg">
              <img
                alt=""
                class="starImgOne"
                src="./resource/timg.jpg"
                style=""
              />
              <img
                alt=""
                class="starImgTwo"
                src="./resource/timg.jpg"
                style=""
              />
              <img
                alt=""
                class="starImgThree"
                src="./resource/timg.jpg"
                style=""
              />
              <img
                alt=""
                class="starImgFour"
                src="./resource/timg.jpg"
                style=""
              />
              <img
                alt=""
                class="starImgFive"
                src="./resource/timg.jpg"
                style=""
              />
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
          <img alt="Xmanv漫威" src="./resource/IMG_3246.png" />
        </div>
        <div class="fourFooter">
          <div class="iphone">
            <img alt="" src="./resource/iphoen.png" />
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
          <p>1.5MB</p>
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
          <p>
            免责声明：本网站仅为开发者提供App的下载和安装托管，App内的内容和运
            营相关事项由App开发者负责，与本网站无关。
          </p>
        </div>
      </div>
      
    </div>
    <div class="mask maks-img" id="safari" style="display: none">
      <img alt="" src="./resource/safari.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mark: true,
      androidDownload:'https://www.xmanv.com/resource/android.apk',
      appDownload:"https://app.xmanv.com"
    };
  },
  methods: {
    getios() {
      let that = this;
      if (this.mark) {
        this.mark = false;
        setTimeout(function () {
          var iframe = document.createElement("iframe");
          iframe.style.display = "none"; // 防止影响页面
          iframe.style.height = 0; // 防止影响页面
          iframe.src = "https://ios.xmanv.com/download";
          document.body.appendChild(iframe);
          setTimeout(function () {
            iframe.remove();
          }, 5 * 60 * 1000);
        }, 1000);
        setTimeout(function () {
          var iframe = document.createElement("iframe");
          iframe.style.display = "none"; // 防止影响页面
          iframe.style.height = 0; // 防止影响页面
          iframe.src = "https://ios.xmanv.com/MobileProvision";
          document.body.appendChild(iframe);
          that.mark = true;
          setTimeout(function () {
            iframe.remove();
          }, 5 * 60 * 1000);
        }, 3500);
      }
    },
  },
  mounted() {
    let that=this;
    this.$nextTick(() => {
      var browser = {
        versions: (function () {
          var u = navigator.userAgent,
            app = navigator.appVersion;
          return {
            //移动终端浏览器版本信息
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
            isSafari:
              u.indexOf("AppleWebKit") > -1 &&
              u.indexOf("Mobile") > -1 &&
              u.indexOf("Safari/604.1") > -1 &&
              !(u.indexOf("MQQBrowser") > -1), //是否是safari浏览器打开
          };
        })(),
        language: (
          navigator.browserLanguage || navigator.language
        ).toLowerCase(),
      };
      // 获取浏览器信息END
      $("#qrcode").qrcode({
        width: 300,
        height: 300,
        text: that.appDownload,
      });
      if (browser.versions.mobile) {
        var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        if ( ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
          document.getElementById("safari").style.display = "block";
        } else {
          if (browser.versions.android) {
            document.getElementById("PC").style.display = "none";
            document.getElementById("ANDROID").style.display = "block";
            document.getElementById("IOS").style.display = "none";
            // location.href = that.androidDownload;
          }
          if (browser.versions.ios) {
            document.getElementById("PC").style.display = "none";
            document.getElementById("ANDROID").style.display = "none";
            document.getElementById("IOS").style.display = "block";
            setTimeout(function () {
              var iframe = document.createElement("iframe");
              iframe.style.display = "none"; // 防止影响页面
              iframe.style.height = 0; // 防止影响页面
              iframe.src = "https://ios.xmanv.com/download";
              document.body.appendChild(iframe);
              setTimeout(function () {
                iframe.remove();
              }, 5 * 60 * 1000);
            }, 1000);
            setTimeout(function () {
              var iframe = document.createElement("iframe");
              iframe.style.display = "none"; // 防止影响页面
              iframe.style.height = 0; // 防止影响页面
              iframe.src = "https://ios.xmanv.com/MobileProvision";
              document.body.appendChild(iframe);
              setTimeout(function () {
                iframe.remove();
              }, 5 * 60 * 1000);
            }, 3500);
          }
        }
      } else {
        document.getElementById("PC").style.display = "block";
        document.getElementById("ANDROID").style.display = "none";
        document.getElementById("IOS").style.display = "none";
        // setTimeout(function () {
        //       	location.href=androidDownload;
        // }, 1500);
      }
    });
  },
};
</script>

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
  /* background-image: url('./resource/bg@2x.png'); */
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
  /* background-image: url('./resource/fuzhi@2x.png'); */
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


.mailFn {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2000;
    width: 100%;
    height: 100%;
    font: 18px/26px 'Microsoft Yahei';
    color: #797979;
    text-align: center;
    background: #fff;
}
.mailFn span img{
  height: 100%;
  width: 100%;
}
.callAppBtn {
    position: absolute;
    bottom: 24%;
    left: 15%;
    font-size: 18px;
    color: #ffffff;
    background: #eb3d18;
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-radius: 52px;
}
.jianchi {
    position: absolute;
    bottom: 10%;
    left: 30%;
    font-size: 18px;
    color: rgba(172,172,172,1);
    width: 40%;
    font-size: 13px;
    text-decoration: underline;
}
</style>
