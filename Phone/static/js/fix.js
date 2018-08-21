var _ua = navigator.userAgent.toLowerCase();
var _os = '';
if(_ua.indexOf('iphone')!=-1 || _ua.indexOf('ipod')!=-1 || _ua.indexOf('ipad')!=-1) _os = 'ios';
var _bs = Dbrowser;
document.write('<style type="text/css">');
if(_os == 'ios' && (_bs == 'app' || _bs == 'b2b')) {/*修复IOS APP顶部状态栏*/
document.write('.head-bar{border-top:#F7F7F7 20px solid;}');
document.write('.head-bar-fix{height:68px;background:#F7F7F7;}');
}
if(_os == 'ios' && (_ua.indexOf('os 8_') != -1 || _ua.indexOf('os 9_') != -1)) {/*IOS8+ 细线*/
document.write('.bd-b,.head-bar,.list-set,.list-img,.list-txt li,.list-msg li,.content,.info,.user-info {border-bottom:#A7A7AA 0.5px solid;}');
document.write('.bd-t,.foot-bar,.list-set div,.list-set,.list-txt,.user-info {border-top:#A7A7AA 0.5px solid;}');
document.write('.bd-r {border-right:#A7A7AA 0.5px solid;}');
document.write('.bd-l {border-left:#A7A7AA 0.5px solid;}');
}
document.write('</style>');
if(_os == 'ios' && _bs != 'screen' && navigator.standalone) {/*IOS 主屏打开*/
document.write('<script type="text/javascript" src="mobile.php@action=screen"></sc'+'ript>');
}



function m11(){
document.writeln('<script async src="../https@pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
document.writeln('<!-- mobile-top -->');
document.writeln('<ins class="adsbygoogle"');
document.writeln('     style="display:block"');
document.writeln('     data-ad-client="ca-pub-5657021642595081"');
document.writeln('     data-ad-slot="6815180179"');
document.writeln('     data-ad-format="auto"></ins>');
document.writeln('<script>');
document.writeln('(adsbygoogle = window.adsbygoogle || []).push({});');
document.writeln('</script>');
}

function m1(){}

function m22(){
document.writeln('<script async src="../https@pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');
document.writeln('<!-- mobile-bottom -->');
document.writeln('<ins class="adsbygoogle"');
document.writeln('     style="display:block"');
document.writeln('     data-ad-client="ca-pub-5657021642595081"');
document.writeln('     data-ad-slot="9768646576"');
document.writeln('     data-ad-format="auto"></ins>');
document.writeln('<script>');
document.writeln('(adsbygoogle = window.adsbygoogle || []).push({});');
document.writeln('</script>');
}

function m2(){}