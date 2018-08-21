function setTab(name,cursel,n,rid){   
 for(i=1;i<=n;i++){   
  var menu=document.getElementById(name+i);   
  var con=document.getElementById("con_"+name+"_"+i); 
  if(rid){
	var release=document.getElementById("f_"+name); 
  }
  menu.className=i==cursel?name:"";   
  con.style.display=i==cursel?"block":"none";
  if(rid){
  release.innerHTML="<a href='member/my.php@mid="+rid+"&action=add'>点击发布信息</a>";
  }
 }   
}
function dh(moreshow,num,id){
	var dh=document.getElementById(moreshow+"_"+id);
	var cat_more=document.getElementById('cat_more_'+id);
	if(dh.style.display != "block"){
		dh.style.display = "block";
		if(num==1){
			cat_more.innerHTML = '隐藏显示分类';
			cat_more.className='cat_more_2';
		}else{
			cat_more.innerHTML = '隐藏';
			cat_more.className='mj_c_h';
		}
	}else{
		dh.style.display = "none";
		if(num==1){
			cat_more.innerHTML = '查看更多分类';
			cat_more.className='cat_more_1';
		}else{
			cat_more.innerHTML = '更多';
			cat_more.className='mj_c_m';
		}
	}
}

function mjmbModule(i, o) {
	Dd('destoon_search').action = DTPath+'api/search.php';
	Dd('destoon_moduleid').value = i;
	searchid = i;
	var lis = Dd('search_module').getElementsByTagName('li');
	for(var i=0;i<lis.length;i++) {
		lis[i].className = lis[i] == o ? 'head_search_on' : '';
	}
}
function mjmbModule_new(i, o) {
	Dd('destoon_search').action = DTPath+'api/search.php';
	Dd('destoon_moduleid').value = i;
	searchid = i;
	var lis = Dd('search_module').getElementsByTagName('a');
	for(var i=0;i<lis.length;i++) {
		lis[i].className = lis[i] == o ? 'current' : '';
	}
}
function mjmbModule_i(i, o) {
	Dd('destoon_searchi').action = DTPath+'api/search.php';
	Dd('destoon_moduleidi').value = i;
	searchid = i;
	var lis = Dd('search_modulei').getElementsByTagName('a');
	for(var i=0;i<lis.length;i++) {
		lis[i].className = lis[i] == o ? 'current' : '';
	}
}
//mj
function mjmbModule_2016(value) {
	Dd('destoon_search').action = DTPath+'api/search.php';
	Dd('destoon_moduleid').value = value;
	searchid = value;
	
}
function mjmbModule_on(i, o) {
	
	Dd('destoon_search_i').action = DTPath+'api/search.php';
	Dd('destoon_moduleid_i').value = i;
	searchid = i;
	var lis = Dd('search_module_i').getElementsByTagName('span');
	for(var i=0;i<lis.length;i++) {
		lis[i].className = lis[i] == o ? 'on' : '';
	}
}
function count_hits(itemid,moduleid){
	makeRequest('action=count_hits&itemid='+itemid+'&mid='+moduleid, AJPath, '_STip');
}

function mjmbModule_new1(i, o) {
	Dd('destoon_search').action = DTPath+'api/search.php';
	Dd('destoon_moduleid').value = i;
	searchid = i;
	var lis = Dd('search_module').getElementsByTagName('span');
	for(var i=0;i<lis.length;i++) {
		lis[i].className = lis[i] == o ? 'on' : '';
	}
}
function mjmbModule_new2(o) {
	Dd('destoon_search1').action = DTPath+'api/search.php';
	Dd('destoon_moduleid1').value = $(o).val();
}

function buy(){
	var f,p;
	f = 'buy_title';
	if(Dd(f).value == '') {
		$(".fast-buy-form ").removeClass("hide");
		alert("请填写求购产品");
		Df(f);
		return false;
	}
	f='user_name';
	if(Dd(f).value == '') {
		$(".fast-buy-form ").removeClass("hide");
		alert("请填写姓名");
		Df(f);
		return false;
	}
	f='mobile';
	if(Dd(f).value == '') {
		$(".fast-buy-form ").removeClass("hide");
		alert("请填写电话");
		Df(f);
		return false;
	}
	makeRequest('buy_title='+Dd('buy_title').value+'&user_name='+Dd('user_name').value+'&mobile='+Dd('mobile').value, 'buy/index_add.php', '_buy');
}
function _buy() {
	if(xmlHttp.readyState==4 && xmlHttp.status==200) {
		if(xmlHttp.responseText == 1) {
			alert("求购发布成功!");
			location.reload();
		}else if(xmlHttp.responseText == 3){
			alert("求购过于频换!");
			location.reload();
		}else {
			alert('未知错误，请重试');
		}
	}
}
