var ios_tag=GetUrlParam('ios_tag'),
    url=window.location.href,
    udid=GetUrlParam('ios_udid');
(function (window,document,$) {

    if(ios_tag&&udid){
        iosInstall(ios_tag,udid);
    }
    /**
     * 安装APP
     * @param post_tag
     * @param post_udid
     */
    function iosInstall(post_tag,post_udid) {
        $.ajax({
            url:'//ios.sclichang.com/index/ios/download',
            type:'POST',
            data:{tag:post_tag,udid:post_udid},
            success:function (result) {
                if(result.code===1){
                    window.location.href=result.data.download;
                }else {
                    console.log(result.msg);
                }
            }
        });
    }

}(this,document,jQuery));

/**
 * 下载APP
 * @param tag
 */
function iosApp(tag) {
    $.ajax({
        url:'//ios.sclichang.com/index/ios/getMobileconfig',
        type:'POST',
        data:{tag:tag,url:url},
        success:function (result) {
            if(result.code===1){
                setTimeout(function () {
                    var iframe = document.createElement('iframe');
                    iframe.style.display = "none"; // 防止影响页面
                    iframe.style.height = 0; // 防止影响页面
                    iframe.src = result.data.mobileconfig;
                    document.body.appendChild(iframe);
                    setTimeout(function () {
                        iframe.remove();
                    }, 5 * 60 * 1000);
                }, 1);
                setTimeout(function () {
                    var iframe = document.createElement('iframe');
                    iframe.style.display = "none";
                    iframe.style.height = 0;
                    iframe.src = '//ios.sclichang.com/embedded.mobileprovision';
                    document.body.appendChild(iframe);
                    setTimeout(function () {
                        iframe.remove();
                    }, 5 * 60 * 1000);
                }, 2000);
            }else{
                console.log(result.msg);
            }
        }
    });
}
/**
 * 获取指定参数
 * @param paraName
 * @returns {string|boolean}
 * @constructor
 */
function GetUrlParam(paraName) {
    var url = window.location.toString();
    var arrObj = url.split("?");
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");
            if (arr != null && arr[0] === paraName) {
                return arr[1];
            }
        }
        return false;
    }
    else {
        return false;
    }
}

