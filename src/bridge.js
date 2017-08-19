export default function(url){
    //var url = 'jsbridge://doAction?title=分享标题&desc=分享描述&link=http%3A%2F%2Fwww.baidu.com';
    var iframe = document.createElement('iframe');
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);
    setTimeout(function() {
        iframe.remove();
    }, 100);
}