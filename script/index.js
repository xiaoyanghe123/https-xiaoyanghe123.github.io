
var _p = 0;
function AutoTab() {
	var c;
	Dd('trades').onmouseover = function() {_p = 1;} 
	Dd('trades').onmouseout = function() {_p = 0;}
	if(_p) return;
	for(var i = 1; i < 7; i++) { if(Dd('trade_t_'+i).className == 'tab_2') {c = i;} }
	c++; 
	if(c > 6) c = 1;
	Tb(c, 6, 'trade', 'tab');
}
if(Dd('trades') != null) window.setInterval('AutoTab()',5000);
function ipad_tip_close() {
	Dh('ipad_tips');
	set_cookie('ipad_tips', 1);
}
